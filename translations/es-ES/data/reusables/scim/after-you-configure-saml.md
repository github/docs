---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193398"
---
Predeterminadamente, tus IdP no se comunican con {% data variables.product.product_name %} automáticamente cuando asignas o desasignas la aplicación. {% data variables.product.product_name %} {% ifversion fpt or ghec %}aprovisiona el acceso a los recursos en {% else %}crea una cuenta de usuario {% endif %}mediante aprovisionamiento Just-in-Time (JIT) de SAML la primera vez que alguien navega a {% ifversion fpt or ghec %}los recursos en {% endif %} {% data variables.product.product_name %} e inicia sesión mediante la autenticación con el IdP. Es posible que tenga que notificar manualmente a los usuarios cuando les conceda acceso a {% data variables.product.product_name %} y {% ifversion fpt or ghec %}desaprovisionar manualmente el acceso {% else %}desactivar la cuenta del usuario en {% endif %}{% data variables.product.product_name %} durante la retirada.

Como alternativa, en lugar del aprovisionamiento JIT de SAML, puedes usar SCIM para {% ifversion ghec %}aprovisionar o desaprovisionar{% elsif ghae or scim-for-ghes %}crear o suspender{% endif %} {% ifversion fpt or ghec %}el acceso a las organizaciones que posee la empresa en las cuentas de usuario de {% data variables.product.prodname_dotcom_the_website %} {% else %}y conceder o denegar el acceso a {% data variables.location.product_location %} {% endif %}automáticamente después de asignar o desasignar la aplicación en el IdP.{% ifversion scim-for-ghes %} SCIM para {% data variables.product.product_name %} actualmente se encuentra en versión beta privada y está sujeto a cambios.{% endif %}
