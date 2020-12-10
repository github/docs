---
title: Definir planos de cobrança para sua listagem
intro: 'Ao [listar seu aplicativo no {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/), você poderá optar por fornecer seu aplicativo como um serviço grátis ou vender seu aplicativo. Se você pretende vender seu aplicativo, você pode criar planos de preços diferentes para diferentes níveis de recursos.'
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



### Criar planos de preços

Para saber mais sobre os tipos de planos de preços que o {% data variables.product.prodname_marketplace %} oferece, consulte "[ planos de preços do {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/)". Você também encontrará as diretrizes úteis de cobrança em "[Vender seu aplicativo](/marketplace/selling-your-app/)".

Os planos de preços podem ter status de rascunho ou publicado. Se você não enviou sua listagem do {% data variables.product.prodname_marketplace %} para aprovação, uma listagem publicada funcionará da mesma forma que as listagens de rascunho até que seu aplicativo seja aprovado e listado no {% data variables.product.prodname_marketplace %}. As listagens em rascunho permitem que você crie e salve novos planos de preços sem disponibiliz-alos na sua página de listagem do {% data variables.product.prodname_marketplace %}. Após publicar o plano de preços, ele será disponibilizado aos clientes para compra imediata. Você pode publicar até 10 planos de preços.

Para criar um plano de preços para a sua listagem do {% data variables.product.prodname_marketplace %}, clique em **Planos e preços** na barra lateral esquerda da sua [página de listagem do {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Se você ainda não criou uma listagem do {% data variables.product.prodname_marketplace %}, leia "[Criar uma listagem em rascunho do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" para aprender como fazê-lo.

Ao clicar em **Novo rascunho do plano**, você verá um formulário que permite que você personalize o seu plano de preços. Você precisará configurar os seguintes campos para criar um plano de preços:

#### Nome do plano

O nome do seu plano de preços aparecerá na página inicial do seu aplicativo do {% data variables.product.prodname_marketplace %}. Você pode personalizar o nome do seu plano de preços para alinhar-se aos recursos do plano, ao tamanho da empresa que usará o plano ou qualquer coisa que desejar.

#### Modelos de preços

##### Planos grátis

{% data reusables.marketplace.free-apps-encouraged %} Um plano grátis ainda exigue que você gerencie os fuxos de cobrança da [nova compra](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/) e do [cancelamento](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/). Consulte "[Fluxos de cobrança](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)" para obter mais informações.

##### Planos de preços fixos

Os planos de preços fixos permitem que você ofereça seu serviço aos clientes a uma taxa fixa. {% data reusables.marketplace.marketplace-pricing-free-trials %}

Você deve definir um preço para as assinaturas mental e anual emS. dólar para os planos de preços fixos.

##### Planos por unidade

Os preços por unidade permite que você ofereça seu aplicativo em unidades. Por exemplo, uma unidade pode ser uma pessoa, estação ou usuário. Você precisará fornecer um nome para a unidade e definir um preço para assinaturas mental e anual em dólar. Dólar.

#### Disponível para

Os planos de preços do {% data variables.product.prodname_marketplace %} podem ser aplicados às **contas pessoais e de organizações**, **apenas às contas pessoais**, ou **apenas às contas de organizações**. Por exemplo, se o seu plano de preços for por unidade e fornecer várias estações, você selecionaria **apenas contas de organização**, porque não há nenhuma maneira de atribuir estações a pessoas de uma organização a partir de uma conta pessoal.

#### Descrição curta

Escreva um breve resumo das informações do plano de preços. A descrição pode incluir o tipo de cliente para o qual o plano se destina ou os recursos que o plano inclui.

#### Marcadores

Você pode escrever até quatro marcadores que incluem mais informações sobre seu plano de preços. Os marcadores podem incluir casos de uso do seu aplicativo ou listar informações mais detalhadas sobre as características ou os recursos incluídos no plano.

### Alterar um plano de preços da listagem do {% data variables.product.prodname_marketplace %}

Se um plano de preços para seu plano do {% data variables.product.prodname_marketplace %} não for mais necessário ou se você precisar ajustar as informações de preço, será possível removê-lo.

![Botão para remover o seu plano de preços](/assets/images/marketplace/marketplace_remove_this_plan.png)

Após publicar um plano de preços para um aplicativo já listado no {% data variables.product.prodname_marketplace %}, não será possível fazer alterações no plano. Em vez disso, você deverá remover o plano de preços. Os clientes que já compraram o plano de preços removido continuarão a usá-lo até que optem por sair o plano e passar para um novo plano de preços. Para obter mais informações sobre os planos de preços, consulte[ planos de preços do {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/)".

Depois de remover um plano de preços, os usuários não poderão comprar seu aplicativo que usa esse plano. Os usuários existentes no plano de preços removido continuarão no plano até que cancelem sua assinatura do plano.

{% note %}

**Observação:** {% data variables.product.product_name %} não pode remover usuários de um plano de preços removido. Você pode realizar uma campanha para incentivar os usuários a atualizar ou fazer downgrade do plano de preços removido para um novo plano de preços.

{% endnote %}

Você pode desativar os testes grátis do GitHub Marketplace sem remover o plano de preços, mas isso impede que você inicie futuros testes grátis para esse plano. Se você optar por desativar os testes grátis para um plano de preços, os usuários já inscritos poderão concluir o seu teste gratuito.

Depois de remover um plano de preços, você poderá criar um novo plano com o mesmo nome do plano de preços removido. Por exemplo, se você tem um plano de preços "Pro", mas precisa alterar o preço fixo, você poderá remover o plano de preços "Pro" e criar um novo plano de preços "Pro" com um preço atualizado. Os usuários poderão comprar o novo plano de preços imediatamente.
