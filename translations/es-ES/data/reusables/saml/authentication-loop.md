---
ms.openlocfilehash: 7e0f711826a1f1ea1bee8cec18bf5b4614815174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109924"
---
## Los usuarios se redirigen repetidamente para autenticarse

Si los usuarios se redirigen repetidamente al símbolo del sistema de autenticación de SAML en un bucle, es posible que tenga que aumentar la duración de la sesión de SAML en la configuración de IdP. 

El valor `SessionNotOnOrAfter` enviado en una respuesta SAML determina cuándo se redirigirá un usuario de nuevo al IdP para autenticarse. Si se configura una duración de sesión de SAML de 2 horas o menos, {% data variables.product.prodname_dotcom_the_website %} actualizará una sesión de SAML 5 minutos antes de que expire. Si la duración de la sesión está configurada como 5 minutos o menos, los usuarios pueden quedarse bloqueados en un bucle de autenticación SAML. 

Para solucionar este problema, se recomienda configurar una duración mínima de la sesión de SAML de 4 horas. Para obtener más información, consulta "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout)".
