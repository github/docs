---
title: About securing your repository
intro: '{% data variables.product.product_name %} provides a number of ways that you can help keep your repository secure.'
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - repositories
---

### Setting up your repository securely

The first step to securing a repository is to set up who can see and modify your code. For more information, see "[Managing repository settings](/github/administering-a-repository/managing-repository-settings)."

### Securing your repository

{% data variables.product.prodname_dotcom %} has a growing set of security features that help you keep your code secure. You can find these on the **Security** tab for your repository.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### Available for all repositories

{% if currentVersion == "free-pro-team@latest" %}
- **Security policy**

  Make it easy for people to confidentially report security vulnerabilities they've found in your repository. For more information, see "[Adding a security policy to your repository](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)."

- **Security advisories**

  Privately discuss and fix security vulnerabilities in your repository's code. You can then publish a security advisory to alert your community to the vulnerability and encourage them to upgrade. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

- **{% data variables.product.prodname_dependabot_alerts %} and security updates**

  View alerts about dependencies that are known to contain security vulnerabilities, and choose whether to have pull requests generated automatically to update these dependencies. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
 {% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
- **{% data variables.product.prodname_dependabot_alerts %}**

  View alerts about dependencies that are known to contain security vulnerabilities, and manage these alerts. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
  {% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **{% data variables.product.prodname_dependabot %} version updates**

  Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)."
  {% endif %}
  {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### Available {% if currentVersion == "free-pro-team@latest" %}for public repositories and for repositories {% endif %}with {% data variables.product.prodname_advanced_security %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
These features are available {% if currentVersion == "free-pro-team@latest" %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}
  {% endif %}

- **{% data variables.product.prodname_code_scanning_capc %} alerts**

  Automatically detect security vulnerabilities and coding errors in new or modified code. Potential problems are highlighted, with detailed information, allowing you to fix the code before it's merged into your default branch. For more information, see "[About code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)."

- **Detected secrets**

  {% if currentVersion == "free-pro-team@latest" %}For private repositories, view {% else %}View {% endif %}any secrets that {% data variables.product.prodname_dotcom %} has found in your code. You should treat tokens or credentials that have been checked into the repository as compromised. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **Dependency review** - Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Exploring dependencies
{% data variables.product.prodname_dotcom %}'s dependency graph allows you to explore:

* Ecosystems and packages that your repository depends on
* Repositories and packages that depend on your repository

You must enable the dependency graph before {% data variables.product.prodname_dotcom %} can generate {% data variables.product.prodname_dependabot_alerts %} for dependencies with security vulnerabilities. {% if currentVersion == "free-pro-team@latest" %}Enabling the dependency graph also enables {% data variables.product.prodname_dotcom %} to run dependency reviews of pull requests.{% endif %}

You can find the dependency graph on the **Insights** tab for your repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}
