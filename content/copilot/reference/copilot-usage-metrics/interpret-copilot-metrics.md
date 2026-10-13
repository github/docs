---
title: Interpreting usage and adoption metrics for GitHub Copilot
shortTitle: Interpret usage metrics
intro: '{% data variables.product.prodname_copilot_short %} usage and adoption metrics reveal patterns in how developers engage with {% data variables.product.prodname_copilot_short %} across your enterprise.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: reference
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/copilot-metrics/dashboards/interpreting-the-metrics
  - /copilot/reference/interpret-copilot-metrics
category:
  - Copilot usage metrics
  - Understand metrics
  - Track Copilot usage
---

After you’ve viewed the {% data variables.product.prodname_copilot_short %} usage metrics dashboard, you can use this article to interpret each chart and identify opportunities to increase adoption and engagement.

## Reviewing overall usage trends

Use the main usage charts in the dashboard to understand overall adoption and engagement patterns. These charts help you identify where usage is growing, leveling off, or declining, so you can take action to maintain engagement.

| Metric | What it shows | How to interpret it |
|:--|:--|:--|
| IDE daily active users (DAU) | Unique users who interacted with {% data variables.product.prodname_copilot_short %} each day. | Sustained DAU growth signals consistent engagement; sharp declines may indicate configuration issues or reduced interest. |
| IDE weekly active users (WAU) | Unique users active over a 7-day rolling window. | A healthy WAU-to-license ratio (>60%) indicates strong ongoing usage. |
| Code completions acceptance rate | Percentage of suggestions accepted. | A rising rate suggests increasing trust and usefulness; a drop may point to mismatched suggestions or workflow friction. |

## Reviewing feature adoption

The "Requests per chat mode" and "Agent adoption" charts show how developers are using {% data variables.copilot.copilot_chat_short %} and {% data variables.copilot.copilot_agent_short %}.

| Signal | What it tells you | What to look for |
|:--|:--|:--|
| Requests per chat mode | Breakdown of chat interactions by mode—Ask, Edit, Plan, or Agent. | A balanced distribution suggests users are exploring multiple capabilities. Heavy use of one mode can highlight where enablement should focus. |
| Agent adoption | Percentage of active users who used {% data variables.copilot.copilot_agent_short %}. | Growth over time shows that developers are progressing from basic completions to more advanced {% data variables.product.prodname_copilot_short %} features. |

## Reviewing {% data variables.copilot.copilot_cli_short %} customization adoption with the API

To assess how developers adopt {% data variables.copilot.copilot_cli_short %} customizations, use the usage metrics API. It reports skills, custom agents, Model Context Protocol (MCP) server connection activity, slash commands, and plugins for enterprises and organizations. The fields appear in per-user and aggregated 1-day reports, per-user 28-day reports, and aggregated 28-day `day_totals`. They are not available in the dashboard. For field definitions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#copilot-cli-customization-fields-api-only).

`interaction_count` represents a different event for each category: skill invocations, custom agent starts, MCP connection or reconnection attempts, slash command invocations, or plugin-associated skill invocations. These values count activity events, not users. MCP counts include both successful and failed connection attempts, but not tool calls through an already connected server or ongoing server use. Every plugin interaction is already included in skill interaction counts, while skill interactions that are not associated with a plugin appear only in skill totals. Do not add plugin and skill interaction counts together.

To identify strong adoption signals, look for named customizations that appear in many users' arrays. Each array contains only the five entries with the highest interaction counts for that record. Therefore, do not interpret an absent entry as zero usage or use the arrays to calculate an exact adoption rate.

Distinct counts show how many different item identifiers had activity. At enterprise and organization scope, an identifier counts once even if many users interacted with it, so do not add per-user distinct counts to reproduce an aggregate value. Compare distinct counts across records or `day_totals` to see whether the variety of customizations with activity is changing.

| Signal | What it suggests | Suggested action |
|:--|:--|:--|
| A named skill, custom agent, slash command, or plugin has high interaction counts across many users | The customization is broadly useful and may be a good candidate for standardization. | Promote it through internal examples, onboarding materials, or a shared customization library. |
| A named customization appears in the top five for only a few users but has high interaction counts for those users | Observed activity is concentrated among a small group. Other users may have activity outside their top-five entries. | Ask those users to share example workflows. Then use developer feedback or other internal data to assess broader adoption before expanding enablement. |
| Distinct counts are high, but most interactions are grouped under `other` | Developers are using many customer-defined customizations whose names are not exposed in the report. | Review your internal customization sources and catalogs to identify opportunities to consolidate, document, or govern overlapping options. |
| Interaction counts remain low for a skill, custom agent, slash command, or plugin you expect developers to use | Developers may not know that the customization exists or when it is useful. | Improve discoverability with task-focused examples and include the customization in relevant onboarding or enablement sessions. |
| MCP connection activity is higher or lower than expected | Developers may be reconnecting repeatedly, encountering failed connection attempts, or the planned rollout may not have reached the intended audience. Connection counts alone do not show whether developers are actively using MCP tools. | Check your MCP configuration and rollout process, then use other internal data or developer feedback to assess ongoing server use. |
| Adoption grows after an enablement activity | The activity may have helped developers discover useful customizations. | Compare multiple reporting periods and gather developer feedback before deciding whether to expand the activity. |

## Reviewing model adoption

The "Model usage per day" and "Model usage per chat mode" charts help you understand which AI models are most frequently used.

| Chart | Description | Insights to derive |
|:--|:--|:--|
| Model usage per day | Shows which AI models power {% data variables.copilot.copilot_chat_short %} activity. | Identify whether users are primarily engaging with default models or experimenting with newer ones. |
| Model usage per chat mode | Breaks down model usage by chat mode (Ask, Edit, Plan, Agent). | Monitor how model adoption evolves as new models are released. |

> [!NOTE]
> Model usage charts currently represent chat activity only. Completions data is not included in model breakdowns.

## Reviewing language usage

The "Language usage" and "Language usage per day" charts show which programming languages developers use most often with {% data variables.product.prodname_copilot_short %}.

| Chart | Description | How to use it |
|:--|:--|:--|
| Language usage | Shows the share of {% data variables.copilot.copilot_chat_short %} activity by programming language. | Identify where {% data variables.copilot.copilot_chat_short %} provides the most value and where additional support or enablement might help. |
| Language usage per day | Tracks daily fluctuations in language activity. | Spot shifts in development focus or confirm whether new teams or projects are driving increased activity. |

## Reviewing adoption cohorts

The impact dashboard's adoption cohort distribution shows the share of users in each phase, and how that distribution shifts over time. For what each phase means and how classification works, see [AUTOTITLE](/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics#understanding-adoption-cohorts).

| Signal | What it suggests | Suggested action |
|:--|:--|:--|
| Shrinking Phase 1 share, growing Phase 2 or Phase 3 share | Users are progressing from code completions toward agent-driven workflows. | Continue current enablement; consider sharing internal success stories to sustain momentum. |
| Large or growing passive users share | Many licensed users haven't yet reached the engagement threshold for a phase. | Verify license assignment and IDE setup; offer onboarding to re-engage inactive users. Also check whether affected users rely primarily on a surface that isn't part of any phase's classification criteria, such as {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %}. |
| Stalled progression from Phase 1 to Phase 2 | Users are comfortable with completions and chat but haven't adopted agent surfaces. | Follow a recommendation card, such as configuring {% data variables.copilot.copilot_cloud_agent %}, or run a demo of agent workflows. |
| Stalled progression from Phase 2 to Phase 3 | Users have adopted one agent surface but haven't layered in additional agent surfaces. | Follow a recommendation card, such as enabling {% data variables.copilot.copilot_code-review_short %}, to introduce a second agent surface. |
| A user's phase changes from one day to the next without a change in their habits | Phase assignment is recalculated daily from the trailing 28-day window, so a user's phase shifts as older days roll out of the window. | This is expected behavior, not a data error; no action needed. |

When you see a recommendation card in the dashboard, such as configuring {% data variables.copilot.copilot_cloud_agent %}, enabling {% data variables.copilot.copilot_code-review_short %}, or sending an onboarding nudge, follow the linked how-to to complete the setup. Each recommendation is generated from your organization's current cohort distribution and targets the gap most likely to move users toward deeper adoption.

## Reviewing the adoption multiplier

The adoption multiplier compares engaged users (Phase 1, 2, or 3) against passive users on code shipped (pull requests merged per user per month) and time to merge pull requests. This shows the relative impact of deeper adoption, independent of how many users fall into each phase.

| Signal | What it suggests | Suggested action |
|:--|:--|:--|
| Engaged users merge more pull requests per user per month than passive users | Deeper {% data variables.product.prodname_copilot_short %} adoption is associated with higher individual output. | Use this comparison to support the case for continued enablement investment. |
| Engaged users merge fewer pull requests per user per month than passive users | Engaged users may be spending more time on larger or more complex work, or the comparison may reflect differences in team composition rather than adoption depth. | Cross-reference with adoption cohort distribution and team-level data before drawing conclusions; avoid treating the multiplier as a standalone measure of productivity. |
| Engaged users merge pull requests faster than passive users | Deeper adoption is associated with a shorter pull request lifecycle. | Use this comparison alongside pull request lifecycle metrics to evaluate overall delivery impact. |
| Multiplier stays flat despite growth in Phase 2 or Phase 3 share | Agent adoption hasn't yet translated into a measurable difference in output between engaged and passive users. | Check whether agent usage is concentrated in a few users or teams, and whether enough time has passed since rollout for the impact to show. |

> [!NOTE]
> The adoption multiplier compares two different populations of users, not the same users over time. Differences in team composition, project complexity, or seniority between engaged and passive users can influence the comparison as much as {% data variables.product.prodname_copilot_short %} adoption itself.

## Reviewing potential return on investment

The **Potential return on investment** section compares {% data variables.product.prodname_copilot_short %} cost, estimated percentage of payroll, and pull requests per developer per month across earlier and agent-first adoption phases. Treat these comparisons as directional associations, not proof that a change in adoption caused a change in output.

| Signal | What it suggests | Suggested action |
|:--|:--|:--|
| Agent-first users merge more pull requests with a similar or lower cost as a percentage of payroll | Agent-first usage is associated with more pull request output relative to the estimated investment. | Compare this signal with the adoption multiplier and trends over multiple periods before using it to inform enablement investment. |
| Agent-first users merge fewer pull requests or have a higher cost as a percentage of payroll | Differences in work type, team composition, or adoption maturity may be affecting the comparison. | Review cohort distribution and team-level context before drawing conclusions about return on investment. |
| The payroll percentage changes after you select a different developer cost | The dashboard is recalculating the estimate using a different compensation assumption, not showing a change in usage. | Use the same compensation band when comparing different periods or organizations. |

## Acting on your insights

Use trends in usage, feature adoption, and language activity to guide enablement and rollout planning.

| Observation | Possible cause | Suggested action |
|:--|:--|:--|
| High adoption in some teams but low in others | Some teams may not have {% data variables.copilot.copilot_chat_short %} enabled or configured correctly. | Verify license assignment and IDE setup; offer team-level onboarding. |
| Steady usage but low agent adoption | Developers may not be aware of {% data variables.copilot.copilot_agent_short %} features. | Share internal demos or success stories. |
| Drop in DAU or acceptance rate | Configuration issues or reduced relevance of suggestions. | Encourage feedback and verify IDE and extension versions. |

> [!TIP]
> Consider combining dashboard trends with feedback from surveys or retrospectives to get a full picture of {% data variables.product.prodname_copilot_short %}’s impact on developer productivity.
