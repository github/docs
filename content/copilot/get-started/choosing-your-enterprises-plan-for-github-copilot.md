---
title: Choosing your enterprise's plan for GitHub Copilot
shortTitle: Choose enterprise plan
intro: 'Choose between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
permissions: Enterprise owners and billing managers
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/rolling-out-github-copilot-at-scale/planning-your-rollout/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/planning-your-rollout/choosing-your-enterprises-plan-for-github-copilot
---

When you adopt {% data variables.product.prodname_copilot %} in a company, you will sign up to a {% data variables.product.prodname_copilot_short %} plan designed for businesses. These plans allow you to:

* Choose which users receive access to {% data variables.product.prodname_copilot_short %}
* Meet regulations and security requirements with features like file exclusion, policies, and audit logs
* Benefit from advanced {% data variables.product.prodname_copilot_short %} features

{% data variables.copilot.copilot_enterprise_short %} offers additional features for enterprises that want to customize {% data variables.product.prodname_copilot_short %} for their needs.

This article helps you to decide whether to adopt {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}.

<a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=choosing+enterprise+plan" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## About the plans

{% data variables.product.company_short %} offers two {% data variables.product.prodname_copilot_short %} plans for customers on {% data variables.product.prodname_ghe_cloud %}:

* **{% data variables.copilot.copilot_business_short %}** ({% data variables.copilot.cfb_price_per_month %} per user per month): includes most {% data variables.product.prodname_copilot_short %} features in IDEs and on the {% data variables.product.github %} website.
* **{% data variables.copilot.copilot_enterprise_short %}** ({% data variables.copilot.ce_price_per_month %} per user per month): allows companies to customize {% data variables.product.prodname_copilot_short %} for their code and processes, and includes a higher allowance for premium requests. To learn more, see the sections below.

For a full comparison, see our [plans page](https://github.com/features/copilot/plans).

## About mixed plans

When you subscribe your enterprise account to {% data variables.copilot.copilot_enterprise_short %}, you don't need to use this plan across the whole enterprise. Instead, you can choose a plan individually for each organization in your enterprise. This approach allows you to:

* Evaluate the benefits of {% data variables.copilot.copilot_enterprise_short %} for a smaller group of users before rolling it out further.
* Enable {% data variables.copilot.copilot_enterprise_short %} in the organizations where it will have the most impact, such as organizations with complex documentation or specialized engineering requirements.

## What are our goals for {% data variables.product.prodname_copilot_short %}?

To drive and measure downstream impact of {% data variables.product.prodname_copilot_short %}, {% data variables.product.company_short %} recommends leading your rollout with specific engineering goals in mind. Your requirements for {% data variables.product.prodname_copilot_short %} features will depend on your overall goal for the rollout.

For examples of how {% data variables.product.prodname_copilot_short %} can help with common problems in engineering teams, see [AUTOTITLE](/copilot/get-started/achieve-engineering-goals).

## Do we have projects with complex requirements?

For complex projects like monorepos or legacy codebases, developers in your company may need to spend a long time finding and reading documentation before they can contribute.

With {% data variables.copilot.copilot_enterprise_short %}, you can create **knowledge bases** that bring together documentation from one or more repositories in an organization, allowing {% data variables.product.prodname_copilot_short %} to synthesize information from your documentation in its responses.

## Will we use {% data variables.copilot.copilot_code-review_short %} at scale?

With {% data variables.copilot.copilot_code-review_short %}, {% data variables.product.prodname_copilot_short %} can provide feedback on pull requests on {% data variables.product.github %}. How much you use this feature depends on the goals of your rollout. For example, if a goal is to increase velocity by accelerating approvals of pull requests, then you may be encouraging developers to use {% data variables.copilot.copilot_code-review_short %} as much as possible.

{% data variables.copilot.copilot_enterprise_short %} includes a higher allowance for premium requests, which are used by {% data variables.copilot.copilot_code-review_short %}. To learn more, see [How much will we benefit from premium requests?](#how-much-will-we-benefit-from-premium-requests).

## How much will we benefit from premium requests?

{% data reusables.copilot.premium-requests-for-enterprises %}

To decide if you will benefit from a higher allowance for premium requests, compare the goals of your rollout to **development tasks** that each model is specialized in. For example, the {% data variables.copilot.copilot_claude_sonnet_40 %} is designed for advanced reasoning and coding tasks. Teams who work in specialized areas may require more requests to premium models. To learn about the benefits of different models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

Regardless of your plan, you can set a spending limit for premium requests over your plan's allowance. Premium requests over the allowance will be charged at a rate of {% data variables.copilot.additional_premium_requests %} per request, with an additional multiplier applied to certain models.

## Making a decision

To summarize:

* Choose {% data variables.copilot.copilot_enterprise_short %} if your company has projects with complex requirements or large amounts of documentation. Knowledge bases give {% data variables.product.prodname_copilot_short %} enhanced context, which can save developers time and allow them to focus on tasks they enjoy.
* If you think your developers will benefit from premium models and {% data variables.product.prodname_copilot_short %} code reviews, it may be cost effective to choose {% data variables.copilot.copilot_enterprise_short %} rather than pay for premium requests over your allowance.
* If you're not sure about a full rollout, choose {% data variables.copilot.copilot_enterprise_short %} at the enterprise level and enable it for individual organizations where it will have the most impact.
* Make your decision based on your downstream goals for the {% data variables.product.prodname_copilot_short %} rollout.

## Further reading

* [AUTOTITLE](/enterprise-cloud@latest/copilot/customizing-copilot/managing-copilot-knowledge-bases)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task)
