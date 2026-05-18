---
title: Team-level Copilot usage metrics
shortTitle: Team-level metrics
intro: 'Construct team-level {% data variables.product.prodname_copilot %} usage metrics by joining the daily user-teams report with the daily per-user usage metrics report.'
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: reference
allowTitleToDifferFromFilename: true
category:
  - Copilot usage metrics
  - Understand available data
  - Track Copilot usage
---

The {% data variables.product.prodname_copilot_short %} usage metrics APIs do not publish a single pre-aggregated team report. Team-level metrics are constructed by joining the **user-teams** report (which lists each user's team memberships for a given day) with the **per-user usage metrics** report (which contains each user's {% data variables.product.prodname_copilot_short %} activity for that day). Aggregating the joined rows by `team_id` produces team-level metrics.

The same join recipe supports any team-level slice you need: per `(team, day)`, per `(team, day, language)`, per `(team, day, IDE)`, over rolling windows, and so on.

## Fetching the reports

The two reports referenced in this guide are downloaded in two steps. First, call the REST endpoint for the day you want. The endpoint returns time-limited signed URLs from which you can download the report files. Then download the JSON files those URLs point to. The user-team and per-user rows are in those JSON files; they are not returned inline by the REST endpoint.

| Report | Endpoint |
|:--|:--|
| Organization user-teams | `GET /orgs/{org}/copilot/metrics/reports/user-teams-1-day?day=YYYY-MM-DD` |
| Enterprise user-teams | `GET /enterprises/{enterprise}/copilot/metrics/reports/user-teams-1-day?day=YYYY-MM-DD` |
| Organization per-user usage metrics | `GET /orgs/{org}/copilot/metrics/reports/users-1-day?day=YYYY-MM-DD` |
| Enterprise per-user usage metrics | `GET /enterprises/{enterprise}/copilot/metrics/reports/users-1-day?day=YYYY-MM-DD` |

Each endpoint returns a response of the form:

```json
{
  "download_links": [
    "https://example.com/copilot-user-teams-report-1.json"
  ],
  "report_day": "2026-05-07"
}
```

Download the file at each URL within the link's expiration window to retrieve the rows for that report.

For complete request and response schemas, authentication requirements, and related endpoints, see [AUTOTITLE](/rest/copilot/copilot-usage-metrics). For an overview of how individual usage metric fields are defined, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics).

For a multi-day window, call the daily endpoints once per day and aggregate the daily results. See [Building rolling-window team reports](#building-rolling-window-team-reports) below.

## Reports involved

Team-level metrics come from joining two report families: user-teams reports for team membership, and per-user usage metrics reports for activity.

### User-teams reports

These reports list each user's team memberships on a given day.

| Report | Scope | Key fields |
|:--|:--|:--|
| `organization_user_teams_1_day` | Organization-team membership for the day. Includes only organization teams. | `user_id`, `user_login`, `day`, `organization_id`, `team_id`, `slug` |
| `enterprise_user_teams_1_day` | Enterprise-team membership for the day. Includes both enterprise teams and business teams. | `user_id`, `user_login`, `day`, `enterprise_id`, `team_id`, `slug` |

A user belonging to multiple teams on the same day appears in multiple rows—one row per `(user, team)` pair.

> [!IMPORTANT]
> **Teams with fewer than 5 seated {% data variables.product.prodname_copilot_short %} users are excluded from the user-teams reports.**
>
> Implications:
>
> * A team with fewer than 5 seated users on a given day will not appear in that day's user-teams report, even if its members have {% data variables.product.prodname_copilot_short %} activity. The activity is still in the per-user usage metrics report, but no team row exists in the join result.
> * A team that crosses the threshold during a multi-day window is present on some days and absent on others. Only the days the team was above the threshold contribute to its totals.
> * If you sum the team rows back together to compare against an enterprise or organization total, the sum is lower than the entity total. The shortfall is the activity from users who only belong to sub-threshold teams—they have no team row in the join result, so their activity is not represented in any team aggregate.

### Per-user usage metrics reports

These reports contain each user's {% data variables.product.prodname_copilot_short %} activity for a given day.

| Report | Scope | Key fields |
|:--|:--|:--|
| `organization_users_1_day` | One row per `(user_id, day, organization_id)` with the user's {% data variables.product.prodname_copilot_short %} activity within that organization for the day. | `user_id`, `day`, `organization_id`, `enterprise_id`, activity counters, breakdown arrays |
| `users_1_day` | One row per `(user_id, day, enterprise_id)` with the user's {% data variables.product.prodname_copilot_short %} activity within that enterprise for the day. | `user_id`, `day`, `enterprise_id`, activity counters, breakdown arrays |

For the full list of fields available in these reports, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics).

> [!WARNING]
> Do not join the rolling 28-day per-user reports (`users_28_day`, `organization_users_28_day`) with the daily user-teams report. The user-teams report reflects team membership on a single day, so joining 28 days of activity against a single-day membership snapshot attributes the full 28 days of activity to whichever teams the user happens to belong to on the join day. This mis-attributes activity to the wrong teams whenever team membership changed during the window. Always join daily activity with daily user-teams, then aggregate to your desired window.

### Entity-level reports

The entity-level reports (`enterprise_28_day`, `organization_28_day`, `enterprise_1_day`, `organization_1_day`) are pre-aggregated totals for the entire enterprise or organization. They do not carry `user_id` or `team_id`, and cannot be joined with the user-teams report to produce per-team breakdowns. Use them directly when you want enterprise or organization totals; for team-level totals, use the daily user-teams + daily per-user-metrics join described below.

## Example

This minimal end-to-end example produces one day of organization-team metrics. The JSON shown below for each input report is a sample of the rows you would find in the file downloaded from one of that report's `download_links` (see [Fetching the reports](#fetching-the-reports) above).

Two users have {% data variables.product.prodname_copilot_short %} activity on 2026-05-07 in organization `999`:

* **Alice** (`user_id=1001`) belongs to two teams that day: `frontend` (`team_id=42`) and `backend` (`team_id=43`).
* **Bob** (`user_id=1002`) belongs to `frontend` (`team_id=42`) only.

### Input: `organization_user_teams_1_day`

```json
{"user_id": 1001, "user_login": "alice", "day": "2026-05-07", "organization_id": "999", "team_id": 42, "slug": "frontend"}
{"user_id": 1001, "user_login": "alice", "day": "2026-05-07", "organization_id": "999", "team_id": 43, "slug": "backend"}
{"user_id": 1002, "user_login": "bob",   "day": "2026-05-07", "organization_id": "999", "team_id": 42, "slug": "frontend"}
```

Alice appears twice—one row per team she belongs to.

### Input: `organization_users_1_day`

```json
{"user_id": 1001, "user_login": "alice", "day": "2026-05-07", "organization_id": "999", "enterprise_id": "13213",
 "user_initiated_interaction_count": 50, "code_generation_activity_count": 40, "code_acceptance_activity_count": 12,
 "loc_suggested_to_add_sum": 200, "loc_added_sum": 88, "used_chat": true,  "used_agent": true,  ...}
{"user_id": 1002, "user_login": "bob",   "day": "2026-05-07", "organization_id": "999", "enterprise_id": "13213",
 "user_initiated_interaction_count": 30, "code_generation_activity_count": 25, "code_acceptance_activity_count": 7,
 "loc_suggested_to_add_sum": 80,  "loc_added_sum": 24, "used_chat": true,  "used_agent": false, ...}
```

One row per `(user, day, organization)`. Activity totals are for the day, summed across all surfaces.

### Joined and aggregated result

Inner-join the two reports on `(user_id, day, organization_id)`, then group by `team_id` and aggregate. The `active_users` column below is an aggregation output (`COUNT(DISTINCT user_id)`), not a field on the per-user report; the remaining numeric columns are sums of the matching report fields.

| team_id | slug | active_users | code_acceptance_activity_count | loc_added_sum |
|:--|:--|:--|:--|:--|
| 42 | frontend | 2 | 19 | 112 |
| 43 | backend  | 1 | 12 | 88 |

Two team-day rows, one per team. The `frontend` row aggregates both Alice's and Bob's activity. The `backend` row contains only Alice's activity.

Alice's activity contributes to **both** teams. The 12 and 88 from her row count in `frontend` and again in `backend`. This matches the intent of team-level metrics—each team sees the activity of its members—but summing the two team rows back into a single org total double-counts Alice. For organization totals, query `organization_users_1_day` directly without the user-teams join.

## How to construct team-level metrics

For any team-level slice, the same four steps apply.

1. **Pick the report pair.**

   * For organization teams, pair `organization_user_teams_1_day` with `organization_users_1_day`. The shared entity id is `organization_id`.
   * For enterprise and business teams, pair `enterprise_user_teams_1_day` with `users_1_day`. The shared entity id is `enterprise_id`.

1. **Inner-join the two reports** on `(user_id, day, entity_id)`. All three keys must match. The join is one-to-many on the team side—a user on multiple teams matches multiple user-teams rows.

1. **Filter by `day`** to the day you want. Both reports carry the same `day` value.

1. **Group by `team_id`** (and `slug` for the team's display name) and aggregate. Use:

   * `COUNT(DISTINCT user_id)` for distinct-user counts such as active users.
   * `SUM(...)` for volume counters such as `code_generation_activity_count`, `loc_added_sum`, and `user_initiated_interaction_count`.

The join is an inner join: a team appears in the result for a given day only if at least one of its members had activity that day. To list teams that had no activity on the day, left-join from the user-teams report and treat null counters as zero.

### Cutting by language, IDE, feature, or model

Per-dimension breakdowns live in array fields on each per-user row (`totals_by_ide`, `totals_by_language_feature`, `totals_by_language_model`, `totals_by_model_feature`). To group by a dimension, expand the relevant array as part of the join, add the dimension columns to your grouping, and aggregate the per-element counters scoped to that dimension. `language` and `ide` live in separate arrays, so a team-level `(language × ide)` cross-tab takes two queries combined in your application.

### Building rolling-window team reports

To produce a rolling-window team report (for example, a 28-day rollup):

1. Call the daily endpoints for each day in the window.
1. Join each day's per-user usage metrics report (`organization_users_1_day` or `users_1_day`) with the same day's user-teams report (`organization_user_teams_1_day` or `enterprise_user_teams_1_day`) on `(user_id, day, entity_id)`.
1. Filter `day` to the window and drop `day` from the grouping.

Volume counters are additive across days; sum them over the window. Distinct-user counts must be evaluated as `COUNT(DISTINCT user_id)` over the joined rows of the full window—they cannot be summed across daily counts.

The per-day join is what ensures each day's activity is attributed to whichever teams the user was on **that day**. Without it, team membership changes during the window silently mis-attribute activity to the wrong teams.

## Limitations and caveats

* **Users on multiple teams contribute to each team they belong to.** Be careful when combining team rows back into an org or enterprise total—multi-team users will be counted more than once. Use the per-user report directly (without the user-teams join) for org or enterprise totals.
* **Sub-threshold teams are absent from the user-teams report.** Teams with fewer than 5 seated {% data variables.product.prodname_copilot_short %} users on a given day are excluded, so their activity is not represented in team-level results even though the activity is still in the per-user report.
* **Distinct-user counts cannot be summed across days.** When rolling up over a multi-day window, evaluate `COUNT(DISTINCT user_id)` over the joined rows for the whole window rather than summing daily counts.
* **More feature surfaces are tracked.** The volume counters (`code_generation_activity_count`, `code_acceptance_activity_count`, and the `loc_*` counters) aggregate activity across multiple {% data variables.product.prodname_copilot_short %} surfaces—inline IDE completions, chat panel actions, and (for accepted-line counters) {% data variables.copilot.copilot_agent_short %} edits. For per-counter surface coverage details, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics). If you previously consumed similar metrics from a surface that counted only inline IDE completions, expect higher values in these counters and re-baseline rather than diffing across the cutover.
* **Take advantage of the new dimensions.** Per-IDE, per-feature, per-`(language, feature)`, per-`(language, model)`, and per-`(model, feature)` breakdowns are available on each per-user row, enabling team-level reports that previous team-metric surfaces did not support.

## Next steps

* For the full schema and field reference for the per-user usage metrics report, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics).
* For example JSON payloads from the usage metrics endpoints, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/example-schema).
* For guidance on reconciling metrics across the dashboard, APIs, and exports, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/reconciling-usage-metrics).
