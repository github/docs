---
title: ストレージ容量の増加
intro: Gitリポジトリ、データベース、検索インデックス、その他の恒久的なアプリケーションデータに利用できるストレージの量は、追加あるいは変更できます。
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% data variables.product.product_location %}に参加するユーザが増えるにつれて、ストレージボリュームをリサイズする必要があるかもしれません。 ストレージのリサイズに関する情報については、使用している仮想化プラットフォームのドキュメンテーションを参照してください。

## 要求及び推奨事項

{% note %}

**Note:** Before resizing any storage volume, put your instance in maintenance mode.{% ifversion ip-exception-list %} You can validate changes by configuring an IP exception list to allow access from specified IP addresses. {% endif %} For more information, see "[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)."

{% endnote %}

### 最小要件

{% data reusables.enterprise_installation.hardware-rec-table %}

## データパーティションサイズの増加

1. 仮想化プラットフォームのツールを使用して、既存のユーザーボリュームのディスクのサイズを変更します。
{% data reusables.enterprise_installation.ssh-into-instance %}
3. アプライアンスをメンテナンスモードにしてください。 詳しい情報については"[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)"を参照してください。
4. アプライアンスを再起動して、新しいストレージ割り当てを検出します。
  ```shell
  $ sudo reboot
  ```
5. `ghe-storage-extend` コマンドを実行して、`/data/user` のファイルシステムを拡張します。
  ```shell
  $ ghe-storage-extend
  ```

## 新しいアプライアンスを使用したルートパーティションサイズの増加

1. 現在のアプライアンスと同じバージョンを使用して、より大きなルートディスクで新たな {% data variables.product.prodname_ghe_server %} をセットアップします。 詳細は「[{% data variables.product.prodname_ghe_server %}インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
2. 現在のアプライアンスをシャットダウンします。
  ```shell
  $ sudo poweroff
  ```
3. 使用している仮想化プラットフォームのツールを使い、現在のアプライアンスからデータディスクをデタッチします。
4. 大きなルートディスクを持つ新しいアプライアンスにデータディスクをアタッチします。

## 既存のアプライアンスを使用したルートパーティションサイズの増加

{% warning %}

**Warning:** Before increasing the root partition size, you must put your instance in maintenance mode. 詳しい情報については"[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)"を参照してください。

{% endwarning %}

1. {% data variables.product.prodname_ghe_server %} アプライアンスに新しいディスクを取り付けます。
1. Run the `lsblk` command to identify the new disk's device name.
1. Run the `parted` command to format the disk, substituting your device name for `/dev/xvdg`:
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. To stop replication, run the `ghe-repl-stop` command.

   ```shell
   $ ghe-repl-stop
   ```

1. `ghe-upgrade` コマンドを実行して、完全なプラットフォーム固有のパッケージを新たにパーティション分割されたディスクにインストールします。 `github-enterprise-2.11.9.hpkg` などのユニバーサルなホットパッチのアップブレードパッケージは、期待通りに動作しません。 After the `ghe-upgrade` command completes, application services will automatically terminate.

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. アプライアンスをシャットダウンします。
  ```shell
  $ sudo poweroff
  ```
1. ハイパーバイザーで、古いルートディスクを取り外し、古いルートディスクと同じ場所に新しいルートディスクを取り付けます。
1. アプライアンスを起動します。
1. Ensure system services are functioning correctly, then release maintenance mode. 詳しい情報については"[メンテナンスモードの有効化とスケジューリング](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)"を参照してください。

If your appliance is configured for high-availability or geo-replication, remember to start replication on each replica node using `ghe-repl-start` after the storage on all nodes has been upgraded.
