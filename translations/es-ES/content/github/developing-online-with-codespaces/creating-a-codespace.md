---
title: Crear un codespace
intro: Puedes crear un codespace para una rama en un repositorio para desarrollar en línea.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'Cualquiera puede crear un codespace para cualquier repositorio público, o para cualquier repositorio que pertenezca a su cuenta de usuario.'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

### Acerca de la creación de codespaces

{% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %}{% data reusables.codespaces.concurrent-codespace-limit %}Para obtener más información, consulta la sección "[Borrar un codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".

{% data reusables.codespaces.unsupported-repos %}

No puedes crear un codespace en un repositorio vacío. Si tu repositorio está vacío, crea un archivo en él antes de crear un codespace. Para obtener más información, consulta la sección "[Agregar un archivo a un repositorio](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)" y "[Agregar un archivo a un repositorio utilizando la línea de comandos](/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)".

El ambiente del codespace que crees se basará en la configuración del repositorio. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

{% data reusables.codespaces.about-personalization %}Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Crear un codespace

{% data reusables.repositories.navigate-to-repo %}
2. Debajo del nombre de repositorio, utiliza el menú desplegable de "Rama" y selecciona aquella en la que quieras crear un codespace. ![Menú desplegable de rama](/assets/images/help/codespaces/branch-drop-down.png)
3. Debajo del nombre del repositorio, utiliza el menú desplegable {% octicon "download" aria-label="The download icon" %} **Código**, y selecciona **Abrir con codespaces**. ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)
4. Si ya tienes un codespace para la rama, da clic en {% octicon "plus" aria-label="The plus icon" %}**Codespace nuevo**. ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)
