---
title: Using your LLM provider API keys with Copilot
shortTitle: Use your own API keys
intro: 'Learn how to integrate your preferred custom models with {% data variables.product.prodname_copilot %} by using your own LLM API keys, and make them available for organizations in your enterprise account.'
versions:
  feature: copilot-byok
topics:
  - Copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Configure Copilot
  - Manage Copilot for a team
---

{% data reusables.copilot.byok-intro %}

## Why bring your own API keys?

As an enterprise owner, you may have specific requirements for governance, data security, and compliance. Setting up your own API keys allows you to address:

{% data reusables.copilot.byok-why %}

## Adding your key to an enterprise account

> [!IMPORTANT] We highly recommend adhering to the principle of least privilege by assigning only the minimum necessary scopes to your API keys.

After you've added your key and selected one or more models, you and members of your organizations will be able to use them with {% data variables.copilot.copilot_byok_supported_features %}. Your models will appear at the bottom of the model picker, under the enterprise name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Click **Configure allowed models**.
{% data reusables.copilot.byok-add %}

## Managing availability of custom models in your organizations

You can choose whether the models you have added are available to organizations in your enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Click **Configure allowed models**.
1. Click the **Custom models** tab.
1. Above the list of API keys, click the **Added models** tab.
1. Next to a model, click **Configure**. If any organizations already have access to the model, instead of "Configure", you will need to click **All organizations** or **X organizations**.
1. In the modal that opens, click the **Access** tab.
   >[!NOTE] The model must be set to 'Enabled' before the "Access" tab will be available.
1. Choose how the model should be made available to organizations:
   * To make the model available to all organizations in your enterprise account, select **Allow for all organizations**.
   * To only make the model available for specific organizations, select **Choose per organization**, and check or uncheck the organizations listed below.
1. Click **Save**.

## Further reading

* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/use-your-own-api-keys) in our documentation for organizations.
* [AUTOTITLE](/copilot/concepts/chat)