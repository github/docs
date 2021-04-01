---
title: アプライアンスでのバックアップの設定
redirect_from:
  - /enterprise/admin/categories/backups-and-restores/
  - /enterprise/admin/articles/backup-and-recovery/
  - /enterprise/admin/articles/backing-up-github-enterprise/
  - /enterprise/admin/articles/restoring-github-enterprise/
  - /enterprise/admin/articles/backing-up-repository-data/
  - /enterprise/admin/articles/restoring-enterprise-data/
  - /enterprise/admin/articles/restoring-repository-data/
  - /enterprise/admin/articles/backing-up-enterprise-data/
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery/
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
intro: 'システム災害復旧計画の一部として、自動化バックアップを設定して{% data variables.product.product_location %}のプロダクションデータを保護できます。'
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### {% data variables.product.prodname_enterprise_backup_utilities %}について

{% data variables.product.prodname_enterprise_backup_utilities %}は、個別のホストにインストールするバックアップシステムで、{% data variables.product.product_location %}のバックアップスナップショットをセキュアなSSHネットワーク接続経由で定期的に取得します。 スナップショットを使用して、既存の {% data variables.product.prodname_ghe_server %} インスタンスをバックアップホストから以前の状態に復元できます。

ネットワーク経由で転送されるのは最後のスナップショット以降に追加されたデータのみで、追加の物理ストレージ領域もその分だけしか占めません。 パフォーマンスへの影響を最小化するために、バックアップは最低のCPU/IO優先度の下でオンライン実行されます。 バックアップを行うために、メンテナンスウィンドウをスケジューリングする必要はありません。

機能、要求事項、高度な利用方法に関する詳しい情報については[{% data variables.product.prodname_enterprise_backup_utilities %}README](https://github.com/github/backup-utils#readme)を参照してください。

### 必要な環境

{% data variables.product.prodname_enterprise_backup_utilities %}を利用するには、{% data variables.product.product_location %}とは別のLinuxもしくはUnixホストシステムが必要です。

{% data variables.product.prodname_enterprise_backup_utilities %}は、重要なデータのための長期的な恒久ストレージの既存環境に統合することもできます。

バックアップホストと{% data variables.product.product_location %}は、地理的に離れたところに配置することをおすすめします。 そうすることで、プライマリのサイトにおける大規模な災害やネットワーク障害に際してもリカバリにバックアップが利用できることが保証されます。

物理的なストレージの要求は、Gitリポジトリのディスク利用状況と予想される成長パターンによって異なります。

| ハードウェア    | 推奨構成                        |
| --------- | --------------------------- |
| **vCPUs** | 2                           |
| **メモリ**   | 2 GB                        |
| **ストレージ** | プライマリインスタンスに割り当てられたストレージの5倍 |

ユーザのアクティビティや他の製品との結合といった利用方法によっては、さらに多くのリソースが必要になることがあります。

### {% data variables.product.prodname_enterprise_backup_utilities %}のインストール

{% note %}

**注意:** リカバリされたアプライアンスがすぐに利用できることを保証するために、Geo-replication構成の場合であってもプライマリインスタンスをターゲットとしたバックアップを実行してください。

{% endnote %}

1. 最新の[{% data variables.product.prodname_enterprise_backup_utilities %}リリース](https://github.com/github/backup-utils/releases)をダウンロードし、`tar`コマンドで展開してください。
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. 含まれている `backup.config-example` ファイルを `backup.config` にコピーして、エディタで開きます。
3. `GHE_HOSTNAME` の値をプライマリの {% data variables.product.prodname_ghe_server %} インスタンスのホスト名あるいは IP アドレスに設定します。
4. `GHE_DATA_DIR` の値をバックアップスナップショットを保存したいファイルシステムの場所に設定します。
5. `https://HOSTNAME/setup/settings` にあるプライマリインスタンスの設定ページを開き、バックアップホストの SSH キーを認証済みの SSH キーのリストに追加します。 詳しい情報については、「[管理シェル (SSH) にアクセスする](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)」を参照してください。
5. `ghe-host-check` コマンドで、{% data variables.product.product_location %} との SSH 接続を確認します。
  ```shell
  $ bin/ghe-host-check        
  ```
  6. 最初のフルバックアップを作成するには、`ghe-backup` コマンドを実行します。
  ```shell
  $ bin/ghe-backup        
  ```

高度な使い方に関する詳しい情報については、[{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme)を参照してください。

### バックアップのスケジューリング

バックアップのスケジュールを設定する `cron(8)` コマンドや同様のコマンドスケジューリングサービスを使用すれば、バックアップホストで定期的なバックアップをスケジュール設定できます。 設定されたバックアップ頻度によって、リカバリー計画での最悪の目標復旧ポイント (RPO) が決まります。 たとえば、毎日午前 0 時にバックアップを実行するようにスケジュール設定した場合、災害のシナリオで最大 24 時間分のデータが失われる可能性があります。 プライマリサイトのデータが破壊された場合に、最悪でも最大 1 時間分のデータ損失で収まることが保証されるように、1 時間ごとのバックアップスケジュールから始めることをおすすめします。

バックアップの試行が重複すると、`ghe-backup` コマンドはエラーメッセージを表示して中断し、同時バックアップが存在することを示します。 そのような場合は、スケジュール設定したバックアップの頻度を減らすことをおすすめします。 詳しい情報については、[{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups) の「スケジューリングバックアップ」を参照してください。

### バックアップのリストア

万が一、プライマリサイトで長時間の停止または壊滅的なイベントが発生した場合は、別の {% data variables.product.prodname_enterprise %} アプライアンスをプロビジョニングしてバックアップホストから復元を実行することで、{% data variables.product.product_location %} を復元できます。 アプライアンスを復元する前に、バックアップホストの SSH キーをターゲットの {% data variables.product.prodname_enterprise %} アプライアンスに認証済み SSH キーとして追加する必要があります。

{%if currentVersion ver_gt "enterprise-server@2.22"%}
{% note %}

**注釈:** {% data variables.product.product_location %} で {% data variables.product.prodname_actions %} が有効になっている場合は、`ghe-restore` コマンドを実行する前に、まず交換用アプライアンスで {% data variables.product.prodname_actions %} 外部ストレージプロバイダを設定する必要があります。 詳しい情報については、「[{% data variables.product.prodname_actions %} を有効にして {% data variables.product.prodname_ghe_server %} をバックアップおよび復元する](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)」を参照してください。

{% endnote %}
{% endif %}

最後に成功したスナップショットから {% data variables.product.product_location %} を復元するには、`ghe-restore` コマンドを使用します。 以下と同じような出力が表示されるでしょう:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% note %}

**メモ:** ネットワーク設定はバックアップのスナップショットから除外されます。 ご使用の環境に合わせて、ターゲットの {% data variables.product.prodname_ghe_server %} アプライアンスでネットワークを手動で設定する必要があります。

{% endnote %}

以下の追加オプションは、`ghe-restore` コマンドで使用できます。
- `-c` フラグは、すでに設定されている場合でも、ターゲットホストで設定、証明書、およびライセンスデータを上書きします。 テストのためにステージングインスタンスを設定しており、ターゲット上の依存の設定を残しておきたい場合には、このフラグを省いてください。 詳しい情報については[{% data variables.product.prodname_enterprise_backup_utilities %}README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands)の"バックアップ及びリストアコマンドの利用"セクションを参照してください。
- `-s` フラグにより、異なるバックアップスナップショットを選択できます。
