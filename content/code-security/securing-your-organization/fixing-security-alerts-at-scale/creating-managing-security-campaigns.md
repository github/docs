---
title: Creating and managing security campaigns
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
redirect_from:
  - /code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-tracking-security-campaigns
---

## Creating a security campaign

Security campaigns are created and managed from the **Security** tab for your organization.

You choose the alerts that you want to include in the campaign by using either:

 * **Campaign templates**: Campaign templates contain filters for the most common alert selections. {% ifversion security-campaigns-autofix %}They also all include the requirement that {% data variables.product.prodname_copilot_autofix %} is supported for all the alert types included (that is, `autofix:supported`).{% endif %}
 * **Custom filters**: Creating a campaign using custom filters lets you define your own criteria for selecting alerts for the campaign, and lets you tailor your campaign to your organization's specific needs.

{% data reusables.code-scanning.campaigns-api %}

### Create a campaign

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.code-scanning.campaigns-click %}
1. Click **Create campaign {% octicon "triangle-down" aria-hidden="true" %}**, then select one of the following options:
   * Click **From template**, then select a pre-defined campaign template from the list.
   * Click **From code scanning filters**, then add filters to define a subset of alerts for your campaign. See [Examples of useful filters](#examples-of-useful-filters).
1. Review the set of alerts to be included in the campaign, and adjust the filters as necessary. Make sure you have chosen 1000 alerts or fewer.
1. When you are satisfied with the scope of the campaign, click **Save as**, then choose whether you want to create a draft campaign, or move straight ahead to finalizing the details of the campaign before publishing it:
   * If you plan to review the scope and details of the campaign prior to launch, or seek feedback on the implementation of the campaign, click **{% octicon "issue-draft" aria-hidden="true" %} Draft campaign**.
   * If you intend to publish the campaign, and don't need a review phase, click **{% octicon "goal" aria-hidden="true" %} Publish campaign**.
1. Optionally, if you have chosen to create a draft campaign, edit, save, and review the details of the campaign:
   * Edit the "Campaign name" and "Short description" to match your campaign needs and to link to any resources that support the campaign.
   * Define a "Campaign due date" and select one or more "Campaign managers" as the primary contacts for the campaign. Campaign managers must be users or teams that are owners or security managers in the organization.
   * Optionally, provide a "Contact link", for example a link to a {% data variables.product.prodname_discussions %} or another communication channel, for contacting the campaign managers.
   * Click **Save draft**.
   * When you are ready to publish the campaign, in the top right corner, click **Review and publish**.
1. On the "Publish campaign" page, review or edit the campaign details:
   * Campaign name
   * Short description
   * Due date
   * Campaign managers
   * Contact link
1. Optionally, to create campaign issues in each repository included in the campaign, on the "Publish campaign" page, under "Automations", select the checkbox next to "Create issues for NUMBER repositories in this campaign".
1. Click **Publish campaign**.

The security campaign is created and the campaign overview page is displayed.

{% note %}

Did you successfully create a security campaign for your organization?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

### Examples of useful filters

All the template filters include the following useful filters:

* `is:open` includes only alerts that are open in the default branch.
* `autofilter:true` includes only alerts that appear to be in application code. {% ifversion security-campaigns-autofix %}
* `autofix:supported` includes only alerts that are for rules that are supported for {% data variables.product.prodname_copilot_autofix %}.{% endif %}

Once you include these core filters, you will usually want to add a filter to limit results to a specific rule name, severity, or tag. For example:

* `is:open autofilter:true {% ifversion security-campaigns-autofix %}autofix:supported {% endif %}rule:java/log-injection` to show only alerts for log injection in Java code.
* `is:open autofilter:true {% ifversion security-campaigns-autofix %}autofix:supported {% endif %}tag:external/cwe/cwe-117` to show only alerts for "CWE 117: Improper Output Neutralization for Logs". This includes log injection in Java and other languages.
* `is:open autofilter:true {% ifversion security-campaigns-autofix %}autofix:supported {% endif %}severity:critical` to show only alerts with a security severity of critical.

> [!TIP] When you enter a keyword followed by colon in the search field, a list of all valid values is displayed, for example: `tag:`.

For more information about the rules run by {% data variables.product.prodname_codeql %}{% ifversion security-campaigns-autofix %} and support for autofix{% endif %}, see [Query lists for the default query suites](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#query-lists-for-the-default-query-suites).

For more information about filtering alerts, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale#selecting-security-alerts-for-remediation) and [AUTOTITLE](/code-security/security-overview/filtering-alerts-in-security-overview).

## Launching a security campaign

{% ifversion security-campaigns-autofix %}

When you create a campaign, all the alerts are automatically submitted to {% data variables.product.prodname_copilot_autofix %} to be processed as capacity allows. This ensures that suggestions for alerts found in pull requests aren't delayed by a new campaign. In most cases, you should find that all suggestions that can be created are ready within an hour. At busy times of day, or for particularly complex alerts, it will take longer.

{% endif %}

### How developers know a security campaign has started

When a campaign is started, anyone with **write** access to a repository included in the campaign, and has subscribed to watch either "All activity" or "security alerts" in that repository, is notified.

In addition to the automatic notifications sent out, the new campaign is shown in the sidebar of the "Security" tab for each repository included. For more information about the developer experience, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign).

### How to increase engagement with the security campaign

The best way to increase engagement with a campaign is to publicize it to the teams you want to collaborate with to remediate alerts. For example, you might work with engineering managers to choose a quieter development period to run a series of security campaigns, each focused on a different type of alert, with associated training sessions. For more ideas, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale).

## Editing security campaign details

You can edit the name, description, due date, and manager for a campaign.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.code-scanning.campaigns-click %}
1. From the list of campaigns, click the name of the campaign to display the campaign tracking view.
1. In the campaign title row, click {% octicon "kebab-horizontal" aria-label="Campaign options" %} and select **{% octicon "pencil" aria-hidden="true" %} Edit campaign**.
1. In the "Edit campaign" dialog make your changes and then click **Save changes**.

The changes are made immediately.

## Closing, reopening and deleting security campaigns

There is a limit of 10 active campaigns. When a campaign is complete, or if you want to pause it, you should close it. You can still view all closed campaigns in the "Closed" campaign list, and you can reopen a closed campaign.

If you don't need to retain the campaign or its data, you can delete it.

### Close a campaign

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.code-scanning.campaigns-click %}
1. To the right of the campaign you want to close, click {% octicon "kebab-horizontal" aria-label="Campaign options" %}, then select **{% octicon "archive" aria-hidden="true" %} Close campaign**.

### Reopen a closed campaign

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.code-scanning.campaigns-click %}
1. Above the list of campaigns, click **Closed** to view the list of closed campaigns.
1. To the right of the campaign you want to reopen, click {% octicon "kebab-horizontal" aria-label="Campaign options" %}, then select **{% octicon "play" aria-hidden="true" %} Reopen campaign**.

### Delete a campaign

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.code-scanning.campaigns-click %}
1. To the right of the campaign you want to delete, click {% octicon "kebab-horizontal" aria-label="Campaign options" %}, then select **{% octicon "trash" aria-hidden="true" %} Delete campaign**.

## Next steps

* [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/tracking-security-campaigns)
