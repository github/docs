---
title: About Dependabot alert rules
intro: 'You can use {% data variables.product.prodname_dependabot %} alert rules to auto-triage alerts, so you can reduce false positives and better prioritize the alerts that you''re interested in.'
permissions: 'People with write permissions can view {% data variables.product.prodname_dependabot %} alert rules for the repository. People with with admin permissions to a repository, or the security manager role for the repository, can enable or disable {% data variables.product.prodname_dependabot %} alert rules for the repository{% ifversion dependabot-alert-custom-rules-repo-level %}, as well as create custom alert rules{% endif %}.'
versions:
  feature: dependabot-alert-rules-auto-dismissal-npm-dev-dependencies
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: About alert rules
redirect_from:
  - /code-security/dependabot/dependabot-alerts/using-alert-rules-to-prioritize-dependabot-alerts
---

{% data reusables.dependabot.github-alert-rules-beta %}

## About {% data variables.product.prodname_dependabot %} alert rules

{% data variables.product.prodname_dependabot %} alert rules allow you to instruct {% data variables.product.prodname_dependabot %} to automatically dismiss or reopen certain alerts, based on complex logic from a variety of contextual criteria.

{% ifversion dependabot-alert-custom-rules-repo-level %}
There are two types of {% data variables.product.prodname_dependabot %} alert rules:

- A {% data variables.product.company_short %}-curated rule, called `Dismiss low impact alerts`
- User-created custom rules

The {% data variables.product.company_short %}-curated rule, `Dismiss low impact alerts`, auto-dismisses certain types of vulnerabilities that are found in npm dependencies used in development. The rule has been curated to reduce false positives and reduce alert fatigue. The rule is enabled by default for public repositories and can be opted into for private repositories. However, you cannot modify {% data variables.product.company_short %}-curated rules. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/using-github-curated-alert-rules-to-prioritize-dependabot-alerts)."

With user-created custom rules, you can create your own rules to automatically dismiss or reopen alerts based on your own criteria, such as severity, package name, CWE, and more. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/customizing-alert-rules-to-prioritize-dependabot-alerts)."{% endif %}

Whilst you may find it useful to auto-dismiss alerts, you can still reopen auto-dismissed alerts and filter to see which alerts have been auto-dismissed. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/managing-automatically-dismissed-alerts)."

Additionally, auto-dismissed alerts are still available for reporting and reviewing, and can be auto-reopened if the alert metadata changes, for example:
- If you change the scope of a dependency from development to production.
- If {% data variables.product.company_short %} modifies certain metadata for the related advisory.

Auto-dismissed alerts are defined by the `resolution:auto-dismiss` close reason. Automatic dismissal activity is included in alert webhooks, REST and GraphQL APIs, and the audit log. For more information, see "[AUTOTITLE](/rest/dependabot/alerts)" in the REST API documentation, and the "`repository_vulnerability_alert`" section in "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions)."

## Further reading

- [AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/using-github-curated-alert-rules-to-prioritize-dependabot-alerts)
- [AUTOTITLE](/code-security/dependabot/dependabot-alert-rules/customizing-alert-rules-to-prioritize-dependabot-alerts)
