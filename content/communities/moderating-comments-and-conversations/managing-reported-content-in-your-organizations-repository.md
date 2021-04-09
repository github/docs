---
title: Managing reported content in your organization's repository
intro: 'After a contributor reports disruptive content in a repository, repository maintainers can view and manage the report.'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - community
---

Anyone with admin permissions to a repository can view and manage reported content for the repository.

### About management of reported content

Before you can view or manage reported content, you must enable reported content for the repository. For more information, see "[Managing how contributors report abuse in your organization's repository](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)."

You can track, triage, and respond to reports of disruptive content. In the "Abuse reports" list, you can view all reports and navigate directly to each reported comment on {% data variables.product.prodname_dotcom %}.

{% data reusables.community.tools-for-moderating %}

After you finish moderating disruptive content, you can mark the report as resolved. If you decide that you're not done moderating, you can also mark the report as unresolved.

### Viewing content that a contributor reported

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
4. To the right of the reported content you'd like to view, click {% octicon "kebab-horizontal" aria-label="The edit icon" %}, then click **View content**.
  !["View content" in Edit drop-down for reported content](/assets/images/help/repository/reported-content-report-view-content.png)

### Resolving a report

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
4. To the right of the report you'd like to resolve, click {% octicon "kebab-horizontal" aria-label="The edit icon" %}, then click **Mark as resolved**.
  !["Mark as resolved" in Edit drop-down for reported content](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

### Unresolving a report

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-moderation-reported-content %}
{% data reusables.repositories.reported-content-resolved-tab %}
5. To the right of the report you'd like to unresolve, click {% octicon "kebab-horizontal" aria-label="The edit icon" %}, then click **Mark as unresolved**.
  !["Mark as unresolved" in Edit drop-down for reported content](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

### Further reading

- "[About community management and moderation](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)"
