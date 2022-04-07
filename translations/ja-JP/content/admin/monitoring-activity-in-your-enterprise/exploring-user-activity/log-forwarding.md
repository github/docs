---
title: ログの転送
intro: '{% data variables.product.product_name %} は `syslog-ng` を使用して、{% ifversion ghes %} システム {% elsif ghae %} Git{% endif %} とアプリケーションログを指定したサーバーに転送します。'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## About log forwarding

syslog-style 式のログストリームに対応するログ回収システムは、サポートしています。（例えば、[Logstash](http://logstash.net/) や [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)など）

When you enable log forwarding, you must upload a CA certificate to encrypt communications between syslog endpoints. Your appliance and the remote syslog server will perform two-way SSL, each providing a certificate to the other and validating the certificate which is received.

## ログの転送を有効化

{% ifversion ghes %}
1. {% data variables.enterprise.management_console %}の設定ページの左サイドバーで**Monitoring**をクリックする。
1. **Enable log forwarding** を選択する。
1. [**Server address**] フィールドに、ログの転送先となるサーバーのアドレスを入力します。 コンマ区切りリストで複数のアドレスを指定できます。
1. [Protocol] ドロップダウンメニューで、ログサーバーとの通信に使用するプロトコルを選択します。 そのプロトコルは指定されたすべてのログ送信先に適用されます。
1. Optionally, select **Enable TLS**. We recommend enabling TLS according to your local security policies, especially if there are untrusted networks between the appliance and any remote log servers.
1. To encrypt communication between syslog endpoints, click **Choose File** and choose a CA certificate for the remote syslog server. You should upload a CA bundle containing a concatenation of the certificates of the CAs involved in signing the certificate of the remote log server. 一連の証明書の全体が確認され、ルート証明書で終了しなければなりません。 詳しくは、[syslog-ng のドキュメントのTLSオプション](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)を参照してください。
{% elsif ghae %}
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

{% ifversion ghes %}
## トラブルシューティング

ログ転送で問題が発生した場合、 `http(s)://[hostname]/setup/diagnostics` のアウトプットファイルをメールに添付し、{% data variables.contact.contact_ent_support %}に連絡してください。
{% endif %}
