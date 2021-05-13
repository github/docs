---
title: Cluster initialisieren
intro: 'Ein {% data variables.product.prodname_ghe_server %}-Cluster muss mit einer Lizenz eingerichtet und mithilfe der Verwaltungsshell (SSH) initialisiert werden.'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### {% data variables.product.prodname_ghe_server %} installieren

1. Stellen Sie auf jedem Clusterknoten {% data variables.product.prodname_ghe_server %} bereit, und installieren Sie es. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Instanz einrichten](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)“.
2. Konfigurieren Sie mithilfe der Verwaltungsshell oder DHCP **nur** die IP-Adresse jedes Knotens. Konfigurieren Sie keine anderen Einstellungen.

### Ersten Knoten konfigurieren

1. Stellen Sie eine Verbindung zum Knoten her, der als `mysql-master` in `cluster.conf` vorgesehen ist. Weitere Informationen findest Du unter „[Informationen zur Clusterkonfigurations-Datei](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)“.
2. Rufen Sie in Ihrem Webbrowser `https://<ip address>:8443/setup/` auf.
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}
{% data reusables.enterprise_installation.instance-will-restart-automatically %}

### Cluster initialisieren

Zum Initialisieren des Clusters benötigen Sie eine Clusterkonfigurationsdatei (`cluster.conf`). Weitere Informationen finden Sie unter „[Informationen zur Clusterkonfigurationsdatei](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)“.

1. Führen Sie auf dem ersten Knoten, der konfiguriert wurde, `ghe-cluster-config-init` aus.  Dadurch wird der Cluster initialisiert, wenn in der Clusterkonfigurationsdatei nicht konfigurierte Knoten vorhanden sind.
2. Führen Sie `ghe-cluster-config-apply` aus. Dadurch wird die Datei `cluster.conf` validiert, die Konfiguration auf jede Knotendatei angewendet und die konfigurierten Dienste auf jedem Knoten angezeigt.

Führen Sie den Befehl `ghe-cluster-status` aus, um den Status eines in Ausführung befindlichen Clusters zu überprüfen.

### Informationen zur Clusterkonfigurationsdatei

Die Clusterkonfigurationsdatei (`cluster.conf`) definiert die Knoten im Cluster und welche Dienste sie ausführen. Weitere Informationen findest Du unter [„About cluster nodes“ (Informationen zu Cluster-Knoten)](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-cluster-nodes).

Diese Beispieldatei `cluster.conf` definiert einen Cluster mit fünf Knoten.

  - Auf zwei Knoten (namens `ghe-app-node-\*`) laufen die Dienste `web-server` und `job-server` deren Aufgabe es ist, die Clientanfragen zu beantworten.
  - Drei Knoten (namens `ghe-data-node-\*`) führen die Dienste aus, die zum Speichern und Abrufen der {% data variables.product.prodname_ghe_server %}-Daten verantwortlich sind.

Die Namen der Knoten können beliebige gültige Hostnamen sein. Die Namen werden als der Hostname jedes Knotens festgelegt und zudem `/etc/hosts` auf jedem Knoten hinzugefügt, damit die Knoten untereinander lokal auflösbar sind.

Geben Sie den ersten Clusterknoten an, den Sie als den MySQL-Master über `mysql-server` und `mysql-master` konfiguriert haben.

```ini
[cluster]
  mysql-master = ghe-data-node-1
  redis-master = ghe-data-node-1
  primary-datacenter = default
[cluster "ghe-app-node-1"]
  hostname = ghe-app-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  web-server = true
  job-server = true
[cluster "ghe-app-node-2"]
  hostname = ghe-app-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  web-server = true
  job-server = true
[cluster "ghe-data-node-1"]
  hostname = ghe-data-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-2"]
  hostname = ghe-data-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-3"]
  hostname = ghe-data-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
```

Erstellen Sie die Datei `/data/user/common/cluster.conf` auf dem konfigurierten ersten Knoten. Führen Sie beispielsweise mit `vim` Folgendes aus:

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
   
