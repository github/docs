---
title: Cloning and forking repositories from GitHub Desktop
intro: 'You can use {% data variables.product.prodname_desktop %} to clone and fork repositories that exist on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
  - /desktop/guides/contributing/cloning-a-repository-from-github-desktop
versions:
  feature: desktop
shortTitle: Clone & fork from Desktop
---
## About local repositories

Repositories on {% data variables.product.prodname_dotcom %} are remote repositories. You can clone or fork a repository with {% data variables.product.prodname_desktop %} to create a local repository on your computer.

You can create a local copy of any repository on {% data variables.product.product_name %} that you have access to by cloning the repository. If you own a repository or have write permissions, you can sync between the local and remote locations. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop)."

When you clone a repository, any changes you push to {% data variables.product.product_name %} will affect the original repository. To make changes without affecting the original project, you can create a separate copy by forking the repository. You can create a pull request to propose that maintainers incorporate the changes in your fork into the original upstream repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

When you try to use {% data variables.product.prodname_desktop %} to clone a repository that you do not have write access to, {% data variables.product.prodname_desktop %} will prompt you to create a fork automatically. You can choose to use your fork to contribute to the original upstream repository or to work independently on your own project. Any existing forks default to contributing changes to their upstream repositories. You can modify this choice at any time. For more information, see "[Managing fork behavior](#managing-fork-behavior)".

You can also clone a repository directly from {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)".

## Cloning a repository

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

## Forking a repository

You can fork a repository on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_desktop %}. For information about forking on {% data variables.product.prodname_dotcom_the_website %}, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?tool=webui)."

{% data reusables.desktop.forking-a-repo %}

## Managing fork behavior

You can change how a fork behaves with the upstream repository in {% data variables.product.prodname_desktop %}.

{% data reusables.desktop.open-repository-settings %}
{% data reusables.desktop.select-fork-behavior %}

## Creating an alias for a local repository

You can create an alias for a local repository to help differentiate between repositories of the same name in {% data variables.product.prodname_desktop %}. Creating an alias does not affect the repository's name on {% data variables.product.prodname_dotcom %}. In the repositories list, aliases appear in italics.

1. In the upper-left corner of {% data variables.product.prodname_desktop %}, to the right of the current repository name, click {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
1. Right-click the repository you want to create an alias for, then click **Create Alias**.
1. Type an alias for the repository.
1. Click **Create Alias**.

## Further reading

* [About remote repositories](/get-started/getting-started-with-git/about-remote-repositories)
