---
title: Metrics data properties for GitHub Copilot
shortTitle: Metrics data
intro: See how {% data variables.product.company_short %} calculates properties from APIs and reports.
versions:
  feature: copilot
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

## `last_activity_at`

> [!NOTE] This data is in {% data variables.release-phases.public_preview %} and subject to change.

The timestamp of a user's most recent interaction with {% data variables.product.prodname_copilot_short %} functionality.

### Surfaces

This property is consistent across the following surfaces:

* The CSV report downloaded from the "Access management" page (see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-user-activity-data))
* The [AUTOTITLE](/rest/copilot/copilot-user-management)

### Calculation

The following interactions count as activity:

* Receiving a code suggestion in an IDE
* Chatting with {% data variables.copilot.copilot_chat_short %} in an IDE
* Generating a pull request summary
* Interacting with {% data variables.copilot.copilot_chat_short %} on {% data variables.product.company_short %}
* Interacting with {% data variables.product.prodname_copilot_short %} on a mobile device
* Interacting with {% data variables.copilot.copilot_chat_short %} for CLI

The tracked events come from both client- and server-side telemetry, ensuring the timestamp is durable if network conditions affect client-side telemetry.

Processing new telemetry events and updating a user's `last_activity_at` date can take up to 24 hours. Users must have telemetry enabled in their IDE for their usage to be reflected in `last_activity_at`.

### Retention period

* The retention period for `last_activity_at` data is 90 days. This cannot be modified.
* After 90 days of no new activity, a user's `last_activity_at` value is set to `nil`.

For more information, see [Updating retention period for `last_activity_at` values on the {% data variables.product.prodname_copilot_short %} user management API to 90 days](https://github.blog/changelog/2025-01-17-updating-retention-period-for-last_activity_at-values-on-the-user-management-api-public-preview-to-90-days/) on {% data variables.product.prodname_blog %}.

## {% data variables.product.prodname_copilot_short %} activity report

The {% data variables.product.prodname_copilot_short %} activity report shows user activity data for an organization or enterprise.

Data in the report refreshes automatically every 30 minutes.

### Fields

| Field | Description |
|-------|-------------|
| `report_time` | UTC timestamp when the report was generated |
| `login` | {% data variables.product.company_short %} username of the {% data variables.product.prodname_copilot_short %} user |
| `last_authenticated_at` | UTC timestamp of the user's most recent authentication |
| `last_activity_at` | UTC timestamp of the user's most recent {% data variables.product.prodname_copilot_short %} interaction |
| `last_surface_used` | The {% data variables.product.prodname_copilot_short %} feature used most recently:<br><ul><li>**IDE**: Editor name and version (e.g. "{% data variables.product.prodname_vscode_shortname %} 1.89.1")</li><li>**{% data variables.product.prodname_dotcom_the_website %}**: Feature name (e.g., "{% data variables.copilot.copilot_chat_short %}")</li><li>**Unspecified**: When IDE details are unavailable or no recent activity exists</ul> |

### Retention period

Activity and authentication data are retained for a rolling 90-day period, consistent with the `last_activity_at` field.

### Included features

The activity report provides visibility into usage of all generally available (GA) {% data variables.product.prodname_copilot %} features in the IDE, on {% data variables.product.company_short %}, in {% data variables.product.prodname_cli %}, and on {% data variables.product.prodname_mobile %}.

#### IDE features

* Inline suggestions
* {% data variables.copilot.next_edit_suggestions_caps %}
* {% data variables.copilot.copilot_chat_short %}
* Agent mode
* {% data variables.copilot.copilot_edits_short %} in {% data variables.product.prodname_vscode_shortname %}

#### {% data variables.product.company_short %} features

* {% data variables.copilot.copilot_chat_short %}
* {% data variables.copilot.copilot_cloud_agent %}
* {% data variables.product.prodname_copilot_short %} for Docs
* {% data variables.copilot.copilot_for_prs %}
* {% data variables.copilot.copilot_code-review_short %}

### Limitations

Telemetry from some third-party IDEs may be incomplete, particularly when users run older versions. For version requirements and troubleshooting guidance, see [AUTOTITLE](/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics).

The activity report may exclude usage of {% data variables.product.prodname_copilot %} features that are not yet generally available (GA). Currently, the following feature is not fully recorded:

* {% data variables.copilot.copilot_spaces %}
