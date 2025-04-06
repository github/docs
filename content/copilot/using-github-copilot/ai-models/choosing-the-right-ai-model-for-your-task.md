---
title: Choosing the right AI model for your task
shortTitle: 'Choose the right AI model'
intro: 'Compare available AI models in {% data variables.product.prodname_copilot_chat_short %} and choose the best model for your task.'
versions:
  feature: copilot
topics:
  - Copilot
---

## Comparison of AI models for {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} supports multiple AI models with different capabilities. The model you choose affects the quality and relevance of responses in {% data variables.product.prodname_copilot_chat_short %} and code completions. Some models offer lower latency, while others offer fewer hallucinations or better performance on specific tasks.

This article helps you compare the available models, understand the strengths of each model, and choose the model that best fits your task. For guidance across different models using real-world tasks, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks).

The best model depends on your use case:

* For **balance between cost and performance**, try GPT-4o or {% data variables.copilot.copilot_claude_sonnet_35 %}.
* For **fast, low-cost support for basic tasks**, try o3-mini or {% data variables.copilot.copilot_claude_sonnet_35 %}.
* For **deep reasoning or complex coding challenges**, try o1, GPT-4.5, or {% data variables.copilot.copilot_claude_sonnet_37 %}.
* For **multimodal inputs and real-time performance**, try {% data variables.copilot.copilot_gemini_flash %} or GPT-4o.

You can click a model name in the list below to jump to a detailed overview of its strengths and use cases.
* [GPT-4o](#gpt-4o)
* [GPT-4.5](#gpt-45)
* [o1](#o1)
* [o3-mini](#o3-mini)
* [{% data variables.copilot.copilot_claude_sonnet_35 %}](#claude-35-sonnet)
* [{% data variables.copilot.copilot_claude_sonnet_37 %}](#claude-37-sonnet)
* [{% data variables.copilot.copilot_gemini_flash %}](#gemini-20-flash)

> [!NOTE] Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

## GPT-4o

OpenAI GPT-4o is a multimodal model that supports text and images. It responds in real time and works well for lightweight development tasks and conversational prompts in {% data variables.product.prodname_copilot_chat_short %}.

Compared to previous models, GPT-4o improves performance in multilingual contexts and demonstrates stronger capabilities when interpreting visual content. It delivers GPT-4 Turbo–level performance with lower latency and cost, making it a good default choice for many common developer tasks.

For more information about GPT-4o, see [OpenAI's documentation](https://platform.openai.com/docs/models/gpt-4o).

### Use cases

{% data reusables.copilot.model-use-cases.gpt-4o %}

### Strengths

The following table summarizes the strengths of GPT-4o:

{% rowheaders %}

| Task                              | Description                                                         | Why GPT-4o is a good fit               |
|-----------------------------------|---------------------------------------------------------------------|----------------------------------------|
| Code explanation                  | Understand what a block of code does or walk through logic.         | Fast and accurate explanations.        |
| Code commenting and documentation | Generate or refine comments and documentation.                      | Writes clear, concise explanations.    |
| Bug investigation                 | Get a quick explanation or suggestion for an error.                 | Provides fast diagnostic insight.      |
| Code snippet generation           | Generate small, reusable pieces of code.                            | Delivers high-quality results quickly. |
| Multilingual prompts              | Work with non-English prompts or identifiers.                       | Improved multilingual comprehension.   |
| Image-based questions             | Ask about a diagram or screenshot (where image input is supported). | Supports visual reasoning.             |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                               | Description                                                  | Why another model may be better                            |
|------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------|
| Multi-step reasoning or algorithms | Design complex logic or break down multi-step problems.      | GPT-4.5 or {% data variables.copilot.copilot_claude_sonnet_37 %} provide better step-by-step thinking. |
| Complex refactoring                | Refactor large codebases or update multiple interdependent files. | GPT-4.5 handles context and code dependencies more robustly.|
| System review or architecture      | Analyze structure, patterns, or architectural decisions in depth. | {% data variables.copilot.copilot_claude_sonnet_37 %} or GPT-4.5 offer deeper analysis.              |

{% endrowheaders %}

## GPT-4.5

OpenAI GPT-4.5 improves reasoning, reliability, and contextual understanding. It works well for development tasks that involve complex logic, high-quality code generation, or interpreting nuanced intent.

Compared to GPT-4o, GPT-4.5 produces more consistent results for multi-step reasoning, long-form content, and complex problem-solving. It may have slightly higher latency and costs than GPT-4o and other smaller models.

For more information about GPT-4.5, see [OpenAI's documentation](https://platform.openai.com/docs/models/gpt-4.5-preview).

### Use cases

{% data reusables.copilot.model-use-cases.gpt-45 %}

### Strengths

The following table summarizes the strengths of GPT-4.5:

{% rowheaders %}

| Task                    | Description                                                  | Why GPT-4.5 is a good fit                                       |
|-------------------------|--------------------------------------------------------------|-----------------------------------------------------------------|
| Code documentation      | Draft README files,  or technical explanations.              | Generates clear, context-rich writing with minimal editing.     |
| Complex code generation | Write full functions, classes, or multi-file logic.          | Provides better structure, consistency, and fewer logic errors. |
| Bug investigation       | Trace errors or walk through multi-step issues.              | Maintains state and offers reliable reasoning across steps.     |
| Decision-making prompts | Weigh pros and cons of libraries, patterns, or architecture. | Provides balanced, contextualized reasoning.                    |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                     | Description                                       | Why another model may be better                                    |
|--------------------------|---------------------------------------------------|--------------------------------------------------------------------|
| High-speed iteration     | Rapid back-and-forth prompts or code tweaks.      | GPT-4o responds faster with similar quality for lightweight tasks. |
| Cost-sensitive scenarios | Tasks where performance-to-cost ratio matters.    | GPT-4o or o3-mini are more cost-effective.                         |

{% endrowheaders %}

## o1

OpenAI o1 is an advanced reasoning model that supports complex, multi-step tasks and deep logical reasoning to find the best solution.

For more information about o1, see [OpenAI's documentation](https://platform.openai.com/docs/models/o1).

### Use cases

{% data reusables.copilot.model-use-cases.o1 %}

### Strengths

The following table summarizes the strengths of o1:

{% rowheaders %}

| Task                       | Description                                                             | Why o1 is a good fit                                               |
|----------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------|
| Code optimization          | Analyze and improve performance-critical or algorithmic code.           | Excels at deep reasoning and identifying non-obvious improvements. |
| Debugging complex systems  | Isolate and fix performance bottlenecks or multi-file issues.           | Provides step-by-step analysis and high reasoning accuracy.        |
| Structured code generation | Generate reusable functions, typed outputs, or structured  responses.   | Supports function calling and structured output natively.          |
| Analytical summarization   | Interpret logs, benchmark results, or code behavior.                    | Translates raw data into clear, actionable insights.               |
| Refactoring code           | Improve maintainability and modularity of existing systems.             | Applies deliberate and context-aware suggestions.                  |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                      | Description                                        | Why another model may be better                                                                           |
|---------------------------|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Quick iterations          | Rapid back-and-forth prompts or code tweaks.       | GPT-4o or {% data variables.copilot.copilot_gemini_flash %} responds faster for lightweight tasks.        |
| Cost-sensitive scenarios  | Tasks where performance-to-cost ratio matters.     | o3-mini or {% data variables.copilot.copilot_gemini_flash %} are more cost-effective for basic use cases. |

{% endrowheaders %}

## o3-mini

OpenAI o3-mini is a fast, cost-effective reasoning model designed to deliver coding performance while maintaining lower latency and resource usage. o3-mini outperforms o1 on coding benchmarks with response times that are comparable to o1-mini. Copilot is configured to use OpenAI's "medium" reasoning effort.

For more information about o1, see [OpenAI's documentation](https://platform.openai.com/docs/models/o3-mini).

### Use cases

{% data reusables.copilot.model-use-cases.o3-mini %}

### Strengths

The following table summarizes the strengths of o3-mini:

{% rowheaders %}

| Task                       | Description                                                 | Why o3-mini is a good fit                                    |
|----------------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| Real-time code suggestions | Write or extend basic functions and utilities.              | Responds quickly with accurate, concise suggestions.         |
| Code explanation           | Understand what a block of code does or walk through logic. | Fast, accurate summaries with clear language.                |
| Learn new concepts         | Ask questions about programming concepts or patterns.       | Offers helpful, accessible explanations with quick feedback. |
| Quick prototyping          | Try out small ideas or test simple code logic quickly.      | Fast, low-latency responses for iterative feedback.          |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                        | Description                                                | Why another model may be better                            |
|-----------------------------|------------------------------------------------------------|------------------------------------------------------------|
| Deep reasoning tasks        | Multi-step analysis or architectural decisions.            | GPT-4.5 or o1 provide more structured, thorough reasoning. |
| Creative or long-form tasks | Writing docs, refactoring across large codebases.          | o3-mini is less expressive and structured than larger models. |
| Complex code generation     | Write full functions, classes, or multi-file logic.        | Larger models handle complexity and structure more reliably. |

{% endrowheaders %}

## {% data variables.copilot.copilot_claude_sonnet_35 %}

{% data variables.copilot.copilot_claude_sonnet_35 %} is a fast and cost-efficient model designed for everyday developer tasks. While it doesn't have the deeper reasoning capabilities of {% data variables.copilot.copilot_claude_sonnet_37 %}, it still performs well on coding tasks that require quick responses, clear summaries, and basic logic.

For more information about {% data variables.copilot.copilot_claude_sonnet_35 %}, see [Anthropic's documentation](https://www.anthropic.com/news/claude-3-5-sonnet).
For more information on using Claude in {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).

### Use cases

{% data reusables.copilot.model-use-cases.claude-35-sonnet %}

### Strengths

The following table summarizes the strengths of {% data variables.copilot.copilot_claude_sonnet_35 %}:

{% rowheaders %}

| Task                              | Description                                                   | Why {% data variables.copilot.copilot_claude_sonnet_35 %} is a good fit             |
|-----------------------------------|---------------------------------------------------------------|------------------------------------------|
| Code explanation                  | Understand what a block of code does or walk through logic.   | Fast and accurate explanations.          |
| Code commenting and documentation | Generate or refine comments and documentation.                | Writes clear, concise explanations.      |
| Quick language questions          | Ask syntax, idiom, or feature-specific questions.             | Offers fast and accurate explanations.   |
| Code snippet generation           | Generate small, reusable pieces of code.                      | Delivers high-quality results quickly.   |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                               | Description                                                         | Why another model may be better                                                                                      |
|------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Multi-step reasoning or algorithms | Design complex logic or break down multi-step problems.             | GPT-4.5 or {% data variables.copilot.copilot_claude_sonnet_37 %} provide better step-by-step thinking.               |
| Complex refactoring                | Refactor large codebases or update multiple interdependent files.   | GPT-4.5 or {% data variables.copilot.copilot_claude_sonnet_37 %} handle context and code dependencies more robustly. |
| System review or architecture      | Analyze structure, patterns, or architectural decisions in depth.   | {% data variables.copilot.copilot_claude_sonnet_37 %} or GPT-4.5 offer deeper analysis.                              |

{% endrowheaders %}

## {% data variables.copilot.copilot_claude_sonnet_37 %}

{% data variables.copilot.copilot_claude_sonnet_37 %} is Anthropic's most advanced model to date. {% data variables.copilot.copilot_claude_sonnet_37 %} is a powerful model that excels in development tasks that require structured reasoning across large or complex codebases. Its hybrid approach to reasoning responds quickly when needed, while still supporting slower step-by-step analysis for deeper tasks.

For more information about {% data variables.copilot.copilot_claude_sonnet_37 %}, see [Anthropic's documentation](https://www.anthropic.com/claude/sonn).
For more information on using Claude in {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).

### Use cases

{% data reusables.copilot.model-use-cases.claude-37-sonnet %}

### Strengths

The following table summarizes the strengths of {% data variables.copilot.copilot_claude_sonnet_37 %}:

{% rowheaders %}

| Task                   | Description                                                                 | Why {% data variables.copilot.copilot_claude_sonnet_37 %} is a good fit                                       |
|------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------|
| Multi-file refactoring | Improve structure and maintainability across large codebases.               | Handles multi-step logic and retains cross-file context.             |
| Architectural planning  | Support mixed task complexity, from small queries to strategic work.        | Fine-grained “thinking” controls adapt to the scope of each task.    |
| Feature development    | Build and implement functionality across frontend, backend, and API layers. | Supports tasks with structured reasoning and reliable completions.         |
| Algorithm design       | Design, test, and optimize complex algorithms.                              | Balances rapid prototyping with deep analysis when needed.           |
| Analytical insights    | Combine high-level summaries with deep dives into code behavior.            | Hybrid reasoning lets the model shift based on user needs.           |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                     | Description                                                    | Why another model may be better                                                                                                             |
|--------------------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Quick iterations         | Rapid back-and-forth prompts or code tweaks.                   | GPT-4o responds faster for lightweight tasks.                                                                                               |
| Cost-sensitive scenarios | Tasks where performance-to-cost ratio matters.                 | o3-mini or {% data variables.copilot.copilot_gemini_flash %} are more cost-effective for basic use cases. {% data variables.copilot.copilot_claude_sonnet_35 %} is cheaper, simpler, and still advanced enough for similar tasks. |
| Lightweight prototyping  | Rapid back-and-forth code iterations with minimal context.     | {% data variables.copilot.copilot_claude_sonnet_37 %} may over-engineer or apply unnecessary complexity.                                                                               |

{% endrowheaders %}

## {% data variables.copilot.copilot_gemini_flash %}

{% data variables.copilot.copilot_gemini_flash %} is Google’s high-speed, multimodal model optimized for real-time, interactive applications that benefit from visual input and agentic reasoning. In {% data variables.product.prodname_copilot_chat_short %}, {% data variables.copilot.copilot_gemini_flash %} enables fast responses and cross-modal understanding.

For more information about {% data variables.copilot.copilot_gemini_flash %}, see [Google's documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/gemini-v2).
For more information on using Gemini in {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot).

### Use cases

{% data reusables.copilot.model-use-cases.gemini-20-flash %}

### Strengths

The following table summarizes the strengths of {% data variables.copilot.copilot_gemini_flash %}:

{% rowheaders %}

| Task                    | Description                                                         | Why {% data variables.copilot.copilot_gemini_flash %} is a good fit                     |
|-------------------------|---------------------------------------------------------------------|--------------------------------------------------------|
| Code snippet generation | Generate small, reusable pieces of code.                            | Delivers high-quality results quickly.                 |
| Design feedback loops   | Get suggestions from sketches, diagrams, or visual drafts           | Supports visual reasoning.                             |
| Image-based analysis    | Ask about a diagram or screenshot (where image input is supported). | Supports visual reasoning.                             |
| Front-end prototyping   | Build and test UIs or workflows involving visual elements           | Supports multimodal reasoning and lightweight context. |
| Bug investigation       | Get a quick explanation or suggestion for an error.                 | Provides fast diagnostic insight.                      |

{% endrowheaders %}

### Alternative options

The following table summarizes when an alternative model may be a better choice:

{% rowheaders %}

| Task                               | Description                                                  | Why another model may be better                            |
|------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------|
| Multi-step reasoning or algorithms | Design complex logic or break down multi-step problems.      | GPT-4.5 or {% data variables.copilot.copilot_claude_sonnet_37 %} provide better step-by-step thinking. |
| Complex refactoring                | Refactor large codebases or update multiple interdependent files. | GPT-4.5 handles context and code dependencies more robustly.|

{% endrowheaders %}

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/ai-models/examples-for-ai-model-comparison)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion)
