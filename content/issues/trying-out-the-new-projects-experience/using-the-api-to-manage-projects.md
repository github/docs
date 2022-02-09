---
title: Using the API to manage projects (beta)
intro: You can use the GraphQL API to find information about projects and to update projects.
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Projects
---

This article demonstrates how to use the GraphQL API to manage a project. For more information about how to use the API in a {% data variables.product.prodname_actions %} workflow, see "[Automating projects (beta)](/issues/trying-out-the-new-projects-experience/automating-projects)." For a full list of the available data types, see "[Reference](/graphql/reference)."

{% data reusables.projects.projects-beta %}

## Authentication

{% curl %}

In all of the following cURL examples, replace `TOKEN` with a token that has the `read:org` scope (for queries) or `write:org` scope (for queries and mutations). The token can be a personal access token for a user or an installation access token for a {% data variables.product.prodname_github_app %}. For more information about creating a personal access token, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)." For more information about creating an installation access token for a {% data variables.product.prodname_github_app %}, see "[Authenticating with {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-a-github-app)."

{% endcurl %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before running {% data variables.product.prodname_cli %} commands, you must authenticate by running `gh auth login --scopes "write:org"`. If you only need to read, but not edit, projects, you can omit the `--scopes` argument. For more information on command line authentication, see "[gh auth login](https://cli.github.com/manual/gh_auth_login)."

{% endcli %}

{% cli %}

## Using variables

In all of the following examples, you can use variables to simplify your scripts. Use `-F` to pass a variable that is a number, Boolean, or null. Use `-f` for other variables. For example,

```shell
my_org="octo-org"
my_num=5
gh api graphql -f query='
  query($organization: String! $number: Int!){
    organization(login: $organization){
      projectNext(number: $number) {
        id
      }
    }
  }' -f organization=$my_org -F number=$my_num
```

For more information, see "[Forming calls with GraphQL]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#working-with-variables)."

{% endcli %}

## Finding information about projects

Use queries to get data about projects. For more information, see "[About queries]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-queries)."

### Finding the node ID of an organization project

To update your project through the API, you will need to know the node ID of the project.

You can find the node ID of an organization project if you know the organization name and project number. Replace `ORGANIZATION` with the name of your organization. For example, `octo-org`. Replace `NUMBER` with the project number. To find the project number, look at the project URL. For example, `https://github.com/orgs/octo-org/projects/5` has a project number of 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{organization(login: \"<em>ORGANIZATION</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{organization(login: \"<em>ORGANIZATION</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

### Finding the node ID of a user project

To update your project through the API, you will need to know the node ID of the project.

You can find the node ID of a user project if you know the project number. Replace `USER` with your user name. For example, `octocat`. Replace `NUMBER` with your project number. To find the project number, look at the project URL. For example, `https://github.com/users/octocat/projects/5` has a project number of 5.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{user(login: \"<em>USER</em>\") {projectNext(number: <em>NUMBER</em>){id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>"){
      projectNext(number: <em>NUMBER</em>) {
        id
      }
    }
  }'
```
{% endcli %}

You can also find the node ID for all of your projects. The following example will return the node ID and title of your first 20 projects. Replace `USER` with your username. For example, `octocat`.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"{user(login: \"<em>USER</em>\") {projectsNext(first: 20) {nodes {id title}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  query{
    user(login: "<em>USER</em>") {
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

To update the value of a field, you will need to know the node ID of the field. Additionally, you will need to know the ID of the options for single select fields and the ID of the iterations for iteration fields.

The following example will return the ID, name, and settings for the first 20 fields in a project. Replace `PROJECT_ID` with the node ID of your project.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {fields(first: 20) {nodes {id name settings}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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
          },
          {
            "id": "MDE2OlByb2plY3ROZXh0RmllbGQ3NTEwNw==",
            "name": "Iteration",
            "settings": "{\"configuration\":{\"duration\":7,\"start_day\":5,\"iterations\":[{\"id\":\"c4d8e84d\",\"title\":\"Iteration 2\",\"duration\":7,\"start_date\":\"2021-10-08\",\"title_html\":\"Iteration 2\"},{\"id\":\"fafa9c9f\",\"title\":\"Iteration 3\",\"duration\":7,\"start_date\":\"2021-10-15\",\"title_html\":\"Iteration 3\"}],\"completed_iterations\":[{\"id\":\"fa62c118\",\"title\":\"Iteration 1\",\"duration\":7,\"start_date\":\"2021-10-01\",\"title_html\":\"Iteration 1\"}]}}"
          }
        ]
      }
    }
  }
}
```

Each field has an ID. Additionally, single select fields and iteration fields have a `settings` value. In the single select settings, you can find the ID of each option for the single select. In the iteration settings, you can find the duration of the iteration, the start day of the iteration (from 1 for Monday to 7 for Sunday), the list of incomplete iterations, and the list of completed iterations. For each iteration in the lists of iterations, you can find the ID, title, duration, and start date of the iteration.

### Finding information about items in a project

You can query the API to find information about items in your project.

{% note %}

**Note**: The API will not return information about draft issues.

{% endnote %}

The following example will return the title and ID for the first 20 items in a project. For each item, it will also return the value and name for the first 8 fields in the project. If the item is an issue or pull request, it will return the login of the first 10 assignees. Replace `PROJECT_ID` with the node ID of your project.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"query{node(id: \"<em>PROJECT_ID</em>\") {... on ProjectNext {items(first: 20) {nodes{title id fieldValues(first: 8) {nodes{value projectField{name}}} content{...on Issue {assignees(first: 10) {nodes{login}}} ...on PullRequest {assignees(first: 10) {nodes{login}}}}}}}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

A project may contain items that a user does not have permission to view. In this case, the response will include a redacted item.

```shell
{
  "node": {
  "title": "You can't see this item",
  ...
  }
}
```

## Updating projects

Use mutations to update projects. For more information, see "[About mutations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql#about-mutations)."

{% note %}

**Note:** You cannot add and update an item in the same call. You must use `addProjectNextItem` to add the item and then use `updateProjectNextItemField` to update the item.

{% endnote %}

### Adding an item to a project

The following example will add an issue or pull request to your project. Replace `PROJECT_ID` with the node ID of your project. Replace `CONTENT_ID` with the node ID of the issue or pull request that you want to add.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {addProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" contentId: \"<em>CONTENT_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

If you try to add an item that already exists, the existing item ID is returned instead.

### Updating a custom text, number, or date field

The following example will update the value of a date field for an item. Replace `PROJECT_ID` with the node ID of your project. Replace `ITEM_ID` with the node ID of the item you want to update. Replace `FIELD_ID` with the ID of the field that you want to update.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"2021-5-11\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

**Note:** You cannot use `updateProjectNextItemField` to change `Assignees`, `Labels`, `Milestone`, or `Repository` because these fields are properties of pull requests and issues, not of project items. Instead, you must use the [addAssigneesToAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addassigneestoassignable), [removeAssigneesFromAssignable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removeassigneesfromassignable), [addLabelsToLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#addlabelstolabelable), [removeLabelsFromLabelable]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#removelabelsfromlabelable), [updateIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updateissue), [updatePullRequest]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#updatepullrequest), or [transferIssue]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/mutations#transferissue) mutations.

{% endnote %}

### Updating a single select field

The following example will update the value of a single select field for an item.

- `PROJECT_ID` - Replace this with the node ID of your project.
- `ITEM_ID` - Replace this with the node ID of the item you want to update.
- `FIELD_ID` -  Replace this with the ID of the single select field that you want to update.
- `OPTION_ID` - Replace this with the ID of the desired single select option.

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>OPTION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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

### Updating an iteration field

The following example will update the value of an iteration field for an item.

- `PROJECT_ID` - Replace this with the node ID of your project.
- `ITEM_ID` - Replace this with the node ID of the item you want to update.
- `FIELD_ID` -  Replace this with the ID of the iteration field that you want to update.
- `ITERATION_ID` - Replace this with the ID of the desired iteration. This can be either an active iteration (from the `iterations` array) or a completed iteration (from the `completed_iterations` array).

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {updateProjectNextItemField(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\" fieldId: \"<em>FIELD_ID</em>\" value: \"<em>ITERATION_ID</em>\"}) {projectNextItem {id}}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
  mutation {
    updateProjectNextItemField(
      input: {
        projectId: "<em>PROJECT_ID</em>"
        itemId: "<em>ITEM_ID</em>"
        fieldId: "<em>FIELD_ID</em>"
        value: "<em>ITERATION_ID</em>"
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

{% curl %}
```shell
curl --request POST \
  --url https://api.github.com/graphql \
  --header 'Authorization: token <em>TOKEN</em>' \
  --data '{"query":"mutation {deleteProjectNextItem(input: {projectId: \"<em>PROJECT_ID</em>\" itemId: \"<em>ITEM_ID</em>\"}) {deletedItemId}}"}'
```
{% endcurl %}

{% cli %}
```shell
gh api graphql -f query='
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
