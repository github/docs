---
title: Erstellen eines Codespace
intro: 'Du kannst einen Codespace in einem Repository-Branch erstellen, um Online zu entwickeln.'
permissions: 'Anyone can create a codespace for any public repository, or for any repository owned by their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Über die Codespace Erstellung

You can create a codespace on either {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.codespaces-are-personal %}

Codespaces are associated with a specific branch of a repository and the repository cannot be empty. {% data reusables.codespaces.concurrent-codespace-limit %} For more information, see "[Deleting a codespace](/github/developing-online-with-codespaces/deleting-a-codespace)."


When you create a codespace, a number of steps happen to enable full access to your development environment.

- Resources such as a VM and storage for your container are assigned. A new VM is created every time you create or start a codespace to ensure that you always have the latest versions and security patches.
- {% data variables.product.prodname_codespaces %} recieves information about your repository, branch, commits, your public dotfiles repository, and any secrets that you have created.
- {% data variables.product.prodname_codespaces %} executes a shallow clone of the repository.
- If you have one in your repository, {% data variables.product.prodname_codespaces %} runs the `devcontainer.json` file. Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Projekt konfigurieren](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."
- Your Docker container, `docker-compose`, or other initialization is run.
- At this point, the codespace is marked as available and you can connect.
- Once the codespace is made available, depending on the commands in the devcontainer, the codespace will continue with some set up.
  - The codespace shares ports added in the `devcontainer.json` file.
  - The codespace runs anything specified in `postCreateCommand`.
  - {% data variables.product.prodname_codespaces %} clones your dotfiles repository to the codespaces environment and looks for an install file. For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."
  - Finally, the codespace does a full clone of the repo so you have full access to it.


{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Erstellen eines Codespace

{% data reusables.repositories.navigate-to-repo %}
2. Benutze das „Branch"-Dropdownmenü unterhalb des Repository-Namens und wähle den Branch, für den Du einen Codespace erstellen willst.

  ![Dropdownmenü „Branch"](/assets/images/help/codespaces/branch-drop-down.png)

3. Benutze das {% octicon "download" aria-label="The download icon" %} **Code**-Dropdownmenü unterhalb des Repository-Namens und wähle **Open with Codespaces** (Eröffnen mit Codespaces).

  ![Schaltfläche „Open with Codespaces" (Eröffnen mit Codespaces)](/assets/images/help/codespaces/open-with-codespaces-button.png)

4. To create a codespace using a Standard machine type, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![Schaltfläche „New codespace" (Neuer Codespace)](/assets/images/help/codespaces/new-codespace-button.png)


   
