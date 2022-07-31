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
---

フェイルオーバーに必要な時間は、レプリカを手動で昇格させてトラフィックをリダイレクトするのにかかる時間によって異なります。 平均的な時間は 2 分から 10 分です。

{% data reusables.enterprise_installation.promoting-a-replica %}

1. If the primary appliance is available, to allow replication to finish before you switch appliances, on the primary appliance, put the primary appliance into maintenance mode.

    - Put the appliance into maintenance mode.

       - Management Console を使用するには、「[メンテナンスモードの有効化とスケジュール設定](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)」を参照してください。

       - `ghe-maintenance -s` コマンドも使用できます。
         ```shell
         $ ghe-maintenance -s
         ```

   - When the number of active Git operations, MySQL queries, and Resque jobs reaches zero, wait 30 seconds.

      {% note %}

      **Note:** Nomad will always have jobs running, even in maintenance mode, so you can safely ignore these jobs.

      {% endnote %}

   - すべてのレプリケーションチャネルが `OK` を報告することを確認するには、`ghe-repl-status -vv` コマンドを使用します。

      ```shell
      $ ghe-repl-status -vv
      ```

4. On the replica appliance, to stop replication and promote the replica appliance to primary status, use the `ghe-repl-promote` command. This will also automatically put the primary node in maintenance mode if it’s reachable.
  ```shell
  $ ghe-repl-promote
  ```
5. レプリカの IP アドレスを指すように DNS レコードを更新します。 TTL 期間が経過すると、トラフィックはレプリカに転送されます。 ロードバランサを使用している場合は、トラフィックがレプリカに送信されるように設定されていることを確認します。
6. 通常の操作が再開できることをユーザーに通知します。
7. 必要に応じて、新しいプライマリから既存のアプライアンスや以前のプライマリへのレプリケーションをセットアップします。 詳細は「[High Availability の設定について](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)」を参照してください。
8. フェイルオーバー前に High Availability 設定の一部であり、レプリケーションをセットアップする予定のないアプライアンスは、UUID による High Availability 設定から削除する必要があります。
    - 以前のアプライアンスでは、`cat /data/user/common/uuid` を介して UUID を取得します。
      ```shell
      $ cat /data/user/common/uuid
      ```
    - 新しいプライマリで、`ghe-repl-teardown` を使用して UUID を削除します。 *`UUID`* を前のステップで取得した UUID に置き換えてください。
      ```shell
      $ ghe-repl-teardown -u <em>UUID</em>
      ```

## 参考リンク

- "[レプリケーション管理のユーティリティ](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
