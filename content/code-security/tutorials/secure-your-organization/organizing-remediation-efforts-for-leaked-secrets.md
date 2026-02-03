---
title: Organizing remediation efforts for leaked secrets
shortTitle: Organize leak remediation
intro: Systematically organize and manage the remediation of leaked secrets using security campaigns and alert assignments.
permissions: Organization owners, security managers, and users with the **admin** role
allowTitleToDifferFromFilename: true
versions:
  feature: security-campaigns
topics:
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
contentType: tutorials
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/organizing-remediation-efforts-for-leaked-secrets
---

## Introduction

In this tutorial, you'll organize remediation efforts for leaked secrets. You'll learn how to:

* Create security campaigns to track remediation work
* Assign alerts based on ownership
* Monitor remediation progress
* Communicate with stakeholders

## Prerequisites

* You must have both {% data variables.product.prodname_GH_secret_protection %} and {% data variables.product.prodname_secret_scanning %} enabled for your organization. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/protect-your-secrets).
* You must have existing {% data variables.product.prodname_secret_scanning %} alerts available.

## Step 1: Review your {% data variables.secret-scanning.alerts %}

Before taking action, you need to understand the current state of your organization's security alerts.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the left sidebar, under "Alerts", click the  {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} symbol to the right of **{% data variables.product.prodname_secret_scanning_caps %}**.
1. In the dropdown list, select `Default`. `Default` relates to supported patterns and specified custom patterns.
1. Alternatively, you can select `Generic` to review unstructured secrets like passwords. However, generic patterns typically produce more false positives than default patterns, so consider reviewing these alerts after addressing higher-priority leaks.
1. Review the total number of open alerts and repositories affected.
1. Use filters to identify the most urgent alerts and prioritize your remediation efforts.
   * To show leaks in **public** repositories, use `publicly-leaked`.
   * To show secret leaks found in **more than one repository** within the same organization or enterprise, use `is:multi-repository`.
   * To show secrets that are still **valid**, use `validity:active`.
   * To filter by specific **service** credentials (AWS, Azure, {% data variables.product.github %}), use `provider:`.
   * To filter by specific **token types**, use `secret-type:`.

1. Optionally, in the sidebar under "Metrics," click **{% data variables.product.prodname_secret_scanning_caps %}** to see:
   * Secret types that have been blocked or bypassed most frequently
   * Repositories with the most blocked pushes or bypasses

## Step 2: Create a security campaign

You can set up a security campaign to organize and track your remediation work across repositories.

1. Navigate to your organization and click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security**.
1. On the left panel, select **{% octicon "goal" aria-hidden="true" aria-label="goal" %} Campaigns**.
1. Click **Create campaign {% octicon "triangle-down" aria-hidden="true" %}**, then either:
   * Select a pre-defined Secrets campaign template.
   * Use custom filters to target specific alerts (for example, `is:open provider:azure` or `is:open validity:active`).
1. Review the alerts (maximum 1000) and adjust filters if needed.
1. Click **Save as** and choose **Publish campaign**.
1. Fill out your campaign information, then click **Publish campaign**.

## Step 3: Assign alerts to team members

After creating your campaign, you'll want to assign individual alerts to the developers responsible for fixing them.

1. On your campaign page, click {% octicon "chevron-right" aria-label="Toggle to expand or collapse the repository view" aria-hidden="true" %} to expand a repository and view its alerts.
1. Click an alert to open its details page.
1. In the right sidebar, click **Assignees**.
1. Select a developer you want to fix the alert. Typically, this is the person who committed the secret or the repository administrator where the leak is detected. They must have write access.

## Step 4: Monitor remediation progress

Once alerts are assigned, you need to regularly track your campaign's progress to ensure timely completion.

1. On your campaign page, review the campaign summary. You'll see:
   * **Campaign progress**: How many alerts are closed (fixed or dismissed) or still left to review
   * **Status**: How many days until the campaign's due date
1. You can explore campaign details:
   * Expand any repository to see its progress in alert remediation.
   * Set **Group by** to **None** to show a list of all alerts.
   * Use filters to focus on specific repositories or alerts.
1. Identify areas needing attention based on repositories with the most open alerts or no recent progress, then reach out to support those repository maintainers or assignees.

## Step 5: Communicate with stakeholders

Throughout the remediation process, you should keep stakeholders informed with regular progress updates. You can use information from your campaign dashboard to help you generate these updates.

1. Navigate to the campaign dashboard.
1. Identify the information you want to include in your reports. Consider these key metrics:
   * Alerts resolved this week
   * Remaining open alerts
   * On-track vs. at-risk items
   * Notable achievements or blockers
1. Incorporate the metrics into your update, then distribute via email, Slack, Teams, or security meetings.

## Step 6: Document remediation procedures

Finally, you should create standardized procedures to make future remediation efforts more efficient.

1. Develop secret-type-specific guides. For example:
   * **AWS credentials**: How to rotate access keys and update services
   * **{% data variables.product.github %} tokens**: How to revoke and regenerate {% data variables.product.pat_generic_title_case_plural %}
   * **API keys**: Service-specific rotation procedures
   * **Database credentials**: Safe rotation without service disruption
1. Create a remediation checklist.
   1. Verify the secret is actually leaked.
   1. Determine if the secret is still active.
   1. Revoke or rotate the compromised secret.
   1. Update all systems using the old secret.
   1. Test that systems function with new credentials.
   1. Document the incident and remediation steps.
   1. Mark the alert as resolved.
1. Establish escalation paths.
   * Define when to escalate to security leadership.
   * Identify subject matter experts for different secret types.
   * Create incident response procedures for critical leaks.
