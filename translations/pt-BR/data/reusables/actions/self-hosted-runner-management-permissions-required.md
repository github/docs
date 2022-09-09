---
ms.openlocfilehash: 324332325762999d6daaf4241ec0f9e291ce98a8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065351"
---
Um executor auto-hospedado pode estar localizado no repositório, na organização ou {% ifversion fpt or ghec %}nas configurações de conta corporativa do {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} nas configurações da empresa do {% data variables.product.product_location %}{% endif %}. Para gerenciar um executor auto-hospedado, você deve ter as seguintes permissões, dependendo de onde o executor auto-hospedado foi adicionado:
- **Repositório do usuário**: você precisa ser o proprietário do repositório.
- **Organização**: você precisa ser um proprietário da organização. 
- **Repositório da organização**: você precisa ser um proprietário da organização ou ter acesso de administrador no repositório.
{% ifversion ghec %}
- **Conta corporativa**: você precisa ser um proprietário da empresa.
{% elsif ghes or ghae %}
- **Empresa**: você precisa ser um administrador do site do {% data variables.product.prodname_enterprise %}.
{% endif %}
