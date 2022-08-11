---
title: 'Guía de inicio rápido para {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Guía de inicio rápido para {% data variables.product.prodname_codespaces %}'
intro: 'Intenta {% data variables.product.prodname_github_codespaces %} en 5 minutos.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

## Introducción

In this guide, you'll create a codespace from a template repository and explore some of the essential features available to you within the codespace.

From this quickstart, you'll learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

Para obtener más información sobre cómo funcionan los {% data variables.product.prodname_github_codespaces %} exactamente, consulta la guía compañera "[Conoce los {% data variables.product.prodname_github_codespaces %} a fondo](/codespaces/getting-started/deep-dive)".

## Crea tu codespace

1. Navega al [repositorio de plantilla](https://github.com/github/haikus-for-codespaces) y selecciona **Utilizar esta plantilla**.

1. Choose an owner for the new repository, enter a repository name, select your preferred privacy setting, and click **Create repository from template**.

1. Navega a la página principal del repositorio recientemente creado. Debajo del nombre de repositorio, utiliza el menú desplegable **{% octicon "code" aria-label="The code icon" %} Código** y la pestaña de **Codespaces** y haz clic en **Crear codespace en rama principal**.

  ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

## Ejecutar la aplicación

Una vez que se cree tu codespace, tu repositorio se clonará automáticamente en él. Ahora puedes ejecutar la aplicación y lanzarla en un buscador.

1. When the terminal becomes available, enter the command `npm run dev`. This example uses a Node.js project, and this command runs the script labeled "dev" in the _package.json_ file, which starts up the web application defined in the sample repository.

   ![npm run dev en la temrinal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Si estás siguiendo la guía con un tipo de aplicación diferente, ingresa el comando de incio correspondiente para este.

1. Cuando tu aplicación comienza, el codespace reconoce el puerto en el que se está ejecutando esta y muestra un mensaje para dejarte saber que se reenvió.

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/quickstart-port-toast.png)

1. Haz clic en **Abrir en el buscador** para ver tu aplicación que se está ejecutando en una pestaña nueva.

## Editar la aplicación y ver los cambios

1. Switch back to your codespace and open the _haikus.json_ file by double-clicking it in the Explorer.

1. Edita el campo `text` del primer haiku para personalizar la aplicación con tu propio haiku.

1. Regresa a la pestaña de la aplicación en ejecución dentro de tu buscador y actualiza para ver los cambios.

  {% octicon "light-bulb" aria-label="The lightbulb icon" %} Si cerraste la pestaña, abre el panel de Puertos y haz clic en el icono de **Abrir en el buscador** para el puerto en ejecución.

  ![Panel de reenvío de puertos](/assets/images/help/codespaces/quickstart-forward-port.png)

## Confirmar y subir tus cambios

Ahora que hiciste algunos cambios, puedes utilizar la terminal integrada o la vista de código fuente para confirmar y subir los cambios al remoto.

{% data reusables.codespaces.source-control-display-dark %}
1. Para probar tus cambios, haz clic en **+** junto al archivo que cambiaste o junto a **Cambios** si cambiaste archivos múltiples y quieres probarlos todos.

   ![Barra lateral de control de código fuente con el botón de preparación resaltado](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. Teclea un mensaje de confirmación que describa el cambio que hiciste.

   ![Barra de control de código fuente con un mensaje de confirmación](/assets/images/help/codespaces/codespaces-commit-commit-message.png)

1. Para confirmar tus cambios planeados, haz clic en la marca de verificación en la parte superior de la barra lateral del control de código fuente.

   ![Haz clic en el icono de verificación](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

   Puedes subir los cambios que has hecho. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.
1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos (**...**).

   ![Botón de puntos suspensivos para las acciones de "más" y "ver"](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. En el menú desplegable, haz clic en **Subir**.
1. Go back to your new repository on {% data variables.product.prodname_dotcom %} and view the _haikus.json_ file. Check that the change you made in your codespace has been successfully pushed to the repository.

## Personalizar con una extensión

Dentro de un codespace, tienes acceso a {% data variables.product.prodname_vscode_marketplace %}. Para este ejemplo, instalarás una extensión que altera el tema, pero puedes instalar cualquier extensión que sea útil para tu flujo de trabajo.

{% note %}

**Note**: If you have [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) turned on, any changes you make to your editor setup in the current codespace, such as changing your theme or keyboard bindings, are automatically synced to any other codespaces you open and any instances of {% data variables.product.prodname_vscode %} that are signed into your {% data variables.product.prodname_dotcom %} account.

{% endnote %}

1. En la barra lateral, haz clic en el icono de extensiones.

1. En la barra de búsqueda, ingresa `fairyfloss` e instala la extensión de fairyfloss.

   ![Agregar una extensión](/assets/images/help/codespaces/add-extension.png)

1. Click **Install in Codespaces**.
1. Selecciona el tema `fairyfloss` seleccionándolo de la lista.

   ![Seleccionar el tema de fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

## Siguientes pasos

Creaste, personalizaste y ejecutaste exitosamente tu primer aplicación dentro de un codespace, pero ¡hay mucho más que explorar! Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_codespaces %}.
  - [Cónocelo a fondo](/codespaces/getting-started/deep-dive): Esta guía de inicio rápido presenta algunas de las características de los {% data variables.product.prodname_codespaces %}. La guía a fondo ve estas áreas desde un punto de vista técnico.
  - [Configurar tu proyecto para los {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): Estas guías te proporcionan información sobre cómo configurar tu proyecto para utilizar los {% data variables.product.prodname_codespaces %} con lenguajes específicos.
  - [Configurar los {% data variables.product.prodname_codespaces %} para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): Esta guía te proporciona detalles para crear una configuración personalizada para los {% data variables.product.prodname_codespaces %} para tu proyecto.

## Leer más

- [Habilitar los {% data variables.product.prodname_codespaces %} para tu organizción](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Administrar la facturación para los {% data variables.product.prodname_codespaces %} en tu organización](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
