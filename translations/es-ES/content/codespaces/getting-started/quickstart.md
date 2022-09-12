---
title: 'Inicio rápido de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: "Prueba {% data variables.product.prodname_github_codespaces %} en 5\_minutos."
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
ms.openlocfilehash: ddf1e4ad5eff3b7c5be1638e424fb4a7493a3cd4
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147783123'
---
## Introducción

En esta guía, creará un codespace a partir de un repositorio de plantillas y explorará algunas de las características esenciales disponibles en el codespace.

Desde esta guía de inicio rápido, aprenderás cómo crear un codespace, cómo conectarte a un puerto reenviado para ver tu aplicación ejecutándose, cómo utilizar el control de versiones en un codespace y cómo personalizar tu configuración con extensiones.

Para más información sobre cómo funcionan exactamente {% data variables.product.prodname_github_codespaces %}, ve la guía complementaria "[Profundización en {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)".

## Crea tu codespace

1. Vaya al [repositorio de plantillas](https://github.com/github/haikus-for-codespaces) y seleccione **Usar esta plantilla**. {% data reusables.codespaces.open-codespace-from-template-repo %}

## Ejecución de la aplicación

Una vez que se cree tu codespace, tu repositorio se clonará automáticamente en él. Ahora puedes ejecutar la aplicación y lanzarla en un buscador.

1. Cuando el terminal esté disponible, escribe el comando `npm run dev`. En este ejemplo se usa un proyecto de Node.js y este comando ejecuta el script con la etiqueta "dev" en el archivo _package.json_, que inicia la aplicación web definida en el repositorio de muestra.
   
   ![npm run dev en la temrinal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Si estás siguiendo la guía con un tipo de aplicación diferente, ingresa el comando de incio correspondiente para este.

1. Cuando se inicia la aplicación, el codespace reconoce el puerto en el que se ejecuta la aplicación y muestra un mensaje para informarle de que se ha reenviado. 

  ![Notificación de reenvío de puertos](/assets/images/help/codespaces/quickstart-port-toast.png)

1. Haga clic en **Abrir en el explorador** para ver la aplicación en ejecución en una pestaña nueva.

## Editar la aplicación y ver los cambios

1. Vuelve al codespace y haz doble clic en el archivo _haikus.json_ para abrirlo en el Explorador.

1. Edite el campo `text` del primer haiku para personalizar la aplicación con un haiku propio.

1. Regresa a la pestaña de la aplicación en ejecución dentro de tu buscador y actualiza para ver los cambios.
   
  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  Si ha cerrado la pestaña, abra el panel Puertos y haga clic en el icono **Abrir en el explorador** del puerto en ejecución.

  ![Panel de reenvío de puertos](/assets/images/help/codespaces/quickstart-forward-port.png)

## Confirmar y subir tus cambios

Ahora que hiciste algunos cambios, puedes utilizar la terminal integrada o la vista de código fuente para confirmar y subir los cambios al remoto.

{% data reusables.codespaces.source-control-display-dark %}
1. Para agregar los cambios al "stage", haga clic en **+** junto al archivo que ha cambiado, o junto a **Cambios** si ha cambiado varios archivos y quiere agregarlos todos.

   ![Barra lateral de control de código fuente con el botón de almacenamiento provisional resaltado](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. Teclea un mensaje de confirmación que describa el cambio que hiciste.

   ![Barra de control de código fuente con un mensaje de confirmación](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  

1. Para confirmar tus cambios planeados, haz clic en la marca de verificación en la parte superior de la barra lateral del control de código fuente.

   ![Clic en el icono de marca de verificación](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  

   Puedes subir los cambios que has hecho. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.
1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos ( **…** ).
 
   ![Botón de puntos suspensivos para las acciones Ver y Más](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. En el menú desplegable, haga clic en **Insertar**.
1. Vuelve al repositorio nuevo en {% data variables.product.prodname_dotcom %} y consulta el archivo _haikus.json_. Comprueba que el cambio realizado en el codespace se haya enviado correctamente al repositorio.

## Personalizar con una extensión

Dentro de un codespace, tienes acceso a {% data variables.product.prodname_vscode_marketplace %}. Para este ejemplo, instalarás una extensión que altera el tema, pero puedes instalar cualquier extensión que sea útil para tu flujo de trabajo.

{% note %}

**Nota:** Si has activado [Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync), cualquier cambio que realices en la configuración del editor en el codespace actual, como cambiar el tema o los enlaces de teclado, se sincroniza automáticamente con cualquier otro codespace que abras y cualquier instancia de {% data variables.product.prodname_vscode %} que estén registrados en tu cuenta de {% data variables.product.prodname_dotcom %}.

{% endnote %}

1. En la barra lateral, haz clic en el icono de extensiones.

1. En la barra de búsqueda, escriba `fairyfloss` e instale la extensión fairyfloss.

   ![Agregar una extensión](/assets/images/help/codespaces/add-extension.png)

1. Haz clic en **Instalar en codespaces**.
1. Seleccione el tema `fairyfloss` en la lista.

   ![Seleccionar el tema de fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

## Pasos siguientes

Creaste, personalizaste y ejecutaste exitosamente tu primer aplicación dentro de un codespace, pero ¡hay mucho más que explorar! Estos son algunos recursos útiles para que realice los siguientes pasos con {% data variables.product.prodname_codespaces %}.
  - [Análisis en profundidad](/codespaces/getting-started/deep-dive): en este inicio rápido se presentan algunas de las características de {% data variables.product.prodname_codespaces %}. La guía a fondo ve estas áreas desde un punto de vista técnico.
  - [Configuración del proyecto para {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): en estas guías se proporciona información sobre cómo configurar el proyecto para usar {% data variables.product.prodname_codespaces %} con lenguajes específicos.
  - [Configuración de {% data variables.product.prodname_codespaces %} para el proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): en esta guía se proporcionan detalles sobre cómo crear una configuración personalizada de {% data variables.product.prodname_codespaces %} para el proyecto.

## Información adicional

- "[Habilitación de {% data variables.product.prodname_codespaces %} para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)"
- "[Administración de la facturación de {% data variables.product.prodname_codespaces %} en tu organización](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)"
