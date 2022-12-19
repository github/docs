---
title: クラスタノードからの待避
intro: データサービスをクラスタノードから待避させることができます。
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 775e53aafadae8c5c76a9f1dfef43ebaf7ceb9f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120629'
---
## クラスター ノードの待避について

{% data variables.product.product_name %} のクラスターの構成では、ノードをオフラインにする前にノードを待避できます。 待避することで、サービス レベル内の残りのノードに、サービスのすべてのデータが確実に含まれます。 たとえば、クラスター内のノードの仮想マシンを置き換える場合は、最初にノードを待避する必要があります。

{% data variables.product.prodname_ghe_server %} のノードとサービス レベルについて詳しくは、「[クラスター ノードについて](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)」をご覧ください。

{% warning %}

**警告**:

- データが失われるのを避けるため、{% data variables.product.company_short %} は、ノードをオフラインにする前にノードを待避することを強くお勧めします。 

- データ サービス クラスターにノードが 3 つしかない場合、`ghe-spokes` でコピーを作成する別の場所がないため、ノードを待避することはできません。 4 つ以上ある場合は、`ghe-spokes` によって待避元のノードからすべてのリポジトリが移動されます。

{% endwarning %}

## クラスタノードからの待避

オフラインにする予定のノードで、`git-server`、`pages-server`、`storage-server` などのデータ サービス ロールが実行されている場合は、ノードをオフラインにする前に各ノードを待避します。

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. 待避するノードの UUID を見つけるには、次のコマンドを実行します。 `HOSTNAME` は、ノードのホスト名に置き換えます。

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. {% data variables.product.product_name %} がデータをコピーしている間、ノードの状態を監視します。 コピーが完了するまで、ノードをオフラインにしないでください。 ノードの状態を監視するには、次のいずれかのコマンドを実行します。`UUID` は、ステップ 2 の UUID に置き換えます。

   - **Git**:

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **ストレージ**:

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. コピーが完了したら、次のいずれかのコマンドを実行して、ノードを待避できます。`UUID` は、ステップ 2 の UUID に置き換えます。

   - **Git**:

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}** :

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - **ストレージ** の場合は、最初に次のコマンドを実行してノードをオフラインにします。

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     ストレージ ノードがオフラインになった後、次のコマンドを実行してノードを待避できます。

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
