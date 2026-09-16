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

The impact dashboard's adoption cohort distribution shows the share of users in each phase, and how that distribution shifts over time. For what each phase means and how classification works, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics#understanding-adoption-cohorts).

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

## Acting on your insights

Use trends in usage, feature adoption, and language activity to guide enablement and rollout planning.

| Observation | Possible cause | Suggested action |
|:--|:--|:--|
| High adoption in some teams but low in others | Some teams may not have {% data variables.copilot.copilot_chat_short %} enabled or configured correctly. | Verify license assignment and IDE setup; offer team-level onboarding. |
| Steady usage but low agent adoption | Developers may not be aware of {% data variables.copilot.copilot_agent_short %} features. | Share internal demos or success stories. |
| Drop in DAU or acceptance rate | Configuration issues or reduced relevance of suggestions. | Encourage feedback and verify IDE and extension versions. |

> [!TIP]
> Consider combining dashboard trends with feedback from surveys or retrospectives to get a full picture of {% data variables.product.prodname_copilot_short %}’s impact on developer productivity.

## Next steps

* To access metrics programmatically, including enterprise, organization, repository, and user-level records, see [AUTOTITLE](/rest/copilot/copilot-usage-metrics).
* To construct team-level metrics from the per-user usage metrics report, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/team-level-metrics).
