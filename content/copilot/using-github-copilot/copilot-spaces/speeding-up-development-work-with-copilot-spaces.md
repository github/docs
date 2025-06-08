---
title: Speeding up development work with Copilot Spaces
shortTitle: Speed up development work
intro: 'Learn how to use {% data variables.copilot.copilot_spaces %} to help you with development work.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.copilot.copilot_spaces_short %}.'
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
---

{% data reusables.copilot.copilot-spaces.preview-note %}

If you're starting a new feature, trying to understand a system, or picking up a task in a codebase you’re still learning, {% data variables.copilot.copilot_spaces %} can help you:

* Stay focused by organizing the context you need in one place.
* Get better help from {% data variables.product.prodname_copilot_short %} by grounding it in relevant code and documentation.
* Move faster without switching between tools or asking others for background information.

To create a space, go to [https://github.com/copilot/spaces](https://github.com/copilot/spaces), and click **Create space**.

Below are some examples of how to use {% data variables.copilot.copilot_spaces_short %} to help you with development work.

## Developing a new feature

When working on a specific feature, you can save time and produce higher-quality results by using a space. Add the relevant code, a product spec, and any supporting materials—like notes from a design review or image descriptions of mockups. {% data variables.product.prodname_copilot_short %} can help you:

* Summarize how the current implementation works.
* Suggest changes or additions based on the spec.
* Draft a first implementation or outline next steps.
* Flag missing elements or inconsistencies.

**Instructions**:
> This space contains the new user registration form for a healthcare nonprofit providing low-cost testing. It is built using React and Tailwind.

**Suggested prompt**:
> How should I add support for 2FA?

## Defining the logic for a small, frequent task

When working on repetitive tasks like tracking telemetry events or handling event emissions, it’s useful to document the logic once and share it with others through {% data variables.copilot.copilot_spaces_short %}. This allows everyone to stay consistent and saves time when performing the task. {% data variables.product.prodname_copilot_short %} can assist by:

* Suggesting efficient patterns based on your previous work.
* Helping write reusable functions or templates.
* Reviewing the logic to ensure it aligns with project standards.
* Providing examples of how similar tasks have been handled in the codebase.

**Instructions**:
> You help developers implement telemetry events. You should (1) validate what the user's goals are for the event, (2) propose a new event structure based on examples of existing events (and using the common telemetry schema), and (3) create a new version of the telemetry config file.

**Suggested prompt**:
> Help me log when a user clicks on an in-app notification.

## Sharing knowledge with teammates

In situations where people tend to ask similar questions, such as how authentication or search works in your project, {% data variables.product.prodname_copilot_short %} can help:

* Explain how the code works.
* Answer questions grounded in the latest documentation.
* Guide new team members on the best practices.

**Instructions**:
> You contain the code and documentation associated with our authentication system.

**Suggested prompt**:
> How does SSO work?

## Next steps

Once you’ve created a space to help with development tasks, consider sharing it with your team to reduce handoffs and repeated questions. See [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces).
