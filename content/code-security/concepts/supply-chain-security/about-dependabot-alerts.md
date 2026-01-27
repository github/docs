---
title: About Dependabot alerts
intro: '{% data variables.product.prodname_dependabot_alerts %} help you find and fix vulnerable dependencies before they become security risks.'
product: '{% data reusables.gated-features.dependabot-alerts %}'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
  - /code-security/dependabot/dependabot-alerts/about-dependabot-alerts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
contentType: concepts
---

Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities. When your code depends on packages with known security vulnerabilities, you become a target for attackers seeking to exploit your system—potentially gaining access to your code, data, customers, or contributors. {% data variables.product.prodname_dependabot_alerts %} notify you about vulnerable dependencies so you can upgrade to secure versions and protect your project.

## When {% data variables.product.prodname_dependabot %} sends alerts

{% data variables.product.prodname_dependabot %} scans your repository's default branch and sends alerts when:

{% ifversion fpt or ghec %}
* A new vulnerability is added to the {% data variables.product.prodname_advisory_database %}{% else %}
* New advisory data is synchronized to {% data variables.product.prodname_dotcom %} each hour from {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
* Your dependency graph changes—for example, when you push commits that update packages or versions

For supported ecosystems, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#supported-package-ecosystems).

## Understanding alerts

When {% data variables.product.github %} detects a vulnerable dependency, a {% data variables.product.prodname_dependabot %} alert appears on the repository's **Security** tab and dependency graph. Each alert includes:

* A link to the affected file
* Details about the vulnerability and its severity
* Information about a fixed version (when available)

For information about notifications, viewing, and managing alerts, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

## Enabling alerts

Repository administrators and organization owners can enable {% data variables.product.prodname_dependabot_alerts %} for their repositories{% ifversion fpt or ghec %} and organizations{% endif %}. When enabled, {% data variables.product.github %} immediately generates the dependency graph and creates alerts for any vulnerable dependencies it identifies. By default, people with write, maintain, or admin permissions receive notifications.{% ifversion fpt or ghec %} Repository administrators can grant access to additional people or teams.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

See [AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts).

## Limitations

{% data variables.product.prodname_dependabot_alerts %} have some limitations:

* Alerts can't catch every security issue. Always review your dependencies and keep manifest and lock files up to date for accurate detection.
* New vulnerabilities may take time to appear in the {% data variables.product.prodname_advisory_database %} and trigger alerts.
* Only advisories reviewed by {% data variables.product.github %} trigger alerts.
* {% data variables.product.prodname_dependabot %} doesn't scan archived repositories.
* {% data variables.product.prodname_dependabot %} doesn't generate alerts for malware.
* {% data reusables.dependabot.dependabot-alert-actions-semver %}

{% ifversion fpt or ghec %}{% data variables.product.github %} never publicly discloses vulnerabilities for any repository. {% endif %}

{% ifversion copilot-chat-ghas-alerts %}

## Asking {% data variables.copilot.copilot_chat %} about alerts

With a {% data variables.copilot.copilot_enterprise %} license, you can ask {% data variables.copilot.copilot_chat_short %} questions about {% data variables.product.prodname_dependabot_alerts %} in your organization's repositories. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
* [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)
* [AUTOTITLE](/code-security/getting-started/auditing-security-alerts)
