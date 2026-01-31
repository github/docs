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

{% data variables.product.prodname_copilot %} can review your code and provide feedback. Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a couple of clicks.

{% data variables.product.prodname_copilot_short %} can review code written in any programming language.

{% data variables.copilot.copilot_code-review_short %} acts as an intelligent agent, reviewing your code from various angles—such as planning, customizing, and deduplicating—to systematically uncover insights, identify issues, and suggest fixes.

This article provides an overview of {% data variables.copilot.copilot_code-review_short %}. For instructions on how to request a code review from {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review).

## Availability

{% data variables.copilot.copilot_code-review_short %} is supported in:

* {% data variables.product.prodname_dotcom_the_website %}
* {% data variables.product.prodname_mobile %}
* {% data variables.product.prodname_vscode_shortname %}
* {% data variables.product.prodname_vs %}
* Xcode
* JetBrains IDEs

{% data variables.copilot.copilot_code-review_short %} is a premium feature, available with the {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans. See [{% data variables.product.prodname_copilot_short %} plans](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=text).

If you receive {% data variables.product.prodname_copilot_short %} from an organization then, to be able to request a pull request review from {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}, the **{% data variables.copilot.copilot_code-review_short %}** option must be enabled in the {% data variables.product.prodname_copilot_short %} policy settings for the organization. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization).

## {% data variables.copilot.copilot_code-review_short %} without a {% data variables.product.prodname_copilot_short %} license

{% data variables.copilot.copilot_code-review_short %} is also available on {% data variables.product.prodname_dotcom_the_website %} for organization members **without a {% data variables.product.prodname_copilot_short %} license**, when enabled by an enterprise administrator or organization owner. This capability is available to organizations on the **{% data variables.copilot.copilot_business_short %}** and **{% data variables.copilot.copilot_enterprise_short %}** plans.

To allow organization members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %}, you must enable two policies:

1. **Premium request paid usage**. This must be enabled first. It allows the enterprise or organization to incur charges for {% data variables.copilot.copilot_code-review_short %} premium request usage.
1. **Allow members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_dotcom_the_website %}**. This sub-policy enables {% data variables.copilot.copilot_code-review_short %} for users without a license.

   * This policy is **disabled by default**.
   * Once this policy is set at the enterprise level, it becomes **visible (but not editable)** at the organization level.
   * The policy is **most restrictive**, meaning {% data variables.copilot.copilot_code-review_short %} is only available in repositories where the policy is explicitly enabled.

When both policies are enabled, users without a {% data variables.product.prodname_copilot_short %} license can request a {% data variables.copilot.copilot_code-review_short %} review on their pull requests in the organization’s repositories.

In addition, in repositories where automatic code review is enabled, {% data variables.product.prodname_copilot_short %} automatically reviews all pull requests, regardless of whether the author has a {% data variables.product.prodname_copilot_short %} license.

{% data variables.copilot.copilot_code-review_short %} for users without a license is **not available in IDEs** or in organizations that do not have these policies enabled.

## Excluded files

Dependency management files (such as package.json and Gemfile.lock) and certain other types of files (such as log files and SVGs) are excluded from {% data variables.copilot.copilot_code-review_short %}. If you include any of these files in a pull request, {% data variables.copilot.copilot_code-review_short %} will not consider the file when carrying out the review. Similarly, using {% data variables.copilot.copilot_code-review_short %} on one of these files in your IDE, will not generate review comments.

For more information, see [AUTOTITLE](/copilot/reference/review-excluded-files).

## {% data variables.copilot.copilot_code-review-tools-preview_cap %}

> [!NOTE]
>
> * The [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) apply to your use of this product.
> * {% data variables.copilot.copilot_code-review_short %} has several new tools that are in {% data variables.release-phases.public_preview %} and subject to change.

These new tools are enabled automatically for {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plans.

If you get a {% data variables.product.prodname_copilot_short %} subscription from an organization, you will only be able to participate in the {% data variables.release-phases.public_preview %} on the {% data variables.product.github %} website if an owner of your organization or enterprise has enabled **{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %} > Opt in to preview features** in the **{% data variables.product.prodname_copilot %} policies** page of the organization or enterprise settings. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

* **Full project context gathering** to provide more specific, accurate, and contextually aware code reviews.
* **Support for static analysis tools like {% data variables.product.prodname_codeql %}, ESLint, and PMD** to deliver more high-signal, consistent findings for security and quality.
* **The ability to pass suggestions to {% data variables.copilot.copilot_coding_agent %}**, for automated creation of a new pull request against your branch with the suggested fixes applied.

You are not required to have {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_actions %} enabled in your organization or enterprise to use the {% data variables.copilot.copilot_code-review-tools_short %}.

In the event that {% data variables.product.prodname_actions %} is unavailable or if Actions workflows used by {% data variables.copilot.copilot_code-review_short %} fail, reviews will still be generated but without the additional features provided by the {% data variables.copilot.copilot_code-review-tools_short %}.

> [!NOTE]
>
> The {% data variables.release-phases.public_preview %} includes free actions minutes for the {% data variables.copilot.copilot_code-review-tools_short %}.
>
> Usage charges will apply when the feature becomes generally available.

## Code review monthly quota

Each time {% data variables.product.prodname_copilot_short %} reviews a pull request, or reviews code in your IDE, your monthly quota of {% data variables.product.prodname_copilot_short %} premium requests is reduced by one.

If a repository is configured to automatically request a code review from {% data variables.product.prodname_copilot_short %} for all new pull requests, the premium request usage is applied to the quota of the pull request author. If a pull request is created by {% data variables.product.prodname_actions %} or by a bot, the usage will apply to the user who triggered the workflow (if identifiable), or to a designated billing owner.

When you reach your monthly quota you will not be able to get a code review from {% data variables.product.prodname_copilot_short %} until your quota resets—unless you upgrade your {% data variables.product.prodname_copilot_short %} plan or enable additional premium requests.

### Quota for users without a {% data variables.product.prodname_copilot_short %} license

Users without a {% data variables.product.prodname_copilot_short %} license do not have a monthly premium request quota. When {% data variables.copilot.copilot_code-review_short %} is enabled for these users through the “Allow members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_dotcom_the_website %}” policy, any premium requests they generate—either by manually requesting a review or through automatic code review—are billed directly to the organization or enterprise as paid overage usage.

Premium requests generated by users without a license are not attributed to any {% data variables.product.prodname_copilot_short %} plan quota and appear as overage usage in billing reports and premium request analytics. Users with a {% data variables.product.prodname_copilot_short %} license continue to consume premium requests from their assigned plan quota.

## Model usage

{% data reusables.copilot.ccr-model-usage %}

{% data reusables.copilot.ccr-model-settings %}

## Validating {% data variables.product.prodname_copilot_short %} code reviews

{% data variables.product.prodname_copilot_short %} isn't guaranteed to spot all problems or issues in a pull request, and sometimes it will make mistakes. Always validate {% data variables.product.prodname_copilot_short %}'s feedback carefully, and supplement {% data variables.product.prodname_copilot_short %}'s feedback with a human review.

For more information, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review).

## Enhancing {% data variables.product.prodname_copilot_short %}'s knowledge of a repository

The more {% data variables.product.prodname_copilot_short %} knows about the code in your repository, the tools you use, and your coding standards and practices, the more accurate and useful its reviews will become. There are two ways you can enhance {% data variables.product.prodname_copilot_short %}'s knowledge of your repositories.

* **Custom instructions**

  These are short, natural‑language statements that you write and store as one or more files in a repository. If you are the owner of an organization on {% data variables.product.github %} you can also define custom instructions in the settings for your organization. For more information, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions).

* **{% data variables.copilot.copilot_memory %}** ({% data variables.release-phases.public_preview %})

  If you have a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, you can enable {% data variables.copilot.copilot_memory %}. This allows {% data variables.product.prodname_copilot_short %} to store useful details it has worked out for itself about a repository. {% data variables.product.prodname_copilot_short %} can then use this information when it is reviewing pull requests in that repository. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## About automatic pull request reviews

By default, {% data variables.product.prodname_copilot_short %} will only review a pull request if it's assigned to the pull request in the same way you would assign a human reviewer. However:

* Individual users on the {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests they create.
* Repository owners can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in the repository that are created by people with access to {% data variables.product.prodname_copilot_short %}.
* Organization owners can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in some or all of the repositories in the organization where the pull request is created by a {% data variables.product.prodname_copilot_short %} user.

### Triggering an automatic pull request review

The triggers for automatic code review depend on the configuration settings:

* **Basic setting**:
  * When a pull request is created as an "Open" pull request.
  * The first time a "Draft" pull request is switched to "Open".
* **Review new pushes**:
  * Every time a new commit is pushed to the pull request.
* **Review draft pull requests**:
  * Pull requests are automatically reviewed while they are still drafts—before being switched to "Open".

> [!NOTE]
> Unless {% data variables.product.prodname_copilot_short %} has been configured to review each push to a pull request, it will only review the pull request once. If you make changes to the pull request after it has been automatically reviewed and you want {% data variables.product.prodname_copilot_short %} to re-review the pull request, you can request this manually. To do this, click the {% octicon "sync" aria-label="Re-request review" %} button next to {% data variables.product.prodname_copilot_short %}'s name in the **Reviewers** menu.

### Limits on automatic pull request reviews

{% data variables.copilot.copilot_code-review_short %} is a premium feature with a per-person monthly quota. When {% data variables.product.prodname_copilot_short %} carries out an automatic review, it uses one premium request from the quota of the user who created the pull request. For more information, see [AUTOTITLE](/copilot/concepts/agents/code-review#code-review-monthly-quota).

## Configuring automatic pull request reviews

For details of how to configure {% data variables.product.prodname_copilot_short %} to automatically review new pull requests, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot).

## About static analysis tools

You can enable static analysis tools in {% data variables.copilot.copilot_code-review_short %} to enhance its ability to identify and fix issues. Available tools include:
* **{% data variables.product.prodname_codeql %}**: A code analysis engine that identifies security vulnerabilities. For more information, see [About {% data variables.product.prodname_codeql %}](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql).
* **ESLint**: A linter designed specifically for JavaScript. For more information, see [Core Concepts](https://eslint.org/docs/latest/use/core-concepts/) in the the ESLint documentation.
* **PMD**: A static code analyzer that focuses on Java and Apex, but also supports many other languages. For more information, see the [PMD documentation](https://docs.pmd-code.org/latest/).

If you have access to {% data variables.copilot.copilot_code-review-tools_short %}, {% data variables.product.prodname_codeql %} is enabled by default, while ESLint and PMD are disabled. Additionally, if you have access to rulesets, you can change your selected tools. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/manage-tools).

## Getting detailed code quality feedback for your whole repository

{% data variables.copilot.copilot_code-review %} reviews your code in pull requests and provides feedback. If you want to surface actionable feedback on the reliability and maintainability of your whole repository, enable {% data variables.product.prodname_code_quality %}. See [AUTOTITLE](/code-security/code-quality/concepts/about-code-quality).

## Further reading

* [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review)
