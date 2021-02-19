---
title: Elasticsearch インデックスを GitHub Enterprise 2.14 以降に移行する
intro: '{% data variables.product.prodname_ghe_server %} 2.14 へのアップグレードを準備するには、移行スクリプトを使用してインデックスを Elasticsearch 5.6 に移行する必要があります。'
redirect_from:
  - /enterprise/admin/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-server-2-14-or-later
  - /enterprise/admin/enterprise-management/migrating-elasticsearch-indices-to-github-enterprise-server-214-or-later
versions:
  enterprise-server: '*'
---

<!-- This guide is here for longevity for support purposes. Please do not delete or add to index.md file-->


{% data variables.product.prodname_ghe_server %} 2.14 には、Elasticsearch 5.6 へのアップグレードが含まれています。 2.12 または 2.13 から {% data variables.product.prodname_ghe_server %} 2.14 以降にアップグレードする前に、Elasticsearch 移行ツールをダウンロード、インストール、実行することをお勧めします。これにより、アプライアンスはオンラインアクセスを維持しながら、最大のインデックスがオンラインで移行されます。

### 検索インデックス

移行スクリプトは、まずアプライアンスがオンラインのうちに`search`インデックスをチェックします。 `search`インデックスの移行には、サイズに応じて数分から数日がかかることがあります。 大きなインデックスの例としては、以下のインデックスは私たちのテスト環境での移行に数日を要しました。

```
admin@ip-172-31-2-141:~$ curl -s http://localhost:9200/_cat/indices?v | sort -n -k 6
green  open   blog-1                     1   0          0            0       144b           144b
green  open   projects-1                 1   0          0            0       144b           144b
green  open   registry-packages-1        1   0          0            0       144b           144b
green  open   showcases-1                1   0          0            0       144b           144b
health status index                    pri rep docs.count docs.deleted store.size pri.store.size
green  open   pull-requests-1            1   0          1            0      9.3kb          9.3kb
green  open   wikis-1                    1   0          2            0        5kb            5kb
green  open   hookshot-logs-2018-05-29   5   0         25            0    124.2kb        124.2kb
green  open   repos-1                    1   0       1638            1      1.4mb          1.4mb
green  open   gists-1                    1   0       3531           64    291.9kb        291.9kb
green  open   audit_log-1-2018-06-1      1   0      11108            0        3mb            3mb
green  open   users-1                    1   0      19866           56      2.7mb          2.7mb
green  open   hookshot-logs-2018-05-31   5   0      20000            0     33.4mb         33.4mb
green  open   hookshot-logs-2018-06-04   5   0      20000            0     32.6mb         32.6mb
green  open   issues-1                   1   0      26405            6     82.8mb         82.8mb
green  open   hookshot-logs-2018-05-30   5   0     119744            0    196.8mb        196.8mb
green  open   audit_log-1-2018-05-1      1   0     191664            0       50mb           50mb
green  open   code-search-1              1   0    6932626           44     42.9gb         42.9gb
green  open   commits-1                  1   0   63753587         1485     45.4gb         45.4gb
```

`search`インデックスは、以下から始まります。

- blog-
- code-search-
- commits-
- gists-
- issues-
- labels-
- marketplace-listings-
- non-marketplace-listings-
- projects-
- pull-requests-
- registry-packages-
- repos-
- showcases-
- topics-
- users-

### webhookインデックス

移行スクリプトは必要な`search`インデックスをオンラインで再構築した後、再構築が必要な`webhook`インデックスがあるかを確認します。 {% data variables.product.prodname_ghe_server %} 2.12 または 2.13 でアプライアンスを 14 日以上実行している場合は、`webhook` インデックスのデフォルトの保存ポリシーは 7 日間であるため、`webhook` インデックスを再構築する必要はおそらくないでしょう。 アプライアンスを{% data variables.product.prodname_enterprise %}2.11以前からアップデートするなら、`webhook`インデックスの再構築が必要かもしれません。

再構築が必要な`webhook`インデックスがある場合、スクリプトが`webhook`インデックスを再構築できるようになる前にメンテナンスモードを有効化するよう求められます。 `webhook`インデックスの移行にはいくらかのダウンタイムが必要ですが、長期にわたるメンテナンスウィンドウあるいはダウンタイムは必要ありません。

`webhook`インデックスは`hookshot-logs-`から始まります。

### 利用可能なインデックス

アプライアンスで利用できるインデックスは、curlを使って見ることができます。

```
admin@ip-172-31-2-141:~$ curl -s http://localhost:9200/_cat/indices?v | sort -n -k 6
green  open   blog-1                     1   0          0            0       144b           144b
green  open   projects-1                 1   0          0            0       144b           144b
green  open   registry-packages-1        1   0          0            0       144b           144b
green  open   showcases-1                1   0          0            0       144b           144b
health status index                    pri rep docs.count docs.deleted store.size pri.store.size
green  open   pull-requests-1            1   0          1            0      9.3kb          9.3kb
green  open   wikis-1                    1   0          2            0        5kb            5kb
green  open   hookshot-logs-2018-05-29   5   0         25            0    124.2kb        124.2kb
green  open   repos-1                    1   0       1638            1      1.4mb          1.4mb
green  open   gists-1                    1   0       3531           64    291.9kb        291.9kb
green  open   audit_log-1-2018-06-1      1   0      11108            0        3mb            3mb
green  open   users-1                    1   0      19866           56      2.7mb          2.7mb
green  open   hookshot-logs-2018-05-31   5   0      20000            0     33.4mb         33.4mb
green  open   hookshot-logs-2018-06-04   5   0      20000            0     32.6mb         32.6mb
green  open   issues-1                   1   0      26405            6     82.8mb         82.8mb
green  open   hookshot-logs-2018-05-30   5   0     119744            0    196.8mb        196.8mb
green  open   audit_log-1-2018-05-1      1   0     191664            0       50mb           50mb
green  open   code-search-1              1   0    6932626           44     42.9gb         42.9gb
green  open   commits-1                  1   0   63753587         1485     45.4gb         45.4gb
```

### {% data variables.product.prodname_ghe_server %} 2.12 または 2.13 アプライアンスの準備

移行ツールを実行せずに {% data variables.product.prodname_ghe_server %} 2.14 以降にアップグレードすると、既存の Elasticsearch インデックスは無効になり、正しく機能しなくなる可能性があります。 Elasticsearch の移行スクリプトを実行するには、{% data variables.product.prodname_ghe_server %} アプライアンスは {% data variables.product.prodname_enterprise %} 2.12 または 2.13 を実行している必要があります。

{% warning %}

**警告:**
- {% data variables.product.prodname_enterprise_backup_utilities %} を使用すると、5.X と互換性のない古い Elasticsearch インデックスは復元後に破棄されます。 この場合、手動での再インデックスが必要になるかもしれません。
- {% data variables.product.prodname_ghe_server %} が High Availability 用に設定されている場合は、レプリケーションがまだ実行中の間に移行スクリプトを実行**しなければなりません**。 この変更は、アップグレードを開始する前に他のアプライアンスに完全にレプリケーションされるようになっていなければなりません。 移行スクリプトの実行中にレプリケーションが動作していなければ、Elasticsearchのインデックスは不正になることがあります。

{% endwarning %}

1. High Availabilityが有効になっているプライマリアプライアンスにSSHで認証を受けてください。
2. 移行スクリプトをダウンロードしてアプライアンスにインストールしてください。
   ```shell
   $ wget https://github-enterprise.s3.amazonaws.com/util/es-5x-transition-tools.tar.gz
   $ sudo tar -C / -xvf es-5x-transition-tools.tar.gz
   ```
   {% data variables.product.prodname_ghe_server %} クラスタを管理する場合は、SSH を使用していずれかの Elasticsearch サーバーノードに認証し、移行ツールをそこにインストールします。 次を使用してそれらを配置します:
    ```shell
    $ ghe-cluster-each -r elasticsearch -p
    ghe-test-data-0
    ghe-test-data-1
    ghe-test-data-2
    ```
2. 移行スクリプトを実行します:
   ```shell
   $ /usr/local/share/enterprise/ghe-es-5x-migration -r
   ```
 {% note %}

 **ノート:** 移行する`webhook`インデックスがあるなら、オンラインでの移行処理を実行した後、メンテナンスモードを有効にするよう求められます。

 {% endnote %}
3. {% data variables.product.prodname_ghe_server %} クラスタを実行している場合は、単一 VM または High Availability 環境用の公式アップグレードドキュメント、またはクラスタアップグレードガイドに従ってください。 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)」または「[クラスタをアップグレードする](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)」を参照してください。
