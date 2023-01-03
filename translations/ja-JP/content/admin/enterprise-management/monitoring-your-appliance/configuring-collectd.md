---
title: collectd のコンフィグレーション
intro: '{% data variables.product.prodname_enterprise %} では、`collectd` でデータを収集し、外部の `collectd` サーバーに送信することができます。 CPU の使用率やメモリーとディスクの消費、ネットワークインタフェーストラフィックとエラー、仮想マシンの全体的な負荷などのデータを収集しています。'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: f63eb940681be3131a470a7786e134550fdba152
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120518'
---
## 外部 `collectd` サーバーを設定する

外部 `collectd` サーバーをまだ設定していない場合、{% data variables.product.product_location %} で `collectd` 転送を有効にする前に設定する必要があります。 `collectd`サーバーでバージョン 5.x 以降を実行している`collectd`必要があります。

1. `collectd` サーバーにログインします。
2. `collectd` を作成、または編集することで、ネットワークプラグインをロードし、適切な値をサーバとポートのディレクティブに追加します。 ほとんどのディストリビューションでこれは `/etc/collectd/collectd.conf` にあります。

`collectd` サーバーを実行する *collectd.conf* 例:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## {% data variables.product.prodname_enterprise %}でcollectd転送を有効にする

既定では、`collectd` 転送は {% data variables.product.prodname_enterprise %} で無効になっています。 次の手順に従って、`collectd` 転送を有効にして設定します。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. ログの転送設定の下にある **[collectd 転送を有効にする]** を選択します。
1. **[サーバー アドレス]** フィールドには {% data variables.product.prodname_enterprise %} のアプライアンスの統計を転送したい`collectd` サーバーのアドレスを入力します。
1. **[ポート]** フィールドに、`collectd` サーバーへの接続に使用するポートを入力します。 (デフォルトは 25826)
1. **[暗号化のセットアップ]** ドロップダウン メニューで、`collectd` サーバーとの通信のセキュリティ レベルを選択します。 (なし、署名付きパケット、パケットの暗号化) {% data reusables.enterprise_management_console.save-settings %}

## 収集されたデータを `ghe-export-graphs` でエクスポートする

コマンドライン ツール `ghe-export-graphs` では、`collectd` によって RRD データベースに格納されるデータがエクスポートされます。 このコマンドは、データを XML にして、1 つの TAR 書庫 (`.tgz`) にエクスポートします。

その主な用途は、Support Bundleを一括ダウンロードする必要なく、{% data variables.contact.contact_ent_support %}のチームに仮想マシンのパフォーマンスに関するデータ提供することです。 定期的なバックアップエクスポートに含めてはなりません。また、その逆のインポートもありません。 {% data variables.contact.contact_ent_support %}に連絡したとき、問題解決を容易にするため、このデータが必要となる場合があります。

### 使用

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## トラブルシューティング

### 中心の collectd サーバはデータを受信していない

{% data variables.product.prodname_enterprise %} は `collectd` バージョン 5.x に付属しています。 `collectd` 5.x には、4.x リリース シリーズとの下位互換性がありません。 {% data variables.product.product_location %} から送られるデータを受信するには、中心の `collectd` サーバーは 5.x 以上のバージョンでなければなりません。

他に質問や問題がある場合、{% data variables.contact.contact_ent_support %}までお問い合わせください。
