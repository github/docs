---
title: Sobre a implantação contínua
intro: 'Você pode criar fluxos de trabalho personalizados de implantação contínua (CD) diretamente no repositório de {% data variables.product.prodname_dotcom %} com {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060135'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a implantação contínua

A CD (_implantação contínua_) é a prática de usar a automação para publicar e implantar atualizações de software. Como parte do processo típico do CD, o código é automaticamente criado e testado antes da implantação.

A implentação contínua é frequentemente acompanhada da integração contínua. Para obter mais informações sobre a integração contínua, confira "[Sobre a integração contínua](/actions/guides/about-continuous-integration)".

## Sobre a implantação contínua que usa {% data variables.product.prodname_actions %}

É possível configurar um fluxo de trabalho de {% data variables.product.prodname_actions %} para implantar o produto do seu software. Para verificar se o produto funciona como esperado, seu fluxo de trabalho pode criar o código no repositório e executar seus testes antes da implantação.

Você pode configurar seu fluxo de trabalho do CD para ser executado quando ocorrer um evento de {% data variables.product.product_name %} (por exemplo, quando o novo código é enviado para o branch padrão do seu repositório), em um cronograma definido, manualmente ou quando ocorre um evento externo usando o webhook de envio do repositório. Para obter mais informações sobre quando o fluxo de trabalho pode ser executado, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

{% data variables.product.prodname_actions %} fornece funcionalidades que dão mais controle sobre implantações. Por exemplo, você pode usar ambientes para exigir aprovação para um trabalho prosseguir, restringir quais branches podem acionar um fluxo de trabalho, ou limitar o acesso a segredos. Você pode usar concorrência para limitar o pipeline do CD até uma implantação em andamento e uma implantação pendente. Para obter mais informações sobre esses recursos, confira "[Implantação com o GitHub Actions](/actions/deployment/deploying-with-github-actions)" e "[Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment)".

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Usando o OpenID Connect para acessar os recursos da nuvem

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Fluxos de trabalho iniciais e ações de terceiros

{% data reusables.actions.cd-templates-actions %}

## Leitura adicional

- [Implantação com o GitHub Actions](/actions/deployment/deploying-with-github-actions)
- [Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- "[Como gerenciar a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"{% endif %}

