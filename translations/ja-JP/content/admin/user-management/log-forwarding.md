---
title: ログの転送
intro: '{% data variables.product.product_name %} uses `syslog-ng` to forward {% if enterpriseServerVersions contains currentVersion %}system{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} and application logs to the server you specify.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
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
1. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **Log forwarding**. ![Log forwarding tab](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Under "Log forwarding", select **Enable log forwarding**. ![Checkbox to enable log forwarding](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Under "Server address", enter the address of the server you want to forward logs to. ![Server address field](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use the "Protocol" drop-down menu, and select a protocol. ![Protocol drop-down menu](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Optionally, to enable TLS encrypted communication between syslog endpoints, select **Enable TLS**. ![Checkbox to enable TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Under "Public certificate", paste your x509 certificate. ![Text box for public certificate](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. [**Save**] をクリックします。 ![Save button for log forwarding](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### トラブルシューティング
If you run into issues with log forwarding, contact

{% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
