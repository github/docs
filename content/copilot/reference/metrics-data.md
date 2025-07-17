---
title: Metrics data properties for GitHub Copilot
shortTitle: Metrics data
intro: 'See how GitHub calculates properties from APIs and reports.'
versions:
  feature: copilot
topics:
  - Copilot
allowTitleToDifferFromFilename: true
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
* Chatting with Copilot Chat in an IDE
* Creating or updating a knowledge base
* Creating a pull request summary
* Interacting with Copilot Chat in GitHub
* Interacting with Copilot on a mobile device
* Interacting with Copilot Chat for CLI

The tracked events come from both client- and server-side telemetry, ensuring the timestamp is durable if network conditions affect client-side telemetry.

Processing new telemetry events and updating a user's `last_activity_at` date can take up to 24 hours. Users must have telemetry enabled in their IDE for their usage to be reflected in `last_activity_at`.

### Retention period

* The retention period for `last_activity_at` data is 90 days. This cannot be modified.
* After 90 days of no new activity, a user's `last_activity_at` value is set to `nil`.

For more information, see [Updating retention period for `last_activity_at` values on the Copilot user management API to 90 days](https://github.blog/changelog/2025-01-17-updating-retention-period-for-last_activity_at-values-on-the-user-management-api-public-preview-to-90-days/) on {% data variables.product.prodname_blog %}.
