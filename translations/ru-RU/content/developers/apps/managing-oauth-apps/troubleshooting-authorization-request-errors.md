---
title: Устранение ошибок запросов на авторизацию
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /developers/apps/troubleshooting-authorization-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Troubleshoot authorization
ms.openlocfilehash: 8706453423298277ed27ac5f950c562db8a42a09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089802'
---
## Приложение приостановлено

Если настроенное приложение OAuth было приостановлено (из-за сообщений о злоупотреблениях, спаме или неправильном использовании API), GitHub перенаправит на зарегистрированный URL-адрес обратного вызова, используя следующие параметры для сведения данных об ошибке:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Чтобы решить проблемы с приостановленными приложениями, обратитесь в {% data variables.contact.contact_support %}.

## Несоответствие URI перенаправления

Если указать `redirect_uri`, который не соответствует зарегистрированным в приложении данным, GitHub перенаправит на зарегистрированный URL-адрес обратного вызова со следующими параметрами, выполняющими сведение данных об ошибке:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Чтобы исправить эту ошибку, укажите `redirect_uri`, который соответствует зарегистрированному, или оставьте этот параметр пустым, чтобы использовался зарегистрированный по умолчанию с приложением.

### Доступ запрещен

Если пользователь отклоняет доступ к вашему приложению, GitHub перенаправит на зарегистрированный URL-адрес обратного вызова со следующими параметрами, выполняющими сведение данных об ошибке:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

Здесь нет ничего, что можно сделать, поскольку пользователи имеют право не использовать приложение. Чаще всего пользователи просто закрывают окно или нажимают кнопку "Назад" в браузере, поэтому, скорее всего, вы не увидите эту ошибку.
