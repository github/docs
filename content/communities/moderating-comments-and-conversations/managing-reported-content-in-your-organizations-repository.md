---
title: Managing reported content in your organization's repository
intro: 'After a contributor reports disruptive content in a repository, repository maintainers can view and manage the report.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
permissions: Anyone with admin permissions to a repository can view and manage reported content for the repository.
---

## About management of reported content

Before you can view or manage reported content, you must enable reported content for the repository. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)."

You can track, triage, and respond to reports of disruptive content. In the "Abuse reports" list, you can view all reports and navigate directly to each reported comment on {% data variables.product.prodname_dotcom %}.

{% data reusables.community.tools-for-moderating %}

After you finish moderating disruptive content, you can mark the report as resolved. If you decide that you're not done moderating, you can also mark the report as unresolved.

## Viewing content that a contributor reported

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
1. To the right of the reported content you'd like to view, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **View content**.

   ![Screenshot of a reported comment. In the upper-right corner, a kebab icon is outlined in dark orange.](/assets/images/help/repository/reported-content-kebab.png)

## Resolving a report

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
1. To the right of the report you'd like to resolve, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Mark as resolved**.

   ![Screenshot of a reported comment. In the upper-right corner, a kebab icon is outlined in dark orange.](/assets/images/help/repository/reported-content-kebab.png)

## Unresolving a report

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
{% data reusables.repositories.reported-content-resolved-tab %}
1. To the right of the report you'd like to unresolve, click {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Mark as unresolved**.

   ![Screenshot of a reported comment. In the upper-right corner, a kebab icon is outlined in dark orange.](/assets/images/help/repository/reported-content-kebab.png)

## Further reading

* "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)"
