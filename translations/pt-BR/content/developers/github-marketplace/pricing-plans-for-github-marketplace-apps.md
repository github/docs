---
title: Planos de preços para aplicativos do GitHub Marketplace
intro: 'Os planos de preços permitem que você forneça ao seu aplicativo diferentes níveis de serviço ou recursos. Você pode oferecer até 10 planos de preços na sua listagem do {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans/
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
versions:
  free-pro-team: '*'
---



Os planos de preço em {% data variables.product.prodname_marketplace %} podem ser grátis, fixos ou por unidade, e o GitHub lista o preço em dólar. Os clientes compram o seu aplicativo usando um método de pagamento anexado à sua conta de {% data variables.product.product_name %}, sem ter de sair do GitHub.com. Você não precisa escrever código para executar transações de cobrança, mas terá que gerenciar os [fluxos de cobrança](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows) para os eventos de compra.

Se o aplicativo que você está listando no {% data variables.product.prodname_marketplace %} tiver várias opções de plano, você poderá definir os planos de preços correspondentes. Por exemplo, se o app tiver duas opções de plano, um plano de código aberto e um plano profissional, você poderá criar um plano de preços grátis para o seu plano de código aberto e um plano de preço fixo para o seu plano profissional. Cada listagem do {% data variables.product.prodname_marketplace %} deve ter um preço anual e um preço mensal para todos os planos listados.

Para obter mais informações sobre como criar um plano de preços, consulte "[Configurar um plano de preços da listagem de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".

{% note %}

**Observação:** Se você estiver listando um aplicativo em {% data variables.product.prodname_marketplace %}, você não poderá listar seu aplicativo com um plano de preços grátis, caso você ofereça um serviço pago fora do {% data variables.product.prodname_marketplace %}.

{% endnote %}

### Tipos de planos de preços

Os **Planos de preços grátis** são completamente grátis para os usuários. Se você configurar um plano de preços grátis, você não poderá cobrar os usuários que escolherem o plano de preços grátis para o uso do seu aplicativo. Você pode criar planos grátis e pagos para a sua listagem. Os aplicativos grátis e não verificados não precisam implementar nenhum fluxo de cobrança. Os aplicativos grátis verificados pelo Github precisam implementar fluxos de cobrança para novas compras e cancelamentos, mas não precisam implementar fluxos de cobrança para testes grátis, atualizações e downgrade. Se você adicionar um plano pago a um aplicativo que já está listado no {% data variables.product.prodname_marketplace %} como um serviço grátis, você deverá reenviar o aplicativo para revisão.

**Os planos de preços fixos** cobram uma taxa definida mensalmente e anualmente.

**Os planos de preços por unidade** cobram uma taxa definida mensalmente ou anualmente para uma unidade que você especificar. Uma "unidade" pode ser qualquer coisa que você deseje (por exemplo, um usuário, estação ou pessoa).

Os **Testes grátis do Marketplace** fornecem aos clientes testes grátis dos aplicativos OAuth ou GitHub por 14 dias. Ao [configurar um plano de preços do Marketplace](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/), Você poderá selecionar a opção de fornecer um teste grátis para planos de preços fixos ou por unidade.

### Testes grátis

Os clientes podem iniciar um teste grátis para qualquer plano pago disponível em uma listagem do Marketplace, mas não poderão criar mais de um teste grátis para um produto do Mercado.

Os testes gratuitos têm uma duração fixa de 14 dias. Os clientes são notificados 4 dias antes do final do período de teste (no 11o dia do teste grátis) de que seu plano será atualizado. No final do teste grátis, os clientes serão inscritos automaticamente no plano que estão testando, caso não efetuem o cancelamento.

Consulte "[Novas compras e testes grátis](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" para detalhes sobre como gerenciar testes grátis no seu aplicativo.

{% note %}

**Observação:** O GitHub espera que você exclua quaisquer dados privados do cliente no prazo de 30 dias após o cancelamento do teste, a contar do recebimento do evento de cancelamento.

{% endnote %}
