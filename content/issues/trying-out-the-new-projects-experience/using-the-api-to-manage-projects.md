---
title: Using the API to manage projects (beta)
intro: You can use the GraphQL API to find information about projects and to update projects.
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

This article demonstrates how to use the GraphQL API to manage a project.

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

## Authentication

{% include tool-switcher %}

{% curl %}

In all of the following cURL examples, replace `TOKEN` with a token that has the `read:org` scope (for queries) or `write:org` scope (for queries and mutations). For more information about creating a token, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endcurl %}

{% cli %}

{% data reusables.cli.download-cli %}

Before running {% data variables.product.prodname_cli %} commands, you must authenticate by running `gh auth login` and providing an authentication token that has the `read:org` scope (for queries) or `write:org` scope (for queries and mutations). During the beta, you will not be able to authenticate using a web browser. For more information on command line authentication, see "[gh auth login](https://cli.github.com/manual/gh_auth_login)." For more information about creating a token, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endcli %}

{% cli %}

## Using variables

In all of the following examples, you can use variables to simplify your scripts. Use `-F` to pass a variable that is a number, Boolean, or null. Use `-f` for other variables. For example,

```shell
my_org="octo-org"
my_num=5
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

For more information, see "[Forming calls with GraphQL](/graphql/guides/forming-calls-with-graphql#working-with-variables)."

{% endcli %}

## Finding information about projects

Use queries to get data about projects. For more information, see "[About queries](/graphql/guides/forming-calls-with-graphql#about-queries)."

### Finding the node ID of a project

To update your project through the API, you will need to know the node ID of the project.

You can find the node ID of a project if you know the organization name and project number. Replace `ORGANIZATION` with the name of your organization. For example, `octo-org`. Replace `NUMBER` with your project number. To find the project number, look at the project URL. For example, `https://github.com/orgs/octo-org/projects/5` has a project number of 5.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>"){
      projectNext(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

You can also find the node ID of all projects in your organization. The following example will return the node ID and title of the first 20 projects in an organization. Replace `ORGANIZATION` with the name of your organization. For example, `octo-org`.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    organization(login: "<em>ORGANIZATION</em>") {
      projectsNext(first: 20) {
        nodes {
          id
          title
        }
      }
    }
  }'
```
{% endcli %}

### Finding the node ID of a field

To update the value of a field, you will need to know the node ID of the field. Additionally, for single select fields, you will need to know the ID of the options.

The following example will return the ID, name, and settings for the first 20 fields in a project. Replace `PROJECT_ID` with the node ID of your project.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        fields(first: 20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }'
```
{% endcli %}

The response will look similar to the following example:

```json
{
  "data": {
    "node": {
      "fields": {
        "nodes": [
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE1OQ==",
            "name": "Title",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MA==",
            "name": "Assignees",
            "settings": "null"
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQxMzE2MQ==",
            "name": "Status",
            "settings": "{\"options\":[{\"id\":\"f75ad846\",\"name\":\"Todo\",\"name_html\":\"Todo\"},{\"id\":\"47fc9ee4\",\"name\":\"In Progress\",\"name_html\":\"In Progress\"},{\"id\":\"98236657\",\"name\":\"Done\",\"name_html\":\"Done\"}]}"
          }
        ]
      }
    }
  }
}
```

Each field has an ID. Additionally, each option in a single select field has an ID.

### Finding information about items in a project

You can query the API to find information about items in your project.

The following example will return the title and ID for the first 20 items in a project. For each item, it will also return the value and name for the first 8 fields in the project. If the item is an issue or pull request, it will return the login of the first 10 assignees. Replace `PROJECT_ID` with the node ID of your project.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query{
    node(id: "<em>PROJECT_ID</em>") {
      ... on ProjectNext {
        items(first: 20) {
          nodes{
            title
            id
            fieldValues(first: 8) {
              nodes{
                value
                projectField{
                  name
                }
              }
            }
            content{
              ...on Issue {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
              ...on PullRequest {
                assignees(first: 10) {
                  nodes{
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }'
```
{% endcli %}

A project may contain items that a user does not have permission to view. In this case, the response will include redacted item.

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## Updating projects

Use mutations to update projects. For more information, see "[About mutations](/graphql/guides/forming-calls-with-graphql#about-mutations)."

{% note %}

**Note:** You cannot add and update an item in the same call. You must use `addProjectNextItem` to add the item and then use `updateProjectNextItemField` to update the item.

{% endnote %}

### Adding an item to a project

The following example will add an issue or pull request to your project. Replace `PROJECT_ID` with the node ID of your project. Replace `CONTENT_ID` with the node ID of the issue or pull request that you want to add.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    addProjectNextItem(input: {projectId: "<em>PROJECT_ID</em>" contentId: "<em>CONTENT_ID</em>"}) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

The response will contain the node ID of the newly created item.

```json
{
  "data": {
    "addProjectNextItem": {
      "projectNextItem": {
        "id": "MDE1OlByb2plY3ROZXh0SXRlbTM0MjEz"
      }
    }
  }
}
```

If you try add an item that already exists, the existing item ID is returned instead.

### Updating a custom, non-single select field

The following example will update a date field. Replace `PROJECT_ID` with the node ID of your project. Replace `ITEM_ID` with the node ID of the item you want to update. Replace `FIELD_ID` with the ID of the field that you want to update.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "2021-5-11"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

{% note %}

**Note:** You cannot use `updateProjectNextItemField` to change `Assignees`, `Labels`, `Milestone`, or `Repository` because these fields are properties of pull requests and issues, not of project items. Instead, you must use the [addAssigneesToAssignable](/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable](/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable](/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable](/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue](/graphql/reference/mutations#updateissue), [updatePullRequest](/graphql/reference/mutations#updatepullrequest), or [transferIssue](/graphql/reference/mutations#transferissue) mutations.

{% endnote %}

### Updating a single-select field

The following example will update a date field.
- `PROJECT_ID` - Replace this with the node ID of your project.
- `ITEM_ID` - Replace this with the node ID of the item you want to update.
- `FIELD_ID` -  Replace this with the ID of the field that you want to update.
- `OPTION_ID` - Replace this with the ID of the desired value.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>OPTION_ID</em>"
      }
    ) {
      projectNextItem {
        id
      }
    }
  }'
```
{% endcli %}

### Deleting an item from a project

The following example will delete an item from a project. Replace `PROJECT_ID` with the node ID of your project. Replace `ITEM_ID` with the node ID of the item you want to delete.

{% include tool-switcher %}

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --header 'GraphQL-Features: projects_next_graphql' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation {
    deleteProjectNextItem(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
      }
    ) {
      deletedItemId
    }
  }'
```
{% endcli %}

## Reference

### Objects

#### ProjectNext

- [Closable](/graphql/reference/interfaces#closable)
- [Node](/graphql/reference/interfaces#node)
- [Updatable](/graphql/reference/interfaces#updatable)

**Fields**

Name | Description
--- | ---
`closed` (`Boolean!`) | `true` if the project is closed.
`closedAt` (`DateTime!`) | Identifies the date and time when the object was closed.
`createdAt` (`DateTime!`) | Identifies the date and time when the object was created.
`creator` (`Actor`) | The actor who originally created the project.
`databaseId` (`Int`) | Identifies the primary key from the database.
`description` (`String`) | The project's description.
`fields` (`[ProjectNextField]!`) | List of fields in the project.<br><br>**Arguments**<br>`after` (`String`): Returns the elements in the list that come after the specified cursor.<br>`before` (`String`): Returns the elements in the list that come before the specified cursor.<br>`first` (`Int`): Returns the first *n* elements from the list.<br>`last` (`Int`): Returns the last *n* elements from the list.
`items` (`[ProjectNextItem]`) | List of items in the project.<br><br>**Arguments**<br>`after` (`String`): Returns the elements in the list that come after the specified cursor.<br>`before` (`String`): Returns the elements in the list that come before the specified cursor.<br>`first` (`Int`): Returns the first *n* elements from the list.<br>`last` (`Int`): Returns the last *n* elements from the list.
`number` (`Int!`) | The project's number.
`owner` (`ProjectNextOwner!`) | The project's owner. Currently limited to organizations.
`title` (`String!`) | The project's name.
`updatedAt` (`DateTime!`) | Identifies the date and time when the object was last updated.
`viewerCanUpdate` (`Boolean!`) | Check if the current viewer can update this object.

#### ProjectNextConnection

The connection type for ProjectNext.

Name | Description
--- | ---
`edges` ([ProjectNextEdge]) | A list of edges.
`nodes` ([ProjectNext]) | A list of nodes.
`pageInfo` (PageInfo!) | Information to aid in pagination.
`totalCount` (Int!) | Identifies the total count of items in the connection.

#### ProjectNextEdge

Name | Description
--- | ---
`cursor` (String!) | A cursor for use in pagination.
`node` (ProjectCard) | The item at the end of the edge.

#### ProjectNextField

A field inside a project.

Name | Description
--- | ---
`createdAt` (`DateTime!`) | Identifies the date and time when the object was created.
`name` (`String!`) | The project field's name.
`project` (`ProjectNext!`) | The project that contains this field.
`settings` (`String`) | String representation of project field settings.
`updatedAt` (`DateTime!`) | Identifies the date and time when the object was last updated.

#### ProjectNextFieldConnection

The connection type for ProjectNextField.

Name | Description
--- | ---
`edges` ([ProjectNextFieldEdge]) | A list of edges.
`nodes` ([ProjectNextField]) | A list of nodes.
`pageInfo` (PageInfo!) | Information to aid in pagination.
`totalCount` (Int!) | Identifies the total count of items in the connection.

#### ProjectNextFieldEdge

Name | Description
--- | ---
`cursor` (String!) | A cursor for use in pagination.
`node` (ProjectCard) | The item at the end of the edge.

#### ProjectNextItem

- [Node](/graphql/reference/interfaces#node)

An item in a `ProjectNext`.

Name | Description
--- | ---
`content` (`ProjectNextItemContent`) | The content of the referenced issue or pull request.
`createdAt` (DateTime!) | Identifies the date and time when the object was created.
`creator` (`Actor`) | The actor who created this item.
`databaseId` (`Int`) | Identifies the primary key from the database.
`fieldValues` (`[ProjectNextItemFieldValue]!`) | List of field values for the item.<br><br>**Arguments**<br>`after` (`String`): Returns the elements in the list that come after the specified cursor.<br>`before` (`String`): Returns the elements in the list that come before the specified cursor.<br>`first` (`Int`): Returns the first *n* elements from the list.<br>`last` (`Int`): Returns the last *n* elements from the list.
`project` (`ProjectNext!`) | The project that contains this item.
`title` (`String!`) | Title of the item.
`updatedAt` (DateTime!) | Identifies the date and time when the object was last updated.

#### ProjectNextItemContent

Content associated with a `ProjectNextItem`.

**Types:**

- `issue` - Reference to an issue
- `pull request` - Reference to a pull request.

#### ProjectNextItemConnection

The connection type for ProjectNextItem.

Name | Description
--- | ---
`edges` ([`ProjectNextItemEdge`]) | A list of edges.
`nodes` ([`ProjectNextItem`]) | A list of nodes.
`pageInfo` (`PageInfo!`) | Information to aid in pagination.
`totalCount` (`Int!`) | Identifies the total count of items in the connection.

#### ProjectNextItemEdge

Name | Description
--- | ---
`cursor` (`String!`) | A cursor for use in pagination.
`node` (`ProjectCard`) | The item at the end of the edge.

#### ProjectNextItemFieldValue

- [Node](/graphql/reference/interfaces#node)

A value of a field in an item in a `ProjectNext`.

Name | Description
--- | ---
`createdAt` (`DateTime!`) | Identifies the date and time when the object was created.
`creator` (`Actor`) | The actor who created this item.
`databaseId` (`Int`) | Identifies the primary key from the database.
`projectField` (`ProjectNextField!`) | The project field that contains this value.
`projectItem` (`ProjectNextItem!`) | The project item that contains this value.
`updatedAt` (`DateTime!`) | Identifies the date and time when the object was last updated.
`value` | Value of the field.

#### ProjectNextItemFieldValueConnection

The connection type for ProjectNextItemFieldValue.

Name | Description
--- | ---
`edges` ([`ProjectNextItemFieldValueEdge`]) | A list of edges.
`nodes` ([`ProjectNextItemFieldValue`]) | A list of nodes.
`pageInfo` (`PageInfo!`) | Information to aid in pagination.
`totalCount` (`Int!`) | Identifies the total count of items in the connection.

#### ProjectNextItemEdge

An edge in a connection.

Name | Description
--- | ---
`cursor` (`String!`) | A cursor for use in pagination.
`node` (`ProjectCard`) | The item at the end of the edge.

### Interfaces

#### ProjectNextOwner

Represents an owner of a project.

**Implemented by**

- `Organization`

**Fields**

Name | Description
--- | ---
`projectNext` (`ProjectNext`) | Find project by number.<br><br>**Arguments**<br>`number` (`Int!`): The project number to find.
`projectsNext` (`ProjectNextConnection!`) | A list of project next items under the owner.<br><br>**Arguments**<br>`after` (`String`): Returns the elements in the list that come after the specified cursor.<br>`before` (`String`): Returns the elements in the list that come before the specified cursor.<br>`first` (`Int`): Returns the first *n* elements from the list.<br>`last` (`Int`): Returns the last *n* elements from the list.

### Mutations

#### addProjectNextItem

Adds an existing item (Issue or PullRequest) to a project.

**Input fields**

- `input`(`AddProjectNextItemInput!`)

**Return fields**

Name | Description
--- | ---
`clientMutationId` (`String`) | A unique identifier for the client performing the mutation.
`projectNextItem` (`ProjectNextItem`) | The item added to the project.

#### updateProjectNextItemField

Updates a field of an item from a project.

**Input fields**

- `input`(`UpdateProjectNextItemFieldInput!`)

**Return fields**

Name | Description
--- | ---
`clientMutationId` (`String`) | A unique identifier for the client performing the mutation.
`projectNextItem` (`ProjectNextItem`) | The item added to the project.

#### deleteProjectNextItem

Deletes an item from a project.

**Input fields**

- `input`(`DeleteProjectNextItemInput!`)

**Return fields**

Name | Description
--- | ---
`clientMutationId` (`String`) | A unique identifier for the client performing the mutation.
`deletedItemId` (`ID`) | The ID of the deleted item.

### Input Objects

#### DeleteProjectNextItemInput

Autogenerated input type of AddProjectNextItem.

**Input fields**

Name | Description
--- | ---
`clientMutationId` (`String`) | A unique identifier for the client performing the mutation.
`contentId` (`ID!`) | The ID of the item (Issue or PullRequest) to add.
`projectId` (`ID!`) | The ID of the Project to add the item to.

#### UpdateProjectNextItemFieldInput

Autogenerated input type of UpdateProjectNextItemField.

**Input fields**

Name | Description
--- | ---
`clientMutationId` (`String`) | A unique identifier for the client performing the mutation.
`fieldId` (`ID!`) | The ID of the field to be updated. Currently supports custom fields and status.
`itemId` (`ID!`) | The ID of the item to be updated.
`projectId` (`ID!`) | The ID of the Project.
`value` (`String!`) | The value which will be set on the field.

#### DeleteProjectNextItemInput

Autogenerated input type of DeleteProjectNextItem.

**Input fields**

Name | Description
--- | ---
`clientMutationId` (`String`) | A unique identifier for the client performing the mutation.
`itemId` (`ID!`) | The ID of the item to be removed.
`projectId` (`ID!`) | The ID of the Project from which the item should be removed.
