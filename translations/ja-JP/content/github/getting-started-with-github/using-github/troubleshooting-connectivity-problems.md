---
title: 接続問題のトラブルシューティング
intro: '{% data variables.product.prodname_dotcom %} への接続の問題がある場合、接続のトラブルシューティングをして、次に問題を診断するために {% data variables.product.prodname_debug %} のツールを使ってください。'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
versions:
  free-pro-team: '*'
---
ほとんどの場合、接続問題は、ファイアウォール、プロキシサーバー、企業ネットワークや他のネットワークが {% data variables.product.prodname_dotcom %} をブロックする設定になっているために発生します。

### {% data variables.product.prodname_dotcom %} の IP アドレスを許可する

ネットワークが {% data variables.product.prodname_dotcom %} の IP アドレスを許可する設定になっていることを確認してください。 詳細は「[{% data variables.product.prodname_dotcom %} の IP アドレスについて](/articles/about-github-s-ip-addresses)」を参照してください。

### 会社や Organization のネットワークを使用する

会社や Organization のネットワークでの接続問題の場合、ネットワーク管理者にネットワークが特定のトラフィックをブロックするルールが設定されているかどうか確認してください。 ルールが設定されている場合は、ネットワーク管理者に依頼して、{% data variables.product.prodname_dotcom %} へのトラフィックを許可してください。

### Captcha のトラブルシューティング

Captcha で検証できない場合、次のことを試してください:
- ブラウザで JavaScript が有効になっていることを確認してください。
- ブラウザがサポートされていることを確認してください。 もしサポートされていない場合、ブラウザをアップデートするか、サポートされているブラウザをインストールしてください。 サポートされているブラウザの一覧は、「[サポートされているブラウザ](/articles/supported-browsers)」を参照してください。
- ネットワークの設定が https://octocaptcha.com/ や https://arkoselabs.com/ をブロックしていないことを確認してください。 企業のファイアウォールの内側にいる場合、IT 管理者に連絡して、それらのドメインを許可するよう依頼してください。 これらのドメインへのアクセスを確認するには、https://octocaptcha.com/test にアクセスして、「Connection successfully made!」というテキストが表示されていることを確認してから、https://client-demo.arkoselabs.com/github にアクセスして Captcha を読み込めることを確認します。
- ブラウザに GitHub の障害となり得るプラグインや拡張機能がないことを確認します。 もしある場合、そのプラグインや拡張機能を、Captcha で検証する間は無効にしてください。

### クローン方法を変更する

SSH によるクローンから HTTPS によるクローンに変更したり、またはその逆をした場合、接続が改善されることがあります。 詳細は「[{% data variables.product.prodname_dotcom %} からリポジトリをクローンする](/articles/cloning-a-repository-from-github)」を参照してください。

SSH でタイムアウトが起きる場合は「[Error: Bad file number](/articles/error-bad-file-number)」を参照してください。

### 遅いダウンロードや断続的な遅い接続のトラブルシューティング

{% data variables.product.prodname_dotcom %} は、ユーザごとに帯域を割り当てません。

一日の一定の時間に接続が遅くなる場合、その遅いスピードはネットワークの混雑が原因である可能性が高いです。 {% data variables.product.prodname_dotcom %} はネットワークの混雑を解決できませんので、その問題をインターネットサービスプロバイダに連絡してください。

### {% data variables.product.prodname_debug %} のトラブルシューティング

上記のトラブルシューティングのアドバイスに従っても接続の問題が解決しない場合は、{% data variables.product.prodname_debug %} サイトの指示に従ってテストを行い、{% data variables.product.prodname_dotcom %} サポートに報告してください。 詳細は [{% data variables.product.prodname_debug %}](https://github-debug.com/) を参照してください。
