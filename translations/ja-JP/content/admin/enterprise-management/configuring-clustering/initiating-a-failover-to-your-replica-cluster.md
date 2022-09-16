---
title: レプリカクラスタへのフェイルオーバーの開始
intro: '{% data variables.product.prodname_ghe_server %} クラスタに障害が発生した場合は、パッシブレプリカにフェイルオーバーできます。'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
ms.openlocfilehash: 14889e5d861475bc2d887062fb12450194cd6505
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120613'
---
## レプリカクラスタへのフェイルオーバーについて

プライマリデータセンターで障害が発生した場合、アクティブクラスタ内のノードごとにパッシブレプリカノードを設定すると、セカンダリデータセンター内のレプリカノードにフェイルオーバーできます。

フェイルオーバーに必要な時間は、レプリカクラスタを手動で昇格させてトラフィックをリダイレクトするのにかかる時間によって異なります。

レプリカクラスタを昇格させても、既存のクラスタのためのレプリケーションは自動的にセットアップされません。 レプリカクラスタを昇格させた後、新しいアクティブクラスタからレプリケーションを再設定できます。 詳しくは、「[クラスターの高可用性の構成](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)」を参照してください。

## 前提条件

パッシブレプリカノードにフェイルオーバーするには、クラスタの High Availability を設定しておく必要があります。 詳しくは、「[クラスタの高可用性の構成](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)」を参照してください。

## レプリカクラスタへのフェイルオーバーの開始

1. クラスタのセカンダリデータセンター内のパッシブノードに SSH で接続します。 詳細については、「[管理シェル (SSH) にアクセスする](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)」を参照してください。

2. セカンダリクラスタへのフェイルオーバーを初期化し、アクティブノードとして機能するように設定します。

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. パッシブクラスタのロードバランサの IP アドレスを指すように DNS レコードを更新します。 TTL 期間が経過すると、トラフィックはレプリカに転送されます。

{% data variables.product.prodname_ghe_server %} がプロンプトに戻り、DNS 更新が伝播されたら、フェイルオーバーが完了となります。 ユーザは、クラスタの通常のホスト名を使用して {% data variables.product.prodname_ghe_server %} にアクセスできます。
