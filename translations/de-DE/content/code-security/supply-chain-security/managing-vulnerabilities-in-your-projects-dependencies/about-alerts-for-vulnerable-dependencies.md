---
title: About alerts for vulnerable dependencies
intro: '{% data variables.product.product_name %} sends {% data variables.product.prodname_dependabot_alerts %} when we detect vulnerabilities affecting your repository.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
---

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

### About vulnerable dependencies

{% data reusables.repositories.a-vulnerability-is %}

When your code depends on a package that has a security vulnerability, this vulnerable dependency can cause a range of problems for your project or the people who use it.

### Detection of vulnerable dependencies

{% data variables.product.prodname_dependabot %} detects vulnerable dependencies and sends {% data variables.product.prodname_dependabot_alerts %} when:

{% if currentVersion == "free-pro-team@latest" %}
- A new vulnerability is added to the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)" and "[About {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)."{% else %}
- New advisory data is synchronized to {% data variables.product.prodname_ghe_server %} each hour from {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
- The dependency graph for a repository changes. For example, when a contributor pushes a commit to change the packages or versions it depends on{% if currentVersion == "free-pro-team@latest" %}, or when the code of one of the dependencies changes{% endif %}. For more information, see "[About the dependency graph](/code-security/supply-chain-security/about-the-dependency-graph)."

{% data reusables.repositories.dependency-review %}

For a list of the ecosystems that {% data variables.product.product_name %} can detect vulnerabilities and dependencies for, see "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

{% note %}

**Note:** It is important to keep your manifest and lock files up to date. If the dependency graph doesn't accurately reflect your current dependencies and versions, then you could miss alerts for vulnerable dependencies that you use. You may also get alerts for dependencies that you no longer use.

{% endnote %}

### {% data variables.product.prodname_dependabot %} alerts for vulnerable dependencies

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} detects vulnerable dependencies in _public_ repositories and generates {% data variables.product.prodname_dependabot_alerts %} by default. Owners of private repositories, or people with admin access, can enable {% data variables.product.prodname_dependabot_alerts %} by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for their repositories.

You can also enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

For information about permission requirements for actions related to {% data variables.product.prodname_dependabot_alerts %}, see "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)."

{% data variables.product.product_name %} starts generating the dependency graph immediately and generates alerts for any vulnerable dependencies as soon as they are identified. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. For more information, see "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)."
{% endif %}

When {% data variables.product.product_name %} identifies a vulnerable dependency, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. The alert includes a link to the affected file in the project, and information about a fixed version. {% data variables.product.product_name %} also notifies the maintainers of affected repositories about the new alert according to their notification preferences. For more information, see "[Configuring notifications for vulnerable dependencies](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)."

{% if currentVersion == "free-pro-team@latest" %}
For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, the alert may also contain a link to a pull request to update the manifest or lock file to the minimum version that resolves the vulnerability. Weitere Informationen findest Du unter „[ Über {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% warning %}

**Note**: {% data variables.product.product_name %}'s security features do not claim to catch all vulnerabilities. Though we are always trying to update our vulnerability database and generate alerts with our most up-to-date information, we will not be able to catch everything or tell you about known vulnerabilities within a guaranteed time frame. Diese Funktionen ersetzen nicht die menschliche Überprüfung jeder Abhängigkeit auf potenzielle Sicherheitsrisiken oder andere Probleme. Daher empfehlen wir, einen Sicherheitsdienst zu konsultieren oder bei Bedarf eine gründliche Überprüfung der Sicherheitsrisiken durchzuführen.

{% endwarning %}

### Access to {% data variables.product.prodname_dependabot %} alerts

You can see all of the alerts that affect a particular project{% if currentVersion == "free-pro-team@latest" %} on the repository's Security tab or{% endif %} in the repository's dependency graph. For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."

By default, we notify people with admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}. {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working repositories that you own or have admin permissions for. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %} For more information, see "[Configuring notifications for vulnerable dependencies](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)."

You can also see all the {% data variables.product.prodname_dependabot_alerts %} that correspond to a particular vulnerability in the {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- „[Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)“
- „[Grundlegendes zur Verwendung und zum Schutz Deiner Daten in {% data variables.product.product_name %}](/categories/understanding-how-github-uses-and-protects-your-data)“{% endif %}
