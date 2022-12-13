---
title: Запрос на утверждение организацией для приложений OAuth
intro: 'Участники организации и внешние участники совместной работы могут запрашивать у владельца разрешение доступа к ресурсам организации для {% data variables.product.prodname_oauth_apps %}.'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: affc908d710811563e49bfee6a4e2e906750bf4b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008721'
---
## Сведения о запросе утверждения организации для {% data variables.product.prodname_oauth_app %}

Участники организации всегда могут запросить утверждение владельца для {% data variables.product.prodname_oauth_apps %}, которые они хотели бы использовать, и владельцы организации получают уведомление об ожидающих запросах. {% ifversion limit-app-access-requests %} Внешние участники совместной работы могут запросить утверждение владельца для {% data variables.product.prodname_oauth_apps %}, которые они хотели бы использовать, если включены запросы на доступ к интеграции. Дополнительные сведения см. в разделе [Ограничение запросов на доступ к приложениям OAuth и приложению GitHub](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests). {% endif %}

## Запрос на утверждение организацией для приложения {% data variables.product.prodname_oauth_app %}, которое уже авторизовано для вашей личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. В списке приложений щелкните имя приложения {% data variables.product.prodname_oauth_app %}, для которого требуется запросить доступ.
![Кнопка "Просмотреть приложение"](/assets/images/help/settings/settings-third-party-view-app.png)
4. Рядом с организацией, доступ к которой требуется запросить для приложения {% data variables.product.prodname_oauth_app %}, нажмите кнопку **Запросить доступ**.
![Кнопка "Запросить доступ"](/assets/images/help/settings/settings-third-party-request-access.png)
5. Проверьте сведения о запросе доступа для приложения {% data variables.product.prodname_oauth_app %} и нажмите кнопку **Запросить утверждение владельцев**.
![Кнопка "Запросить утверждение"](/assets/images/help/settings/oauth-access-request-approval.png)

## Дополнительные материалы

- [Сведения об ограничениях доступа {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)
