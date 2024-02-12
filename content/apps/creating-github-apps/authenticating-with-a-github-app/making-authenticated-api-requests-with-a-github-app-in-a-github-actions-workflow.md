---
title: Making authenticated API requests with a GitHub App in a GitHub Actions workflow
shortTitle: Authenticate in Actions workflow
intro: 'You can use an installation access token from a {% data variables.product.prodname_github_app %} to make authenticated API requests in a {% data variables.product.prodname_actions %} workflow. You can also pass the token to a custom action to enable the action to make authenticated API requests.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - Actions
redirect_from:
  - /apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow
  - /apps/creating-github-apps/writing-code-for-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow
---

## About {% data variables.product.prodname_actions %} authentication

If you need to make authenticated API requests in a {% data variables.product.prodname_actions %} workflow or need to execute a custom action that requires a token, you should use the built-in `GITHUB_TOKEN` if possible. However, the `GITHUB_TOKEN` can only access resources within the workflow's repository. If you need to access additional resources, such as resources in an organization or in another repository, you can use a {% data variables.product.prodname_github_app %}. For more information about why you might use a {% data variables.product.prodname_github_app %} over a {% data variables.product.pat_generic %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps#choosing-between-a-github-app-or-a-personal-access-token)."

## Authenticating with a {% data variables.product.prodname_github_app %}

In order to use a {% data variables.product.prodname_github_app %} to make authenticated API requests, you must register a {% data variables.product.prodname_github_app %}, store your app's credentials, and install your app. Once this is done, you can use your app to create an installation access token, which can be used to make authenticated API requests in a {% data variables.product.prodname_actions %} workflow. You can also pass the installation access token to a custom action that requires a token.

1. Register a {% data variables.product.prodname_github_app %}. Give your {% data variables.product.prodname_github_app %} registration the necessary permissions to access the desired resources. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."
1. Store the app ID of your {% data variables.product.prodname_github_app %} as a {% data variables.product.prodname_actions %} secret. You can find the app ID on the settings page for your app. The app ID is different from the client ID. For more information about navigating to the settings page for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings)." For more information about storing secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
1. Generate a private key for your app. Store the contents of the resulting file as a secret. (Store the entire contents of the file, including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.) For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."
1. Install the {% data variables.product.prodname_github_app %} on your user account or organization and grant it access to any repositories that you want your workflow to access. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository)."
1. In your {% data variables.product.prodname_actions %} workflow, create an installation access token, which you can use to make API requests.

   {% ifversion ghes < 3.12 %}To do this, you can use a pre-made action as demonstrated in the following example. If you prefer to not use a third party action, you can fork and modify the `tibdex/github-app-token` action, or you can write a script to make your workflow create an installation token manually. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."{% else %}To do this, you can use a {% data variables.product.company_short %}-owned action as demonstrated in the following example. If you prefer to not use this action, you can fork and modify the [`actions/create-github-app-token` action](https://github.com/actions/create-github-app-token), or you can write a script to make your workflow create an installation token manually. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."{% endif %}

   The following example workflow uses the {% ifversion ghes < 3.12 %}`tibdex/github-app-token`{% else %}`actions/create-github-app-token`{% endif %} action to generate an installation access token. Then, the workflow uses the token to make an API request via the {% data variables.product.prodname_cli %}.

   In the following workflow, replace `APP_ID` with the name of the secret where you stored your app ID. Replace `APP_PRIVATE_KEY` with the name of the secret where you stored your app private key.

```yaml copy
{% ifversion ghes < 3.12 %}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}
{% endif %}
on:
  workflow_dispatch:
jobs:
  demo_app_authentication:
    runs-on: ubuntu-latest
    steps:
      - name: Generate a token
        id: generate_token
        uses: {% ifversion ghes < 3.12 %}tibdex/github-app-token@b62528385c34dbc9f38e5f4225ac829252d1ea92{% else %}actions/create-github-app-token@v1{% endif %}
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PRIVATE_KEY }}{% endraw %}

      - name: Use the token
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api octocat
```
