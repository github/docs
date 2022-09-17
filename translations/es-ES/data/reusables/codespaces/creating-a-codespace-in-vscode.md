---
ms.openlocfilehash: 68c33e94d3ccd97315cfff7461566d418872e218
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147521486"
---
Después de que conectes tu cuenta de {% data variables.product.product_location %} a la extensión de {% data variables.product.prodname_github_codespaces %}, puedes crear un codespace nuevo. Para obtener más información sobre la extensión {% data variables.product.prodname_github_codespaces %}, consulta el [marketplace de {% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Nota**: Actualmente, {% data variables.product.prodname_vscode_shortname %} no permite elegir una configuración de contenedor de desarrollo al crear un codespace. Si quieres elegir una configuración de contenedor de desarrollo específica, usa la interfaz web de {% data variables.product.prodname_dotcom %} para crear el codespace. Para obtener más información, haz clic en la pestaña **Explorador web** en la parte superior de esta página.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Haz clic el icono de Agregar: {% octicon "plus" aria-label="The plus icon" %}.

   ![La opciòn de crear un codespace nuevo en {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Escribe el nombre del repositorio en el que quieres desarrollar y selecciónalo.

   ![Buscar un repositorio para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-repository-vscode.png)

4. Da clic en la rama en la que quieras desarrollar.

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Si se te pide que elijas un archivo de configuración de contenedor de desarrollo, selecciona un archivo en la lista.

   ![Elección de un archivo de configuración de contenedor de desarrollo para {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Elige el tipo de máquina que quieres utilizar.

   ![Tipos de instancia para un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
