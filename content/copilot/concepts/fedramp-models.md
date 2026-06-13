---
title: FedRAMP-compliant models for GitHub Copilot
shortTitle: FedRAMP models
intro: "Restrict users to models with FedRAMP Moderate certification."
versions:
  feature: copilot
product: '{% data variables.enterprise.data_residency %}'
contentType: concepts
---

If your enterprise uses {% data variables.enterprise.data_residency %} in the US, you can enable a policy to ensure that users on your {% data variables.product.prodname_copilot_short %} plan can only use models with **FedRAMP Moderate** certification.

## Available models

{% data reusables.copilot.model-compliance.models-intro %}

Enabling the FedRAMP policy restricts users to the following models:

{% data reusables.copilot.model-compliance.us-models %}

## Client version requirements

{% data reusables.copilot.model-compliance.client-requirements %}

## Supported {% data variables.product.prodname_copilot_short %} features

{% data reusables.copilot.model-compliance.supported-features %}

## Pricing changes

{% data reusables.copilot.model-compliance.pricing-changes %}

## Policy controls

To enable this policy, use the **Restrict {% data variables.product.prodname_copilot_short %} to FedRAMP models** policy in the "Features" section of your enterprise's {% data variables.product.prodname_copilot_short %} policies. This policy is disabled by default, and enabling it will affect your pricing for {% data variables.product.prodname_copilot_short %} requests.

For instructions on finding your policies page, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).