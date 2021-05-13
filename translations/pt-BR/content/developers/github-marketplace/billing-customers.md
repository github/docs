---
title: Cobrar dos clientes
intro: 'Os aplicativos no {% data variables.product.prodname_marketplace %} devem aderir às diretrizes de cobrança do GitHub e oferecer suporte aos serviços recomendados. A observância das nossas diretrizes ajuda os clientes a percorrer o processo de cobrança sem nenhuma surpresa.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace/
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace/
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



### Entender o ciclo de cobrança

Os clientes podem escolher um ciclo de cobrança mensal ou anual quando ao comprar seu aplicativo. Todas as alterações que os clientes fazem no ciclo de cobrança e seleção de plano acionará um evento de `marketplace_purchase`. Você pode fazer referência à carga do webhook `marketplace_purchase` para ver qual ciclo de cobrança um cliente seleciona e quando começa a próxima data de cobrança (`effective_date`). Para obter mais informações sobre cargas de webhook, consulte "[eventos de Webhook para a API de {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)".

### Fornecer serviços de cobrança na interface de usuário do seu aplicativo

Os clientes devem ser capazes de executar as seguintes ações no site do seu aplicativo:
- Os clientes devem ser capazes de modificar ou cancelar seus planos de {% data variables.product.prodname_marketplace %} para contas pessoais e organizacionais separadamente.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

### Os serviços de cobrança para upgrade, downgrade e cancelamentos

Siga estas diretrizes para upgrades, downgrade e cancelamentos para manter um processo de cobrança claro e consistente. Para obter instruções mais detalhadas sobre os eventos de compra de {% data variables.product.prodname_marketplace %}, consulte "[Usar a API de {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Você pode usar a chave do `marketplace_purchase` do webhook `effective_date` para determinar quando a mudança de um plano irá ocorrer e sincronizar periodicamente as [Lista de contas para um plano](/rest/reference/apps#list-accounts-for-a-plan).

#### Atualizações

Quando um cliente atualiza seu plano de preços ou altera seu ciclo de cobrança de mensal para anual, você deve implementar mudança imediatamente para este cliente. Você precisa aplicar um desconto proporcional ao novo plano e alterar o ciclo de cobrança.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Para obter informações sobre a criação fluxos de trabalho de atualização e downgrade no seu aplicativo, consulte "[Gerenciando alterações do plano](/developers/github-marketplace/handling-plan-changes)".

#### Downgrades e cancelamentos

Os downgrades ocorrem quando um cliente muda de um plano pago para um plano gratuito, seleciona um plano com um custo menor que o seu plano atual, ou muda seu ciclo de cobrança de anual para mensal. Quando ocorre o downgrade ou cancelamento, você não precisa fornecer um reembolso. Em vez disso, o plano atual permanecerá ativo até o último dia do ciclo de cobrança atual. O evento `marketplace_purchase` será enviado quando o novo plano entrar em vigor no início do próximo ciclo de cobrança do cliente.

Quando um cliente cancela um plano, você deve:
- Fazer o downgrade automaticamente para o plano grátis, caso exista.

  {% data reusables.marketplace.cancellation-clarification %}
- Habilitá-los para atualizar o plano por meio do GitHub, caso desejem continuar o plano mais adiante.

Para obter informações sobre a construção de fluxos de trabalho de cancelamento no seu aplicativo, consulte "[Manipulação de cancelamento de plano](/developers/github-marketplace/handling-plan-cancellations)".
