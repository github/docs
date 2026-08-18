---
title: Participating in a code security campaign
shortTitle: Participate in campaigns
intro: If you've been assigned alerts as part of a security campaign, this guide explains what campaigns are, what to expect, and how to resolve alerts effectively.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
product: '{% data reusables.gated-features.security-campaigns %}'
contentType: tutorials
versions:
  feature: security-campaigns
redirect_from:
  - /code-security/code-scanning/managing-code-scanning-alerts/best-practices-for-participating-in-a-security-campaign
category:
  - Secure at scale
---

## What is a code security campaign?

A code security campaign is a focused effort to remediate a defined group of {% data variables.product.prodname_code_scanning %} alerts across one or more repositories.

Campaigns are created by organization owners or security managers and typically target alerts detected in the default branches of repositories. If you’re participating in a campaign, you’ve been asked to help resolve some of these alerts.

## What are the benefits of participating in a campaign?

In addition to reducing risk in your organization’s codebase, alerts in a security campaign have several other benefits compared with fixing another alert in your repository.

* You have a campaign manager on the security team to collaborate with and a specific contact link for discussing campaign activities.
* You know that you are fixing a security alert that is important to the company.
* Potentially, you may have access to targeted training materials.{% ifversion copilot %}
* If {% data variables.copilot.copilot_cloud_agent %} is available, you can assign alerts to {% data variables.product.prodname_copilot_short %} and it resolves them for you in a pull request. Otherwise, a {% data variables.copilot.copilot_autofix %} suggestion is already available as a starting point.
* If you have access to {% data variables.copilot.copilot_chat %}, you can ask questions about the alert and the suggested fix.{% endif %}
* You are improving and demonstrating your knowledge of secure coding.

Participating in a campaign helps reduce risk in your organization’s codebase while strengthening your secure coding skills.

## 1. Learn about campaigns

Start by reviewing campaign updates and deadlines so you can plan your work effectively.

### Notification settings

You'll automatically receive email updates about security campaigns for any repositories you have **write** access to, so you can stay informed about relevant updates.

{% data reusables.security.alert-assignee-mention %}

### View campaign details

When you open the **{% data variables.product.prodname_security_and_quality_tab %}** tab for a repository with one or more campaign alerts, you can see the campaign name in the sidebar of the view. Click the campaign name to see the list of alerts included in the campaign and summary information on how the campaign is progressing.

### Campaign-generated {% data variables.product.prodname_github_issues %}

Some campaigns automatically create {% data variables.product.prodname_github_issues %} for each repository that detail the campaign managers, contact URL, and due date.

Use this issue to coordinate work, track progress, and keep stakeholders aligned. For example, you might use the issue to:

* Add the issue to project boards
* Add assignees
* Create sub-issues or tasklists

## 2. Build context before applying fixes

Your security team may provide you with specific training ahead of participating in a campaign, so that you feel equipped to address the alerts included in the campaign.

If no formal training program is available, you can request that the campaign manager shares information on:

* Types of security vulnerabilities included in the campaign
* Examples of how to fix them
* How to test the fixes

In addition, there are external resources for understanding common security issues:

* The **OWASP Foundation** provides many resources for learning about the most common vulnerabilities, see [About the OWASP Foundation](https://owasp.org/about/).
* The **MITRE Corporation** maintains a detailed list of common weaknesses, see [About CWE](https://cwe.mitre.org/about/index.html).

## 3. Collaborate early and often

A security campaign will generally include a contact URL, which might link you to the campaign manager, an open forum (such as a {% data variables.product.github %} Discussion), or a website of resources. You should use this space to ask questions about the campaign or specific alerts, find useful resources, and share knowledge.

To find the contact URL:

1. Open the **{% data variables.product.prodname_security_and_quality_tab %}** tab for your repository.
1. On the left sidebar, click the name of the campaign you are participating in.
1. On the campaign tracking page, to the right of the campaign manager's name, click **{% octicon "comment" aria-hidden="true" aria-label="comment" %}**.

## 4. Group alerts strategically

Tackle similar alerts together to build momentum, reduce context switching, and develop a deeper understanding of the underlying issue. As you gain confidence and efficiency in resolving a specific type of alert, it makes it easier and faster for you to resolve subsequent alerts.

{% ifversion copilot %}

## 5. Resolve alerts with the help of {% data variables.product.prodname_copilot_short %}

You can leverage {% data variables.product.prodname_copilot_short %} to help resolve alerts in a security campaign. Depending on the features enabled in your repository, you may have access to {% data variables.copilot.copilot_autofix_short %} suggestions and {% data variables.copilot.copilot_chat_short %}.

{% ifversion code-scanning-autofix %}

### Autofix for {% data variables.product.prodname_code_scanning %} alerts

If {% data variables.copilot.copilot_cloud_agent %} is enabled in the repository, you can select one or more alerts in the campaign view and assign them to {% data variables.product.prodname_copilot_short %}. {% data variables.copilot.copilot_cloud_agent %} explores the codebase, generates fixes, validates the changes, and opens a single pull request for the selected alerts. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-cloud-agent).

If {% data variables.copilot.copilot_cloud_agent %} isn't enabled in the repository, {% data variables.copilot.copilot_autofix_short %} is automatically triggered for alerts included in a campaign, so a fix is generated for you where possible. Commit the suggested fix to resolve the alert, then verify that CI is still passing. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign).{% endif %}

### {% data variables.copilot.copilot_chat_short %}

You can ask {% data variables.copilot.copilot_chat_short %} for help in understanding the vulnerability, the suggested fix, and how to test that the fix is comprehensive. To access {% data variables.copilot.copilot_chat_short %}, navigate to [https://github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).

Alternatively, when viewing a specific alert, in the top right corner of the page, click the {% data variables.copilot.copilot_chat_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) to open a chat window, and ask {% data variables.product.prodname_copilot_short %} questions about the alert.

For example:

   ```text copy

   Explain how this alert introduces a vulnerability into the code.

   ```

If you don't already have access to {% data variables.copilot.copilot_chat_short %} through your organization{% ifversion ghec %} or enterprise{% endif %}, you can sign up to {% data variables.copilot.copilot_free %}. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-free/accessing-github-copilot-free).

{% endif %}

## Next steps

* [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign)
