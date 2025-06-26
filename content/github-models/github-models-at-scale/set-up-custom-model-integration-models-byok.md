---
title: Using your own API keys in GitHub Models
shortTitle: Use custom models
intro: Learn how to integrate your preferred custom models with {% data variables.product.prodname_github_models %} by using your own LLM API keys.
versions:
  feature: github-models
permissions: Organization owners can add custom models to {% data variables.product.prodname_github_models %} for their organization
topics:
  - Enterprise
allowTitleToDifferFromFilename: true
---

{% data reusables.models.byok-preview-note %}

You can bring your own API keys (BYOK) to {% data variables.product.prodname_github_models %}, and enable teams to use your preferred large language model (LLM) providers across tools like Prompts, Playground, and Models in Actions. For more information about {% data variables.product.prodname_github_models %}, see [AUTOTITLE](/github-models/about-github-models).

To learn about billing and pricing, see [AUTOTITLE](/billing/managing-billing-for-your-products/about-billing-for-github-models).

>[!NOTE] Model support is currently limited to OpenAI and AzureAI.

## Why bring your own API keys?

As an organization owner, you may have specific requirements for governance, data security, and compliance. By setting up your own API keys, you can:

* **Governance and compliance:** Choose LLM providers that comply with your organization's policies and regulatory requirements.
* **Cost management:** Align with your existing payment methods, contracts, credits, or negotiated rates, and avoid usage overages.
* **Visibility and control:** Manage which models your team can access, and monitor usage through your provider's existing dashboards and billing.
* **Flexibility:** Support custom or specialized models that your organization already uses.

## Setting up your API keys to add custom models

> [!IMPORTANT] We highly recommend adhering to the principle of least privilege by assigning only the minimum necessary scopes to your API keys.

You must first add the relevant API keys for the organization. After that, your can specify or enable the custom models you wish to make available to users.

### Adding API keys

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.custom-models %}
1. Click **Add custom key**.
1. In the "Add a custom key" dialog, provide details about your key. **Name** and **Key** are compulsory fields.
1. Click **Save**.

## Enabling custom models

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.models-development %}
1. Under "Models permissions", select **All publishers** to enable models added by custom keys.
   * If this option isn't available, you need to allow the use of the model in the organization. See [AUTOTITLE](/github-models/github-models-at-scale/manage-models-at-scale#controlling-model-usage-in-your-organization).
1. Optionally, select **Only select models** to create a custom list of enabled or disabled models. This allows you to control which models are available to your organization.  

## Next steps

Now that you've enabled your custom models in {% data variables.product.prodname_github_models %}, learn how to:

* Experiment with your custom model in the playground. See [Experimenting with AI models in the playground](/github-models/use-github-models/prototyping-with-ai-models#experimenting-with-ai-models-in-the-playground).

* Store prompts on {% data variables.product.github %} so that you can iterate to fine-tune your prompts, and share them with stakeholders. See [AUTOTITLE](/github-models/use-github-models/storing-prompts-in-github-repositories).

* Launch your AI application. See [Going to production](/github-models/use-github-models/prototyping-with-ai-models#going-to-production).
