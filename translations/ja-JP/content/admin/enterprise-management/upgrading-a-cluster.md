---
title: クラスタのアップグレード
intro: '管理シェル (SSH) を使用して {% data variables.product.prodname_ghe_server %}クラスタを最新のリリースにアップグレードします。'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
versions:
  enterprise-server: '*'
---

### ホットパッチでのアップグレード
{% data reusables.enterprise_installation.hotpatching-explanation %}ホットパッチのインストールスクリプトは、ホットパッチをクラスタ内の各ノードにインストールし、サービスを適切な順序で再起動し、ダウンタイムを回避します。

1. データを[{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme)でバックアップしてください。
2. 任意のノードの管理シェルから `ghe-cluster-hotpatch` コマンドを使って最新のホットパッチをインストールしてください。 ホットパッチの URL を指定するか、手動でホットパッチをダウンロードしてローカルのファイル名を指定することができます。
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

### アップグレードパッケージでのアップグレード
アップグレードパッケージを使用して、{% data variables.product.prodname_ghe_server %} クラスタを最新のフィーチャリリースにアップグレードします。 たとえば`2.11`から`2.13`へのアップグレードが行えます。

#### アップグレードの準備

1. アップグレードしようとしているバージョンの[クラスタネットワーク設定](/enterprise/admin/guides/clustering/cluster-network-configuration)をレビューして、必要に応じて設定を更新してください。
2. データを[{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme)でバックアップしてください。
3. アップグレード中は通常どおりに使用できないため、{% data variables.product.prodname_ghe_server %}クラスタのエンドユーザーに対してメンテナンス期間をスケジュールします。 メンテナンスモードは、クラスタのアップグレードの進行中、ユーザーのアクセスをブロックし、データが変更されないようにします。
4. [{% data variables.product.prodname_ghe_server %}のダウンロードページ](https://enterprise.github.com/download)で、アップグレード *.pkg* ファイルの URL をクリップボードにコピーします。
5. 任意のノードの管理シェルから `ghe-cluster-each` コマンドを `curl` と組み合わせて使い、一度のステップでリリースパッケージを各ノードにダウンロードしてください。 先ほどのステップでコピーした URL を引数として使ってください。
  ```shell
  $ ghe-cluster-each -- "cd /home/admin && curl -L -O  https://<em>PACKAGE-URL</em>.pkg"
  > ghe-app-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  24.2M      0  0:00:20  0:00:20 --:--:-- 27.4M
  > ghe-data-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  21.3M      0  0:00:23  0:00:23 --:--:-- 25.8M
  > ghe-data-node-1:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-1:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.6M
  > ghe-app-node-2:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-app-node-2:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.8M      0  0:00:25  0:00:25 --:--:-- 17.6M
  > ghe-data-node-3:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  > ghe-data-node-3:                                  Dload  Upload   Total   Spent    Left  Speed
  > 100  496M  100  496M    0     0  19.7M      0  0:00:25  0:00:25 --:--:-- 25.5M
  ```
6. `cluster.conf` で `mysql-master = <hostname>` として定義されているプライマリ MySQL ノードを特定します。 このノードは最後にアップグレードされます。

#### クラスタノードのアップグレード

1. 任意のクラスタノードの管理シェルに接続し、`ghe-cluster-maintenance -s` を実行して、スケジュールしたウィンドウに従ってメンテナンスモードを有効にします。
2. **プライマリMySQLノードを除き**、{% data variables.product.prodname_ghe_server %}の各ノードの管理シェルに接続します。 [アップグレードの準備](#preparing-to-upgrade)のステップ 4 でダウンロードしたパッケージのファイル名を用いて、`ghe-upgrade` コマンドを実行してください。
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
3. アップグレードプロセスが完了すると、ノードが再起動します。 再起動後に各ノードを `ping` できることを確認してください。
4. プライマリ MySQL ノードの管理シェルに接続してください。 [アップグレードの準備](#preparing-to-upgrade)のステップ 4 でダウンロードしたパッケージのファイル名を用いて、`ghe-upgrade` コマンドを実行してください。
  ```shell
  $ ghe-upgrade <em>PACKAGE-FILENAME</em>.pkg
  > *** verifying upgrade package signature...
  >  497MB 0:00:04 [ 117MB/s] [==========================================>] 100%            
  > gpg: Signature made Fri 19 Feb 2016 02:33:50 PM UTC using RSA key ID 0D65D57A
  > gpg: checking the trustdb
  > gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
  > gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
  > gpg: Good signature from "GitHub Enterprise (Upgrade Package Key) > <enterprise@github.com>"
  ```
5. アップグレードプロセスが完了すると、プライマリ MySQL ノードが再起動します。 再起動後に各ノードを `ping` できることを確認してください。
6. 任意のノードの管理シェルから `ghe-cluster-maintenance -u` を実行して管理モードを終了してください。
