---
title: Testando seu aplicativo
intro: 'O GitHub recomenda testar seu aplicativo com APIs e webhooks antes de enviar sua listagem para o {% data variables.product.prodname_marketplace %}, para que você possa oferecer uma experiência ideal para os clientes. Antes que um especialista em integração aprove seu aplicativo, ele deverá tratar adequadamente os fluxos de cobrança.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: c542f5bd46e4555a4459c669e2f9d75e29b63ffe
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093921'
---
## Testar aplicativos

Você pode usar um rascunho de anúncio de {% data variables.product.prodname_marketplace %} para simular cada um dos fluxos de cobrança. Uma listagem com status de rascunho significa que não foi enviada à aprovação. Todas as compras que você fizer usando uma listagem de rascunho do {% data variables.product.prodname_marketplace %} _não_ criarão transações reais e o GitHub não cobrará seu cartão de crédito. Observe que você só pode simular compras para planos publicados no rascunho do anúncio e não para rascunho de planos. Para obter mais informações, confira "[Como criar um rascunho de uma listagem para seu aplicativo](/developers/github-marketplace/drafting-a-listing-for-your-app)" e "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

### Usar um aplicativo de desenvolvimento com uma listagem de rascunho para testar alterações

Uma listagem do {% data variables.product.prodname_marketplace %} só pode ser associada a um único registro do aplicativo, e cada aplicativo só pode acessar sua própria listagem do {% data variables.product.prodname_marketplace %}. Por esses motivos, recomendamos configurar um aplicativo de desenvolvimento separado, com a mesma configuração do aplicativo de produção e criar uma listagem de _rascunho_ do {% data variables.product.prodname_marketplace %} que você poderá usar para teste. A listagem de rascunho do {% data variables.product.prodname_marketplace %} permite que você teste alterações sem afetar os usuários ativos do seu aplicativo de produção. Você nunca precisará enviar a sua lista de desenvolvimento do {% data variables.product.prodname_marketplace %}, uma vez que irá usá-la apenas para testes.

Como você pode criar apenas listagens de rascunho do {% data variables.product.prodname_marketplace %} para aplicativos públicos, você deve tornar público o seu aplicativo de desenvolvimento. Os aplicativos públicos não são detectáveis fora das listagens publicadas do {% data variables.product.prodname_marketplace %}, desde que que você não compartilhe a URL do aplicativo. Uma listagem do Marketplace com o status de rascunho é visível apenas para o proprietário do aplicativo.

Assim que você tiver um aplicativo de desenvolvimento com uma listagem de rascunho, você poderá usá-lo para testar as alterações feitas no seu aplicativo enquanto os integra à API e aos webhooks do {% data variables.product.prodname_marketplace %}.

{% warning %}

Não faça compras de teste com um app que está ativo em {% data variables.product.prodname_marketplace %}.

{% endwarning %}

### Simular eventos de compra do Marketplace

Seus cenários de teste podem exigir a definição de planos de listagem que oferecem testes grátis e alternância de assinaturas grátis e pagas. Como os downgrades e os cancelamentos não entrarão em vigor até o próximo período de cobrança, o GitHub fornece um recurso somente para desenvolvedores para "Aplicar Alteração Pendente" para forçar as ações de plano `changed` e `cancelled` a entrarem em vigor imediatamente. Acesse **Aplicar Alteração Pendente** para aplicativos com listagens de _rascunho_ do Marketplace em https://github.com/settings/billing#pending-cycle:

![Aplicar alterações pendentes](/assets/images/github-apps/github-apps-apply-pending-changes.png)

## Testar APIs

Para a maioria dos pontos de extremidade da API de do {% data variables.product.prodname_marketplace %}, nós também fornecemos pontos de extremidade de teste da API, que retornam dados falsos de código que você pode usar para testes. Para receber dados com stub, você precisa especificar URLs com stub, que incluem `/stubbed` na rota (por exemplo, `/user/marketplace_purchases/stubbed`). Para ver uma lista de pontos de extremidade que dão suporte a essa abordagem de dados com stub, confira [Pontos de extremidade do {% data variables.product.prodname_marketplace %}](/rest/reference/apps#github-marketplace).

## Testar webhooks

O GitHub fornece ferramentas para testar as suas cargas implantadas. Para obter mais informações, confira "[Como testar webhooks](/webhooks/testing/)".
