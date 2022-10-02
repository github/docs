---
title: Exibir atividade de implantação no repositório
intro: É possível exibir informações sobre implantações do repositório inteiro ou de uma pull request específica.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126993'
---
{% note %}

**Observação:** atualmente, o painel de implantações está em versão beta e sujeito a alterações.

{% endnote %}

As pessoas com acesso de leitura em um repositório poderão ter uma visão geral de todas as implantações atuais e um log das atividades anteriores de implantação se o fluxo de trabalho da implantação do repositório estiver integrado ao {% data variables.product.product_name %} por meio da API de Implantações ou a um aplicativo do [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). Para obter mais informações, confira "[Implantações](/rest/reference/repos#deployments)".

Também é possível ver informações de implantação na guia "Conversation" (Conversa) de uma pull request.

## Exibir o painel de implantações

{% data reusables.repositories.navigate-to-repo %}
2. À direita da lista de arquivos, clique em **Ambientes**.
![Ambientes à direita da página do repositório](/assets/images/help/repository/environments.png)

## Leitura adicional
 - "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
