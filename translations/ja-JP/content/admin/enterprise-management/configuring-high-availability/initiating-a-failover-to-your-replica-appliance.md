---
title: レプリカアプライアンスへのフェイルオーバーの開始
intro: 'メンテナンスやテストのため、またはプライマリアプライアンスが機能しなくなった場合は、コマンドラインを使用して {% data variables.product.prodname_ghe_server %} レプリカアプライアンスにフェイルオーバーできます。'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: e2c15dab0a812fe6031f78e7edbccaff6a2503c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192994'
---
フェイルオーバーに必要な時間は、レプリカを手動で昇格させてトラフィックをリダイレクトするのにかかる時間によって異なります。 平均時間は、20 から 30 分の範囲です。

{% data reusables.enterprise_installation.promoting-a-replica %}

1. プライマリ アプライアンスを使用できる場合、アプライアンスを切り替える前にレプリケーションが終了できるようにするには、プライマリ アプライアンスをメンテナンス モードにします。

    - アプライアンスをメンテナンス モードにしてください。

       - 管理コンソールを使用するには、「[Enabling and scheduling maintenance mode](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)」 (メンテナンスモードの有効化とスケジューリング) を参照してください

       - `ghe-maintenance -s` コマンドを使用することもできます。
         ```shell
         $ ghe-maintenance -s
         ```

   - アクティブな Git 操作、MySQL クエリ、および Resque ジョブの数がゼロになったら、30 秒間待ちます。 

      {% note %}

      **注:** Nomad には、メンテナンス中であっても、常に実行中のジョブが存在するため、それらのジョブを無視しても問題ありません。
    
      {% endnote %}

   - すべてのレプリケーション チャネル レポートが `OK` であることを確認するには、`ghe-repl-status -vv` コマンドを使用します。

      ```shell
      $ ghe-repl-status -vv
      ```

4. レプリカ アプライアンスで、レプリカを停止して、レプリカ アプライアンスをプライマリ ステータスに昇格するには、`ghe-repl-promote` コマンドを使用します。 到達可能であれば、これによりプライマリ ノードも自動的にメンテナンス モードになります。
  ```shell
  $ ghe-repl-promote
  ```

   {% note %}

   **注:** プライマリ ノードが使用できない場合、警告とタイムアウトが発生する可能性がありますが、無視して構いません。

  {% endnote %}

5. レプリカの IP アドレスを指すように DNS レコードを更新します。 TTL 期間が経過すると、トラフィックはレプリカに転送されます。 ロードバランサを使用している場合は、トラフィックがレプリカに送信されるように設定されていることを確認します。
6. 通常の操作が再開できることをユーザーに通知します。
7. 必要に応じて、新しいプライマリから既存のアプライアンスや以前のプライマリへのレプリケーションをセットアップします。 詳細については、「[About high availability configuration](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)」 (High Availability 設定について) を参照してください。
8. フェイルオーバー前に High Availability 設定の一部であり、レプリケーションをセットアップする予定のないアプライアンスは、UUID による High Availability 設定から削除する必要があります。
    - 以前のアプライアンスでは、`cat /data/user/common/uuid` を通じて UUID を取得します。
      ```shell
      $ cat /data/user/common/uuid
      ```
    - 新しいプライマリでは、`ghe-repl-teardown` を使用して、UUID を削除します。 *`UUID`* は、前の手順で取得した UUID に置き換えてください。
      ```shell
      $ ghe-repl-teardown -u  UUID
      ```

## 参考資料

- 「[Utilities for replication management](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)」 (レプリケーション管理のユーティリティ)
