---
title: Push protection for users
intro: 'You can use {% data variables.product.prodname_secret_scanning %} to block commits containing secrets in any public repository by enabling push protection for yourself.'
versions:
  feature: secret-scanning-push-protection-for-users
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - User account
---

{% data reusables.secret-scanning.push-protection-for-users-beta %}

## About push protection for users

With push protection for users, you can enable push protection for yourself, so that no matter which public repository you push to, you will be protected. Additionally, if you are a repository administrator, or an organization owner, you can enable push protection for your repository or organization, respectively. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations)."

If push protection is not enabled for the repository you are pushing to, but you have push protection for yourself enabled, no alerts will be created after you push a secret. However, if the bypassed secret is a {% data variables.product.prodname_dotcom %} token, the token will be revoked and you will be notified by email.

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

## Enabling push protection for yourself

You can enable push protection for yourself through your personal account settings.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "User", to the right of "Push protection for yourself", click **Enable**.

   ![Screenshot of the "User" section of the "Code security and analysis" settings page. A button labeled "Enable" is outlined in dark orange.](/assets/images/help/security/push-protection-for-yourself.png)
