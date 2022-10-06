---
title: TLSの設定
intro: '信頼できる認証機関によって署名された証明書を使用できるように、{% data variables.product.product_location %} で Transport Layer Security (TLS) を設定できます。'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: c11f78b69f5b251a63c0796d46bca4d6c926f002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682334'
---
## Transport Layer Securityについて

SSL に代わる TLS は、{% data variables.product.prodname_ghe_server %} の初回起動時に有効になり、自己署名証明書で設定されます。 自己署名証明書は Web ブラウザや Git クライアントから信頼されていないため、TLS を無効にするか、Let's Encrypt などの信頼できる機関によって署名された証明書をアップロードするまで、これらのクライアントは証明書の警告を報告します。

SSL が有効な場合、{% data variables.product.prodname_ghe_server %} アプライアンスは HTTP Strict Transport Security ヘッダーを送信します。 TLSを無効化すると、ブラウザはHTTPへのプロトコルダウングレードを許さないので、ユーザはアプライアンスにアクセスできなくなります。 詳しくは、Wikipedia の「[HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)」をご覧ください。

{% data reusables.enterprise_installation.terminating-tls %}

ユーザが2要素認証のFIDO U2Fを利用できるようにするには、インスタンスでTLSを有効化しなければなりません。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」を参照してください。

## 前提条件

プロダクションでTLSを利用するには、暗号化されていないPEMフォーマットで、信頼済みの証明書認証局によって署名された証明書がなければなりません。

証明書には、"[Subdomain Isolation の有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)" の一覧にあるサブドメイン用に構成されたサブジェクトの別名も必要であり、中間証明機関によって署名されている場合は完全な証明書チェーンを含める必要があります。 詳しくは、Wikipedia の「[サブジェクトの別名](http://en.wikipedia.org/wiki/SubjectAltName)」をご覧ください。

`ghe-ssl-generate-csr` コマンドを使って、インスタンス用の証明書署名要求 (CSR) を生成できます。 詳細については、「[コマンド ライン ユーティリティ](/enterprise/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)」を参照してください。

キーは RSA キーでなければならず、パスフレーズは使用できません。 詳しくは、「[鍵ファイルからのパスフレーズの除去](/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)」をご覧ください。

## カスタムのTLS証明書のアップロード

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
4. [TLS Protocol support] で、許可するプロトコルを選択します。
  ![TLS プロトコルを選ぶためのオプションのラジオ ボタン](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. [証明書] の下の **[ファイルの選択]** をクリックして、インストールする TLS 証明書または証明書チェーン (PEM 形式) を選びます。 このファイルの拡張子は、通常、 *.pem*、 *.crt*、または *.cer* です。
  ![TLS 証明書ファイルを見つけるためのボタン](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. [暗号化されていないキー] で **[ファイルの選択]** をクリックして、インストールする RSA キー (PEM 形式) を選びます。 通常、このファイルの拡張子は *.key* です。
  ![TLS キー ファイルを見つけるためのボタン](/assets/images/enterprise/management-console/install-tls-key.png)

{% data reusables.enterprise_management_console.save-settings %}

## Let's Encryptのサポートについて

Let's Encryptは公開の証明書認証者で、ACMEプロトコルを使ってブラウザが信頼するTLS証明書を、無料で自動的に発行してくれます。 アプライアンスのためのLet's Encryptの証明書は、手動のメンテナンスを必要とせず自動的に取得及び更新できます。

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Let's Encrypt を使って TLS 証明書管理の自動化を有効にすると、{% data variables.product.product_location %} は Let's Encrypt のサーバーに接続して証明書を取得します。 証明書を更新するには、Let's EncryptのサーバはインバウンドのHTTPリクエストで設定されたドメイン名の制御を検証しなければなりません。

また、{% data variables.product.product_location %} で `ghe-ssl-acme` コマンド ライン ユーティリティを使って、Let's Encrypt の証明書を自動的に生成することもできます。 詳細については、「[コマンド ライン ユーティリティ](/enterprise/admin/guides/installation/command-line-utilities#ghe-ssl-acme)」を参照してください。

## Let's Encryptを使ったTLSの設定

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
5. **[Let's Encrypt を使用した TLS 証明書管理の自動化を有効にする]** を選びます。
  ![Let's Encrypt を有効にするためのチェックボックス](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% data reusables.enterprise_management_console.privacy %}
7. **[TLS 証明書の要求]** をクリックします。
  ![[TLS 証明書の要求] ボタン](/assets/images/enterprise/management-console/request-tls-button.png)
8. [状態] が "STARTED" から "DONE" に変わるのを待ちます。
   ![Let's Encrypt の状態](/assets/images/enterprise/management-console/lets-encrypt-status.png)
9. **[Save configuration]** をクリックします。
