---
title: Создание приложения OAuth
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180346'
---
{% ifversion fpt or ghec %} {% note %}

  **Примечание.** {% data для повторного использования.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. Щелкните **Создать приложение OAuth App**.
![Кнопка для создания нового приложения OAuth](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Примечание.** Если вы еще не создали приложение, нажмите кнопку **Зарегистрировать новое приложение**.

  {% endnote %}
6. В поле «Имя приложения» введите имя приложения.
![Поле для имени приложения](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Предупреждение.**  Используйте только сведения в приложении OAuth, которое вы считаете общедоступными. Избегайте использования конфиденциальных данных, таких как внутренние URL-адреса, при создании приложения OAuth.

  {% endwarning %}

7. В поле «URL-адрес домашней страницы» введите полный URL-адрес веб-сайта вашего приложения.
![Поле для URL-адреса домашней страницы вашего приложения](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. При необходимости в поле «Описание приложения» введите описание приложения, которое будут видеть пользователи.
![Поле для описания приложения](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. В поле «URL-адрес обратного вызова авторизации» введите URL-адрес обратного вызова приложения.
![Поле для URL-адреса обратного вызова авторизации приложения](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **Примечание.** Приложения OAuth не могут иметь несколько URL-адресов обратного вызова, в отличие от {% data variables.product.prodname_github_apps %}.

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. Если приложение OAuth будет использовать поток устройства для идентификации и авторизации пользователей, нажмите кнопку **Включить поток устройства**. Дополнительные сведения о потоке устройств см. в разделе [Авторизация приложений OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow).
  ![Снимок экрана: поле для включения потока устройства](/assets/images/oauth-apps/enable-device-flow.png) {% endif %}
2.  Нажмите кнопку **Зарегистрировать приложение**.
![Кнопка регистрации приложения осуществляется следующим образом](/assets/images/oauth-apps/oauth_apps_register_application.png)
