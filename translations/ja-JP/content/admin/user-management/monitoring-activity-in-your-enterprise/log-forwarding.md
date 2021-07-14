---
title: ログの転送
intro: '{% data variables.product.product_name %} は `syslog-ng` を使用して、{% if enterpriseServerVersions contains currentVersion %} システム {% elsif currentVersion == "github-ae@latest" %} Git{% endif %} とアプリケーションログを指定したサーバーに転送します。'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

syslog-style 式のログストリームに対応するログ回収システムは、サポートしています。（例えば、[Logstash](http://logstash.net/) や [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)など）

### ログの転送を有効化

{% if enterpriseServerVersions contains currentVersion %}
1. {% data variables.enterprise.management_console %}の設定ページの左サイドバーで**Monitoring**をクリックする。
1. **Enable log forwarding** を選択する。
1. [**Server address**] フィールドに、ログの転送先となるサーバーのアドレスを入力します。 コンマ区切りリストで複数のアドレスを指定できます。
1. [Protocol] ドロップダウンメニューで、ログサーバーとの通信に使用するプロトコルを選択します。 そのプロトコルは指定されたすべてのログ送信先に適用されます。
1. **Enable TLS** を選択する。
1. **Choose File** をクリックして、syslog のエンドポイントの間の通信を暗号化するためのCA証明書を選択する。 一連の証明書の全体が確認され、ルート証明書で終了しなければなりません。 詳しくは、[syslog-ng のドキュメントのTLSオプション](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)を参照してください。
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. {% octicon "gear" aria-label="The Settings gear" %} [**Settings**] の下で、[**Log forwarding**] をクリックします。 ![[Log forwarding] タブ](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. [Log forwarding] の下で、[**Enable log forwarding**] を選択します。 ![ログ転送を有効にするチェックボックス](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. [Server address] の下に、ログを転送するサーバーのアドレスを入力します。 ![[Server address] フィールド](/assets/images/enterprise/business-accounts/server-address-field.png)
1. [Protocol] ドロップダウンメニューを使用して、プロトコルを選択します。 ![[Protocol] ドロップダウンメニュー](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. 必要に応じて、syslog エンドポイント間の TLS 暗号化通信を有効にするには、[**Enable TLS**] を選択します。 ![TLS を有効にするチェックボックス](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. [Public certificate] の下に、x509 証明書を貼り付けます。 ![公開証明書のテキストボックス](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. [**Save**] をクリックします。 ![ログ転送用の [Save] ボタン](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### トラブルシューティング

ログ転送で問題が発生した場合、 `http(s)://[hostname]/setup/diagnostics` のアウトプットファイルをメールに添付し、{% data variables.contact.contact_ent_support %}に連絡してください。
{% endif %}
