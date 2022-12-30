---
ms.openlocfilehash: a9ba68f182b48a4186a4ae63909ef4e146d7c392
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107879"
---
## Erro: "A hora atual é anterior à condição NotBefore"

Esse erro pode ocorrer quando há uma diferença de tempo muito grande entre o IdP e o {% data variables.product.product_name %}, o que geralmente ocorre com IdPs auto-hospedados.

{% ifversion ghes %} Para evitar esse problema, recomendamos apontar o dispositivo para a mesma origem do protocolo NTP que o IdP, se possível. {% endif %}Se você encontrar esse erro, verifique se a hora no {% ifversion ghes %}dispositivo{% else %}IdP{% endif %} está sincronizada corretamente com o servidor NTP.

Se você usa o ADFS como o IdP, defina também `NotBeforeSkew` no ADFS como 1 minuto para o {% data variables.product.prodname_dotcom %}. Se `NotBeforeSkew` for definido como 0, mesmo diferenças de tempo muito pequenas, incluindo milissegundos, poderão causar problemas de autenticação.
