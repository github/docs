---
title: Enabling deletion of a protected branch
intro: You can allow anyone with write access for a repository to delete a protected branch.
product: '{{ site.data.reusables.gated-features.protected-branches }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Anyone with admin permissions to a repository can enable branch deletions.

By default, you cannot delete a protected branch. When you enable deletion to a protected branch, anyone with at least write permissions to the repository can delete the branch, including those with admin permissions.

{{ site.data.reusables.repositories.protected-branches-options }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.repository-branches }}
{{ site.data.reusables.repositories.add-branch-protection-rules }}
6. Under "Rules applied to everyone including administrators", select **Allow deletions**.
![Allow branch deletions option](/assets/images/help/repository/allow-branch-deletions.png)
7. Click **Create**.
