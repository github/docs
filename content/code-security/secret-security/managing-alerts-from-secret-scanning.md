---
title: Managing alerts from secret scanning
intro: You can view and close alerts for secrets checked in to your repository.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
---

{% data reusables.secret-scanning.beta %}

## Managing {% data variables.product.prodname_secret_scanning %} alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Secret scanning alerts**. 
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
   !["Secret scanning alerts" tab](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   !["Secret scanning alerts" tab](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
4. Under "Secret scanning" click the alert you want to view.
   {% if currentVersion == "free-pro-team@latest" %}
   ![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@2.22" %}
   ![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![List of alerts from secret scanning](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
5. Optionally, use the "Mark as" drop-down menu and click a reason for resolving an alert.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Drop-down menu for resolving an alert from secret scanning](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
   ![Drop-down menu for resolving an alert from secret scanning](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

## Securing compromised secrets

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} personal access token, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)."
- For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.

{% if currentVersion == "free-pro-team@latest" %}
## Configuring notifications for {% data variables.product.prodname_secret_scanning %} alerts

When a new secret is detected, {% data variables.product.prodname_dotcom %} notifies all users with access to security alerts for the repository according to their notification preferences. You will receive alerts if you are watching the repository, have enabled notifications for security alerts, or are the author of the commit that contains the secret and are not ignoring the repository.

For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."
{% endif %}
