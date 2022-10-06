---
title: クラスタのアップグレード
intro: '管理シェル (SSH) を使用して {% data variables.product.prodname_ghe_server %}クラスタを最新のリリースにアップグレードします。'
redirect_from:
  - /enterprise/admin/clustering/upgrading-a-cluster
  - /enterprise/admin/enterprise-management/upgrading-a-cluster
  - /admin/enterprise-management/upgrading-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Upgrades
ms.openlocfilehash: 040fe0d315f440c8d5489b04f808dbe1f6c67972
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120597'
---
## ホットパッチでのアップグレード
{% data reusables.enterprise_installation.hotpatching-explanation %}ホットパッチのインストールスクリプトは、ホットパッチをクラスタ内の各ノードにインストールし、サービスを適切な順序で再起動し、ダウンタイムを回避します。

1. [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) を使用してデータをバックアップします。
2. 任意のノードの管理シェルから、`ghe-cluster-hotpatch` コマンドを使用して最新のホットパッチをインストールします。 ホットパッチの URL を指定するか、手動でホットパッチをダウンロードしてローカルのファイル名を指定することができます。
  ```shell
  $ ghe-cluster-hotpatch https://<em>HOTPATCH-URL/FILENAME</em>.hpkg
  ```

## アップグレードパッケージでのアップグレード
アップグレードパッケージを使用して、{% data variables.product.prodname_ghe_server %} クラスタを最新のフィーチャリリースにアップグレードします。 たとえば、`2.11` から `2.13` にアップグレードできます。

### アップグレードの準備

1. アップグレードするバージョンの [クラスター ネットワーク構成](/enterprise/admin/guides/clustering/cluster-network-configuration)を確認し、必要に応じて構成を更新します。
2. [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) を使用してデータをバックアップします。
3. アップグレード中は通常どおりに使用できないため、{% data variables.product.prodname_ghe_server %}クラスタのエンドユーザーに対してメンテナンス期間をスケジュールします。 メンテナンスモードは、クラスタのアップグレードの進行中、ユーザーのアクセスをブロックし、データが変更されないようにします。
4. [{% data variables.product.prodname_ghe_server %} のダウンロード ページ](https://enterprise.github.com/download)で、アップグレード *.pkg* ファイルの URL をクリップボードにコピーします。
5. 任意のノードの管理シェルから、`ghe-cluster-each` コマンドを `curl` と組み合わせて使用して、1 つの手順でリリース パッケージを各ノードにダウンロードします。 先ほどのステップでコピーした URL を引数として使ってください。
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

### クラスタノードのアップグレード

1. 任意のクラスター ノードの管理シェルに接続して `ghe-cluster-maintenance -s` を実行して、スケジュールされた期間に従ってメンテナンス モードを有効にします。
2. **プライマリ MySQL ノードを除き**、{% data variables.product.prodname_ghe_server %} の各ノードの管理シェルに接続します。
[アップグレードの準備](#preparing-to-upgrade)の手順 4 でダウンロードしたパッケージ ファイル名を指定して、`ghe-upgrade` コマンドを実行します。
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
3. アップグレードプロセスが完了すると、ノードが再起動します。 再起動後に各ノードを `ping` できることを確認します。
4. プライマリ MySQL ノードの管理シェルに接続してください。 [アップグレードの準備](#preparing-to-upgrade)の手順 4 でダウンロードしたパッケージ ファイル名を指定して、`ghe-upgrade` コマンドを実行します。
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
5. アップグレードプロセスが完了すると、プライマリ MySQL ノードが再起動します。 再起動後に各ノードを `ping` できることを確認します。{% ifversion ghes %}
6. プライマリ MySQL ノードの管理シェルに接続し、`ghe-cluster-config-apply` コマンドを実行します。
7. `ghe-cluster-config-apply` が完了したら、`ghe-cluster-status` を実行してサービスが正常な状態であることを確認します。{% endif %}
8. `ghe-cluster-maintenance -u` を実行して、任意のノードの管理シェルからメンテナンス モードを終了します。
