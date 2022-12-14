---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145111441"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>Acerca de los requisitos mínimos para {% data variables.product.prodname_ghe_server %} 3.0 y superior

Antes de actualizar a {% data variables.product.prodname_ghe_server %} 3.0 o superior, revisa los recursos de hardware que has aprovisionado para tu instancia. {% data variables.product.prodname_ghe_server %} 3.0 presenta características nuevas tales como {% data variables.product.prodname_actions %} y el {% data variables.product.prodname_registry %}, y requiere más recursos que la versión 2.22 y anteriores. Para obtener más información, vea las [notas de la versión de {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Los requisitos que incrementan para {% data variables.product.prodname_ghe_server %} 3.0 y posterior se muestran en **negrita** en la siguiente tabla.

| Licencias de usuario | vCPU | Memoria | Almacenamiento acoplado | Almacenamiento raíz |
| :- | -: | -: | -: | -: |
| Prueba, Demo o 10 usuarios no frecuentes | **4**<br/>_Hasta 2_ | **32 GB**<br/>_Hasta 16 GB_ | **150 GB**<br/>_Hasta 100 GB_ | 200 GB |
| 10-3000  | **8**<br/>_Hasta 4_ | **48 GB**<br/>_Hasta 32 GB_ | **300 GB**<br/>_Hasta 250 GB_ | 200 GB |
| 3000-5000 | **12**<br/>_Hasta 8_ | 64 GB | 500 GB | 200 GB |
| 5000-8000 | **16**<br/>_Hasta 12_ | 96 GB | 750 GB | 200 GB |
| 8000-10000+ | **20**<br/>_Hasta 16_ | **160 GB**<br/>_Hasta 128 GB_ | 1000 GB | 200 GB |

{% ifversion ghes %}

Para obtener más información sobre los requisitos de hardware para {% data variables.product.prodname_actions %}, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
