---
title: Management Console
intro: '管理コンソール API は、{% data variables.product.product_name %} インストールの管理に役立ちます。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% tip %}

Management Console への API 呼び出しを行うときは、ポート番号を明示的に設定する必要があります。 Enterprise で TLS が有効になっている場合、ポート番号は `8443` です。それ以外の場合、ポート番号は `8080` です。

ポート番号を提供しない場合は、自動的にリダイレクトに従うようにツールを設定する必要があります。

{% data variables.product.product_name %} は、[独自の TLS 証明書](/enterprise/admin/guides/installation/configuring-tls/)を追加する前は自己署名証明書を使用するため、`cURL` を使用するときに [`-k` フラグ](http://curl.haxx.se/docs/manpage.html#-k)を追加する必要もあるかもしれません。

{% endtip %}

### 認証

[Management Console のパスワード](/enterprise/admin/articles/accessing-the-management-console/)を認証トークンとして [`/setup/api/start`](#create-a-github-enterprise-server-license) を除くすべての Management Console API エンドポイントに渡す必要があります。

`api_key` パラメータを使用して、リクエストごとにこのトークンを送信します。 例:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

標準の HTTP 認証を使用してこのトークンを送信することもできます。 例:

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
