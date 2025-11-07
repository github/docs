---
title: Metrics data properties for GitHub Copilot
shortTitle: Metrics data
intro: See how GitHub calculates properties from APIs and reports.
versions:
  feature: copilot
category:
  - Learn about Copilot
topics:
  - Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

## `last_activity_at`

> [!NOTE] This data is in {% data variables.release-phases.public_preview %} and subject to change.

The timestamp of a user's most recent interaction with {% data variables.product.prodname_copilot_short %} functionality.

### Surfaces

This property is consistent across the following surfaces:

* The CSV report downloaded from the "Access management" page (see [AUTOTITLE](/copilot/how-tos/administer/organizations/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization))
* The [AUTOTITLE](/rest/copilot/copilot-user-management)

### Calculation

The following interactions count as activity:

* Receiving a code suggestion in an IDE
* Chatting with {% data variables.copilot.copilot_chat_short %} in an IDE
* Creating or updating a knowledge base
* Generating a pull request summary
* Interacting with {% data variables.copilot.copilot_chat_short %} in GitHub
* Interacting with Copilot on a mobile device
* Interacting with {% data variables.copilot.copilot_chat_short %} for CLI

The tracked events come from both client- and server-side telemetry, ensuring the timestamp is durable if network conditions affect client-side telemetry.

Processing new telemetry events and updating a user's `last_activity_at` date can take up to 24 hours. Users must have telemetry enabled in their IDE for their usage to be reflected in `last_activity_at`.

### Retention period

* The retention period for `last_activity_at` data is 90 days. This cannot be modified.
* After 90 days of no new activity, a user's `last_activity_at` value is set to `nil`.

For more information, see [Updating retention period for `last_activity_at` values on the Copilot user management API to 90 days](https://github.blog/changelog/2025-01-17-updating-retention-period-for-last_activity_at-values-on-the-user-management-api-public-preview-to-90-days/) on {% data variables.product.prodname_blog %}.

## Copilot activity report

The Copilot activity report shows user activity data for an organization or enterprise.

Data in the report refreshes automatically every 30 minutes.

### Fields

| Field | Description |
|-------|-------------|
| `report_time` | UTC timestamp when the report was generated |
| `login` | GitHub username of the Copilot user |
| `last_authenticated_at` | UTC timestamp of the user's most recent authentication |
| `last_activity_at` | UTC timestamp of the user's most recent Copilot interaction |
| `last_surface_used` | The Copilot feature used most recently:<br><ul><li>**IDE**: Editor name and version (e.g. "VS Code 1.89.1")</li><li>**GitHub.com**: Feature name (e.g., "Copilot Chat")</li><li>**Unspecified**: When IDE details are unavailable or no recent activity exists</ul> |

### Retention period

Activity and authentication data are retained for a rolling 90-day period, consistent with the `last_activity_at` field.

### Included features

The activity report provides visibility into usage of all generally available (GA) GitHub Copilot features in the IDE, on GitHub, in GitHub CLI, and on GitHub Mobile.

#### IDE features

* Code completions
* {% data variables.copilot.next_edit_suggestions_caps %}
* {% data variables.copilot.copilot_chat_short %}
* Agent mode
* {% data variables.copilot.copilot_edits_short %} in VS Code

#### GitHub features

* {% data variables.copilot.copilot_chat_short %}
* {% data variables.copilot.copilot_coding_agent %}
* Copilot for Docs
* Knowledge base management
* {% data variables.copilot.copilot_for_prs %}
* {% data variables.copilot.copilot_code-review_short %}

### Limitations

There is a possibility that {% data variables.product.github %} lacks consistent telemetry from some third party IDEs outside of VS Code (such as JetBrains and Xcode). Users should ensure they're running the latest version of their IDE.

The activity report may exclude usage of {% data variables.product.prodname_copilot %} features that are not yet generally available (GA). Currently, the following features are not fully recorded:

* {% data variables.copilot.copilot_spaces %}
* Copilot Spark
