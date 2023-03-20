---
title: Adding an existing project to GitHub using GitHub Desktop
intro: 'You can add an existing Git repository to {% data variables.product.prodname_dotcom %} using {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/contributing-to-projects/adding-an-existing-project-to-github-using-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/adding-an-existing-project-to-github-using-github-desktop
versions:
  fpt: '*'
shortTitle: Add an existing project
---
{% mac %}

{% data reusables.git.remove-git-remote %}
1. [Add the repository to GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop).
{% data reusables.desktop.publish-repository %}
1. In the "Publish Repository" window, in the "Name" field, type the desired name of the repository or use the default current local repository name.
1. Optionally, add a description for the repository.
1. Optionally, to publish a public repository, deselect **Keep this code private**.
1. Select the "Organization" dropdown menu, then either click the organization where you want to publish the repository, or, to publish the repository to your personal account, click **None**.
1. Click **Publish Repository**.

{% endmac %}

{% windows %}

{% data reusables.git.remove-git-remote %}
2. [Add the repository to GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop).
{% data reusables.desktop.publish-repository %}
4. Type the desired name of the repository in the **Name** field or use the default current local repository name.
  ![The Name field](/assets/images/help/desktop/publish-repository-name-win.png)
5. To publish a public repository, unselect **Keep this code private**.
  ![Keep this code private checkbox](/assets/images/help/desktop/publish-repository-private-checkbox-win.png)
6. Choose the organization in the **Organization** drop-down where you want to publish the repository, or select **None** to publish the repository to your personal account.
  ![Organization drop-down](/assets/images/help/desktop/publish-repository-org-dropdown-win.png)
7. Click the **Publish repository** button.
  ![The Publish repository button in the Publish repository dialog](/assets/images/help/desktop/publish-repository-dialog-button-win.png)

{% endwindows %}
