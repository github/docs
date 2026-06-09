---
title: Improving agent quality to optimize AI usage
shortTitle: Optimize AI usage
intro: 'Learn strategies for building higher-quality agents that complete tasks in fewer attempts and, as a result, use fewer {% data variables.product.prodname_ai_credits_short %}.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Author and optimize with Copilot
---

## Introduction

When agents are well-scoped, well-instructed, and operating within clear guardrails, token efficiency improves as a natural outcome. High-quality agents complete tasks in fewer attempts, follow clearer workflows with less rework, and avoid expensive debugging and correction cycles.

This article outlines five strategies for improving both agent quality and {% data variables.product.prodname_ai_credits_short %} efficiency:

* [Choose the right model for the right task](#1-choose-the-right-model-for-the-right-task)
* [Provide clear guidance in your prompts](#2-provide-clear-guidance-in-your-prompts)
* [Research, plan, then implement](#3-research-plan-then-implement)
* [Add deterministic guardrails](#4-add-deterministic-guardrails)
* [Maintain a concise `copilot-instructions.md`](#5-maintain-a-concise-copilot-instructionsmd)

## 1. Choose the right model for the right task

Model choice is one of the fastest ways to improve both agent quality and cost efficiency, but it is often overlooked. A common pattern is to default to the most capable model for every task—but this often increases token usage without improving the outcome. In some execution-heavy scenarios, overusing reasoning models can reduce quality because the model may overthink the task or introduce unnecessary changes.

Choose the model based on the work at hand. {% data variables.copilot.copilot_auto_model_selection %} can also handle this automatically based on real-time system health and model performance.

* **Reasoning models**: Best for architecture decisions, complex debugging, system design, and tasks that require deeper analysis.
* **Mid-tier models**: Best when the plan is already clear and the agent needs to execute efficiently.
* **Lighter models**: Best for refactoring, formatting, documentation updates, and other routine, well-scoped changes.

Use as much capability as the task requires, and as little as necessary. Matching capability to task improves outcomes and directly controls costs at scale.

For a breakdown by model and task type, see [AUTOTITLE](/copilot/tutorials/compare-ai-models).

## 2. Provide clear guidance in your prompts

Your prompt sets the direction for everything the agent does. When a prompt is vague, the agent has to infer intent, explore more context, and make judgment calls. That often leads to retries, scope drift, and unnecessary token usage.

Well-structured prompts have three qualities:

* **A clear task definition.** Instead of "fix this issue," explain what the issue is, where it occurs, and what the expected outcome looks like.
* **Relevant context provided upfront.** If you already know which files, services, logs, errors, or inputs matter, include them. This helps the agent avoid unnecessary exploration.
* **A clear stopping condition.** Tell the agent what "done" looks like. Without a stopping point, agents can continue beyond the goal by adding extra commits, refactoring unrelated code, or expanding scope.

This added guidance doesn't meaningfully increase token usage, but it can significantly reduce the number of agent runs needed to reach the right outcome.

For prompt engineering best practices, see [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering).

## 3. Research, plan, then implement

One of the biggest shifts in working effectively with agents is moving away from doing everything in a single session. When research, planning, and implementation all happen together, context grows quickly, irrelevant information accumulates, and agent quality degrades over time.

Break work into clear phases:

* **Research:** Use the agent to explore the codebase, identify relevant files, and understand dependencies.
* **Plan:** Create a detailed, structured plan or specification before making changes. This is where reasoning models are most valuable.
* **Implement:** Execute against the plan using focused context and a model suited for execution.

Starting a new session between phases prevents carrying unnecessary context forward. A single session completed within a reasonable scope takes advantage of caching. Carrying forward context from earlier phases can increase token usage, introduce bias, and reduce clarity for the agent. Each phase should operate with only what it needs. For guidance on scoping sessions effectively, see [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results).

## 4. Add deterministic guardrails

Agents are non-deterministic and won't be correct every time, especially in multi-step workflows. Without guardrails, small errors can compound quickly: agents build on incorrect outputs, drift further from the goal, and make debugging more expensive and time-consuming.

Deterministic controls introduce clear pass/fail signals:

* **Unit tests** verify the agent's changes produced the expected behavior.
* **Linters** enforce structure and consistency, preventing formatting issues, style drift, and avoidable cleanup work.
* **Security scans** catch risky patterns early, before they are harder to unwind.

Together, these controls create a tight feedback loop: the agent makes a change, a test, rule, or scan evaluates it, and the agent adjusts before moving forward. This prevents long chains of incorrect changes, which are one of the biggest drivers of token waste.

Teams that invest in these guardrails see fewer retries, faster task completion, and more predictable agent behavior. They often reduce total token consumption even if individual steps use slightly more tokens upfront.

## 5. Maintain a concise `copilot-instructions.md`

Persistent instructions improve consistency across agent interactions, but their value depends entirely on how they are written. A `copilot-instructions.md` file at the repository level is the most direct way to encode this guidance. Personal and organization-level instructions can layer on top for broader consistency.

The best instructions are short, specific, and grounded in real observed agent behavior—not generic best practices that sound good but don't apply to your system.

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

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
