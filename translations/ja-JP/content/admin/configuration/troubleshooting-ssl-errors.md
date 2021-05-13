---
title: SSLのエラーのトラブルシューティング
intro: アプライアンスでSSLの問題が生じたなら、解決のためのアクションを取ってください。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors/
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration/
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 鍵ファイルからのパスフレーズの除去

OpenSSLがインストールされたLinuxマシンを使うなら、パスフレーズを除去できます。

1. オリジナルの鍵ファイルの名前を変えてください。
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. パスフレーズなしで新しい鍵を生成してください。
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

このコマンドを実行すると、鍵のパスフレーズを入力するようプロンプトが表示されます。

OpenSSL に関する詳しい情報については、[OpenSSL のドキュメンテーション](https://www.openssl.org/docs/)を参照してください。

### SSL証明書あるいは鍵のPEMフォーマットへの変換

OpenSSL をインストールしている場合、`openssl` コマンドを使って鍵を PEM フォーマットに変換できます。 たとえば鍵を DER フォーマットから PEM フォーマットに変換できます。

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

あるいは SSL Converter ツールを使って証明書を PEM フォーマットに変換することもできます。 詳しい情報については [SSL Converter ツールのドキュメンテーション](https://www.sslshopper.com/ssl-converter.html)を参照してください。

### 鍵のアップロード後の反応のない環境

SSL 鍵のアップロード後に {% data variables.product.product_location %} の反応がない場合、SSL 証明書のコピーを含む詳細事項と合わせて [{% data variables.product.prodname_enterprise %} Support に連絡](https://enterprise.github.com/support)してください。

### 証明書の検証エラー

Web ブラウザやコマンドラインの Git などのクライアントは、SSL 証明書の正当性が検証できなければエラーメッセージを表示します。 これはしばしば自己署名証明書の場合や、クライアントが認識しない中間ルート証明書から発行された "チェーンドルート" 証明書の場合に生じます。

証明書認証局 (CA) によって署名された証明書を使っている場合は、{% data variables.product.prodname_ghe_server %} にアップロードする証明書ファイルには CA のルート証明を持つ証明書チェーンが含まれていなければなりません。 そのようなファイルを作成するには、証明書チェーン全体 (「証明書バンドル」とも呼ばれます) を証明書の終わりにつなげ、プリンシパル証明書の先頭にホスト名が来るようにしてください。 ほとんどのシステムでは、以下のようなコマンドでこの処理を行えます:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

証明書バンドル (たとえば `bundle-certificates.crt`) は、証明書認証局もしくは SSL のベンダーからダウンロードできるはずです。

### 自己署名もしくは信頼されない証明書認証者（CA）ルート証明書のインストール

{% data variables.product.prodname_ghe_server %} アプライアンスが、自己署名もしくは信頼されない証明書を使うネットワーク上の他のマシンとやりとりするのであれば、それらのシステムに HTTPS でアクセスできるようにするために、署名をした CA のルート証明書をシステム全体の証明書ストアにインポートしなければなりません。

1. CA のルート証明書をローカルの証明書認証局から取得し、それが PEM フォーマットになっていることを確認してください。
2. そのファイルを {% data variables.product.prodname_ghe_server %} アプライアンスにポート 122 の SSH 経由で "admin" ユーザとしてコピーしてください。
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. {% data variables.product.prodname_ghe_server %} の管理シェルにポート 122 の SSH 経由で "admin" ユーザとして接続します。
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. 証明書をシステム全体の証明書ストアにインポートします。
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```
