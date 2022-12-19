---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093467"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} A {% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponível para os repositórios pertencentes à organização no {% data variables.product.product_name %} se a sua empresa tem uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} A {% data variables.product.prodname_secret_scanning_caps %} está disponível para os repositórios pertencentes à organização no {% data variables.product.product_name %}. Esse é um recurso do {% data variables.product.prodname_GH_advanced_security %} (gratuito durante a versão beta).

{%- endif %} {% ifversion not ghae %}Para obter mais informações, confira "[Produtos do GitHub](/articles/githubs-products)".{% endif %}
