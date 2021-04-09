---
title: About alerts for vulnerable dependencies
intro: '{% data variables.product.product_name %} sends {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} when we detect vulnerabilities affecting your repository.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - security
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

### About vulnerable dependencies

{% data reusables.repositories.a-vulnerability-is %}

When your code depends on a package that has a security vulnerability, this vulnerable dependency can cause a range of problems for your project or the people who use it.

### Detection of vulnerable dependencies

 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} detects vulnerable dependencies and sends {% data variables.product.prodname_dependabot_alerts %}{% else %}{% data variables.product.product_name %} detects vulnerable dependencies and sends security alerts{% endif %} when:

{% if currentVersion == "free-pro-team@latest" %}
- A new vulnerability is added to the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)."{% else %}
- New advisory data is synchronized to {% data variables.product.prodname_ghe_server %} each hour from {% data variables.product.prodname_dotcom_the_website %}. For more information about advisory data, see "<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}</a>."{% endif %}
- The dependency graph for a repository changes. For example, when a contributor pushes a commit to change the packages or versions it depends on{% if currentVersion == "free-pro-team@latest" %}, or when the code of one of the dependencies changes{% endif %}. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

{% data reusables.repositories.dependency-review %}

For a list of the ecosystems that {% data variables.product.product_name %} can detect vulnerabilities and dependencies for, see "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

{% note %}

**Note:** It is important to keep your manifest and lock files up to date. If the dependency graph doesn't accurately reflect your current dependencies and versions, then you could miss alerts for vulnerable dependencies that you use. You may also get alerts for dependencies that you no longer use.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" % %}
### {% data variables.product.prodname_dependabot %} alerts for vulnerable dependencies
{% else %}
### Security alerts for vulnerable dependencies
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} detects vulnerable dependencies in _public_ repositories and generates {% data variables.product.prodname_dependabot_alerts %} by default. Owners of private repositories, or people with admin access, can enable {% data variables.product.prodname_dependabot_alerts %} by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for their repositories.

You can also enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

For information about permission requirements for actions related to {% data variables.product.prodname_dependabot_alerts %}, see "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)."

{% data variables.product.product_name %} starts generating the dependency graph immediately and generates alerts for any vulnerable dependencies as soon as they are identified. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. For more information, see "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
When {% data variables.product.product_name %} identifies a vulnerable dependency, we generate a {% data variables.product.prodname_dependabot %} alert and display it on the Security tab for the repository. The alert includes a link to the affected file in the project, and information about a fixed version. {% data variables.product.product_name %} also notifies the maintainers of affected repositories about the new alert according to their notification preferences. For more information, see "[Configuring notifications for vulnerable dependencies](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, the alert may also contain a link to a pull request to update the manifest or lock file to the minimum version that resolves the vulnerability. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
When {% data variables.product.product_name %} identifies a vulnerable dependency, we send a security alert to the maintainers of affected repositories with details of the vulnerability, a link to the affected file in the project, and information about a fixed version. 
{% endif %}

{% warning %}

**Note**: {% data variables.product.product_name %}'s security features do not claim to catch all vulnerabilities. Though we are always trying to update our vulnerability database and generate alerts with our most up-to-date information, we will not be able to catch everything or tell you about known vulnerabilities within a guaranteed time frame. These features are not substitutes for human review of each dependency for potential vulnerabilities or any other issues, and we recommend consulting with a security service or conducting a thorough vulnerability review when necessary.

{% endwarning %}

### Access to {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts

You can see all of the alerts that affect a particular project{% if currentVersion == "free-pro-team@latest" %} on the repository's Security tab or{% endif %} in the repository's dependency graph.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
By default, we notify people with admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}.{% endif %} {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working repositories that you own or have admin permissions for. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
We send security alerts to people with admin permissions in the affected repositories by default. {% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository.
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %} For more information, see "[Choosing the delivery method for your notifications](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)."{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} For more information, see "[Configuring notifications for vulnerable dependencies](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %} 
You can also see all the {% data variables.product.prodname_dependabot_alerts %} that correspond to a particular vulnerability in the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#viewing-your-vulnerable-repositories)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Further reading

- "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Viewing and updating vulnerable dependencies in your repository](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Understanding how {% data variables.product.product_name %} uses and protects your data](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
