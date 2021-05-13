---
title: ストレージ容量の増加
intro: Gitリポジトリ、データベース、検索インデックス、その他の恒久的なアプリケーションデータに利用できるストレージの量は、追加あるいは変更できます。
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% data variables.product.product_location %}に参加するユーザが増えるにつれて、ストレージボリュームをリサイズする必要があるかもしれません。 ストレージのリサイズに関する情報については、使用している仮想化プラットフォームのドキュメンテーションを参照してください。

### 要求及び推奨事項

{% note %}

**ノート:** ユーザストレージボリュームをリサイズする前に、インスタンスをメンテナンスモードにしてください。 詳しい情報については"[メンテナンスモードの有効化とスケジューリング](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)"を参照してください。

{% endnote %}

#### 最小要件

{% data reusables.enterprise_installation.hardware-rec-table %}

### データパーティションサイズの増加

1. 仮想化プラットフォームのツールを使用して、既存のユーザーボリュームのディスクのサイズを変更します。
{% data reusables.enterprise_installation.ssh-into-instance %}
3. アプライアンスをメンテナンスモードにしてください。 詳しい情報については"[メンテナンスモードの有効化とスケジューリング](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)"を参照してください。
4. アプライアンスを再起動して、新しいストレージの割り当てを検出させてください。
5. `ghe-storage-extend` コマンドを実行して、`/data/user` のファイルシステムを拡張します。
  ```shell
  $ ghe-storage-extend
  ```

### 新しいアプライアンスを使用したルートパーティションサイズの増加

1. 現在のアプライアンスと同じバージョンを使用して、より大きなルートディスクで新たな {% data variables.product.prodname_ghe_server %} をセットアップします。 詳細は「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
2. 現在のアプライアンスをシャットダウンします。
3. 使用している仮想化プラットフォームのツールを使い、現在のアプライアンスからデータディスクをデタッチします。
4. 大きなルートディスクを持つ新しいアプライアンスにデータディスクをアタッチします。

### 既存のアプライアンスを使用したルートパーティションサイズの増加

1. {% data variables.product.prodname_ghe_server %} アプライアンスに新しいディスクを取り付けます。
2. `parted` コマンドを実行して、ディスクをフォーマットします。
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
3. `ghe-upgrade` コマンドを実行して、完全なプラットフォーム固有のパッケージを新たにパーティション分割されたディスクにインストールします。 `github-enterprise-2.11.9.hpkg` などのユニバーサルなホットパッチのアップブレードパッケージは、期待通りに動作しません。
  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
4. アプライアンスをシャットダウンします。
5. ハイパーバイザーで、古いルートディスクを取り外し、古いルートディスクと同じ場所に新しいルートディスクを取り付けます。
6. アプライアンスを起動します。
