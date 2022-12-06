---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160321"
---
## Agregar el peurto a la configuración del codespace

Puedes agregar un puerto reenviado a la configuración de {% data variables.product.prodname_github_codespaces %} del repositorio para que este pueda reenviarse automáticamente a todos los codespaces que se crearon desde el repositorio. Después de que actualizas la configuración, cualquier codespace creado debe reconstruirse para que el cambio se aplique. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".

Puedes configurar manualmente los puertos reenviados en un archivo `.devcontainer.json` mediante la propiedad `forwardPorts` o puedes usar el panel "Puertos" en un codespace que hayas abierto en el explorador o en la aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiera agregar a la configuración del codespace y, después, haga clic en **Configurar etiqueta y actualizar devcontainer.json**.
  ![Opción para establecer la etiqueta y agregar un puerto a devcontainer.json en el menú contextual](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}