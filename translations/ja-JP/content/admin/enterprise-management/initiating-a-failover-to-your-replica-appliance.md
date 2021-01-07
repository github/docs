---
title: レプリカアプライアンスへのフェイルオーバーの開始
intro: 'メンテナンスやテストのため、またはプライマリアプライアンスが機能しなくなった場合は、コマンドラインを使用して {% data variables.product.prodname_ghe_server %} レプリカアプライアンスにフェイルオーバーできます。'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  enterprise-server: '*'
---

フェイルオーバーに必要な時間は、レプリカを手動で昇格させてトラフィックをリダイレクトするのにかかる時間によって異なります。 平均的な時間は 2 分から 10 分です。

{% data reusables.enterprise_installation.promoting-a-replica %}

1. アプライアンスを切り替える前にレプリケーションを終了できるようにするには、プライマリアプライアンスをメンテナンスモードにします。
    - Management Console を使用するには、「[メンテナンスモードの有効化とスケジュール設定](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)」を参照してください。
    - `ghe-maintenance -s` コマンドも使用できます。
      ```shell
      $ ghe-maintenance -s
      ```
2. アクティブな Git 操作の数がゼロになったら、30 秒間待ちます。
3. すべてのレプリケーションチャネルが `OK` を報告することを確認するには、`ghe-repl-status -vv` コマンドを使用します。
  ```shell
  $ ghe-repl-status -vv
  ```
4. レプリケーションを停止してレプリカアプライアンスをプライマリステータスに昇格するには、`ghe-repl-encourage` コマンドを使用します。 到達可能であれば、これによりプライマリノードも自動的にメンテナンスノードになります。
  ```shell
  $ ghe-repl-promote
  ```
5. レプリカの IP アドレスを指すように DNS レコードを更新します。 TTL 期間が経過すると、トラフィックはレプリカに転送されます。 ロードバランサを使用している場合は、トラフィックがレプリカに送信されるように設定されていることを確認します。
6. 通常の操作が再開できることをユーザーに通知します。
7. 必要に応じて、新しいプライマリから既存のアプライアンスや以前のプライマリへのレプリケーションをセットアップします。 詳細は「[High Availability の設定について](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)」を参照してください。
8. Appliances you do not intend to setup replication to that were part of the high availability configuration prior the failover, need to be removed from the high availability configuration by UUID.
    - On the former appliances, get their UUID via `cat /data/user/common/uuid`.
      ```shell
      $ cat /data/user/common/uuid
      ```
    - On the new primary, remove the UUIDs using `ghe-repl-teardown`. Please replace *`UUID`* with a UUID you retrieved in the previous step.
      ```shell
      $ ghe-repl-teardown -u <em>UUID</em>
      ```

### 参考リンク

- "[レプリケーション管理のユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
