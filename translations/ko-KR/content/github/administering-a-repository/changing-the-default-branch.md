---
title: Changing the default branch
intro: 'If you have more than one branch in your repository, you can configure any branch as the default branch.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
topics:
  - Repositories
---

### About changing the default branch

You can choose the default branch for a repository. The default branch is the base branch for pull requests and code commits. For more information about the default branch, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% if currentVersion != "github-ae@latest" %}
{% note %}

**Note**: If you use the Git-Subversion bridge, changing the default branch will affect your `trunk` branch contents and the `HEAD` you see when you list references for the remote repository. For more information, see "[Support for Subversion clients](/github/importing-your-projects-to-github/support-for-subversion-clients)" and [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) in the Git documentation.

{% endnote %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

You can also rename the default branch. For more information, see "[Renaming a branch](/github/administering-a-repository/renaming-a-branch)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

{% data reusables.branches.set-default-branch %}

{% endif %}

### 빌드전 요구 사양

To change the default branch, your repository must have more than one branch. For more information, see "[Creating and deleting branches within your repository](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)."

### Changing the default branch

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. Under "Default branch", to the right of the default branch name, click {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}. ![Switch icon with two arrows to the right of current default branch name](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Use the drop-down, then click a branch name. ![Drop-down to choose new default branch](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Click **Update**. !["Update" button after choosing a new default branch](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Read the warning, then click **I understand, update the default branch.** !["Update" button after choosing a new default branch](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. In the default branch drop-down, choose the new default branch. ![Default branch dropdown selector](/assets/images/help/repository/repository-options-defaultbranch.png)
1. Click **Update**.

{% endif %}
