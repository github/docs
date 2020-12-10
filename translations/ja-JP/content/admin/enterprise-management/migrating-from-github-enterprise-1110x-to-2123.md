---
title: GitHub Enterprise 11.10.xから2.1.23への移行
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating/
  - /enterprise/admin/articles/migrating-github-enterprise/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x/
  - /enterprise/admin/articles/upgrading-to-a-newer-release/
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: '{% data variables.product.prodname_enterprise %}11.10.xから2.1.23へ移行するには、新しいアプライアンスのインスタンスをセットアップし、以前のインスタンスからデータを移行しなければなりません。'
versions:
  enterprise-server: '*'
---

{% data variables.product.prodname_enterprise %}11.10.348以降からの移行がサポートされています。 {% data variables.product.prodname_enterprise %}11.10.348以前からの移行はサポートされていません。 いくつかのアップグレードを経て、まず11.10.348にアップグレードしなければなりません。 詳しい情報については11.10.348のアップグレード手順"[最新リリースへのアップグレード](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)"を参照してください。

最新バージョンの {% data variables.product.prodname_enterprise %} にアップグレードするには、まず {% data variables.product.prodname_ghe_server %} 2.1 に移行する必要があります。その後、通常のアップグレードプロセスに従うことができます。 詳細は「[{% data variables.product.prodname_enterprise %} をアップグレードする](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)」参照してください。

### 移行の準備

1. プロビジョニング及びインストールガイドをレビューし、{% data variables.product.prodname_enterprise %}2.1.23を自分の環境にプロビジョニングして設定するのに必要な条件が満たされているかを確認してください。 詳しい情報については"[プロビジョニングとインストール](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)"を参照してください。
2. 現在のインスタンスがサポートされているアップグレードバージョンを動作させていることを確認してください。
3. 最新バージョンの {% data variables.product.prodname_enterprise_backup_utilities %} をセットアップします。 詳細は [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils) を参照してください。
    - {% data variables.product.prodname_enterprise_backup_utilities %}を使ってすでにスケジューリングされたバックアップを設定しているなら、最新バージョンにアップデートしたことを確認してください。
    - 現時点でスケジューリングされたバックアップを動作させていないなら、{% data variables.product.prodname_enterprise_backup_utilities %}をセットアップしてください。
4. `ghe-backup`コマンドを使って、現在のインスタンスの初めてのフルバックアップスナップショットを取ってください。 現在のインスタンスですでにスケジューリングされたバックアップを設定しているなら、インスタンスのスナップショットを取る必要はありません。

   {% tip %}

   **Tip:**スナップショットを取る間は、インスタンスをオンラインのままにして利用し続けられます。 移行作業のメンテナンスモードの間、別のスナップショットを取ることができます。 バックアップはインクリメンタルなので、この初期スナップショットは最終のスナップショットへのデータ転送量を減らしてくれます。それによって、メンテナンスウィンドウが短くなるかもしれません。

   {% endtip %}

5. ユーザーネットワークトラフィックを新しいインスタンスに切り替える方法を決定します。 移行した後に、すべての HTTP と Git のネットワークトラフィックは新しいインスタンスに送信されます。
    - **DNS** - この方法はシンプルであり、あるデータセンターから他のデータセンターへの移行であってもうまく働くことから、この方法はすべての環境でおすすめします。 移行を開始する前に、既存のDNSレコードのTTLを5分以下にして、変更が伝播するようにしてください。 移行が完了したら、DNSレコードを新しいインスタンスのIPアドレスを指すように更新してください。
    - **IPアドレスの割り当て** - この方法が利用できるのはVMWareからVMWareへの移行の場合のみであり、DNSを使う方法が利用できない場合以外にはおすすめできません。 移行を始める前に、古いインスタンスをシャットダウンしてそのIPアドレスを新しいインスタンスに割り当てる必要があります。
6. メンテナンスウィンドウをスケジューリングしてください。 メンテナンスウィンドウには、データをバックアップホストから新しいインスタンスに転送するのに十分な時間が含まれていなければならず、その長さはバックアップスナップショットのサイズと利用可能なネットワーク帯域に基づいて変化します。 この間、現在のインスタンスは利用できなくなり、新しいインスタンスへの移行の間はメンテナンスモードになります。

### 移行の実施

1. 新しい{% data variables.product.prodname_enterprise %}2.1インスタンスをプロビジョニングしてください。 詳しい情報については、ターゲットのプラットフォームの"[プロビジョニングとインストール](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)"ガイドを参照してください。
2. ブラウザで新しいレプリカアプライアンスのIPアドレスにアクセスして、所有する{% data variables.product.prodname_enterprise %}のライセンスをアップロードしてください。
3. 管理者パスワードを設定してください。
5. **Migrate（移行）**をクリックしてください。 ![インストールタイプの選択](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. バックアップホストへのアクセス用のSSHキーを"Add new SSH key（新しいSSHキーの追加）"に貼り付けてください。 ![バックアップの認証](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Click **Add key** and then click **Continue**.
8. 新しいインスタンスへデータを移行するためにバックアップホストで実行する`ghe-restore`コマンドをコピーしてください。 ![移行の開始](/assets/images/enterprise/migration/migration-restore-start.png)
9. 古いインスタンスでメンテナンスモードを有効化し、すべてのアクティブなプロセスが完了するのを待ってください。 詳しい情報については"[メンテナンスモードの有効化とスケジューリング](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)"を参照してください。

  {% note %}

  **ノート:** この時点から、インスタンスは通常の利用ができなくなります。

  {% endnote %}

10. バックアップホストで、`ghe-backup` コマンドを実行して最終的なバックアップスナップショットを作成します。 これにより、古いインスタンスからすべてのデータが確実にキャプチャされます。
11. バックアップホストで、新しいインスタンスの復元ステータス画面でコピーした `ghe-restore` コマンドを実行して、最新のスナップショットを復元します。
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

12. 新しいインスタンスの復元ステータス画面に戻って、復元が完了したことを確認します。![復元完了画面](/assets/images/enterprise/migration/restore-complete-screen.png)
13. [**Continue to settings**] をクリックして、前のインスタンスからインポートされた設定情報を確認して調整します。 ![インポートされた設定をレビュー](/assets/images/enterprise/migration/migration-status-complete.png)
14. **Save settings（設定の保存）**をクリックしてください。

  {% note %}

  **メモ:** 設定を適用してサーバーを再起動した後は、新しいインスタンスを使用できます。

  {% endnote %}

15. DNS または IP アドレスの割り当てのどちらかを使用して、ユーザーのネットワークトラフィックを古いインスタンスから新しいインスタンスに切り替えます。
16. 最新のパッチリリース {{ currentVersion }} にアップグレードします。 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)」を参照してください。
