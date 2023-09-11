---
title: Keeping your API credentials secure
shortTitle: Keeping API credentials secure
intro: 'Follow these best practices to keep your API credentials and tokens secure.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---

## Choose an appropriate authentication method

You should choose an authentication method that is appropriate for the task you want to accomplish.

- To use the API for personal use, you can create a {% data variables.product.pat_generic %}.
- To use the API on behalf of an organization or another user, you should create a {% data variables.product.prodname_github_app %}.
- To use the API in a {% data variables.product.prodname_actions %} workflow, you should authenticate with the built-in `GITHUB_TOKEN`.

For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-with-the-api)."

## Limit the permissions of your credentials

{% ifversion pat-v2 %}

When creating a {% data variables.product.pat_generic %}, only select the minimum permissions or scopes needed, and set an expiration date for the minimum amount of time you'll need to use the token. {% data variables.product.company_short %} recommends that you use {% data variables.product.pat_v2 %}s instead of {% data variables.product.pat_v1_plural %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#types-of-personal-access-tokens)."

{% else %}

When creating a {% data variables.product.pat_generic %}, only select the minimum scopes needed, and set an expiration date for the minimum amount of time you'll need to use the token. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."

{% endif %}

When creating a {% data variables.product.prodname_github_app %}, select the minimum permissions that your {% data variables.product.prodname_github_app %} will need. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

When authenticating with `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow, only give the minimum amount of permissions needed. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)."

## Store your authentication credentials securely

Treat authentication credentials the same way you would treat your passwords or other sensitive credentials.

- Don't share authentication credentials using an unencrypted messaging or email system.
- Don't pass your {% data variables.product.pat_generic %} as plain text in the command line. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#keeping-your-personal-access-tokens-secure)."
- Don't push unencrypted authentication credentials like tokens or keys to any repository, even if the repository is private. Instead consider using a {% data variables.product.prodname_actions %} secret{% ifversion fpt or ghec %} or Codespaces secret{% endif %}. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)"{% ifversion fpt or ghec %} and "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}.
- You can use secret scanning to discover tokens, private keys, and other secrets that were pushed to a repository, or to block future pushes that contain secrets. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."

## Limit who can access your authentication credentials

Don't share your {% data variables.product.pat_generic %} with others. Instead of sharing a {% data variables.product.pat_generic %}, consider creating a {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

If you need to share credentials with a team, store the credentials in a secure shared system. For example, you could store and share passwords securely using [1Password](https://1password.com/), or you could store keys in [Azure KeyVault](https://azure.microsoft.com/en-gb/products/key-vault) and manage access with your IAM (Identity and access management).

If you're creating a {% data variables.product.prodname_actions %} workflow that needs to access the API, you can store your credentials in an encrypted secret, and access the encrypted secret from the workflow. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)"{% ifversion projects-v2 %} and "[AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)"{% endif %}.

## Use authentication credentials securely in your code

Never hardcode authentication credentials like tokens, keys, or app-related secrets into your code. Instead, consider using a secret manager such as [Azure Key Vault](https://azure.microsoft.com/products/key-vault) or [HashiCorp Vault](https://www.hashicorp.com/products/vault). For more information about securing {% data variables.product.prodname_github_app %} credentials, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

When using a {% data variables.product.pat_generic %} in a script, consider storing your token as a {% data variables.product.prodname_actions %} secret and running your script through {% data variables.product.prodname_actions %}.{% ifversion fpt or ghec %}  You can also store your token as a Codespaces secret and run your script in Codespaces.{% endif %} For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)"{% ifversion fpt or ghec %} and "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}.

If none of these options are possible, you can store authentication credentials in a `.env` file. Make sure to encrypt your `.env` file, and never push it to any repository.

## Prepare a remediation plan

You should create a plan to handle any security breaches in a timely manner. In the event that your token or other authentication credential is leaked, you will need to:

- Generate a new credential.
- Replace the old credential with the new one everywhere that you are storing or accessing the credential.
- Delete the old compromised credential.

For information about rotating compromised credentials for a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

For information about creating and deleting {% data variables.product.pat_generic %}s, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."
