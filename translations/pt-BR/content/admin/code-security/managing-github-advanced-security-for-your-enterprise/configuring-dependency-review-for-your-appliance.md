---
title: Como configurar a revisão de dependência para o seu dispositivo
shortTitle: Configuring dependency review
intro: 'Para ajudar os usuários a entender as alterações de dependência ao revisar solicitações de pull, você pode habilitar, configurar e desabilitar a revisão de dependência para {% data variables.location.product_location %}.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107754'
---
## Sobre a análise de dependência

{% data reusables.dependency-review.feature-overview %}  

Alguns recursos adicionais, como verificações de licença, bloqueio de solicitações de pull e integração de CI/CD, estão disponíveis com a [ação de revisão de dependência](https://github.com/actions/dependency-review-action).

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Pré-requisitos para revisão de dependência

- Uma licença de {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (confira "[Sobre a cobrança de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)").{% endif %}

- O grafo de dependência habilitado para a instância. Os administradores do site podem habilitar o grafo de dependência por meio do console de gerenciamento ou do shell administrativo (confira "[Habilitando o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)").
  
- {% data variables.product.prodname_github_connect %} habilitado para baixar e sincronizar vulnerabilidades de {% data variables.product.prodname_advisory_database %}. Isso geralmente é configurado como parte da configuração de {% data variables.product.prodname_dependabot %} (confira "[Habilitando o Dependabot para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)").

## Como habilitar e desabilitar a revisão de dependência

Para habilitar ou desabilitar a revisão de dependência, você precisa habilitar ou desabilitar o grafo de dependência para sua instância.

Para obter mais informações, confira "[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".

## Como executar a revisão de dependência usando {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

A ação de revisão de dependência está incluída na instalação do {% data variables.product.prodname_ghe_server %}. Ela está disponível para todos os repositórios que têm {% data variables.product.prodname_GH_advanced_security %} e o grafo de dependência habilitados.

{% data reusables.dependency-review.dependency-review-action-overview %}  

Os usuários executam a ação de revisão de dependência usando um fluxo de trabalho {% data variables.product.prodname_actions %}. Se você ainda não tiver configurado executores para {% data variables.product.prodname_actions %}, deverá fazer isso para permitir que os usuários executem fluxos de trabalho. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

