---
title: Adición de características a un archivo devcontainer.json
shortTitle: Adding features
intro: 'Con las características, puedes agregar rápidamente herramientas, entornos de ejecución o bibliotecas a la configuración del contenedor de desarrollo.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180831'
---
{% data reusables.codespaces.about-features %} Usa las pestañas de este artículo para mostrar instrucciones para cada una de estas formas de agregar características.

## Agregar características a un archivo `devcontainer.json`

{% webui %}

1. Ve al repositorio en {% data variables.product.prodname_dotcom_the_website %}, busca el archivo `devcontainer.json` y haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar el archivo.
   
   Si aún no tienes un archivo `devcontainer.json`, puedes crearlo ahora. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)".
1. A la derecha del editor de archivos, en la pestaña **Marketplace**, busca la característica que quieres agregar y, luego, haz clic en el nombre de la característica.

   ![Captura de pantalla de la característica Terraform en la pestaña Marketplace, con "Terra" en la barra de búsqueda](/assets/images/help/codespaces/feature-marketplace.png)
3. En "Instalación", haz clic en el fragmento de código para copiarlo en el Portapapeles y, luego, pégalo en el objeto `features` del archivo `devcontainer.json`.

   ![Captura de pantalla de un bloque de código en la sección Instalación de la pestaña Marketplace](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. De forma predeterminada, se usará la versión más reciente de la característica. Para elegir una versión diferente o configurar otras opciones para la característica, expande las propiedades enumeradas en "Opciones" para ver los valores disponibles y, luego, edita manualmente el objeto `devcontainer.json` en el archivo para agregar las opciones.

   ![Captura de pantalla de la sección Opciones de la pestaña Marketplace, con "version" y "tflint" expandido](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. Confirma los cambios en el archivo `devcontainer.json`.

Los cambios de configuración surtirán efecto en los nuevos codespaces creados desde el repositorio. Para que los cambios surtan efecto en los codespaces existentes, deberás extraer las actualizaciones del archivo `devcontainer.json` en el codespace y, luego, recompilar el contenedor para el codespace. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".

{% endwebui %}

{% vscode %}

{% note %}

Para añadir características a {% data variables.product.prodname_vscode_shortname %} mientras trabajas localmente y no estás conectado a un codespace, debes tener la extensión "Contenedores de desarrollo" instalada y habilitada. Para obtener más información sobre esta extensión, consulta [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. Empieza a escribir "Configurar" y selecciona **Codespaces: Configurar características de contenedor de desarrollo**.

   ![El comando Configure Devcontainer Features en la paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)

3. Actualice las características seleccionadas y haga clic en **OK**.

   ![El menú de selección de características adicionales durante la configuración del contenedor](/assets/images/help/codespaces/select-additional-features.png)

4. Si estás trabajando en un codespace, aparecerá un mensaje en la esquina inferior derecha. Para recompilar el contenedor y aplicar los cambios al codespace en el que estás trabajando, haz clic en **Recompilar ahora**.

   !["Codespaces: Rebuild Container" en la paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
