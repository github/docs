---
title: Allowing GitHub Copilot to work autonomously
shortTitle: Autopilot
intro: 'Autopilot mode lets {% data variables.product.prodname_copilot_short %} carry a well-defined coding task through multiple steps without waiting for you after each step.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Learn about Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

## Overview

Typically, when you work interactively with {% data variables.product.prodname_copilot_short %} in the {% data variables.copilot.github_copilot_app %} and {% data variables.copilot.copilot_cli %}, you submit a prompt, wait for a response, and then give the next instruction. This back-and-forth continues until the task is complete.

Autopilot mode allows {% data variables.product.prodname_copilot_short %} to work through a task without waiting for your input after each step. After you give the initial instruction, the agent can write code, run tests, evaluate the results, and continue iterating until it determines that the task is complete.

The difference between Interactive mode and Autopilot mode is like the difference between collaborating with a coworker who checks in with you periodically, and handing over a task with a clear outcome then reviewing the finished work.

Autopilot mode is available in {% data variables.copilot.copilot_cli %} and the {% data variables.copilot.github_copilot_app %}.

## Benefits of Autopilot mode

* **Hands-off execution:** After the initial instruction, {% data variables.product.prodname_copilot_short %} can complete multiple steps without repeatedly asking you to continue.
* **Efficient multi-step work:** Autopilot mode is suited to long-running tasks such as implementing a detailed plan, writing tests, refactoring files, or fixing a reproducible failure.
* **Continuous iteration:** The agent can run checks, respond to failures, and revise its work as part of the same task.
* **Programmatic automation:** Use Autopilot mode in scripts and CI workflows to allow {% data variables.copilot.copilot_cli_short %} to run tasks unattended. 

## Things to consider

* **Task suitability:** Use Autopilot mode for a task with a clear outcome and enough detail for the agent to make implementation decisions. Vague, exploratory, or open-ended tasks are more likely to require your guidance and may produce work that does not meet your expectations.
* **Trust and access:** The agent may need permission to modify files, run commands, or access network resources. Grant only the access appropriate for the task. Consider using a local or cloud sandbox when the agent needs broad permissions within a restricted environment. For more information, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).
* **AI usage:** Autopilot mode can initiate multiple model interactions while working toward the goal. Monitor your {% data variables.product.prodname_ai_credits_short %} while the task runs.
* **Review:** You remain responsible for the work the agent performs. Review the changes and test results before you commit, push, or merge them.

Use Interactive mode when you are still exploring the problem or expect to make frequent decisions. Use Plan mode when you want to review the approach before implementation begins, then move to Autopilot mode after the plan meets your requirements.

## Autonomy and permissions

Autopilot mode and tool permissions are separate controls:

* Autopilot mode controls whether the agent continues through successive steps without waiting for another prompt.
* Permission settings control which tools and resources the agent can use without asking for approval.

Autopilot mode does not automatically grant unrestricted access. If a required action is not permitted, the agent may be unable to complete the task even though Autopilot mode is active.

Granting broad permissions can allow the agent to modify or delete files and run commands without asking you first. Limit access where possible, monitor longer tasks, and stop the agent if it takes an unsuitable approach. Stopping the current work does not undo changes the agent has already made.

## Typical workflow

Autopilot mode is especially useful for implementing a detailed plan:

1. Describe the goal, relevant constraints, and how the completed work will be validated.
1. Use Plan mode to develop and review an implementation plan.
1. Move to Autopilot mode when the plan is ready.
1. Monitor the agent's progress and interrupt it if necessary.
1. Review the resulting changes and run the checks you would use for any other code change.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/use-autopilot-mode)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode)