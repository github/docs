---
title: GitHub Enterprise 11.10.xから2.1.23への移行
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: '{% data variables.product.prodname_enterprise %}11.10.xから2.1.23へ移行するには、新しいアプライアンスのインスタンスをセットアップし、以前のインスタンスからデータを移行しなければなりません。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332601'
---
{% data variables.product.prodname_enterprise %}11.10.348以降からの移行がサポートされています。 {% data variables.product.prodname_enterprise %}11.10.348以前からの移行はサポートされていません。 いくつかのアップグレードを経て、まず11.10.348にアップグレードしなければなりません。 詳細については、11.10.348 のアップグレード手順「[最新リリースへのアップグレード](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)」を参照してください。

最新バージョンの {% data variables.product.prodname_enterprise %} にアップグレードするには、まず {% data variables.product.prodname_ghe_server %} 2.1 に移行する必要があります。その後、通常のアップグレードプロセスに従うことができます。 詳細については、「[{% data variables.product.prodname_enterprise %} のアップグレード](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)」を参照してください。

## 移行を準備する

1. プロビジョニング及びインストールガイドをレビューし、{% data variables.product.prodname_enterprise %}2.1.23を自分の環境にプロビジョニングして設定するのに必要な条件が満たされているかを確認してください。 詳細については、「[プロビジョニングとインストール](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)」を参照してください。
2. 現在のインスタンスがサポートされているアップグレードバージョンを動作させていることを確認してください。
3. 最新バージョンの {% data variables.product.prodname_enterprise_backup_utilities %} をセットアップします。 詳細については、「[{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils)」を参照してください。
    - {% data variables.product.prodname_enterprise_backup_utilities %}を使ってすでにスケジューリングされたバックアップを設定しているなら、最新バージョンにアップデートしたことを確認してください。
    - 現時点でスケジューリングされたバックアップを動作させていないなら、{% data variables.product.prodname_enterprise_backup_utilities %}をセットアップしてください。
4. `ghe-backup` コマンドを使って、現在のインスタンスの初期完全バックアップ スナップショットを作成します。 現在のインスタンスですでにスケジューリングされたバックアップを設定しているなら、インスタンスのスナップショットを取る必要はありません。

   {% tip %}

   **ヒント:** スナップショットを作成する間は、インスタンスをオンラインのままにして利用し続けられます。 移行作業のメンテナンスモードの間、別のスナップショットを取ることができます。 バックアップはインクリメンタルなので、この初期スナップショットは最終のスナップショットへのデータ転送量を減らしてくれます。それによって、メンテナンスウィンドウが短くなるかもしれません。

   {% endtip %}

5. ユーザーネットワークトラフィックを新しいインスタンスに切り替える方法を決定します。 移行した後に、すべての HTTP と Git のネットワークトラフィックは新しいインスタンスに送信されます。
    - **DNS** - この方法はシンプルであり、あるデータセンターから他のデータセンターへの移行であってもうまく働くことから、この方法はすべての環境でお勧めします。 移行を開始する前に、既存のDNSレコードのTTLを5分以下にして、変更が伝播するようにしてください。 移行が完了したら、DNSレコードを新しいインスタンスのIPアドレスを指すように更新してください。
    - **IP アドレスの割り当て** - この方法を使用できるのは VMware から VMware への移行の場合のみであり、DNS の方法を使用できない場合を除き、お勧めできません。 移行を始める前に、古いインスタンスをシャットダウンしてそのIPアドレスを新しいインスタンスに割り当てる必要があります。
6. メンテナンスウィンドウをスケジューリングしてください。 メンテナンスウィンドウには、データをバックアップホストから新しいインスタンスに転送するのに十分な時間が含まれていなければならず、その長さはバックアップスナップショットのサイズと利用可能なネットワーク帯域に基づいて変化します。 この間、現在のインスタンスは利用できなくなり、新しいインスタンスへの移行の間はメンテナンスモードになります。

## 移行する

1. 新しい{% data variables.product.prodname_enterprise %}2.1インスタンスをプロビジョニングしてください。 詳細については、ターゲット プラットフォーム用の「[プロビジョニングとインストール](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)」ガイドを参照してください。
2. ブラウザで新しいレプリカアプライアンスのIPアドレスにアクセスして、所有する{% data variables.product.prodname_enterprise %}のライセンスをアップロードしてください。
3. 管理者パスワードを設定してください。
5. **[移行]** をクリックします。
![インストールの種類の選択](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. バックアップホストへのアクセス用のSSHキーを"Add new SSH key（新しいSSHキーの追加）"に貼り付けてください。
![バックアップの認可](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. **[Add key]\(キーの追加\)** 、 **[Continue]\(続行\)** の順にクリックします。
8. `ghe-restore` コマンドをコピーします。これをバックアップ ホスト上で実行して、新しいインスタンスにデータを移行します。
![移行の開始](/assets/images/enterprise/migration/migration-restore-start.png)
9. 古いインスタンスでメンテナンスモードを有効化し、すべてのアクティブなプロセスが完了するのを待ってください。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

  {% note %}

  **注:** この時点から、インスタンスを通常のように使用できなくなります。

  {% endnote %}

10. バックアップ ホストで `ghe-backup` コマンドを実行し、最終的なバックアップ スナップショットを作成します。 これにより、古いインスタンスからすべてのデータが確実にキャプチャされます。
11. バックアップ ホスト上で、新しいインスタンスの復元ステータス画面でコピーした `ghe-restore` コマンドを実行し、最新のスナップショットを復元します。
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. 新しいインスタンスの復元ステータス画面に戻って、復元が完了したことを確認します。
![復元完了画面](/assets/images/enterprise/migration/migration-status-complete.png)
13. **[Continue to settings]\(設定に進む\)** をクリックして、前のインスタンスからインポートされた構成情報と設定を確認し、調整します。
![インポートされた設定を確認する](/assets/images/enterprise/migration/migration-status-complete.png)
14. **[Save settings](設定の保存)** をクリックします。

  {% note %}

  **注:** 構成設定を適用してサーバーを再起動すると、新しいインスタンスを使用できます。

  {% endnote %}

15. DNS または IP アドレスの割り当てのどちらかを使用して、ユーザーのネットワークトラフィックを古いインスタンスから新しいインスタンスに切り替えます。
16. {% data variables.product.prodname_ghe_server %} の最新パッチ リリースにアップグレードします。 詳細については、「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)」を参照してください。
