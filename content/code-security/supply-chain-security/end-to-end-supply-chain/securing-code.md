---
title: Best practices for securing code in your supply chain
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: Guidance on how to protect the center of your supply chain—the code you write and the code you depend on.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
---

## About this guide

This guide describes the highest impact changes you can make to improve the security of your code. Each section outlines a change you can make to your processes to improve security. The highest impact changes are listed first.

## What's the risk?

Key risks in the development process include:

- Using dependencies with security vulnerabilities that an attacker could exploit.
- Leaking authentication credentials or a token that an attacker could use to access your resources.
- Introducing a vulnerability to your own code that an attacker could exploit.

These risks open your resources and projects to attack and those risks are passed directly on to anyone who uses a package that you create. The following sections explain how you can protect yourself and your users from these risks.

## Create a vulnerability management program for dependencies

You can secure the code you depend on by creating a vulnerability management program for dependencies. At a high level this should include processes to ensure that you:

1. Create an inventory of your dependencies.

1. Know when there is a security vulnerability in a dependency.
1. Enforce dependency reviews on your pull requests.

1. Assess the impact of that vulnerability on your code and decide what action to take.

### Automatic inventory generation

As a first step, you want to make a complete inventory of your dependencies. The dependency graph for a repository shows you dependencies for supported ecosystems. If you check in your dependencies, or use other ecosystems, you will need to supplement this with data from 3rd party tools or by listing dependencies manually.{% ifversion dependency-graph-sbom-export %} {% data reusables.dependency-graph.sbom-export %}{% else %} For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."{% endif %}

### Automatic detection of vulnerabilities in dependencies

{% data variables.product.prodname_dependabot %} can help you by monitoring your dependencies and notifying you when they contain a known vulnerability. {% ifversion fpt or ghec or ghes %}You can even enable {% data variables.product.prodname_dependabot %} to automatically raise pull requests that update the dependency to a secure version.{% endif %} For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"{% ifversion fpt or ghec or ghes %} and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)"{% endif %}.
{% ifversion fpt or ghec or ghes or ghae > 3.5 %}

### Automatic detection of vulnerabilities in pull requests

The {% data variables.dependency-review.action_name %} enforces a dependency review on your pull requests, making it easy for you to see if a pull request will introduce a vulnerable version of a dependency to your repository. When a vulnerability is detected, the {% data variables.dependency-review.action_name %} can block the pull request from merging. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)."{% endif %}

### Assessment of exposure to risk from a vulnerable dependency

When you discover you are using a vulnerable dependency, for example, a library or a framework, you must assess your project's level of exposure and determine what action to take. Vulnerabilities are usually reported with a severity score to show how severe their impact could be. The severity score is a useful guide but cannot tell you the full impact of the vulnerability on your code.

To assess the impact of a vulnerability on your code, you also need to consider how you use the library and determine how much risk that actually poses to your system. Maybe the vulnerability is part of a feature that you don't use, and you can update the affected library and continue with your normal release cycle. Or maybe your code is badly exposed to risk, and you need to update the affected library and ship an updated build right away. This decision depends on how you're using the library in your system, and is a decision that only you have the knowledge to make.

## Secure your communication tokens

Code often needs to communicate with other systems over a network, and requires secrets (like a password, or an API key) to authenticate. Your system needs access to those secrets to run, but it's best practice to not include them in your source code. This is especially important for repositories to which many people might have access{% ifversion not ghae %} and critical for public repositories{% endif %}.

### Automatic detection of secrets committed to a repository

{% note %}

**Note:** {% data reusables.gated-features.secret-scanning %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_dotcom %} partners with many providers to automatically detect when secrets are committed to or stored in your public repositories and public npm packages you depend on, and will notify the provider so they can take appropriate actions to ensure your account remains secure. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-partners)."
{% endif %}

{% ifversion fpt %}
You can can enable and configure additional scanning that will alert you about accidentally leaked secrets on {% data variables.product.product_name %} if you own:
   - public repositories on {% data variables.product.prodname_dotcom_the_website %}.
   - an organization using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %}. {% data variables.product.prodname_secret_scanning_caps %} will also analyze your private repositories.

{% elsif ghec %}
Additionally, if your organization uses {% data variables.product.prodname_GH_advanced_security %}, you can enable {% data variables.secret-scanning.user_alerts %} on any repository owned by the organization, including private repositories. You can also define custom patterns to detect additional secrets at the repository, organization, or enterprise level. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)."
{% else %}
You can configure {% data variables.product.prodname_secret_scanning %} to check for secrets issued by many service providers and to notify you when any are detected. You can also define custom patterns to detect additional secrets at the repository, organization, or enterprise level. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)" and "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}

### Secure storage of secrets you use in {% data variables.product.product_name %}

{% ifversion fpt or ghec %}
Besides your code, you probably need to use secrets in other places. For example, to allow {% data variables.product.prodname_actions %} workflows, {% data variables.product.prodname_dependabot %}, or your {% data variables.product.prodname_github_codespaces %} development environment to communicate with other systems. For more information on how to securely store and use secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)," "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)," and "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."
{% endif %}

{% ifversion ghes or ghae %}
Besides your code, you probably need to use secrets in other places. For example, to allow {% data variables.product.prodname_actions %} workflows{% ifversion ghes %} or {% data variables.product.prodname_dependabot %}{% endif %} to communicate with other systems. For more information on how to securely store and use secrets, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets){% ifversion ghes %}" and "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#storing-credentials-for-dependabot-to-use)."{% else %}."{% endif %}
{% endif %}

## Keep vulnerable coding patterns out of your repository

{% note %}

**Note:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Create a pull request review process

You can improve the quality and security of your code by ensuring that all pull requests are reviewed and tested before they are merged. {% data variables.product.prodname_dotcom %} has many features you can use to control the review and merge process. To get started, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

### Scan your code for vulnerable patterns

Insecure code patterns are often difficult for reviewers to spot unaided. In addition to scanning your code for secrets, you can check it for patterns that are associated with security vulnerabilities. For example, a function that isn't memory-safe, or failing to escaping user input that could lead to an injection vulnerability. {% data variables.product.prodname_dotcom %} offers several different ways to approach both how and when you scan your code. To get started, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)."

## Next steps

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
