---
title: Closing an issue
intro: 'You can close an issue when bugs are fixed, feedback is acted on, or to show that work is not planned.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
---

{% note %}

**Note:** You can also close issues automatically with keywords in pull requests and commit messages. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. In the list of issues, click the issue you'd like to close.
{%- ifversion issue-close-reasons %}
1. Optionally, to change your reason for closing the issue, next to "Close issue," select {% octicon "triangle-down" aria-label="Select close issue reason" %}, then click a reason.

   ![Screenshot of the buttons at the bottom of an issue. A button, labeled with a downward triangle icon indicating a dropdown menu, is outlined in dark orange.](/assets/images/help/issues/close-issue-select-reason.png)
1. Click **Close issue**.
{%- else %}
1. At the bottom of the comment box, click **Close issue**.
{% endif %}
