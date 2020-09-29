---
title: Hochverfügbarkeitskonfiguration wiederherstellen
intro: 'Nachdem Sie ein Failover zur {% data variables.product.prodname_ghe_server %}-Appliance durchgeführt haben, sollten Sie schnellstmöglich die Redundanz zurückerlangen, anstatt sich auf eine einzelne Appliance zu verlassen.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  enterprise-server: '*'
---

Sie können die vorherige primäre Appliance als neue Replikat-Appliance verwenden, sofern das Failover geplant war oder nicht mit dem Appliance-Zustand in Zusammenhang stand. Wenn das Failover mit einem Problem an der primären Appliance zusammenhing, sollten Sie ggf. eine neue Replikat-Appliance erstellen. Weitere Informationen finden Sie unter „[Hochverfügbarkeitsreplikat erstellen](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/)“.

### Vorherige primäre Appliance als neues Replikat konfigurieren

1. Stellen Sie mittels SSH eine Verbindung zur IP-Adresse der vorherigen primären Appliance her.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
2. Führen Sie auf der vorherigen primären Appliance den Befehl `ghe-repl-setup` mit der IP-Adresse des vorherigen Replikats aus.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
4. Führen Sie den Befehl `ghe-repl-setup` erneut aus, um die Verbindung zur neuen primären Instanz zu verifizieren und um den Replikatmodus für das neue Replikat zu aktivieren.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
