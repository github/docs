---
title: Clusterknoten überwachen
intro: 'Ein {% data variables.product.prodname_ghe_server %}-Cluster besteht aus redundanten Diensten, die auf mindestens zwei Knoten verteilt sind. Wenn ein einzelner Dienst oder ein gesamter Knoten fehlschlägt, sollte dies den Benutzern des Clusters sofort auffallen. Da jedoch Leistung und Redundanz betroffen sind, ist es wichtig, den Zustand eines {% data variables.product.prodname_ghe_server %}-Clusters zu überwachen.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---
### Clusterstatus manuell überprüfen

{% data variables.product.prodname_ghe_server %} besitzt ein integriertes Befehlszeilendienstprogramm zum Überwachen des Clusterzustands. Wenn in der Verwaltungsshell der Befehl `ghe-cluster-status` ausgeführt wird, werden einige Zustandsprüfungen auf jedem Knoten ausgeführt, darunter die Verifizierung der Konnektivität und des Dienststatus. Die Ausgabe enthält alle Testergebnisse, darunter der Text `ok` oder `error`. Führen Sie beispielsweise Folgendes aus, um nur fehlgeschlagene Tests anzuzeigen:

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Hinweis:** Wenn keine fehlgeschlagenen Tests vorliegen, gibt dieser Befehl nichts aus. Dies gibt an, dass der Cluster fehlerfrei ist.

{% endnote %}

### Clusterstatus mit Nagios überwachen

Sie können [Nagios](https://www.nagios.org/) für die Überwachung von {% data variables.product.prodname_ghe_server %} konfigurieren. Zusätzlich zur Überwachung der grundlegenden Konnektivität jedes Clusterknotens können Sie den Clusterstatus überprüfen, indem Sie Nagios für die Verwendung des Befehls `ghe-cluster-status -n` konfigurieren. Dadurch wird eine für Nagios verständliche Ausgabe zurückgegeben.

#### Vorrausetzungen
* Linux-Host, auf dem Nagios ausgeführt wird.
* Netzwerkzugriff auf den {% data variables.product.prodname_ghe_server %}-Cluster.

#### Nagios-Host konfigurieren
1. Generieren Sie einen SSH-Schlüssel mit einer leeren Passphrase. Nagios verwendet diese, um sich beim {% data variables.product.prodname_ghe_server %}-Cluster zu authentifizieren.
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

  **Sicherheitswarnung:** Ein SSH-Schlüssel ohne eine Passphrase kann ein Sicherheitsrisiko darstellen, wenn er für den vollen Zugriff auf einen Host berechtigt ist. Begrenzen Sie die Autorisierung dieses Schlüssels auf einen einzelnen schreibgeschützten Befehl.

  {% enddanger %}
  {% note %}

  **Note:** If you're using a distribution of Linux that doesn't support the Ed25519 algorithm, use the command:
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Copy the private key (`id_ed25519`) to the `nagios` home folder and set the appropriate ownership.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. Verwenden Sie das Präfix `command=` in der Datei `/data/user/common/authorized_keys`, um den öffentlichen Schlüssel *nur* für den Befehl `ghe-cluster-status -n` zu autorisieren. Ändern Sie in der Verwaltungsshell oder auf einem beliebigen Knoten diese Datei, um den in Schritt 1 generierten öffentlichen Schlüssel hinzuzufügen. For example: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Validieren und kopieren Sie die Konfiguration auf jeden Knoten im Cluster. Führen Sie dazu `ghe-cluster-config-apply` auf dem Knoten aus, auf dem Sie die Datei `/data/user/common/authorized_keys` geändert haben.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Um zu testen, ob das Nagios-Plug-in den Befehl erfolgreich ausführen kann, führen Sie es auf dem Nagios-Host interaktiv aus.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Erstellen Sie eine Befehlsdefinition in Ihrer Nagios-Konfiguration.

  ###### Beispieldefinition

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Fügen Sie diesen Befehl zu einer Dienstdefinition für einen Knoten im {% data variables.product.prodname_ghe_server %}-Cluster hinzu.


  ###### Beispieldefinition

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

Nachdem Sie Nagios die Definition hinzugefügt haben, wird die Dienstüberprüfung entsprechend Ihrer Konfiguration ausgeführt. Sie sollten den neu konfigurierten Dienst auf der Nagios-Weboberfläche anzeigen können.

![Nagios-Beispiel](/assets/images/enterprise/cluster/nagios-example.png)
