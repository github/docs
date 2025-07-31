---
title: Use GITHUB_TOKEN for authentication in workflows
intro: 'Learn how to use the `GITHUB_TOKEN` to authenticate on behalf of {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
  - /actions/security-guides/automatic-token-authentication
  - /actions/security-for-github-actions/security-guides/automatic-token-authentication
  - /actions/how-tos/security-for-github-actions/security-guides/automatic-token-authentication
  - /actions/how-tos/security-for-github-actions/security-guides/use-github_token-in-workflows
  - /actions/using-jobs/assigning-permissions-to-jobs
  - /actions/writing-workflows/choosing-what-your-workflow-does/assigning-permissions-to-jobs
  - /actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github-token
  - /actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token
  - /actions/tutorials/use-github_token-in-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Authenticate with GITHUB_TOKEN
---

This tutorial leads you through how to use the `GITHUB_TOKEN` for authentication in {% data variables.product.prodname_actions %} workflows, including examples for passing the token to actions, making API requests, and configuring permissions for secure automation.

For reference information, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions).

## Using the `GITHUB_TOKEN` in a workflow

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% data variables.product.github %} API request.

> [!IMPORTANT]
> An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. For more information, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions).

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

Use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

The two workflow examples earlier in this article show the `permissions` key being used at the job level.

## Granting additional permissions

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, create a {% data variables.product.prodname_github_app %} and generate an installation access token within your workflow. For more information, see [AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow). Alternatively, you can create a {% data variables.product.pat_generic %}, store it as a secret in your repository, and use the token in your workflow with the {% raw %}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and [AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions).

## Next steps

* [AUTOTITLE](/actions/concepts/security/github_token)
* [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions)
