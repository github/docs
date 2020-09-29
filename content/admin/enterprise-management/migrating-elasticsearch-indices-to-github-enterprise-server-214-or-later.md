---
title: Migrating Elasticsearch indices to GitHub Enterprise Server 2.14 or later
intro: 'To prepare for an upgrade to {% data variables.product.prodname_ghe_server %} 2.14, you''ll need to migrate your indices to Elasticsearch 5.6 with our migration script.'
redirect_from:
  - /enterprise/admin/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-2-14-or-later/
  - /enterprise/admin/guides/installation/migrating-elasticsearch-indices-to-github-enterprise-server-2-14-or-later
  - /enterprise/admin/enterprise-management/migrating-elasticsearch-indices-to-github-enterprise-server-214-or-later
versions:
  enterprise-server: '*'
---

<!-- This guide is here for longevity for support purposes. Please do not delete or add to index.md file-->


{% data variables.product.prodname_ghe_server %} 2.14 includes an upgrade to Elasticsearch 5.6. Before upgrading to {% data variables.product.prodname_ghe_server %} 2.14 or later from 2.12 or 2.13, we recommend you download, install, and run the Elasticsearch migration tools, so your largest indices are migrated online while your appliance still has online access.

### Search indices

The migration script checks for any `search` indices first while the appliance is online. Migrating `search` indices can take a few minutes to a few days, depending on their size. For an example of large indices, these indices took a couple of days to migrate in our test environment.

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

The `search` indices start with:

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

### Webhook indices

After the migration script rebuilds the necessary `search` indices online, the script will check if any `webhook` indices need to be rebuilt. If you've run your appliance with {% data variables.product.prodname_ghe_server %} 2.12 or 2.13 for 14 days or longer, then you likely will not need your `webhook` indices rebuilt since `webhook` indices have a default retention policy of seven days. If you're updating your appliance from {% data variables.product.prodname_enterprise %} 2.11 or earlier, then you may need to rebuild the `webhook` indices.

If any `webhook` indices need to be rebuilt, then you'll be prompted to enable maintenance mode before the script can rebuild the `webhook` indices. Although migrating `webhook` indices requires some downtime, large maintenance windows or downtime is not necessary.

The `webhook` indices start with `hookshot-logs-`.

### Available indices

You can see available indices on your appliance using curl.

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

### Preparing a {% data variables.product.prodname_ghe_server %} 2.12 or 2.13 appliance

If you upgrade to {% data variables.product.prodname_ghe_server %} 2.14 or later without running the migration tools, the existing Elasticsearch indices may be invalid and won't work correctly. To run the Elasticsearch migration script, your {% data variables.product.prodname_ghe_server %} appliance must be running {% data variables.product.prodname_enterprise %} 2.12 or 2.13.

{% warning %}

**Warning:**
- Using {% data variables.product.prodname_enterprise_backup_utilities %} will destroy old Elasticsearch indices not compatible with 5.X after restoring. In this case, manual reindexing could be necessary.
- If {% data variables.product.prodname_ghe_server %} is configured for High Availability, the migration script **must** run while replication is still running. The changes must be allowed to fully replicate to the other appliance before starting the upgrade. If replication is not running while the migration script runs, your Elasticsearch indexes may become invalid.

{% endwarning %}

1. Authenticate to the primary appliance with High Availability enabled using SSH.
2. Download and install the migration script to the appliance:
   ```shell
   $ wget https://github-enterprise.s3.amazonaws.com/util/es-5x-transition-tools.tar.gz
   $ sudo tar -C / -xvf es-5x-transition-tools.tar.gz
   ```
   If you manage a {% data variables.product.prodname_ghe_server %} Cluster, authenticate to one of the Elasticsearch server nodes using SSH and install the migration tools there. Locate them using:
    ```shell
    $ ghe-cluster-each -r elasticsearch -p
    ghe-test-data-0
    ghe-test-data-1
    ghe-test-data-2
    ```
2. Run the migration script:
   ```shell
   $ /usr/local/share/enterprise/ghe-es-5x-migration -r
   ```
 {% note %}

 **Note:** If you have `webhook` indices to migrate, after running the online migrations, you'll be prompted to enable maintenance mode.

 {% endnote %}
3. If you’re running a {% data variables.product.prodname_ghe_server %} Cluster, follow the official upgrade documentation for single VMs or High Availability environments or the cluster upgrade guide. For more information, see "[Upgrading {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)" or "[Upgrading a cluster](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)".
