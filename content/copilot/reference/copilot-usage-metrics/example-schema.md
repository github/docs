---
title: Example schema for Copilot usage metrics
shortTitle: Example schema
intro: See an example schema of the data returned by the {% data variables.product.prodname_copilot_short %} usage metrics API.
permissions: '{% data reusables.copilot.usage-metrics-permissions %}'
versions:
  feature: copilot
contentType: reference
category:
  - Copilot usage metrics
  - Understand available data
  - Track Copilot usage
allowTitleToDifferFromFilename: true
---

The following are example schemas for the user-level and enterprise-level data returned by the {% data variables.product.prodname_copilot_short %} usage metrics endpoints. The actual data returned may vary based on the specific metrics being tracked and the level of aggregation. You can use these examples as a reference for understanding the structure of the data and how to interpret the various fields and metrics included in the API response.

## User-level schema example

```json copy
[{
  "code_acceptance_activity_count": 1,
  "code_generation_activity_count": 1,
  "day": "2025-10-01",
  "enterprise_id": "1",
  "loc_added_sum": 8,
  "loc_deleted_sum": 0,
  "loc_suggested_to_add_sum": 10,
  "loc_suggested_to_delete_sum": 0,
  "totals_by_cli": {
    "last_known_cli_version": {
      "cli_version": "1.0.8",
      "sampled_at": "2025-10-01T00:01:43.000Z"
    },
    "prompt_count": 2,
    "request_count": 2,
    "session_count": 2,
    "token_usage": {
      "avg_tokens_per_request": 4400.0,
      "output_tokens_sum": 5000,
      "prompt_tokens_sum": 3800
    }
  },
  "totals_by_feature": [{
    "code_acceptance_activity_count": 1,
    "code_generation_activity_count": 1,
    "feature": "code_completion",
    "loc_added_sum": 8,
    "loc_deleted_sum": 0,
    "loc_suggested_to_add_sum": 10,
    "loc_suggested_to_delete_sum": 0,
    "user_initiated_interaction_count": 0
  }],
  "totals_by_ide": [{
    "code_acceptance_activity_count": 1,
    "code_generation_activity_count": 1,
    "ide": "vscode",
    "last_known_ide_version": {
      "ide_version": "1.85.0",
      "sampled_at": "2025-10-01T00:00:02.000Z"
    },
    "last_known_plugin_version": {
      "plugin": "",
      "plugin_version": "",
      "sampled_at": "2025-10-01T00:00:02.000Z"
    },
    "loc_added_sum": 8,
    "loc_deleted_sum": 0,
    "loc_suggested_to_add_sum": 10,
    "loc_suggested_to_delete_sum": 0,
    "user_initiated_interaction_count": 0
  }],
  "totals_by_language_feature": [{
    "code_acceptance_activity_count": 1,
    "code_generation_activity_count": 1,
    "feature": "code_completion",
    "language": "unknown",
    "loc_added_sum": 8,
    "loc_deleted_sum": 0,
    "loc_suggested_to_add_sum": 10,
    "loc_suggested_to_delete_sum": 0
  }],
  "totals_by_language_model": [],
  "totals_by_model_feature": [],
  "used_agent": false,
  "used_chat": false,
  "used_cli": true,
  "user_id": 1,
  "user_login": "login1",
  "user_initiated_interaction_count": 0,
  "etl_id": "green",
  "day_partition": "2025-10-01",
  "entity_id_partition": 1
}]
```

## Enterprise-level schema example

```json copy
[ {
  "day_totals" : [ {
    "code_acceptance_activity_count" : 2,
    "code_generation_activity_count" : 2,
    "daily_active_cli_users" : 2,
    "daily_active_users" : 2,
    "day" : "2025-10-01",
    "enterprise_id" : "1",
    "loc_added_sum" : 30,
    "loc_deleted_sum" : 0,
    "loc_suggested_to_add_sum" : 35,
    "loc_suggested_to_delete_sum" : 0,
    "monthly_active_agent_users" : 0,
    "monthly_active_chat_users" : 0,
    "monthly_active_users" : 2,
    "pull_requests" : {
      "median_minutes_to_merge" : 2.5,
      "median_minutes_to_merge_copilot_authored" : 2.5,
      "total_applied_suggestions" : 1,
      "total_copilot_applied_suggestions" : 1,
      "total_copilot_suggestions" : 1,
      "total_created" : 2,
      "total_created_by_copilot" : 1,
      "total_merged" : 2,
      "total_merged_created_by_copilot" : 1,
      "total_reviewed" : 1,
      "total_reviewed_by_copilot" : 1,
      "total_suggestions" : 1
    },
    "totals_by_cli" : {
      "prompt_count" : 3,
      "request_count" : 3,
      "session_count" : 3,
      "token_usage" : {
        "avg_tokens_per_request" : 4100.0,
        "output_tokens_sum" : 7000,
        "prompt_tokens_sum" : 5300
      }
    },
    "totals_by_feature" : [ {
      "code_acceptance_activity_count" : 2,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "loc_added_sum" : 30,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 35,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_ide" : [ {
      "code_acceptance_activity_count" : 2,
      "code_generation_activity_count" : 2,
      "ide" : "vscode",
      "loc_added_sum" : 30,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 35,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_language_feature" : [ {
      "code_acceptance_activity_count" : 2,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "language" : "unknown",
      "loc_added_sum" : 30,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 35,
      "loc_suggested_to_delete_sum" : 0
    } ],
    "totals_by_language_model" : [ ],
    "totals_by_model_feature" : [ ],
    "user_initiated_interaction_count" : 0,
    "weekly_active_users" : 2
  } ],
  "enterprise_id" : "1",
  "report_end_day" : "2025-10-01",
  "report_start_day" : "2025-09-04",
  "etl_id" : "green",
  "day_partition" : "2025-10-01",
  "entity_id_partition" : 1
}, {
  "day_totals" : [ {
    "code_acceptance_activity_count" : 1,
    "code_generation_activity_count" : 2,
    "daily_active_users" : 2,
    "day" : "2025-10-01",
    "enterprise_id" : "2",
    "loc_added_sum" : 38,
    "loc_deleted_sum" : 0,
    "loc_suggested_to_add_sum" : 40,
    "loc_suggested_to_delete_sum" : 0,
    "monthly_active_agent_users" : 0,
    "monthly_active_chat_users" : 0,
    "monthly_active_users" : 2,
    "pull_requests" : {
      "total_applied_suggestions" : 0,
      "total_copilot_applied_suggestions" : 0,
      "total_copilot_suggestions" : 0,
      "total_created" : 1,
      "total_created_by_copilot" : 0,
      "total_merged" : 0,
      "total_merged_created_by_copilot" : 0,
      "total_reviewed" : 1,
      "total_reviewed_by_copilot" : 0,
      "total_suggestions" : 1
    },
    "totals_by_feature" : [ {
      "code_acceptance_activity_count" : 1,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "loc_added_sum" : 38,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 40,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_ide" : [ {
      "code_acceptance_activity_count" : 1,
      "code_generation_activity_count" : 2,
      "ide" : "vscode",
      "loc_added_sum" : 38,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 40,
      "loc_suggested_to_delete_sum" : 0,
      "user_initiated_interaction_count" : 0
    } ],
    "totals_by_language_feature" : [ {
      "code_acceptance_activity_count" : 1,
      "code_generation_activity_count" : 2,
      "feature" : "code_completion",
      "language" : "unknown",
      "loc_added_sum" : 38,
      "loc_deleted_sum" : 0,
      "loc_suggested_to_add_sum" : 40,
      "loc_suggested_to_delete_sum" : 0
    } ],
    "totals_by_language_model" : [ ],
    "totals_by_model_feature" : [ ],
    "user_initiated_interaction_count" : 0,
    "weekly_active_users" : 2
  } ],
  "enterprise_id" : "2",
  "report_end_day" : "2025-10-01",
  "report_start_day" : "2025-09-04",
  "etl_id" : "green",
  "day_partition" : "2025-10-01",
  "entity_id_partition" : 2
} ]
```
