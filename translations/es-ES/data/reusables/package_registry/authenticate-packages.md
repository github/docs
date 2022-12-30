---
ms.openlocfilehash: fd3590bb212b7c9521cb447ca012b19270469a8c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145122050"
---
Necesitas de un token de acceso para publicar, instalar, y borrar paquetes en {{ site.data.variables.product.prodname_registry }}.

Puedes utilizar un token de acceso personal (PAT) para autenticarte en el {% data variables.product.prodname_registry %} o en la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} Cuando creas un token de acceso personal, puedes asignar al token diferentes ámbitos en función de tus necesidades. Para obtener más información sobre los ámbitos relacionados con paquetes para un PAT, consulte "[Acerca de los permisos para los Paquetes de GitHub](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Para autenticarte en un registro del {% data variables.product.prodname_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes utilizar:
- `GITHUB_TOKEN` para publicar los paquetes asociados con el repositorio del flujo de trabajo.
- un PAT para instalar los paquetes asociados con otros repositorios privados (a los cuales no puede acceder `GITHUB_TOKEN`).
