---
title: Enabling GitHub Copilot code review in your organization
intro: 'Turn on {% data variables.copilot.copilot_code-review_short %} for your organization''s pull requests without assigning a {% data variables.product.prodname_copilot_short %} license to any member.'
allowTitleToDifferFromFilename: true
permissions: Organization owners
product: '{% data reusables.copilot.enterprise-billing-availability %}'
versions:
  feature: copilot
shortTitle: Enable {% data variables.copilot.copilot_code-review_short %}
contentType: how-tos
category:
  - Manage Copilot for a team
---

After you enable the policy for {% data variables.copilot.copilot_code-review_short %}, members with a {% data variables.product.prodname_copilot_short %} license from your organization can request reviews. You can also allow reviews without a license. The {% data variables.product.prodname_ai_credits_short %} those reviews use are billed to your organization or enterprise.

## Subscribing to {% data variables.copilot.copilot_business_short %} without assigning licenses

Your organization needs a {% data variables.product.prodname_copilot_short %} plan and a payment method and billing information on file, but it doesn't need to assign any licenses. If your organization already has a plan, skip to [Enabling {% data variables.copilot.copilot_code-review_short %}](#enabling-copilot-code-review). If your organization is owned by an enterprise, an enterprise owner sets up the plan. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-plan/subscribe).

1. Navigate to the [{% data variables.product.prodname_copilot %} sign up page](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=text).
1. Make sure you're signed in to the right organization account. If you aren't, click **{% octicon "arrow-switch" aria-hidden="true" aria-label="arrow-switch" %} Switch** and select the organization.
1. Click **Enable {% data variables.product.prodname_copilot %}**.

After you enable {% data variables.product.prodname_copilot_short %}, you don't need to assign any licenses. You're billed for {% data variables.copilot.copilot_business_short %} licenses only when you assign them.

## Enabling {% data variables.copilot.copilot_code-review_short %}

We recommend having your organization pay for every review, so that no pull request goes without a review. Otherwise, reviews for members who use their own {% data variables.product.prodname_copilot_short %} license, such as {% data variables.copilot.copilot_pro_short %}, stop when those members run out of {% data variables.product.prodname_ai_credits_short %}, and pull requests from authors without a license don't get reviews. To limit what your organization spends, see [Controlling spending](#controlling-spending).

If your organization is owned by an enterprise, you can't change settings that an enterprise owner has set. An enterprise owner can turn on reviews without a license or let organizations decide. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-code-review#allowing-reviews-without-a-copilot-license).

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then **Policies**.
1. Under "Billing," next to "{% data variables.product.prodname_ai_credit_singular %} paid usage," select **Enabled**, or select **Enabled for selected products** and turn on **Opt in to {% data variables.product.prodname_copilot_short %} AI Credits paid usage**.
1. Next to "{% data variables.copilot.copilot_code-review_short %}," select **Enabled**.
1. Next to "Choose how members with a {% data variables.product.prodname_copilot_short %} license are billed," select **Organization**.
1. Turn on **Allow reviews without a {% data variables.product.prodname_copilot_short %} license**. Reviews without a license include pull requests from outside contributors, members on {% data variables.copilot.copilot_free_short %}, and bots such as {% data variables.product.prodname_dependabot %}.

Pull requests in your organization can now get reviews from {% data variables.product.prodname_copilot_short %}, whether or not their authors have a license. Members without a license can't request reviews in IDEs.

## Configuring automatic code review

To have {% data variables.product.prodname_copilot_short %} review pull requests without anyone requesting a review, create a ruleset for the repositories where you want automatic reviews. After members without a license can use {% data variables.copilot.copilot_code-review_short %}, automatic reviews run on their pull requests too. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review#configuring-automatic-code-review-for-repositories-in-an-organization).

## Controlling spending

If your organization isn't owned by an enterprise and has no assigned licenses, or is owned by an enterprise on the {% data variables.product.prodname_copilot_short %} access plan, it has no included {% data variables.product.prodname_ai_credits_short %}. Every review billed to it is paid usage.

To cap spending, create an organization budget for {% data variables.product.prodname_ai_credits_short %} and select **Stop usage when budget limit is reached**. At the limit, reviews that need paid usage stop until the next billing cycle or until you raise the budget. See [AUTOTITLE](/billing/how-tos/set-up-budgets).

If your organization is owned by an enterprise, create the budget in your enterprise account's billing settings, with your organization as its scope. An enterprise owner can also set a budget for a cost center or the whole enterprise. See [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets#how-billing-flows-through-budgets).

Reviews also use {% data variables.product.prodname_actions %} minutes. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review#code-review-usage-and-billing).
