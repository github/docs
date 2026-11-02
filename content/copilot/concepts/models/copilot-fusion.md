---
title: 'About {% data variables.copilot.copilot_fusion %}'
allowTitleToDifferFromFilename: true
shortTitle: 'Copilot Fusion'
intro: 'Automatically select the right models and execution pattern for each task.'
product: '{% data variables.copilot.copilot_fusion %} is available with all {% data variables.product.prodname_copilot %} plans. <br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=fusion-docs-purchase&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

## Overview

{% data variables.copilot.copilot_fusion_short %} is an intelligent runtime model router and orchestrator. It chooses models and execution patterns for your task, then returns a single response. For example, it can choose one model to draft a solution and a separate model for review.

You select {% data variables.copilot.copilot_fusion_short %} in the model picker, but you aren't selecting a specific model. You're choosing a system that routes and orchestrates models at runtime. You don't need to switch models during a task or decide which model suits each step. For each request, {% data variables.copilot.copilot_fusion_short %} selects the right execution pattern, the right level of reasoning effort, and the models that run it.

{% data variables.copilot.copilot_fusion_short %} also considers real-time system health and availability when choosing models. Routing occurs along natural cache boundaries and large changes in conversation complexity to avoid additional cache-related costs without quality improvements.

### How {% data variables.copilot.copilot_fusion_short %} works

{% data variables.copilot.copilot_fusion_short %} evaluates each task and uses capability signals for reasoning, code generation, debugging, and tool use, to select the most efficient execution pattern that meets the quality bar for your chosen effort level.

Depending on the effort level and task, {% data variables.copilot.copilot_fusion_short %} chooses one of three execution patterns:

| Execution pattern | Description |
| --- | --- |
| Single | One model completes the task. |
| Cascade | An efficient model drafts a solution, and a judge inspects the draft and decides whether to accept it or escalate to a stronger model. |
| Critique | One model drafts a response while multiple models independently critique it in parallel. Their feedback is aggregated, and the original model revises its response based on the combined feedback. |

{% data variables.copilot.copilot_fusion_short %} chooses an execution pattern when needed, for each prompt, so different prompts in the same session can use different execution patterns. For example, if your first prompt uses the single pattern, a follow-up prompt can use the critique pattern.

Choosing an execution pattern is a lightweight step that adds minimal latency.

{% data variables.copilot.copilot_fusion_short %} only adds model calls when a task warrants them. This means a straightforward task doesn't wait or use {% data variables.product.prodname_ai_credits_short %} for a review it doesn't need.

* The single execution pattern behaves like a request to one model.
* Cascade and critique take longer because they include model calls for review.

{% data variables.copilot.copilot_fusion_short %} draws on a mix of models: versatile models for straightforward work, and models with stronger reasoning for harder problems. Reasoning effort and model choice are set per step. The model pool changes as new models become available and as {% data variables.product.company_short %} evaluates which models perform best.

While {% data variables.copilot.copilot_fusion_short %} works, you can follow the progress of each step and the model being used. Intermediate drafts might be revised or discarded, so {% data variables.copilot.copilot_fusion_short %} only shows you the final response.

{% data variables.copilot.copilot_fusion_short %} doesn't have a context window of its own. Each step runs within the context limits of the model running it. The context window shown for {% data variables.copilot.copilot_fusion_short %} is a conservative value based on the smallest limits among the models it uses.

When the response is provided, you can hover over the effort level name below the response to see a list of models used.

## {% data variables.copilot.copilot_fusion_short %} effort levels

{% data variables.copilot.copilot_fusion_short %} has multiple effort levels to let you prioritize the quality, cost, and capability tradeoffs that the system prioritizes for each prompt.

| Effort level | Priority | Typical use |
| --- | --- | --- |
| **{% data variables.copilot.copilot_fusion_standard %}** | Balances cost, quality, and latency. | Everyday work. {% data variables.copilot.copilot_fusion_short %} selects one model for each task. |
| **{% data variables.copilot.copilot_fusion_high %}** | Balanced orchestration with moderate token savings. | Substantial, well-scoped coding tasks, such as fixing a complex bug or making a change across several files, when additional model calls may be worth the extra time and {% data variables.product.prodname_ai_credits_short %}. |
| **{% data variables.copilot.copilot_fusion_max %}** | Frontier capability while still considering token efficiency. | Tasks requiring the deepest possible reasoning and most thorough analysis. |
| **{% data variables.copilot.copilot_fusion_fast %}** | Only used in scenarios that require fast models. | Not selectable by users. Only available in {% data variables.product.prodname_vscode %} inline chat. |

> [!NOTE]
> If you have installed either the {% data variables.copilot.mai_code_1_1_flash %} or {% data variables.copilot.qwen3.8-flash-next %} models locally, these are more likely to be used, where appropriate, on the {% data variables.copilot.copilot_fusion_standard %} effort level. See [Selecting local models in {% data variables.copilot.copilot_fusion_short %}](#selecting-local-models-in-copilot-fusion).

## Selecting local models in {% data variables.copilot.copilot_fusion_short %}

> [!NOTE]
> {% data reusables.public-preview.public-preview %}

If you use Windows on a computer with the required specifications, you can download and install the {% data variables.copilot.mai_code_1_1_flash %} model from within {% data variables.copilot.copilot_cli_short %}, the {% data variables.copilot.github_copilot_app_short %}, or {% data variables.product.prodname_vscode %}. {% data reusables.copilot.model-download-from-app %}

Once this model is installed locally, {% data variables.copilot.copilot_fusion_short %} can choose to use it when appropriate, but only from the {% data variables.copilot.copilot_fusion_standard %} effort level.

Similarly, in {% data variables.copilot.copilot_cli_short %}, if you install {% data variables.copilot.qwen3.8-flash-next %} locally, (using a model provider such as Ollama), and {% data variables.product.prodname_copilot_short %} identifies it as "qwen3.8-flash-next-local", then {% data variables.copilot.copilot_fusion_short %}, from the {% data variables.copilot.copilot_fusion_standard %} effort level, can also use this local model. This is supported across Windows, macOS, and Linux.

While this is in {% data variables.release-phases.public_preview %}, you must enable experimental features to use it:

* **In the {% data variables.copilot.github_copilot_app_short %}**: Turn on **Local model auto routing** in the "Experimental" section of the app's settings.
* **In {% data variables.copilot.copilot_cli_short %}**: Start the CLI with the `--experimental` option, or use `/experimental on` in an interactive session to enable experimental features for the current and future sessions.

As an alternative to {% data variables.copilot.copilot_fusion_short %}, you can configure a {% data variables.copilot.copilot_custom_agent_short %} to use a specific local model, and then, in your prompt, instruct {% data variables.product.prodname_copilot_short %} to use that custom agent for the task, or for a specific part of the task. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli#delegating-focused-tasks-to-a-specific-model).

## Policies and availability

{% data variables.copilot.copilot_fusion_short %} is generally available in:

* {% data variables.product.prodname_vscode %}
* {% data variables.copilot.copilot_cli_short %}
* {% data variables.copilot.github_copilot_app %}
* JetBrains IDEs

### {% data variables.copilot.copilot_fusion_short %} effort level availability by {% data variables.product.prodname_copilot_short %} plan

{% rowheaders %}

| Effort level | {% data variables.copilot.copilot_free_short %} | {% data variables.copilot.copilot_student_short %} | {% data variables.copilot.copilot_pro_short %} | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_max_short %} | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {% data variables.copilot.copilot_fusion_standard %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_fusion_high %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_fusion_max %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_fusion_fast %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

### Policies

When you use {% data variables.copilot.copilot_fusion_short %}, it chooses from the models available, subject to your policies and subscription type. Available models may change over time.

{% data variables.copilot.copilot_fusion_short %}, **won't** include these models:
* Models not available in your plan.
* Models excluded by administrator policies. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models#configuring-models-available-for-copilot-fusion).
* Models excluded by policies restricting {% data variables.product.prodname_copilot_short %} to data-resident or FedRAMP-compliant models.
* Models excluded by policies restricting [Evaluation models](/copilot/reference/ai-models/supported-models#evaluation-models).

{% data variables.copilot.copilot_fusion_short %} may use specific locally hosted models with the {% data variables.copilot.copilot_fusion_standard %} effort level. See [AUTOTITLE](/copilot/concepts/models/copilot-fusion#selecting-local-models-in-copilot-fusion).

If none of the models {% data variables.copilot.copilot_fusion_short %} uses are available to you, {% data variables.copilot.copilot_fusion_short %} doesn't appear in the model picker.

## Billing for {% data variables.copilot.copilot_fusion_short %}

<!-- expires 2026-11-30 -->
{% data reusables.copilot.fusion-promotional-discount %}
<!-- end expires 2026-11-30 -->

When you use {% data variables.copilot.copilot_fusion_short %}, you're billed for each model it uses, at that model's standard rate. There's no separate charge for {% data variables.copilot.copilot_fusion_short %}. Because {% data variables.copilot.copilot_fusion_high %} and {% data variables.copilot.copilot_fusion_max %} can use more than one model for a task, a task may consume more {% data variables.product.prodname_ai_credits_short %} than it would with {% data variables.copilot.copilot_fusion_standard %}. For per-model rates, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).

{% data variables.copilot.copilot_fusion_short %} keeps your main conversation on the same model whenever possible, so the conversation continues to benefit from cached tokens. Models that assist, such as a reviewer, receive only the context they need.

## {% data variables.copilot.copilot_fusion_short %} limitations

* {% data variables.copilot.copilot_fusion_short %} works separately from subagents and doesn't start them.
* If {% data variables.copilot.copilot_fusion_short %} discards a draft, changes that the draft already made in your workspace, such as file edits, aren't undone automatically. Review changes before you commit them.
* The execution patterns and model pool used may change over time.

## Further reading

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/choose-a-model)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/choose-a-model)
