---
title: Requiring a linear commit history
intro: You can require a linear commit history to block all merge commits from a protected branch.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Anyone with admin permissions to a repository can require a linear commit history.

### About enforcement of linear commit history

Enforcing a linear commit history prevents merge commits from being pushed to the protected branch. This means that any pull requests merged into the protected branch must use a squash merge or a rebase merge. A strictly linear commit history can help teams backtrack changes more efficiently. For more information about merge methods, see "[About pull request merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

{% data reusables.repositories.protected-branches-options %}

Before you can require a linear commit history, your repository must allow squash merging or rebase merging. For more information, see "[Configuring pull request merges](/github/administering-a-repository/configuring-pull-request-merges)."


### Enforcing a linear commit history

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Under "Protect matching branches", select **Require linear history**. ![Required linear history option](/assets/images/help/repository/required-linear-history.png)
{% data reusables.repositories.include-administrators %}
7. Click **Create**.
