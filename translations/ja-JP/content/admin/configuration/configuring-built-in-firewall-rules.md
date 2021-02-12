---
title: 組み込みファイアウォールのルール設定
intro: '{% data variables.product.product_location %}のデフォルトのファイアウォールのルールとカスタマイズされたルールを見ることができます。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings/
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
versions:
  enterprise-server: '*'
---

### {% data variables.product.product_location %}のファイアウォールについて

{% data variables.product.prodname_ghe_server %} は、仮想アプライアンスで Ubuntu の Uncomplicated Firewall (UFW) を使用します。 詳しい情報についてはUbuntuのドキュメンテーションの"[UFW](https://help.ubuntu.com/community/UFW)"を参照してください。 {% data variables.product.prodname_ghe_server %} は、許可されたサービスのファイアウォールのホワイトリストをリリースごとに自動的に更新します。

{% data variables.product.prodname_ghe_server %} をインストールすると、接続を受け入れるために必要なすべてのネットワークポートが自動的に開かれます。 不必要なすべてのポートは自動的に`deny`に設定され、デフォルトの送信ポリシーは`allow`に設定されます。 ステートフルな追跡は、任意の新しいコネクションに対して有効化されます。それらは通常、`SYN`ビットが立てられているネットワークパケットです。 詳しい情報については"[ネットワークポート](/enterprise/admin/guides/installation/network-ports)"を参照してください。

UFW ファイアウォールは、{% data variables.product.prodname_ghe_server %} が正しく動作するのに必要となる他のいくつかのポートも開きます。 UFWのルールセットに関する詳しい情報については[the UFW README](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213)を参照してください。

### デフォルトのファイアウォールルールの表示

{% data reusables.enterprise_installation.ssh-into-instance %}
2. デフォルトのファイアウォールルールを表示するには、`sudo ufw status` コマンドを使用します。 以下と同じような出力が表示されるでしょう:
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

### カスタムのファイアウォールルールの追加

{% warning %}

**警告:** 既知の作業状態にリセットする必要が生じた場合に備えて、カスタムのファイアウォールルールを追加する前に、現在のルールをバックアップしてください。 サーバーからロックアウトされている場合には、{% data variables.contact.contact_ent_support %}に問い合わせて、元のファイアウォールルールを再設定してください。 元のファイアウォールルールを復元すると、サーバーでダウンタイムが発生します。

{% endwarning %}

1. カスタムのファイアウォールルールを設定する。
2. `status numbered`コマンドを使って、新しいルールそれぞれのステータスをチェックします。
  ```shell
  $ sudo ufw status numbered
  ```
3. カスタムのファイアウォールルールをバックアップするには、`cp` コマンドを使用してルールを新しいファイルに移動します。
  ```shell
  $ sudo cp -r /lib/ufw ~/ufw.backup
  ```

{% data variables.product.product_location %}をアップグレードした後は、カスタムのファイアウォールルールを再適用しなければなりません。 ファイアウォールのカスタムルールを再適用するためのスクリプトを作成することをお勧めします。

### デフォルトのファイアウォールルールのリストア

ファイアウォールルールの変更後に何か問題が生じたなら、オリジナルのバックアップからルールをリセットできます。

{% warning %}

**警告:** ファイアウォールに変更を加える前にオリジナルのルールをバックアップしていなかった場合は、{% data variables.contact.contact_ent_support %} にお問い合わせください。

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 以前のバックアップルールを復元するには、`cp` コマンドでそれらをファイアウォールにコピーして戻します。
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /lib/ufw
  ```
3. `systemctl` コマンドでファイアウォールを再起動します。
  ```shell
  $ sudo systemctl restart ufw
  ```
4. `ufw status` コマンドで、ルールがデフォルトに戻っていることを確認します。
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
