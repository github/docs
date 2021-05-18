---
title: High Availability設定のリカバリ
intro: '{% data variables.product.prodname_ghe_server %} アプライアンスにフェイルオーバーした後は、単一のアプライアンスに頼るのではなく、できるだけ早く冗長性を取り戻す必要があります。'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
---

フェイルオーバーが計画済みのものだったり、アプライアンスの健全性に関係ないものである場合、以前のプライマリアプライアンスを新しいレプリカアプライアンスとして使用できます。 フェイルオーバーがプライマリアプライアンスの問題に関係しているなら、新しいレプリカアプライアンスを作成する方が良いでしょう。 詳しい情報については"[High Availabilityレプリカの作成](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/)"を参照してください。

### 以前のプライマリアプライアンスを新しいレプリカとして設定する

1. SSH を使用して以前のプライマリアプライアンスの IP アドレスに接続します。
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
2. 以前のプライマリアプライアンスで、以前のレプリカの IP アドレスを指定して `ghe-repl-setup` を実行します。
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
4. 新しいプライマリへの接続を確認し、新しいレプリカのレプリカモードを有効にするには、`ghe-repl-setup` をもう一度実行します。
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
