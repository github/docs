---
title: Configurar um webhook para notificá-lo de alterações de plano
intro: 'Após [criar um rascunho da listagem do {% data variables.product.prodname_marketplace %} ](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), você pode configurar um webhook que notifica você quando ocorrem alterações nos planos da conta do cliente. Após configurar o webhook, você pode [gerenciar os tipos de evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) no seu aplicativo.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing/
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
versions:
  free-pro-team: '*'
---



O evento do webhook do {% data variables.product.prodname_marketplace %} só pode ser configurado a partir da página de listagem {% data variables.product.prodname_marketplace %} do seu aplicativo. Você pode configurar todos os outros eventos a partir da [página de configurações de desenvolvedor do seu aplicativo](https://github.com/settings/developers). Se você não criou uma listagem do {% data variables.product.prodname_marketplace %}, leia "[Criando um rascunho da listagem {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" para aprender como fazê-lo.

### Criar um webhook

Para criar um webhook para sua listagem do {% data variables.product.prodname_marketplace %}, clique em **Webhook** na barra lateral esquerda da sua [página de listagem do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Você verá as seguintes opções de configuração de webhook necessárias para configurar seu webhook:

#### URL de carga

{% data reusables.webhooks.payload_url %}

#### Tipo de conteúdo

{% data reusables.webhooks.content_type %} O GitHub recomenda usar o tipo de conteúdo `application/json`.

#### Segredo

{% data reusables.webhooks.secret %}

#### Ativo

Por padrão, as entregas de webhook estão "Ativas". Você pode optar por desativar a entrega das cargas de webhook durante o desenvolvimento, desmarcando "Ativo". Se você desativou as entregas do webhook, será necessário selecionar "Ativo" antes de enviar seu aplicativo para revisão.

### Visualizar entregas do webhook

Uma vez configurado seu webhook do {% data variables.product.prodname_marketplace %} , você poderá inspecionar as cargas de solicitação de `POST` da página do **Webhook** da lista do seu aplicativo do [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). O GitHub não reenvia tentativas falhas de entrega. Certifique-se de que seu aplicativo possa receber todas as cargas do webhook enviadas pelo GitHub.

![Inspecione as entregas recentes do webhook de {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_webhook_deliveries.png)
