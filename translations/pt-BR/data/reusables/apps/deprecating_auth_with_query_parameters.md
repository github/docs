---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875537"
---
{% warning %}

**Aviso de reprovação:** o {% data variables.product.prodname_dotcom %} descontinuará a autenticação na API com parâmetros de consulta. A autenticação na API deve ser feita com a [autenticação básica HTTP](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% ifversion fpt or ghec %} O uso de parâmetros de consulta para autenticação na API deixou de funcionar em 5 de maio de 2021. {% endif %}  Para obter mais informações, incluindo brownouts agendados, confira a [postagem no blog](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes or ghae %} A autenticação na API com parâmetros de consulta, enquanto estavam disponíveis, deixou de ter suporte devido a preocupações sobre a segurança. Em vez disso, recomendamos que os integradores movam o token de acesso, a `client_id` ou o `client_secret` no cabeçalho. {% data variables.product.prodname_dotcom %} anunciará a remoção da autenticação por parâmetros de consulta com aviso prévio. {% endif %}

{% endwarning %}
