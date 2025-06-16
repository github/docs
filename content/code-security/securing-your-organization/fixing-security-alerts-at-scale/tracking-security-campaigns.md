---
title: Tracking security campaigns
shortTitle: Track security campaigns
intro: 'You can monitor the progress of all your organization''s security campaigns, and track the status of individual campaigns.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.security-org-enable %}'
product: '{% data reusables.gated-features.security-campaigns %}'
type: how_to
versions:
  feature: security-campaigns
topics:
  - Code Security
  - Organizations
  - Security
---

## Tracking campaigns across your organization

The tracking view provides an overview of data for all open and closed campaigns. It helps you understand the impact of the campaigns, track progress through campaigns and measure success towards achieving your organization's goals.

To display the campaign tracking view, navigate to the **Security** tab for the organization, then in the left sidebar click **{% octicon "goal" aria-hidden="true" aria-label="goal" %} Campaigns**.

![Screenshot of the security campaigns overview page.](/assets/images/help/security/security-campaigns-tracking-overview.png)

The tracking view shows you a summary of:

* **Open** campaigns (total alert count)
* **Closed** campaigns (total alert count)

For both open and closed campaigns, the view breaks down the total alert count into the following alert statuses:

* **Open**: the alert is still active and has not yet been addressed.
* **In progress**: work has started to fix the alert—at least one branch or pull request has been created from the campaign view or alert page.
* **Fixed**: the alert has been resolved, either within or outside of the campaign workflow.
* **Dismissed**: the alert was reviewed but intentionally not fixed; it has been dismissed.

## Tracking a single campaign

You can similarly track how a single campaign is progressing by viewing the campaign's own tracking page.

To display the tracking page, navigate to the **Security** tab for the organization, click **{% octicon "goal" aria-hidden="true" aria-label="goal" %} Campaigns** in the left sidebar, and then select the campaign you want to view from the list of campaigns.

![Screenshot of campaign tracking view for "Testing Campaigns for CodeQL". The campaign progress is outlined in dark orange.](/assets/images/help/security/driver-sec-campaign-view.png)

The tracking view shows you a summary of:

* **Campaign progress**: how many alerts are closed (fixed or dismissed), in progress, or still left to review.
* **Status**: how the campaign is progressing towards its due date.
* **{% data variables.copilot.copilot_autofix_short %}**: number of alerts where {% data variables.copilot.copilot_autofix_short %} can generate a fix to resolve the alert.

You can also explore the campaign repositories and alerts to see where teams are engaging in the campaign, and where teams might need some extra encouragement to take part.

* **Repository details:** you can expand any repository to show the progress in alert remediation.
* **Alert details:** you can set the "Group by" option to **None** to show a list of all alerts.

You can filter both of these views to focus on a subset of repositories or alerts. Any alerts that are in progress are listed first.
