---
title: Automating projects (beta)
intro: 'You can use the API and {% data variables.product.prodname_actions %} to manage your projects.'
product: '{% data reusables.gated-features.actions %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
type: how_to
topics:
  - Projects
  - Workflows
  - Project management
---

## Introduction

This article demonstrates how to use the GraphQL API and {% data variables.product.prodname_actions %} to add a pull request to a project. When the pull request is marked as "ready for review", a new task is added to the project with a  "Status" field set to "Todo", and the current date is added to a custom "Date posted" field.

This article assumes that you have a basic understanding of {% data variables.product.prodname_actions %}. For more information about {% data variables.product.prodname_actions %}, see "[{% data variables.product.prodname_actions %}](/actions)."

{% data reusables.projects.projects-beta %}

{% data reusables.projects.api-beta %}

{% note %}

**Note:** `GITHUB_TOKEN` does not have the necessary scopes to access projects (beta). You must create a token with `org:write` scope and save it as a secret in your repository or organization. In the following workflow, replace `YOUR_TOKEN` with the name of the secret. For more information, see "[Creating a personal access token](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% endnote %}

## Example workflow

You can copy this workflow and modify it as described in the table below to meet your needs. A project can span multiple repositories, but a workflow is specific to a repository. Add this workflow to each repository that you want your project to track. For more information about creating workflow files, see "[Quickstart for {% data variables.product.prodname_actions %}](/actions/quickstart)."

```yaml{:copy}
name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectNext(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      id
                      name
                      settings
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectNext.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") |.settings | fromjson.options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectNextItem(input: {projectId: $project, contentId: $pr}) {
                projectNextItem {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectNextItem.projectNextItem.id')"
          
          echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
        run: |
          gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: String!
            ) {
              set_status: updateProjectNextItemField(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: $status_value
              }) {
                projectNextItem {
                  id
                  }
              }
              set_date_posted: updateProjectNextItemField(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: $date_value
              }) {
                projectNextItem {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

The following table explains sections of the workflow and shows you how to adapt it for your own use.

<table class="table-fixed">

<tr>
<td>

```yaml
on:
  pull_request:
    types:
      - ready_for_review
```

</td>
<td>
This workflow runs whenever a pull request in the repository is marked as "ready for review".
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Sets environment variables for this step.
<br>
<br>
Create a token with <code>org:write</code> scope and save it as a secret in your repository or organization. Replace <code>YOUR_TOKEN</code> with the name of the secret.
<br>
<br>
Replace <code>YOUR_ORGANIZATION</code> with the name of your organization. For example, <code>octo-org</code>.
<br>
<br>
Replace <code>YOUR_PROJECT_NUMBER</code> with your project number. To find the project number, look at the project URL. For example, <code>https://github.com/orgs/octo-org/projects/5</code> has a project number of 5.
</td>
</tr>

<tr>
<td>

```yaml
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectNext(number: $number) {
        id
        fields(first:20) {
          nodes {
            id
            name
            settings
          }
        }
      }
    }
  }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
Uses <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> to query the API for the ID of the project and for the ID, name, and settings for the first 20 fields in the project. The response is stored in a file called <code>project_data.json</code>.
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectNext.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Status") |.settings | fromjson.options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
Parses the response from the API query and stores the relevant IDs as environment variables. Modify this to get the ID for different fields or options. For example:
<ul>
<li>To get the ID of a field called <code>Team</code>, add <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>To get the ID of an option called <code>Octoteam</code> for the <code>Team</code> field, add <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectNext.fields.nodes[] | select(.name== "Team") |.settings | fromjson.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>Note: </strong>This workflow assumes that you have a project with a single select field called "Status" that includes an option called "Todo" and a date field called "Date posted". You must modify this section to match the fields that are present in your table.
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
Sets environment variables for this step. <code>GITHUB_TOKEN</code> is described above. <code>PR_ID</code> is the ID of the pull request that triggered this workflow.

</td>
</tr>

<tr>
<td>

```yaml
item_id="$( gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation($project:ID!, $pr:ID!) {
    addProjectNextItem(input: {projectId: $project, contentId: $pr}) {
      projectNextItem {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectNextItem.projectNextItem.id')"
```

</td>
<td>
Uses <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> and the API to add the pull request that triggered this workflow to the project. The <code>jq</code> flag parses the response to get the ID of the created item.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Stores the ID of the created item as an environment variable.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Saves the current date as an environment variable in <code>yyyy-mm-dd</code> format.
</td>
</tr>

<tr>
<td>

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{secrets.YOUR_TOKEN}}{% endraw %}
```

</td>
<td>
Sets environment variables for this step. <code>GITHUB_TOKEN</code> is described above.

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql --header 'GraphQL-Features: projects_next_graphql' -f query='
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
    $date_field: ID!
    $date_value: String!
  ) {
    set_status: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: $status_value
    }) {
      projectNextItem {
        id
        }
    }
    set_date_posted: updateProjectNextItemField(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: $date_value
    }) {
      projectNextItem {
        id
      }
    }
  }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

</td>
<td>
Sets the value of the <code>Status</code> field to <code>Todo</code>. Sets the value of the <code>Date posted</code> field.
</td>
</tr>

</table>

## Next steps

For more information about other changes you can make to your project through the API, see "[Using the API to manage projects](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)." For more information about {% data variables.product.prodname_actions %}, see "[{% data variables.product.prodname_actions %}](/actions)."
