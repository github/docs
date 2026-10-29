---
title: Configuring access to AI models in GitHub Copilot
shortTitle: Configure access to AI models
intro: 'Control which AI models your organization or enterprise can use with {% data variables.product.prodname_copilot_short %}.'
versions:
  feature: copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/configuring-access-to-ai-models-in-copilot
  - /copilot/how-tos/ai-models/configuring-access-to-ai-models-in-copilot
  - /copilot/how-tos/ai-models/configure-access-to-ai-models
  - /github-models/use-github-models/integrating-ai-models-into-your-development-workflow
  - /copilot/how-tos/use-ai-models/configure-access-to-ai-models
contentType: how-tos
category:
  - Configure Copilot
---

Your access to {% data variables.product.prodname_copilot %} models depends on:

* Your {% data variables.product.prodname_copilot_short %} plan.
* The client you use (for example, {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_vscode %}, or JetBrains IDEs).
* Whether your organization or enterprise restricts access to specific models.

For a list of available AI models, see [AUTOTITLE](/copilot/reference/ai-models/supported-models). For information on how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).

## Setup for individual plans

For individual {% data variables.product.prodname_copilot_short %} plans, you can use AI models directly within {% data variables.product.prodname_copilot_short %} without configuring access or managing policies. {% data variables.copilot.copilot_free_short %} and {% data variables.copilot.copilot_student_short %} only have access to {% data variables.copilot.copilot_auto_model_selection_short %}.

> [!NOTE]
> Models available depend on your plan. See [AUTOTITLE](/copilot/reference/ai-models/supported-models#supported-ai-models-per-copilot-plan).

## Setup for organization and enterprise plans

As an enterprise or organization owner, you can enable or disable access to AI models for members with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} seat. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-default-models).

Image generation uses a dedicated image generation model, which you manage in the same model policy. To turn off image generation for members, disable this model. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation).

## Custom models

{% data reusables.copilot.byok-two-mechanisms %}

For more information, see [AUTOTITLE](/copilot/concepts/models/bring-your-own-key).

Windows users can also add the {% data variables.copilot.mai_code_1_1_flash %} model to their local machine, directly from {% data variables.copilot.copilot_cli_short %}, the {% data variables.copilot.github_copilot_app_short %}, or {% data variables.product.prodname_vscode %}, provided their computer meets the required system resources. {% data reusables.copilot.model-download-from-app %}
