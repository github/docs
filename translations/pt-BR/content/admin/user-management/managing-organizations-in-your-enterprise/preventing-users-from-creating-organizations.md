---
title: Impedir os usuários de criarem organizações
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: Você pode impedir que usuários criem organizações na sua empresa.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: Prevent organization creation
ms.openlocfilehash: 418a2ceb1f8c059764d84e4565d0719c38ed4d9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145094873'
---
{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. Em "Os usuários podem criar organizações", use o menu suspenso e clique em **Habilitado** ou **Desabilitado**.
![Menu suspenso Os usuários podem criar organizações](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
