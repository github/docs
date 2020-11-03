---
title: Enabling deletion of a protected branch
intro: You can allow anyone with write access for a repository to delete a protected branch.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

Anyone with admin permissions to a repository can enable branch deletions.

By default, you cannot delete a protected branch. When you enable deletion to a protected branch, anyone with at least write permissions to the repository can delete the branch, including those with admin permissions.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Under "Rules applied to everyone including administrators", select **Allow deletions**.
![Allow branch deletions option](/assets/images/help/repository/allow-branch-deletions.png)
7. Click **Create**.
