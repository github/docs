---
title: Definir planos de cobrança para sua listagem
intro: 'Quando você listar seu aplicativo em {% data variables.product.prodname_marketplace %}, você poderá escolher fornecer seu aplicativo como um serviço grátis ou vender seu aplicativo. Se você pretende vender seu aplicativo, você pode criar planos de preços diferentes para diferentes níveis de recursos.'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
versions:
  free-pro-team: '*'
---

### Sobre a configuração dos planos de preços

Se desejar vender um aplicativo em {% data variables.product.prodname_marketplace %}, você deverá solicitar verificação ao publicar o anúncio do seu aplicativo. Durante o processo de verificação, um especialista em integração verifica as configurações de identidade e segurança da organização. O especialista em integração fará com que a organização passe pela integração financeira. Para mais informações, consulte: "[Requisitos para anunciar um aplicativo em {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)".

{% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obter informações sobre como fazer isso, consulte: "[Enviar o seu anúncio para publicação](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% data variables.product.prodname_marketplace %} oferece vários tipos diferentes de plano de preços. Para obter informações detalhadas, consulte "[Planos de preços para {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)".

### Sobre como salvar planos de preços

Você pode salvar planos de preços com status de rascunho ou publicado. If you haven't submitted your {% data variables.product.prodname_marketplace %} listing for approval, a published plan will function in the same way as a draft plan until your listing is approved and shown on {% data variables.product.prodname_marketplace %}. Draft plans allow you to create and save new pricing plans without making them available on your {% data variables.product.prodname_marketplace %} listing page. Depois de publicar um plano de preços em um anúncio publicado, os clientes poderão comprar imediatamente. Você pode publicar até 10 planos de preços.

Para obter diretrizes sobre os clientes de cobrança, consulte "[Clientes de cobrança](/developers/github-marketplace/billing-customers)".

### Criar planos de preços

Para criar um plano de preços para a sua listagem do {% data variables.product.prodname_marketplace %}, clique em **Planos e preços** na barra lateral esquerda da sua [página de listagem do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Para obter mais informações, consulte "[Criar um rascunho de anúncio de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)."

Ao clicar em **Novo rascunho do plano**, você verá um formulário que permite que você personalize o seu plano de preços. Você precisará configurar os seguintes campos para criar um plano de preços:

- **Nome do plano** - O nome do seu plano de preços aparecerá na página inicial do aplicativo de {% data variables.product.prodname_marketplace %}. Você pode personalizar o nome do seu plano de preços para se alinhar com os recursos do plano, o tamanho da empresa que usará o plano ou qualquer coisa que desejar.

- **Modelos de preços** - Existem três tipos de plano de preços: gratuito, taxa fixa e por unidade. Todos os planos exigem que você processe novos eventos de compra e cancelamento da API do marketplace. Além disso, para os planos pagos:

  - Você deve definir um preço para as assinaturas mensais e anuais em dólar.
  - Seu aplicativo deve processar eventos de mudança de plano.
  - Você deve solicitar verificação para publicar um anúncio com um plano pago.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  For detailed information, see "[Pricing plans for {% data variables.product.prodname_marketplace %} apps](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)" and "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

- **Available for** - {% data variables.product.prodname_marketplace %} pricing plans can apply to **Personal and organization accounts**, **Personal accounts only**, or **Organization accounts only**. Por exemplo, se o seu plano de preços for por unidade e fornecer várias estações, você selecionaria **apenas contas de organização**, porque não há nenhuma maneira de atribuir estações a pessoas de uma organização a partir de uma conta pessoal.

- **Short description** - Write a brief summary of the details of the pricing plan. A descrição pode incluir o tipo de cliente para o qual o plano se destina ou os recursos que o plano inclui.

- **Bullets** - You can write up to four bullets that include more details about your pricing plan. Os marcadores podem incluir casos de uso do seu aplicativo ou listar informações mais detalhadas sobre as características ou os recursos incluídos no plano.

{% data reusables.marketplace.free-plan-note %}

### Alterar um plano de preços da listagem do {% data variables.product.prodname_marketplace %}

If a pricing plan for your {% data variables.product.prodname_marketplace %} listing is no longer needed, or if you need to adjust pricing details, you can remove it.

![Botão para remover o seu plano de preços](/assets/images/marketplace/marketplace_remove_this_plan.png)

Once you publish a pricing plan for an app that is already listed in {% data variables.product.prodname_marketplace %}, you can't make changes to the plan. Em vez disso, você precisará remover o plano de preços e criar um novo plano. Os clientes que já compraram o plano de preços removido continuarão a usá-lo até que optem por sair o plano e passar para um novo plano de preços. Para obter mais informações sobre os planos de preços, consulte[ planos de preços do {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/)".

Depois de remover um plano de preços, os usuários não poderão comprar seu aplicativo que usa esse plano. Os usuários existentes no plano de preços removido continuarão no plano até que cancelem sua assinatura do plano.

{% note %}

**Observação:** {% data variables.product.product_name %} não pode remover usuários de um plano de preços removido. Você pode realizar uma campanha para incentivar os usuários a atualizar ou fazer downgrade do plano de preços removido para um novo plano de preços.

{% endnote %}

Você pode desativar os testes grátis do GitHub Marketplace sem remover o plano de preços, mas isso impede que você inicie futuros testes grátis para esse plano. Se você optar por desativar os testes grátis para um plano de preços, os usuários já inscritos poderão concluir o seu teste gratuito.

Depois de remover um plano de preços, você poderá criar um novo plano com o mesmo nome do plano de preços removido. Por exemplo, se você tem um plano de preços "Pro", mas precisa alterar o preço fixo, você poderá remover o plano de preços "Pro" e criar um novo plano de preços "Pro" com um preço atualizado. Os usuários poderão comprar o novo plano de preços imediatamente.
