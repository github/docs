---
title: GitHub security features
intro: 'An overview of {% data variables.product.prodname_dotcom %} security features.'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

## About {% data variables.product.prodname_dotcom %}'s security features

{% data variables.product.prodname_dotcom %} has security features that help keep code and secrets secure in repositories and across organizations. Some features are available for all repositories and others are only available {% ifversion fpt %}for public repositories and for repositories {% endif %}with a {% data variables.product.prodname_GH_advanced_security %} license.

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that you can view, search, and filter. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghes > 2.22 %}
## Available for all repositories

{% ifversion fpt or ghes > 3.0 or ghae-next %}
### Security policy
  
Make it easy for your users to confidentially report security vulnerabilities they've found in your repository. For more information, see "[Adding a security policy to your repository](/code-security/getting-started/adding-a-security-policy-to-your-repository)."
{% endif %}

{% ifversion fpt %}
### Security advisories

Privately discuss and fix security vulnerabilities in your repository's code. You can then publish a security advisory to alert your community to the vulnerability and encourage community members to upgrade. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

### {% data variables.product.prodname_dependabot_alerts %} and security updates

View alerts about dependencies that are known to contain security vulnerabilities, and choose whether to have pull requests generated automatically to update these dependencies. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
and "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% ifversion ghes > 2.22 %}
### {% data variables.product.prodname_dependabot_alerts %}

View alerts about dependencies that are known to contain security vulnerabilities, and manage these alerts. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
{% endif %}

{% ifversion fpt %}
### {% data variables.product.prodname_dependabot %} version updates

Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)."
{% endif %}

### Dependency graph
The dependency graph allows you to explore the ecosystems and packages that your repository depends on and the repositories and packages that depend on your repository.

You can find the dependency graph on the **Insights** tab for your repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}

## Available {% ifversion fpt %}for public repositories and for repositories {% endif %}with {% data variables.product.prodname_advanced_security %}

{% ifversion fpt or ghes > 2.22 %}
These features are available {% ifversion fpt %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %} alerts

Automatically detect security vulnerabilities and coding errors in new or modified code. Potential problems are highlighted, with detailed information, allowing you to fix the code before it's merged into your default branch. For more information, see "[About code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)."

### {% data variables.product.prodname_secret_scanning_caps %} alerts

{% ifversion fpt %}For private repositories, view {% else %}View {% endif %}any secrets that {% data variables.product.prodname_dotcom %} has found in your code. You should treat tokens or credentials that have been checked into the repository as compromised. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."

{% endif %}

{% ifversion fpt or ghes > 3.1 %}
### Dependency review

Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

## Further reading
- "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)"
- "[{% data variables.product.prodname_dotcom %} language support](/github/getting-started-with-github/github-language-support)"
