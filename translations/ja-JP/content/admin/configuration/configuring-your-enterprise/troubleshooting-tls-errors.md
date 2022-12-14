---
title: TLS エラーのトラブルシューティング
intro: アプライアンスで TLS の問題が生じた場合は、解決のためのアクションを取ってください。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/configuring-your-enterprise/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Errors
  - Infrastructure
  - Networking
  - Security
  - Troubleshooting
shortTitle: Troubleshoot TLS errors
ms.openlocfilehash: 855737f89f0380333b1f37c26d512c889f2ee786
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881252'
---
## 鍵ファイルからのパスフレーズの除去

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

OpenSSL の詳細については、[OpenSSL のドキュメント](https://www.openssl.org/docs/)を参照してください。

## TLS 証明書または TLS キーを PEM 形式に変換する

OpenSSL をインストールしている場合、`openssl` コマンドを使ってキーを PEM 形式に変換できます。 たとえば鍵を DER フォーマットから PEM フォーマットに変換できます。

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

あるいは SSL Converter ツールを使って証明書を PEM フォーマットに変換することもできます。 詳細については、[SSL Converter ツールのドキュメント](https://www.sslshopper.com/ssl-converter.html)を参照してください。

## 鍵のアップロード後の反応のない環境

TLS キーのアップロード後に {% data variables.product.product_location %} が応答しない場合は、[{% data variables.product.prodname_enterprise %} サポートに連絡して](https://enterprise.github.com/support)、TLS 証明書のコピーを含む具体的な詳細を伝えてください。 秘密キーが **含まれていない** ことを確認します。 

## 証明書の検証エラー

Web ブラウザーやコマンドラインの Git などのクライアントでは、TLS 証明書の有効性を検証できないと、エラー メッセージが表示されます。 これはしばしば自己署名証明書の場合や、クライアントが認識しない中間ルート証明書から発行された "チェーンドルート" 証明書の場合に生じます。

証明書認証局 (CA) によって署名された証明書を使っている場合は、{% data variables.product.prodname_ghe_server %} にアップロードする証明書ファイルには CA のルート証明を持つ証明書チェーンが含まれていなければなりません。 そのようなファイルを作成するには、証明書チェーン全体 (「証明書バンドル」とも呼ばれます) を証明書の終わりにつなげ、プリンシパル証明書の先頭にホスト名が来るようにしてください。 ほとんどのシステムでは、以下のようなコマンドでこの処理を行えます:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

証明機関または TLS ベンダーから証明書バンドル (`bundle-certificates.crt` など) をダウンロードできるはずです。

## 自己署名もしくは信頼されない証明書認証者（CA）ルート証明書のインストール

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

## TLS 証明書の更新

`ghe-ssl-certificate-setup` コマンド ライン ユーティリティを使用して、{% data variables.product.product_location %} の新しい自己署名証明書を生成したり、既存の TLS 証明書を更新したりできます。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)」を参照してください。
