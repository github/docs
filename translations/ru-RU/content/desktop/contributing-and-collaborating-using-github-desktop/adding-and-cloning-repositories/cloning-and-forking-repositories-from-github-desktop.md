---
title: Cloning and forking repositories from GitHub Desktop
intro: 'You can use {% data variables.product.prodname_desktop %} to clone and fork repositories that exist on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### About local repositories
Repositories on {% data variables.product.prodname_dotcom %} are remote repositories. You can clone or fork a repository with {% data variables.product.prodname_desktop %} to create a local repository on your computer.

You can create a local copy of any repository on {% data variables.product.product_name %} that you have access to by cloning the repository. If you own a repository or have write permissions, you can sync between the local and remote locations. For more information, see "[Syncing your branch](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)."

When you clone a repository, any changes you push to {% data variables.product.product_name %} will affect the original repository. To make changes without affecting the original project, you can create a separate copy by forking the repository. You can create a pull request to propose that maintainers incorporate the changes in your fork into the original upstream repository. For more information, see "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)."

When you try to use {% data variables.product.prodname_desktop %} to clone a repository that you do not have write access to, {% data variables.product.prodname_desktop %} will prompt you to create a fork automatically. You can choose to use your fork to contribute to the original upstream repository or to work independently on your own project. Any existing forks default to contributing changes to their upstream repositories. You can modify this choice at any time. For more information, see "[Managing fork behavior](#managing-fork-behavior)".

You can also clone a repository directly from {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}. For more information, see "[Cloning a repository from {% data variables.product.prodname_dotcom %} to {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

### Cloning a repository

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

### Forking a repository
If you clone a repository that you do not have write access to, {% data variables.product.prodname_desktop %} will create a fork. After creating or cloning a fork, {% data variables.product.prodname_desktop %} will ask how you are planning to use the fork.

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}
{% data reusables.desktop.fork-type-prompt %}

### Managing fork behavior
You can change how a fork behaves with the upstream repository in {% data variables.product.prodname_desktop %}.

{% data reusables.desktop.open-repository-settings %}
{% data reusables.desktop.select-fork-behavior %}

### Creating an alias for a local repository
You can create an alias for a local repository to help differentiate between repositories of the same name in {% data variables.product.prodname_desktop %}. Creating an alias does not affect the repository's name on {% data variables.product.prodname_dotcom %}. In the repositories list, aliases appear in italics.

1. In the upper-left corner of {% data variables.product.prodname_desktop %}, to the right of the current repository name, click {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
2. Right-click the repository you want to create an alias for, then click **Create Alias**.
3. Type an alias for the repository.
4. Click **Create Alias**.

### Дополнительная литература
- [About remote repositories](/github/getting-started-with-github/about-remote-repositories)
