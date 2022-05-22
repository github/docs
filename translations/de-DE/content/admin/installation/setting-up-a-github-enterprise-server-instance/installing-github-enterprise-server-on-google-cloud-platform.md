---
title: GitHub Enterprise Server auf Google Cloud Platform installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} auf Google Cloud Platform zu installieren, müssen Sie es auf einem unterstützten Maschinentyp bereitstellen und eine persistente Standard-Disk oder ein persistentes SSD verwenden.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---
### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen über ein Google Cloud Platform-Konto verfügen, mit dem VM-Instanzen (virtuelle Maschine) in Google Compute Engine (GCE) gestartet werden können. Weitere Informationen finden Sie auf der „[Google Cloud Platform-Website](https://cloud.google.com/) und in der [Google Cloud Platform-Dokumentation](https://cloud.google.com/docs/)“.
- Die meisten Aktionen, die zum Starten Ihrer Instanz erforderlich sind, können auch mit der [Google Cloud Platform Console](https://cloud.google.com/compute/docs/console) ausgeführt werden. Zur Ersteinrichtung sollten Sie jedoch das Befehlszeilentool „gcloud compute“ installieren. Im Folgenden finden Sie Beispiele zur Verwendung des Befehlszeilentools „gcloud compute“. Weitere Informationen finden Sie in der Google-Dokumentation zur Installations- und Einrichtungsanleitung für „[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)“.

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Maschinentyp bestimmen

Bevor Sie {% data variables.product.product_location %} auf Google Cloud Platform starten, müssen Sie den Maschinentyp ermitteln, der den Anforderungen Ihrer Organisation am besten gerecht wird. To review the minimum requirements for {% data variables.product.product_name %}, see "[Minimum requirements](#minimum-requirements)."

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} recommends a general-purpose, high-memory machine for {% data variables.product.prodname_ghe_server %}. For more information, see "[Machine types](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types)" in the Google Compute Engine documentation.

### {% data variables.product.prodname_ghe_server %}-Image auswählen

1. Listen Sie mithilfe des Befehlszeilentools [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) die öffentlichen {% data variables.product.prodname_ghe_server %}-Images auf:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Notieren Sie sich den Image-Namen für das neueste GCE-Image von {% data variables.product.prodname_ghe_server %}.

### Firewall konfigurieren

GCE-VMs werden als Mitglied eines Netzwerks erstellt, das eine Firewall besitzt. Für das der {% data variables.product.prodname_ghe_server %}-VM zugeordnete Netzwerk müssen Sie die Firewall so konfigurieren, dass die in der folgenden Tabelle aufgelisteten erforderlichen Ports zugelassen werden. Weitere Informationen zu den Firewallregeln auf Google Cloud Platform finden Sie im Leitfaden „[Übersicht über Firewallregeln](https://cloud.google.com/vpc/docs/firewalls)“.

1. Erstellen Sie mithilfe des Befehlszeilentools „gcloud compute“ das Netzwerk. Weitere Informationen finden Sie unter „[gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)“ in der Google-Dokumentation.
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. Erstellen Sie eine Firewallregel für jeden der Ports in der folgenden Tabelle. Weitere Informationen finden Sie unter „[gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)“ in der Google-Dokumentation.
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   Diese Tabelle zeigt die erforderlichen Ports und wofür sie verwendet werden.

   {% data reusables.enterprise_installation.necessary_ports %}

### Statische IP zuordnen und mit der VM verknüpfen

Wenn es sich hierbei um eine Produktions-Appliance handelt, wird dringend empfohlen, eine statische externe IP-Adresse zu reservieren und sie der {% data variables.product.prodname_ghe_server %}-VM zuzuordnen. Andernfalls wird die öffentliche IP-Adresse der VM nach Neustarts nicht beibehalten. Weitere Informationen finden Sie im Google-Leitfaden unter „[Statische externe IP-Adresse reservieren](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)“.

In Hochverfügbarkeitskonfigurationen in der Produktion sollten primären und Replikat-Appliances separate statische IP-Adressen zugewiesen werden.

### {% data variables.product.prodname_ghe_server %}-Instanz erstellen

Zum Erstellen der {% data variables.product.prodname_ghe_server %}-Instanz müssen Sie eine GCE-Instanz mit Ihrem {% data variables.product.prodname_ghe_server %}-Image erstellen und ein zusätzliches Storage-Volume für Ihre Instanzdaten anhängen. Weitere Informationen finden Sie unter „[Grundlegendes zur Hardware](#hardware-considerations)“.

1. Erstelle mit Hilfe des Befehlszeilen-Werkzeugs gcloud einen Datenträger, der als angehängtes Speicher-Volume für Deine Instanzdaten dient, und konfiguriere die Größe entsprechend der Anzahl Deiner Benutzerlizenzen. Weitere Informationen finden Sie unter „[gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)“ in der Google-Dokumentation.
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. Erstellen Sie anschließend eine Instanz mit dem Namen des von Ihnen ausgewählten {% data variables.product.prodname_ghe_server %}-Images, und hängen Sie die Daten-Disk an. Weitere Informationen finden Sie unter „[gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)“ in der Google-Dokumentation.
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

### Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Weiterführende Informationen

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
