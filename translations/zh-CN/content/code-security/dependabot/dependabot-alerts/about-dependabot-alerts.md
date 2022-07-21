---
title: About Dependabot alerts
intro: '{% data variables.product.product_name %} sends {% data variables.product.prodname_dependabot_alerts %} when we detect that your repository uses a vulnerable dependency{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## About {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %}
{% data reusables.advisory-database.beta-malware-advisories %}
{% endif %}

{% data variables.product.prodname_dependabot_alerts %} tell you that your code depends on a package that is insecure.

If your code depends on a package with a security vulnerability, this can cause a range of problems for your project or the people who use it. You should upgrade to a secure version of the package as soon as possible.{% ifversion GH-advisory-db-supports-malware %} If your code uses malware, you need to replace the package with a secure alternative.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detection of insecure dependencies

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} performs a scan to detect insecure dependencies, and sends {% data variables.product.prodname_dependabot_alerts %} when:

{% ifversion fpt or ghec %}
- A new advisory is added to the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security advisories in the {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)."{% else %}
- New advisory data is synchronized to {% data variables.product.product_location %} each hour from {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  {% note %}

  **Note:** Only advisories that have been reviewed by {% data variables.product.company_short %} will trigger {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- The dependency graph for a repository changes. For example, when a contributor pushes a commit to change the packages or versions it depends on{% ifversion fpt or ghec %}, or when the code of one of the dependencies changes{% endif %}. For more information, see "[About the dependency graph](/code-security/supply-chain-security/about-the-dependency-graph)."

{% data reusables.repositories.dependency-review %}

For a list of the ecosystems that {% data variables.product.product_name %} detects insecure dependencies in, see "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

{% note %}

**Note:** It is important to keep your manifest and lock files up to date. If the dependency graph doesn't accurately reflect your current dependencies and versions, then you could miss alerts for insecure dependencies that you use. You may also get alerts for dependencies that you no longer use.

{% endnote %}

##  Configuration of {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detects vulnerable dependencies and malware in _public_ repositories and displays the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Repository owners or people with admin access can enable {% data variables.product.prodname_dependabot_alerts %} for public repositories. Owners of private repositories, or people with admin access, can enable {% data variables.product.prodname_dependabot_alerts %} by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for their repositories.

You can also enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your user account or organization. For more information, see "[Configuring {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."

For information about access requirements for actions related to {% data variables.product.prodname_dependabot_alerts %}, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)."

{% data variables.product.product_name %} starts generating the dependency graph immediately and generates alerts for any insecure dependencies as soon as they are identified. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. For more information, see "[Managing data use settings for your private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)."
{% endif %}

When {% data variables.product.product_name %} identifies a vulnerable dependency{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}, we generate a {% data variables.product.prodname_dependabot %} alert and display it {% ifversion fpt or ghec or ghes %} on the Security tab for the repository and{% endif %} in the repository's dependency graph. The alert includes {% ifversion fpt or ghec or ghes %}a link to the affected file in the project, and {% endif %}information about a fixed version. {% data variables.product.product_name %} may also notify the maintainers of affected repositories about the new alert according to their notification preferences. For more information, see "[Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

{% ifversion fpt or ghec or ghes > 3.2 %}
For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, the alert may also contain a link to a pull request to update the manifest or lock file to the minimum version that resolves the vulnerability. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% warning %}

**Note**: {% data variables.product.product_name %}'s security features do not claim to catch all vulnerabilities{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}. We actively maintain {% data variables.product.prodname_advisory_database %} and generate alerts with the most up-to-date information. However, we cannot catch everything or tell you about known vulnerabilities within a guaranteed time frame. These features are not substitutes for human review of each dependency for potential vulnerabilities or any other issues, and we recommend consulting with a security service or conducting a thorough dependency review when necessary.

{% endwarning %}

## Access to  {% data variables.product.prodname_dependabot_alerts %}

You can see all of the alerts that affect a particular project{% ifversion fpt or ghec %} on the repository's Security tab or{% endif %} in the repository's dependency graph. For more information, see "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

By default, we notify people with admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}{% data variables.product.product_name %} never publicly discloses insecure dependencies for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working with repositories that you own or have admin permissions for. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} For more information, see "[Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

You can also see all the {% data variables.product.prodname_dependabot_alerts %} that correspond to a particular advisory in the {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Further reading

- "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %}
{% ifversion fpt or ghec %}- "[Privacy on {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
