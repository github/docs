---
title: Gerenciar usuários inativos
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680922'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## Sobre os usuários inativos

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## Exibir usuários inativos

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Na barra lateral esquerda, clique em **Usuários inativos**.
![Guia Usuários inativos](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. Para suspender todos os usuários inativos nesta lista, na parte superior da página, clique em **Suspender tudo**.
![Botão Suspender tudo](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## Determinar se uma conta de usuário está inativa

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. Na seção **Informações do usuário** , um ponto vermelho com a palavra "Inativo" indica que a conta de usuário está inativa, e um ponto verde com a palavra "Ativo" indica que a conta de usuário está ativa.
![Conta de usuário inativo](/assets/images/enterprise/stafftools/dormant-user.png)
![Conta de usuário inativo](/assets/images/enterprise/stafftools/active-user.png)

## Configurar o limite de inatividade

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Em "Dormancy threshold" (Limite de inatividade), use o menu suspenso e clique no limite de inatividade desejado.
![Menu suspenso Limite de inatividade](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## Fazendo o download do relatório de usuários inativos da conta corporativa

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Para baixar o relatório Usuários Inativos (beta) como um arquivo CSV, em "Outros", clique em {% octicon "download" aria-label="The Download icon" %} **Baixar**.
  ![Botão Baixar em "Outros" na página Conformidade](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**Dica:** para avaliar a inatividade do usuário, a atividade do usuário tem como escopo incluir apenas a atividade do usuário associada a organizações, repositórios ou eventos de logon associados à empresa. Por exemplo, se um usuário comentou recentemente sobre um problema em um repositório público não associado à empresa, ele pode ser considerado inativo. No entanto, se ele comentou recentemente sobre um problema em um repositório público associado a uma organização da empresa, ele não será considerado inativo e não aparecerá no relatório Usuários inativos.

Em caso de eventos de logon na Web, somente eventos de logon por meio de um domínio de SSO associado à empresa são considerados uma atividade do usuário associada à empresa.

{% endtip %}

{% endif %}
