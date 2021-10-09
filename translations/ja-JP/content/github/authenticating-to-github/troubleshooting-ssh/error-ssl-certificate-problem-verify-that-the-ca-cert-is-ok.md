---
title: 'Error: SSL certificate problem, verify that the CA cert is OK'
intro: 'このエラーは、CA ルート証明書の期限が切れていることを示しています。 CA ルート証明書を更新する必要がある場合は、{% data variables.product.product_name %} リポジトリからプッシュまたはプルすることはできません。'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  free-pro-team: '*'
topics:
  - SSH
---

以下のようなエラーが表示されます:

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

「CA」は、ウェブ全体での安全な接続を処理している第三者グループである「認証局 (certificate authority)」の略称です。 CA によってデジタルの「証明書」が発行されます。これは、2 つのマシン間 (お使いのコンピュータと GitHub.com など) の間に有効な接続が存在することを確認する方法です。 証明書なしでは、2 つのマシン間のセキュリティリスクが大幅に高まります。

このエラーは、多くの場合、CA が期限切れであり更新が必要であることを意味します。 通常、オペレーティングシステムを更新することにより CA も更新され、問題が解決されます。
