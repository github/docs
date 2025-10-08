---
title: Duplicating an issue
intro: 'To quickly create a similar issue, you can duplicate an existing open issue into the same repository or a different one.'
versions:
  feature: duplicating-an-issue
topics:
  - Issues
shortTitle: Duplicate an issue
---

To duplicate an open issue, you must have triage access to the repository that contains the original issue and to the destination repository. The destination repository must allow blank issues. See [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

When you duplicate an issue, a new issue is created with the original issue’s title, description, assignees, type, labels, milestones, and projects prefilled, as long as those fields exist or are available in the destination repository. Labels and milestones are retained if they are present in the target repository, with labels matching by name and milestones matching by both name and due date. The original issue remains unchanged.

People or teams mentioned in the original issue will not receive notifications about the duplication. The new issue will have its own URL and can be edited before being created. If you attempt to duplicate an issue to a repository where you do not have triage access, the option will not be available.

## Duplicating an open issue

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}

1. In the list of issues, click the issue you'd like to duplicate.
1. In the right sidebar, click **Duplicate issue**.
1. In the **Choose a repository** dropdown, select the destination repository. You can choose the same repository or a different one.
1. Edit the prefilled issue details as needed.
1. Click **Create issue**.

## Further reading

* [AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)
