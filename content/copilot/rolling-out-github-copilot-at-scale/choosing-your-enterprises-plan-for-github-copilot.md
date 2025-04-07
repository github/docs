---
title: Choosing your enterprise's plan for GitHub Copilot
shortTitle: Choose your plan
intro: 'Choose between {% data variables.product.prodname_copilot_business_short %} and {% data variables.product.prodname_copilot_enterprise_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
permissions: 'Enterprise owners and billing managers'
---

When you adopt {% data variables.product.prodname_copilot %} in a company, you will sign up to a {% data variables.product.prodname_copilot_short %} plan designed for businesses. These plans allow you to:

* Choose which users receive access to {% data variables.product.prodname_copilot_short %}
* Meet regulations and security requirements with features like file exclusion, policies, and audit logs
* Benefit from advanced {% data variables.product.prodname_copilot_short %} features

{% data variables.product.prodname_copilot_enterprise_short %} offers additional features for enterprises that want to customize {% data variables.product.prodname_copilot_short %} for their needs.

<a href="https://github.com/github-copilot/purchase" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>

## About the plans

{% data variables.product.company_short %} offers two {% data variables.product.prodname_copilot_short %} plans for customers on {% data variables.product.prodname_ghe_cloud %}:

* **{% data variables.product.prodname_copilot_business_short %}** ({% data variables.copilot.cfb_price_per_month %} per user per month): includes most {% data variables.product.prodname_copilot_short %} features in IDEs and on the {% data variables.product.github %} website.
* **{% data variables.product.prodname_copilot_enterprise_short %}** ({% data variables.copilot.ce_price_per_month %} per user per month): allows companies to customize {% data variables.product.prodname_copilot_short %} for their code and processes. To learn more, see [Customization with {% data variables.product.prodname_copilot_enterprise_short %}](#customization-with-copilot-enterprise).

For a full comparison, see our [plans page](https://github.com/features/copilot/plans).

## Customization with {% data variables.product.prodname_copilot_enterprise_short %}

Many companies have complex repositories, such as large monorepos or legacy codebases, that can be difficult to get started with. Developers may need to spend a long time finding and reading documentation before they can contribute.

With {% data variables.product.prodname_copilot_enterprise_short %}, you can create **knowledge bases** that bring together documentation from one or more repositories in an organization. Users can specify the knowledge base as the context for {% data variables.product.prodname_copilot_chat_short %}, allowing {% data variables.product.prodname_copilot_short %} to synthesize information from your documentation in its response.

## About mixed plans

When you subscribe your enterprise account to {% data variables.product.prodname_copilot_enterprise_short %}, you don't need to use this plan across the whole enterprise. Instead, you can choose a plan individually for each organization in your enterprise. This approach allows you to:

* Evaluate the benefits of {% data variables.product.prodname_copilot_enterprise_short %} for a smaller group of users before rolling it out further.
* Enable {% data variables.product.prodname_copilot_enterprise_short %} in the organizations where it will have the most impact, such as organizations with complex documentation or legacy codebases.

## Making a decision

To summarize:

* Choose {% data variables.product.prodname_copilot_enterprise_short %} if your company has projects with complex requirements or large amounts of documentation. Knowledge bases give {% data variables.product.prodname_copilot_short %} enhanced context, which can save developers time and allow them to focus on tasks they enjoy.
* If you're not sure about a full rollout, choose {% data variables.product.prodname_copilot_enterprise_short %} at the enterprise level and enable it for individual organizations where it will have the most impact.

## Further reading

* [AUTOTITLE](/enterprise-cloud@latest/copilot/customizing-copilot/managing-copilot-knowledge-bases)
* [AUTOTITLE](/enterprise-cloud@latest/copilot/customizing-copilot/creating-a-custom-model-for-github-copilot)
