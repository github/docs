---
title: Use GITHUB_TOKEN in workflows
intro: 'Learn how to use the `GITHUB_TOKEN` to authenticate on behalf of {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
  - /actions/security-guides/automatic-token-authentication
  - /actions/security-for-github-actions/security-guides/automatic-token-authentication
  - /actions/how-tos/security-for-github-actions/security-guides/automatic-token-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Use `GITHUB_TOKEN`
---

## Using the `GITHUB_TOKEN` in a workflow

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% data variables.product.github %} API request.

> [!IMPORTANT]
> An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. For more information, see [AUTOTITLE](/actions/reference/github_token-reference#permissions-for-the-github_token).

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
          --url {% data variables.product.rest_url %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Modifying the permissions for the `GITHUB_TOKEN`

You can modify the permissions for the `GITHUB_TOKEN` in individual workflow files. If the default permissions for the `GITHUB_TOKEN` are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the `GITHUB_TOKEN`. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

You can see the permissions that `GITHUB_TOKEN` had for a specific job in the "Set up job" section of the workflow run log. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs).

You can use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job.

{% data reusables.actions.forked-write-permission %}

The two workflow examples earlier in this article show the `permissions` key being used at the job level, as it is best practice to limit the permissions' scope.

For full details of the `permissions` key, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

> [!NOTE]
> Organization{% ifversion not fpt %} and enterprise{% endif %} owners can prevent you from granting write access to the `GITHUB_TOKEN` at the repository level. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization){% ifversion not fpt %} and [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise).{% else %}.{% endif %}
>
> When the `permissions` key is used, all unspecified permissions are set to no access, with the exception of the `metadata` scope, which always gets read access.

## Granting additional permissions

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, you can create a {% data variables.product.prodname_github_app %} and generate an installation access token within your workflow. For more information, see [AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow). Alternatively, you can create a {% data variables.product.pat_generic %}, store it as a secret in your repository, and use the token in your workflow with the {% raw %}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and [AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions).

## Configuring `GITHUB_TOKEN` permissions with private repositories

Private repositories can control whether pull requests from forks can run workflows, and can configure the permissions assigned to `GITHUB_TOKEN`. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-forks-of-private-repositories).

## Next steps

* [AUTOTITLE](/actions/concepts/security/github_token)
* [AUTOTITLE](/actions/reference/github_token-reference)
