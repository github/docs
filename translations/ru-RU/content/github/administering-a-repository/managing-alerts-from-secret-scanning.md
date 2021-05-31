---
title: Managing alerts from secret scanning
intro: You can view and close alerts for secrets checked in to your repository.
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}

### Managing alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Detected secrets**. !["Detected secrets" tab](/assets/images/help/repository/sidebar-secrets.png)
4. Under "Secret scanning" click the alert you want to view.
   {% if currentVersion == "free-pro-team@latest" %}
   ![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
1. Optionally, use the "Mark as" drop-down menu and click a reason for resolving an alert.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Drop-down menu for resolving an alert from secret scanning](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Drop-down menu for resolving an alert from secret scanning](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

### Securing compromised secrets

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} personal access token, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)."
- For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.
