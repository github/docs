---
title: Authentication in a workflow
intro: '{% data variables.product.prodname_dotcom %} provides a token that you can use to authenticate on behalf of {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Anyone with `write` access to a repository can create, read, and use secrets.

### About the `GITHUB_TOKEN` secret

{% data variables.product.prodname_dotcom %} automatically creates a `GITHUB_TOKEN` secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in a workflow run.

When you enable {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} installs a {% data variables.product.prodname_github_app %} on your repository. The `GITHUB_TOKEN` secret is a {% data variables.product.prodname_github_app %} installation access token. You can use the installation access token to authenticate on behalf of the {% data variables.product.prodname_github_app %} installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Before each job begins, {% data variables.product.prodname_dotcom %} fetches an installation access token for the job. The token expires when the job is finished.

The token is also available in the `github.token` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

### Using the `GITHUB_TOKEN` in a workflow

To use the `GITHUB_TOKEN` secret, you must reference it in your workflow file. Using a token might include passing the token as an input to an action that requires it, or making authenticated {% data variables.product.prodname_dotcom %} API calls.

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### Example passing `GITHUB_TOKEN` as an input

This example workflow uses the [labeler action](https://github.com/actions/labeler), which requires the `GITHUB_TOKEN` as the value for the `repo-token` input parameter:

  {% raw %}
  ```yaml
  name: Pull request labeler
  on:
  - pull_request
  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  {% endraw %}

#### Example calling the REST API

You can use the `GITHUB_TOKEN` to make authenticated API calls. This example workflow creates an issue using the {% data variables.product.prodname_dotcom %} REST API:

  {% raw %}
  ```yaml
  name: Create issue on commit
  on:
  - push
  jobs:
    create_commit:
      runs-on: ubuntu-latest
      steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
            }'
  ```
  {% endraw %}

### Permissions for the `GITHUB_TOKEN`

For information about the API endpoints {% data variables.product.prodname_github_apps %} can access with each permission, see "[{% data variables.product.prodname_github_app %} Permissions](/v3/apps/permissions/)."

| Permission          | Access type | Access by forked repos |
| ------------------- | ----------- | ---------------------- |
| actions             | read/write  | read                   |
| checks              | read/write  | read                   |
| contents            | read/write  | read                   |
| deployments         | read/write  | read                   |
| issues              | read/write  | read                   |
| метаданные          | read        | read                   |
| пакеты              | read/write  | read                   |
| pull requests       | read/write  | read                   |
| repository projects | read/write  | read                   |
| statuses            | read/write  | read                   |

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, you can create a personal access token and set it as a secret in your repository:

1. Use or create a token with the appropriate permissions for that repository. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Add the token as a secret in your workflow's repository, and refer to it using the {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
