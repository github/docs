---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878612"
---
{% warning %}

**Aviso de desuso**: {% data variables.product.prodname_dotcom %} interrumpirá la autenticación a la API mediante parámetros de consulta. La autenticación en la API debe realizarse con la [Autenticación HTTP básica](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% ifversion fpt or ghec %} El uso de parámetros de consulta para autenticarse en la API ya no funcionará el 5 de mayo de 2021. {% endif %} Para obtener más información, incluidas las interrupciones programadas, vea la [entrada de blog](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes or ghae %} La autenticación a la API mediante parámetros de búsqueda, si bien está disponible, ya no es compatible por motivos de seguridad. En su lugar, se recomienda que los integradores muevan su token de acceso, `client_id` o `client_secret` en el encabezado. {% data variables.product.prodname_dotcom %} notificará sobre la eliminación de la autenticación por parámetros de consulta con tiempo suficiente. {% endif %}

{% endwarning %}
