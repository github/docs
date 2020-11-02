---
title: collectd のコンフィグレーション
intro: '{% data variables.product.prodname_enterprise %}は、`collectd` でデータを収集し、外部の `collectd` に送信することができます。 CPU の使用率やメモリーとディスクの消費、ネットワークインタフェーストラフィックとエラー、仮想マシンの全体的な負荷などのデータを収集しています。'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd/
  - /enterprise/admin/enterprise-management/configuring-collectd
versions:
  enterprise-server: '*'
---

### 外部 `collectd` サーバーを設置

{% data variables.product.product_location_enterprise %}に`collectd` の転送をまだ有効にしていない場合は、外部の `collectd` サーバを設置する必要があります。 `collectd` サーバは、`collectd` 5.x以上のバージョンを使わなければなりません。

1. `collectd` サーバにログインする
2. `collectd` を作成、または編集することで、ネットワークプラグインをロードし、適切な値をサーバとポートのディレクティブに追加する。 たいていのディストリビューションでは、これは `/etc/collectd/collectd.conf` にあります。

`collectd` サーバを実行するための見本の*collectd.conf*

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

### {% data variables.product.prodname_enterprise %}でcollectd転送を有効にする

デフォルトでは、`collectd` 転送は {% data variables.product.prodname_enterprise %} で無効になっています。 次の手順に従って、`collectd` 転送を有効にして設定します。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. ログの転送設定の下にある、**Enable collectd forwarding** を選択する
1. **Server address** の欄には {% data variables.product.prodname_enterprise %}のアプライアンスの統計を転送したい`collectd` サーバのアドレスを入力する。
1. **Port**の欄には、`collectd` サーバーに接続するためのポートを入力する。 (デフォルトは 25826)
1. **Cryptographic setup** のドロップダウンメニューでは、`collectd` サーバーとのコミュニケーションのセキュリティーレベルを選択する。 (None, signed packets, or encrypted packets.)
{% data reusables.enterprise_management_console.save-settings %}

### collectd データの `ghe-export-graphs`でのエクスポート

`ghe-export-graphs` のコマンドラインツールは、`collectd` が RRD データベースに保存するデータをエクスポートします。 このコマンドは、データを XML にして、1つのTAR書庫（.tgz）にエクスポートします。

その主な用途は、Support Bundleを一括ダウンロードする必要なく、{% data variables.contact.contact_ent_support %}のチームに仮想マシンのパフォーマンスに関するデータ提供することです。 定期的なバックアップエクスポートに含めてはなりません。また、その逆のインポートもありません。 {% data variables.contact.contact_ent_support %}に連絡したとき、問題解決を容易にするため、このデータが必要となる場合があります。

#### 使い方

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

### トラブルシューティング

#### 中心の collectd サーバはデータを受信していない

{% data variables.product.prodname_enterprise %} は `collectd` バージョン 5.x に付属しています。 `collectd` 5.x is not backwards compatible with the 4.x release series. {% data variables.product.product_location_enterprise %}から送られるデータを受信するには、中心の`collectd`サーバは 5.x 以上のバージョンでなければなりません。

他に質問や問題がある場合、{% data variables.contact.contact_ent_support %}までお問い合わせください。
