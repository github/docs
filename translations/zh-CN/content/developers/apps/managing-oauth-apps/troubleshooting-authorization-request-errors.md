---
title: 排查授权请求错误
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084996'
---
## 应用程序已挂起

如果您设置的 OAuth 应用程序已挂起（由于报告的滥用、垃圾邮件或 API 使用不当），GitHub 将使用以下参数重定向到注册的回调 URL 以总结错误：

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

要解决已挂起应用程序的问题，请联系 {% data variables.contact.contact_support %}。

## 重定向 URI 不匹配

如果你提供的 `redirect_uri` 与你在应用程序中注册的 URL 不匹配，GitHub 将使用以下参数重定向到注册的回调 URL 以总结错误：

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

要更正此错误，请提供一个与你注册的 URL 匹配的 `redirect_uri`，或者忽略此参数以使用在应用程序中注册的默认 URL。

### 访问被拒绝

如果用户拒绝访问你的应用程序，GitHub 将使用以下参数重定向到注册的回调 URL 以总结错误：

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

在这方面你无能为力，因为用户可以自由选择不使用你的应用程序。 通常，用户只是关闭窗口或在浏览器中按返回按钮，所以你可能永远不会看到此错误。
