---
title: Сведения об ограничениях доступа к приложению OAuth
intro: Организации могут выбрать, какие {% data variables.product.prodname_oauth_apps %} будут иметь доступ к их репозиториям и другим ресурсам, включив ограничения доступа {% data variables.product.prodname_oauth_app %}.
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 0259f27cf89d8dec1aca7bd47e6293d62d8d190c
ms.sourcegitcommit: 5bbf95add5dfb842c60870ae3919436c15a4d7a7
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/30/2022
ms.locfileid: "148008708"
---
## Сведения об ограничениях доступа к приложению OAuth

{% данных reusables.apps.oauth-app-access-restrictions %}

{% ifversion limit-app-access-requests %} {% данных reusables.organizations.restricted-app-access-requests %} {% endif %}

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Совет.** Если организация не настроила ограничения доступа к {% data variables.product.prodname_oauth_app %}, любое {% data variables.product.prodname_oauth_app %}, авторизованное членом организации, также может получить доступ к частным ресурсам организации.

{% endtip %}

{% ifversion fpt %} Для дополнительной защиты ресурсов организации можно выполнить обновление до {% data variables.product.prodname_ghe_cloud %}, включая функции безопасности, такие как единый вход SAML. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## Настройка ограничений доступа к {% data variables.product.prodname_oauth_app %}

Когда владелец организации впервые настраивает ограничения доступа к {% data variables.product.prodname_oauth_app %}:

- **Приложения, принадлежащие организации**, автоматически получают доступ к ресурсам организации.
- **{% data variables.product.prodname_oauth_apps %}** незамедлительно теряют доступ к ресурсам организации.
- **Ключи SSH, созданные до февраля 2014 г.** , незамедлительно теряют доступ к ресурсам организации (включая ключи пользователя и развертывания).
- **Ключи SSH, созданные {% data variables.product.prodname_oauth_apps %} в феврале 2014 г. или после этой даты**, незамедлительно теряют доступ к ресурсам организации.
- **Результаты перехватчиков из частных репозиториев организации** больше не будут отправляться неутвержденными {% data variables.product.prodname_oauth_apps %}.
- **Доступ API** к частным ресурсам организации станет недоступен для неутвержденных {% data variables.product.prodname_oauth_apps %}. Кроме того, для общедоступных ресурсов организации будут отсутствовать привилегированные действия по созданию, обновлению или удалению.
- **Перехватчики, созданные пользователями, и перехватчики, созданные до мая 2014 г.** , не будут затронуты.
- Ограничения на доступ касаются и **частных вилок репозиториев, принадлежащих организации**.

## Устранение сбоев доступа по протоколу SSH

Если ключ SSH, созданный до февраля 2014 г., теряет доступ к организации с включенными ограничениями доступа к {% data variables.product.prodname_oauth_app %}, последующие попытки доступа по протоколу SSH завершатся ошибкой. Пользователи столкнутся с сообщением об ошибке, которое направляет их на URL-адрес, где можно утвердить ключ или отправить вместо него доверенный ключ.

## Веб-перехватчики

После включения ограничений доступ к {% data variables.product.prodname_oauth_app %} для организации все существующие веб-перехватчики, созданные этим {% data variables.product.prodname_oauth_app %}, возобновят отправку.

Когда организация отменяет доступ из ранее утвержденного {% data variables.product.prodname_oauth_app %}, все существующие веб-перехватчики, созданные этим приложением, больше не будут отправляться (эти перехватчики будут отключены, но не удалены).

## Повторное включение ограничений доступа

Если организация отключает ограничения доступа к приложению {% data variables.product.prodname_oauth_app %}, а затем повторно включает их, ранее утвержденные {% data variables.product.prodname_oauth_app %} автоматически получают доступ к ресурсам организации.

## Дополнительные материалы

- "[Включение ограничений доступа к {% data variables.product.prodname_oauth_app %} для вашей организации](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[Утверждение {% data variables.product.prodname_oauth_apps %} для вашей организации](/articles/approving-oauth-apps-for-your-organization)"
- "[Проверка установленных интеграций вашей организации](/articles/reviewing-your-organization-s-installed-integrations)"
- "[Запрет доступа к ранее утвержденному {% data variables.product.prodname_oauth_app %} для вашей организации](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[Отключение ограничений доступа к {% data variables.product.prodname_oauth_app %} для вашей организации](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[Запрос утверждения {% data variables.product.prodname_oauth_apps %} организацией](/articles/requesting-organization-approval-for-oauth-apps)"
- [Авторизация {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)
