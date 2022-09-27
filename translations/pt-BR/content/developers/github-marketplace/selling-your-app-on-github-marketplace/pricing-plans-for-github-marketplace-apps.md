---
title: Planos de preços para aplicativos do GitHub Marketplace
intro: 'Os planos de preços permitem que você forneça ao seu aplicativo diferentes níveis de serviço ou recursos. Você pode oferecer até 10 planos de preços na sua listagem do {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
  - /developers/github-marketplace/pricing-plans-for-github-marketplace-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Pricing plans for apps
ms.openlocfilehash: e1ab751c26e59ec42e16dc7d9e5c0118dedffbde
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875559'
---
Os planos de preços de {% data variables.product.prodname_marketplace %} podem ser grátis, fixos ou por unidade. Os preços são definidos, exibidos e processados em dólares. Os planos pagos são restritos a aplicativos publicados por editores verificados. Para obter mais informações sobre como se tornar um fornecedor verificado, confira "[Como solicitar a verificação de fornecedor para sua organização](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

Os clientes compram seu aplicativo usando um método de pagamento anexado à sua conta em {% data variables.product.product_location %}, sem ter que sair de {% data variables.product.prodname_dotcom_the_website %}. Você não precisa escrever um código para realizar transações de cobrança, mas deverá gerenciar eventos da API de {% data variables.product.prodname_marketplace %}. Para obter mais informações, confira "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Se o aplicativo que você está listando no {% data variables.product.prodname_marketplace %} tiver várias opções de plano, você poderá definir os planos de preços correspondentes. Por exemplo, se o app tiver duas opções de plano, um plano de código aberto e um plano profissional, você poderá criar um plano de preços grátis para o seu plano de código aberto e um plano de preço fixo para o seu plano profissional. Cada listagem do {% data variables.product.prodname_marketplace %} deve ter um preço anual e um preço mensal para todos os planos listados.

Para obter mais informações sobre como criar um plano de preços, confira "[Como definir um plano de preços de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".

{% data reusables.marketplace.free-plan-note %}

## Tipos de planos de preços

### Planos de preços grátis

{% data reusables.marketplace.free-apps-encouraged %}

Planos grátis são completamente grátis para os usuários. Se você configurar um plano de preços grátis, você não poderá cobrar os usuários que escolherem o plano de preços grátis para o uso do seu aplicativo. Você pode criar planos grátis e pagos para a sua listagem.

Todos os aplicativos precisam gerenciar eventos para novas compras e cancelamentos. Os aplicativos que só têm planos grátis não precisam gerenciar eventos para testes, atualizações e downgrades grátis. Para obter mais informações, confira: "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Se você adicionar um plano pago a um aplicativo que já esteja listado em {% data variables.product.prodname_marketplace %} como um serviço grátis, você precisará solicitar verificação para o aplicativo e passar pela integração financeira.

### Planos de preços pagos

Existem dois tipos de planos de preços pagos:

- Os planos de preços fixos cobram uma taxa definida mensalmente e anualmente.

- Os planos de preços por unidade cobram uma taxa definida mensalmente ou anualmente para uma unidade que você especificar. Uma "unidade" pode ser qualquer coisa que você deseje (por exemplo, um usuário, estação ou pessoa).

Você também pode oferecer testes grátis. Eles fornecem gratuitamente testes de 14 dias referentes aos aplicativos OAuth ou GitHub para os clientes. Ao configurar um plano de preços do Marketplace você poderá selecionar a opção de fornecer um teste gratuito para planos de taxa fixa ou por unidade de preços

## Avaliações gratuitas

Os clientes podem iniciar uma avaliação gratuita para qualquer plano pago de um anúncio do Marketplace que inclui testes grátis. No entanto, os clientes não podem criar mais de um teste grátis por produto no marketplace.

Os testes gratuitos têm uma duração fixa de 14 dias. Os clientes são notificados 4 dias antes do final do período de teste (no 11o dia do teste grátis) de que seu plano será atualizado. No final do teste grátis, os clientes serão inscritos automaticamente no plano que estão testando, caso não efetuem o cancelamento.

Para obter mais informações, confira: "[Como lidar com novas compras e avaliações gratuitas](/developers/github-marketplace/handling-new-purchases-and-free-trials/)".

{% note %}

**Observação:** o GitHub espera que você exclua todos os dados particulares do cliente no prazo de 30 dias após o cancelamento da avaliação, a contar do recebimento do evento de cancelamento.

{% endnote %}
