---
title: Cloning and forking repositories from GitHub Desktop
intro: 'You can use {% data variables.product.prodname_desktop %} to clone and fork repositories that exist on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### Cloning repositories
Repositories on {% data variables.product.prodname_dotcom %} exist as remote repositories.  You can clone public repositories owned by other people. You can clone your own repository to create a local copy on your computer and sync between the two locations.

You can also clone a repository directly from {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}. For more information, see "[Cloning a repository from {% data variables.product.prodname_dotcom %} to {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% mac %}

{% data reusables.desktop.choose-clone-repository %}
  ![Clone menu option in the Mac app](/assets/images/help/desktop/clone-file-menu-mac.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Location tabs in the Clone a repository menu](/assets/images/help/desktop/choose-repository-location-mac.png)
{% data reusables.desktop.cloning-repository-list %}
  ![Clone a repository list](/assets/images/help/desktop/clone-a-repository-list-mac.png)
4. Click **Choose...** and, using the Finder window, navigate to a local path where you want to clone the repository. ![The choose button](/assets/images/help/desktop/clone-choose-button-mac.png)
5. Click **Clone**. ![The clone button](/assets/images/help/desktop/clone-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.choose-clone-repository %}
  ![Clone menu option in the Windows app](/assets/images/help/desktop/clone-file-menu-windows.png)
{% data reusables.desktop.cloning-location-tab %}
  ![Location tabs in the Clone a repository menu](/assets/images/help/desktop/choose-repository-location-win.png)
{% data reusables.desktop.cloning-repository-list %}
  ![Clone a repository list](/assets/images/help/desktop/clone-a-repository-list-win.png)
4. Click **Choose...** and, using Windows Explorer, navigate to a local path where you want to clone the repository. ![The choose button](/assets/images/help/desktop/clone-choose-button-win.png)
5. Click **Clone**. ![The clone button](/assets/images/help/desktop/clone-button-win.png)

{% endwindows %}

### Forking repositories
To contribute to a project where you don't have write access, you can use {% data variables.product.prodname_desktop %} to create a fork of the repository. Changes on your fork don't affect the original repository. You can commit changes on your fork, then open a pull request to the original repository with your proposed changes. For more information, see "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)."

1. If you've cloned a repository where you don't have write access and try to commit changes, {% data variables.product.prodname_desktop %} will warn that "You don't have write access to **REPOSITORY**. Click **create a fork**. ![Create a fork link](/assets/images/help/desktop/create-a-fork.png)
3. Click **Fork this repository**. ![Fork this repo button](/assets/images/help/desktop/fork-this-repo-button.png)
4. To view your fork on {% data variables.product.prodname_dotcom %}, in the top right corner of {% data variables.product.prodname_dotcom %}, click your profile picture, then click **Your repositories**. ![Your repositories link](/assets/images/help/profile/your-repositories.png)
