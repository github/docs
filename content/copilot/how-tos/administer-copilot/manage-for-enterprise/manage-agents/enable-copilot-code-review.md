---
title: Enabling GitHub Copilot code review in your enterprise
intro: Apply consistent standards by having {% data variables.product.prodname_copilot_short %} review every pull request.
allowTitleToDifferFromFilename: true
permissions: Enterprise owners
versions:
  feature: copilot
shortTitle: Enable {% data variables.copilot.copilot_code-review_short %}
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-copilot-code-review
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/manage-copilot-code-review
contentType: how-tos
category:
  - Manage Copilot for a team
docsTeamMetrics:
  - ai-governance
---

{% data variables.product.prodname_copilot %} can review pull requests in your enterprise. This can save time for human reviewers by detecting bugs or vulnerabilities and enforcing consistent coding standards.

## Enabling {% data variables.copilot.copilot_code-review_short %} for your {% data variables.product.prodname_copilot_short %} subscribers

The policy for {% data variables.copilot.copilot_code-review_short %} allows your licensed users to request reviews from {% data variables.product.prodname_copilot_short %} and use {% data variables.product.prodname_copilot_short %} to generate pull request summaries.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.copilot-features-and-clients %}
1. Next to "{% data variables.copilot.copilot_code-review_short %}", select a policy.
1. Then choose which {% data variables.copilot.copilot_code-review_short %} features to enable for your enterprise. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review#configuring-automatic-code-review-for-an-enterprise).

{% data reusables.enterprise-accounts.policy-enablement-next-steps %}

## Allowing reviews without a {% data variables.product.prodname_copilot_short %} license

Members can get reviews on {% data variables.product.prodname_dotcom_the_website %} without a {% data variables.product.prodname_copilot_short %} license, including in enterprises that use {% data variables.product.prodname_copilot_short %} access, so you don't need to assign seats for code review. The {% data variables.product.prodname_ai_credits_short %} these reviews use are billed to your enterprise or a cost center.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **{% data variables.product.prodname_copilot_short %}**.
1. Under "Billing & usage", make sure "{% data variables.product.prodname_ai_credit_singular %} paid usage" is enabled.
1. Under "Features & clients", click **Configure features & clients**.
1. Make sure "{% data variables.copilot.copilot_code-review_short %}" is enabled.
1. Next to "Allow members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_dotcom_the_website %}", turn it on for every organization, or select **Let organizations decide**. If organizations decide, their owners follow [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/enable-copilot-code-review).

## Configuring automatic code review

To apply standards consistently, you can configure {% data variables.copilot.copilot_code-review_short %} to run automatically on all pull requests opened across your enterprise or in specific repositories.

1. Create an enterprise-level branch ruleset. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance).
1. Target the organizations and repositories where {% data variables.copilot.copilot_code-review_short %} should run automatically. You may want to start with a small selection of repositories and run a trial to collect feedback.
1. Enable the **Automatically request {% data variables.copilot.copilot_code-review_short %}** policy.
1. Optionally, enable the additional settings. By reviewing on every push and reviewing draft pull requests, you will add consistency to the review process. However, you will also create more noise for developers. If you're running a pilot, consider starting with the basic setting to allow developers to get used to the new process first.
1. Click **Create**.

## Customizing reviews

Encourage organization and repository administrators to create custom instructions for {% data variables.copilot.copilot_code-review_short %} so that reviews will be tailored to your coding standards and conventions. See [AUTOTITLE](/copilot/tutorials/customize-code-review).
