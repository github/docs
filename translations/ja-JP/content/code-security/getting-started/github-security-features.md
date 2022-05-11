---
title: GitHub security features
intro: 'An overview of {% data variables.product.prodname_dotcom %} security features.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

## About {% data variables.product.prodname_dotcom %}'s security features

{% data variables.product.prodname_dotcom %} has security features that help keep code and secrets secure in repositories and across organizations. {% data reusables.advanced-security.security-feature-availability %}

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that you can view, search, and filter. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## Available for all repositories
{% endif %}
### Security policy

Make it easy for your users to confidentially report security vulnerabilities they've found in your repository. For more information, see "[Adding a security policy to your repository](/code-security/getting-started/adding-a-security-policy-to-your-repository)."

{% ifversion fpt or ghec %}
### Security advisories

Privately discuss and fix security vulnerabilities in your repository's code. You can then publish a security advisory to alert your community to the vulnerability and encourage community members to upgrade. For more information, see "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."

{% endif %}
{% ifversion fpt or ghec or ghes > 3.2 %}

### {% data variables.product.prodname_dependabot_alerts %} and security updates

View alerts about dependencies that are known to contain security vulnerabilities, and choose whether to have pull requests generated automatically to update these dependencies. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
and "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% ifversion ghes < 3.3 or ghae-issue-4864 %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

View alerts about dependencies that are known to contain security vulnerabilities, and manage these alerts. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### {% data variables.product.prodname_dependabot %} version updates

Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)."
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
### Dependency graph
The dependency graph allows you to explore the ecosystems and packages that your repository depends on and the repositories and packages that depend on your repository.

You can find the dependency graph on the **Insights** tab for your repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

### Security overview for repositories
For all public repositories, the security overview shows which security features are enabled for the repository, and offers the option to configure any available security features that are not currently enabled.

## Available with {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}
The following {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can use the full set of features in any of their repositories. For a list of the features available with {% data variables.product.prodname_ghe_cloud %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %}
Many {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations within an enterprise that has a {% data variables.product.prodname_GH_advanced_security %} license can use all the following features on their repositories. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %}
{% data variables.product.prodname_GH_advanced_security %} features are available for enterprises with a license for {% data variables.product.prodname_GH_advanced_security %}. The features are restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %}
{% data variables.product.prodname_GH_advanced_security %} features are available for repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Automatically detect security vulnerabilities and coding errors in new or modified code. Potential problems are highlighted, with detailed information, allowing you to fix the code before it's merged into your default branch. For more information, see "[About code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)."

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Automatically detect leaked secrets across all public repositories. {% data variables.product.company_short %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}

{% ifversion not fpt %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %}
Available only with a license for {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Automatically detect tokens or credentials that have been checked into a repository. You can view alerts for any secrets that {% data variables.product.company_short %} finds in your code, so that you know which tokens or credentials to treat as compromised. For more information, see "[About secret scanning](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)."
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
### Dependency review

Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae-issue-4554 %}
### Security overview for organizations{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}, enterprises,{% endif %} and teams

{% ifversion ghec %}
Available only with a license for {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Review the security configuration and alerts for your organization and identify the repositories at greatest risk. For more information, see "[About the security overview](/code-security/security-overview/about-the-security-overview)."
{% endif %}

## Further reading
- "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)"
- "[{% data variables.product.prodname_dotcom %} language support](/github/getting-started-with-github/github-language-support)"
