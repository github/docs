---
title: Visualizando a visão geral de segurança
intro: Acesse as diferentes visualizações disponíveis na visão geral de segurança
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
versions:
  ghae: issue-5503
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: a0b6371155e7b7780ea216373b42481aa403e6db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525686'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Visualizar a visão geral de segurança de uma organização

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Para ver informações agregadas sobre os tipos de alertas, clique em **Mostrar mais**.
  ![Botão Mostrar mais](/assets/images/help/organizations/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Captura de tela da página específica de verificação de código](/assets/images/help/organizations/security-overview-code-scanning-alerts.png)

## Visualizando alertas em toda a sua organização

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Na barra lateral de segurança, selecione o subconjunto de alertas que você deseja visualizar.
![Exibir subconjunto de alertas](/assets/images/help/organizations/view-alert-subset.png)
2. Opcionalmente, filtre a lista de alertas. Cada visualização tem sua própria seleção de filtros disponíveis. Você pode clicar em vários filtros nos menus suspensos de filtro para restringir a sua pesquisa. Você também pode digitar os qualificadores de busca no campo de busca. Para obter mais informações sobre os qualificadores disponíveis, confira "[Como filtrar alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)".
  ![Os menus de filtro suspenso e o campo Pesquisar repositórios na exibição de verificação de segredos](/assets/images/help/organizations/secret-scanning-filter-alerts.png)

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
## Visualizando a visão geral de segurança de uma empresa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. Na barra lateral esquerda, clique em {% octicon "shield" aria-label="The shield icon" %} **Segurança do Código**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %} {% endif %}

## Visualizando alertas de um repositório

{% data reusables.repositories.navigate-to-repo %}
1. Abaixo do nome do seu repositório, clique em **Segurança**.
  ![Guia Segurança do repositório](/assets/images/help/repository/security-tab.png)
2. Na barra lateral de segurança, selecione a visualização que deseja abrir.
  ![Subconjunto de alertas para exibição do repositório](/assets/images/help/repository/repo-security-side-panel.png)
3. Opcionalmente, filtre a lista de alertas. Cada visualização tem sua própria seleção de filtros disponíveis. Você pode clicar em vários filtros nos menus suspensos de filtro para restringir a sua pesquisa. Você também pode digitar os qualificadores de busca no campo de busca. Para obter mais informações sobre os qualificadores disponíveis, confira "[Como filtrar alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)".
  ![Menus de filtro suspensos na exibição de alertas da verificação de segredos do repositório](/assets/images/help/repository/repo-code-scanning-filter-and-search.png)

{% endif %}

## Visualizar a visão geral de segurança de uma equipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %}
