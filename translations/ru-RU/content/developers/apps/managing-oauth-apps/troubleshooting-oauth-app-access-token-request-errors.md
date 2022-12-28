---
title: Устранение ошибок при запросе маркеров доступа для приложения OAuth
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Troubleshoot token request
ms.openlocfilehash: 7764d0e1f23a3d2dac841412ea0120487c8f6560
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089797'
---
{% note %}

**Примечание**. В этих примерах показаны только ответы JSON.

{% endnote %}

## Неверные учетные данные клиента

Если передан неверный \_идентификатор или секрет клиента\_, вы получите этот ответ об ошибке.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Чтобы устранить ошибку, убедитесь в наличии правильных учетных данных для {% data variables.product.prodname_oauth_app %}. Тщательно проверьте правильность значений `client_id` и `client_secret` и их передачи в {% data variables.product.product_name %}.

## Несоответствие URI перенаправления

Если вы указали `redirect_uri`, который не совпадает с зарегистрированным в {% data variables.product.prodname_oauth_app %}, вы получите следующее сообщение об ошибке:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Чтобы исправить эту ошибку, укажите `redirect_uri`, который соответствует зарегистрированному, или оставьте этот параметр пустым, чтобы использовался зарегистрированный по умолчанию с приложением.

## Неверный код проверки

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Если переданный код проверки неверен, просрочен или не соответствует тому, что вы получили в первом запросе на авторизацию, вы получите эту ошибку.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Чтобы устранить ошибку, запустите [процесс авторизации OAuth еще раз](/apps/building-oauth-apps/authorizing-oauth-apps/) и получите новый код.
