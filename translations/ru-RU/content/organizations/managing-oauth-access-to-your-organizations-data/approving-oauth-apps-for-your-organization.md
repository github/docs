---
title: Утверждение приложений OAuth для вашей организации
intro: 'Когда участник организации или внешний участник запрашивает доступ к ресурсам организации {% данных variables.product.prodname_oauth_app %}, владельцы организации могут утвердить или отклонить запрос.'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization
  - /articles/approving-oauth-apps-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
  - /organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Approve OAuth Apps
ms.openlocfilehash: f7d68ee0169b46f7f517a35aa847a1fc01c20ec1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098551'
---
Если включены ограничения доступа на {% данных variables.product.prodname_oauth_app %}, члены организации и внешние участники должны [запросить утверждение](/articles/requesting-organization-approval-for-oauth-apps) у владельца организации, прежде чем они смогут авторизовать {% данных variables.product.prodname_oauth_app %} с доступом к ресурсам организации.

{% ifversion limit-app-access-requests %} {% данных reusables.organizations.restricted-app-access-requests %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Рядом с приложением, которое требуется утвердить, нажмите **Проверить**.
![Ссылка для проверки запроса](/assets/images/help/settings/settings-third-party-approve-review.png)
6. После проверки сведений о запрашиваемом приложении нажмите кнопку **Предоставить доступ**.
![Кнопка "Предоставить доступ"](/assets/images/help/settings/settings-third-party-approve-grant.png)

## Дополнительные материалы

- [Сведения об ограничениях доступа {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)
