---
title: 'Inicio rápido de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: "Prueba {% data variables.product.prodname_github_codespaces %} en 5\_minutos."
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158657'
---
## Introducción

En esta guía, creará un codespace a partir de un repositorio de plantillas y explorará algunas de las características esenciales disponibles en el codespace. Trabajarás en la versión web de {% data variables.product.prodname_vscode %}, que es inicialmente el editor predeterminado para {% data variables.product.prodname_github_codespaces %}. Después de probar esta guía de inicio rápido, puedes usar {% data variables.product.prodname_codespaces %} en otros editores y cambiar el editor predeterminado. Los vínculos se proporcionan al final de esta guía.

Desde esta guía de inicio rápido, aprenderás cómo crear un codespace, cómo conectarte a un puerto reenviado para ver tu aplicación ejecutándose, cómo publicar tu codespace en un nuevo repositorio y cómo personalizar tu configuración con extensiones.

Para más información sobre cómo funcionan exactamente {% data variables.product.prodname_github_codespaces %}, ve la guía complementaria "[Profundización en {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)".

## Crea tu codespace

1. Ve al repositorio de plantillas [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces).
{% data reusables.codespaces.open-template-in-codespace-step %}

## Ejecución de la aplicación

Una vez que se cree tu codespace, el repositorio de plantillas se clonará automáticamente en él. Ahora puedes ejecutar la aplicación y lanzarla en un buscador.

1. Cuando el terminal esté disponible, escribe el comando `npm run dev`. En este ejemplo se usa un proyecto de Node.js y este comando ejecuta el script con la etiqueta "dev" en el archivo `package.json`, que inicia la aplicación web definida en el repositorio de muestra.
   
   ![npm run dev en la temrinal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Si estás siguiendo la guía con un tipo de aplicación diferente, ingresa el comando de incio correspondiente para este.

2. Cuando se inicia la aplicación, el codespace reconoce el puerto en el que se ejecuta la aplicación y muestra un mensaje para informarle de que se ha reenviado. 

   ![Notificación del sistema de enrutamiento de puerto](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Haga clic en **Abrir en el explorador** para ver la aplicación en ejecución en una pestaña nueva.

## Editar la aplicación y ver los cambios

1. Vuelve al codespace y haz clic en el archivo `haikus.json` para abrirlo en el Explorador.

2. Edite el campo `text` del primer haiku para personalizar la aplicación con un haiku propio.

3. Regresa a la pestaña de la aplicación en ejecución dentro de tu buscador y actualiza para ver los cambios.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} Si has cerrado la pestaña, abre el panel Puertos y haz clic en el icono **Abrir en el explorador** del puerto en ejecución.

   ![Panel de reenvío de puertos](/assets/images/help/codespaces/quickstart-forward-port.png)

## Confirmar y subir tus cambios

Ahora que has hecho algunos cambios, puedes usar el terminal integrado o la vista de código fuente para publicar tu trabajo en un nuevo repositorio.

{% data reusables.codespaces.source-control-display-dark %}
1. Para agregar los cambios al "stage", haz clic en **+** junto al archivo `haikus.json` o junto a **Cambios** si has cambiado varios archivos y quieres agregarlos todos.

   ![Barra lateral de control de código fuente con el botón de almacenamiento provisional resaltado](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. Para confirmar los cambios "staged", escribe un mensaje de confirmación que describa el cambio realizado y, después, haz clic en **Confirmar**.

   ![Barra de control de código fuente con un mensaje de confirmación](/assets/images/help/codespaces/vscode-commit-button.png)

3. Haz clic en **Publicar rama**.
   
   ![Captura de pantalla del botón "Publicar rama" en VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. En la lista desplegable "Nombre del repositorio", escribe un nombre para el nuevo repositorio y selecciona **Publicar en el repositorio privado de {% data variables.product.company_short %}** o **Publicar en el repositorio público de {% data variables.product.company_short %}** .
   
   ![Captura de pantalla de la lista desplegable "Nombre del repositorio" en VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   El propietario del nuevo repositorio será la cuenta de {% data variables.product.prodname_dotcom %} con la que creaste el codespace.
5. En el elemento emergente que aparece en la esquina inferior derecha del editor, haz clic en **Abrir en {% data variables.product.company_short %}** para ver el nuevo repositorio en {% data variables.product.prodname_dotcom_the_website %}. En el nuevo repositorio, consulta el archivo `haikus.json` y comprueba que el cambio realizado en el codespace se haya enviado correctamente al repositorio.
   
   ![Captura de pantalla del elemento emergente "Abrir en GitHub" en VS Code](/assets/images/help/codespaces/open-on-github.png)

## Personalizar con una extensión

Cuando te conectas a un codespace mediante el explorador o la aplicación de escritorio de {% data variables.product.prodname_vscode %}, puedes acceder a la Visual Studio Code Marketplace directamente desde el editor. En este ejemplo, instalarás una extensión {% data variables.product.prodname_vscode_shortname %} que alterará el tema, pero puedes instalar cualquier extensión que sea útil para tu flujo de trabajo.

1. En la barra lateral, haz clic en el icono de extensiones.
1. En la barra de búsqueda, escribe `fairyfloss` y haz clic en **Instalar**.

   ![Agregar una extensión](/assets/images/help/codespaces/add-extension.png)

1. Seleccione el tema `fairyfloss` en la lista.

   ![Seleccionar el tema de fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

Si estás usando un codespace en el explorador o en la aplicación de escritorio de {% data variables.product.prodname_vscode %} y has activado[ Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync), cualquier cambio que realices en la configuración del editor en el codespace actual, como cambiar el tema o los enlaces de teclado, se sincroniza automáticamente con cualquier instancia de {% data variables.product.prodname_vscode %} que esté registrada en tu cuenta de {% data variables.product.prodname_dotcom %} y con cualquier otro codespace que crees.

## Pasos siguientes

Creaste, personalizaste y ejecutaste exitosamente tu primer aplicación dentro de un codespace, pero ¡hay mucho más que explorar! Estos son algunos recursos útiles para que completes los siguientes pasos con {% data variables.product.prodname_github_codespaces %}.

* "[Análisis en profundidad](/codespaces/getting-started/deep-dive)": en este inicio rápido se presentan algunas de las características de {% data variables.product.prodname_github_codespaces %}. La guía a fondo ve estas áreas desde un punto de vista técnico.
* "[Adición de una configuración de contenedor de desarrollo al repositorio](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)": estas guías proporcionan información sobre cómo configurar tu repositorio para usar {% data variables.product.prodname_github_codespaces %} con idiomas específicos.
* "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)": en esta guía se proporcionan detalles sobre cómo crear una configuración personalizada de {% data variables.product.prodname_codespaces %} para el proyecto.

## Información adicional

* "[Habilitación de {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
* "[Uso de {% data variables.product.prodname_github_codespaces %} en {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
* "[Uso de {% data variables.product.prodname_github_codespaces %} en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[Uso de {% data variables.product.prodname_github_codespaces %} con la {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)"
* "[Configuración del editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)"
* "[Administración del costo para {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
