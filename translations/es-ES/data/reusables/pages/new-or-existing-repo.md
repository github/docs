---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110022"
---
Puedes crear un repositorio o elegir un repositorio existente para el sitio.

Si quieres crear un sitio de {% data variables.product.prodname_pages %} para un repositorio donde no todos los archivos del repositorio están relacionados con el sitio, podrás configurar una fuente de publicación para el sitio. Por ejemplo, puedes tener una rama dedicada y una carpeta para contener los archivos de origen del sitio {% ifversion pages-custom-workflow %}, o bien usar un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado para compilar e implementar los archivos de origen del sitio. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}files.{% endif %}

{% ifversion fpt or ghec %}Si la cuenta a la que pertenece el repositorio utiliza {% data variables.product.prodname_free_user %} o {% data variables.product.prodname_free_team %} para organizaciones, el repositorio deberá ser público.{% endif %}

 Si quiere crear un sitio en un repositorio existente, vaya a la sección "[Crear tu sitio](#creating-your-site)".