---
title: High Availabilityレプリカの作成
intro: アクティブ／パッシブ設定では、レプリカアプライアンスはプライマリアプライアンスの冗長コピーです。 プライマリアプライアンスに障害が起こると、High Availabilityモードではレプリカがプライマリアプライアンスとして動作し、サービスの中断を最小限にできます。
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/creating-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Create HA replica
ms.openlocfilehash: ee384588ee76cd455facdb6fcbe838fc110bc223
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106758'
---
{% data reusables.enterprise_installation.replica-limit %}

## High Availabilityレプリカの作成

1. 新しい {% data variables.product.prodname_ghe_server %} アプライアンスを希望するプラットフォームにセットアップします。 レプリカアプライアンスのCPU、RAM、ストレージ設定は、プライマリアプライアンスと同じにするべきです。 レプリカアプライアンスは、独立した環境にインストールすることをお勧めします。 下位層のハードウェア、ソフトウェア、ネットワークコンポーネントは、プライマリアプライアンスのそれらとは分離されているべきです。 クラウドプロバイダを利用している場合には、別個のリージョンもしくはゾーンを使ってください。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
1. 新しいアプライアンスが、ポート 122/TCP と 1194/UDP 経由で、この高可用性環境の他のすべてのアプライアンスと通信できることを確認します。 詳細については、「[ネットワーク ポート](/admin/configuration/configuring-network-settings/network-ports#administrative-ports)」を参照してください。
1. ブラウザで新しいレプリカアプライアンスのIPアドレスにアクセスして、所有する{% data variables.product.prodname_enterprise %}のライセンスをアップロードしてください。
{% data reusables.enterprise_installation.replica-steps %}
1. SSHを使ってレプリカアプライアンスのIPアドレスに接続してください。
  ```shell
  $ ssh -p 122 admin@REPLICA_IP
  ```
{% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. 新しいレプリカに対して、プライマリへの接続を確認してレプリカ モードを有効にするには、`ghe-repl-setup` をもう一度実行します。
  ```shell
  $ ghe-repl-setup PRIMARY_IP
  ```
{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}

## Geo-replicationレプリカの作成

レプリカを作成する以下の例の設定では、1 つのプライマリと 2 つのレプリカを使用しており、これらは 3 つの異なる地域にあります。 3 つのノードは別のネットワークに配置できますが、すべてのノードは他のすべてのノードから到達可能である必要があります。 最低限、必要な管理ポートは他のすべてのノードに対して開かれている必要があります。 ポート要件の詳細については、「[ネットワーク ポート](/enterprise/admin/guides/installation/network-ports/#administrative-ports)」を参照してください。

{% data reusables.enterprise_clustering.network-latency %}待ち時間が 70 ミリ秒を超える場合は、代わりにキャッシュ レプリカ ノードをお勧めします。 詳しくは、「[リポジトリ キャッシュの構成](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)」をご覧ください。

1. 最初のレプリカで `ghe-repl-setup` を実行することで、標準の 2 ノード構成の場合と同じ方法で最初のレプリカを作成します。
  ```shell
  (replica1)$ ghe-repl-setup PRIMARY_IP
  (replica1)$ ghe-repl-start
  ```
2. 2 つ目のレプリカを作成し、`ghe-repl-setup --add` コマンドを使用します。 `--add` フラグは、既存のレプリケーション構成を上書きするのを防ぎ、新しいレプリカを構成に追加します。
  ```shell
  (replica2)$ ghe-repl-setup --add PRIMARY_IP
  (replica2)$ ghe-repl-start
  ```
3. デフォルトでは、レプリカは同じデータセンターに設定され、同じノードにある既存のノードからシードを試行します。 レプリカを別のデータセンターに設定するには、datacenter オプションに異なる値を設定します。 具体的な値は、それらが互いに異なる限り、どのようなものでもかまいません。 各ノードで `ghe-repl-node` コマンドを実行し、データセンターを指定します。

  プライマリでは以下のコマンドを実行します。
  ```shell
  (primary)$ ghe-repl-node --datacenter [PRIMARY DC NAME]
  ```
  1 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica1)$ ghe-repl-node --datacenter [FIRST REPLICA DC NAME]
  ```
  2 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica2)$ ghe-repl-node --datacenter [SECOND REPLICA DC NAME]
  ```
  {% tip %}

  **ヒント:** `--datacenter` および `--active` オプションは同時に設定できます。

  {% endtip %}
4. アクティブなレプリカノードは、アプライアンスデータのコピーを保存し、エンドユーザーのリクエストに応じます。 アクティブではないノードは、アプライアンスデータのコピーを保存しますが、エンドユーザーのリクエストに応じることはできません。 `--active` フラグを使用してアクティブ モードを有効にするか、`--inactive` フラグを使用して非アクティブ モードを有効にします。

  1 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  2 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. 構成を適用するには、プライマリで `ghe-config-apply` コマンドを使用します。
  ```shell
  (primary)$ ghe-config-apply
  ```

## Geo-replicationのためのDNSの設定

プライマリとレプリカノードの IP アドレスを使って、Geo DNS を設定します。 SSH でプライマリ ノードにアクセスしたり、`backup-utils` でバックアップしたりするために、プライマリ ノード (たとえば、`primary.github.example.com`) に対して DNS CNAME を作成することもできます。

テストのために、ローカル ワークステーションの `hosts` ファイル (たとえば、`/etc/hosts`) にエントリを追加することができます。 以下の例のエントリでは、`HOSTNAME` に対する要求が `replica2` に解決されることになります。 別の行をコメントアウトすることで、特定のホストをターゲットにすることができます。

```
# <primary IP>      HOSTNAME 
# <replica1 IP>     HOSTNAME 
<replica2 IP>     HOSTNAME 
```

## 参考資料

- "[高可用性構成について](/enterprise/admin/guides/installation/about-high-availability-configuration)"
- 「[Utilities for replication management](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)」 (レプリケーション管理のユーティリティ)
- "[geo レプリケーションについて](/enterprise/admin/guides/installation/about-geo-replication/)"
