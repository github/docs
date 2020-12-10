---
title: Hochverfügbarkeitsreplikat entfernen
intro: 'Sie können die Replikation zu einem {% data variables.product.prodname_ghe_server %}-Replikat temporär stoppen oder die Replikation dauerhaft entfernen.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
versions:
  enterprise-server: '*'
---

### Temporäres Stoppen der Replikation

1. Stoppen Sie bei Bedarf, dass ein Replikat der Geo-Replikation den Benutzer-Traffic bedient, indem Sie die Geo DNS-Einträge für das Replikat entfernen.
2. Führen Sie auf dem Replikat, auf dem Sie die Replikation temporär stoppen möchten, den Befehl „ghe-repl-stop“ aus.
  ```shell
  $ ghe-repl-stop
  ```
3. Führen Sie den Befehl `ghe-repl-start` aus, um die Replikation erneut zu starten.
  ```shell
  $ ghe-repl-start
  ```

### Dauerhaftes Entfernen der Replikation

1. Stoppen Sie bei Bedarf, dass ein Replikat der Geo-Replikation den Benutzer-Traffic bedient, indem Sie die Geo DNS-Einträge für das Replikat entfernen.
2. Führen Sie auf dem Replikat, auf dem die Replikation entfernt werden soll, den Befehl `ghe-repl-stop` aus.
  ```shell
  $ ghe-repl-stop
  ```
3. Führen Sie auf dem Replikat zum Entfernen des Replikationszustands den Befehl `ghe-repl-teardown` aus.
  ```shell
  $ ghe-repl-teardown
  ```
