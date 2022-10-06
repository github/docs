---
title: アプライアンスでのバックアップの設定
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'ディザスター リカバリー計画の一部として、自動バックアップを構成して {% data variables.product.product_location %}の運用データを保護できます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 4403ec24aa3da63f6700ae4bfcd2392ec0cfd194
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147861653'
---
## {% data variables.product.prodname_enterprise_backup_utilities %}について

{% data variables.product.prodname_enterprise_backup_utilities %} は、個別のホストにインストールするバックアップ システムで、{% data variables.product.product_location %} のバックアップ スナップショットをセキュアな SSH ネットワーク接続経由で定期的に取得します。 スナップショットを使用して、既存の {% data variables.product.prodname_ghe_server %} インスタンスをバックアップホストから以前の状態に復元できます。

ネットワーク経由で転送されるのは最後のスナップショット以降に追加されたデータのみで、追加の物理ストレージ領域もその分だけしか占めません。 パフォーマンスへの影響を最小化するために、バックアップは最低のCPU/IO優先度の下でオンライン実行されます。 バックアップを行うために、メンテナンスウィンドウをスケジューリングする必要はありません。

{% data variables.product.prodname_enterprise_backup_utilities %} のメジャー リリースとバージョン番号は、{% data variables.product.product_name %} の機能リリースと一致します。 両方の製品の最新バージョン 4 つをサポートしています。 詳しい情報については、「[{% data variables.product.product_name %} のリリース](/admin/all-releases)」をご覧ください。

機能、要件、および高度な使用方法について詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) を参照してください。

## 前提条件

{% data variables.product.prodname_enterprise_backup_utilities %} を利用するには、{% data variables.product.product_location %} とは別の Linux もしくは Unix ホスト システムが必要です。

{% data variables.product.prodname_enterprise_backup_utilities %}は、重要なデータのための長期的な恒久ストレージの既存環境に統合することもできます。

バックアップ ホストと {% data variables.product.product_location %} は、地理的に離れたところに配置することをおすすめします。 そうすることで、プライマリのサイトにおける大規模な災害やネットワーク障害に際してもリカバリにバックアップが利用できることが保証されます。

物理的なストレージの要求は、Gitリポジトリのディスク利用状況と予想される成長パターンによって異なります。

| ハードウェア | 推奨 |
| -------- | --------- |
| **vCPU 数**  | 2 |
| **[メモリ]** | 2 GB |
| **Storage** | プライマリインスタンスに割り当てられたストレージの5倍 |

ユーザのアクティビティや他の製品との結合といった利用方法によっては、さらに多くのリソースが必要になることがあります。

詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの「[{% data variables.product.prodname_enterprise_backup_utilities %} の要件](https://github.com/github/backup-utils/blob/master/docs/requirements.md)」を参照してください。

## {% data variables.product.prodname_enterprise_backup_utilities %}のインストール

バックアップ ホストに {% data variables.product.prodname_enterprise_backup_utilities %} をインストールするには、プロジェクトの Git リポジトリを複製することをお勧めします。 この方法では、Git を使用して新しいリリースを直接フェッチすることができ、新しいバージョンをインストールするときに既存のバックアップ構成ファイル `backup.config` が保持されます。

または、ホスト マシンがインターネットにアクセスできない場合は、圧縮アーカイブとして各 {% data variables.product.prodname_enterprise_backup_utilities %} リリースをダウンロードし、コンテンツを抽出してインストールできます。 詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの「[概要](https://github.com/github/backup-utils/blob/master/docs/getting-started.md)」を参照してください。

バックアップ スナップショットは、`backup.config` ファイル内の`GHE_DATA_DIR` データ ディレクトリ変数によって設定されたディスク パスに書き込まれます。 スナップショットは、シンボリック リンクとハード リンクをサポートするファイル システムに格納する必要があります。

{% note %}

**注:** {% data variables.product.prodname_enterprise_backup_utilities %} バージョンをアップグレードするときに誤ってデータ ディレクトリが上書きされないように、スナップショットが {% data variables.product.prodname_enterprise_backup_utilities %} インストール ディレクトリのサブディレクトリに保持されないようにすることをお勧めします。

{% endnote %}

1. [{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト リポジトリ](https://github.com/github/backup-utils/)をバックアップ ホスト上のローカル ディレクトリに複製するには、次のコマンドを実行します。

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. ローカル リポジトリ ディレクトリに移動するには、次のコマンドを実行します。

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. インクルードされた `backup.config-example` ファイルを `backup.config` にコピーするには、次のコマンドを実行します。

   ```shell
   cp backup.config-example backup.config
   ```
1. 構成をカスタマイズするには、テキスト エディターで `backup.config` を編集します。
   1. `GHE_HOSTNAME` の値をプライマリの {% data variables.product.prodname_ghe_server %} インスタンスのホスト名あるいは IP アドレスに設定します。

     {% note %}

     **注:** {% data variables.product.product_location %} がクラスターとして、またはロード バランサーを使用する高可用性構成に展開されている場合は、{% data variables.product.product_location %} への SSH アクセス (ポート 122 上) が許可されている限り、`GHE_HOSTNAME` をロード バランサーのホスト名に指定できます。

     復旧されたアプライアンスがすぐに利用できることを保証するために、geo レプリケーション構成の場合であってもプライマリ インスタンスをターゲットとしたバックアップを実行してください。

     {% endnote %}
   1. `GHE_DATA_DIR` の値をバックアップ スナップショットを保存したいファイルシステムの場所に設定します。 手順 1 で Git リポジトリを複製した場所以外の、バックアップ ホストと同じファイル システム上の場所を選ぶことをお勧めします。
1. バックアップ ホストにインスタンスへのアクセスを許可するには、プライマリ インスタンスの設定ページ `http(s)://HOSTNAME/setup/settings` を開き、承認された SSH キーの一覧にバックアップ ホストの SSH キーを追加します。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)」を参照してください。
1. バックアップ ホストで、`ghe-host-check` コマンドを使用して、{% data variables.product.product_location %} との SSH 接続を確認します。

  ```shell
  ./bin/ghe-host-check
  ```         
1. 最初の完全バックアップを作成するには、次のコマンドを実行します。

  ```shell
  ./bin/ghe-backup
  ```

高度な使用方法について詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) を参照してください。

## {% data variables.product.prodname_enterprise_backup_utilities %} のアップグレード

{% data variables.product.prodname_enterprise_backup_utilities %} をアップグレードするときは、現在のバージョンの {% data variables.product.product_name %} で動作するリリースを選ぶ必要があります。 {% data variables.product.prodname_enterprise_backup_utilities %} のインストールは、少なくとも {% data variables.product.product_location %} と同じバージョンである必要があり、3 つ以上先のバージョンにインストールすることはできません。 詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの「[{% data variables.product.prodname_ghe_server %} バージョン要件](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements)」を参照してください。
最新の変更をフェッチしてチェックアウトすることで、Git リポジトリの {% data variables.product.prodname_enterprise_backup_utilities %} をアップグレードできます。

または、インストールに Git リポジトリを使用しない場合は、新しいアーカイブを抽出することも、代わりに Git リポジトリを使用するように方法を変更することもできます。

### インストールの種類の確認

{% data variables.product.prodname_enterprise_backup_utilities %} のインストール方法を確認し、インストールをアップグレードする最適な方法を決定できます。

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. 有効な作業ディレクトリが Git リポジトリ内に存在するかどうかを確認するには、次のコマンドを実行します。

   ```
   git rev-parse --is-inside-work-tree
   ```

   出力が `true` の場合、{% data variables.product.prodname_enterprise_backup_utilities %} は、プロジェクトの Git リポジトリを複製することによってインストールされました。 出力に `fatal: not a git repository (or any of the parent directories)` が含まれている場合、{% data variables.product.prodname_enterprise_backup_utilities %} は、圧縮アーカイブ ファイルを抽出することによってインストールされたと考えられます。
インストールが Git リポジトリにある場合は、Git を使用して最新バージョンをインストールできます。 インストールが圧縮アーカイブ ファイルから行われた場合は、最新バージョンをダウンロードして抽出するか、Git を使用して {% data variables.product.prodname_enterprise_backup_utilities %} を再インストールして、将来のアップグレードを簡略化できます。

- [Git リポジトリでのインストールのアップグレード](#upgrading-an-installation-in-a-git-repository)
- [圧縮アーカイブの代わりに Git を使用してアーカイブする](#using-git-instead-of-compressed-archives-for-upgrades)

### Git リポジトリでのインストールのアップグレード

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  **注:** {% data variables.product.prodname_enterprise_backup_utilities %} をアップグレードする前に、既存の `backup.config` ファイルのコピーを `$HOME/backup.config` のような一時的な場所に作成することをお勧めします。

  {% endnote %}

1. `git fetch` コマンドを実行して、最新のプロジェクト更新プログラムをダウンロードします。

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### 圧縮アーカイブの代わりに Git を使用してアーカイブする

バックアップ ホストにインターネット接続があり、以前に圧縮アーカイブ (`.tar.gz`) を使用して {% data variables.product.prodname_enterprise_backup_utilities %} をインストールまたはアップグレードした場合は、代わりにインストールに Git リポジトリを使用することをお勧めします。 Git を使用してアップグレードすると、作業が少なくなり、バックアップ構成が保持されます。

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. 既存の {% data variables.product.prodname_enterprise_backup_utilities %} の構成をバックアップするには、現在の `backup.config` ファイルをホーム ディレクトリなどの安全な場所にコピーします。

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. {% data variables.product.prodname_enterprise_backup_utilities %} Git リポジトリをインストールするバックアップ ホスト上のローカル ディレクトリに移動します。
1. [プロジェクト リポジトリ](https://github.com/github/backup-utils/)をバックアップ ホスト上のディレクトリに複製するには、次のコマンドを実行します。

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. 複製されたリポジトリに移動するには、次のコマンドを実行します。

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. 前の手順からバックアップ構成を復元するには、既存のバックアップ構成ファイルをローカル リポジトリ ディレクトリにコピーします。 コマンドのパスを、手順 2 で保存したファイルの場所に置き換えます。

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **注:** 複製後にバックアップ構成ファイルを復元する場所を選ぶことができます。 構成ファイルを配置できる場所について詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの「[概要](https://github.com/github/backup-utils/blob/master/docs/getting-started.md)」を参照してください。

  {% endnote %}

1. バックアップ構成ファイル内のディレクトリまたはスクリプトのパスが正しいことを確認するには、テキスト エディターでファイルを確認します。
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. 手順 1 から古い GitHub Enterprise Server Backup Utilities ディレクトリ (圧縮アーカイブのインストール場所) を削除します。

## バックアップのスケジューリング

`cron(8)` コマンドや同様のコマンド スケジューリング サービスを使用して、バックアップ ホストで定期的なバックアップをスケジュール設定できます。 設定されたバックアップ頻度によって、リカバリー計画での最悪の目標復旧ポイント (RPO) が決まります。 たとえば、毎日午前 0 時にバックアップを実行するようにスケジュール設定した場合、災害のシナリオで最大 24 時間分のデータが失われる可能性があります。 プライマリサイトのデータが破壊された場合に、最悪でも最大 1 時間分のデータ損失で収まることが保証されるように、1 時間ごとのバックアップスケジュールから始めることをおすすめします。

バックアップの試行が重複すると、`ghe-backup` コマンドはエラー メッセージを表示して中断し、同時バックアップが存在することを示します。 そのような場合は、スケジュール設定したバックアップの頻度を減らすことをおすすめします。 詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups) を参照してください。

## バックアップの復元

プライマリ サイトで長時間の停止または壊滅的なイベントが発生した場合は、別の {% data variables.product.prodname_enterprise %} アプライアンスをプロビジョニングしてバックアップ ホストから復元することで、{% data variables.product.product_location %} を復元できます。 アプライアンスを復元する前に、バックアップホストの SSH キーをターゲットの {% data variables.product.prodname_enterprise %} アプライアンスに認証済み SSH キーとして追加する必要があります。

{% note %}

**注意:** {% data variables.product.product_location %} へのバックアップを復元する場合は、同じバージョンのサポート ルールが適用されます。 最大 2 つ前の機能リリースからしかデータを復元できません。

たとえば、{% data variables.product.product_name %} 3.0.x からバックアップを取得した場合、バックアップを {% data variables.product.product_name %} 3.2.x インスタンスに復元できます。 {% data variables.product.product_name %} 2.22.x のバックアップから 3.2.x を実行しているインスタンスにデータを復元することはできません。これは、バージョンを 3 回ジャンプするためです (2.22 から 3.0、3.1、3.2 の順)。 最初に 3.1.x を実行しているインスタンスに復元してから、3.2.x にアップグレードする必要があります。

{% endnote %}

最後に成功したスナップショットから {% data variables.product.product_location %} を復元するには、`ghe-restore` コマンドを使用します。

{% note %}

**注:** バックアップを復元する前に、次のことを確認してください。
- プライマリ インスタンスでメンテナンス モードが有効になり、すべてのアクティブなプロセスが完了している。 詳細については、「[メンテナンス モードの有効化](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)」を参照してください。
- 高可用性構成のすべてのレプリカでレプリケーションが停止している。 詳しくは、「[高可用性構成について](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)」の `ghe-repl-stop` コマンドを参照してください。
- {% data variables.product.product_location %} で {% data variables.product.prodname_actions %} が有効になっている場合は、まず交換用アプライアンスで {% data variables.product.prodname_actions %} 外部ストレージ プロバイダーを構成する必要があります。 詳細については、「[{% data variables.product.prodname_actions %} を有効にして、{% data variables.product.prodname_ghe_server %} をバックアップおよび復元する](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)」を参照してください。

{% endnote %}

`ghe-restore` コマンドを実行すると、次のような出力が表示されます。

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

{% ifversion ip-exception-list %}必要に応じて復元を検証するには、指定した IP アドレスのリストへのアクセスを許可するように IP 例外リストを構成します。 詳細については、「[IP 例外リストを使い、メンテナンス モードで変更を検証する](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)」を参照してください。
{% endif %}

{% note %}

**注意:** ネットワーク設定はバックアップ スナップショットから除外されます。 ご使用の環境に合わせて、ターゲットの {% data variables.product.prodname_ghe_server %} アプライアンスでネットワークを手動で設定する必要があります。

{% endnote %}

`ghe-restore` コマンドでは、次の追加オプションを使用できます。
- `-c` フラグは、既に設定されている場合でも、ターゲット ホストで設定、証明書、およびライセンス データを上書きします。 テストのためにステージングインスタンスを設定しており、ターゲット上の依存の設定を残しておきたい場合には、このフラグを省いてください。 詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) の「バックアップと復旧コマンドの使用」セクションを参照してください。
- `-s` フラグにより、異なるバックアップ スナップショットを選択できます。
