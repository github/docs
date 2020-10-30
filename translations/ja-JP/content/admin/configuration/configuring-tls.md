---
title: TLSの設定
intro: '信頼できる認証機関によって署名された証明書を使用できるように、{% data variables.product.product_location_enterprise %} で Transport Layer Security (TLS) を設定できます。'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration/
  - /enterprise/admin/guides/installation/about-tls/
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
versions:
  enterprise-server: '*'
---

### Transport Layer Securityについて

SSL に代わる TLS は、{% data variables.product.prodname_ghe_server %} の初回起動時に有効になり、自己署名証明書で設定されます。 自己署名証明書は Web ブラウザや Git クライアントから信頼されていないため、TLS を無効にするか、Let's Encrypt などの信頼できる機関によって署名された証明書をアップロードするまで、これらのクライアントは証明書の警告を報告します。

SSL が有効な場合、{% data variables.product.prodname_ghe_server %} アプライアンスは HTTP Strict Transport Security ヘッダーを送信します。 TLSを無効化すると、ブラウザはHTTPへのプロトコルダウングレードを許さないので、ユーザはアプライアンスにアクセスできなくなります。 詳しい情報についてはWikipediaの"[HTTP Strict Transport Security](https://ja.wikipedia.org/wiki/HTTP_Strict_Transport_Security)"を参照してください。

{% data reusables.enterprise_installation.terminating-tls %}

ユーザが2要素認証のFIDO U2Fを利用できるようにするには、インスタンスでTLSを有効化しなければなりません。 詳しい情報については「[2 要素認証の設定](/articles/configuring-two-factor-authentication)」を参照してください。

### 必要な環境

プロダクションでTLSを利用するには、暗号化されていないPEMフォーマットで、信頼済みの証明書認証局によって署名された証明書がなければなりません。

また、証明書には"[Subdomain Isolationの有効化](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)"のリストにあるサブドメインに設定されたSubject Alternative Namesが必要で、中間証明書認証局によって署名されたものであれば、完全な証明書チェーンを含んでいる必要があります。 詳しい情報についてはWikipediaの"[Subject Alternative Name](http://en.wikipedia.org/wiki/SubjectAltName)"を参照してください。

`ghe-ssl-generate-csr` コマンドを使用すれば、インスタンス用の証明書署名要求 (CSR) を生成できます。 詳しい情報については、「[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)」を参照してください。

### カスタムのTLS証明書のアップロード

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
4. [TLS Protocol support] で、許可するプロトコルを選択します。 ![TLS プロトコルを選択するオプションを備えたラジオボタン](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. "Certificate（証明書）"の下で**Choose File（ファイルの選択）**をクリックし、インストールしたいTLS証明書もしくは証明書チェーン（PEMフォーマット）を選択してください。 このファイルは通常、*.pem*、*.crt*、*.cer* といった拡張子を持ちます。 ![TLS 証明書ファイルを見つけるためのボタン](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. "Unencrypted key（暗号化されていない鍵）"の下で**Choose File（ファイルの選択）**をクリックし、インストールするTLS鍵（PEMフォーマット）を選択してください。 このファイルは通常*.key*という拡張子を持ちます。 ![TLS鍵ファイルを見つけるためのボタン](/assets/images/enterprise/management-console/install-tls-key.png)

  {% warning %}

  **警告**: このTLS鍵はパスフレーズを持っていてはなりません。 詳しい情報については"[キーファイルからのパスフレーズの除去](/enterprise/{{ currentVersion }}/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)"を参照してください。

  {% endwarning %}
{% data reusables.enterprise_management_console.save-settings %}

### Let's Encryptのサポートについて

Let's Encryptは公開の証明書認証者で、ACMEプロトコルを使ってブラウザが信頼するTLS証明書を、無料で自動的に発行してくれます。 アプライアンスのためのLet's Encryptの証明書は、手動のメンテナンスを必要とせず自動的に取得及び更新できます。

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Let's Encryptを使ったTLS証明書管理の自動化を有効にすると、{% data variables.product.product_location_enterprise %}はLet's Encryptのサーバに接続して証明書を取得します。 証明書を更新するには、Let's EncryptのサーバはインバウンドのHTTPリクエストで設定されたドメイン名の制御を検証しなければなりません。

また、{% data variables.product.product_location_enterprise %}上でコマンドラインユーティリティの`ghe-ssl-acme`を使っても、自動的にLet's Encryptの証明書を生成できます。 詳細は「[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-ssl-acme)」を参照してください。

### Let's Encryptを使ったTLSの設定

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
5. **Enable automation of TLS certificate management using Let's Encrypt（Let's Encryptを使った自動的なTLS証明書管理の有効化）**を選択してください。 ![[Let's Encrypt] を有効化するチェックボックス](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
7. **Request TLS certificate（TLS証明書のリクエスト）**をクリックしてください。 ![[Request TLS certificate] ボタン](/assets/images/enterprise/management-console/request-tls-button.png)
8. **Save configuration（設定の保存）**をクリックしてください。
