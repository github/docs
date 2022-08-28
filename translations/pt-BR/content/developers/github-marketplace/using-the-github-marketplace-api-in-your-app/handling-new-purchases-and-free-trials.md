---
title: Gerenciar novas compras e testes grátis
intro: 'Quando um cliente adquire um plano pago, um teste grátis ou a versão gratuita do seu aplicativo do {% data variables.product.prodname_marketplace %}, você receberá o evento [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) com a ação `comprado`, que inicia o fluxo de compra.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

{% warning %}

Se você oferece um {% data variables.product.prodname_github_app %} em {% data variables.product.prodname_marketplace %}, seu aplicativo deverá identificar usuários seguindo o fluxo de autorização do OAuth. Você não precisa configurar {% data variables.product.prodname_oauth_app %} separadamente para dar suporte a este fluxo. Consulte "[Identificar e autorizar usuários para {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obter mais informações.

{% endwarning %}

### Etapa 1. Compra inicial e evento de webhook

Antes de um cliente comprar o seu aplicativo no {% data variables.product.prodname_marketplace %}, ele irá selecionar um [plano de listagem](/marketplace/selling-your-app/github-marketplace-pricing-plans/). O cliente também escolhe se deseja comprar o aplicativo a partir da sua conta pessoal ou a partir da conta de uma organização.

O cliente efetua a compra clicando em **Concluir pedido e começar a instalação**.

{% data variables.product.product_name %} depois envia o webhook de [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) com a ação `purchased` para o seu aplicativo.

Leia o objeto `effective_date` e `marketplace_purchase` do webhook `marketplace_purchase` para determinar qual plano o cliente comprou, quando começa o ciclo de cobrança, e quando começa o próximo ciclo de cobrança.

Se o seu aplicativo oferecer um teste grátis, leia o atributo `marketplace_purchase[on_free_trial]` do webhook. Se o valor for `verdadeiro`, seu aplicativo deverá acompanhar a data de início de teste gratuito (`effective_date`) e a data em que o teste gratuito termina (`free_trial_ends_on`). Use a data `free_trial_ends_on` para exibir os dias restantes em um teste gratuito na interface de usuário do seu aplicativo. Você pode fazer isso em um banner ou na sua [interface de usuário de cobrança](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Para aprender como lidar com os cancelamentos antes de um teste grátis, consulte "[Gerenciar cancelamentos de plano](/developers/github-marketplace/handling-plan-cancellations)". Consulte "[Gerenciamento das alterações de plano](/developers/github-marketplace/handling-plan-changes)" para descobrir como fazer transição de um teste grátis para um plano pago quando um teste gratuito expira.

Consulte "[ eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)para obter um exemplo da carga de evento `marketplace_purchase`.

### Etapa 2. Instalação

Se seu aplicativo é {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} irá solicitar ao cliente que selecione quais repositórios o aplicativo pode acessar quando comprá-lo. {% data variables.product.product_name %} em seguida, instala o aplicativo na conta selecionada pelo cliente e concede acesso aos repositórios selecionados.

Neste ponto, se você especificou uma **Configuração de URL** nas suas configurações de {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} irá redirecionar o cliente para essa URL. Se não especificar uma URL de configuração, você não conseguirá gerenciar as compras do seu {% data variables.product.prodname_github_app %}.

{% note %}

**Observação:** A **URL de configuração** é descrita como opcional nas configurações de {% data variables.product.prodname_github_app %}, mas é um campo obrigatório se desejar oferecer seu aplicativo em {% data variables.product.prodname_marketplace %}.

{% endnote %}

Se seu aplicativo for um {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} não irá instalá-lo em qualquer lugar. Em vez disso, {% data variables.product.product_name %} irá redirecionar o cliente para a **URL de Instalação** que você especificou no seu [ anúncio de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

Quando um cliente compra um {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} irá redirecionar o cliente para a URL que você escolher (URL de configuração ou URL de instalação) e a URL irá incluir o plano de precificação selecionado pelo cliente como um parâmetro de consulta: `marketplace_listing_plan_id`.

### Etapa 3. Autorização

Quando um cliente compra seu aplicativo, você deve enviar o cliente por meio do fluxo de autorização OAuth:

* Se seu aplicativo for {% data variables.product.prodname_github_app %}, inicie o fluxo de autorização assim que {% data variables.product.product_name %} redirecionar o cliente para a **URL de configuração**. Siga os passos em "[Identificar e autorizar usuários para {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

* Se seu aplicativo for um {% data variables.product.prodname_oauth_app %}, inicie o fluxo de autorização assim que {% data variables.product.product_name %} redirecionar o cliente para a **URL de instalação**. Siga as etapas em "[Autorizar {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)".

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
