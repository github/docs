---
ms.openlocfilehash: c32a9f6f6a799c3653cb17fe89721090fc01d155
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109942"
---
   Si la configuración del contenedor de desarrollo para el repositorio especifica permisos para acceder a otros repositorios, se te mostrará una página de autorización. Para obtener más información sobre cómo se especifica esto en el archivo `devcontainer.json`, consulta "[Administración del acceso a otros repositorios del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".   

   Haz clic en {% octicon "chevron-down" aria-label="The expand down icon" %} para ver los detalles de los permisos solicitados.

   ![Captura de pantalla de la página de autorización para precompilaciones](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Haz clic en **Autorizar y continuar** para conceder estos permisos para la creación de la precompilación. Como alternativa, puedes hacer clic en **Continuar sin autorizar**, pero, si lo haces, es posible que los espacios de código creados a partir de la precompilación resultante no funcionen correctamente.

   {% note %}

   **Nota**: También se pedirá que concedan estos permisos a los usuarios que creen codespaces que usan esta precompilación.

   {% endnote %}
