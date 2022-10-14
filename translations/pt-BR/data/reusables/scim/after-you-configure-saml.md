---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126293"
---
Por padrão, seu IdP não se comunica com {% data variables.product.product_name %} automaticamente quando você atribuir ou desatribuir o aplicativo. O {% data variables.product.product_name %} {% ifversion fpt or ghec %}provisiona o acesso aos seus recursos no {% else %}cria uma conta de usuário {% endif %}usando o provisionamento JIT (just-in-time) do SAML na primeira vez em que alguém acessa {% ifversion fpt or ghec %}seus recursos no {% endif %} {% data variables.product.product_name %} e se conecta autenticando-se por meio do IdP. Talvez seja necessário notificar manualmente os usuários ao permitir acesso ao {% data variables.product.product_name %}, e é preciso {% ifversion fpt or ghec %}desprovisionar o acesso manualmente {% else %}desativar a conta de usuário do {% endif %}{% data variables.product.product_name %} durante a integração. Use o SCIM para {% ifversion ghec %}provisionar ou desprovisionar{% elsif ghae %}criar ou suspender{% endif %} {% ifversion fpt or ghec %}o acesso às organizações pertencentes à sua empresa no {% data variables.product.prodname_dotcom_the_website %} {% else %}contas de usuário e acesso para o {% data variables.product.product_name %} {% endif %}automaticamente quando você atribui o aplicativo no seu IdP ou cancela a atribuição dele.
