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
contentType: concepts
---

## Introduction

{% data variables.product.prodname_copilot %} can review your code and provide feedback. Where possible, {% data variables.product.prodname_copilot_short %}'s feedback includes suggested changes which you can apply with a couple of clicks.

{% data variables.product.prodname_copilot_short %} can review code written in any programming language.

This article provides an overview of {% data variables.copilot.copilot_code-review_short %}. For instructions on how to request a code review from {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review).

## Availability

{% data variables.copilot.copilot_code-review_short %} is—with one exception—a premium feature, available with the {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, and {% data variables.copilot.copilot_enterprise_short %} plans.

The exception is the review of a selection of code within a file in {% data variables.product.prodname_vscode %}. This is a standard feature available to all {% data variables.product.prodname_copilot_short %} users in {% data variables.product.prodname_vscode_shortname %}.

If you receive {% data variables.product.prodname_copilot_short %} from an organization then, to be able to request a pull request review from {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}, the **{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}** option must be enabled in the {% data variables.product.prodname_copilot_short %} policy settings for the organization. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization).

## Code review monthly quota

When you assign {% data variables.product.prodname_copilot_short %} as a reviewer for a pull request—or when you request {% data variables.product.prodname_copilot_short %} to review all of your uncommitted changes in your IDE—your monthly quota of Copilot premium requests is reduced by one. For information about premium requests, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

If a repository is configured to automatically request a code review from {% data variables.product.prodname_copilot_short %} for all new pull requests, the premium request usage is applied to the quota of the pull request author. If a pull request is created by {% data variables.product.prodname_actions %} or by a bot, the usage will apply to the user who triggered the workflow (if identifiable), or to a designated billing owner.

When you reach your monthly quota you will not be able to get a code review from {% data variables.product.prodname_copilot_short %} until your quota resets—unless you upgrade your {% data variables.product.prodname_copilot_short %} plan or enable additional premium requests.

## {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %}

{% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_vscode %} supports two types of review:

* **Review selection:**
  * Highlight code and ask for an initial review.
  * Standard {% data variables.product.prodname_copilot_short %} feature. No premium requests used.
  * Does not support custom instructions or custom coding guidelines.
* **Review changes:**
  * Request a deeper review of all of your uncommitted changes.
  * Premium feature. Uses one premium request from your monthly quota per review.
  * Supports custom instructions and custom coding guidelines.

## Validating {% data variables.product.prodname_copilot_short %} code reviews

{% data variables.product.prodname_copilot_short %} isn't guaranteed to spot all problems or issues in a pull request, and sometimes it will make mistakes. Always validate {% data variables.product.prodname_copilot_short %}'s feedback carefully, and supplement {% data variables.product.prodname_copilot_short %}'s feedback with a human review.

For more information, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review).

## About automatic pull request reviews

By default, {% data variables.product.prodname_copilot_short %} will only review a pull request if it's assigned to the pull request in the same way you would assign a human reviewer. However:

* Individual users on the {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests they create.
* Repository owners can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in the repository that are created by people with access to {% data variables.product.prodname_copilot_short %}.
* Organization owners can configure {% data variables.product.prodname_copilot_short %} to automatically review all pull requests in some or all of the repositories in the organization where the pull request is created by a {% data variables.product.prodname_copilot_short %} user.

### Triggering an automatic pull request review

After you configure automatic code review, {% data variables.product.prodname_copilot_short %} will review pull requests in the following situations:

* When a pull request is created as an "Open" pull request.

  A review is not triggered if the pull request is created as a "Draft" pull request.

* The first time a "Draft" pull request is switched to "Open".

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} only automatically reviews a pull request once. If you make changes to the pull request after it has been automatically reviewed and you want {% data variables.product.prodname_copilot_short %} to re-review the pull request, you must request this manually. To do this, click the {% octicon "sync" aria-label="Re-request review" %} button next to {% data variables.product.prodname_copilot_short %}'s name in the **Reviewers** menu.

### Limits on automatic pull request reviews

{% data variables.copilot.copilot_code-review_short %} is a premium feature with a per-person monthly quota. When {% data variables.product.prodname_copilot_short %} carries out an automatic review, it uses one premium request from the quota of the user who created the pull request. For more information, see [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review#code-review-monthly-quota).

## Configuring automatic pull request reviews

For details of how to configure {% data variables.product.prodname_copilot_short %} to automatically review new pull requests, see [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/configuring-automatic-code-review-by-copilot).

## Further reading

* [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review)
