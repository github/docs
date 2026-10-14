---
title: AI model comparison
shortTitle: Model comparison
allowTitleToDifferFromFilename: true
intro: 'Compare available AI models in {% data variables.copilot.copilot_chat_short %} and choose the best model for your task.'
versions:
  feature: copilot
category:
  - Learn about Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task
  - /copilot/reference/ai-models/choosing-the-right-ai-model-for-your-task
  - /copilot/tutorials/compare-ai-models
  - /copilot/using-github-copilot/ai-models/examples-for-ai-model-comparison
  - /copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks
  - /copilot/tutorials/comparing-ai-models-using-different-tasks
contentType: reference
---

## Comparison of AI models for {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} supports multiple AI models with different capabilities. The model you choose affects the quality and relevance of responses by {% data variables.copilot.copilot_chat_short %} and {% data variables.product.prodname_copilot_short %} inline suggestions. Some models offer lower latency, while others offer fewer hallucinations or better performance on specific tasks. This guide helps you pick the best model based on your task, not just model names.

> [!NOTE]
> * Different models consume {% data variables.product.prodname_ai_credits_short %} at different rates based on their token pricing. For details, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).
> * Choosing the **Auto** option when selecting a model automatically selects the optimum model for your task, based on model availability and task complexity. If you are on a paid {% data variables.product.prodname_copilot_short %} plan, you qualify for a discount on model costs when you use the **Auto** option. See [AUTOTITLE](/copilot/concepts/models/auto-model-selection).
> * Model availability varies by {% data variables.product.prodname_copilot_short %} plan. See [Supported AI models in {% data variables.product.prodname_copilot %}](/copilot/reference/ai-models/supported-models) for current plan availability and pricing.

### Recommended models by task

Use this table to find a suitable model quickly. The task recommendations below are examples, not an exhaustive list; see the supported models page for current availability.

| Model                                              | Task area             | Excels at (primary use case) | Further reading             |
|----------------------------------------------------|-----------------------|------------------------------|-----------------------------|
| {% for model in tables.copilot.model-comparison %} |
| {{ model.name }}{% if model.name == 'MAI-Code-1.1-Flash' %}[^mai-models]{% elsif model.name == 'Kimi K3' %}[^kimi-k3]{% endif %}                                   | {{ model.task_area }} | {{ model.excels_at }}        | {{ model.further_reading }} |
| {% endfor %}                                       |

## Task: General-purpose coding and writing

Use these models for common development tasks that benefit from a balance of quality, speed, and capability.

| Model                                                 | Why it's a good fit                                                                                  |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| {% data variables.copilot.copilot_gpt_56_terra %}     | Balanced choice for everyday interactive and agentic coding.                                        |
| {% data variables.copilot.copilot_claude_sonnet_55 %} | Efficient task completion with fewer steps, tokens, and tool calls.                                 |
| {% data variables.copilot.copilot_gpt_6_sol %}        | All-round development tasks that benefit from careful, multistep validation.                         |

### When to use these models

Use one of these models if you want to:

* Write or review functions, short files, or code diffs.
* Generate documentation, comments, or summaries.
* Explain errors or unexpected behavior.
* Work in a non-English programming environment.

### When to use a different model

If you're working on complex refactoring, architectural decisions, or multi-step logic, consider a model from [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For faster, simpler tasks like repetitive edits or one-off code suggestions, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).

## Task: Fast help with simple or repetitive tasks

These models are suitable for quick edits, utility functions, syntax help, and lightweight prototyping. Compare model pricing and plan availability before choosing a model.

### Recommended models

| Model                                                 | Why it's a good fit                                                                  |
|-------------------------------------------------------|--------------------------------------------------------------------------------------|
| {% data variables.copilot.copilot_gpt_6_luna %}       | Quick responses for smaller, faster tasks.                                          |
| {% data variables.copilot.copilot_claude_haiku_55 %} | Fast, reliable answers to lightweight coding questions.                             |
| {% data variables.copilot.copilot_gemini_38_flash %} | Fast answers for lightweight coding tasks.                                          |

### When to use these models

Use one of these models if you want to:

* Write or edit small functions or utility code.
* Ask quick syntax or language questions.
* Prototype ideas with minimal setup.
* Get fast feedback on simple prompts or edits.

### When to use a different model

If you’re working on complex refactoring, architectural decisions, or multi-step logic, see [Deep reasoning and debugging](#task-deep-reasoning-and-debugging).
For tasks that need stronger general-purpose reasoning or more structured output, see [General-purpose coding and writing](#task-general-purpose-coding-and-writing).

## Task: Deep reasoning and debugging

These models are suited to tasks that require step-by-step reasoning, complex decision-making, or high-context awareness, including multi-file analysis.

### Recommended models

| Model                                                 | Why it's a good fit                                                                                                         |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| {% data variables.copilot.copilot_gpt_61_sol %}       | Advanced, efficient reasoning for complex coding tasks.                                                                    |
| {% data variables.copilot.copilot_gpt_56_sol %}       | Complex reasoning over large codebases and long-running agentic work.                                                      |
| {% data variables.copilot.copilot_claude_opus_55 %}   | Efficient multistep tasks, error recovery, and collaboration.                                                              |
| {% data variables.copilot.copilot_gemini_4_argon %}   | Complex coding, agentic, and reasoning tasks; thorough work that tests edge cases.                                          |

For long-horizon autonomous coding and knowledge-work, also consider {% data variables.copilot.copilot_gpt_6_astra %} or {% data variables.copilot.copilot_claude_fable_51 %}.

### When to use these models

Use one of these models if you want to:

* Debug complex issues with context across multiple files.
* Refactor large or interconnected codebases.
* Plan features or architecture across layers.
* Weigh trade-offs between libraries, patterns, or workflows.
* Analyze logs, performance data, or system behavior.

### When to use a different model

For fast iteration or lightweight tasks, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).
For general development workflows or content generation, see [General-purpose coding and writing](#task-general-purpose-coding-and-writing).

## Task: Working with visuals (diagrams, screenshots)

Use a model that supports image input when asking questions about screenshots, diagrams, UI components, or other visual content. The current comparison data identifies MAI-Code-1.1-Flash as supporting image understanding; availability of image input can also depend on the Copilot experience you're using.

| Model                 | Why it's a good fit                                                |
|-----------------------|--------------------------------------------------------------------|
| MAI-Code-1.1-Flash[^mai-models] | Fast code completions and explanations, instruction following, tool use, and image understanding. |

### When to use these models

Use a model with image input if you want to:

* Ask questions about diagrams, screenshots, or UI components.
* Get feedback on visual drafts or workflows.
* Understand front-end behavior from visual context.

> [!TIP]
> If you're using a model in a context that doesn’t support image input (like a code editor), you won’t see visual reasoning benefits. You may be able to use an MCP server to get access to visual input indirectly. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).

### When to use a different model

If your task involves deep reasoning or large-scale refactoring, consider a model from [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For text-only tasks or simpler code edits, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).

## Model-specific considerations

Some models have behaviors, limitations, or safeguards that are useful to understand before you choose them for a task.

### {% data variables.copilot.copilot_kimi_k3 %}

{% data variables.copilot.copilot_kimi_k3 %} is designed for long-context, multi-step coding and agentic workflows. Fine-tuned model variants may be included as part of the {% data variables.copilot.copilot_kimi_k3 %} ({% data variables.product.github %}) offering on individual plans only. Fine-tuned variants are not included for {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plans. In pre-release testing, the model exhibited elevated risk on certain higher-risk prompts and was less consistent than some other models in refusing requests involving sensitive topics. These behaviors may reflect differences in the model's safety post-training and alignment. We have deployed additional safeguards in {% data variables.product.prodname_copilot %} to help mitigate the identified risks. As with any model, enterprises should evaluate model capabilities, limitations, and safeguards in light of their particular use cases and requirements.

## Next steps

[^mai-models]: MAI models are continuously improving models. Performance and behavior may evolve over time as new checkpoints are released.

[^kimi-k3]: For important information about {% data variables.copilot.copilot_kimi_k3 %} behavior and safeguards, see [Model-specific considerations](#kimi-k3).

If you're not sure which model to use, start with **Auto** so {% data variables.copilot.copilot_chat_short %} can select a model based on availability and task complexity. You can also choose a general-purpose model and switch when your task needs faster responses, deeper reasoning, or image input.

* For detailed model specs and pricing, see [AUTOTITLE](/copilot/reference/ai-models/supported-models).
* To switch between models, refer to [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/change-the-chat-model) or [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/change-the-completion-model).
* To learn how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).
