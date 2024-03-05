---
title: About Dependabot auto-triage rules
intro: '{% data variables.dependabot.auto_triage_rules %} are a powerful tool to help you better manage your security alerts at scale. {% data variables.product.prodname_dependabot %}''s default rules are curated for you and filter out a substantial amount of false positives. {% data variables.dependabot.custom_rules_caps %} provide control over which alerts are ignored, snoozed, or trigger a {% data variables.product.prodname_dependabot %} security update to resolve the alert.'
permissions: 'People with write permissions can view {% data variables.dependabot.auto_triage_rules %} for the repository. People with admin permissions to a repository can enable or disable {% data variables.dependabot.auto_triage_rules_short %} for the repository, as well as create {% data variables.dependabot.custom_rules %}. Additionally, organization owners and security managers can set {% data variables.dependabot.auto_triage_rules_short %} at the organization-level and optionally choose to enforce rules for repositories in the organization.'
versions:
  feature: dependabot-auto-triage-rules
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: About auto-triage rules
redirect_from:
  - /code-security/dependabot/dependabot-alerts/using-alert-rules-to-prioritize-dependabot-alerts
  - /code-security/dependabot/dependabot-alert-rules/about-dependabot-alert-rules
---

{% data reusables.dependabot.dependabot-auto-triage-rules-beta %}

## About {% data variables.dependabot.auto_triage_rules %}

{% data variables.dependabot.auto_triage_rules %} allow you to instruct {% data variables.product.prodname_dependabot %} to automatically triage {% data variables.product.prodname_dependabot_alerts %}. You can use {% data variables.dependabot.auto_triage_rules_short %} to automatically dismiss or snooze certain alerts, or specify the alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for.

There are two types of {% data variables.dependabot.auto_triage_rules %}:

- {% data variables.dependabot.default_rules %}
- {% data variables.dependabot.custom_rules_caps %}

The {% data variables.product.company_short %}-curated default rule, `Dismiss low impact issues for development-scoped dependencies`, auto-dismisses certain types of vulnerabilities that are found in npm dependencies used in development. The rule has been curated to reduce false positives and reduce alert fatigue. The rule is enabled by default for public repositories and can be opted into for private repositories. However, you cannot modify {% data variables.dependabot.default_rules %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/using-github-curated-default-rules-to-prioritize-dependabot-alerts)."

With {% data variables.dependabot.custom_rules %}, you can create your own rules to automatically dismiss or reopen alerts based on targeted metadata, such as severity, package name, CWE, and more. You can also specify which alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts)."

Whilst you may find it useful to auto-dismiss alerts, you can still reopen auto-dismissed alerts and filter to see which alerts have been auto-dismissed. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/managing-automatically-dismissed-alerts)."

Additionally, auto-dismissed alerts are still available for reporting and reviewing, and can be auto-reopened if the alert metadata changes, for example:
- If you change the scope of a dependency from development to production.
- If {% data variables.product.company_short %} modifies certain metadata for the related advisory.

Auto-dismissed alerts are defined by the `resolution:auto-dismiss` close reason. Automatic dismissal activity is included in alert webhooks, REST and GraphQL APIs, and the audit log. For more information, see "[AUTOTITLE](/rest/dependabot/alerts)" in the REST API documentation, and the "`repository_vulnerability_alert`" section in "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions)."

## Further reading

- [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/using-github-curated-default-rules-to-prioritize-dependabot-alerts)
- [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts)
