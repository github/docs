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

### {% data variables.copilot.copilot_code-review-tools-preview_cap %}

> [!NOTE]
>
> * The [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) apply to your use of this product.
> * These tools are enabled automatically for {% data variables.copilot.copilot_pro %} or {% data variables.copilot.copilot_pro_plus %} plans.
> * If you get a {% data variables.product.prodname_copilot_short %} subscription from an organization, you will only be able to participate in the {% data variables.release-phases.public_preview %} on the {% data variables.product.github %} website if an owner of your organization or enterprise has enabled **Copilot in GitHub.com > Opt in to preview features** in the **{% data variables.product.prodname_copilot %} policies** page of the organization or enterprise settings. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

{% data variables.copilot.copilot_code-review_short %} has several new tools that are in {% data variables.release-phases.public_preview %} and subject to change.

* **Full project context gathering** to provide more specific, accurate, and contextually aware code reviews.
* **Support for deterministic detections with {% data variables.product.prodname_codeql %}**, to deliver more high-signal, consistent findings for quality.
* **The ability to pass suggestions to {% data variables.copilot.copilot_coding_agent %}**, for automated creation of a new pull request against your branch with the suggested fixes applied.

You are not required to have {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_actions %} enabled in your organization or enterprise to use the {% data variables.copilot.copilot_code-review-tools_short %}.

In the event that {% data variables.product.prodname_actions %} is unavailable or if Actions workflows used by {% data variables.copilot.copilot_code-review_short %} fail, reviews will still be generated but without the additional features provided by the {% data variables.copilot.copilot_code-review-tools_short %}.

> [!NOTE]
>
> The {% data variables.release-phases.public_preview %} includes free actions minutes for the {% data variables.copilot.copilot_code-review-tools_short %}.
>
> Usage charges will apply when the feature becomes generally available.

## Availability

{% data variables.copilot.copilot_code-review_short %} is supported in:

* {% data variables.product.prodname_dotcom_the_website %}
* {% data variables.product.prodname_mobile %}
* {% data variables.product.prodname_vscode_shortname %}
* {% data variables.product.prodname_vs %}
* Xcode
* JetBrains IDEs

{% data variables.copilot.copilot_code-review_short %} is—with one exception—a premium feature, available with the {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans. See [Copilot plans](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=text&utm_source=docs-signup-copilot&utm_medium=docs&utm_campaign=universe25post).

The exception is the review of a selection of code within a file in {% data variables.product.prodname_vscode %}. This is a standard feature available to all {% data variables.product.prodname_copilot_short %} users in {% data variables.product.prodname_vscode_shortname %}.

If you receive {% data variables.product.prodname_copilot_short %} from an organization then, to be able to request a pull request review from {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}, the **{% data variables.copilot.copilot_code-review_short %}** option must be enabled in the {% data variables.product.prodname_copilot_short %} policy settings for the organization. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization).

## Code review monthly quota

Each time {% data variables.product.prodname_copilot_short %} reviews a pull request, or reviews files in your IDE that contain changes, your monthly quota of Copilot premium requests is reduced by one. Code review for currently selected text in {% data variables.product.prodname_vscode_shortname %} does not consume a premium request. For information about premium requests, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

If a repository is configured to automatically request a code review from {% data variables.product.prodname_copilot_short %} for all new pull requests, the premium request usage is applied to the quota of the pull request author. If a pull request is created by {% data variables.product.prodname_actions %} or by a bot, the usage will apply to the user who triggered the workflow (if identifiable), or to a designated billing owner.

When you reach your monthly quota you will not be able to get a code review from {% data variables.product.prodname_copilot_short %} until your quota resets—unless you upgrade your {% data variables.product.prodname_copilot_short %} plan or enable additional premium requests.

## Model usage

{% data reusables.copilot.ccr-model-usage %}

{% data reusables.copilot.ccr-model-settings %}

## {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %}

{% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %} supports two types of review:

* **Review selection:**
  * Highlight code and ask for an initial review.
  * Standard {% data variables.product.prodname_copilot_short %} feature. No premium requests used.
* **Review changes:**
  * Request a deeper review of all of your uncommitted changes.
  * Premium feature. Uses one premium request from your monthly quota per review.

## Providing instructions for {% data variables.product.prodname_copilot_short %} code reviews

You can tailor the reviews that {% data variables.product.prodname_copilot_short %} generates by providing custom instructions. This helps {% data variables.product.prodname_copilot_short %} to review the code in a way that matches your team's coding standards, tools, and practices. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=webui) and [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-organization-instructions).

## Validating {% data variables.product.prodname_copilot_short %} code reviews

{% data variables.product.prodname_copilot_short %} isn't guaranteed to spot all problems or issues in a pull request, and sometimes it will make mistakes. Always validate {% data variables.product.prodname_copilot_short %}'s feedback carefully, and supplement {% data variables.product.prodname_copilot_short %}'s feedback with a human review.

For more information, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review).

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

## Getting detailed code quality feedback for your whole repository

{% data variables.copilot.copilot_code-review %} reviews your code in pull requests and provides feedback. If you want to surface actionable feedback on the reliability and maintainability of your whole repository, enable {% data variables.product.prodname_code_quality %}. See [AUTOTITLE](/code-security/code-quality/concepts/about-code-quality).

## Further reading

* [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review)
