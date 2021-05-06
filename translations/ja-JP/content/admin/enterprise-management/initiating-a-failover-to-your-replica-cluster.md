---
title: レプリカクラスタへのフェイルオーバーの開始
intro: '{% data variables.product.prodname_ghe_server %} クラスタに障害が発生した場合は、パッシブレプリカにフェイルオーバーできます。'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  enterprise-server: '>2.21'
topics:
  - Enterprise
---

### レプリカクラスタへのフェイルオーバーについて

プライマリデータセンターで障害が発生した場合、アクティブクラスタ内のノードごとにパッシブレプリカノードを設定すると、セカンダリデータセンター内のレプリカノードにフェイルオーバーできます。

フェイルオーバーに必要な時間は、レプリカクラスタを手動で昇格させてトラフィックをリダイレクトするのにかかる時間によって異なります。

レプリカクラスタを昇格させても、既存のクラスタのためのレプリケーションは自動的にセットアップされません。 レプリカクラスタを昇格させた後、新しいアクティブクラスタからレプリケーションを再設定できます。 詳細については、「[クラスタの High Availability を設定する](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)」を参照してください。

### 必要な環境

パッシブレプリカノードにフェイルオーバーするには、クラスタの High Availability を設定しておく必要があります。 詳細については、「[クラスタの High Availability を設定する](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)」を参照してください。

### レプリカクラスタへのフェイルオーバーの開始

1. クラスタのセカンダリデータセンター内のパッシブノードに SSH で接続します。 詳しい情報については「[管理シェル（SSH）にアクセスする](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)」を参照してください。

2. セカンダリクラスタへのフェイルオーバーを初期化し、アクティブノードとして機能するように設定します。

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. パッシブクラスタのロードバランサの IP アドレスを指すように DNS レコードを更新します。 TTL 期間が経過すると、トラフィックはレプリカに転送されます。

{% data variables.product.prodname_ghe_server %} がプロンプトに戻り、DNS 更新が伝播されたら、フェイルオーバーが完了となります。 ユーザは、クラスタの通常のホスト名を使用して {% data variables.product.prodname_ghe_server %} にアクセスできます。
