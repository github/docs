---
title: Gerenciar cancelamento de plano
intro: 'O cancelamento de um aplicativo de {% data variables.product.prodname_marketplace %} aciona o webhook do evento [`marketplace_purchase` event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) com a ação `cancelado`, que dá início ao fluxo de cancelamento.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
versions:
  free-pro-team: '*'
---



Para obter mais informações sobre cancelamento e como está relacionado à cobrança, consulte "[Cobrança de clientes {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)".

### Etapa 1. Evento de cancelamento

Se um cliente optar por cancelar um pedido do {% data variables.product.prodname_marketplace %}, o GitHub irá enviar um webhook de [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) com a ação `cancelado` para o seu aplicativo, quando o cancelamento entrar em vigor. Se o cliente efetuar o cancelamento durante um teste grátis, seu aplicativo receberá o evento imediatamente. Quando um cliente cancelar um plano pago, o cancelamento ocorrerá ao final do ciclo de cobrança do cliente.

### Etapa 2. Desativar as contas dos clientes

Quando um cliente cancela um plano grátis ou pago, seu aplicativo deve realizar essas etapas para concluir o cancelamento:

1. Desative a conta do cliente que cancelou o plano.
1. Revogue o token do OAuth que seu aplicativo recebeu para o cliente.
1. Se o seu aplicativo for um aplicativo OAuth, remova todos os webhooks que seu aplicativo criou para os repositórios.
1. Remova todos os dados do cliente em 30 dias após receber o evento `cancelado`.

{% note %}

**Obsevação:** Recomendamos usar a `effective_date` do webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) para determinar quando ocorrerá a mudança do plano e sincronizar periodicamente [Listar as contas para um plano](/v3/apps/marketplace/#list-accounts-for-a-plan). Para obter mais informações sobre webhooks, consulte "[eventos de webhook do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)".

{% endnote %}
