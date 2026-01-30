---
title: About security campaigns
shortTitle: Security campaigns
intro: You can fix security alerts at scale by creating security campaigns and collaborating with developers to burn down your security backlog.
product: '{% data reusables.gated-features.security-campaigns %}'
allowTitleToDifferFromFilename: true
audience:
  - driver
contentType: concepts
versions:
  feature: security-campaigns
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns
---

Once you have identified security alerts the next step is to identify the most urgent alerts and get them fixed. Security campaigns are a way to group alerts and share them with developers, so you can collaborate to remediate vulnerabilities in the code{% ifversion security-campaigns-secrets %} and any exposed secrets{% endif %}.

## Security campaigns in your day-to-day work

You can use security campaigns to support many of your aims as a security leader.

* Improving the security posture of the company by leading work to remediate alerts.
* Reinforcing security training for developers by creating a campaign of related, {% data variables.product.prodname_code_scanning %} alerts to fix collaboratively.{% ifversion security-campaigns-secrets %}
* Ensuring that {% data variables.product.prodname_secret_scanning %} alerts are resolved within your remediation target.{% endif %}
* Building collaborative relationships between the security team and developers to promote shared ownership of security alerts.
* Providing clarity to developers on the most urgent alerts to fix and monitoring alert remediation.

## Benefits of using security campaigns

A security campaign has many benefits over other ways of encouraging developers to remediate security alerts. In particular,

* Developers are notified about any security campaigns that they can contribute to.
* Developers can see the alerts you've highlighted for remediation without leaving their normal workflows.
* Each campaign has a named point of contact for questions, reviews, and collaboration.  {% ifversion security-campaigns-autofix %}
* For {% data variables.product.prodname_code_scanning %} alerts, {% data variables.copilot.copilot_autofix %} is automatically triggered to suggest a resolution. {% endif %}
{%- ifversion code-secret-alert-assignees %}
* For both {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, you can assign alerts in a campaign to users with write access{% ifversion copilot %} or to {% data variables.copilot.copilot_coding_agent %} to automatically generate pull requests with fixes{% endif %}.
{%- endif %}

You can use one of the templates to select a group of closely related alerts for a campaign. This allows developers to build on the knowledge gained by resolving one alert and use it to fix several more, providing them with an incentive to fix multiple alerts.

{% data reusables.code-scanning.campaigns-api %}

{% ifversion security-campaigns-secrets %}

## Differences between code and secret campaigns

{% data reusables.security.secrets-campaign-preview %}

The creation workflow is the same for all campaigns, but you will notice a few differences in progress tracking and developer experience.

{% rowheaders %}

| Property | Code | Secret |
|--|--|--|
| Alerts available for inclusion | {% octicon "check" aria-label="Supported" %} Default branch only | {% octicon "check" aria-label="Supported" %}
| Repository tracking issues | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Developer notifications | {% octicon "check" aria-label="Supported" %} Requires write access to repository | {% octicon "check" aria-label="Supported" %} Requires view access to alerts list |
| {% ifversion code-secret-alert-assignees %} |
| Alert assignment | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} May raise permissions |
| {% endif %} |
| Automatic remediation support | {% octicon "check" aria-label="Supported" %} {% data variables.copilot.copilot_autofix %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

{% endif %}

{% ifversion code-secret-alert-assignees %}

## About assigning alerts{% ifversion security-campaigns-assign-to-cca %} to users and {% data variables.copilot.copilot_coding_agent %}{% endif %}

{% ifversion code-secret-alert-assignees-ga %}{% elsif ghes = 3.20 %}

>[!NOTE]
> The option to assign {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %} alerts is currently in public preview and is subject to change.

{% endif %}

You can assign a {% data variables.product.prodname_code_scanning %} or {% data variables.product.prodname_secret_scanning %} alert to any user who has **write** access for the repository.

If the assignee for a {% data variables.product.prodname_secret_scanning %} alert **cannot view the alert list**, their permissions are temporarily raised for that alert. Any additional permissions are revoked when they are unassigned from the alert.

{% ifversion code-secret-alert-assignees-ga %}

{% data variables.product.github %} notifies users:

* When they are assigned to an alert
* When that alert is dismissed

For {% data variables.product.prodname_code_scanning %}, you can also perform some of these operations programmatically using the REST API, such as assigning or unassigning users to alerts, and filtering alerts by assignee. For more information, see [AUTOTITLE](/rest/reference/code-scanning) in the REST API documentation. Additionally, webhooks are available to notify you when an alert is assigned or an assignment is removed.

{% endif %}

{% ifversion security-campaigns-assign-to-cca %}

If an autofix has been generated for alerts in a security campaign, you can select those alerts and assign them to {% data variables.copilot.copilot_coding_agent %}. {% data variables.product.prodname_copilot_short %} will create a pull request and add you as a requested reviewer. See [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-coding-agent).

{% endif %}

{% endif %}

## Next steps

* [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale)
* [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-managing-security-campaigns)
