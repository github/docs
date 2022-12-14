---
title: '[Management Console]'
intro: '管理コンソール API は、{% data variables.product.product_name %} インストールの管理に役立ちます。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: da38513a04525b858e041188eec6f691db9be1d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065539'
---
{% tip %}

Management Console への API 呼び出しを行うときは、ポート番号を明示的に設定する必要があります。 自社で TLS が有効になっている場合、ポート番号は `8443` です。それ以外の場合、ポート番号は `8080` です。

ポート番号を提供しない場合は、自動的にリダイレクトに従うようにツールを設定する必要があります。

また、{% data variables.product.product_name %} では、[独自の TLS 証明書を追加](/enterprise/admin/guides/installation/configuring-tls/)する前は自己署名証明書が使われるため、`curl` を使うとき、場合によっては [`-k` フラグ](http://curl.haxx.se/docs/manpage.html#-k) を追加する必要があります。

{% endtip %}

### 認証

[`/setup/api/start`](#create-a-github-enterprise-server-license) を除くすべての管理コンソール API エンドポイントに、認証トークンとして[管理コンソールのパスワード](/enterprise/admin/articles/accessing-the-management-console/)を渡す必要があります。

各要求でこのトークンを送るには、`api_key` パラメーターを使います。 たとえば次のような点です。

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

標準の HTTP 認証を使用してこのトークンを送信することもできます。 次に例を示します。

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
