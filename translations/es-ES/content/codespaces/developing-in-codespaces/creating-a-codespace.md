---
title: Crear un codespace
intro: Puedes crear un codespace para una rama en un repositorio para desarrollar en línea.
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

### Acerca de la creación de codespaces

Puedes crear un codespace ya sea en {% data variables.product.prodname_dotcom_the_website %} o en {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.codespaces-are-personal %}

Los codespaces se asocian con una rama específica de un repositorio y este repositorio no puede estar vacío. {% data reusables.codespaces.concurrent-codespace-limit %} Para obtener más información, consulta la sección "[Borrar un codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".


Cuando creas un codespace, suceden ciertos pasos para habilitar el acceso completo a tu ambiente de desarrollo.

- Se asignan los recursos tales como MV y almacenamiento para tu contenedor. Se crea una MV cada vez que creas o inicias un codespace para garantizar que siempre tengas las versiones y parches de seguridad más recientes.
- {% data variables.product.prodname_codespaces %} recibe información de tu repositorio, rama, confirmaciones, tu repositorio de dotfiles público y de cualquier secreto que hayas creado.
- {% data variables.product.prodname_codespaces %} ejecuta un clon llano del repositorio.
- Si tienes uno en tu repositorio, {% data variables.product.prodname_codespaces %} ejecutará el archivo `devcontainer.json`. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".
- Se ejecuta tu contenedor de Docker, `docker-compose` u otra inicialización.
- En este punto, el codespace se marca como disponible y puedes conectarte.
- Una vez que el codespace se hace disponible, dependiendo de los comandos del contenedor dev, el codespace seguirá con algunas configuraciones.
  - El codespace comparte los puertos que se agregaron en el archivo `devcontainer.json`.
  - El codespace ejecuta lo que sea que se haya especificado en `postCreateCommand`.
  - Los {% data variables.product.prodname_codespaces %} clonan tu repositorio de dotfiles en el ambiente de codespaces y buscan un archivo de instalación. Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".
  - Por fin, el codespace hace un clone integral del repositorio para que tengas acceso total a él.


{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Crear un codespace

{% data reusables.repositories.navigate-to-repo %}
2. Debajo del nombre de repositorio, utiliza el menú desplegable de "Rama" y selecciona aquella en la que quieras crear un codespace.

  ![Menú desplegable de rama](/assets/images/help/codespaces/branch-drop-down.png)

3. Debajo del nombre del repositorio, utiliza el menú desplegable {% octicon "download" aria-label="The download icon" %} **Código**, y selecciona **Abrir con codespaces**.

  ![Botón de abrir con codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

4. Para crear un codespace utilizando un tipo de máquina estándar, haz clic en {% octicon "plus" aria-label="The plus icon" %}**Codespace nuevo**.

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)


   
