---
title: ElasticSearch-Indizes zu GitHub Enterprise Server 2.14 oder höher migrieren
intro: 'Als Vorbereitung für ein Upgrade auf {% data variables.product.prodname_ghe_server %} 2.14 müssen Sie Ihre Indizes mit unserem Migrationsskript zu ElasticSearch 5.6 migrieren.'
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

### Suchindizes

Das Migrationsskript sucht zunächst nach `Suchindizes`, während die Appliance online ist. Die Migration der `Suchindizes` kann je nach ihrer Größe zwischen wenigen Minuten und einigen Tagen in Anspruch nehmen. Beispielsweise nahm die Migration großer Indizes in unserer Testumgebung mehrere Tage in Anspruch.

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

Die `Suchindizes` beginnen mit:

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

### Webhook-Indizes

Nachdem das Migrationsskript die erforderlichen `Suchindizes` online neu erstellt hat, überprüft das Skript, ob `Webhook`-Indizes neu erstellt werden müssen. Wenn die Ausführung Ihrer Appliance mit {% data variables.product.prodname_ghe_server %} 2.12 oder 2.13 mindestens 14 Tage gedauert hat, benötigen Sie Ihre `Webhook`-Indizes wahrscheinlich nicht, da `Webhook`-Indizes eine standardmäßige Aufbewahrungsrichtlinie von sieben Tagen aufweisen. Wenn Sie Ihre Appliance von {% data variables.product.prodname_enterprise %} 2.11 oder früher aktualisieren, dann müssen Sie die `Webhook`-Indizes möglicherweise neu erstellen.

Wenn `Webhook`-Indizes neu erstellt werden müssen, werden Sie aufgefordert, den Wartungsmodus zu aktivieren, bevor das Skript die `Webhook`-Indizes neu erstellen kann. Obwohl die Migration von `Webhook`-Indizes zu einer gewissen Ausfallzeit führt, sind keine ausgedehnten Wartungsfenster oder Ausfallzeiten nötig.

Die `Webhook`-Indizes beginnen mit `hookshot-logs-`.

### Verfügbare Indizes

Mittels „curl“ können Sie die auf Ihrer Appliance verfügbaren Indizes anzeigen.

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

### {% data variables.product.prodname_ghe_server %}-Appliance der Version 2.12 oder 2.13 vorbereiten

Wenn Sie ein Upgrade auf {% data variables.product.prodname_ghe_server %} 2.14 oder höher durchführen, ohne die Migrationstools auszuführen, sind die vorhandenen ElasticSearch-Indizes möglicherweise ungültig und funktionieren nicht richtig. Zum Ausführen des ElasticSearch-Migrationsskripts muss Ihre {% data variables.product.prodname_ghe_server %}-Appliance Version 2.12 oder 2.13 von {% data variables.product.prodname_enterprise %} ausführen.

{% warning %}

**Warnung:**
- Bei der Verwendung von {% data variables.product.prodname_enterprise_backup_utilities %} werden nach der Wiederherstellung alte ElasticSearch-Indizes vernichtet, die nicht mit 5.X kompatibel sind. In diesem Fall wäre eine manuelle Neuindizierung erforderlich.
- Wenn {% data variables.product.prodname_ghe_server %} für die Hochverfügbarkeit konfiguriert ist, **muss** das Migrationsskript während der Ausführung der Replikation ausgeführt werden. Es muss zugelassen werden, dass die Änderungen vollständig mit der anderen Appliance repliziert werden, bevor das Upgrade gestartet wird. Wenn die Replikation während der Ausführung des Migrationsskripts nicht ausgeführt wird, werden Ihre ElasticSearch-Indizes möglicherweise ungültig.

{% endwarning %}

1. Authentifizieren Sie sich mittels SSH mit aktivierter Hochverfügbarkeit bei der primären Appliance.
2. Laden Sie das Migrationsskript auf die Appliance herunter, und installieren Sie es:
   ```shell
   $ wget https://github-enterprise.s3.amazonaws.com/util/es-5x-transition-tools.tar.gz
   $ sudo tar -C / -xvf es-5x-transition-tools.tar.gz
   ```
   Wenn Sie einen {% data variables.product.prodname_ghe_server %}-Cluster verwalten, authentifizieren Sie sich mittels SSH bei einem der ElasticSearch-Serverknoten, und installieren Sie dort die Migrationstools. Suchen Sie sie wie folgt:
    ```shell
    $ ghe-cluster-each -r elasticsearch -p
    ghe-test-data-0
    ghe-test-data-1
    ghe-test-data-2
    ```
2. Führen Sie das Migrationsskript aus:
   ```shell
   $ /usr/local/share/enterprise/ghe-es-5x-migration -r
   ```
 {% note %}

 **Hinweis:** Wenn `Webhook`-Indizes migriert werden sollen, werden Sie nach dem Ausführen der Online-Migrationen aufgefordert, den Wartungsmodus zu aktivieren.

 {% endnote %}
3. Wenn Sie einen {% data variables.product.prodname_ghe_server %}-Cluster ausführen, sollten Sie die offizielle Upgrade-Dokumentation für einzelne VMs oder Hochverfügbarkeitsumgebungen oder den Leitfaden zum Cluster-Upgrade befolgen. Weitere Informationen finden Sie unter „[Upgrade von {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)“ oder „[Cluster-Upgrade](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)“.
