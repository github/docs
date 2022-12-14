---
title: Como exibir o uso do GitHub Copilot
intro: 'Você pode exibir quantos usuários têm acesso a {% data variables.product.prodname_copilot %} em todas as organizações em sua empresa.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193150'
---
## Sobre o uso do {% data variables.product.prodname_copilot %}

Você pode exibir informações de uso do {% data variables.product.prodname_copilot %} em sua empresa, divididas por organização ou em sua organização, divididas por status de atribuição de estação. No nível de empresa, essas informações incluem o número de estações atribuídas em cada organização e o gasto total associado a cada organização para o ciclo de cobrança atual. No nível de organização, essas informações incluem o número total de estações, estações transferidas do ciclo de cobrança anterior, novas estações adicionadas durante o ciclo atual e estações a serem removidas no final do ciclo atual. 

Se um administrador da organização tiver atribuído uma ou mais estações no meio do ciclo de cobrança atual, as informações de nível empresarial exibirão um número decimal de estações. Por exemplo, se a organização iniciou o ciclo de cobrança com 3 estações atribuídas e depois atribuiu 1 estação adicional no meio do ciclo, as informações de uso da estação exibirão 3,5 estações. O "3" que representa as estações atribuídas no início do ciclo e o "0,5" que representa a estação adicional atribuída no meio do ciclo. 

As informações de gastos exibirão os gastos totais de cada organização para o ciclo de cobrança atual. O gasto total da organização para o ciclo atual geralmente será o número de estações atribuídas, multiplicado pelo custo por estação (US$ 19 por estação por mês). No entanto, se o mesmo membro da organização receber a atribuição de uma estação em várias organizações, o uso da estação será refletido em cada organização, mas como a empresa será cobrada apenas uma vez, seus gastos serão refletidos apenas na organização onde receberam uma estação pela primeira vez.

## Como exibir o uso que você faz do{% data variables.product.prodname_copilot_for_business %}

### No nível da empresa

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. No uso mensal do "{% data variables.product.prodname_copilot_short %}," veja o detalhamento do uso que você faz do {% data variables.product.prodname_copilot %}.
    - Em "Uso de estações", você pode exibir o número total de estações atualmente atribuídas por organização, com um número decimal representando estações atribuídas em parte pelo ciclo de cobrança atual.
    - Em "Gastos", você pode ver o custo total de {% data variables.product.prodname_copilot_for_business %} para o ciclo de cobrança atual por organização.

   ![Captura de tela da página de uso do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/monthly-usage-enterprise.png)

### No nível da organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Acesso" da barra lateral, clique em **{% octicon "credit-card" aria-label="The credit card icon" %} Cobrança e planos**.
1. No "{% data variables.product.prodname_copilot_short %}", veja o detalhamento do uso que você faz do {% data variables.product.prodname_copilot %} e mudanças futuras em sua organização.
 
   ![Captura de tela da página de uso de estação do {% data variables.product.prodname_copilot %} a nível de organização](/assets/images/help/copilot/org-level-seat-view.png)
