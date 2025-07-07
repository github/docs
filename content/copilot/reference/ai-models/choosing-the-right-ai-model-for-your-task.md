---
title: Choosing the right AI model for your task
shortTitle: Choose the right AI model
intro: 'Compare available AI models in {% data variables.copilot.copilot_chat_short %} and choose the best model for your task.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task
---

## Comparison of AI models for {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} supports multiple AI models with different capabilities. The model you choose affects the quality and relevance of responses by {% data variables.copilot.copilot_chat_short %} and {% data variables.product.prodname_copilot_short %} code completion. Some models offer lower latency, while others offer fewer hallucinations or better performance on specific tasks. This guide helps you pick the best model based on your task, not just model names.

> [!NOTE] Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

### Recommended models by task

Use this table to find a suitable model quickly, see more detail in the sections below.

| Model | Task area | Excels at (primary use case) | Additional capabilities |
|-------|-----------|-------------------------------|--------------------------|
| {% data variables.copilot.copilot_gpt_41 %} | General-purpose coding and writing | Fast, accurate code completions and explanations | Agent mode, visual |
| {% data variables.copilot.copilot_gpt_4o %} | General-purpose coding and writing | Fast completions and visual input understanding | Agent mode, visual |
| {% data variables.copilot.copilot_o3 %} | Deep reasoning and debugging | Multi-step problem solving and architecture-level code analysis | Reasoning |
| {% data variables.copilot.copilot_o3_mini %} | Fast help with simple or repetitive tasks | Quick responses for code snippets, explanations, and prototyping | Lower latency |
| {% data variables.copilot.copilot_o4_mini %} | Fast help with simple or repetitive tasks | Fast, reliable answers to lightweight coding questions | Lower latency |
| {% data variables.copilot.copilot_claude_opus %} | Deep reasoning and debugging | Complex problem-solving challenges, sophisticated reasoning | Reasoning, vision |
| {% data variables.copilot.copilot_claude_sonnet_35 %} | Fast help with simple or repetitive tasks | Quick responses for code, syntax, and documentation | Agent mode |
| {% data variables.copilot.copilot_claude_sonnet_37 %} | Deep reasoning and debugging | Structured reasoning across large, complex codebases | Agent mode |
| {% data variables.copilot.copilot_claude_sonnet_40 %} | Deep reasoning and debugging | Performance and practicality, perfectly balanced for coding workflows | Agent mode, vision |
| {% data variables.copilot.copilot_gemini_25_pro %} | Deep reasoning and debugging | Complex code generation, debugging, and research workflows | Reasoning |
| {% data variables.copilot.copilot_gemini_flash %} | Working with visuals (diagrams, screenshots) | Real-time responses and visual reasoning for UI and diagram-based tasks | Visual |

## Task: General-purpose coding and writing

Use these models for common development tasks that require a balance of quality, speed, and cost efficiency. These models are a good default when you don't have specific requirements.

| Model | Why it's a good fit |
|-------|---------------------|
| {% data variables.copilot.copilot_gpt_41 %} | Reliable default for most coding and writing tasks. Fast, accurate, and works well across languages and frameworks. |
| {% data variables.copilot.copilot_gpt_4o %} | Delivers GPT-4–level performance with lower latency. |
| {% data variables.copilot.copilot_claude_sonnet_37 %} | Produces clear, structured output. Follows formatting instructions and maintains consistent style. |
| {% data variables.copilot.copilot_gemini_flash %} | Fast and cost-effective. Well suited for quick questions, short code snippets, and lightweight writing tasks. |
| {% data variables.copilot.copilot_o4_mini %} | Optimized for speed and cost efficiency. Ideal for real-time suggestions with low usage overhead. |

### When to use these models

Use one of these models if you want to:

* Write or review functions, short files, or code diffs.
* Generate documentation, comments, or summaries.
* Explain errors or unexpected behavior quickly.
* Work in a non-English programming environment.

### When to use a different model

If you're working on complex refactoring, architectural decisions, or multi-step logic, consider a model from [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For faster, simpler tasks like repetitive edits or one-off code suggestions, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).

## Task: Fast help with simple or repetitive tasks

These models are optimized for speed and responsiveness. They’re ideal for quick edits, utility functions, syntax help, and lightweight prototyping. You’ll get fast answers without waiting for unnecessary depth or long reasoning chains.

### Recommended models

| Model | Why it's a good fit |
|-------|---------------------|
| {% data variables.copilot.copilot_o4_mini %} | A quick and cost-effective model for repetitive or simple coding tasks. Offers clear, concise suggestions. |
| {% data variables.copilot.copilot_o3_mini %} | Provides low-latency, accurate responses. Great for real-time suggestions and code walkthroughs. |
| {% data variables.copilot.copilot_claude_sonnet_35 %} | Balances fast responses with quality output. Ideal for small tasks and lightweight code explanations. |
| {% data variables.copilot.copilot_gemini_flash %} | Extremely low latency and multimodal support (where available). Great for fast, interactive feedback. |

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

These models are designed for tasks that require step-by-step reasoning, complex decision-making, or high-context awareness. They work well when you need structured analysis, thoughtful code generation, or multi-file understanding.

### Recommended models

| Model | Why it's a good fit |
|-------|---------------------|
| {% data variables.copilot.copilot_o3 %} | Strong at algorithm design, system debugging, and architecture decisions. Balances performance and reasoning. |
| {% data variables.copilot.copilot_claude_sonnet_37 %} | Provides hybrid reasoning that adapts to both fast tasks and deeper thinking. |
| {% data variables.copilot.copilot_claude_sonnet_40 %} | Improves on 3.7 with more reliable completions and smarter reasoning under pressure. |
| {% data variables.copilot.copilot_claude_opus %} | Anthropic’s most powerful model. Strong at strategy, debugging, and multi-layered logic. |
| {% data variables.copilot.copilot_gemini_25_pro %} | Advanced reasoning across long contexts and scientific or technical analysis. |

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

Use these models when you want to ask questions about screenshots, diagrams, UI components, or other visual input. These models support multimodal input and are well suited for front-end work or visual debugging.

| Model | Why it's a good fit |
|-------|---------------------|
| {% data variables.copilot.copilot_gpt_4o %} | Supports image input. Great for interpreting screenshots or debugging UI issues with visual context. |
| {% data variables.copilot.copilot_gemini_flash %} | Fast, multimodal model optimized for real-time interaction. Useful for feedback on diagrams, visual prototypes, and UI layouts. |

### When to use these models

Use one of these models if you want to:

* Ask questions about diagrams, screenshots, or UI components.
* Get feedback on visual drafts or workflows.
* Understand front-end behavior from visual context.

> [!TIP]
> If you're using a model in a context that doesn’t support image input (like a code editor), you won’t see visual reasoning benefits. You may be able to use an MCP server to get access to visual input indirectly. See [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp).

### When to use a different model

If your task involves deep reasoning or large-scale refactoring, consider a model from [Deep reasoning and debugging](#task-deep-reasoning-and-debugging). For text-only tasks or simpler code edits, see [Fast help with simple or repetitive tasks](#task-fast-help-with-simple-or-repetitive-tasks).

## Next steps

Choosing the right model helps you get the most out of {% data variables.product.prodname_copilot_short %}. If you're not sure which model to use, start with a general-purpose option like {% data variables.copilot.copilot_gpt_41 %} or {% data variables.copilot.copilot_gpt_4o %}, then adjust based on your needs.

* For detailed model specs and pricing, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot).
* For more examples of how to use different models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks).
* To switch between models, refer to [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat) or [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).
* To learn how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/how-copilot-serves-ai-models).
