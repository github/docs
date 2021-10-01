---
title: Quickstart for Codespaces
intro: 'Try out {% data variables.product.prodname_codespaces %} in 5 minutes.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

## Introducción

In this guide, you'll create a codespace from a [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and explore some of the essential features available to you within the codespace.

From this quickstart, you will learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_codespaces %}](/codespaces/getting-started/deep-dive)."

## Crea tu codespace

1. Navigate to the [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and select **Use this template**.

2. Name your repository, select your preferred privacy setting, and click **Create repository from this template**.

3. Navigate to the main page of the newly created repository. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

## Running the application

Once your codespace is created, your repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. Since this example uses a Node.js project, start the application by entering `npm run dev` in the terminal. Este comando ejecuta el script `dev` en el archivo package.json e inicia la aplicación web que se define en el repositorio de muestra.

   ![npm run dev en la temrinal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

    If you're following along with a different application type, enter the corresponding start command for that project.

2. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to forward that port so you can connect to it.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Haz clic en **Abrir en el buscador** para ver tu aplicación que se está ejecutando en una pestaña nueva.

## Edit the application and view changes

1. Switch back to your codespace and open the `haikus.json` file by double-clicking it in the File Explorer.

2. Edit the `text` field of the first haiku to personalize the application with your own haiku.

3. Go back to the running application tab in your browser and refresh to see your changes.

  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  If you've closed the tab, open the Ports panel and click the **Open in browser** icon for the running port.
  ![Port Forwarding Panel](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to commit and push the changes back to the remote.

{% data reusables.codespaces.source-control-display-dark %}
1. Para probar tus cambios, haz clic en **+** junto al archivo que cambiaste o junto a **Cambios** si cambiaste archivos múltiples y quieres probarlos todos. ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. Teclea un mensaje de confirmación que describa el cambio que hiciste. ![Barra de control de código fuente con un mensaje de confirmación](/assets/images/help/codespaces/codespaces-commit-commit-message.png)
1. Para confirmar tus cambios planeados, haz clic en la marca de verificación en la parte superior de la barra lateral del control de código fuente. ![Click the check mark icon](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  
   You can push the changes you've made. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.
1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos (**...**). ![Botón de puntos suspensivos para las acciones de "más" y "ver"](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. En el menú desplegable, haz clic en **Subir**.

## Personalizing with an extension

Dentro de un codespace, tienes acceso al Visual Studio Code Marketplace. For this example, you'll install an extension that alters the theme, but you can install any extension that is useful for your workflow.

1. En la barra lateral, haz clic en el icono de extensiones.

2.  En la barra de búsqueda, ingresa `fairyfloss` e instala la extensión de fairyfloss.

  ![Agregar una extensión](/assets/images/help/codespaces/add-extension.png)

3. Selecciona el tema `fairyfloss` seleccionándolo de la lista.

  ![Seleccionar el tema de fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

4. Changes you make to your editor setup in the current codespace, such as theme and keyboard bindings, are synced automatically via [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to any other codespaces you open and any instances of Visual Studio Code that are signed into your GitHub account.

## Siguientes pasos

Creaste, personalizaste y ejecutaste exitosamente tu primer aplicación dentro de un codespace, pero ¡hay mucho más que explorar! Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_codespaces %}.
  - [Deep dive](/codespaces/getting-started/deep-dive): This quickstart presented some of the features of {% data variables.product.prodname_codespaces %}. The deep dive looks at these areas from a technical standpoint.
  - [Setting up your project for {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): These guides provide information on setting up your project to use {% data variables.product.prodname_codespaces %} with specific languages
  - [Configuring {% data variables.product.prodname_codespaces %} for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.

## Leer más

- [Enabling {% data variables.product.prodname_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Managing billing for {% data variables.product.prodname_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
