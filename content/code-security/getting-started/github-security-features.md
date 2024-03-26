---
title: GitHub security features
intro: An overview 
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

## About 

see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

### Dependency graph

The dependency graph allows you to explore the ecosystems and packages that your repository depends on and the repositories and packages that depend on your repository.

You can find the dependency graph on the **Insights** tab for your repository. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."


### Security overview

Security overview allows you to review the overall security landscape of your organization, view trends and other insights, and manage security configurations, making it easy to monitor your organization's security status and identify the repositories and organizations at greatest risk. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview).


### Security overview for repositories

Security overview shows which security features are enabled for the repository, and lets you configure any available security features that are not already enabled.

Push protection for users automatically protects you from accidentally committing secrets to public repositories, regardless of whether the repository itself has {% data variables.product.prodname_secret_scanning %} enabled. Push protection for users is on by default, but you can disable the feature at any time through your personal account settings. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-users)."

###  data variables.secret

Automatically detect leaked secrets across all public repositories, as well as public npm packages. {% data variables.product.company_short %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

###  variables.dependabot.custom_rules_caps 


### Dependency review

Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

### Security overview for organizations{% ifversion ghes %}, enterprises,{% endif %} and teams

## Further reading

- "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)"
- "[AUTOTITLE](/get-started/learning-about-github/github-language-support)"
