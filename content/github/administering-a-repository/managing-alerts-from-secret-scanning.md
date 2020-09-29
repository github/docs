---
title: Managing alerts from secret scanning
intro: You can view and close alerts for secrets checked in to your repository.
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### Managing alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Detected secrets**. 
!["Detected secrets" tab](/assets/images/help/repository/sidebar-secrets.png)
4. Under "Secret scanning" click the alert you want to view.
![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert.png)
5. Optionally, use the "Resolve" drop-down menu and click a reason for resolving an alert.
![Drop-down menu for resolving an alert from secret scanning](/assets/images/help/repository/secret-scanning-resolve-alert.png)

### Securing compromised secrets

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} personal access token, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)."
- For all other secrets, first verify that the secret committed to {% data variables.product.prodname_dotcom %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.
