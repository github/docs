---
title: SSLのエラーのトラブルシューティング
intro: アプライアンスでSSLの問題が生じたなら、解決のためのアクションを取ってください。
redirect_from:
- /enterprise/admin/articles/troubleshooting-ssl-errors
- /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
- /enterprise/admin/installation/troubleshooting-ssl-errors
- /enterprise/admin/configuration/troubleshooting-ssl-errors
- /admin/configuration/troubleshooting-ssl-errors
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
shortTitle: Troubleshoot SSL errors
ms.openlocfilehash: cfe73a647b539fa8c9c2aef54f8bc51f2b1becae
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145120677"
---
## <a name="removing-the-passphrase-from-your-key-file"></a>鍵ファイルからのパスフレーズの除去

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

## <a name="converting-your-ssl-certificate-or-key-into-pem-format"></a>SSL証明書あるいは鍵のPEMフォーマットへの変換

OpenSSL をインストールしている場合、`openssl` コマンドを使ってキーを PEM 形式に変換できます。 たとえば鍵を DER フォーマットから PEM フォーマットに変換できます。

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

あるいは SSL Converter ツールを使って証明書を PEM フォーマットに変換することもできます。 詳細については、[SSL Converter ツールのドキュメント](https://www.sslshopper.com/ssl-converter.html)を参照してください。

## <a name="unresponsive-installation-after-uploading-a-key"></a>鍵のアップロード後の反応のない環境

SSL キーのアップロード後に {% data variables.product.product_location %} が応答しない場合は、[{% data variables.product.prodname_enterprise %} サポートに連絡して](https://enterprise.github.com/support)、SSL 証明書のコピーを含む部隊的な詳細を伝えてください。

## <a name="certificate-validity-errors"></a>証明書の検証エラー

Web ブラウザやコマンドラインの Git などのクライアントは、SSL 証明書の正当性が検証できなければエラーメッセージを表示します。 これはしばしば自己署名証明書の場合や、クライアントが認識しない中間ルート証明書から発行された "チェーンドルート" 証明書の場合に生じます。

証明書認証局 (CA) によって署名された証明書を使っている場合は、{% data variables.product.prodname_ghe_server %} にアップロードする証明書ファイルには CA のルート証明を持つ証明書チェーンが含まれていなければなりません。 そのようなファイルを作成するには、証明書チェーン全体 (「証明書バンドル」とも呼ばれます) を証明書の終わりにつなげ、プリンシパル証明書の先頭にホスト名が来るようにしてください。 ほとんどのシステムでは、以下のようなコマンドでこの処理を行えます:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

証明機関または SSL ベンダーから証明書バンドル (`bundle-certificates.crt` など) をダウンロードできるはずです。

## <a name="installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates"></a>自己署名もしくは信頼されない証明書認証者（CA）ルート証明書のインストール

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

## <a name="updating-an-ssl-certificate"></a>SSL 証明書の更新

`ghe-ssl-certificate-setup` コマンド ライン ユーティリティを使用して、{% data variables.product.product_location %} の新しい自己署名証明書を生成したり、既存の SSL 証明書を更新したりできます。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)」を参照してください。
