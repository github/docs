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
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About the `GITHUB_TOKEN` secret

{% data variables.product.prodname_dotcom %} automatically creates a `GITHUB_TOKEN` secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in a workflow run.

When you enable {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} installs a {% data variables.product.prodname_github_app %} on your repository. The `GITHUB_TOKEN` secret is a {% data variables.product.prodname_github_app %} installation access token. You can use the installation access token to authenticate on behalf of the {% data variables.product.prodname_github_app %} installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Before each job begins, {% data variables.product.prodname_dotcom %} fetches an installation access token for the job. The token expires when the job is finished.

The token is also available in the `github.token` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

## Using the `GITHUB_TOKEN` in a workflow

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% data variables.product.prodname_dotcom %} API request.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**Important:** An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %} 

### Example 1: passing the `GITHUB_TOKEN` as an input

This example workflow uses the [labeler action](https://github.com/actions/labeler), which requires the `GITHUB_TOKEN` as the value for the `repo-token` input parameter:

```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

### Example 2: calling the REST API

You can use the `GITHUB_TOKEN` to make authenticated API calls. This example workflow creates an issue using the {% data variables.product.prodname_dotcom %} REST API:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Permissions for the `GITHUB_TOKEN`

For information about the API endpoints {% data variables.product.prodname_github_apps %} can access with each permission, see "[{% data variables.product.prodname_github_app %} Permissions](/rest/reference/permissions-required-for-github-apps)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
The following table shows the permissions granted to the `GITHUB_TOKEN` by default. People with admin permissions to an enterprise, organization, or repository can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your enterprise, organization, or repository, see "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)," "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#setting-the-permissions-of-the-github_token-for-a-repository)."

| Scope         | Default access<br>(permissive) | Default access<br>(restricted) | Maximum access<br>by forked repos |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | read/write  | none | read |
| checks        | read/write  | none | read |
| contents      | read/write  | read | read |
| deployments   | read/write  | none | read |
| issues        | read/write  | none | read |
| metadata      | read        | read | read |
| packages      | read/write  | none | read |
| pull requests | read/write  | none | read |
| repository projects | read/write | none | read |
| security events     | read/write | none | read |
| statuses      | read/write  | none | read |
{% else %}
| Scope    | Access type | Access by forked repos |
|----------|-------------|--------------------------|
| actions  | read/write  | read |
| checks   | read/write  | read |
| contents | read/write  | read |
| deployments | read/write | read |
| issues   | read/write  | read |
| metadata | read        | read |
| packages | read/write  | read |
| pull requests | read/write | read |
| repository projects | read/write | read |
| statuses | read/write  | read |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### Modifying the permissions for the `GITHUB_TOKEN`

You can modify the permissions for the `GITHUB_TOKEN` in individual workflow files. If the default permissions for the `GITHUB_TOKEN` are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the `GITHUB_TOKEN`. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

You can see the permissions that `GITHUB_TOKEN` had for a specific job in the "Set up job" section of the workflow run log. For more information, see "[Using workflow run logs](/actions/managing-workflow-runs/using-workflow-run-logs)."

You can use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. When the `permissions` key is used, all unspecified permissions are set to no access, with the exception of the `metadata` scope, which always gets read access.

{% data reusables.github-actions.forked-write-permission %}

The two workflow examples earlier in this article show the `permissions` key being used at the workflow level, and at the job level. In [Example 1](#example-1-passing-the-github_token-as-an-input) the two permissions are specified for the entire workflow. In [Example 2](#example-2-calling-the-rest-api) write access is granted for one scope for a single job. 

For full details of the `permissions` key, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)."

#### How the permissions are calculated for a workflow job

The permissions for the `GITHUB_TOKEN` are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the **Send write tokens to workflows from pull requests** setting is not selected, the permissions are adjusted to change any write permissions to read only.

### Granting additional permissions
{% endif %}

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, you can create a personal access token and set it as a secret in your repository:

1. Use or create a token with the appropriate permissions for that repository. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Add the token as a secret in your workflow's repository, and refer to it using the {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
