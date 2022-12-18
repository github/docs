---
title: Обновление маркеров доступа "пользователь-сервер"
intro: 'Для принудительного обновления маркеров и уменьшения влияние скомпрометированных маркеров можно настроить {% data variables.product.prodname_github_app %} для использования маркеров доступа пользователей, имеющих срок действия.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user-to-server access
ms.openlocfilehash: a288fcdd7eca423c9087a1a8ca4948e043de645b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064413'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

## Сведения о маркерах доступа пользователей с истекающим сроком действия

Для принудительного обновления маркеров и уменьшения влияние скомпрометированных маркеров можно настроить {% data variables.product.prodname_github_app %} для использования маркеров доступа пользователей, имеющих срок действия. Дополнительные сведения о создании запросов "пользователь-сервер" см. в разделе [Идентификация и авторизация пользователей для приложений GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

Срок действия истекающих маркеров пользователя составляет 8 часов. При получении нового маркера доступа "пользователь-сервер" ответ также будет содержать маркер обновления, который можно обменять на новый маркер пользователя и маркер обновления. Маркеры обновления действительны в течение 6 месяцев. 

## Обновление маркера пользователя с помощью маркера обновления

Чтобы обновить маркера доступа "пользователь-сервер" с истекающим сроком действия, можно обменять `refresh_token` на новый маркер доступа и `refresh_token`.

  `POST https://github.com/login/oauth/access_token`

Этот запрос обратного вызова отправит вам новый маркер доступа и новый маркер обновления.  Этот запрос обратного вызова аналогичен запросу OAuth, который будет использоваться для обмена временным `code` для маркера доступа. Дополнительные сведения см. в разделах [Идентификация и авторизация пользователей для приложений GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github) и [Основы проверки подлинности](/rest/guides/basics-of-authentication#providing-a-callback).

### Параметры

Имя | Тип | Описание
-----|------|------------
`refresh_token` | `string` | **Обязательный.** Маркер, создаваемый, когда владелец {% data variables.product.prodname_github_app %} включает маркеры с истечением срока действия и выдает новый маркер доступа пользователя.
`grant_type` | `string` | **Обязательный.** Значение должно быть `refresh_token` (требуется спецификацией OAuth).
`client_id` | `string` | **Обязательный.** Идентификатор клиента для {% data variables.product.prodname_github_app %}.
`client_secret` | `string`   | **Обязательный.** Секрет клиента для {% data variables.product.prodname_github_app %}.

### Ответ

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## Настройка маркеров пользователя, имеющих срок действия, для существующего приложения GitHub

Можно включить или отключить срок действия маркеров авторизации "пользователь-сервер" в параметрах {% data variables.product.prodname_github_app %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Щелкните **Изменить** рядом с выбранным {% data variables.product.prodname_github_app %}.
  ![Параметры для изменения приложения GitHub](/assets/images/github-apps/edit-test-app.png)
5. На левой боковой панели щелкните **Дополнительные компоненты**.
   ![Вкладка "Дополнительные функции"](/assets/images/github-apps/optional-features-option.png) 
6. Рядом с пунктом «Срок действия маркера "пользователь-сервер"» щелкните **Согласие** или **Отказ**. Применение этого параметра может занять несколько секунд.

## Отказ от истечения срока действия маркеров для новых приложений GitHub

При создании новых{% data variables.product.prodname_github_app %} по умолчанию приложение будет использовать маркеры доступа "пользователь-сервер" с истекающим сроком действия.

Если нужно, чтобы приложение использовало маркеры доступа "пользователь-сервер" без истечения срока действия, можно снять флажок "Истекающий срок действия маркеров авторизации пользователя" на странице параметров приложения.

![Параметр для согласия на истечение срока действия маркеров пользователей во время установки приложений GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)

Существующие данные {% data variables.product.prodname_github_apps %}, использующие маркеры авторизации "пользователь-сервер", затрагиваются этим новым потоком только, когда владелец приложения включает истечение срока действия маркеров пользователя для своего приложения.

Включение маркеров пользователей с истекающим сроком действия для существующих {% data variables.product.prodname_github_apps %} требует отправки пользователей через поток OAuth для повторной выдачи новых маркеров пользователей, срок действия которых истекает через 8 часов, и отправки запроса с маркером обновления для получения нового маркера доступа и маркера обновления. Дополнительные сведения см. в разделе [Идентификация и авторизация пользователей для приложений GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

## Дополнительные материалы

- [Сведения о проверке подлинности для {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)

