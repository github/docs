---
title: GitHub Copilot with data residency
shortTitle: GitHub Copilot
intro: "Keep AI-powered coding assistance within your designated region, so you can meet compliance requirements while improving developer productivity."
versions:
  ghec: '*'
category:
  - Get started with GitHub Enterprise
product: '{% data variables.enterprise.data_residency %}'
---

If your enterprise uses {% data variables.enterprise.data_residency %}, you can enable a policy to ensure that all inference processing and associated data for {% data variables.product.prodname_copilot %} remain **within your designated geographic region**.

## Supported regions

{% data variables.product.prodname_copilot_short %} with data residency is currently available in the following regions:

* United States
* European Union

{% data variables.product.company_short %} plans to add support for more regions in the near future.

## How restrictions are enforced

When you enforce data residency for {% data variables.product.prodname_copilot_short %}, {% data variables.product.company_short %} routes all {% data variables.product.prodname_copilot_short %} requests to model endpoints within your enterprise's designated region. Your code, prompts, and {% data variables.product.prodname_copilot_short %} responses never leave your region during inference processing.

The enforcement happens at multiple levels:

* **Authentication and routing**: Users' authentication tokens only grant access to your region-specific endpoints, ensuring that traffic never leaves the designated geography.
* **Model availability**: {% data variables.product.prodname_copilot_short %} will only surface models that are certified and available in your region. Developers cannot access models hosted outside your region.
* **Logs and telemetry**: All {% data variables.product.prodname_copilot_short %}-related logs and telemetry are stored within region-appropriate, compliant storage.

## Client version requirements

{% data reusables.copilot.model-compliance.client-requirements %}

## Supported {% data variables.product.prodname_copilot_short %} features

{% data reusables.copilot.model-compliance.supported-features %}

## Available AI models by region

The models available for {% data variables.product.prodname_copilot_short %} vary by region. {% data reusables.copilot.model-compliance.models-intro %}

### United States

{% data reusables.copilot.model-compliance.us-models %}

### European Union

* GPT-4o mini
* GPT-4.1
* GPT-5 mini
* GPT-5.2
* GPT-5.4
* Claude Haiku 4.5
* Claude Sonnet 4
* Claude Sonnet 4.5
* Claude Opus 4.5
* Claude Sonnet 4.6
* Claude Opus 4.6

## Pricing changes

{% data reusables.copilot.model-compliance.pricing-changes %}

## Policy controls

To enable this policy, use the **Restrict {% data variables.product.prodname_copilot_short %} to data residency compliant models** policy in the "Features" section of your enterprise's {% data variables.product.prodname_copilot_short %} policies. This policy is disabled by default, and enabling it will affect your pricing for {% data variables.product.prodname_copilot_short %} requests.

For instructions on finding your policies page, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).
