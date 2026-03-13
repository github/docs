---
title: Changing the AI model for GitHub Copilot coding agent
shortTitle: Changing the AI model
intro: '{% data variables.copilot.copilot_pro %} and {% data variables.copilot.copilot_pro_plus %} users can select the model used by {% data variables.copilot.copilot_coding_agent %}.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

> [!NOTE]
> For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

{% data variables.copilot.copilot_pro %} and {% data variables.copilot.copilot_pro_plus %} users can select the model used by {% data variables.copilot.copilot_coding_agent %}.

> [!NOTE] Model selection for {% data variables.copilot.copilot_coding_agent %} is only supported when starting a task from the agents tab or panel, assigning an issue to {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %} and from the Raycast launcher. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).

You may find that different models perform better, or provide more useful responses, depending on the type of tasks you give {% data variables.product.prodname_copilot_short %}.

Support for selecting a model is coming soon for {% data variables.copilot.copilot_for_business %} and {% data variables.copilot.copilot_enterprise %} users. Until then, for these users, {% data variables.copilot.copilot_coding_agent %} will use {% data variables.copilot.copilot_claude_sonnet_45 %}. {% data variables.product.company_short %} reserves the right to change the model used at any time.

## Supported models

The following options are currently available:

* Auto 
{% data reusables.copilot.copilot-coding-agent-auto-models %}
{% data reusables.copilot.copilot-coding-agent-non-auto-models %}

{% data reusables.copilot.auto-model-option %}

