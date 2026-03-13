---
title: About GitHub Copilot code review
shortTitle: Code review
allowTitleToDifferFromFilename: true
intro: 'Find out how {% data variables.product.prodname_copilot_short %} can review pull requests for you.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/code-review
  - /copilot/concepts/code-review/code-review
  - /copilot/concepts/code-review
contentType: concepts
category:
  - Learn about Copilot
---

## Introduction

{% data variables.copilot.copilot_code-review_short %} reviews code written in any language, and provides feedback. It reviews your code from multiple angles to identify issues and suggest fixes. You can apply suggested changes with a couple of clicks. 

This article provides an overview of {% data variables.copilot.copilot_code-review_short %}. To learn how to request a code review from {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review).

## Availability

{% data variables.copilot.copilot_code-review_short %} is supported in:

* {% data variables.product.prodname_dotcom_the_website %}
* {% data variables.product.prodname_mobile %}
* {% data variables.product.prodname_vscode_shortname %}
* {% data variables.product.prodname_vs %}
* Xcode
* JetBrains IDEs

{% data variables.copilot.copilot_code-review_short %} is a premium feature available with these plans:

* {% data variables.copilot.copilot_pro_short %}
* {% data variables.copilot.copilot_pro_plus_short %}
* {% data variables.copilot.copilot_business_short %}
* {% data variables.copilot.copilot_enterprise_short %}

See [{% data variables.product.prodname_copilot_short %} plans](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=text).

If you receive {% data variables.product.prodname_copilot_short %} from an organization, your organization must enable the **{% data variables.copilot.copilot_code-review_short %}** option in the {% data variables.product.prodname_copilot_short %} policy settings. This applies to reviews on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization).

## {% data variables.copilot.copilot_code-review_short %} without a {% data variables.product.prodname_copilot_short %} license

Organization members **without a {% data variables.product.prodname_copilot_short %} license** can use {% data variables.copilot.copilot_code-review_short %} on {% data variables.product.prodname_dotcom_the_website %}. An enterprise administrator or organization owner must enable it. This capability is available to organizations on **{% data variables.copilot.copilot_business_short %}** and **{% data variables.copilot.copilot_enterprise_short %}** plans.

### Enabling code review for users without a license

To allow organization members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %}, you must enable two policies:

1. **Premium request paid usage**. Enable this policy first. It allows the enterprise or organization to incur charges for {% data variables.copilot.copilot_code-review_short %} premium request usage.
1. **Allow members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_dotcom_the_website %}**. This sub-policy enables {% data variables.copilot.copilot_code-review_short %} for users without a license.

The second policy has these characteristics:

* It is disabled by default.
* Once this policy is set it at the enterprise level, it becomes **visible, but not editable** at the organization level.
* The policy is **most restrictive**. {% data variables.copilot.copilot_code-review_short %} is only available in repositories where you explicitly enable the policy.

### How it works for users without a license

When both policies are enabled, users without a {% data variables.product.prodname_copilot_short %} license can request a review from {% data variables.copilot.copilot_code-review_short %} on their pull requests in the organization's repositories.

In repositories where automatic code review is enabled, {% data variables.product.prodname_copilot_short %} automatically reviews all pull requests. This happens regardless of whether the author has a {% data variables.product.prodname_copilot_short %} license.

{% data variables.copilot.copilot_code-review_short %} for users without a license is not available in IDEs.

## Excluded files

Some file types are excluded from {% data variables.copilot.copilot_code-review_short %}:

* Dependency management files, such as package.json and Gemfile.lock
* Log files
* SVG files

If you include these file types in a pull request, {% data variables.copilot.copilot_code-review_short %} will not review the file. 

For more information, see [AUTOTITLE](/copilot/reference/review-excluded-files).

## {% data variables.copilot.copilot_code-review-tools-preview_cap %}

> [!NOTE]
>
> * The [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) apply to your use of this product.
> * {% data variables.copilot.copilot_code-review_short %} has several new tools that are in {% data variables.release-phases.public_preview %} and subject to change.

If you get a {% data variables.product.prodname_copilot_short %} subscription from an organization, you can only participate in the {% data variables.release-phases.public_preview %} on the {% data variables.product.github %} website if an owner of your organization or enterprise has enabled using preview features. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

These new tools are enabled automatically for {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plans.

* **Full project context gathering**. This provides more specific, accurate, and contextually aware code reviews.
* **Support for static analysis tools like {% data variables.product.prodname_codeql %}, ESLint, and PMD**. This delivers more high-signal, consistent findings for security and quality.
* **The ability to pass suggestions to {% data variables.copilot.copilot_coding_agent %}**. This automates creation of a new pull request against your branch with the suggested fixes applied.

You do not need to have {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_actions %} enabled in your organization or enterprise to use the {% data variables.copilot.copilot_code-review-tools_short %}.

If {% data variables.product.prodname_actions %} is unavailable or if Actions workflows used by {% data variables.copilot.copilot_code-review_short %} fail, reviews will still be generated. However, they will not include the additional features provided by the {% data variables.copilot.copilot_code-review-tools_short %}.

> [!NOTE]
>
> The {% data variables.release-phases.public_preview %} includes free actions minutes for the {% data variables.copilot.copilot_code-review-tools_short %}.
>
> Usage charges will apply when the feature becomes generally available.

## Code review monthly quota

Each time {% data variables.product.prodname_copilot_short %} reviews a pull request or reviews code in your IDE, your monthly quota of {% data variables.product.prodname_copilot_short %} premium requests is reduced by one.

If a repository is configured to automatically request a code review from {% data variables.product.prodname_copilot_short %} for all new pull requests, the premium request usage is applied to the pull request author's quota.

If a pull request is created by {% data variables.product.prodname_actions %} or by a bot, the usage will apply to:

* The user who triggered the workflow, if that user can be identified.
* A designated billing owner.

### What happens when you reach your quota

When you reach your monthly quota, you will not be able to get a code review from {% data variables.product.prodname_copilot_short %} until your quota resets. To continue to use code reviews before your quota resets, you will need to upgrade your {% data variables.product.prodname_copilot_short %} plan or enable additional premium requests.

### Quota for users without a {% data variables.product.prodname_copilot_short %} license

Users without a {% data variables.product.prodname_copilot_short %} license do not have a monthly premium request quota. When {% data variables.copilot.copilot_code-review_short %} is enabled for these users, any premium requests they generate are billed directly to the organization or enterprise as paid overage usage. This applies to both manually requested reviews and automatic code reviews.

Premium requests generated by users without a license are not attributed to any {% data variables.product.prodname_copilot_short %} plan quota. They appear as overage usage in billing reports and premium request analytics. Users with a {% data variables.product.prodname_copilot_short %} license continue to consume premium requests from their assigned plan quota.

## Model usage

{% data reusables.copilot.ccr-model-usage %}

{% data reusables.copilot.ccr-model-settings %}

## Validating {% data variables.product.prodname_copilot_short %} code reviews

{% data variables.product.prodname_copilot_short %} is not guaranteed to spot all problems or issues in a pull request. Sometimes it will make mistakes. Always validate {% data variables.product.prodname_copilot_short %}'s feedback carefully. Supplement {% data variables.product.prodname_copilot_short %}'s feedback with a human review.

For more information, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review).

## Enhancing {% data variables.product.prodname_copilot_short %}'s knowledge of a repository

The more {% data variables.product.prodname_copilot_short %} knows about the code in your repository, the tools you use, and your coding standards and practices, the more accurate and useful its reviews will become. You can enhance {% data variables.product.prodname_copilot_short %}'s knowledge of your repositories in two ways.

### Custom instructions

These are short, natural-language statements that you write and store as one or more files in a repository. If you are the owner of an organization on {% data variables.product.github %}, you can also define custom instructions in the settings for your organization. For more information, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions).

### {% data variables.copilot.copilot_memory %} ({% data variables.release-phases.public_preview %})

If you have a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, you can enable {% data variables.copilot.copilot_memory %}. This allows {% data variables.product.prodname_copilot_short %} to store useful details it has learned about a repository. {% data variables.product.prodname_copilot_short %} can then use this information when it reviews pull requests in that repository. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## About automatic pull request reviews

By default, {% data variables.product.prodname_copilot_short %} only reviews a pull request if you assign it to the pull request. However, you can configure automatic reviews.

* **Individual users** on the {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests they create.
* **Repository owners** can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in the repository that are created by people with access to {% data variables.product.prodname_copilot_short %}.
* **Organization owners** can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in some or all of the repositories in the organization where the pull request is created by a {% data variables.product.prodname_copilot_short %} user.

### Triggering an automatic pull request review

The triggers for automatic code review depend on the configuration settings.

* Basic setting:
  * When you create a pull request as an "Open" pull request.
  * The first time you switch a "Draft" pull request to "Open".
* Review new pushes:
  * Every time you push a new commit to the pull request.
* Review draft pull requests:
  * Pull requests are automatically reviewed while they are still drafts, before you switch them to "Open".

For full instructions, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot).

> [!NOTE]
> Unless {% data variables.product.prodname_copilot_short %} has been configured to review each push to a pull request, it will only review a pull request once. If you make changes to the pull request after it has been automatically reviewed and you want {% data variables.product.prodname_copilot_short %} to re-review it, you can request this manually. Click the {% octicon "sync" aria-label="Re-request review" %} button next to {% data variables.product.prodname_copilot_short %}'s name in the **Reviewers** menu.

## About static analysis tools

Enable static analysis tools in {% data variables.copilot.copilot_code-review_short %} to enhance its ability to identify and fix issues. Available tools include:

* **{% data variables.product.prodname_codeql %}**: A code analysis engine that identifies security vulnerabilities. For more information, see [About {% data variables.product.prodname_codeql %}](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql).
* **ESLint**: A linter designed specifically for JavaScript. See [Core Concepts](https://eslint.org/docs/latest/use/core-concepts/) in the the ESLint documentation.
* **PMD**: A static code analyzer that focuses on Java and Apex. It also supports many other languages. See the [PMD documentation](https://docs.pmd-code.org/latest/).

If you have access to {% data variables.copilot.copilot_code-review-tools_short %}, {% data variables.product.prodname_codeql %} is enabled by default. ESLint and PMD are disabled. If you have access to rulesets, you can change your selected tools. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/manage-tools).

## Getting detailed code quality feedback for your whole repository

{% data variables.copilot.copilot_code-review %} reviews your code in pull requests and provides feedback. If you want actionable feedback on the reliability and maintainability of your whole repository, enable {% data variables.product.prodname_code_quality %}. See [AUTOTITLE](/code-security/code-quality/concepts/about-code-quality).

## Further reading

* [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review)
