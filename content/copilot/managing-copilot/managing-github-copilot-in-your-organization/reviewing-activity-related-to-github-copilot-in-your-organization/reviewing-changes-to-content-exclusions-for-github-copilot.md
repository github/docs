---
title: Reviewing changes to content exclusions for GitHub Copilot
shortTitle: Content exclusion changes
intro: You can monitor changes to content exclusions in your repositories and organizations.
permissions: Organization owners
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/reviewing-changes-to-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/reviewing-changes-to-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-changes-to-content-exclusions-for-github-copilot
---

{% data reusables.copilot.content-exclusions-availability-and-beta-note %}

## Reviewing changes in your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}

1. In the "Code & automation" section of the side bar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**.
{% data reusables.copilot.view-last-change-content-exclusions %}
1. Click the time of the last change.

   ![Screenshot of the last edited information. The time of change link is highlighted with a dark orange outline.](/assets/images/help/copilot/content-exclusions-last-edited-by.png)

   The "Audit log" page for the organization is displayed, showing the most recently logged occurrences of the `copilot.content_exclusion_changed` action in the repository.
{% data reusables.copilot.more-details-content-exclusion-logs %}

## Reviewing changes in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Content exclusion**.
{% data reusables.copilot.view-last-change-content-exclusions %}
1. Click the time of the last change.

   ![Screenshot of the last edited information. The time of change link is highlighted with a dark orange outline.](/assets/images/help/copilot/content-exclusions-last-edited-by.png)

   The "Audit log" page for the organization is displayed, showing the most recently logged occurrences of the `copilot.content_exclusion_changed` action.

{% data reusables.copilot.more-details-content-exclusion-logs %}
