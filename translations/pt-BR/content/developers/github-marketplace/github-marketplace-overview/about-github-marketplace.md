---
title: Sobre o GitHub Marketplace
intro: 'Aprenda sobre {% data variables.product.prodname_marketplace %} em que você pode compartilhar seus aplicativos e ações publicamente com todos os usuários do {% data variables.product.product_name %}.'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083956'
---
O [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) conecta você aos desenvolvedores que desejam estender e aprimorar os fluxos de trabalho do {% data variables.product.prodname_dotcom %}. Você pode listar ferramentas gratuitas e pagas para os desenvolvedores usarem no {% data variables.product.prodname_marketplace %}. O {% data variables.product.prodname_marketplace %} oferece aos desenvolvedores dois tipos de ferramenta: {% data variables.product.prodname_actions %} e aplicativos, e cada ferramenta exige etapas diferentes para adicioná-lo ao {% data variables.product.prodname_marketplace %}.

## GitHub Actions

{% data reusables.actions.actions-not-verified %}

Para saber mais sobre como publicar o {% data variables.product.prodname_actions %} no {% data variables.product.prodname_marketplace %}, confira "[Como publicar ações no GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)".

## Aplicativos

Qualquer pessoa pode compartilhar seus aplicativos com outros usuários gratuitamente em {% data variables.product.prodname_marketplace %}, mas somente os aplicativos pertencentes a organizações podem vender seu aplicativo. 

Para publicar planos pagos para o seu aplicativo e exibir um selo do Marketplace, você deve concluir o processo de verificação do publicador. Para obter mais informações, confira "[Como solicitar a verificação de editor para sua organização](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)" ou "[Requisitos para listar um aplicativo](/developers/github-marketplace/requirements-for-listing-an-app)".

Uma vez que a organização atenda aos requisitos, alguém com permissões de proprietário na organização pode publicar planos pagos para qualquer um dos aplicativos. Cada aplicativo com um plano pago também passa por um processo de integração financeira para habilitar pagamentos.

Para publicar aplicativos com planos grátis, você só precisa atender aos requisitos gerais para anunciar qualquer aplicativo. Para obter mais informações, confira "[Requisitos para todas as listagens do GitHub Marketplace](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)".

### Novo nos aplicativos?

Se você estiver interessado em criar um aplicativo para o {% data variables.product.prodname_marketplace %}, mas não estiver familiarizado com os {% data variables.product.prodname_github_apps %} nem como os {% data variables.product.prodname_oauth_apps %}, confira "[Como criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" ou "[Como criar {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps)".

### {% data variables.product.prodname_github_apps %} vs. {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}, embora você possa anunciar OAuth e {% data variables.product.prodname_github_apps %} em {% data variables.product.prodname_marketplace %}. Para obter mais informações, confira "[Diferenças entre os {% data variables.product.prodname_github_apps %} e os {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)" e "[Como migrar os {% data variables.product.prodname_oauth_apps %} para os {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)".

## Publicar um aplicativo na visão geral de {% data variables.product.prodname_marketplace %}

Ao terminar de criar seu aplicativo, você poderá compartilhá-lo com outros usuários publicando-o em {% data variables.product.prodname_marketplace %}. Em resumo, o processo é:

1. Revise cuidadosamente o seu app para garantir que se comportará como esperado em outros repositórios e que segue as diretrizes das práticas recomendadas. Para obter mais informações, confira "[Melhores práticas de segurança para aplicativos](/developers/github-marketplace/security-best-practices-for-apps)" e "[Requisitos para listar um aplicativo](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)".

1. Adicionar eventos webhook ao aplicativo para rastrear solicitações de cobrança do usuário. Para obter mais informações sobre a API do {% data variables.product.prodname_marketplace %}, os eventos de webhook e as solicitações de cobrança, confira "[Como usar a API do {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

1. Crie um rascunho de listagem de {% data variables.product.prodname_marketplace %} Para obter mais informações, confira "[Como criar um rascunho de uma listagem para seu aplicativo](/developers/github-marketplace/drafting-a-listing-for-your-app)".

1. Adicionar um plano de preços. Para obter informações, confira "[Como definir planos de preços para sua listagem](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

1. Leia e aceite os termos do "[Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)".

1. Envie seu anúncio para publicação em {% data variables.product.prodname_marketplace %}. Para obter mais informações, confira "[Como enviar sua listagem para publicação](/developers/github-marketplace/submitting-your-listing-for-publication)".

## Ver como seu aplicativo está sendo executado

Você pode acessar métricas e transações para a sua listagem. Para obter mais informações, consulte:

- "[Como ver as métricas da sua listagem](/developers/github-marketplace/viewing-metrics-for-your-listing)"
- "[Como ver as transações da sua listagem](/developers/github-marketplace/viewing-transactions-for-your-listing)"

## Entrar em contato com o suporte 

Em caso de dúvidas dúvidas sobre {% data variables.product.prodname_marketplace %}, entre em contato diretamente com {% data variables.contact.contact_support %}.
