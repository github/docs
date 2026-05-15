---
title: Governing Copilot to support developer productivity
shortTitle: Govern for adoption
intro: 'Set a governance posture that balances compliance requirements with developer productivity, so your rollout succeeds from day one.'
permissions: Enterprise owners
versions:
  feature: copilot
category:
  - Roll Copilot out at scale
contentType: tutorials
allowTitleToDifferFromFilename: true
---

Getting the most from {% data variables.product.prodname_copilot %} means finding the right balance between governance and developer access. Too restrictive, and developers can't use the features that make them productive. Too permissive, and you may not meet your compliance requirements.

This guide covers the governance decisions that help your developers get value from {% data variables.product.prodname_copilot_short %} quickly, while keeping your enterprise within its compliance boundaries. You should make these decisions during initial setup, and revisit them as your usage matures.

## Delegate {% data variables.product.prodname_copilot_short %} administration to people with AI context

Policy decisions work best when they're informed by practical experience with AI tools. Custom enterprise roles let you delegate AI administration to subject matter experts.

This approach reduces bottlenecks and helps ensure that the people setting policies understand how developers actually work with {% data variables.product.prodname_copilot_short %}.

For step-by-step instructions on creating an AI manager role, see [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/establish-ai-managers).

## Review and enable features promptly

Developers get the most value from {% data variables.product.prodname_copilot_short %} when they can access new features and models as they become available. When there are significant feature gaps, due to features remaining disabled, developers may turn to third-party tools that sit outside your compliance controls.

Consider enabling vetted capabilities promptly, rather than disabling features by default and enabling them only after review:

* **Enable new features and models as they become available**, unless you have a specific compliance reason not to. {% data variables.product.github %} vets all features and models before release.
* **Only set enterprise-level defaults to disabled for non-negotiables**, such as compliance-critical controls or features that conflict with regulatory requirements.
* **Scope restrictions to sensitive organizations**. Rather than blocking features enterprise-wide, disable them only in organizations with stricter compliance requirements. This lets other organizations move faster.

### Spend management and policy posture

Spend controls interact with your policies. If you enable advanced models and agentic features but set tight budget limits, developers may not be able to use those features consistently.

When configuring policies and budgets, consider whether your limits align with how you want developers to use {% data variables.product.prodname_copilot_short %}.

## Use pre-vetted LLM models

If your organization already has a vetted LLM provider for compliance, cost management, or existing contracts, you can use those API keys with {% data variables.product.prodname_copilot_short %} instead of going through a separate approval process for {% data variables.product.github %}-hosted models.

If you don't have an existing LLM provider relationship, this approach is optional. {% data variables.product.github %}-hosted models are ready to use immediately.

This approach offers several advantages:

* **Governance and compliance**: Use LLM providers that already meet your organization's policies and regulatory requirements.
* **Cost management**: Align with existing payment methods, contracts, credits, or negotiated rates.
* **Visibility and control**: Monitor usage through your provider's existing dashboards and billing.

For setup instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys).
