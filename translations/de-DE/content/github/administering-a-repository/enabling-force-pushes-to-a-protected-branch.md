---
title: Enabling force pushes to a protected branch
intro: You can allow force pushes to a protected branch.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Anyone with admin permissions to a repository can enable force pushes.

### About force pushes to protected branches

By default, force pushes are blocked on all protected branches. When you enable force pushes to a protected branch, anyone with at least write permissions to the repository can force push to the branch, including those with admin permissions.

Enabling force pushes will not override any other branch protection rules. For example, if a branch requires a linear commit history, you cannot force push merge commits to that branch.

{% if currentVersion != "free-pro-team@latest" %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. For more information, see "[Blocking force pushes to repositories owned by a user account or organization](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

If a site administrator has blocked force pushes to the default branch only, you can still enable force pushes for any other protected branch.{% endif %}

{% data reusables.repositories.protected-branches-options %}

### Enabling force pushes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Under "Rules applied to everyone including administrators", select **Allow force pushes**.
![Allow force pushes option](/assets/images/help/repository/allow-force-pushes.png)
7. Click **Create**.
