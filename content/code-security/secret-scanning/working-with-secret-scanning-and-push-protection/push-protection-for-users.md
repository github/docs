---
title: Push protection for users
intro: 'With push protection for users, you are automatically protected on all pushes to public repositories across {% data variables.product.product_name %}.'
versions:
  feature: secret-scanning-push-protection-for-users
product: '{% data reusables.gated-features.push-protection-for-users %}'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - User account
redirect_from:
  - /code-security/secret-scanning/push-protection-for-users
---

## About push protection for users

Push protection for users automatically protects you from accidentally committing secrets to public repositories across {% data variables.product.product_name %}.

When you try to push a secret to a public repository, {% data variables.product.prodname_dotcom %} blocks the push. If you believe it's safe to allow the secret, you have the option to bypass the block. Otherwise, you must remove the secret from the commit before pushing again. For more information on how to resolve a blocked push, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui)" or "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line)", depending on whether you use the {% data variables.product.product_name %} UI or the command line.

Push protection for users is always on by default. You can disable the feature at any time through your personal account settings. This may cause secrets to be accidentally leaked. For more information, see "[Disabling push protection for users](#disabling-push-protection-for-users)."

Push protection for users is different from _push protection for repositories and organizations_, which is a {% data variables.product.prodname_secret_scanning %} feature that must be enabled by a repository administrator or organization owner. With push protection for repositories and organizations, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the protection. For more information, see "[AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)."

With push protection for users, {% data variables.product.prodname_dotcom %} won't create an alert when you bypass the protection and push a secret to a public repository, unless the repository itself has {% data variables.product.prodname_secret_scanning %} enabled. However, if the bypassed secret is a {% data variables.product.prodname_dotcom %} token, the token will be revoked and you will be notified by email.

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

## Disabling push protection for users

You can disable push protection for users through your personal account settings.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "User", to the right of "Push protection for yourself", click **Disable**.

   ![Screenshot of the "User" section of the "Code security and analysis" settings page. A button labeled "Disable" is outlined in dark orange.](/assets/images/help/security/push-protection-for-yourself.png)
