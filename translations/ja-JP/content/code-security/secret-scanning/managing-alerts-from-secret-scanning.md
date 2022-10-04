---
title: Managing alerts from secret scanning
intro: You can view and close alerts for secrets checked in to your repository.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
---

{% data reusables.secret-scanning.beta %}

## Managing {% data variables.product.prodname_secret_scanning %} alerts

{% ifversion ghec %}
{% note %}

**Note:** Alerts are created only for repositories with {% data variables.product.prodname_secret_scanning_GHAS %} enabled. Secrets found in public repositories using the free {% data variables.product.prodname_secret_scanning_partner%} service are reported directly to the partner, without creating an alert.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, click **Secret scanning alerts**.
   {% ifversion ghes or ghec %}
   !["Secret scanning alerts" tab](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   !["Secret scanning alerts" tab](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
1. Under "Secret scanning" click the alert you want to view.
   {% ifversion ghec %}
   ![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% ifversion ghes %}
   ![List of alerts from secret scanning](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![List of alerts from secret scanning](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. To dismiss an alert, select the "Dismiss alert" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of the dropdown menu for dismissing an alert from secret scanning](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. To dismiss an alert, select the "Mark as" dropdown menu and click a reason for resolving an alert. 
  
   ![Screenshot of the dropdown menu for resolving an alert from secret scanning](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can view the history of all dismissed alerts and dismissal comments in the alert timeline. You can also retrieve or set a comment by using the {% data variables.product.prodname_secret_scanning_caps %} API. The comment is contained in the `resolution_comment` field. For more information, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert)" in the REST API documentation.

  ![Screenshot showing how to dismiss an alert via the "Dismiss alert" dropdown, with the option to add a dismissal comment](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. Click **Dismiss alert**.
{% endif %}

## Securing compromised secrets

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} personal access token, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)."
- For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.

{% ifversion ghec %}
{% note %}

**Note:** If a secret is detected in a public repository on {% data variables.product.prodname_dotcom_the_website %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[Supported secrets for partner patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)."

{% endnote %}
{% endif %}

## Configuring notifications for {% data variables.product.prodname_secret_scanning %} alerts

When a new secret is detected, {% data variables.product.product_name %} notifies all users with access to security alerts for the repository according to their notification preferences. You will receive an email notification if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, or are the author of the commit that contains the secret and are not ignoring the repository.

For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."
