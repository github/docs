---
title: Viewing and managing AI Scan alerts on your repository''s default branch
shortTitle: 'Manage {% data variables.product.prodname_ai_scan %} backlog alerts'
intro: 'Run an {% data variables.product.prodname_ai_scan %}, review the alerts in your {% data variables.product.prodname_code_scanning %} backlog, and check fixes for security vulnerabilities.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
versions:
  feature: ai-scan-for-repositories
contentType: how-tos
category:
  - Find and fix code vulnerabilities
---

> [!NOTE]
> {% data reusables.code-scanning.ai-scan-for-repositories-preview %}

## Prerequisites

{% data variables.product.prodname_ai_scan_for_repositories %} must be enabled for your repository. See [AUTOTITLE](/code-security/concepts/code-scanning/ai-scan-for-repositories#enabling-ai-scan-for-repositories).

## Running a scan

Scans analyze your repository's default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. In the top right corner, select the **{% data variables.product.prodname_ai_scan %}** dropdown.
1. From the dropdown, to the right of **Standard scan**, click to start the scan.
1. Wait for the scan to complete.

## Viewing {% data variables.product.prodname_ai_scan %} alerts

When the scan finishes, its findings appear in the {% data variables.product.prodname_code_scanning %} alert list. Filter the list by the **{% data variables.product.prodname_ai_scan %}** tool to review them.

Use the existing alert assessment and remediation workflows:

* To review and prioritize findings, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).
* To fix alerts manually or with {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts).

## Checking fixes and closing alerts

After a potential fix is merged into the default branch, repeat the steps in [Running a scan](#running-a-scan). Merging a fix does not automatically trigger another {% data variables.product.prodname_ai_scan %}.

During {% data variables.release-phases.public_preview %}, an alert only closes automatically after a new scan if the fix changes the exact line of code that triggered the alert. Otherwise, you must manually close the alert.