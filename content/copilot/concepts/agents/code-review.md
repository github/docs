---
title: About GitHub Copilot code review
shortTitle: Code review
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_copilot_short %} reviews your pull requests, identifies issues, and suggests fixes you can apply in a couple of clicks.'
product: '{% data reusables.copilot.plans.permission-paid-plans-cfi %}'
versions:
  feature: copilot
redirect_from:
  - /copilot/code-review
  - /copilot/concepts/code-review/code-review
  - /copilot/concepts/code-review
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/manage-tools
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
* {% data variables.product.prodname_cli %}
* {% data variables.product.prodname_mobile %}
* {% data variables.product.prodname_vscode_shortname %}
* {% data variables.product.prodname_vs %}
* Xcode
* JetBrains IDEs
* Azure DevOps ({% data variables.release-phases.public_preview %})

> [!NOTE]
> If you receive {% data variables.product.prodname_copilot_short %} from an organization, your organization must enable the **{% data variables.copilot.copilot_code-review_short %}** option in the {% data variables.product.prodname_copilot_short %} policy settings. This applies to reviews on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization).

## {% data variables.copilot.copilot_code-review_short %} without a {% data variables.product.prodname_copilot_short %} license

Organization members **without a {% data variables.product.prodname_copilot_short %} license** can use {% data variables.copilot.copilot_code-review_short %} on {% data variables.product.prodname_dotcom_the_website %}. An enterprise administrator or organization owner must enable it. This capability is available to organizations on **{% data variables.copilot.copilot_business_short %}** and **{% data variables.copilot.copilot_enterprise_short %}** plans.

### Enabling code review for users without a license

To allow organization members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %}, you must enable two policies:

1. **{% data variables.product.prodname_ai_credits_short %} paid usage**. Enable this policy first. It allows the enterprise or organization to incur charges for {% data variables.copilot.copilot_code-review_short %} {% data variables.product.prodname_ai_credits_short %} usage.
1. **Allow members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_dotcom_the_website %}**. This sub-policy enables {% data variables.copilot.copilot_code-review_short %} for users without a license.

The second policy has these characteristics:

* It is disabled by default.
* Once this policy is set at the enterprise level, it becomes **visible, but not editable** at the organization level.
* The policy is **most restrictive**. {% data variables.copilot.copilot_code-review_short %} is only available in repositories under an organization where you have explicitly enabled the policy.

### How it works for users without a license

When both policies are enabled, users without a {% data variables.product.prodname_copilot_short %} license can request a review from {% data variables.copilot.copilot_code-review_short %} on their pull requests in the organization's repositories.

In repositories where automatic code review is enabled, {% data variables.product.prodname_copilot_short %} automatically reviews all pull requests. This happens regardless of whether the author has a {% data variables.product.prodname_copilot_short %} license. For more information about how to configure automatic code review, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot).


{% data variables.copilot.copilot_code-review_short %} for users without a license is not available in IDEs.

## Excluded files

Some file types are excluded from {% data variables.copilot.copilot_code-review_short %}:

* Dependency management files, such as package.json and Gemfile.lock
* Log files
* SVG files

If you include these file types in a pull request, {% data variables.copilot.copilot_code-review_short %} will not review the file.

For more information, see [AUTOTITLE](/copilot/reference/review-excluded-files).

## Agentic capabilities for {% data variables.copilot.copilot_code-review_short %}

{% data variables.copilot.copilot_code-review_short %} utilizes agentic capabilities to extend its functionality.

* **Full project context gathering**. This provides more specific, accurate, and contextually aware code reviews. This capability analyzes your entire repository to better understand the context of code changes.
* **The ability to pass suggestions to {% data variables.copilot.copilot_cloud_agent %}**. This automates creating a new pull request against your branch with the suggested fixes applied. Passing suggestions to {% data variables.copilot.copilot_cloud_agent %} is in public preview and subject to change.

These capabilities are enabled automatically for all plans that include {% data variables.copilot.copilot_code-review_short %}. See [Review effort level](#review-effort-level) later in this article for information about choosing between Low and Medium analysis levels.

If {% data variables.product.prodname_actions %} is unavailable or if Actions workflows used by {% data variables.copilot.copilot_code-review_short %} fail, reviews will still be generated. However, they will not include the additional features provided by the agentic capabilities.

### Usage of {% data variables.product.prodname_actions %} runners for agentic capabilities in code review

{% data variables.copilot.copilot_code-review_short %} uses {% data variables.product.prodname_actions %} to run the agentic capabilities, including full project context gathering and passing suggestions to {% data variables.copilot.copilot_cloud_agent %}. By default, {% data variables.copilot.copilot_code-review_short %} uses standard {% data variables.product.prodname_dotcom %}-hosted runners. You can also upgrade to larger {% data variables.product.prodname_dotcom %}-hosted runners for better performance, or use self-hosted runners.

> [!NOTE]
> Usage of larger {% data variables.product.prodname_dotcom %}-hosted runners is billed at a higher per-minute rate. Self-hosted runners do not consume {% data variables.product.prodname_actions %} minutes.

You do not need to have {% data variables.product.prodname_actions %} enabled in your organization or enterprise to use the agentic capabilities in code review.

If your organization has disabled {% data variables.product.prodname_dotcom %}-hosted runners, the agentic capabilities will not be available. In this case, code reviews will fall back to a more limited review. Organizations in this situation can use self-hosted runners.

For more information on configuring runners, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-runners).

You can view the {% data variables.product.prodname_actions %} minutes associated with {% data variables.copilot.copilot_code-review_short %} runs. For more information, see [{% data variables.product.prodname_actions %} minutes for code review](/copilot/reference/copilot-billing/models-and-pricing#github-actions-minutes-for-code-review).

## Review effort level

> [!NOTE]
> Medium review effort is in {% data variables.release-phases.public_preview %} and subject to change. The [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) apply to your use of preview features.

{% data variables.copilot.copilot_code-review_short %} supports multiple review effort levels, so you can choose the level of thoroughness that matches the criticality of your code.

* **Low**: Standard review. Provides fast, targeted feedback on common issues such as bugs, security vulnerabilities, and style inconsistencies (default).
* **Medium**: Routes pull requests to a higher-reasoning model for longer analysis of complex logic, security-sensitive code, and cross-service changes. Medium reviews use more {% data variables.product.prodname_ai_credits_short %} and {% data variables.product.prodname_actions %} minutes than Low reviews. For better performance with Medium reviews, consider configuring larger or self-hosted runners. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-runners).

Use Medium for security-sensitive code, multi-service pull requests, or repositories with strict quality standards. Use Low for routine changes where fast feedback is more important than exhaustive analysis.


Repository administrators can set the default review effort level for automatic code reviews. For configuration steps, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review).

## Code review usage

Each time {% data variables.product.prodname_copilot_short %} reviews a pull request or reviews code in your IDE, the interaction consumes {% data variables.product.prodname_ai_credits_short %}. The amount depends on the model used and the number of tokens processed.

Code reviews have two cost components: {% data variables.product.prodname_ai_credits_short %} for the model interaction (the review itself), and {% data variables.product.prodname_actions %} minutes for the agentic capabilities (context gathering and tool use). For more information on {% data variables.product.prodname_actions %} usage, see [Usage of {% data variables.product.prodname_actions %} runners for agentic capabilities in code review](#usage-of-github-actions-runners-for-agentic-capabilities-in-code-review).

If a repository is configured to automatically request a code review from {% data variables.product.prodname_copilot_short %} for all new pull requests, the {% data variables.product.prodname_ai_credits_short %} consumption is attributed to the pull request author. If a review is manually requested by another user, the consumption is attributed to that user instead.

If a pull request is created by {% data variables.product.prodname_actions %} or by a bot, the usage will apply to:

* The user who triggered the workflow, if that user can be identified.
* A designated billing owner.

### What happens when a budget is reached

For {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, code review access is governed by budget controls. If a user reaches their user-level budget, or if the enterprise or cost center spending limit is exhausted, code reviews are blocked along with other {% data variables.product.prodname_ai_credits_short %}-consuming features. See [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing#what-happens-when-a-user-is-blocked).

### Users without a {% data variables.product.prodname_copilot_short %} license or plan that includes {% data variables.copilot.copilot_code-review_short %}

Users without access to {% data variables.copilot.copilot_code-review_short %} do not have a monthly allowance of {% data variables.product.prodname_ai_credits_short %} for it. This includes users who have no {% data variables.product.prodname_copilot_short %} license and users on the {% data variables.copilot.copilot_free_short %} plan, which does not include {% data variables.copilot.copilot_code-review_short %}.

When {% data variables.copilot.copilot_code-review_short %} is enabled for these users, any {% data variables.product.prodname_ai_credits_short %} they consume are billed directly to the organization or enterprise as paid additional usage. This applies to both manually requested reviews and automatic code reviews.

{% data variables.product.prodname_ai_credits_short %} consumed by these users are not attributed to any individual user's budget. They appear as additional usage in billing reports. Users with a {% data variables.product.prodname_copilot_short %} license that includes code review consume {% data variables.product.prodname_ai_credits_short %} from the shared pool, subject to any user-level budgets configured by their administrator.

## Model usage

{% data reusables.copilot.ccr-model-usage %}

{% data reusables.copilot.ccr-model-settings %}

## MCP servers and agent skills for code review

{% data reusables.copilot.code-review.skills-and-mcp-preview-note %}

{% data variables.copilot.copilot_code-review_short %} can use repository-level agent skills and MCP servers when they are relevant to the review.

{% data variables.copilot.copilot_code-review_short %} is more likely to use skills and MCP context when your repository or pull request gives clear signals, including review-focused skill directory names, custom instructions that reference MCP context, and pull request descriptions that include identifiers referencing configured MCP servers such as issue keys or incident IDs.

### Agent skills

If your repository includes agent skills, {% data variables.copilot.copilot_code-review_short %} can automatically use relevant skills when reviewing a pull request, extending {% data variables.product.prodname_copilot_short %} beyond its built-in analysis.

For setup details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).

### MCP servers

{% data variables.copilot.copilot_code-review_short %} can use MCP servers to pull context directly into the review from the third-party platforms and internal systems your team uses, including issue tracking, documentation, service catalogs, and incident tooling.

The {% data variables.product.github %} MCP server and Playwright MCP server are enabled by default.

You can configure MCP servers in your repository settings. Repository MCP configuration on {% data variables.product.github %} applies to both {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %}. Changes you make to repository MCP settings affect both features. For setup details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

{% data reusables.copilot.code-review.mcp-tools-setting %}

## Validating {% data variables.product.prodname_copilot_short %} code reviews

{% data variables.product.prodname_copilot_short %} is not guaranteed to spot all problems or issues in a pull request. Sometimes it will make mistakes. Always validate {% data variables.product.prodname_copilot_short %}'s feedback carefully. Supplement {% data variables.product.prodname_copilot_short %}'s feedback with a human review.

For more information, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review).

## Enhancing {% data variables.product.prodname_copilot_short %}'s knowledge of a repository

The more {% data variables.product.prodname_copilot_short %} knows about the code in your repository, the tools you use, and your coding standards and practices, the more accurate and useful its reviews will become. You can enhance {% data variables.product.prodname_copilot_short %}'s knowledge of your repositories in two ways.

### Custom instructions

These are short, natural-language statements that you write and store as one or more files in a repository. If you are the owner of an organization on {% data variables.product.github %}, you can also define custom instructions in the settings for your organization. For more information, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions).

### {% data variables.copilot.copilot_memory %} ({% data variables.release-phases.public_preview %})

If you have a {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, or {% data variables.copilot.copilot_max_short %} plan, you can enable {% data variables.copilot.copilot_memory %}. This allows {% data variables.product.prodname_copilot_short %} to store useful details it has learned about a repository. {% data variables.product.prodname_copilot_short %} can then use this information when it reviews pull requests in that repository. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

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

## Getting detailed code quality feedback for your whole repository

{% data variables.copilot.copilot_code-review %} reviews your code in pull requests and provides feedback. If you want actionable feedback on the reliability and maintainability of your whole repository, enable {% data variables.product.prodname_code_quality %}. See [AUTOTITLE](/code-security/code-quality/concepts/about-code-quality).

## Further reading

* [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review)
