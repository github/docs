---
title: Driving team adoption of agentic GitHub Copilot
shortTitle: Drive agentic adoption
allowTitleToDifferFromFilename: true
intro: 'Help established teams build sustained habits with {% data variables.copilot.github_copilot_app %} and {% data variables.copilot.copilot_cli_short %}, then measure adoption and business impact.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Roll Copilot out at scale
  - Manage Copilot for a team
---

After developers are using {% data variables.product.prodname_copilot_short %}, a focused rollout can help established teams add {% data variables.copilot.github_copilot_app %} and {% data variables.copilot.copilot_cli_short %} to their daily work. These tools complement IDE chat and agent mode. The goal is to help teams build repeatable agentic workflows with the tool that best fits each task.

This playbook is for people who coordinate {% data variables.product.prodname_copilot_short %} adoption for established teams. It guides you through a two-week onboarding sprint to test workflow fit and establish usage habits. A two-week sprint provides an early signal of adoption, not enough evidence to prove long-term productivity or cost impact.

## Before the sprint

Identify a rollout coordinator and the people responsible for policies, licenses, metrics, security, support, and spending. Agree on who can pause the sprint or disable access if you find an unexpected policy, security, or cost issue.

### Select and equip an initial team

Start with one team or a small group of established teams. Participants are more likely to learn from each other, and you can distinguish team practices from individual preferences.

Choose teams that have:

* A manager or team lead who will model usage and discuss it in team meetings
* One or more experienced individual contributors who can test advanced workflows, support peers, and turn successful experiments into team guidance
* Work that suits agentic tools, such as investigating a codebase, making coordinated changes across files, running tests, or preparing pull requests
* Stable delivery metrics that you can use as a baseline

Avoid selecting only enthusiasts. Include a representative mix of experience levels so that the sprint reveals common setup, trust, and workflow barriers.

Select a real project with enough suitable work for participants to use agentic tools several times during the sprint. Then prepare access:

1. Confirm that each participant receives their {% data variables.product.prodname_copilot_short %} license through the organization whose policies will govern the sprint.
1. Work with the appropriate enterprise and organization owners to enable the separate policies for {% data variables.copilot.github_copilot_app %} and {% data variables.copilot.copilot_cli_short %}.
1. Confirm the scope before enabling a policy. Organization policies apply to everyone who receives their license through that organization, not only the selected team. Enterprise policies can also restrict which settings organization owners can change. For more information, see [AUTOTITLE](/copilot/concepts/enterprise/policies).
1. Ask participants to install and sign in to both tools before the kickoff. See [AUTOTITLE](/copilot/get-started/quickstart-copilot-app) and [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli).
1. Confirm that each participant can access the project and use the tools under the intended policies and managed settings.
1. Give the person measuring the sprint access to {% data variables.product.prodname_copilot_short %} usage metrics. For the required role, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics).

If you are enabling these tools for the first time, treat the sprint as part of a broader feature pilot. Before kickoff, estimate usage-based costs, set an appropriate budget with the intended stop behavior, and plan to monitor spending during the sprint. For a complete process, see [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/govern-at-scale/pilot-a-feature-or-model).

### Define activation and outcome targets

Set an **activation** target for the onboarding sprint. For example, set a target for each participant to use either {% data variables.copilot.github_copilot_app_short %} or {% data variables.copilot.copilot_cli_short %} on at least three separate days in each week of the sprint. Repeated use gives participants time to try the tools on different tasks and decide where they fit into daily work.

Pair the activation target with one or two **outcomes** that matter to the team. For example:

* Reduce the time from starting work to opening a pull request.
* Complete more maintenance tasks without delaying planned feature work.
* Reduce time spent investigating unfamiliar code.
* Maintain or improve review quality while increasing pull request throughput.

Record a baseline for the outcomes before the sprint.

Do not use the amount of generated code as a success target. More generated code does not necessarily create more value and can increase review or maintenance work.

### Prepare workflows, tracking, and safeguards

Instead of asking participants to "use AI more," give the team two or three **approved workflows** that match their current work. For example:

* Use {% data variables.copilot.copilot_cli_short %} to investigate a failure, plan a multi-file change, run tests, or review local changes.
* Use {% data variables.copilot.github_copilot_app_short %} to work from an issue, make changes in an agent session, and open a pull request.
* Move between the tools when useful, for example by opening {% data variables.copilot.github_copilot_app_short %} from {% data variables.copilot.copilot_cli_short %} with `copilot app`.

For each workflow, document the required human review, testing, and approval steps. If your enterprise uses custom instructions, agents, managed settings, or approved Model Context Protocol (MCP) servers, configure them before the sprint.

Decide how the team will share examples and track progress. You can:

* Add a temporary pull request label, such as `copilot-pilot`, so participants can find and discuss relevant examples.
* Add a consistent marker to relevant commit messages, such as `Copilot-Assisted: true`, if your organization already analyzes commit metadata.
* Prepare a team dashboard that shows the share of participants active on either tool on three or more days per week.
* Choose an existing team meeting or channel where participants can share the task, workflow, and result without sharing prompts that may contain sensitive information.

Labels and commit message markers provide self-reported context, not authoritative usage data. Use them to find examples and start conversations. Use {% data variables.product.prodname_copilot_short %} usage metrics to measure activity.

Before kickoff, document:

* Who will review access, policy behavior, agent activity, support issues, and spending during the sprint
* How participants will report unexpected or unsafe behavior
* Conditions that will pause or stop the sprint, such as an unintended policy scope, repeated unsafe results, or spending approaching the agreed limit
* How the responsible owner will disable the tools or remove sprint-specific configuration

## During the sprint

In the first week, remove setup barriers and create shared experiences. In the second week, reinforce successful workflows and address barriers.

### Week one: Launch and complete the first workflows

1. **Launch with the whole team.** Explain the outcomes you want to improve, the activation target, and the guardrails participants must follow.
1. **Demonstrate real work.** Ask the manager, team lead, or experienced contributor to complete one of the selected workflows in the team's codebase. Show where human review and approval remain required.
1. **Complete a first task together.** Pair participants so that everyone starts a session in {% data variables.copilot.github_copilot_app_short %} or {% data variables.copilot.copilot_cli_short %} and completes a small, low-risk task.
1. **Use the tools during normal work.** Ask participants to use at least one selected workflow on the number of days in your activation target. Avoid creating artificial exercises after the first task.
1. **Check operations.** Confirm that policies and managed settings behave as intended. Review support and safety reports, and check usage-based spending against the agreed limit.

### Week two: Reinforce useful workflows

1. **Discuss usage in existing meetings.** Ask what the tools helped with, when participants chose another {% data variables.product.prodname_copilot_short %} tool or feature, and what blocked them.
1. **Respond to workflow barriers.** Use the following actions:
   * **Another tool fit the task better**: Keep the existing workflow for that task and focus the sprint on work that benefits from the selected tools.
   * **The participant did not know how to start**: Provide a tested starter prompt for one of the selected workflows.
   * **The agent lacked context or produced poor results**: Improve repository instructions, task descriptions, or available tools, then test the workflow again.
   * **The participant did not trust the result**: Demonstrate how to review diffs, restrict permissions, run tests, and discard unwanted changes.
   * **The tool was unavailable or blocked**: Verify license assignment, policies, installation, authentication, network access, and approved tool configuration.
1. **Adjust the workflow guidance.** Remove workflows that did not help, fix access or configuration problems, and share practices from successful sessions.
1. **Check operations again.** Review safety reports, agent activity, policy behavior, support needs, and spending. Pause the sprint if it meets one of your stop conditions.
1. **Review preliminary results.** At the end of week two, compare activation and outcome signals with the baseline.

Do not discourage normal IDE use. The goal is to help the team choose an agentic tool when it reduces effort or expands what they can accomplish.

## After the sprint

Measure the results, document what you learned, and decide whether to repeat, expand, redesign, pause, or stop the rollout.

### Measure sustained usage

Use daily reports for each user from the {% data variables.product.prodname_copilot_short %} usage metrics API:

* `used_cli` and `used_copilot_app` show whether a person used each tool on a given day.
* `totals_by_cli` and `totals_by_copilot_app` provide session, request, and prompt counts for deeper analysis.

To check the activation target:

1. Filter the daily rows to the sprint dates.
1. Keep rows where `used_cli` or `used_copilot_app` is `true`.
1. Group the rows by user and week.
1. Count the distinct `day` values in each group.

A participant meets a three-day target when the count is at least three in each week.

To view these fields by team, join the user-teams report with the per-user usage report. See [AUTOTITLE](/copilot/reference/copilot-usage-metrics/team-level-metrics).

Use the impact dashboard as a directional, longer-term view of overall agent adoption. Adoption cohorts use a trailing 28-day window and can reflect activity from agentic features beyond the two tools in this sprint. Do not use a cohort change to attribute impact to this sprint. See [AUTOTITLE](/copilot/how-tos/administer-copilot/view-impact-dashboard).

### Measure team outcomes

Compare the sprint period with your baseline, using measures such as:

* Pull requests merged per developer
* Median time to merge pull requests
* Completion rate for maintenance or backlog work
* Defects, rework, or review findings
* Participant confidence and satisfaction from a short survey

Review quantitative results alongside team feedback. Differences in project complexity, staffing, and work type can affect delivery metrics, so do not attribute every change to {% data variables.product.prodname_copilot_short %}.

### Decide how to scale

Summarize:

* The percentage of participants who reached the activation target
* Which workflows participants repeated without prompting
* The most common setup, governance, or trust barriers
* Changes in the selected team outcomes
* Usage-based costs and any operational work required to support the rollout
* Any safety issues and how you resolved them

Expand to another established team when the initial team demonstrates repeatable workflows and acceptable quality, safety, support needs, and cost. If activation is low, identify and address that team's specific barriers, such as setup problems or unsuitable workflows. Do not change the rollout for teams that have already adopted the tools successfully.

If you enabled the tools specifically for this sprint, do not use two weeks of data as proof of long-term cost impact. Continue the broader pilot until you have enough billing-cycle data to make a defensible expansion decision.

As you expand, keep the same activation and outcome definitions so that you can compare rollout groups. Revisit the targets after you have enough internal evidence to define sustained, valuable use for your enterprise.
