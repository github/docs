---
title: トラブルシューティング
intro: REST API で発生する最も一般的な問題の解決方法を学びます。
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: c696f18d89ffe7d9c9c7c13eda933285502132ae
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192834'
---
API で不可解な問題が発生した場合、発生したと思われる問題の解決策をこちらの一覧から確認できます。

{% ifversion api-date-versioning %}

## サポートされていない API バージョンに関する `400` エラー

`X-GitHub-Api-Version` ヘッダーを使用して、API のバージョンを指定する必要があります。 次に例を示します。

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

存在しないバージョンを指定すると、`400` エラーが発生します。

詳しい情報については、「[API のバージョン](/rest/overview/api-versions)」を参照してください。

{% endif %}

## 既存リポジトリの `404` エラー

通常、クライアントが正しく認証されていない場合、`404` エラーが送信されます。
このような場合には `403 Forbidden` が表示されることを想定されているかもしれません。 ただし、プライベート リポジトリに関 _する情報は_ 提供したくないので、API は代わりにエラーを `404` 返します。

トラブルシューティングを行うには、[正しく認証していること](/guides/getting-started/)、[OAuth アクセス トークンに必要なスコープがあること](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)、[サード パーティのアプリケーション制限][oap-guide]によってアクセスがブロックされていないこと、[トークンの有効期限が切れておらず、取り消されていないこと](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)を確認します。

## 表示されない結果がある

リソースの一 _覧 (ユーザー_、問題 _など_) にアクセスするほとんどの API 呼び出しでは、改ページ処理がサポートされます。 要求したがすべての結果を受け取っていない場合は、おそらく最初のページしか表示されていません。 より多くの結果を受け取るには、残りのページを要求する必要があります。

改ページ URL の形式を推測 *しないように* することが重要です。 すべての API 呼び出しで同じ構造が使用されるわけではありません。 代わりに、すべての要求で返されるリンク ヘッダーからページネーション情報を抽出します。 ページネーションの詳細については、「[REST API でページネーションを使用する](/rest/guides/using-pagination-in-the-rest-api)」を参照してください。

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## Basic 認証のエラー

2020 年 11 月 13 日に、 REST API に対するユーザ名およびパスワードによる認証と OAuth 認証 API は非推奨となり、使用できなくなりました。

### 基本認証に `username`/`password` を使用する

API 呼び出しで `username` と `password` 使用している場合、それらでは認証できなくなります。 次に例を示します。

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

代わりに、エンドポイントをテストするとき、またはローカルで開発を行うときに、[{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)を使用します。

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

OAuth App の場合は、[Web アプリケーションフロー](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)を使用して、API 呼び出しのヘッダーで使用する OAuth トークンを生成する必要があります。

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## Timeouts

{% data variables.product.product_name %}がAPIを処理するのに10秒以上かかると、{% data variables.product.product_name %}はリクエストを終了させ、タイムアウトのレスポンスが返されます。

{% endif %}
