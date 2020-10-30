---
title: クラスタノードのモニタリング
intro: '{% data variables.product.prodname_ghe_server %} クラスタは、2 つ以上のノードに分散された冗長サービスで構成されています。 もしも個々のサービスまたは1つのノード全体に障害があっても、それがクラスタのユーザに即座に見えることはありません。 ただし、パフォーマンスと冗長性が影響を受けるため、{% data variables.product.prodname_ghe_server %} クラスタの健全性を監視することが重要です。'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
versions:
  enterprise-server: '*'
---

### クラスタのステータスの手動でのチェック

{% data variables.product.prodname_ghe_server %} には、クラスタの健全性をモニタリングするためのコマンドラインユーティリティが組み込まれています。 管理シェルから`ghe-cluster-status`コマンドを実行すると、接続性やサービスステータスの検証を含む一連のヘルスチェックが各ノード上で実行されます。 結果出力には、すべてのテスト結果にtext `ok`もしくは`error`が含まれます。 たとえば失敗したテストだけを表示するには以下のようにしてください。

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**メモ:** すべてのテストにパスした場合、このコマンドは何も出力しません。 これはクラスタが健全であることを意味します。

{% endnote %}

### Nagiosでのクラスタステータスのモニタリング

{% data variables.product.prodname_ghe_server %} をモニタリングするよう、[Nagios](https://www.nagios.org/) を設定できます。 各クラスタノードの基本的な接続性のモニタリングに加えて、`ghe-cluster-status -n`コマンドを使うようNagiosを設定してクラスタステータスをチェックできます。 これは、Nagiosが理解できるフォーマットの出力を返します。

#### 必要な環境
* Nagiosを動作させるLinuxのホスト。
* {% data variables.product.prodname_ghe_server %}クラスターへのネットワークアクセス。

#### Nagiosホストの設定
1. 空のパスフレーズで SSH キーを生成してください。 Nagios はこれを使用して {% data variables.product.prodname_ghe_server %} クラスタへの認証を行います。
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t rsa -b 4096</em>
  > Generating public/private rsa key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_rsa):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
  > Your identification has been saved in /home/nagiosuser/.ssh/id_rsa.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_rsa.pub.
  ```
  {% danger %}

  {% danger %}
 **セキュリティの警告:** パスフレーズを持たない SSH キーは、ホストへの完全なアクセスを承認されていた場合、セキュリティリスクになることがあります。 このキーの承認は、単一の読み取りのみのコマンドに限定してください。

  {% enddanger %}
2. 秘密鍵 (`id_rsa`) を `nagios` ホームフォルダにコピーし、適切な所有権を設定します。
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_rsa /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_rsa</em>
  ```

3. `ghe-cluster-status -n` コマンド*のみ*を実行するために公開鍵を認証するには、`/data/user/common/authorized_keys` ファイル中で `command=` プレフィックスを使ってください。 任意のノードの管理シェルから、このファイルを変更してステップ1で生成した公開鍵を追加してください。 例: `command="/usr/local/bin/ghe-cluster-status -n" ssh-rsa AAAA....`

4. `/data/user/common/authorized_keys` ファイルを変更したノード上で `ghe-cluster-config-apply` を実行し、設定を検証してクラスタ内の各ノードにコピーしてください。

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
