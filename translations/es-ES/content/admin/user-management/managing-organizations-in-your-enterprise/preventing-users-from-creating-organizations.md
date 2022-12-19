---
title: Impedir que los usuarios creen organizaciones
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: Puedes prevenir que los usuarios creen organizaciones en tu empresa.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116298'
---
{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. En "Users can create organizations" (Los usuarios pueden crear organizaciones), use el menú desplegable y haga clic en **Enabled** (Habilitado) o **Disabled** (Deshabilitado).
![Menú desplegable Los usuarios pueden crear organizaciones](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
