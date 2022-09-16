---
title: Cobrar dos clientes
intro: 'Os aplicativos no {% data variables.product.prodname_marketplace %} devem aderir às diretrizes de cobrança do GitHub e oferecer suporte aos serviços recomendados. A observância das nossas diretrizes ajuda os clientes a percorrer o processo de cobrança sem nenhuma surpresa.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /developers/github-marketplace/billing-customers
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 86f012c4a74d010ddaed9ec495ae2f5d8a8dd9eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083935'
---
## Entender o ciclo de cobrança

Os clientes podem escolher um ciclo de cobrança mensal ou anual quando ao comprar seu aplicativo. Todas as alterações feitas pelos clientes no período de cobrança e na seleção do plano vão disparar um evento `marketplace_purchase`. Veja a carga de webhook `marketplace_purchase` para ver o período de cobrança que um cliente seleciona e o início da próxima data de cobrança (`effective_date`). Para obter mais informações sobre cargas de webhook, confira "[Eventos de webhook para a API do {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)".

## Fornecer serviços de cobrança na interface de usuário do seu aplicativo

Os clientes devem ser capazes de executar as seguintes ações no site do seu aplicativo:
- Os clientes devem ser capazes de modificar ou cancelar seus planos de {% data variables.product.prodname_marketplace %} para contas pessoais e organizacionais separadamente.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## Os serviços de cobrança para upgrade, downgrade e cancelamentos

Siga estas diretrizes para upgrades, downgrade e cancelamentos para manter um processo de cobrança claro e consistente. Para obter instruções mais detalhadas sobre os eventos de compra do {% data variables.product.prodname_marketplace %}, confira "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Use a chave `marketplace_purchase` do webhook `effective_date` para determinar quando uma alteração de plano ocorrerá e sincronizar [Listar as contas de um plano](/rest/reference/apps#list-accounts-for-a-plan) periodicamente.

### Atualizações

Quando um cliente atualiza seu plano de preços ou altera seu ciclo de cobrança de mensal para anual, você deve implementar mudança imediatamente para este cliente. Você precisa aplicar um desconto proporcional ao novo plano e alterar o ciclo de cobrança.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Para obter informações sobre como criar fluxos de trabalho de upgrade e downgrade no seu aplicativo, confira "[Como processar alterações de plano](/developers/github-marketplace/handling-plan-changes)".

### Downgrades e cancelamentos

Os downgrades ocorrem quando um cliente muda de um plano pago para um plano gratuito, seleciona um plano com um custo menor que o seu plano atual, ou muda seu ciclo de cobrança de anual para mensal. Quando ocorre o downgrade ou cancelamento, você não precisa fornecer um reembolso. Em vez disso, o plano atual permanecerá ativo até o último dia do ciclo de cobrança atual. O evento `marketplace_purchase` será enviado quando o novo plano entrar em vigor no início do próximo período de cobrança do cliente.

Quando um cliente cancela um plano, você deve:
- Fazer o downgrade automaticamente para o plano grátis, caso exista.
  
  {% data reusables.marketplace.cancellation-clarification %}
- Habilitá-los para atualizar o plano por meio do GitHub, caso desejem continuar o plano mais adiante.

Para obter informações sobre como criar fluxos de trabalho de cancelamento no seu aplicativo, confira "[Como processar cancelamentos de plano](/developers/github-marketplace/handling-plan-cancellations)".
