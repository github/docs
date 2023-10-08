---
title: Automatic token authentication
intro: '{% data variables.product.prodname_dotcom %} provides a token that you can use to authenticate on behalf of {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About the `GITHUB_TOKEN` secret

At the start of each workflow job, {% data variables.product.prodname_dotcom %} automatically creates a unique `GITHUB_TOKEN` secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in the workflow job.

When you enable {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} installs a {% data variables.product.prodname_github_app %} on your repository. The `GITHUB_TOKEN` secret is a {% data variables.product.prodname_github_app %} installation access token. You can use the installation access token to authenticate on behalf of the {% data variables.product.prodname_github_app %} installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Before each job begins, {% data variables.product.prodname_dotcom %} fetches an installation access token for the job. {% data reusables.actions.github-token-expiration %}

The token is also available in the `github.token` context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#github-context)."

## Using the `GITHUB_TOKEN` in a workflow

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API request.

{% note %}

**Important:** An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

{% data reusables.actions.actions-do-not-trigger-pages-rebuilds %}

### Example 1: passing the `GITHUB_TOKEN` as an input

{% data reusables.actions.github_token-input-example %}

### Example 2: calling the REST API

You can use the `GITHUB_TOKEN` to make authenticated API calls. This example workflow creates an issue using the {% data variables.product.prodname_dotcom %} REST API:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write
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

For information about the API endpoints {% data variables.product.prodname_github_apps %} can access with each permission, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps)."

The following table shows the permissions granted to the `GITHUB_TOKEN` by default. People with admin permissions to an {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository{% endif %} can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your enterprise, organization, or repository, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)," "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

{% rowheaders %}

| Scope         | Default access<br>(permissive) | Default access<br>(restricted) | Maximum access for<br>pull requests from<br>public forked repositories |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | read/write  | none | read |
| checks        | read/write  | none | read |
| contents      | read/write  | read | read |
| deployments   | read/write  | none | read |{% ifversion fpt or ghec %}
| id-token      | none        | none | read |{% endif %}
| issues        | read/write  | none | read |
| metadata      | read        | read | read |
| packages      | read/write  | {% ifversion actions-default-workflow-permissions-restrictive %}read{% else %}none{% endif %} | read |
| pages         | read/write  | none | read |
| pull-requests | read/write  | none | read |
| repository-projects | read/write | none | read |
| security-events     | read/write | none | read |
| statuses      | read/write  | none | read |

{% endrowheaders %}

{% note %}

**Notes:**
- When a workflow is triggered by the [`pull_request_target`](/actions/using-workflows/events-that-trigger-workflows#pull_request_target) event, the `GITHUB_TOKEN` is granted read/write repository permission, even when it is triggered from a public fork. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request_target)."
- Private repositories can control whether pull requests from forks can run workflows, and can configure the permissions assigned to `GITHUB_TOKEN`. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-forks-of-private-repositories)."
- {% data reusables.actions.workflow-runs-dependabot-note %}

{% endnote %}

### Modifying the permissions for the `GITHUB_TOKEN`

You can modify the permissions for the `GITHUB_TOKEN` in individual workflow files. If the default permissions for the `GITHUB_TOKEN` are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the `GITHUB_TOKEN`. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

You can see the permissions that `GITHUB_TOKEN` had for a specific job in the "Set up job" section of the workflow run log. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)."

You can use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. When the `permissions` key is used, all unspecified permissions are set to no access, with the exception of the `metadata` scope, which always gets read access.

{% data reusables.actions.forked-write-permission %}

The two workflow examples earlier in this article show the `permissions` key being used at the job level, as it is best practice to limit the permissions' scope.

For full details of the `permissions` key, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#permissions)."

#### How the permissions are calculated for a workflow job

The permissions for the `GITHUB_TOKEN` are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the **Send write tokens to workflows from pull requests** setting is not selected, the permissions are adjusted to change any write permissions to read only.

### Granting additional permissions

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, you can create a {% data variables.product.prodname_github_app %} and generate an installation access token within your workflow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)." Alternatively, you can create a {% data variables.product.pat_generic %}, store it as a secret in your repository, and use the token in your workflow with the {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" and "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

### Further reading

- "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#rate-limiting)"
