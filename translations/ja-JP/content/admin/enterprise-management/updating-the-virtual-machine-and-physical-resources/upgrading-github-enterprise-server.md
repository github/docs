---
title: GitHub Enterprise Server をアップグレードする
intro: '最新の機能とセキュリティアップデートを入手するために、{% data variables.product.prodname_ghe_server %} をアップグレードしてください。'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186428'
---
## アップグレードの準備

1. アップグレードの戦略を決定し、アップグレード先のバージョンを選択してください。 詳細については、「[アップグレード要件](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)」を参照してください。また、「[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade)」を参照し、現在のリリース バージョンからのアップグレード パスを確認してください。
1. {% data variables.product.prodname_enterprise_backup_utilities %}で、プライマリインスタンスの新しいバックアップを作成してください。 詳しくは、{% data variables.product.prodname_enterprise_backup_utilities %} プロジェクト ドキュメントの [README.md ファイル](https://github.com/github/backup-utils#readme)を参照してください。

  {% note %}

  **注:** {% data variables.product.prodname_enterprise_backup_utilities %} バージョンは、{% data variables.location.product_location %}と同じバージョンであるか、最大で 2 つ前のバージョンである必要があります。 詳しくは、「[GitHub Enterprise Server Backup Utilities のアップグレード](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities)」を参照してください。

  {% endnote %}

1. {% data variables.location.product_location %}が {% data variables.product.prodname_actions %} にエフェメラル セルフホステッド ランナーを使っていて、自動更新を無効にしている場合、アップグレードされたインスタンスが実行するランナー アプリケーションのバージョンにランナーをアップグレードしてください。
1. アップグレードパッケージを使ってアップグレードをする場合は、{% data variables.product.prodname_ghe_server %} のエンドユーザのためにメンテナンス時間枠をスケジューリングしてください。 ホットパッチを利用している場合、メンテナンスモードは必要ありません。

  {% note %}

  **注:** メンテナンス期間は、実行するアップグレードの種類によって変わります。 ホットパッチを利用するアップグレードは、通常メンテナンスウィンドウを必要としません。 リブートが必要になることもあります。そのリブートは後で行うことができます。 MAJOR.FEATURE.PATCH というバージョン付けのスキームに従い、アップグレードパッケージを使ったパッチのリリースで生じるダウンタイムは、通常 5 分未満です。 データの移行を含むフィーチャリリースは、ストレージの性能および移行するデータの量に応じた時間がかかります。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

  {% endnote %}

## スナップショットの取得

スナップショットは、ある時点での仮想マシン（VM）のチェックポイントです。 アップグレードに失敗した場合にスナップショットからVMを回復できるよう、仮想マシンをアップグレードする前にスナップショットを取っておくことを強くおすすめします。 アプライアンスの電源が切れているか、メンテナンス モードであり、すべてのバックグラウンド ジョブが完了している場合にのみ、VM スナップショットを作成することをお勧めします。

新しいフィーチャリリースにアップグレードするなら、VM のスナップショットを取らなければなりません。 パッチリリースへのアップグレードをするなら、既存のデータディスクをアタッチできます。 

スナップショットには2種類あります。

- **VM スナップショット** は、ユーザー データと構成データを含む VM の状態全体を保存します。 このスナップショットの手法には大量のディスク領域が必要になり、時間がかかります。
- **データ ディスク スナップショット** は、ユーザー データのみを保存します。

  {% note %}

  **注:**
  - プラットフォームによっては、ユーザのデータディスクだけのスナップショットを取ることができません。 それらのプラットフォームでは、VM 全体のスナップショットを取る必要があります。
  - ハイパーバイザーが完全なVMスナップショットをサポートしていないなら、ルートディスクとデータディスクのスナップショットを時間をおかずに取らなければなりません。

  {% endnote %}

| プラットフォーム | Snapshot メソッド | スナップショットドキュメンテーションのURL |
|---|---|---|
| Amazon AWS | ディスク | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | VM | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | VM | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | ディスク | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | VM | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## ホットパッチでのアップグレード

{% data reusables.enterprise_installation.hotpatching-explanation %} 

{% data variables.enterprise.management_console %} を使うと、ホットパッチをすぐにインストールすることや、後でインストールするようにスケジュールすることができます。 管理シェルで、`ghe-upgrade` ユーティリティを使ってホットパッチをインストールすることもできます。 詳細については、「[アップグレード要件](/enterprise/admin/guides/installation/upgrade-requirements/)」を参照してください。

{% note %}

**{% ifversion ghes %}注{% else %}注{% endif %}** :

{% ifversion ghes %}
- {% data variables.location.product_location %}によってリリース候補ビルドが実行されている場合、ホットパッチを使ったアップグレードはできません。

- {% endif %}クラスタ環境では、{% data variables.enterprise.management_console %} を使ったホットパッチのインストールはできません。 クラスター環境でホットパッチをインストールするには、「[クラスターのアップグレード](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)」を参照してください。

{% endnote %}

### ホットパッチでの単一のアプライアンスのアップグレード

#### {% data variables.enterprise.management_console %} を使ってホットパッチをインストールする

{% data variables.enterprise.management_console %} を使って自動更新を有効にすることで、ホットパッチを使ってアップグレードできます。 そうすると、アップグレード可能な {% data variables.product.prodname_ghe_server %} の最新バージョンが表示されます。

表示されたアップグレード ターゲットがパッチ リリースではなく、機能リリースであった場合は、{% data variables.enterprise.management_console %} を使ってホットパッチをインストールすることはできません。 代わりに管理シェルを使ってホットパッチをインストールする必要があります。 詳細については、「[管理シェルを使ったホットパッチのインストール](#installing-a-hotpatch-using-the-administrative-shell)」を参照してください。

1. 自動更新を有効にする。 詳細については、[自動更新の有効化](/enterprise/admin/guides/installation/enabling-automatic-update-checks/)に関するページを参照してください。
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. 新しいホットパッチがダウンロードされたなら、Install package（パッケージのインストール）ドロップダウンメニューを使ってください。
    - すぐにインストールするには、 **[Now]\(今すぐ\)** を選びます。
    - 後でインストールするなら、後の日付を選択してください。
  ![ホットパッチ インストール日のドロップダウン](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. **[インストール]** をクリックします。
  ![ホットパッチ インストール ボタン](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### 管理シェルを使ったホットパッチのインストール

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}アップグレードのホットパッケージ ( *.hpkg* ファイル) の URL をコピーします。
{% data reusables.enterprise_installation.download-package %}
4. このパッケージ ファイル名を使って `ghe-upgrade` コマンドを実行します。
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. カーネル、MySQL、Elasticsearch やその他のプログラムのアップグレードにリブートが必要なら、ホットパッチアップグレードスクリプトが通知してくれます。

### ホットパッチを使ったレプリカインスタンスを持つアプライアンスのアップグレード

{% note %}

**注**: ホットパッチをインストールする場合、メンテナンス モードに切り替えたり、レプリケーションを停止したりする必要はありません。

{% endnote %}

High Availability と Geo-replication が設定されたアプライアンスは、プライマリインスタンスに加えてレプリカインスタンスを使います。 これらのアプライアンスをアップグレードするには、プライマリインスタンスとすべてのレプリカインスタンスの両方を、1 つずつアップグレードしなければなりません。

#### プライマリインスタンスのアップグレード

1. 「[管理シェルを使ったホットパッチのインストール](#installing-a-hotpatch-using-the-administrative-shell)」の手順に従ってプライマリ インスタンスをアップグレードします。

#### レプリカインスタンスのアップグレード

{% note %}

**注:** geo レプリケーションの一部として複数のレプリカ インスタンスを実行している場合は、各レプリカ インスタンスに対してこの手順を 1 回ずつ繰り返します。

{% endnote %}

1. 「[管理シェルを使ったホットパッチのインストール](#installing-a-hotpatch-using-the-administrative-shell)」の手順に従ってレプリカ インスタンスをアップグレードします。 Geo-replication に複数のレプリカを使用している場合は、この手順を繰り返して、各レプリカを一度に 1 つずつアップグレードする必要があります。
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## アップグレードパッケージでのアップグレード

フィーチャシリーズ内の最新のパッチリリースへのアップグレードにはホットパッチが利用できますが、新しいフィーチャリリースへのアップグレードにはアップグレードパッケージを使わなければなりません。 たとえば `2.11.10` から `2.12.4` へのアップグレードの場合、これらは異なるフィーチャ シリーズなので、アップグレード パッケージを使う必要があります。 詳細については、「[アップグレード要件](/enterprise/admin/guides/installation/upgrade-requirements/)」を参照してください。

### アップグレードパッケージでの単一のアプライアンスのアップグレード

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}適切なプラットフォームを選び、アップグレード パッケージ ( *.pkg* fファイル) の URL をコピーします。
{% data reusables.enterprise_installation.download-package %}
4. メンテナンスモードを有効にし、{% data variables.product.prodname_ghe_server %} インスタンス上のすべてのアクティブなプロセスが完了するのを待ってください。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

  {% note %}

  **注**: 「[プライマリ インスタンスのアップグレード](#upgrading-the-primary-instance)」の手順に従っている場合、高可用性構成のプライマリ アプライアンスをアップグレードするときにアプライアンスはメンテナンス モードになっているはずです。

  {% endnote %}

5. このパッケージ ファイル名を使って `ghe-upgrade` コマンドを実行します。
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. アップグレードを続けてパッケージ署名検証後に再起動することを承諾します。 新しいルートファイルシステムがセカンダリパーティションに書かれ、インスタンスは自動的にメンテナンスモードで再起動します。
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. 必要に応じて復元を検証するには、IP アドレスの指定リストへのアクセスを許可するように IP 例外リストを構成します。 詳細については、「[IP 例外リストを使い、メンテナンス モードで変更を検証する](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)」を参照してください。
{% endif %}
7. 単一アプライアンスのアップグレードの場合は、メンテナンス モードを無効にして、ユーザーが {% data variables.location.product_location %}を使用できるようにします。

  {% note %}

  **注**: 高可用性構成のアプライアンスをアップグレードする場合は、すべてのレプリカをアップグレードし、レプリケーションが最新の状態になるまでは、メンテナンス モードのままにしてください。 詳細については、「[レプリカ インスタンスのアップグレード](#upgrading-a-replica-instance)」を参照してください。

  {% endnote %}

### アップグレードパッケージを使ったレプリカインスタンスを持つアプライアンスのアップグレード

High Availability と Geo-replication が設定されたアプライアンスは、プライマリインスタンスに加えてレプリカインスタンスを使います。 これらのアプライアンスをアップグレードするには、プライマリインスタンスとすべてのレプリカインスタンスの両方を、1 つずつアップグレードしなければなりません。

#### プライマリインスタンスのアップグレード

{% warning %}

**警告**: レプリケーションを停止したときにプライマリに障害が発生した場合、レプリカをアップグレードしてレプリケーションを再開する前に行った作業内容は失われます。

{% endwarning %}

1. プライマリインスタンスでメンテナンスモードを有効化し、すべてのアクティブなプロセスが完了するのを待ちます。 詳細については、「[メンテナンス モードの有効化](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)」を参照してください。
{% data reusables.enterprise_installation.replica-ssh %}
3. そのレプリカ インスタンス上、またはすべてのレプリカ インスタンス上 (geo レプリケーション の一部として複数のレプリカ インスタンスを実行している場合) で `ghe-repl-stop` を実行してレプリケーションを停止します。
4. 「[アップグレード パッケージを使った単一アプライアンスのアップグレード](#upgrading-a-single-appliance-with-an-upgrade-package)」の手順に従って、プライマリ インスタンスをアップグレードします。

#### レプリカインスタンスのアップグレード

{% note %}

**注:** geo レプリケーションの一部として複数のレプリカ インスタンスを実行している場合は、各レプリカ インスタンスに対してこの手順を 1 回ずつ繰り返します。

{% endnote %}

1. 「[アップグレード パッケージを使った単一アプライアンスのアップグレード](#upgrading-a-single-appliance-with-an-upgrade-package)」の手順に従って、レプリカ インスタンスをアップグレードします。 Geo-replication に複数のレプリカを使用している場合は、この手順を繰り返して、各レプリカを一度に 1 つずつアップグレードする必要があります。
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %}コマンドから `Replication is not running` が返される場合、レプリケーションはまだ起動中の可能性があります。 約 1 分待ってから、もう一度 `ghe-repl-status` を実行してください。

   {% note %}

   **注:** 再同期の進行中、`ghe-repl-status` は、レプリケーションが遅れていることを示す可能性があります。 たとえば、次のようなメッセージが表示されることがあります。
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - 各ノードを {% data variables.product.product_name %} 3.6.0 以降にアップグレードし、レプリケーションを開始したが、`git replication is behind the primary` が 45 分後も引き続き表示される場合は、{% data variables.contact.enterprise_support %}にお問い合わせください。 詳細については、「[{% data variables.contact.github_support %} からのヘルプの受信](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。
   {%- endif %}

   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}それ以外の場合、{% else %}{% endif %}`ghe-repl-status` が `OK` を返さなかった場合は、{% data variables.contact.enterprise_support %}にお問い合わせください。 詳細については、「[{% data variables.contact.github_support %} からのヘルプの受信](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。
6. 最後のレプリカのアップグレードが完了し、再同期が完了したら、メンテナンス モードを無効にして、ユーザーが {% data variables.location.product_location %}を使用できるようにします。

## 失敗したアップグレードからのリストア

アップグレードが失敗もしくは中断したなら、インスタンスを以前の状態に復帰させなければなりません。 この処理を完了させるプロセスは、アップグレードの種類によります。

### パッチリリースのロールバック

パッチ リリースをロールバックするには、`--allow-patch-rollback` スイッチを指定して `ghe-upgrade` コマンドを使用します。 ロールバックする前に、すべてのレプリカ インスタンス上で `ghe-repl-stop` を実行してレプリケーションを一時的に停止する必要があります。 {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

ロールバックが完了したら、すべてのレプリカ上で `ghe-repl-start` を実行してレプリケーションを再起動します。 

詳細については、「[コマンド ライン ユーティリティ](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade)」を参照してください。

### フィーチャリリースのロールバック

フィーチャリリースからロールバックするには、ルートおよびデータパーティションが整合した状態になることを保証するため、VM スナップショットからリストアしてください。 詳細については、「[スナップショットの作成](#taking-a-snapshot)」を参照してください。

{% ifversion ghes %}
## 参考資料

- "[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)" {% endif %}
