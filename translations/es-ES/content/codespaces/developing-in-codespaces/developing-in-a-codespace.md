---
title: Desarrollar en un codespace
intro: 'Puedes abrir un codespace en {% data variables.product.product_name %} y después desarrollar utilizando las características de {% data variables.product.prodname_vscode %}.'
permissions: Anyone can develop in a codespace owned by their user account.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Acerca del desarrollo con {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} provides you with the full development experience of {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Codespace overview with annotations](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Side Bar - By default, this area shows your project files in the Explorer.
2. Activity Bar - This displays the Views and provides you with a way to switch between them. You can reorder the Views by dragging and dropping them.
3. Editor - This is where you edit your files. You can use the tab for each editor to position it exactly where you need it.
4. Panels - This is where you can see output and debug information, as well as the default place for the integrated Terminal.
5. Status Bar - This area provides you with useful information about your codespace and project. For example, the branch name, configured ports, and more.

For more information on using {% data variables.product.prodname_vscode %}, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the {% data variables.product.prodname_vscode %} documentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} Para obtener más información, consulta la sección "[Solucionar problemas de tu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

#### Personalizing your codespace

{% data reusables.codespaces.about-personalization %} Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)".

{% data reusables.codespaces.apply-devcontainer-changes %} Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".

#### Running your app from a codespace
{% data reusables.codespaces.about-port-forwarding %} Para obtener más información, consulta la sección "[Abrir puertos en tu codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

#### Committing your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Navigating to an existing codespace

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. Da clic en el nombre del codespace en el cual quieras desarrollar. ![Nombre del codespace](/assets/images/help/codespaces/click-name-codespace.png)

Alternatively, you can see any active codespaces for a repository by navigating to the repository in which it was made and selecting **{% octicon "codespaces" aria-label="The codespaces icon" %} Codespaces**.
