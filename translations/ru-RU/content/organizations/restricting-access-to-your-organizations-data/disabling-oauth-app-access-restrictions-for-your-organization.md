---
title: Отключение ограничений доступа к приложению OAuth в организации
intro: Владельцы организации могут отключить ограничения для {% data variables.product.prodname_oauth_apps %}, имеющих доступ к ресурсам организации.
redirect_from:
- /articles/disabling-third-party-application-restrictions-for-your-organization
- /articles/disabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 41fae63d8d491eec7a6cd6a275958d5c96fb5f5c
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: "145140598"
---
{% danger %}

**Предупреждение.** При отключении ограничений доступа к приложению {% data variables.product.prodname_oauth_app %} в организации любой ее член автоматически авторизует доступ приложения {% data variables.product.prodname_oauth_app %} к частным ресурсам организации, когда он утверждает использование приложения в параметрах личной учетной записи.

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Нажмите кнопку **Удалить ограничения**.
  ![Кнопка "Удалить ограничения"](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. После просмотра сведений об отключении ограничений сторонних приложений нажмите кнопку **Да, удалить ограничения приложения**.
  ![Кнопка подтверждения удаления](/assets/images/help/settings/settings-third-party-confirm-disable.png)
