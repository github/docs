---
title: Clusterknoten überwachen
intro: 'Ein {% data variables.product.prodname_ghe_server %}-Cluster besteht aus redundanten Diensten, die auf mindestens zwei Knoten verteilt sind. Wenn bei einem einzelnen Dienst oder einem gesamten Knoten ein Fehler auftritt, sollte dies den Benutzern des Clusters sofort auffallen. Da jedoch Leistung und Redundanz betroffen sind, ist es wichtig, den Zustand eines {% data variables.product.prodname_ghe_server %}-Clusters zu überwachen.'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
  - /admin/enterprise-management/monitoring-cluster-nodes
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: a5cab340f84d572a0a8e549d942b7b52ef522733
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145106895'
---
## Clusterstatus manuell überprüfen

{% data variables.product.prodname_ghe_server %} besitzt ein integriertes Befehlszeilendienstprogramm zum Überwachen des Clusterzustands. Wenn in der Verwaltungsshell der Befehl `ghe-cluster-status` ausgeführt wird, werden einige Zustandsprüfungen auf jedem Knoten ausgeführt, darunter die Verifizierung der Konnektivität und des Dienststatus. Die Ausgabe zeigt alle Testergebnisse einschließlich der Texte `ok` oder `error` an. Führe beispielsweise Folgendes aus, um nur fehlgeschlagene Tests anzuzeigen:

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**Hinweis**: Wenn keine fehlerhaften Tests vorliegen, gibt dieser Befehl nichts aus. Dies gibt an, dass der Cluster fehlerfrei ist.

{% endnote %}

## Clusterstatus mit Nagios überwachen

Du kannst [Nagios](https://www.nagios.org/) für die Überwachung von {% data variables.product.prodname_ghe_server %} konfigurieren. Zusätzlich zur Überwachung der grundlegenden Konnektivität jedes Clusterknotens kannst du den Clusterstatus überprüfen, indem du Nagios für die Verwendung des Befehls `ghe-cluster-status -n` konfigurierst. Dadurch wird eine für Nagios verständliche Ausgabe zurückgegeben.

### Voraussetzungen
* Linux-Host, auf dem Nagios ausgeführt wird.
* Netzwerkzugriff auf den {% data variables.product.prodname_ghe_server %}-Cluster.

### Nagios-Host konfigurieren
1. Generiere einen SSH-Schlüssel mit einer leeren Passphrase. Nagios verwendet diese, um sich beim {% data variables.product.prodname_ghe_server %}-Cluster zu authentifizieren.
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

  **Sicherheitswarnung**: Ein SSH-Schlüssel ohne Passphrase kann ein Sicherheitsrisiko darstellen, wenn er für den Vollzugriff auf einen Host berechtigt ist. Begrenze die Autorisierung dieses Schlüssels auf einen einzelnen schreibgeschützten Befehl.

  {% enddanger %} {% note %}

  **Hinweis**: Wenn du eine Linux-Distribution verwendest, die den Ed25519-Algorithmus nicht unterstützt, verwende den folgenden Befehl:
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. Kopiere den privaten Schlüssel (`id_ed25519`) in den Startordner `nagios` und lege den entsprechenden Besitz fest.
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. Um den öffentlichen Schlüssel *nur* für die Ausführung des Befehls `ghe-cluster-status -n` zu autorisieren, verwende ein `command=`-Präfix in der Datei `/data/user/common/authorized_keys`. Ändere in der Verwaltungsshell oder auf einem beliebigen Knoten diese Datei, um den in Schritt 1 generierten öffentlichen Schlüssel hinzuzufügen. Beispiel: `command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. Überprüfe die Konfiguration und kopiere sie auf jeden Knoten im Cluster, indem du `ghe-cluster-config-apply` auf dem Knoten ausführst, auf dem du die Datei `/data/user/common/authorized_keys` geändert hast.

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. Um zu testen, ob das Nagios-Plug-in den Befehl erfolgreich ausführen kann, führe es auf dem Nagios-Host interaktiv aus.
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. Erstelle eine Befehlsdefinition in deiner Nagios-Konfiguration.
  ###### Beispieldefinition

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. Füge diesen Befehl zu einer Dienstdefinition für einen Knoten im {% data variables.product.prodname_ghe_server %}-Cluster hinzu.

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

Nachdem du Nagios die Definition hinzugefügt hast, wird die Dienstüberprüfung entsprechend deiner Konfiguration ausgeführt. Du solltest den neu konfigurierten Dienst auf der Nagios-Weboberfläche anzeigen können.

![Nagios-Beispiel](/assets/images/enterprise/cluster/nagios-example.png)
