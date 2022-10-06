---
title: 認可リクエストエラーのトラブルシューティング
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089800'
---
## アプリケーションのサスペンド

設定した OAuth Appが (不正利用の報告、スパム、APIの誤用により) サスペンドされた場合、GitHubは以下のパラメータを使用して、エラーを手短に説明する、登録されたコールバックURLにリダイレクトします。

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

サスペンドされたアプリケーションに関する問題を解決するには、{% data variables.contact.contact_support %} までご連絡ください。

## リダイレクトURIの不一致

指定した `redirect_uri` がアプリケーションに登録したものと一致しない場合、GitHub により、次のようにエラーの概要を示すパラメーター付きの登録済みコールバック URL にリダイレクトされます。

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

このエラーを修正するには、登録したものと一致する `redirect_uri` を指定するか、このパラメーターを省略し、アプリケーションに登録されている既定値を使います。

### アクセスが拒否されました

ユーザーがアプリケーションへのアクセスを拒否した場合、GitHub により、次のようにエラーの概要を示すパラメーター付きの登録済みコールバック URL にリダイレクトされます。

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

ユーザーにはアプリケーションを使わない自由があるので、このような場合にあなたができることは何もありません。 多くの場合、ユーザーは単にブラウザーのウィンドウを閉じるか [戻る] を押すので、あなたがこのエラーを目にすることはない可能性があります。
