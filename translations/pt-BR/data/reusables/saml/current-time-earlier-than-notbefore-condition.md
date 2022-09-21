---
ms.openlocfilehash: b0db396765557122de192fe6dde98aeeb0057ec2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147093160"
---
## Erro: "A hora atual é anterior à condição NotBefore"

Esse erro pode ocorrer quando há uma diferença de tempo muito grande entre o IdP e o {% data variables.product.product_name %}, o que geralmente ocorre com IdPs auto-hospedados.

{% ifversion ghes %} Para evitar esse problema, recomendamos apontar o dispositivo para a mesma origem do protocolo NTP que o IdP, se possível. {% endif %}Se você encontrar esse erro, verifique se a hora no {% ifversion ghes %}dispositivo{% else %}IdP{% endif %} está sincronizada corretamente com o servidor NTP.

Se você usa o ADFS como o IdP, defina também `NotBeforeSkew` no ADFS como 1 minuto para o {% data variables.product.prodname_dotcom %}. Se `NotBeforeSkew` for definido como 0, mesmo diferenças de tempo muito pequenas, incluindo milissegundos, poderão causar problemas de autenticação.