---
title: ログの転送
intro: '{% data variables.product.prodname_enterprise %}は、`syslog-ng` を使って、{% data variables.enterprise.management_console %}の設定で指定したサーバに、システムとアプリケーションのログを転送します。'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
---

syslog-style 式のログストリームに対応するログ回収システムは、サポートしています。（例えば、[Logstash](http://logstash.net/) や [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)など）

### ログの転送を有効化

1. {% data variables.enterprise.management_console %}の設定ページの左サイドバーで**Monitoring**をクリックする。
1. **Enable log forwarding** を選択する。
1. [**Server address**] フィールドに、ログの転送先となるサーバーのアドレスを入力します。 コンマ区切りリストで複数のアドレスを指定できます。
1. [Protocol] ドロップダウンメニューで、ログサーバーとの通信に使用するプロトコルを選択します。 そのプロトコルは指定されたすべてのログ送信先に適用されます。
1. **Enable TLS** を選択する。
1. **Choose File** をクリックして、syslog のエンドポイントの間の通信を暗号化するためのCA証明書を選択する。 一連の証明書の全体が確認され、ルート証明書で終了しなければなりません。 詳しくは、[syslog-ng のドキュメントのTLSオプション](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)を参照してください。

### トラブルシューティング

ログ転送で問題が発生した場合、 `http(s)://[hostname]/setup/diagnostics` のアウトプットファイルをメールに添付し、{% data variables.contact.contact_ent_support %}に連絡してください。
