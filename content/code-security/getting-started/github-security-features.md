---
title: GitHub security features
intro: 'An overview of {% data variables.product.github %}''s security features.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: get-started
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Code Security
  - Secret Protection
---

## About {% data variables.product.github %}'s security features

{% data variables.product.github %}'s security features help keep your code and secrets secure in repositories and across organizations.

{% ifversion ghas-products %}

{% ifversion fpt or ghec %}

* Some features are available for all {% data variables.product.github %} plans.
* Additional features are available to organizations {% ifversion ghec %}and enterprises{% endif %} on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} that purchase a {% data variables.product.prodname_GHAS %} product:
  * [{% data variables.product.prodname_GH_secret_protection %}](#available-with-github-secret-protection)
  * [{% data variables.product.prodname_GH_code_security %}](#available-with-github-code-security)
* In addition, a number of {% data variables.product.prodname_GH_secret_protection %} and {% data variables.product.prodname_GH_code_security %} features can be run on public repositories for free.{% endif %}

{%- ifversion ghes %}

* Some features are available for all repositories by default.
* Additional features are available to enterprises that purchase a {% data variables.product.prodname_GHAS %} product:
  * [{% data variables.product.prodname_GH_secret_protection %}](#available-with-github-secret-protection)
  * [{% data variables.product.prodname_GH_code_security %}](#available-with-github-code-security){% endif %}

{%- else %}
* Some features are available for all {% data variables.product.github %} plans.
* Additional features are available to enterprises that purchase {% data variables.product.prodname_GHAS %}.

{% endif %}

## Available for all {% data variables.product.github %} plans

The following security features are available for you to use, regardless of the {% data variables.product.github %} plan you are on. {% ifversion ghas-products %}You don't need to purchase {% data variables.product.prodname_GH_cs_or_sp %} to use these features.{% endif %}

{% ifversion fpt or ghec %}

Most of these features are available for public{% ifversion ghec %}, internal,{% endif %} and private repositories.
Some features are _only_ available for public repositories.

{% endif %}

### Security policy

Make it easy for your users to confidentially report security vulnerabilities they've found in your repository. For more information, see [AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository).

### Dependency graph

The dependency graph allows you to explore the ecosystems and packages that your repository depends on and the repositories and packages that depend on your repository.

You can find the dependency graph on the **Insights** tab for your repository. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

### Software Bill of Materials (SBOM)

You can export the dependency graph of your repository as an SPDX-compatible, Software Bill of Materials (SBOM). For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository).

### {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that you can view, search, and filter. {% data reusables.security-advisory.link-browsing-advisory-db %}

### {% data variables.product.prodname_dependabot_alerts %} and security updates

View alerts about dependencies that are known to contain security vulnerabilities, and choose whether to have pull requests generated automatically to update these dependencies. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)
and [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

You can also use default {% data variables.dependabot.auto_triage_rules %} curated by {% data variables.product.github %} to automatically filter out a substantial amount of false positives.

{% data reusables.dependabot.quickstart-link %}

### {% data variables.product.prodname_dependabot_version_updates %}

Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. You can also customize {% data variables.product.prodname_dependabot_version_updates %} to streamline their integration into your repositories. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).

{% ifversion fpt or ghec %}

### Security advisories

Privately discuss and fix security vulnerabilities in your public repository's code. You can then publish a security advisory to alert your community to the vulnerability and encourage community members to upgrade. For more information, see [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories).

{% endif %}

### Repository rulesets

Enforce consistent code standards, security, and compliance across branches and tags. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

{% ifversion fpt or ghec %}

### Artifact attestations

Create unfalsifiable provenance and integrity guarantees for the software you build. For more information, see [AUTOTITLE](/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds).

{% ifversion fpt %}

> [!NOTE]
> If you are on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, or {% data variables.product.prodname_team %} plan, artifact attestations are only available for public repositories. To use artifact attestations in private or internal repositories, you must be on a {% data variables.product.prodname_ghe_cloud %} plan.{% endif %}

### {% data variables.secret-scanning.partner_alerts_caps %}

When {% data variables.product.github %} detects a leaked secret in a public repository, or a public npm packages, {% data variables.product.github %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).

{% ifversion secret-scanning-push-protection-for-users %}

### Push protection for users

Push protection for users automatically protects you from accidentally committing secrets to public repositories, regardless of whether the repository itself has {% data variables.product.prodname_secret_scanning %} enabled. Push protection for users is on by default, but you can disable the feature at any time through your personal account settings. For more information, see [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users).

{% endif %}

{% endif %}

{% ifversion ghas-products %}

## Available with {% data variables.product.prodname_GH_secret_protection %}

For accounts on {% ifversion fpt or ghec %}{% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %}{% endif %}{% ifversion ghes %} {% data variables.product.prodname_ghe_server %}{% endif %}, you can access additional security features when you purchase **{% data variables.product.prodname_GH_secret_protection %}**.

{% data variables.product.prodname_GH_secret_protection %} includes features that help you detect and prevent secret leaks, such as {% data variables.product.prodname_secret_scanning %} and push protection.

These features are available for all repository types. {% ifversion fpt or ghec %}Some of these features are available for public repositories free of charge, meaning that you don't need to purchase {% data variables.product.prodname_GH_secret_protection %} to enable the feature on a public repository.{% endif %}

<!--Hiding information on setting up a trial for now, as there is no available link for fpt yet. Needs versioning for fpt, ghec and ghes.
For information about how you can try {% data variables.product.prodname_GH_secret_protection %} for free, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security).
-->

{% else %}

## Available with {% data variables.product.prodname_GHAS %}

{% data variables.product.prodname_GHAS %} features are available for enterprises with a license for {% data variables.product.prodname_GHAS %}. The features are restricted to repositories owned by an organization.

{% endif %}

### {% data variables.secret-scanning.user_alerts_caps %}

Automatically detect tokens or credentials that have been checked into a repository. You can view alerts for any secrets that {% data variables.product.github %} finds in your code, in the **Security** tab of the repository, so that you know which tokens or credentials to treat as compromised. For more information, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts#about-user-alerts).

{% data reusables.advanced-security.available-for-public-repos %}

{% ifversion secret-scanning-ai-generic-secret-detection %}

### {% data variables.secret-scanning.copilot-secret-scanning %}

{% data variables.secret-scanning.copilot-secret-scanning %}'s generic secret detection is an AI-powered expansion of {% data variables.product.prodname_secret_scanning %} that identifies unstructured secrets (passwords) in your source code and then generates an alert. For more information, see [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets).

{% endif %}

### Push protection

Push protection proactively scans your code, and any repository contributors' code, for secrets during the push process and blocks the push if any secrets are detected. If a contributor bypasses the block, {% data variables.product.github %} creates an alert. For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

{% data reusables.advanced-security.available-for-public-repos %}

### Delegated bypass for push protection

Delegated bypass for push protection lets you control which individuals, roles and teams can bypass push protection, and implements a review and approval cycle for pushes containing secrets. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection).

### Custom patterns

You can define custom patterns to identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}, such as patterns that are internal to your organization. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

<!--Hiding security overview for earlier GHES versions, so it isn't duplicated below-->
{% ifversion ghas-products %}

### Security overview

Security overview allows you to review the overall security landscape of your organization, view trends and other insights, and manage security configurations, making it easy to monitor your organization's security status and identify the repositories and organizations at greatest risk. For more information, see [AUTOTITLE](/code-security/security-overview/about-security-overview).

## Available with {% data variables.product.prodname_GH_code_security %}

For accounts on {% ifversion fpt or ghec %}{% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %}{% endif %}{% ifversion ghes %} {% data variables.product.prodname_ghe_server %}{% endif %}, you can access additional security features when you purchase **{% data variables.product.prodname_GH_code_security %}**.

{% data variables.product.prodname_GH_code_security %} includes features that help you find and fix vulnerabilities, like {% data variables.product.prodname_code_scanning %}, premium {% data variables.product.prodname_dependabot %} features, and dependency review.

These features are available for all repository types. {% ifversion fpt or ghec %}Some of these features are available for public repositories free of charge, meaning that you don't need to purchase {% data variables.product.prodname_GH_code_security %} to enable the feature on a public repository.{% endif %}

<!--Hiding information on setting up a trial for now, as there is no available link for fpt yet. Needs versioning for fpt, ghec & ghes.

For information about how you can try {% data variables.product.prodname_GH_code_security %} for free, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security).

-->
{% endif %}

### {% data variables.product.prodname_code_scanning_caps %}

Automatically detect security vulnerabilities and coding errors in new or modified code. Potential problems are highlighted, with detailed information, allowing you to fix the code before it's merged into your default branch. For more information, see [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning).

{% data reusables.advanced-security.available-for-public-repos %}

### {% data variables.product.prodname_codeql_cli %}

Run {% data variables.product.prodname_codeql %} processes locally on software projects or to generate {% data variables.product.prodname_code_scanning %} results for upload to {% data variables.product.github %}. For more information, see [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli).

{% data reusables.advanced-security.available-for-public-repos %}

{% ifversion code-scanning-autofix %}

### {% data variables.copilot.copilot_autofix_short %}

Get automatically generated fixes for {% data variables.product.prodname_code_scanning %} alerts. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

{% data reusables.advanced-security.available-for-public-repos %}

{% endif %}

### {% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.dependabot-custom-rules-ghas %}

### Dependency review

Show the full impact of changes to dependencies and see details of any vulnerable versions before you merge a pull request. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

{% data reusables.advanced-security.available-for-public-repos %}

{% ifversion security-campaigns %}

### Security campaigns

Fix security alerts at scale by creating security campaigns and collaborating with developers to reduce your security backlog. For more information, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns).

{% endif %}

### Security overview

Security overview allows you to review the overall security landscape of your organization, view trends and other insights, and manage security configurations, making it easy to monitor your organization's security status and identify the repositories and organizations at greatest risk. For more information, see [AUTOTITLE](/code-security/security-overview/about-security-overview).

{% ifversion copilot-chat-ghas-alerts %}

## Leveraging {% data variables.copilot.copilot_chat %} to understand security alerts

With a {% data variables.copilot.copilot_enterprise %} license, you can also ask {% data variables.copilot.copilot_chat %} for help to better understand security alerts in repositories in your organization from {% data variables.product.prodname_GHAS %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

## Further reading

* [AUTOTITLE](/get-started/learning-about-github/githubs-plans)
* [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)
* [AUTOTITLE](/get-started/learning-about-github/github-language-support)
