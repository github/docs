---
title: 'Automating {% data variables.product.prodname_projects_v2 %} using Actions'
shortTitle: Automating with Actions
intro: 'You can use {% data variables.product.prodname_actions %} to automate your projects.'
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/automating-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
layout: inline
---


## {% data variables.product.prodname_actions %} workflows

This article demonstrates how to use the GraphQL API and {% data variables.product.prodname_actions %} to add a pull request to an organization project. In the example workflows, when the pull request is marked as "ready for review", a new task is added to the project with a "Status" field set to "Todo", and the current date is added to a custom "Date posted" field.

You can copy one of the workflows below and modify it as described in the table below to meet your needs.

A project can span multiple repositories, but a workflow is specific to a repository. Add the workflow to each repository that you want your project to track. For more information about creating workflow files, see "[AUTOTITLE](/actions/quickstart)."

This article assumes that you have a basic understanding of {% data variables.product.prodname_actions %}. For more information about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions)."

For more information about other changes you can make to your project through the API, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)."

You may also want to use the **actions/add-to-project** workflow, which is maintained by {% data variables.product.company_short %} and will add the current issue or pull request to the project specified. For more information, see the [actions/add-to-project](https://github.com/actions/add-to-project) repository and README.

{% note %}

**Note:** `GITHUB_TOKEN` is scoped to the repository level and cannot access {% data variables.projects.projects_v2 %}. To access {% data variables.projects.projects_v2 %} you can either create a {% data variables.product.prodname_github_app %} (recommended for organization projects) or a {% data variables.product.pat_generic %} (recommended for user projects). Workflow examples for both approaches are shown below.

{% endnote %}

## Example workflow authenticating with a {% data variables.product.prodname_github_app %}

For more information about authenticating in a {% data variables.product.prodname_actions %} workflow with a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)."

1. Create a {% data variables.product.prodname_github_app %} or choose an existing {% data variables.product.prodname_github_app %} owned by your organization. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)."
1. Give your {% data variables.product.prodname_github_app %} read and write permissions to organization projects.  For this specific example, your {% data variables.product.prodname_github_app %} will also need read permissions to repository pull requests and repository issues. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/editing-a-github-apps-permissions)."

   {% note %}

   **Note:** You can control your app's permission to organization projects and to repository projects. You must give permission to read and write organization projects; permission to read and write repository projects will not be sufficient.

   {% endnote %}

1. Install the {% data variables.product.prodname_github_app %} in your organization. Install it for all repositories that your project needs to access. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)."
1. Store your {% data variables.product.prodname_github_app %}'s ID as a configuration variable in your repository or organization. In the following workflow, replace `APP_ID` with the name of the configuration variable. You can find your app ID on the settings page for your app or through the App API. For more information, see "[AUTOTITLE](/rest/apps#get-an-app)." For more information about configuration variables, see "[AUTOTITLE](/actions/learn-github-actions/variables#defining-configuration-variables-for-multiple-workflows)."
1. Generate a private key for your app. Store the contents of the resulting file as a secret in your repository or organization. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) In the following workflow, replace `APP_PEM` with the name of the secret. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)." For more information about storing secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
1. In the following workflow, replace `YOUR_ORGANIZATION` with the name of your organization. For example, `octo-org`. Replace `YOUR_PROJECT_NUMBER` with your project number. To find the project number, look at the project URL. For example, `https://github.com/orgs/octo-org/projects/5` has a project number of 1.  In order for this specific example to work, your project must also have a "Date posted" date field.

   {% ifversion ghes < 3.12 %}{% note %}

   **Notes:**

   * {% data reusables.actions.actions-not-certified-by-github %}
   * {% data reusables.actions.actions-use-sha-pinning %}

   {% endnote %}{% endif %}

```yaml annotate copy
#
name: Add PR to project
# This workflow runs whenever a pull request in the repository is marked as "ready for review".
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
    # Uses the {% ifversion ghes < 3.12 %}[tibdex/github-app-token](https://github.com/tibdex/github-app-token){% else %}[actions/create-github-app-token](https://github.com/marketplace/actions/create-github-app-token){% endif %} action to generate an installation access token for your app from the app ID and private key. The installation access token is accessed later in the workflow as `{% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}`.
    #
    # Replace `APP_ID` with the name of the configuration variable that contains your app ID.
    #
    # Replace `APP_PEM` with the name of the secret that contains your app private key.
      - name: Generate token
        id: generate-token
        uses: {% ifversion ghes < 3.12 %}tibdex/github-app-token@32691ba7c9e7063bd457bd8f2a5703138591fa58 # v1.9.0{% else %}actions/create-github-app-token@v1{% endif %}
        with:
          {% ifversion ghes < 3.12 %}app_id{% else %}app-id{% endif %}: {% raw %}${{ vars.APP_ID }}{% endraw %}
          {% ifversion ghes < 3.12 %}private_key{% else %}private-key{% endif %}: {% raw %}${{ secrets.APP_PEM }}{% endraw %}
      # Sets environment variables for this step.
      #
      # Replace `YOUR_ORGANIZATION` with the name of your organization. For example, `octo-org`.
      #
      # Replace `YOUR_PROJECT_NUMBER` with your project number. To find the project number, look at the project URL. For example, `https://github.com/orgs/octo-org/projects/5` has a project number of 5.
      - name: Get project data
        env:
          GH_TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        # Uses [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) to query the API for the ID of the project and return the name and ID of the first 20 fields in the project. `fields` returns a union and the query uses inline fragments (`... on`) to return information about any `ProjectV2Field` and `ProjectV2SingleSelectField` fields. The response is stored in a file called `project_data.json`.
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

# Parses the response from the API query and stores the relevant IDs as environment variables. Modify this to get the ID for different fields or options. For example:
#
# - To get the ID of a field called `Team`, add `echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV`.
# - To get the ID of an option called `Octoteam` for the `Team` single select field, add `echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV`.
#
# **Note:** This workflow assumes that you have a project with a single select field called "Status" that includes an option called "Todo" and a date field called "Date posted". You must modify this section to match the fields that are present in your table.
          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

# Sets environment variables for this step. `GH_TOKEN` is the token generated in the first step. `PR_ID` is the ID of the pull request that triggered this workflow.
      - name: Add PR to project
        env:
          GH_TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        # Uses [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) and the API to add the pull request that triggered this workflow to the project. The `jq` flag parses the response to get the ID of the created item.
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

# Stores the ID of the created item as an environment variable.
            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

# Saves the current date as an environment variable in `yyyy-mm-dd` format.
      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

# Sets environment variables for this step. `GH_TOKEN` is the token generated in the first step.
      - name: Set fields
        env:
          GH_TOKEN: {% raw %}${{ steps.generate-token.outputs.token }}{% endraw %}
        # Sets the value of the `Status` field to `Todo`. Sets the value of the `Date posted` field.
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: {
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: {
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

## Example workflow authenticating with a {% data variables.product.pat_generic %}

1. Create a {% data variables.product.pat_v1 %} with the `project` and `repo` scopes. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
1. Save the {% data variables.product.pat_generic %} as a secret in your repository or organization.
1. In the following workflow, replace `YOUR_TOKEN` with the name of the secret. Replace `YOUR_ORGANIZATION` with the name of your organization. For example, `octo-org`. Replace `YOUR_PROJECT_NUMBER` with your project number. To find the project number, look at the project URL. For example, `https://github.com/orgs/octo-org/projects/5` has a project number of 5.

```yaml annotate copy
# This workflow runs whenever a pull request in the repository is marked as "ready for review".
name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
    # Sets environment variables for this step.
    #
    # If you are using a {% data variables.product.pat_generic %}, replace `YOUR_TOKEN` with the name of the secret that contains your {% data variables.product.pat_generic %}.
    #
    # Replace `YOUR_ORGANIZATION` with the name of your organization. For example, `octo-org`.
    #
    # Replace `YOUR_PROJECT_NUMBER` with your project number. To find the project number, look at the project URL. For example, `https://github.com/orgs/octo-org/projects/5` has a project number of 5.
      - name: Get project data
        env:
          GH_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        # Uses [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) to query the API for the ID of the project and return the name and ID of the first 20 fields in the project. `fields` returns a union and the query uses inline fragments (`... on`) to return information about any `ProjectV2Field` and `ProjectV2SingleSelectField` fields. The response is stored in a file called `project_data.json`.
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

# Parses the response from the API query and stores the relevant IDs as environment variables. Modify this to get the ID for different fields or options. For example:
#
# - To get the ID of a field called `Team`, add `echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV`.
# - To get the ID of an option called `Octoteam` for the `Team` single select field, add `echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV`.
#
# **Note:** This workflow assumes that you have a project with a single select field called "Status" that includes an option called "Todo" and a date field called "Date posted". You must modify this section to match the fields that are present in your table.
          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

# Sets environment variables for this step. Replace `YOUR_TOKEN` with the name of the secret that contains your {% data variables.product.pat_generic %}.
      - name: Add PR to project
        env:
          GH_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        # Uses [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) and the API to add the pull request that triggered this workflow to the project. The `jq` flag parses the response to get the ID of the created item.
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

# Stores the ID of the created item as an environment variable.
            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

# Saves the current date as an environment variable in `yyyy-mm-dd` format.
      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

# Sets environment variables for this step. Replace `YOUR_TOKEN` with the name of the secret that contains your {% data variables.product.pat_generic %}.
      - name: Set fields
        env:
          GH_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
        # Sets the value of the `Status` field to `Todo`. Sets the value of the `Date posted` field.
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: {
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: {
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```
