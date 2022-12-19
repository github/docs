---
ms.openlocfilehash: f4ea2cee931b8d44b44f0febba3304f41bac404c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084250"
---
Você pode iniciar projetos por meio de um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para o servidor usando uma chave de implantação, que é uma chave SSH que permite acesso a um só repositório. {% data variables.product.product_name %} anexa a parte pública da chave diretamente ao repositório em vez de uma conta pessoal, e a parte privada da chave permanece no seu servidor. Para obter mais informações, confira "[Como entregar implantações](/rest/guides/delivering-deployments)".
