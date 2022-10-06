---
title: Impor retenção legal a usuários ou organizações
intro: Você pode colocar uma retenção legal em um usuário ou organização para garantir que os repositórios que ele possui não possam ser removidos permanentemente da sua empresa.
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
ms.openlocfilehash: 5837bfcd05867ed5be7e298996bb0de2680b4921
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199942'
---
Geralmente, quando alguém exclui um repositório, ele continua disponível em disco por 90 dias e pode ser restaurado pelo painel de administração do site. Após esse período, o repositório é removido e excluído permanentemente. Ao impor uma retenção legal a um usuário ou organização, os repositórios desse usuário ou organização ficarão disponíveis para restauração por tempo indefinido.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Clique em **Colocar retenção legal**.
![Botão Place legal hold (Impor retenção legal)](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
