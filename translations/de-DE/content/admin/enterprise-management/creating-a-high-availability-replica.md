---
title: Hochverfügbarkeitsreplikat erstellen
intro: 'In einer aktiven/passiven Konfiguration ist die Replikat-Appliance eine redundante Kopie der primären Appliance. Wenn die primäre Appliance ausfällt, ermöglicht der Hochverfügbarkeitsmodus dem Replikat, als primäre Appliance zu fungieren, was eine minimale Dienstunterbrechung ermöglicht.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
versions:
  enterprise-server: '*'
---

### Hochverfügbarkeitsreplikat erstellen

1. Richten Sie eine neue {% data variables.product.prodname_ghe_server %}-Appliance auf Ihrer gewünschten Plattform ein. Die Replikat-Appliance sollte die CPU-, RAM- und Speichereinstellungen der primären Appliance spiegeln. Sie sollten die Replikat-Appliance in einer unabhängigen Umgebung installieren. Die zugrunde liegenden Hardware-, Software und Netzwerkkomponenten sollten von denen der primären Appliance isoliert sein. Wenn Sie einen Cloud-Anbieter verwenden, sollten Sie eine separate Region oder Zone verwenden. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Instanz einrichten](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)“.
2. Navigieren Sie in einem Browser zur IP-Adresse der neuen Replikat-Appliance, und laden Sie Ihre {% data variables.product.prodname_enterprise %}-Lizenz hoch.
3. Legen Sie ein Administratorpasswort fest, das dem Passwort auf der primären Appliance entspricht, und setzen Sie den Vorgang fort.
4. Klicken Sie auf **Configure as Replica** (Als Replikat konfigurieren). ![Installationsoptionen mit einem Link zum Konfigurieren Ihrer neuen Instanz als ein Replikat](/assets/images/enterprise/management-console/configure-as-replica.png)
5. Geben Sie unter „Add new SSH key“ (Neuen SSH-Schlüssel hinzufügen) Ihren SSH-Schlüssel ein.![Option zum Hinzufügen eines SSH-Schlüssels](/assets/images/enterprise/management-console/add-ssh-key.png)
6. Klicken Sie auf **Add key** (Schlüssel hinzufügen) und anschließend auf **Continue** (Fortsetzen).
6. Stellen Sie mittels SSH eine Verbindung zur IP-Adresse der Replikat-Appliance her.
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
7. Führen Sie zum Generieren eines Schlüsselpaars zur Replikation den Befehl `ghe-repl-setup` mit der IP-Adresse der primären Appliance aus, und kopieren Sie den zurückgegebenen öffentlichen Schlüssel.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
9. Führen Sie den Befehl `ghe-repl-setup` erneut aus, um die Verbindung zur primären Instanz zu verifizieren und um den Replikatmodus für das neue Replikat zu aktivieren.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
11. Führen Sie den Befehl `ghe-repl-status` aus, um den Status des Replikationskanals jedes Datenspeichers zu verifizieren.
  ```shell
  $ ghe-repl-status
  ```

### Replikate der Geo-Replikation erstellen

Diese Beispielkonfiguration verwendet eine primäre Instanz und zwei Replikate, die sich in drei unterschiedlichen geografischen Regionen befinden. Obwohl sich die drei Knoten in unterschiedlichen Netzwerken befinden können, müssen alle Knoten über alle anderen Knoten zugänglich sein. Die erforderlichen Verwaltungsports sollten mindestens für alle anderen Knoten geöffnet sein. Weitere Informationen zu den Portanforderungen finden Sie unter „[Netzwerkports](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports/#administrative-ports)“.

1. Erstellen Sie das erste Replikat so, wie Sie eine Standardkonfiguration aus zwei Knoten erstellen würden. Führen Sie dazu den Befehl `ghe-repl-setup` auf dem ersten Replikat aus.
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. Erstellen Sie ein zweites Replikat, und führen Sie den Befehl `ghe-repl-setup --add` aus. Das Flag `--add` verhindert, dass es die vorhandene Replikationskonfiguration überschreibt, und fügt der Konfiguration das neue Replikat hinzu.
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. Standardmäßig sind Replikate für das gleiche Rechenzentrum konfiguriert{% if currentVersion ver_gt "enterprise-server@2.17" %} und versuchen nun, ein Seeding von einem vorhandenen Knoten im gleichen Rechenzentrum aus auszuführen{% endif %}. Konfigurieren Sie die Replikate für unterschiedliche Rechenzentren, indem Sie für die Rechenzentrumsoption einen anderen Wert festlegen. Die entsprechenden Werte sind beliebig, sie müssen sich nur voneinander unterscheiden. Führen Sie den Befehl `ghe-repl-node` auf jedem Knoten aus, und geben Sie das Rechenzentrum an.

  Auf der primären Instanz:
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  Auf dem ersten Replikat:
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  Auf dem zweiten Replikat:
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **Tipp:** Sie können die Optionen `--datacenter` und `--active` gleichzeitig festlegen.

  {% endtip %}
4. Ein aktiver Replikatknoten speichert Kopien der Appliance-Daten und verarbeitet Anforderungen von Endbenutzern. Ein inaktiver Knoten speichert Kopien der Appliance-Daten, kann die Anforderungen von Endbenutzern jedoch nicht verarbeiten. Aktivieren Sie den aktiven Modus mit dem Flag `--active` oder den inaktiven Modus mit dem Flag `--inactive`.

  Auf dem ersten Replikat:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  Auf dem zweiten Replikat:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Führen Sie zum Anwenden der Konfiguration auf der primären Instanz den Befehl `ghe-config-apply` aus.
  ```shell
  (primary)$ ghe-config-apply
  ```

### DNS für Geo-Replikation konfigurieren

Konfigurieren Sie Geo DNS mit den IP-Adressen auf der primären Instanz und auf den Replikatknoten. Sie können auch einen DNS CNAME für den primären Knoten (z. B. `primary.github.example.com`) erstellen, um über SSH auf den primären Knoten zuzugreifen oder ihn mit `backup-utils` zu sichern.

Zu Testzwecken können Sie der Datei `hosts` (z. B. `/etc/hosts`) der lokalen Workstation Einträge hinzufügen. Diese Beispieleinträge lösen Anforderungen für `HOSTNAME` in `replica2` auf. Sie können auf spezifische Hosts abzielen, indem Sie unterschiedliche Zeilen auskommentieren.

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

### Weiterführende Informationen

- „[Informationen zur Hochverfügbarkeitskonfiguration](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration)“
- „[Dienstprogramme zur Replikationsverwaltung](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)“
- „[Informationen zur Geo-Replikation](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)“
