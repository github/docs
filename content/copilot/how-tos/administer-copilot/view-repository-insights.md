---
title: Viewing repository insights
shortTitle: View repository insights
intro: 'Use Repository insights to understand how your team acts on {% data variables.copilot.copilot_code-review_short %} feedback and identify opportunities to improve review practices.'
permissions: 'People with read access to the repository.'
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Copilot usage metrics
  - View metrics
  - Track Copilot usage
---

When deciding how to improve your team's review process, use Repository insights to see where {% data variables.copilot.copilot_code-review_short %} coverage is missing and which feedback developers act on. It brings review outcomes together with pull request activity, so you can consider them alongside throughput and merge times.

Use this overview to choose where to investigate unaddressed feedback, expand review coverage, or adjust review practices. These signals support those decisions, but do not prove that code is defect-free or that {% data variables.product.prodname_copilot_short %} caused an improvement.

## Prerequisites

<!-- Confirm before publication with the PM/privacy reviewers: Confirm subscription eligibility and rollout restrictions. -->

Repository insights is available for organization-owned repositories. You need read access to the repository.

The {% data variables.copilot.copilot_code-review_short %} section appears only when the organization has enabled both the {% data variables.product.prodname_copilot_short %} usage metrics policy and the {% data variables.copilot.copilot_code-review_short %} policy. The **Pull requests** section is visible to anyone who can view the page.

For information about enabling these policies, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

## Accessing Repository insights

<!-- Confirm before publication in a feature-enabled repository: The page heading "Repository insights" and section headings "Pull requests" and "Copilot code review" follow the prototype descriptions. Verify the final headings, stale-data indication, and page-level waiting state. -->

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. On the **Repository insights** page, review the **Pull requests** section for activity and merge-time context, then the **{% data variables.copilot.copilot_code-review_short %}** section for feedback outcomes.

The weekly reporting period covers seven calendar days ending on the latest fully published day. Check the dates displayed on the page. If the latest data is older than expected, the page will indicate that data is delayed.

If you see "Waiting on your data", allow a few days for data to become available. This state does not mean the repository had no activity. Monthly address-rate trends have a separate reporting period and can have less history.

For metric definitions, reporting limits, and guidance on choosing follow-up actions, see [AUTOTITLE](/copilot/reference/copilot-usage-metrics/repository-insights-metrics).
