---
ms.openlocfilehash: bb81ad72418e81366595d963296493a7a3b55202
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158681"
---
   Si la configuración del contenedor de desarrollo para el repositorio especifica permisos para acceder a otros repositorios, se te mostrará una página de autorización. Para obtener más información sobre cómo se especifica esto en el archivo `devcontainer.json`, consulta "[Administración del acceso a otros repositorios del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".   

   Haz clic en {% octicon "chevron-down" aria-label="The expand down icon" %} para ver los detalles de los permisos solicitados.

   ![Captura de pantalla de la página de autorización para precompilaciones](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Haz clic en **Autorizar y continuar** para conceder estos permisos para la creación de precompilaciones. Como alternativa, puedes hacer clic en **Continuar sin autorizar**, pero, si lo haces, es posible que los codespaces creados a partir de las precompilaciones resultantes no funcionen correctamente.

   {% note %}

   **Nota**: También se pedirá que concedan estos permisos a los usuarios que creen codespaces que usan esta precompilación.

   {% endnote %}
