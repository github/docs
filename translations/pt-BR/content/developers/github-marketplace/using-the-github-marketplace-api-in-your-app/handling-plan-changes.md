---
title: Gerenciar mudanças de plano
intro: 'Atualizar ou fazer downgrade de um aplicativo do {% data variables.product.prodname_marketplace %} aciona o webook do [`marketplace_purchase` event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) com a ação `alterado`, que dá início ao fluxo de atualização ou downgrade.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---
Para obter mais informações sobre atualização e downgrade com relação à cobrança, consulte "[Integração com a API do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/)".

### Etapa 1. Evento de mudança de plano de preços

O GitHub envia o webhook `marketplace_purchase` com a ação `alterado` para o seu aplicativo, quando um cliente faz qualquer uma dessas alterações no seu pedido do {% data variables.product.prodname_marketplace %}:
* Faz a atualização para um plano de preços mais caro ou para um plano de preços mais barato.
* Adiciona ou remove estações para seu plano existente.
* Altera o ciclo de cobrança.

O GitHub enviará o webhook quando a alteração entrar em vigor. Por exemplo, quando um cliente faz o downgrade de um plano, o GitHub envia o webhook no final do ciclo de cobrança do cliente. O GitHub envia um webhook para o seu aplicativo imediatamente quando um cliente atualiza seu plano para permitir que acesse o novo serviço imediatamente. Se um cliente mudar de um ciclo de cobrança mensal para anual, isso é considerado uma atualização. Consulte "[Cobrança de clientes no {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)" para saber mais sobre quais ações são consideradas um atualização ou downgrade.

Leia o `effective_date`, `marketplace_purchase` e `precedous_marketplace_purchase` do webhook `marketplace_purchase` para atualizar a data de início do plano e fazer alterações no ciclo de cobrança do cliente e no plano de preços. Consulte "[ eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)para obter um exemplo da carga de evento `marketplace_purchase`.

Se seu aplicativo oferecer testes grátis, você receberá o webhook `marketplace_purchase` com a ação `alterado` quando o teste grátis expirar. Se o teste grátis do cliente expirar, faça a atualização do cliente para a versão paga do plano grátis de teste.

### Etapa 2. Atualizar as contas dos clientes

Você precisará atualizar as informações da conta do cliente para refletir as alterações no ciclo de cobrança e no plano de preços que o cliente fez em seu pedido do {% data variables.product.prodname_marketplace %}. Exibe as atualizações para o plano de preços, `seat_count` (para planos de preços por unidade) e ciclo de cobrança no site do aplicativo do Marketplace ou na interface do usuário do seu aplicativo quando você receber a ação de webhook `alterado`.

Quando um cliente faz o downgrade de um plano, recomenda-se revisar se o cliente excedeu os limites do seu plano e interagir diretamente com ele na sua interface de usuário ou entrando em contato por telefone ou e-mail.

Para incentivar as pessoas a fazer a atualização, você pode exibir uma URL de upgrade na interface do usuário do seu aplicativo. Consulte "[Sobre as URLs de atualização](#about-upgrade-urls)" para obter mais detalhes.

{% note %}

**Observação:** Recomendamos executar uma sincronização periódica usando `GET /marketplace_listing/plans/:id/accounts` para garantir que seu aplicativo tenha o plano, as informações do ciclo de cobrança e a contagem de unidades (preço por unidade) corretos para cada conta.

{% endnote %}

### Falha nos pagamentos de atualização

{% data reusables.marketplace.marketplace-failed-purchase-event %}

### Sobre as URLs de atualização

Você pode redirecionar os usuários da interface de usuário do seu aplicativo no GitHub, usando uma URL de atualização:

```
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

Por exemplo, se você notar que um cliente está em um plano de 5 pessoas e precisa passar para um plano de 10 pessoas, você poderia exibir um botão na interface do usuário do seu aplicativo que diz "Aqui está como atualizar" ou exibir um banner com um link para a URL de atualização. A URL atualização leva o cliente para a página de confirmação de confirmação da atualização do seu plano da listagem.

Use o `LISTING_PLAN_NUMBER` para o plano que o cliente gostaria de comprar. Ao criar novos planos de preços, eles recebem um `LISTING_PLAN_NUMBER`, que é exclusivo para cada plano na sua listagem, e um `LISTING_PLAN_ID`, que é exclusivo para cada plano no {% data variables.product.prodname_marketplace %}. Você pode encontrar esses números ao [Listar planos](/rest/reference/apps#list-plans), que identifica os seus planos de preços da listagem. Use o `LISTING_PLAN_ID` e "[Listar contas de um plano](/rest/reference/apps#list-accounts-for-a-plan)" para obter o `CUSTOMER_ACCOUNT_ID`.


{% note %}

**Observação:** Se seu cliente atualiza unidades adicionais (como estações), você ainda poderá enviá-las para o plano apropriado para a compra, mas não podemos suportar os parâmetros de `unit_count` neste momento.

{% endnote %}
