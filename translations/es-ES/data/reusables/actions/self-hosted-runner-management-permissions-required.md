---
ms.openlocfilehash: 324332325762999d6daaf4241ec0f9e291ce98a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069445"
---
Un ejecutor autohospedado se puede ubicar en al repositorio, en la organización o en la {% ifversion fpt or ghec %}configuración de cuenta empresarial en {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} configuración empresarial en {% data variables.product.product_location %}{% endif %}. Para administrar un ejecutor auto-hospedado, debes tener los siguientes permisos, dependiendo de donde se agregó éste:
- **Repositorio de usuario**: debe ser el propietario del repositorio.
- **Organización**: debe ser el propietario de una organización. 
- **Repositorio de la organización**: debe ser el propietario de una organización o tener acceso de administrador al repositorio.
{% ifversion ghec %}
- **Cuenta empresarial**: debe ser propietario de la empresa.
{% elsif ghes or ghae %}
- **Empresa**: debe ser un administrador de sitio de {% data variables.product.prodname_enterprise %}.
{% endif %}
