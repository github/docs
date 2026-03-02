---
title: Creating a codespace
intro: You can create a codespace for a branch in a repository to develop online.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'Anyone can create a codespace for any public repository, or for any repository owned by their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

### About codespace creation

{% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} For more information, see "[Deleting a codespace](/github/developing-online-with-codespaces/deleting-a-codespace)."

{% data reusables.codespaces.unsupported-repos %}

You cannot create a codespace in an empty repository. If your repository is empty, create a file in the repository before creating a codespace. For more information, see "[Adding a file to a repository](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)" and "[Adding a file to a repository using the command line](/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)."

The environment of the codespace you create will be based on the repository's configuration. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."

{% data reusables.codespaces.about-personalization %} For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Creating a codespace

{% data reusables.repositories.navigate-to-repo %}
2. Under the repository name, use the "Branch" drop-down menu, and select the branch you want to create a codespace for.
  ![Branch drop-down menu](/assets/images/help/codespaces/branch-drop-down.png)
3. Under the repository name, use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**.
  ![Open with Codespaces button](/assets/images/help/codespaces/open-with-codespaces-button.png)
4. If you already have a codespace for the branch, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.
  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)
