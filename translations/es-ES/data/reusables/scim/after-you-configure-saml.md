---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134509"
---
Predeterminadamente, tus IdP no se comunican con {% data variables.product.product_name %} automáticamente cuando asignas o desasignas la aplicación. {% data variables.product.product_name %} {% ifversion fpt or ghec %}aprovisiona el acceso a los recursos en {% else %}crea una cuenta de usuario {% endif %}mediante aprovisionamiento Just-in-Time (JIT) de SAML la primera vez que alguien navega a {% ifversion fpt or ghec %}los recursos en {% endif %} {% data variables.product.product_name %} e inicia sesión mediante la autenticación con el IdP. Es posible que tenga que notificar manualmente a los usuarios cuando les conceda acceso a {% data variables.product.product_name %} y {% ifversion fpt or ghec %}desaprovisionar manualmente el acceso {% else %}desactivar la cuenta del usuario en {% endif %}{% data variables.product.product_name %} durante la retirada. Puedes usar SCIM para {% ifversion ghec %}aprovisionar o desaprovisionar{% elsif ghae %}crear o suspender el{% endif %} {% ifversion fpt or ghec %}acceso a las organizaciones propiedad de la empresa en las cuentas de usuario de {% data variables.product.prodname_dotcom_the_website %} {% else %} y el acceso a {% data variables.product.product_name %} {% endif %}de forma automática cuando asigne o anule la asignación de la aplicación en IdP.
