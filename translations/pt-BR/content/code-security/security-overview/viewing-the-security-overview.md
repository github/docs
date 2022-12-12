---
title: Visualizando a visão geral de segurança
intro: Acesse as diferentes visualizações disponíveis na visão geral de segurança
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
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
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163216'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Visualizar a visão geral de segurança de uma organização

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Escolha a visão geral que você deseja exibir nas opções da barra lateral.
1. Use os filtros suspensos e a caixa de pesquisa para se concentrar nas informações de maior interesse. As exibições "Risco de Segurança" e "Cobertura de Segurança" também têm um cabeçalho interativo que você pode usar para filtrar os resultados.

  ![Captura de tela da exibição Risco de Segurança com o cabeçalho interativo realçado](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Para ver informações agregadas sobre os tipos de alertas, clique em **Mostrar mais**.
  ![Botão Mostrar mais](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Captura de tela da página específica de verificação de código](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Visualizando a visão geral de segurança de uma empresa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. Na barra lateral esquerda, clique em {% octicon "shield" aria-label="The shield icon" %} **Segurança do Código**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Visualizar a visão geral de segurança de uma equipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
