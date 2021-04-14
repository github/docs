---
title: Testar seu aplicativo
intro: 'O GitHub recomenda testar seu aplicativo com APIs e webhooks antes de enviar sua listagem para o {% data variables.product.prodname_marketplace %}, para que você possa oferecer uma experiência ideal para os clientes. Antes que um especialista em integração aprove seu aplicativo, ele deverá tratar adequadamente os fluxos de cobrança.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
versions:
  free-pro-team: '*'
topics:
  - marketplace
---



### Testar aplicativos

Você pode usar um rascunho de anúncio de {% data variables.product.prodname_marketplace %} para simular cada um dos fluxos de cobrança. Uma listagem com status de rascunho significa que não foi enviada à aprovação. Qualquer compra que você fizer usando uma listagem de rascunho do {% data variables.product.prodname_marketplace %} _não criará_ transações reais e o GitHub não efetuará nenhuma cobrança no seu cartão de crédito. Para mais informações, consulte "[Elaborar um anúncio para o seu aplicativo](/developers/github-marketplace/drafting-a-listing-for-your-app)" e "[Usar a API de {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

#### Usar um aplicativo de desenvolvimento com uma listagem de rascunho para testar alterações

Uma listagem do {% data variables.product.prodname_marketplace %} só pode ser associada a um único registro do aplicativo, e cada aplicativo só pode acessar sua própria listagem do {% data variables.product.prodname_marketplace %}. Por este motivo, recomendamos configurar um aplicativo de desenvolvimento separado, com a mesma configuração que o seu aplicativo de produção, bem como criar uma listagem de _rascunho de_ {% data variables.product.prodname_marketplace %} que você pode usar para testes. A listagem de rascunho do {% data variables.product.prodname_marketplace %} permite que você teste alterações sem afetar os usuários ativos do seu aplicativo de produção. Você nunca precisará enviar a sua lista de desenvolvimento do {% data variables.product.prodname_marketplace %}, uma vez que irá usá-la apenas para testes.

Como você pode criar apenas listagens de rascunho do {% data variables.product.prodname_marketplace %} para aplicativos públicos, você deve tornar público o seu aplicativo de desenvolvimento. Os aplicativos públicos não são detectáveis fora das listagens publicadas do {% data variables.product.prodname_marketplace %}, desde que que você não compartilhe a URL do aplicativo. Uma listagem do Marketplace com o status de rascunho é visível apenas para o proprietário do aplicativo.

Assim que você tiver um aplicativo de desenvolvimento com uma listagem de rascunho, você poderá usá-lo para testar as alterações feitas no seu aplicativo enquanto os integra à API e aos webhooks do {% data variables.product.prodname_marketplace %}.

{% warning %}

Não faça compras de teste com um app que está ativo em {% data variables.product.prodname_marketplace %}.

{% endwarning %}

#### Simular eventos de compra do Marketplace

Seus cenários de teste podem exigir a definição de planos de listagem que oferecem testes grátis e alternância de assinaturas grátis e pagas. Uma vez que os downgrades e os cancelamentos não entram em vigor antes do próximo ciclo de cobrança, o GitHub fornece um recurso apenas para o desenvolvedor "Aplicar alteração Pendente" para fazer com que as ações `alterado` e `cancelado` do plano entrem em vigor imediatamente. Você pode acessar **Aplicar alteração pendente** para aplicativos de listagens do Marketplace com o status _rascunho_ em https://github.com/settings/billing#pending-cycle:

![Aplicar alterações pendentes](/assets/images/github-apps/github-apps-apply-pending-changes.png)

### Testar APIs

Para a maioria dos pontos de extremidade da API de do {% data variables.product.prodname_marketplace %}, nós também fornecemos pontos de extremidade de teste da API, que retornam dados falsos de código que você pode usar para testes. Para receber dados de teste, você deve especificar as URLs de teste, que incluem `/teste` no encaminhamento (por exemplo, `/user/marketplace_purchases/stubbed`). Para obter uma lista de pontos de extremidade compatíveis com essa abordagem de dados de teste, consulte [pontos de extremidade do {% data variables.product.prodname_marketplace %} ](/rest/reference/apps#github-marketplace). .

### Testar webhooks

O GitHub fornece ferramentas para testar as suas cargas implantadas. Para obter mais informações, consulte "[Testar webhooks](/webhooks/testing/)".
