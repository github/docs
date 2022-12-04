---
title: Отключение ограничений доступа к приложению OAuth в организации
intro: 'Владельцы организации могут отключить ограничения для {% data variables.product.prodname_oauth_apps %}, имеющих доступ к ресурсам организации.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
  - /organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 28c3cdf925733e5e752138aedcb76c47d21d4f39
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098543'
---
{% danger %}

**Предупреждение.** При отключении ограничений доступа к приложению {% data variables.product.prodname_oauth_app %} в организации любой ее член автоматически авторизует доступ приложения {% data variables.product.prodname_oauth_app %} к частным ресурсам организации, когда он утверждает использование приложения в параметрах личной учетной записи.

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Нажмите кнопку **Удалить ограничения**.
  ![Кнопка "Удалить ограничения"](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. После просмотра сведений об отключении ограничений сторонних приложений нажмите кнопку **Да, удалить ограничения приложения**.
  ![Кнопка подтверждения удаления](/assets/images/help/settings/settings-third-party-confirm-disable.png)
