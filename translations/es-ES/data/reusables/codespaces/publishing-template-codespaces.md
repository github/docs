---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160320"
---
Si estás trabajando en un codespace, podrás publicarlo desde la aplicación de escritorio o el cliente web de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.source-control-display-dark %}
1. Para agregar los cambios al "stage", haz clic en **+** junto al archivo que hayas añadido o cambiado o junto a **Cambios** si has cambiado varios archivos y quieres agregarlos todos al "stage".

   ![Barra lateral de control de código fuente con el botón de almacenamiento provisional resaltado](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **Nota:** Si empiezas desde una plantilla en blanco de {% data variables.product.company_short %}, no verás una lista de cambios a menos que ya hayas inicializado el directorio como repositorio de Git. Para publicar codespaces creados a partir de la plantilla en blanco, haz clic en **Publicar en {% data variables.product.company_short %}** en la vista Control de código fuente y, luego, ve al paso 5.

   {% endnote %}
2. Para confirmar los cambios agregados al "stage", escribe un mensaje de confirmación en el que se describa el cambio realizado y, a continuación, haz clic en **Confirmar**.

   ![Barra de control de código fuente con un mensaje de confirmación](/assets/images/help/codespaces/vscode-commit-button.png) 
3. Haz clic en **Publicar rama**.
   
   ![Captura de pantalla del botón "Publicar rama" en VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. En la lista desplegable "Nombre del repositorio", escribe un nombre para el nuevo repositorio y selecciona **Publicar en el repositorio privado {% data variables.product.company_short %}** o **Publicar en el repositorio público {% data variables.product.company_short %}** .
   
   ![Captura de pantalla de la lista desplegable "Nombre del repositorio" en VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   El propietario del nuevo repositorio será la cuenta {% data variables.product.prodname_dotcom %} con la que creaste el codespace.
5. También puedes hacer clic en **Abrir en {% data variables.product.company_short %}** en el elemento emergente que aparece en la esquina inferior derecha del editor para ver el nuevo repositorio en {% data variables.product.prodname_dotcom_the_website %}.
   
   ![Captura de pantalla del elemento emergente "Abrir en GitHub" en VS Code](/assets/images/help/codespaces/open-on-github.png)