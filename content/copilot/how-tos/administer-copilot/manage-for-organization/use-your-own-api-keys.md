---
title: Using your LLM provider API keys with Copilot
shortTitle: Use your own API keys
intro: 'Learn how to integrate your preferred custom models with {% data variables.product.prodname_copilot %} by using your own LLM API keys, and make them available to your organization members.'
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

As an organization owner, you may have specific requirements for governance, data security, and compliance. Setting up your own API keys allows you to address:

{% data reusables.copilot.byok-why %}

## Adding your key to an organization account

> [!IMPORTANT] We highly recommend adhering to the principle of least privilege by assigning only the minimum necessary scopes to your API keys.

After you've added your key and selected one or more models, you and your organization members will be able to use them with {% data variables.copilot.copilot_byok_supported_features %}. Your models will appear at the bottom of the model picker, under the organization name.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Under "Copilot", click **Models**.
{% data reusables.copilot.byok-add %}

## Further reading

* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys) in our documentation for enterprise accounts.
* [AUTOTITLE](/copilot/concepts/chat)