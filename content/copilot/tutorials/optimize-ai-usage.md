---
title: Optimizing your AI usage to maximize efficiency and reduce cost
shortTitle: Optimize AI usage
intro: 'Learn how to choose the right models, structure your prompts, and add guardrails so that {% data variables.product.prodname_copilot_short %} completes tasks more efficiently and uses fewer {% data variables.product.prodname_ai_credits_short %}.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Author and optimize with Copilot
---

## Introduction

The strategies outlined in this article show you how to improve {% data variables.product.prodname_copilot_short %} efficiency and, as a result, use fewer {% data variables.product.prodname_ai_credits_short %}.

## 1. Choose the right model for the right task

By selecting the right capability level for your task, configuring reasoning appropriately, and leveraging {% data variables.copilot.copilot_auto_model_selection_short %} and cheaper models for specific workloads, you can maintain quality while significantly reducing token consumption.

### Select the right model

Model choice is one of the fastest ways to improve cost efficiency, but it is often overlooked. A common pattern is to default to the most capable model for every task—but this often increases token usage without improving the outcome. In some execution-heavy scenarios, overusing reasoning models can reduce quality because the model may overthink the task or introduce unnecessary changes.

Choose the model based on the work involved:

* **Reasoning models**: Best for architecture decisions, complex debugging, system design, and tasks that require deeper analysis.
* **Mid-tier models**: Best when the plan is already clear and the agent needs to execute efficiently.
* **Lighter models**: Best for refactoring, formatting, documentation updates, and other routine, well-scoped changes.

Use as much capability as the task requires, and as little as necessary. Matching capability to task improves outcomes and directly controls costs at scale.

For a breakdown by model and task type, see [AUTOTITLE](/copilot/tutorials/compare-ai-models).

### Configure the reasoning level of the model

Some models also support configurable reasoning levels, which control how much the model reasons before it responds. A higher level can improve answers to complex problems, but it consumes more tokens, and therefore more credits, so you should use the regular level by default and raise it only for harder tasks. Configurable reasoning is available for {% data variables.product.prodname_vscode %} and {% data variables.copilot.copilot_cli_short %} for supported models.

See [AUTOTITLE](/copilot/reference/ai-models/supported-models#models-with-extended-capabilities).

### Use {% data variables.copilot.copilot_auto_model_selection %} as your default

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} chooses a capable model for you, based on the intent of your task.

A small router looks at your prompt and sends it to the model that can **handle it most efficiently**, reserving expensive reasoning models for complex problems. It also avoids models that burn through a token budget quickly.

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} also **protects your cache**. It only changes models at natural cache boundaries, when a new session starts or after you run `/compact`, never mid-task. To understand more about why this matters, see [4. Preserve the cache](#4-preserve-the-cache).

{% data variables.copilot.copilot_auto_model_selection_short_cap_a %} also routes around degraded or busy models, so you hit fewer rate limits and errors.

{% data reusables.copilot.auto-model-discount %}

For information on the feature and its availability, see [AUTOTITLE](/copilot/concepts/models/auto-model-selection#copilot-chat-in-ides).

### Use cheaper models for {% data variables.copilot.subagents_short %}

Run {% data variables.copilot.subagents_short %} on cheaper models. {% data variables.copilot.subagents_caps_short %} run in their own session and don't inherit the main agent's conversation history. Because their context is scoped to a single focused task, a lighter model is often sufficient—and assigning one doesn't affect the main agent's cache the way a mid-session model switch would.

## 2. Provide clear guidance in your prompts

Your prompt sets the direction for everything the agent does. When a prompt is vague, the agent has to infer intent, explore more context, and make judgment calls. That often leads to retries, scope drift, and unnecessary token usage.

Well-structured prompts have three qualities:

* **A clear task definition.** Instead of "fix this issue," explain what the issue is, where it occurs, and what the expected outcome looks like.
* **Relevant context provided upfront.** If you already know which files, services, logs, errors, or inputs matter, include them. This helps the agent avoid unnecessary exploration.
* **A clear stopping condition.** Tell the agent what "done" looks like. Without a stopping point, agents can continue beyond the goal by adding extra commits, refactoring unrelated code, or expanding scope.

This added guidance doesn't meaningfully increase token usage, but it can significantly reduce the number of agent runs needed to reach the right outcome.

For prompt engineering best practices, see [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering).

## 3. Keep your context lean

{% data variables.product.prodname_copilot_short %} sends the context it has access to as input tokens, and that context adds up: open editor tabs, attached files, and the full back-and-forth of a long conversation all count as context.

To keep context under control, consider doing the following:

### Start a new conversation when you switch problems

A long thread carries its entire history into every new request. When you move on to an unrelated task, start a new conversation. For example:

* In {% data variables.copilot.copilot_cli_short %} use `/new` (or `/clear`)
* In {% data variables.copilot.copilot_chat_short %}, start a new chat session.

### Compact long {% data variables.copilot.copilot_cli_short %} sessions that you want to continue

When you need the thread to keep going but it has grown large, run `/compact` in {% data variables.copilot.copilot_cli_short %} to summarize the history and shrink the context window, optionally focusing the summary (for example, `/compact focus on the auth module`).

In addition, you can use `/context` to check current usage at any time.

See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/context-management).

### Give {% data variables.product.prodname_copilot_short %} a map of your project

A well-maintained custom instructions file, such as an `AGENTS.md` or `.github/copilot-instructions.md` file, gives agents a structural overview of your repository so they don't have to read large numbers of files just to orient themselves. See [AUTOTITLE](/copilot/reference/custom-instructions-support).

### Bring in only the tools you need

Large tool sets (for example, a full MCP server's worth of tools) add to the context on every request. Where it fits your workflow, enable only the toolsets relevant to the task.

See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp-in-your-ide/configure-toolsets).

## 4. Preserve the cache

Caching lets an AI model store portions of a conversation's context so they don't need to be reprocessed on every request. In agentic coding, where the same large context—system prompt, file contents, tool definitions—is sent repeatedly across many turns, caching has an impact: the cached portion from the previous response is reused rather than reprocessed, and cached tokens are typically billed at 10% of the normal input price. See [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).

However, the following actions invalidate the cache, causing the full context to be re-sent and billed as fresh input tokens:

* **Switching models mid-session**. A different model can't reuse another model's cache, so the next request rebuilds it from scratch. Pick a model (or use {% data variables.copilot.copilot_auto_model_selection %}) and stick with it for the session.
* **Coming back to an old session**. Caches expire after a period of inactivity (24 hours for OpenAI models and 1 hour for most others). If you've been away a while, start a new session, or run `/compact` (in {% data variables.copilot.copilot_cli_short %}) so what gets rebuilt is a short summary rather than the full history.
* **Changing reasoning mid-session**. Changing the reasoning effort level, context size, or the set of enabled tools and MCP servers during a session invalidates the cache. Configure these settings before you start and leave them unchanged for the session.

## 5. Research, plan, then implement

One of the biggest shifts in working effectively with agents is moving away from doing everything in a single session. When research, planning, and implementation all happen together, context grows quickly and irrelevant information accumulates.

Break work into clear phases:

* **Research:** Use the agent to explore the codebase, identify relevant files, and understand dependencies.
* **Plan:** Create a detailed, structured plan or specification before making changes. This is where reasoning models are most valuable—always plan with a strong reasoning model, then implement the work with a cheaper model.
   * In {% data variables.copilot.copilot_cli_short %}, use `/plan`.
   * In {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}, select "Plan" from the agent dropdown, or type `plan` in the context window.
* **Implement:** Execute against the plan using focused context and a model suited for execution.

Starting a new session between phases prevents you from carrying unnecessary context forward, which can increase token usage and reduce clarity for the agent. Each phase should operate with only what it needs. For guidance on scoping sessions effectively, see [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results).

## 6. Utilize learnings to be more efficient at every turn

### Use `/chronicle` to generate insights

In {% data variables.copilot.copilot_cli_short %}, `/chronicle` can generate useful insights from your session history.

* Use `/chronicle tips` to analyze your recent session history and surface opportunities to use {% data variables.product.prodname_copilot_short %} more efficiently.
* Use `/chronicle cost-tips` to understand your token usage patterns and get insights into how to reduce cost.

See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/chronicle#the-chronicle-slash-command).

### Feed insights into a `copilot-instructions.md` file

A `copilot-instructions.md` file at the repository level is the most direct way to encode guidance that's specific to your repository. Personal and organization-level instructions can layer on top for broader consistency.

When `/chronicle` surfaces a recurring pattern—a tool being over-used, a prompt that keeps being misread—encode that observation directly in your `copilot-instructions.md` file. This turns a one-time insight into standing guidance that applies to every future session, without you having to repeat it.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

### Keep the `copilot-instructions.md` file specific and grounded

Persistent instructions improve consistency across agent interactions, but their value depends entirely on how they are written. The best instructions are short, specific, and grounded in real observed agent behavior—not generic best practices that sound good but don't apply to your system.

**What to include:**

* Required frameworks, libraries, or design patterns
* Known pitfalls the agent tends to repeat
* Output expectations such as "be concise" or "only return code"
* Team-specific conventions the agent must follow
* Build, test, and lint commands

**What to avoid:**

* Long, generic documentation
* AI-generated guidance that doesn't reflect your actual system
* One-off preferences or rarely used details
* Overloaded instructions that make the context noisy

Keep instructions updated as your codebase, architecture, standards, and workflows evolve. Because these instructions are included in the agent's context on every run, even small improvements can reduce repeated errors and lower wasted token usage over time.

## 7. Add deterministic guardrails

Agents are non-deterministic and won't be correct every time, especially in multi-step workflows. Without guardrails, small errors can compound quickly: agents build on incorrect outputs, drift further from the goal, and make debugging more expensive and time-consuming.

Deterministic controls introduce clear pass/fail signals:

* **Unit tests** verify the agent's changes produced the expected behavior.
* **Linters** enforce structure and consistency, preventing formatting issues, style drift, and avoidable cleanup work.
* **Security scans** catch risky patterns early, before they are harder to unwind.

Together, these controls create a tight feedback loop: the agent makes a change, a test, rule, or scan evaluates it, and the agent adjusts before moving forward. This prevents long chains of incorrect changes, which are one of the biggest drivers of token waste.

Teams that invest in these guardrails see fewer retries, faster task completion, and more predictable agent behavior. They often reduce total token consumption even if individual steps use slightly more tokens upfront.

## Next steps

Monitor and manage your spending to get the most out of your {% data variables.product.prodname_ai_credits_short %}:

* **Use your dashboard and budget controls**. The "AI usage" page, under https://github.com/settings/billing, breaks down consumption across every feature and model, so you can see where your credits are actually going and adjust accordingly. See [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-ai-usage).
* **Upgrade for a larger allowance**. If you regularly approach your monthly limit, a higher plan may be more economical than paying for additional usage, as higher plans have more {% data variables.product.prodname_ai_credit_singular %} allowance. See [AUTOTITLE](/copilot/concepts/billing/individual-plans#github-ai-credits-allowance-by-plan) and [AUTOTITLE](/copilot/how-tos/manage-your-account/view-and-change-your-copilot-plan).