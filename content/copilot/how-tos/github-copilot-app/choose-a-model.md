---
title: Choosing a model in the {% data variables.copilot.github_copilot_app_short %}
shortTitle: Choose a model
intro: 'Choose which large language model you want to use for a task in the {% data variables.copilot.github_copilot_app_short %}.'
versions:
  feature: copilot
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
---

## Introduction

{% data reusables.copilot.choose-model-intro %}

## Identifying the currently selected model

Details of the currently selected model are displayed below the prompt box.

To see the model that was used for a completed response, hover over the response until the information icon (<span style="vertical-align: 2px">{% octicon "info" aria-label="the info icon" %}</span>) is displayed below the response. Hover over the information icon to view the model details. If multiple models were used during work on a task, the information box shows the model used by the main agent, not any subagents that were used.

## Choosing a model

You can choose which model you want to use at any point during a session. Your choice takes effect immediately if {% data variables.product.prodname_copilot_short %} is currently idle, or when the current turn completes. The model will continue to be used for the remainder of the session, unless you change it again. Your choice becomes the default model for future sessions, but the model used in other existing sessions is not affected.

If you have installed local models, these are only available if you are currently in a local session. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/add-llm-models).

1. Click the current model choice, shown below the prompt box.
1. To use {% data variables.copilot.copilot_fusion_short %}:
   1. Toggle the **{% data variables.copilot.copilot_fusion_short %}** switch to the on position.
   1. Choose an effort level:

      * **{% data variables.copilot.copilot_fusion_standard %}** – Prioritizes versatile models for everyday coding.
      * **{% data variables.copilot.copilot_fusion_high %}** – Prioritizes capable models for challenging tasks and deeper reasoning.
      * **{% data variables.copilot.copilot_fusion_max %}** – Prioritizes the most capable models for the most demanding tasks and complex reasoning.response times.

   1. Click outside the dialog to dismiss it.

   When you choose the **{% data variables.copilot.copilot_fusion_short %}** option, {% data variables.product.prodname_copilot_short %} analyzes each task and selects a model to complete it, orchestrating multiple models through execution patterns when needed. For more information, see [AUTOTITLE](/copilot/concepts/models/copilot-fusion).

1. To choose a specific model:
   1. Toggle the **{% data variables.copilot.copilot_fusion_short %}** switch to the off position.
   1. Hover over the current model choice in the dialog and click to select a different model from the list that's displayed.
   1. Depending on the model you choose, additional options for effort level and context window size may be available.

      Select the appropriate options based on your needs.

   1. Click outside the dialog to dismiss it.

## Further reading

* [AUTOTITLE](/copilot/concepts/models/overview)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/add-llm-models)
