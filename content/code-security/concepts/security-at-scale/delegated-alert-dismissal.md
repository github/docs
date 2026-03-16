---
title: Delegated alert dismissal
intro: 'Increase your governance over security alerts with delegated alert dismissal.'
versions:
  feature: security-delegated-alert-dismissal
contentType: concepts
---

Delegated alert dismissal lets you restrict which users can directly dismiss an alert. When you enable the feature:
* Users with write access to a repository must request to dismiss alerts in that repository.
* Organization owners and security managers can approve or deny dismissal requests, as well as dismiss alerts directly themselves.

Reviewers are notified of dismissal requests via email, and can either approve the request to dismiss the alert, or deny the request to leave the alert open. After a request is reviewed, the requester is notified of the outcome via email.

## Availability

You can enable delegated alert dismissal for:
* {% data variables.product.prodname_code_scanning_caps %} alerts (available on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} 3.17+)
* {% data variables.product.prodname_secret_scanning_caps %} alerts (available on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} 3.17+)
* {% data variables.product.prodname_dependabot_alerts %} (available on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} 3.21+)

## Custom roles for delegated alert dismissal

You can use a custom role to let team members who are not organization owners or security managers respond to dismissal requests and dismiss alerts directly. The custom role needs the following permissions:

* Organization permissions for reviewing and bypassing alert dismissal requests. To find the exact permissions required for a particular product, see [Permissions for organization access](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#permissions-for-organization-access).
* Repository permissions to view, dismiss, and reopen alerts. To find the exact permissions required for a particular product, see [Security](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#security).

{% data reusables.organizations.custom-role-repo-perms-preview-note %}

## Next steps

To configure delegated alert dismissal, see:
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/enabling-delegated-alert-dismissal-for-code-scanning)
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/enabling-delegated-alert-dismissal-for-secret-scanning){% ifversion dependabot-delegated-alert-dismissal %}
* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/enable-delegated-alert-dismissal){% endif %}
