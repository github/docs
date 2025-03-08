---
title: Creating and tracking security campaigns
shortTitle: Create security campaigns
intro: 'You can manage security campaigns directly from the security overview for your organization.'
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

{% data reusables.security-campaigns.preview-note %}

## Creating a security campaign

Security campaigns are created and managed from the **Security** tab for your organization. You choose the alerts to include in a campaign by selecting a campaign template from the sidebar of the "Overview" dashboard or by filtering the alerts displayed on the {% data variables.product.prodname_code_scanning %} alerts view for your organization.

For more information about filtering alerts, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale#selecting-security-alerts-for-remediation) and [AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview).

### Creating a campaign from a template

The campaign templates contain filters for the most common alert selections. {% ifversion security-campaigns-autofix %}They also all include the requirement that {% data variables.product.prodname_copilot_autofix %} is supported for all the alert types included (that is, `autofix:supported`).{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the left sidebar, next to "Campaigns", click the {% octicon "plus" aria-label="New campaign" %} icon to start creating a campaign.
1. Select one of the pre-defined filter templates to open a "New campaign from TEMPLATE_NAME template" dialog box.
1. If the message "This looks like a big campaign" is displayed, click **Back to filters** to display the {% data variables.product.prodname_code_scanning %} alerts view with the campaign template filter shown.
   1. Add further filters to reduce the number of alerts shown, for example, filtering by "Team" or by custom property.
   1. When there are 1000 alerts or fewer, click **Create campaign** to redisplay the "New campaign" dialog.

   Alternatively, you can click **Continue creating a campaign** and create the campaign. {% data reusables.security-campaigns.too-many-alerts %}

{% data reusables.security-campaigns.campaign-configuration %}

The security campaign is created and the campaign overview page is displayed.

### Creating a campaign using custom filters

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the left sidebar, under "Alerts" click **{% octicon "codescan" aria-hidden="true" %} {% data variables.product.prodname_code_scanning_caps %}** to show the alerts view.
1. Add filters to select a subset of alerts for your campaign. When you have chosen 1000 alerts or fewer, you are ready to create a campaign.
1. Above the table of alerts, click **Create campaign** to start creating a campaign.
1. If the message "This looks like a big campaign" is displayed, click **Back to filters** to display the {% data variables.product.prodname_code_scanning %} alerts view with your existing filters.
   1. Add further filters to reduce the number of alerts shown, for example, filtering by "Team" or by custom property.
   1. When there are fewer than 1000 alerts, click **Create campaign** to redisplay the "New campaign" dialog.

   Alternatively, you can click **Continue creating a campaign** and create the campaign. {% data reusables.security-campaigns.too-many-alerts %}

{% data reusables.security-campaigns.campaign-configuration %}

### Examples of useful filters

All the template filters include the following useful filters:

* `is:open` includes only alerts that are open in the default branch.
* `autofilter:true` includes only alerts that appear to be in application code. {% ifversion security-campaigns-autofix %}
* `autofix:supported` includes only alerts that are for rules that are supported for {% data variables.product.prodname_copilot_autofix %}.{% endif %}

Once you include these core filters, you will usually want to add a filter to limit results to a specific rule name, severity, or tag. For example:

* `is:open autofilter:true {% ifversion security-campaigns-autofix %}autofix:supported {% endif %}rule:java/log-injection` to show only alerts for log injection in Java code.
* `is:open autofilter:true {% ifversion security-campaigns-autofix %}autofix:supported {% endif %}tag:external/cwe/cwe-117` to show only alerts for "CWE 117: Improper Output Neutralization for Logs". This includes log injection in Java and other languages.
* `is:open autofilter:true {% ifversion security-campaigns-autofix %}autofix:supported {% endif %}severity:critical` to show only alerts with a security severity of critical

> [!TIP] When you enter a keyword followed by colon in the search field, a list of all valid values is displayed, for example: `tag:`.

For more information about the rules run by {% data variables.product.prodname_codeql %}{% ifversion security-campaigns-autofix %} and support for autofix{% endif %}, see [Query lists for the default query suites](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#query-lists-for-the-default-query-suites).

## Launching a security campaign

{% ifversion security-campaigns-autofix %}

When you create a campaign all the alerts are automatically submitted to {% data variables.product.prodname_copilot_autofix %} to be processed as capacity allows. This ensures that suggestions for alerts found in pull requests aren't delayed by a new campaign. In most cases, you should find that all suggestions that can be created are ready within an hour. At busy times of day, or for particularly complex alerts, it will take longer.

{% endif %}

### How developers know a security campaign has started

When a campaign is started, anyone with **write** access to a repository included in the campaign, and who and has subscribed to watch either "All activity" or "security alerts" in that repository, is notified.

> [!NOTE] During the {% data variables.release-phases.public_preview %}, notifications are only sent to users who have email notification enabled.

In addition to the automatic notifications sent out, the new campaign is shown in the sidebar of the "Security" tab for each repository included. For more information about the developer experience, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign).

### How to increase engagement with the security campaign

The best way to increase engagement with a campaign is to publicize it to the teams you want to collaborate with to remediate alerts. For example, you might work with engineering managers to choose a quieter development period to run a series of security campaigns, each focused on a different type of alert, with associated training sessions. For more ideas, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale).

## Tracking security campaigns

When you create a campaign, the campaign tracking view is displayed and the campaign is listed in the sidebar of the **Security** tab for the organization. You can redisplay the campaign tracking view at any time by selecting it in the sidebar under "Campaigns".

![Screenshot of campaign tracking view for "Testing Campaigns for CodeQL". The campaign progress is outlined in dark orange.](/assets/images/help/security/driver-sec-campaign-view.png)

### Security campaign alert statuses

The summary at the top of the campaign view reports the number of alerts closed, open, and in progress.

* **In progress** when at least one branch or pull request is created to fix the alert through the campaign view or the alert page.
* **Closed** when the alert is fixed or dismissed, even if the development work was done outside the campaign framework.

### Security campaign views

You can explore the campaign repositories and alerts to see where teams are engaging in the campaign, and where teams might need some extra encouragement to take part.

* **Repository details:** you can expand any repository to show the progress in alert remediation.
* **Alert details:** you can set the "Group by" option to **None** to show a list of all alerts.

You can filter both of these views to focus on a subset of repositories or alerts. Any alerts that are in progress are listed first.

## Editing security campaign details

You can edit the name, description, due date, and manager for a campaign. This is particularly useful if the current campaign manager is on leave and you need to define a new contact for developers.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Campaigns" click the name of the campaign to display the campaign tracking view.
1. In the campaign title row, click {% octicon "kebab-horizontal" aria-label="Campaign options" %} and select **Edit campaign**.
1. In the "Edit campaign" dialog make your changes and then click **Save changes**.

The changes are made immediately.

## Closing or deleting security campaigns

There is a limit of 10 active campaigns. When a campaign is complete, or if you want to pause it, you should close it. When you close a campaign, it's no longer displayed for developers in the repository **Security** tab but you can still display the campaign tracking view to develop best practice. In addition, you can reopen a closed campaign from the "Closed campaigns" view, which is accessible from the sidebar in the **Security** tab of the organization.

If you open a campaign for testing, you may prefer to delete the campaign. This deletes the campaign and all associated data entirely.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Campaigns" click the name of the campaign to display the campaign tracking view.
1. In the campaign title row, click {% octicon "kebab-horizontal" aria-label="Campaign options" %} and select your required option:
   * **Close campaign** to remove it from the active campaigns list and display it on the Closed campaigns view.
   * **Delete campaign** to delete the campaign permanently. In the "Delete campaign" dialog, click **Delete** to confirm that you want to delete the campaign.
