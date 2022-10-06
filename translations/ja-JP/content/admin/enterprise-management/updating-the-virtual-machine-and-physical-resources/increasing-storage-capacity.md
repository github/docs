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
ms.openlocfilehash: b6542e1f43ce4111358de3940c8e46dea2afd5d5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881123'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% data variables.product.product_location %}に参加するユーザーが増えるにつれて、ストレージ ボリュームのサイズを変更する必要があるかもしれません。 ストレージのリサイズに関する情報については、使用している仮想化プラットフォームのドキュメンテーションを参照してください。

## 要件と推奨事項

{% note %}

**注:** ストレージ ボリュームのサイズを変更する前に、インスタンスをメンテナンス モードにします。{% ifversion ip-exception-list %}指定した IP アドレスからのアクセスを許可するように IP 例外リストを構成することで、変更を検証できます。 {% endif %} 詳しい情報については、「[メンテナンス モードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

{% endnote %}

### 最小要件

{% data reusables.enterprise_installation.hardware-rec-table %}

## データパーティションサイズの増加

1. 仮想化プラットフォームのツールを使用して、既存のユーザーボリュームのディスクのサイズを変更します。
{% data reusables.enterprise_installation.ssh-into-instance %}
3. アプライアンスをメンテナンスモードにしてください。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。
4. アプライアンスを再起動して、新しいストレージ割り当てを検出します。
  ```shell
  $ sudo reboot
  ```
5. `ghe-storage-extend` コマンドを実行して、`/data/user` ファイル システムを拡張します。
  ```shell
  $ ghe-storage-extend
  ```

## 新しいアプライアンスを使用したルートパーティションサイズの増加

1. 現在のアプライアンスと同じバージョンを使用して、より大きなルートディスクで新たな {% data variables.product.prodname_ghe_server %} をセットアップします。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
2. 現在のアプライアンスをシャットダウンします。
  ```shell
  $ sudo poweroff
  ```
3. 使用している仮想化プラットフォームのツールを使い、現在のアプライアンスからデータディスクをデタッチします。
4. 大きなルートディスクを持つ新しいアプライアンスにデータディスクをアタッチします。

## 既存のアプライアンスを使用したルートパーティションサイズの増加

{% warning %}

**警告:** ルート パーティション サイズを拡張するには、インスタンスをメンテナンス モードにする必要があります。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

{% endwarning %}

1. {% data variables.product.prodname_ghe_server %} アプライアンスに新しいディスクを取り付けます。
1. 新しいディスクのデバイス名を確認するには、`lsblk` コマンドを実行します。
1. ディスクをフォーマットするには、`parted` コマンドを実行します。`/dev/xvdg` を自分のデバイス名に置き換えます。
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. レプリケーションを停止するには、`ghe-repl-stop` コマンドを実行します。

   ```shell
   $ ghe-repl-stop
   ```
   
1. `ghe-upgrade` コマンドを実行して、プラットフォーム固有の完全なパッケージを新しくパーティション分割されたディスクにインストールします。 `github-enterprise-2.11.9.hpkg` などのユニバーサル ホットパッチ アップグレード パッケージは想定どおりに動作しません。 `ghe-upgrade` コマンドが完了すると、アプリケーション サービスは自動的に終了します。

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. アプライアンスをシャットダウンします。
  ```shell
  $ sudo poweroff
  ```
1. ハイパーバイザーで、古いルートディスクを取り外し、古いルートディスクと同じ場所に新しいルートディスクを取り付けます。
1. アプライアンスを起動します。
1. システム サービスが正しく機能していることを確認してから、メンテナンス モードを終了します。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

アプライアンスが高可用性または geo レプリケーション用に構成されている場合は、すべてのノードのストレージがアップグレードされた後で、`ghe-repl-start` を使用して各レプリカ ノードでレプリケーションを開始してください。
