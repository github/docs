---
title: Managing availability of default models
shortTitle: Manage model availability
intro: 'You can control which {% data variables.product.prodname_copilot_short %} models are available to specific organizations.'
versions:
  feature: copilot
contentType: how-tos
permissions: Enterprise owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
allowTitleToDifferFromFilename: true
---

> [!NOTE]
> Managing availability of default models for organizations is in public preview and subject to change.

## About managing default model availability

As an enterprise owner, you can manage which default {% data variables.product.prodname_copilot_short %} models are available to organizations within your enterprise. For each model, you can choose whether it is automatically enabled for all organizations or whether individual organizations can choose to enable it.

## Choosing which models are available

You can choose which default models from {% data variables.product.github %} are available to organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.copilot-sidebar %}
{% data reusables.enterprise-accounts.configure-allowed-models %}
1. Above the list of models, click **Add models**.
1. In the modal, select or deselect the checkboxes next to the models you want to make available or remove.
1. Click **Save**.

## Setting organization availability for a model

You can control whether a model is automatically enabled for all organizations or whether organizations can choose to enable it themselves.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.copilot-sidebar %}
{% data reusables.enterprise-accounts.configure-allowed-models %}
1. In the "Default models" tab, next to a model, click the dropdown menu and select an availability option:
   * **Enabled**: The model is enabled for all organizations in your enterprise.
   * **Optional**: Organizations can choose whether to enable the model.

## Creating targeted model rules

Targeted model rules let you control exactly which models are available to specific organizations, giving you more granular control than the enterprise-wide availability settings.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.copilot-sidebar %}
{% data reusables.enterprise-accounts.configure-allowed-models %}
1. In the "Targeted model rules" section, click **Create access rule**.
1. Next to "Target organizations", click **Add organizations**, then select the organizations you want the rule to apply to.
1. Under "Allowed models", click **Add models**, then select the models you want to make available to the selected organizations and click **Save**.
1. Click **Create rule**.

## Further reading

* [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies)
