---
title: About the rubber duck agent
shortTitle: About rubber duck
allowTitleToDifferFromFilename: true
intro: 'The rubber duck agent is a built-in critic that gives {% data variables.product.prodname_copilot_short %} a constructive second opinion on its own plans, code, and tests—using a different AI model from the one driving your session.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Rubber duck is a built-in agent in {% data variables.copilot.copilot_cli %} that acts as a constructive critic. While working on a task, the main CLI agent for a session can pass its current plan, design, implementation, or tests over to the rubber duck agent for review. The rubber duck agent looks for blind spots, design flaws, and substantive issues, and reports back with concrete, actionable feedback. {% data variables.product.prodname_copilot_short %} then takes that critique into account before continuing.

The rubber duck agent is designed to review proposed changes, not to make file changes itself. The main agent for the session decides what to do with the feedback.

> [!NOTE]
> The rubber duck agent is currently only available if the main agent is using a Claude or GPT large language model.

## Why "rubber duck"?

The name comes from a long-standing technique in software engineering called **rubber ducking** in which you explain your code, or proposed solution, to an inanimate object—traditionally a rubber duck. The idea is that by articulating your thinking, you often uncover mistakes, misunderstandings, or logical flaws.

The rubber duck agent applies a similar idea to {% data variables.product.prodname_copilot_short %}. Before moving ahead with a non-trivial change, {% data variables.product.prodname_copilot_short %} can stop, articulate its current thinking, and have it scrutinized by an independent reviewer. Unlike a real rubber duck, this one talks back: it returns a structured critique that {% data variables.product.prodname_copilot_short %} can act on.

## Second opinion from another model

A key design feature of the rubber duck agent is that it deliberately runs on a **different AI model from the one driving your session**. {% data variables.copilot.copilot_cli %} picks a critic model that contrasts with the current session model. For example, if you have chosen to use a Claude model for your session, the rubber duck agent may use a GPT model as the critic. {% data variables.copilot.copilot_cli_short %} only uses the rubber duck agent if a suitable model is available to provide a useful critique.

The benefit of using a different model is that the critic is less likely to share the same blind spots, biases, or failure modes as the model that produced the work. You effectively get two independent perspectives on the same problem.

The appropriate critic model is selected automatically each time the rubber duck agent is invoked, based on your current session model. If you switch session models mid-session (for example, with the `/model` command), the next invocation of the rubber duck agent picks the appropriate critic for the new session model.

## What the rubber duck agent does

When the rubber duck agent is consulted, it:

1. **Reads the work in context.** It understands what the code, design, or proposal is trying to accomplish, how it integrates with the rest of the system, and what assumptions exist.
1. **Identifies real issues.** It looks for bugs, logic errors, security vulnerabilities, design flaws, anti-patterns, performance bottlenecks, and other problems that genuinely matter to the success of the task.
1. **Recommends specific fixes.** For each issue it finds, it states the issue, its impact, and a concrete suggested change.
1. **Categorizes its feedback** by severity:
   * **Blocking issues**—must be fixed for the work to succeed.
   * **Non-blocking issues**—should be fixed to improve quality, but won't prevent success.
   * **Suggestions**—lower-priority improvements that still have a real impact on the outcome.
1. **Only reports findings that matter.** If it finds no issues, it says so explicitly. The rubber duck agent is configured not to comment on style, formatting, naming conventions, grammar in comments, minor refactors, or best practices that don't prevent actual problems.

The rubber duck agent has read-only access to your codebase via the standard exploration tools. It cannot edit files or run commands that change your environment.

## When {% data variables.product.prodname_copilot_short %} consults the rubber duck agent

When the rubber duck agent is enabled, {% data variables.product.prodname_copilot_short %} is instructed to consult it at high-leverage moments rather than only when stuck. Typical situations include:

* **After planning a non-trivial change, but before implementing it.** This is the highest-leverage moment to catch design flaws, while course corrections are still cheap.
* **Mid-implementation,** to check for blind spots in a complex piece of work.
* **After writing tests,** to validate that test coverage is comprehensive and that the behavior actually satisfies your original request.
* **Reactively, when {% data variables.product.prodname_copilot_short %} hits repeated failures or unexpected results,** to get an independent analysis of the problem rather than retrying the same approach.

For small, well-understood changes {% data variables.product.prodname_copilot_short %} typically skips the rubber duck agent.

When {% data variables.product.prodname_copilot_short %} consults the rubber duck agent, it summarizes the resulting critique for you in the timeline output rather than repeating it verbatim—for example, "The critique pointed out a blind spot in my plan around X, so I updated my plan to address that."

## Manually invoking the rubber duck agent

Typically {% data variables.copilot.copilot_cli_short %} consults the rubber duck agent automatically. You don't need to do anything. The timeline output shows when the main agent is getting a rubber duck critique. However, sometimes the CLI will not use the rubber duck agent. For example, it may decide that the changes are not extensive enough to warrant a critique.

You can use a natural language prompt to explicitly ask {% data variables.product.prodname_copilot_short %} to get a second opinion. For example, after asking {% data variables.product.prodname_copilot_short %} to produce a plan of work, you could enter a prompt such as:

```copilot
Rubber duck your plan.
```

Or part way through a series of changes, you could prompt:

```copilot
Get a critique of the changes you've made so far.
```

## Benefits of using the rubber duck agent

* **Catches issues early.** Most non-trivial tasks that fail have problems that a critique could have caught at the planning stage. Getting feedback before code is written is preferable to fixing problems later in the process.

  > [!NOTE]
  > Consulting the rubber duck agent runs an additional reasoning pass on a separate model, so it adds some latency and involves additional model usage. The upside is that spending a little more time and resources up front can save you time and model usage overall by catching issues early and by reducing the number of failed attempts to complete a task.

* **Reduces single-model blind spots.** Because the agent uses a model from a different family, it brings a genuinely different perspective rather than re-running the same reasoning that produced the original work.
* **Improves quality of complex changes.** Architectural decisions, multi-file changes, and unfamiliar codebases all benefit from a second opinion before {% data variables.product.prodname_copilot_short %} commits to an approach.
* **Stays out of the way for simple tasks.** {% data variables.product.prodname_copilot_short %} only consults the rubber duck agent when the work is non-trivial, so it doesn't slow down quick edits and obvious fixes.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-custom-agents#built-in-agents)
