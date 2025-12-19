---
title: Interpreting usage and adoption metrics for GitHub Copilot
shortTitle: Interpret usage metrics
intro: 'Evaluate trends surfaced in {% data variables.product.prodname_copilot_short %} usage metrics to enable adoption in your enterprise.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/copilot-metrics/dashboards/interpreting-the-metrics
  - /copilot/reference/interpret-copilot-metrics
---

>[!NOTE] The {% data variables.product.prodname_copilot_short %} usage metrics dashboard is currently in {% data variables.release-phases.public_preview %} and subject to change.

After you’ve viewed the {% data variables.product.prodname_copilot_short %} usage metrics dashboard, you can use this article to interpret each chart and identify opportunities to increase adoption and engagement.

> [!NOTE] The dashboard reports enterprise-level data. Organization-level views are available through the {% data variables.product.prodname_copilot_short %} usage metrics APIs.

## Reviewing overall usage trends

Use the main usage charts in the dashboard to understand overall adoption and engagement patterns across your enterprise. These charts help you identify where usage is growing, leveling off, or declining, so you can take action to maintain engagement.

| Metric | What it shows | How to interpret it |
|:--|:--|:--|
| IDE daily active users (DAU) | Unique users who interacted with {% data variables.product.prodname_copilot_short %} each day. | Sustained DAU growth signals consistent engagement; sharp declines may indicate configuration issues or reduced interest. |
| IDE weekly active users (WAU) | Unique users active over a 7-day rolling window. | A healthy WAU-to-license ratio (>60%) indicates strong ongoing usage. |
| Code completions acceptance rate | Percentage of suggestions accepted. | A rising rate suggests increasing trust and usefulness; a drop may point to mismatched suggestions or workflow friction. |

## Reviewing feature adoption

The "Requests per chat mode" and "Agent adoption" charts show how developers are using {% data variables.copilot.copilot_chat_short %} and {% data variables.copilot.copilot_agent_short %}.

| Signal | What it tells you | What to look for |
|:--|:--|:--|
| Requests per chat mode | Breakdown of chat interactions by mode—Ask, Edit, or Agent. | A balanced distribution suggests users are exploring multiple capabilities. Heavy use of one mode can highlight where enablement should focus. |
| Agent adoption | Percentage of active users who used {% data variables.copilot.copilot_agent_short %}. | Growth over time shows that developers are progressing from basic completions to more advanced {% data variables.product.prodname_copilot_short %} features. |

## Reviewing model adoption

The "Model usage per day" and "Model usage per chat mode" charts help you understand which AI models are most frequently used in your enterprise.

| Chart | Description | Insights to derive |
|:--|:--|:--|
| Model usage per day | Shows which AI models power {% data variables.copilot.copilot_chat_short %} activity across the enterprise. | Identify whether users are primarily engaging with default models or experimenting with newer ones. |
| Model usage per chat mode | Breaks down model usage by chat mode (Ask, Edit, Agent). | Monitor how model adoption evolves as new models are released. |

> [!NOTE]
> Model usage charts currently represent chat activity only. Completions data is not included in model breakdowns.

## Reviewing language usage

The "Language usage" and "Language usage per day" charts show which programming languages developers use most often with {% data variables.product.prodname_copilot_short %}.

| Chart | Description | How to use it |
|:--|:--|:--|
| Language usage | Shows the share of {% data variables.copilot.copilot_chat_short %} activity by programming language. | Identify where {% data variables.copilot.copilot_chat_short %} provides the most value and where additional support or enablement might help. |
| Language usage per day | Tracks daily fluctuations in language activity. | Spot shifts in development focus or confirm whether new teams or projects are driving increased activity. |

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

* To access metrics programmatically, including enterprise, organization, and user-level records, see [AUTOTITLE](/rest/copilot/copilot-usage-metrics).
