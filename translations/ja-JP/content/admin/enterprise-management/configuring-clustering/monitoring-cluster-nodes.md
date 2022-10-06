---
title: クラスタノードのモニタリング
intro: '{% data variables.product.prodname_ghe_server %} クラスタは、2 つ以上のノードに分散された冗長サービスで構成されています。 もしも個々のサービスまたは1つのノード全体に障害があっても、それがクラスタのユーザに即座に見えることはありません。 ただし、パフォーマンスと冗長性が影響を受けるため、{% data variables.product.prodname_ghe_server %} クラスタの健全性を監視することが重要です。'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: a5cab340f84d572a0a8e549d942b7b52ef522733
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120598'
---
## クラスタのステータスの手動でのチェック

{% data variables.product.prodname_ghe_server %} には、クラスタの健全性をモニタリングするためのコマンドラインユーティリティが組み込まれています。 管理シェルから `ghe-cluster-status` コマンドを実行すると、接続とサービスの状態の検証を含む一連の正常性チェックが各ノードで実行されます。 出力には、`ok` または `error` のテキストを含むテスト結果が表示されます。 たとえば失敗したテストだけを表示するには以下のようにしてください。

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**注:** 失敗したテストがない場合、このコマンドは出力を生成しません。 これはクラスタが健全であることを意味します。

{% endnote %}

## Nagiosでのクラスタステータスのモニタリング

{% data variables.product.prodname_ghe_server %} を監視するように [Nagios](https://www.nagios.org/) を構成できます。 各クラスター ノードへの基本的な接続を監視することに加えて、`ghe-cluster-status -n` コマンドを使用するように Nagios を構成して、クラスターの状態を確認できます。 これは、Nagiosが理解できるフォーマットの出力を返します。

### 前提条件
* Nagiosを動作させるLinuxのホスト。
* {% data variables.product.prodname_ghe_server %}クラスターへのネットワークアクセス。

### Nagiosホストの設定
1. 空のパスフレーズで SSH キーを生成してください。 Nagios はこれを使用して {% data variables.product.prodname_ghe_server %} クラスタへの認証を行います。
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t ed25519</em>
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **セキュリティの警告:** パスフレーズのない SSH キーがホストへの完全なアクセスを承認されていると、セキュリティ リスクになることがあります。 このキーの承認は、単一の読み取りのみのコマンドに限定してください。

  {% enddanger %} {% note %}

  **注:** Ed25519 アルゴリズムをサポートしていない Linux のディストリビューションを使用している場合は、次のコマンドを使用します。
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. 秘密キー (`id_ed25519`) を `nagios` ホーム フォルダーにコピーし、適切な所有権を設定します。
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. `ghe-cluster-status -n` コマンド *のみ* を実行する公開キーを承認するには、`/data/user/common/authorized_keys` ファイル内の `command=` プレフィックスを使用します。 任意のノードの管理シェルから、このファイルを変更してステップ1で生成した公開鍵を追加してください。 例: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. `/data/user/common/authorized_keys` ファイルを変更したノードで `ghe-cluster-config-apply` を実行して、構成を検証し、クラスター内の各ノードにコピーします。

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Nagios プラグインがこのコマンドの実行をうまく行えることをテストするには、このコマンドを Nagios のホストからインタラクティブに実行してください。
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Nagios の設定中にコマンド定義を作成してください。
  ###### 定義の例

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. このコマンドを {% data variables.product.prodname_ghe_server %} クラスタ内のノードのサービス定義に追加します。

  ###### 定義の例

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

Nagios に定義を追加すると、設定に従ってサービスチェックが実行されます。 Nagios の Web インターフェースで新しく設定されたサービスを確認することができます。

![Nagios の例](/assets/images/enterprise/cluster/nagios-example.png)
