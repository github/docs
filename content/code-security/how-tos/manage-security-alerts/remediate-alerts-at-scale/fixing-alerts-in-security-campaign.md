---
title: Fixing alerts in a security campaign
shortTitle: Fix alerts in campaign
intro: Learn how to find and fix alerts in a security campaign.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
product: '{% data reusables.gated-features.security-campaigns %}'
contentType: how-tos
versions:
  feature: security-campaigns
redirect_from:
  - /code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign
category:
  - Secure at scale
---

## Viewing alerts in a security campaign

When a campaign targets security alerts in a repository that you have write access to, you can navigate to the list of repository alerts in the campaign.

* Display the **{% data variables.product.prodname_security_and_quality_tab %}** tab for the repository and click one of the campaigns under "Campaigns" in the sidebar.
* If you have write access to more than one repository in the organization, display the **{% data variables.product.prodname_security_and_quality_tab %}** tab for the organization and click one of the campaigns under "Campaigns" in the sidebar.
* Alternatively, click **View security campaign** in the campaign's email notification.

This view shows the alerts in the current repository for a campaign called "SQL injection (CWE-89)" (highlighted gray) that is managed by "octocat" (outlined in dark orange).

![Screenshot of repository campaign view with "SQL injection (CWE-89)" campaign displayed and the "Campaign manager" outlined in dark orange.](/assets/images/help/security/builder-sec-campaign.png)

## Fixing alerts in a security campaign

If you want to see the code that triggered the security alert and the suggested fix, click on the alert name to show the alert view.

{% ifversion copilot %}If {% data variables.copilot.copilot_cloud_agent %} is available in the repository, the fastest way to resolve alerts is to assign them to {% data variables.product.prodname_copilot_short %}, which explores the codebase, generates a fix, validates it, and opens a pull request for you. See [Assigning alerts to {% data variables.copilot.copilot_cloud_agent %}](#assigning-alerts-to-copilot-cloud-agent) below. The following steps describe how to fix alerts yourself instead.{% endif %}

1. When you are ready to work on one or more security alerts, check that no one else is working on those alerts already. In the campaign view, git icons are displayed on alerts where a fix may already be in progress. Click an icon to display the linked work:
   * {% octicon "git-pull-request-draft" aria-hidden="Draft pull request" aria-label="git-pull-request-draft" %} an open draft pull request may fix this alert.
   * {% octicon "git-pull-request" aria-label="Pull request" %} an open pull request may fix this alert.
   * {% octicon "git-branch" aria-label="Branch" %} a branch may contain changes to fix this alert.

1. In the campaign view for the repository, select the alerts that you want to fix.{% ifversion security-campaigns-autofix %}
1. Connect the security alerts to a working branch:
   * If at least one "Autofix" suggestion is available for the selected alerts, click **Commit autofix** and commit the changes either to a new branch or to an existing branch.
   * If no autofix suggestions are available for the selected alerts, click **Create new branch** to create a new branch where you will work on fixing the alerts.{% elsif ghes %}
1. Click **Create new branch** to create a new branch where you will work on fixing the alerts.{% endif %}
1. When you have finished fixing the alerts and testing your solutions, create a pull request for your changes and request a review from the campaign manager.

> [!TIP] If you have write permission for more than one repository in the campaign, click the link in the "Campaign progress" box in your repository to show the organization-level view of the campaign. When you open a repository from this view, the campaign alerts view is displayed.

{% ifversion copilot %}

## Assigning alerts to {% data variables.copilot.copilot_cloud_agent %}

>[!NOTE] This option is currently in public preview and is subject to change. {% data variables.copilot.copilot_cloud_agent %} must be available in the repository.

Instead of fixing alerts yourself, you can select one or more alerts (up to 25) in the campaign view and assign them to {% data variables.product.prodname_copilot_short %}, which resolves the selected alerts in a single pull request and adds you as a requested reviewer. This is the same assignment flow used to fix an individual alert. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#fixing-alerts-with-copilot).

1. In the campaign view for the repository, select the alerts that you want to assign.
1. Above the list of alerts, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} Assign to {% data variables.product.prodname_copilot_short %}**.

Typically within a few minutes, {% data variables.product.prodname_copilot_short %} opens a pull request addressing the assigned alerts, with a summary of the fixes and the changes made. Once created, the pull request is shown next to the alert.

{% endif %}

{% ifversion copilot %}

## Using {% data variables.copilot.copilot_chat %} for secure coding

If you have access to {% data variables.copilot.copilot_chat_short %} then you can ask the AI questions about the vulnerability, the suggested fix, and how to test that the fix is comprehensive.

> [!TIP]
> {% data reusables.copilot.semantic-index-info %}

{% endif %}
