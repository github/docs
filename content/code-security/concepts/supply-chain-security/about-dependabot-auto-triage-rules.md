---
title: About Dependabot auto-triage rules
intro: 'Control how {% data variables.product.prodname_dependabot %} handles security alerts, including filtering, ignoring, snoozing, or triggering security updates.'
product: '{% data reusables.gated-features.dependabot-auto-triage-rules %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Dependabot auto-triage rules
redirect_from:
  - /code-security/dependabot/dependabot-alerts/using-alert-rules-to-prioritize-dependabot-alerts
  - /code-security/dependabot/dependabot-alert-rules/about-dependabot-alert-rules
  - /code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules
  - /code-security/dependabot/dependabot-auto-triage-rules
contentType: concepts
---

## About {% data variables.dependabot.auto_triage_rules %}

{% data variables.dependabot.auto_triage_rules %} allow you to instruct {% data variables.product.prodname_dependabot %} to automatically triage {% data variables.product.prodname_dependabot_alerts %}{% ifversion dependabot-malware-alerts %} and {% data variables.product.prodname_dependabot_malware_alerts %}{% endif %}. You can use {% data variables.dependabot.auto_triage_rules_short %} to:
* Automatically dismiss or snooze certain alerts
* Specify the {% data variables.product.prodname_dependabot_alerts %} you want {% data variables.product.prodname_dependabot %} to open pull requests for

Rules are applied before alert notifications are sent, so enabling rules that auto-dismiss low-risk alerts will help reduce notification noise.

There are two types of {% data variables.dependabot.auto_triage_rules %}:

* {% data variables.dependabot.github_presets %}
* {% data variables.dependabot.custom_rules_caps %}

### About {% data variables.dependabot.github_presets %}

{% data variables.dependabot.github_presets %} are rules curated by {% data variables.product.company_short %} that are available for all repositories.

#### Dismiss low impact issues for development-scoped dependencies

{% data reusables.dependabot.dismiss-low-impact-rule %} These alerts cover cases that feel like false alarms to most developers as the associated vulnerabilities:

* Are unlikely to be exploitable in a developer (non-production or runtime) environment.
* May relate to resource management, programming and logic, and information disclosure issues.
* At worst, have limited effects like slow builds or long-running tests.
* Are not indicative of issues in production.

The rule is enabled by default for public repositories and can be opted into for private repositories. For instructions, see [Enabling the `Dismiss low impact issues for development-scoped dependencies` rule for your private repository](/code-security/dependabot/dependabot-auto-triage-rules/using-github-preset-rules-to-prioritize-dependabot-alerts#enabling-the-dismiss-low-impact-issues-for-development-scoped-dependencies-rule-for-your-private-repository).

For more information about the criteria used by the rule, see [AUTOTITLE](/code-security/reference/supply-chain-security/criteria-for-preset-rules).

{% ifversion dependabot-malware-alerts %}

#### Dismiss package malware alerts

The `Dismiss package malware alerts` rule is a {% data variables.product.company_short %} preset that auto-dismisses alerts that flag all versions of a package as malicious. If your project depends on an **internal** package with the same ecosystem and name as a malicious **public** package, {% data variables.product.prodname_dependabot %} can generate a false positive alert, which the rule then auto-dismisses.

> [!IMPORTANT]
> Be aware that if a contributor adds a dependency that is truly malicious across all versions, this rule will auto-dismiss the related alert.

The `Dismiss package malware alerts` rule is disabled by default, but can be enabled for any repository using {% data variables.product.prodname_dependabot_malware_alerts %}.

{% endif %}

### About {% data variables.dependabot.custom_rules %}

> [!NOTE]
> {% data reusables.gated-features.dependabot-custom-auto-triage-rules %}

With {% data variables.dependabot.custom_rules %}, you can create your own rules to automatically dismiss or reopen alerts based on targeted metadata, such as severity, package name, CWE, and more. You can also specify which {% data variables.product.prodname_dependabot_alerts %} you want {% data variables.product.prodname_dependabot %} to open pull requests for. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts).

You can create custom rules from the **Settings** tab of the repository, provided the repository belongs to an organization that has a license for {% data variables.product.prodname_GHAS_or_code_security %}. For more information, see [Adding custom auto-triage rules to your repository](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts#adding-custom-auto-triage-rules-to-your-repository).

### About auto-dismissing alerts

Whilst you may find it useful to use auto-triage rules to auto-dismiss alerts, you can still reopen auto-dismissed alerts and filter to see which alerts have been auto-dismissed. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/managing-automatically-dismissed-alerts).

Additionally, auto-dismissed alerts are still available for reporting and reviewing, and can be auto-reopened if the alert metadata changes, for example:
* If you change the scope of a dependency from development to production.
* If {% data variables.product.company_short %} modifies certain metadata for the related advisory.

Auto-dismissed alerts are defined by the `resolution:auto-dismiss` close reason. Automatic dismissal activity is included in alert webhooks, REST and GraphQL APIs, and the audit log. For more information, see [AUTOTITLE](/rest/dependabot/alerts), and the "`repository_vulnerability_alert`" section in [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions).

## Next steps

To get started with {% data variables.dependabot.auto_triage_rules %}, see [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/using-github-preset-rules-to-prioritize-dependabot-alerts).

To customize your auto-triage experience, see [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts).
