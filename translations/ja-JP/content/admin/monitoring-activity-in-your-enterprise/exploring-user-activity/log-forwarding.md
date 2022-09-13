---
title: ログの転送
intro: '{% data variables.product.product_name %} は、`syslog-ng` を使用して、{% ifversion ghes %}システム{% elsif ghae %}Git {% endif %}とアプリケーション ログを指定したサーバーに転送します。'
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
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115221'
---
## ログの転送について

syslog スタイルのログ ストリームをサポートしているログ収集システムがサポートされています ([Logstash](http://logstash.net/) や [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports) など)。

ログ転送を有効にする場合、syslog エンドポイント間の通信を暗号化するために CA 証明書をアップロードする必要があります。 アプライアンスとリモート syslog サーバーは双方向 SSL を実行し、それぞれが他方に証明書を提供し、受信した証明書の有効性を検証します。

## ログの転送を有効化

{% ifversion ghes %}
1. {% data variables.enterprise.management_console %} 設定ページの左サイドバーで **[監視]** をクリックします。
1. **[ログ転送を有効にする]** を選択します。
1. **[サーバー アドレス]** フィールドに、ログの転送先となるサーバーのアドレスを入力します。 コンマ区切りリストで複数のアドレスを指定できます。
1. [Protocol] ドロップダウンメニューで、ログサーバーとの通信に使用するプロトコルを選択します。 そのプロトコルは指定されたすべてのログ送信先に適用されます。
1. 必要に応じて、 **[TLS を有効にする]** を選択します。 アプライアンスとリモート ログ サーバーの間に信頼されていないネットワークがある場合は特に、ローカル セキュリティ ポリシーに従って TLS を有効にすることをお勧めします。 
1. syslog エンドポイント間の通信を暗号化するには、 **[ファイルの選択]** をクリックし、リモート syslog サーバーの CA 証明書を選択します。 リモート ログ サーバーの証明書の署名に関連する CA の証明書の連結を含む CA バンドルをアップロードする必要があります。 一連の証明書の全体が確認され、ルート証明書で終了しなければなりません。 詳細については、[syslog-ng の TLS オプションに関するドキュメント](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)を参照してください。
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. {% octicon "gear" aria-label="The Settings gear" %} **[設定]** で **[ログ転送]** をクリックします。
  ![[ログ転送] タブ](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. [ログ転送] で、 **[ログ転送を有効にする]** を選択します。
  ![ログ転送を有効にするチェックボックス](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. [Server address] の下に、ログを転送するサーバーのアドレスを入力します。
  ![[サーバー アドレス] フィールド](/assets/images/enterprise/business-accounts/server-address-field.png)
1. [Protocol] ドロップダウンメニューを使用して、プロトコルを選択します。
  ![[プロトコル] ドロップダウン メニュー](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. 必要に応じて syslog エンドポイント間の TLS 暗号化通信を有効にするには、 **[TLS を有効にする]** を選択します。
  ![TLS を有効にするチェックボックス](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. [Public certificate] の下に、x509 証明書を貼り付けます。
  ![公開証明書のテキスト ボックス](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. **[保存]** をクリックします。
  ![ログ転送の [保存] ボタン](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## トラブルシューティング

ログ転送で問題が発生した場合、{% data variables.contact.contact_ent_support %} に問い合わせ、出力ファイルを `http(s)://[hostname]/setup/diagnostics` からメールに添付します。
{% endif %}
