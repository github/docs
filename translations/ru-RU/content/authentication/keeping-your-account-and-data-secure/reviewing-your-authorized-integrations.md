---
title: Просмотр авторизованных интеграций
intro: Вы можете просмотреть авторизованные интеграции для аудита доступа каждой интеграции к вашей учетной записи и данным.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088413'
---
## Просмотр авторизованных {% data variables.product.prodname_oauth_apps %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## Просмотр авторизованных {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. Перейдите на вкладку **Авторизованные {% data variables.product.prodname_github_apps %}** . ![Вкладка "Авторизованные {% data variables.product.prodname_github_apps %}"](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Просмотрите {% data variables.product.prodname_github_apps %}, имеющие доступ к вашей учетной записи. Для приложений, которые вы не знаете, или для устаревших приложений нажмите кнопку **Отозвать**. Чтобы отозвать все {% data variables.product.prodname_github_apps %}, нажмите кнопку **Отозвать все**.
   ![Список авторизованных {% data variables.product.prodname_github_app %}](/assets/images/help/settings/revoke-github-app.png)

## Дополнительные материалы
{% ifversion fpt or ghec %}
- [Сведения об интеграциях](/articles/about-integrations){% endif %}
- [Проверка авторизованных приложений (OAuth)](/articles/reviewing-your-authorized-applications-oauth)
