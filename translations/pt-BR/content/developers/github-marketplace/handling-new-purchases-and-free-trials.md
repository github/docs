---
title: Gerenciar novas compras e testes grátis
intro: 'Quando um cliente adquire um plano pago, um teste grátis ou a versão gratuita do seu aplicativo do {% data variables.product.prodname_marketplace %}, você receberá o evento [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) com a ação `comprado`, que inicia o fluxo de compra.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
versions:
  free-pro-team: '*'
---



{% warning %}

If you offer a {% data variables.product.prodname_github_app %} in {% data variables.product.prodname_marketplace %}, your app must identify users following the OAuth authorization flow. You don't need to set up a separate {% data variables.product.prodname_oauth_app %} to support this flow. See "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for more information.

{% endwarning %}

### Etapa 1. Compra inicial e evento de webhook

Antes de um cliente comprar o seu aplicativo no {% data variables.product.prodname_marketplace %}, ele irá selecionar um [plano de listagem](/marketplace/selling-your-app/github-marketplace-pricing-plans/). O cliente também escolhe se deseja comprar o aplicativo a partir da sua conta pessoal ou a partir da conta de uma organização.

O cliente efetua a compra clicando em **Concluir pedido e começar a instalação**.

{% data variables.product.product_name %} then sends the [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) webhook with the `purchased` action to your app.

Leia o objeto `effective_date` e `marketplace_purchase` do webhook `marketplace_purchase` para determinar qual plano o cliente comprou, quando começa o ciclo de cobrança, e quando começa o próximo ciclo de cobrança.

Se o seu aplicativo oferecer um teste grátis, leia o atributo `marketplace_purchase[on_free_trial]` do webhook. Se o valor for `verdadeiro`, seu aplicativo deverá acompanhar a data de início de teste gratuito (`effective_date`) e a data em que o teste gratuito termina (`free_trial_ends_on`). Use a data `free_trial_ends_on` para exibir os dias restantes em um teste gratuito na interface de usuário do seu aplicativo. Você pode fazer isso em um banner ou na sua [interface de usuário de cobrança](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Para aprender como lidar com os cancelamentos antes de um teste grátis, consulte "[Gerenciar cancelamentos de plano](/developers/github-marketplace/handling-plan-cancellations)". Consulte "[Gerenciamento das alterações de plano](/developers/github-marketplace/handling-plan-changes)" para descobrir como fazer transição de um teste grátis para um plano pago quando um teste gratuito expira.

Consulte "[ eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)para obter um exemplo da carga de evento `marketplace_purchase`.

### Etapa 2. Instalação

If your app is a {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} prompts the customer to select which repositories the app can access when they purchase it. {% data variables.product.product_name %} then installs the app on the account the customer selected  and grants access to the selected repositories.

At this point, if you specified a **Setup URL** in your {% data variables.product.prodname_github_app %} settings, {% data variables.product.product_name %} will redirect the customer to that URL. If you do not specify a setup URL, you will not be able to handle purchases of your {% data variables.product.prodname_github_app %}.

{% note %}

**Note:** The **Setup URL** is described as optional in {% data variables.product.prodname_github_app %} settings, but it is a required field if you want to offer your app in {% data variables.product.prodname_marketplace %}.

{% endnote %}

If your app is an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} does not install it anywhere. Instead, {% data variables.product.product_name %} redirects the customer to the **Installation URL** you specified in your [{% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

When a customer purchases an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} redirects the customer to the URL you choose (either Setup URL or Installation URL) and the URL includes the customer's selected pricing plan as a query parameter: `marketplace_listing_plan_id`.

### Etapa 3. Autorização

Quando um cliente compra seu aplicativo, você deve enviar o cliente por meio do fluxo de autorização OAuth:

* If your app is a {% data variables.product.prodname_github_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Setup URL**. Follow the steps in "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

* If your app is an {% data variables.product.prodname_oauth_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Installation URL**. Follow the steps in "[Authorizing {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)."

Para qualquer tipo de aplicativo, o primeiro passo é redirecionar o cliente para https://github.com/login/oauth/authorize.

Depois que o cliente concluir a autorização, seu aplicativo receberá um token de acesso do OAuth para o cliente. Você prrecisará desse token para a próxima etapa.

{% note %}

**Observação:** Ao autorizar um cliente em um teste gratuito, conceda a ele o mesmo acesso que ele teria no plano pago.  Você irá transferi-los para o plano pago após o término do período de teste.

{% endnote %}

### Etapa 4. Provisionar as contas dos clientes

Seu aplicativo deve fornecer uma conta de cliente para todas as novas compras. Usar o token de acesso que você recebeu para o cliente na [Etapa 3. Autorização](#step-3-authorization), chame o ponto de extremidade "[Lista de assinaturas para o usuário autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)". A resposta incluirá a `conta` do cliente e mostrará se está em um teste grátis (`on_free_trial`). Use estas informações para concluir a configuração e o provisionamento.

{% data reusables.marketplace.marketplace-double-purchases %}

Se a compra for para uma organização e por usuário, você poderá solicitar que o cliente escolha quais integrantes da organização terão acesso ao aplicativo comprado.

É possível personalizar a forma como os integrantes da organização recebem acesso ao seu aplicativo. Aqui estão algumas sugestões:

**Preços fixos:** Se a compra for feita para uma organização que usa preços fixos, seu aplicativo poderá [obter todos os integrantes da organização](/rest/reference/orgs#list-organization-members) através da API e solicitar ao administrador da organização que escolha quais integrantes terão usuários pagos no lado do integrador.

**Preços por unidade:** Um método de provisionamento de estações por unidade é permitir que os usuários ocupem uma estação enquanto iniciam a sessão do aplicativo. Quando o cliente atingir o limite de contagem da estação, seu aplicativo poderá alertar o usuário de que ele precisa fazer a atualização do plano de {% data variables.product.prodname_marketplace %}.
