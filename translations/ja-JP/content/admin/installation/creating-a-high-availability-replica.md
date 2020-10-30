---
title: High Availabilityレプリカの作成
intro: アクティブ／パッシブ設定では、レプリカアプライアンスはプライマリアプライアンスの冗長コピーです。 プライマリアプライアンスに障害が起こると、High Availabilityモードではレプリカがプライマリアプライアンスとして動作し、サービスの中断を最小限にできます。
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
versions:
  enterprise-server: '*'
---

### High Availabilityレプリカの作成

1. 新しい {% data variables.product.prodname_ghe_server %} アプライアンスを希望するプラットフォームにセットアップします。 レプリカアプライアンスのCPU、RAM、ストレージ設定は、プライマリアプライアンスと同じにするべきです。 レプリカアプライアンスは、独立した環境にインストールすることをお勧めします。 下位層のハードウェア、ソフトウェア、ネットワークコンポーネントは、プライマリアプライアンスのそれらとは分離されているべきです。 クラウドプロバイダを利用している場合には、別個のリージョンもしくはゾーンを使ってください。 詳細は「["{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
2. ブラウザで新しいレプリカアプライアンスのIPアドレスにアクセスして、所有する{% data variables.product.prodname_enterprise %}のライセンスをアップロードしてください。
3. プライマリアプライアンス上のパスワードと一致する管理者パスワードを設定して続行します。
4. **Configure as Replica（レプリカとして設定）**をクリックしてください。 ![新しいインスタンスをレプリカとして設定するリンクを持つインストールオプション](/assets/images/enterprise/management-console/configure-as-replica.png)
5. "Add new SSH key（新しいSSH鍵の追加）"の下でSSH鍵を入力してください。 ![SSHキーの追加](/assets/images/enterprise/management-console/add-ssh-key.png)
6. **Add key（鍵の追加）**をクリックし、続いて**Continue（続ける）**をクリックしてください。
6. SSHを使ってレプリカアプライアンスのIPアドレスに接続してください。
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
7. レプリケーション用の鍵ペアを生成するには、プライマリアプライアンスの IP アドレスを指定した `ghe-repl-setup` コマンドを使用し、そのコマンドが返す公開鍵をコピーします。
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
9. プライマリへの接続を確認し、新しいレプリカのレプリカモードを有効にするには、`ghe-repl-setup` をもう一度実行します。
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
11. 各データストアのレプリケーションチャネルのステータスを確認するには、`ghe-repl-status` コマンドを使用します。
  ```shell
  $ ghe-repl-status
  ```

### Geo-replicationレプリカの作成

レプリカを作成する以下の例の設定では、1 つのプライマリと 2 つのレプリカを使用しており、これらは 3 つの異なる地域にあります。 3 つのノードは別のネットワークに配置できますが、すべてのノードは他のすべてのノードから到達可能である必要があります。 最低限、必要な管理ポートは他のすべてのノードに対して開かれている必要があります。 ポートの要件に関する詳しい情報については、「[ネットワークポート](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports/#administrative-ports)」を参照してください。

1. 最初のレプリカで `ghe-repl-setup` を実行することで、標準の 2 ノード構成の場合と同じ方法で最初のレプリカを作成します。
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. 2 番目のレプリカを作成して、`ghe-repl-setup --add` コマンドを使用します。 `--add` フラグは、既存のレプリケーション設定を上書きするのを防ぎ、新しいレプリカを設定に追加します。
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. デフォルトでは、レプリカは同じデータセンターに設定され{% if currentVersion ver_gt "enterprise-server@2.17" %}、同じノードにある既存のノードからシードを試行し{% endif %}ます。 レプリカを別のデータセンターに設定するには、datacenter オプションに異なる値を設定します。 具体的な値は、それらが互いに異なる限り、どのようなものでもかまいません。 各ノードで `ghe-repl-node` コマンドを実行し、データセンターを指定します。

  プライマリでは以下のコマンドを実行します。
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  1 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  2 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **ヒント:** `--datacenter` と `--active` のオプションは同時に設定できます。

  {% endtip %}
4. アクティブなレプリカノードは、アプライアンスデータのコピーを保存し、エンドユーザーのリクエストに応じます。 アクティブではないノードは、アプライアンスデータのコピーを保存しますが、エンドユーザーのリクエストに応じることはできません。 `--active` フラグを使用してアクティブモードを有効にするか、`--inactive` フラグを使用して非アクティブモードを有効にします。

  1 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  2 番目のレプリカでは以下のコマンドを実行します。
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. 設定を適用するには、プライマリで `ghe-config-apply` コマンドを使用します。
  ```shell
  (primary)$ ghe-config-apply
  ```

### Geo-replicationのためのDNSの設定

プライマリとレプリカノードの IP アドレスを使って、Geo DNS を設定します。 SSH でプライマリノードにアクセスしたり、`backup-utils` でバックアップするために、プライマリノード (たとえば、`primary.github.example.com`) に対して DNS CNAME を作成することもできます。

テストのために、ローカルワークステーションの `hosts` ファイル (たとえば、`/etc/hosts`) にエントリを追加することができます。 以下の例のエントリでは、`HOSTNAME` に対するリクエストが `replica2` に決定されることになります。 別の行をコメントアウトすることで、特定のホストをターゲットにすることができます。

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

### 参考リンク

- "[High Availability設定について](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration)"
- "[レプリケーション管理のユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
- 「[Geo-replication について](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)」
