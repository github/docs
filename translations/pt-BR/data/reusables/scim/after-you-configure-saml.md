---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193142"
---
Por padrão, seu IdP não se comunica com {% data variables.product.product_name %} automaticamente quando você atribuir ou desatribuir o aplicativo. O {% data variables.product.product_name %} {% ifversion fpt or ghec %}provisiona o acesso aos seus recursos no {% else %}cria uma conta de usuário {% endif %}usando o provisionamento JIT (just-in-time) do SAML na primeira vez em que alguém acessa {% ifversion fpt or ghec %}seus recursos no {% endif %} {% data variables.product.product_name %} e se conecta autenticando-se por meio do IdP. Talvez seja necessário notificar manualmente os usuários ao permitir acesso ao {% data variables.product.product_name %}, e é preciso {% ifversion fpt or ghec %}desprovisionar o acesso manualmente {% else %}desativar a conta de usuário do {% endif %}{% data variables.product.product_name %} durante a integração.

Como alternativa, em vez do provisionamento SAML JIT, você pode usar o SCIM para {% ifversion ghec %}provisionar ou desprovisionar{% elsif ghae or scim-for-ghes %}criar ou suspender{% endif %} {% ifversion fpt or ghec %}acessar organizações pertencentes à sua empresa em contas de usuário do {% data variables.product.prodname_dotcom_the_website %} {% else %} e conceder ou negar acesso a {% data variables.location.product_location %} {% endif %}automaticamente depois de atribuir ou cancelar a atribuição do aplicativo em seu IdP.{% ifversion scim-for-ghes %} SCIM para {% data variables.product.product_name %} está atualmente em beta privado e está sujeito a alterações.{% endif %}
