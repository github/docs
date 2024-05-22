---
title: GitHub security features
intro: 'An overview of {% data variables.product.prodname_dotcom %} security features.'
versions:
  fpt: '*'
  ghes: '*'
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

## Available for all repositories

### Security policy

Make it easy for your users to confidentially report security vulnerabilities they've found in your repository. For more information, see "[AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository)."

### {% data variables.product.prodname_dependabot_alerts %} and security updates

View alerts about dependencies that are known to contain security vulnerabilities, and choose whether to have pull requests generated automatically to update these dependencies. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

{% ifversion dependabot-auto-triage-rules %}

You can use default {% data variables.dependabot.auto_triage_rules %} curated by {% data variables.product.prodname_dotcom %} to automatically filter out a substantial amount of false positives. {% data reusables.dependabot.dismiss-low-impact-rule %}

{% endif %}

{% data reusables.dependabot.quickstart-link %}

### {% data variables.product.prodname_dependabot_version_updates %}

Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. You can also customize {% data variables.product.prodname_dependabot_version_updates %} to streamline their integration into your repositories. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

### Dependency graph

The dependency graph allows you to explore the ecosystems and packages that your repository depends on and the repositories and packages that depend on your repository.

You can find the dependency graph on the **Insights** tab for your repository. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

{% data reusables.dependency-graph.sbom-export %}

{% ifversion security-overview-displayed-alerts %}

### Security overview

Security overview allows you to review the overall security landscape of your organization, view trends and other insights, and manage security configurations, making it easy to monitor your organization's security status and identify the repositories and organizations at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."

{% else %}

### Security overview for repositories

Security overview shows which security features are enabled for the repository, and lets you configure any available security features that are not already enabled.
{% endif %}

{% ifversion fpt or ghec %}

## Available for free public repositories

{% ifversion fpt or ghec %}

### Security advisories

Privately discuss and fix security vulnerabilities in your repository's code. You can then publish a security advisory to alert your community to the vulnerability and encourage community members to upgrade. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."

{% endif %}

### {% data variables.secret-scanning.user_alerts_caps %}

Automatically detect tokens or credentials that have been checked into a {% ifversion ghec %}user-owned {% endif %}public repository. You can view alerts for any secrets that {% data variables.product.company_short %} finds in your code, in the **Security** tab of the repository, so that you know which tokens or credentials to treat as compromised. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)."

{% ifversion secret-scanning-push-protection-for-users %}

### Push protection for users

Push protection for users automatically protects you from accidentally committing secrets to public repositories, regardless of whether the repository itself has {% data variables.product.prodname_secret_scanning %} enabled. Push protection for users is on by default, but you can disable the feature at any time through your personal account settings. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-users)."

{% endif %}

### {% data variables.secret-scanning.partner_alerts_caps %}

Automatically detect leaked secrets across all public repositories, as well as public npm packages. {% data variables.product.company_short %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% endif %}

## Available with {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}
The following {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can use the full set of features in any of their repositories. For a list of the features available with {% data variables.product.prodname_ghe_cloud %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %}
Many {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations within an enterprise that have a {% data variables.product.prodname_GH_advanced_security %} license can use the following features on all their repositories. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %}
{% data variables.product.prodname_GH_advanced_security %} features are available for enterprises with a license for {% data variables.product.prodname_GH_advanced_security %}. The features are restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{% endif %}

{% data reusables.advanced-security.ghas-trial %}

### {% data variables.product.prodname_code_scanning_caps %}

Automatically detect security vulnerabilities and coding errors in new or modified code. Potential problems are highlighted, with detailed information, allowing you to fix the code before it's merged into your default branch. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)."

### {% data variables.secret-scanning.user_alerts_caps %}

Automatically detect tokens or credentials that have been checked into a repository. You can view alerts for any secrets that {% data variables.product.company_short %} finds in your code, in the **Security** tab of the repository, so that you know which tokens or credentials to treat as compromised. For more information, see {% ifversion fpt or ghec %}"[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users){% elsif ghes %}"[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-on-github-enterprise-server){% endif %}."

{% ifversion dependabot-auto-triage-rules %}

### {% data variables.dependabot.custom_rules_caps %}

{% data reusables.dependabot.dependabot-custom-rules-ghas %}

{% endif %}

### Dependency review

Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}

### Security overview for organizations{% ifversion ghes %}, enterprises,{% endif %} and teams

Review the security configuration and alerts for your organization and identify the repositories at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."
{% endif %}

## Further reading

- "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)"
- "[AUTOTITLE](/get-started/learning-about-github/github-language-support)"
