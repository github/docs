---
title: Managing alerts from secret scanning
intro: You can view and close alerts for secrets checked in to your repository.
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can view and dismiss secret scanning alerts for the repository.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  fpt: '*'
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
{% data reusables.secret-scanning.secret-scanning-alerts-beta %}

## Managing {% data variables.secret-scanning.alerts %}

{% ifversion fpt or ghec %}
{% note %}

**Note:** Alerts are created only for repositories with {% data variables.secret-scanning.user_alerts %} enabled. Secrets found in public repositories using the free {% data variables.secret-scanning.partner_alerts %} service are reported directly to the partner, without creating an alert. For more information, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-alerts)."

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, click **{% data variables.product.prodname_secret_scanning_caps %} alerts**.
   {% ifversion fpt or ghes or ghec %}
   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %} alerts" tab](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %} alerts" tab](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}" click the alert you want to view.
   {% ifversion fpt %}
   ![Screenshot of the list of alerts from {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/secret-scanning-alerts-click-alert-fpt.png)
   {% endif %}
   {% ifversion ghec %}
   ![Screenshot of the list of alerts from {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/secret-scanning-click-alert-ghec.png)
   {% endif %}
   {% ifversion ghes %}
   ![Screenshot of the list of alerts from {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![Screenshot of the list of alerts from {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}{% ifversion secret-scanning-validity-check %}
1. Check the validity of the secret and follow the remediation steps.

   ![Screenshot of the validity check for a {% data variables.product.company_short %} token](/assets/images/help/repository/secret-scanning-validity-check.png)

   {% note %}

   **Note:** Validity check for {% data variables.product.company_short %} tokens is currently in public beta and subject to change.

   {% endnote %}

   {% data variables.product.company_short %} provides information about the validity of the secret, for {% data variables.product.company_short %} tokens only.

   | Validity                |     Result                                                                           |
   |-------------------------|--------------------------------------------------------------------------------|
   | Active secret           | {% data variables.product.company_short %} confirmed this secret is active                                         |
   | Active secret           | {% data variables.product.company_short %} checked with this secret's provider and found that the secret is active |
   | Possibly active secret  | {% data variables.product.company_short %} does not support validation checks for this token type yet               |
   | Possibly active secret  | {% data variables.product.company_short %} could not verify this secret                                            |
   | Secret appears inactive | You should make sure no unauthorized access has already occurred                 |
{% endif %}{% ifversion secret-scanning-partner-documentation-link-UI %}
1. To dismiss an alert, select the "Close as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of the dropdown menu for dismissing an alert from {% data variables.product.prodname_secret_scanning %} showing link to partner documentation](/assets/images/help/repository/secret-scanning-dismiss-alert-web-ui-link-partner-documentation.png)

   {% else %}
2. To dismiss an alert, select the "Mark as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of the dropdown menu for resolving an alert from {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
3. Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can view the history of all dismissed alerts and dismissal comments in the alert timeline. You can also retrieve or set a comment by using the {% data variables.product.prodname_secret_scanning_caps %} API. The comment is contained in the `resolution_comment` field. For more information, see "[AUTOTITLE](/rest/secret-scanning#update-a-secret-scanning-alert)" in the REST API documentation.

   ![Screenshot showing how to dismiss an alert via the "Dismiss alert" dropdown, with the option to add a dismissal comment](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

4. Click **Close alert**.
{% endif %}

## Securing compromised secrets

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
{%- ifversion token-audit-log %}
  - {% ifversion ghec %}If your organization is owned by an enterprise account, identify{% else %}Identify{% endif %} any actions taken by the compromised token on your enterprise's resources. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)."
{%- endif %}
- For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.

{% ifversion fpt or ghec %}
{% note %}

**Note:** If a secret is detected in a public repository on {% data variables.product.prodname_dotcom_the_website %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-alerts)."

{% endnote %}
{% endif %}

## Configuring notifications for {% data variables.secret-scanning.alerts %}

When a new secret is detected, {% data variables.product.product_name %} notifies all users with access to security alerts for the repository according to their notification preferences. You will receive an email notification if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, or are the author of the commit that contains the secret and are not ignoring the repository.

For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" and "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."
