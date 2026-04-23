---
title: Preparing for new features and models
shortTitle: New features and models
intro: 'Stay informed about {% data variables.product.prodname_copilot %} features and models, and make confident decisions about enabling them for your enterprise.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

{% data variables.product.prodname_copilot %} is evolving rapidly, with new features and models released regularly. If you're an enterprise administrator, staying informed helps you make confident decisions about which capabilities to enable, when to adopt them, and how to manage risk across your organizations.

This article provides guidance on navigating the {% data variables.product.prodname_copilot_short %} landscape, understanding different types of features and models, and preparing for upcoming changes.

## Keeping up to date with {% data variables.product.prodname_copilot_short %} changes

You can use {% data variables.product.prodname_docs %} and {% data variables.product.prodname_blog %} to keep track of new releases.

### Learning about new {% data variables.product.prodname_copilot_short %} features

To learn about new {% data variables.product.prodname_copilot_short %} features, we recommend monitoring these two locations:

* **Features overview**: For a complete list of {% data variables.product.prodname_copilot_short %} capabilities, see [AUTOTITLE](/copilot/get-started/features).
* **Changelog**: Follow the [{% data variables.product.prodname_copilot_short %} changelog](https://github.blog/changelog/label/copilot/) for announcements about new and updated features.

{% data variables.product.prodname_copilot_short %} features generally fall into three categories:

{% rowheaders %}

| Type | Description | Examples | Considerations |
| --- | --- | --- | --- |
| Assistive | Respond to prompts and provide suggestions, but require human review before changes are made. | Inline suggestions, {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_for_prs %}. | All changes require user approval. |
| Agentic | Autonomously research, plan, and make changes on behalf of users. | {% data variables.copilot.copilot_cloud_agent %}, third-party agents. | Can work autonomously, but with built-in protections. |
| Third-party | External coding agents that work alongside {% data variables.copilot.copilot_cloud_agent %} to complete tasks asynchronously. | {% data variables.product.prodname_anthropic_claude %}, {% data variables.product.prodname_openai_codex %}. | Same as agentic. Review provider documentation and enable via policies. See [AUTOTITLE](/copilot/concepts/agents/about-third-party-agents). |

{% endrowheaders %}

Each feature has its own enablement requirements and policy settings. When a new feature is released:

1. Review the feature documentation to understand its capabilities.
1. Check the policy settings available at the enterprise and organization level. See [AUTOTITLE](/copilot/concepts/policies).
1. Consider running a pilot with a subset of users before broader rollout.

### Learning about new {% data variables.product.prodname_copilot_short %} models

{% data variables.product.prodname_copilot %} uses multiple AI models from different providers to power its features. Different models have different strengths: some prioritize speed and cost-efficiency, while others are optimized for accuracy, reasoning, or working with multimodal inputs (like images and code together).

Users will have access to different models depending on the feature they're using and your enterprise's {% data variables.product.prodname_copilot_short %} plan and policies.

You can find information about the models available and upcoming models in the following locations:

* **Supported models**: For a complete list of available models and their capabilities, see [AUTOTITLE](/copilot/reference/ai-models/supported-models).
* **Model comparison**: To compare model capabilities side by side, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).
* **Changelog**: Model updates are announced in the [{% data variables.product.prodname_copilot_short %} changelog](https://github.blog/changelog/label/copilot/).

To plan for model transitions and set user expectations, track which models {% data variables.product.github %} designates as base or long-term support (LTS). {% data variables.product.prodname_copilot_short %} automatically falls back to a base model when premium requests run out:

{% rowheaders %}

| Model type | Description | Why it matters |
| --- | --- | --- |
| Base model | The default model when no other models are enabled. | Automatically enabled within 60 days of designation. |
| LTS model | A model supported for one year from designation. | Allows enterprises to build workflows around a stable model. |
| Fallback | When premium requests are exhausted, {% data variables.product.prodname_copilot_short %} uses an earlier base model. | Ensures continuous access at no additional cost. |

{% endrowheaders %}

For more information, see [AUTOTITLE](/copilot/concepts/fallback-and-lts-models).

## Considering different release stages

{% data variables.product.prodname_copilot_short %} features and models progress through different release stages. Understanding release stages helps you decide when to enable features for your organization. Each stage has different expectations for stability and support.

{% rowheaders %}

| Stage | Availability | Stability |
| --- | --- | --- |
| {% data variables.release-phases.private_preview_caps %} | Limited set of customers by invitation. | May change significantly based on feedback. |
| {% data variables.release-phases.public_preview_caps %} | All eligible customers who opt in. | Functional but may have limitations or change. |
| Generally available (GA) | All customers. | Fully supported and recommended for production. |

{% endrowheaders %}

> [!TIP] Many preview features are covered by the [GitHub Data Protection Agreement](https://gh.io/dpa), meaning you can test them without breaching compliance requirements. See [GitHub DPA-Covered Previews](https://gh.io/dpa-previews) for a list.

Preview features are controlled by policy settings at the organization and enterprise level. The **Opt in to preview features** policy allows administrators to enable or disable preview features on the {% data variables.product.github %} website specifically. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

## Reviewing information about Responsible AI

{% data variables.product.github %} is committed to responsible AI development and provides transparency documentation for each {% data variables.product.prodname_copilot_short %} feature.

Each {% data variables.product.prodname_copilot_short %} feature has a dedicated **responsible use** article describing its purpose, capabilities, and limitations. See [AUTOTITLE](/copilot/responsible-use).
