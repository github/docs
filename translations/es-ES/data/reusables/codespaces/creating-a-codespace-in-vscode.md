---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158585"
---
Después de conectar tu cuenta de {% data variables.product.prodname_dotcom_the_website %} a la extensión de {% data variables.product.prodname_github_codespaces %}, puedes crear un codespace. Para obtener más información sobre la extensión de {% data variables.product.prodname_github_codespaces %}, consulta el [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Haz clic el icono de Agregar: {% octicon "plus" aria-label="The plus icon" %}.

   ![Opción para crear un codespace en {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Escribe el nombre del repositorio en el que quieres desarrollar y selecciónalo.

   ![Búsqueda de un repositorio para crear un codespace](/assets/images/help/codespaces/choose-repository-vscode.png)

   Si el repositorio que eliges es propiedad de una organización y esta ha configurado los codespaces de este repositorio de modo que se facturen a la organización o a su empresa principal, en los mensajes posteriores se indicará quién paga el codespace.

4. Da clic en la rama en la que quieras desarrollar.

   ![Búsqueda de una rama para crear un codespace](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Si se te pide que elijas un archivo de configuración de contenedor de desarrollo, selecciona un archivo en la lista.

   ![Selección del archivo de configuración de un contenedor de desarrollo para {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Elige el tipo de máquina que quieres utilizar.

   ![Tipos de instancia para un nuevo codespace](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
