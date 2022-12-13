---
title: GitHub Enterprise Server auf Google Cloud Platform installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} auf Google Cloud Platform zu installieren, musst die Bereitstellung auf einem unterstützten Computertyp erfolgen und ein persistenter Standarddatenträger oder einem persistenten SSD verwendet werden.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: 0fffebece94753365e1b98f014f0514cdef4f98a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104859'
---
## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst über ein Google Cloud Platform-Konto verfügen, mit dem VM-Instanzen (virtuelle Maschine) in Google Compute Engine (GCE) gestartet werden können. Weitere Informationen findest du auf der [Google Cloud Platform-Website](https://cloud.google.com/) und in der [Dokumentation zu Google Cloud Platform](https://cloud.google.com/docs/).
- Die meisten zum Starten deiner Instanz erforderlichen Aktionen können auch mithilfe der [Google Cloud Console](https://cloud.google.com/compute/docs/console) ausgeführt werden. Zur Ersteinrichtung solltest du jedoch das Befehlszeilentool „gcloud compute“ installieren. Im Folgenden findest du Beispiele zur Verwendung des Befehlszeilentools „gcloud compute“. Weitere Informationen findest du in der Google-Dokumentation im Installations- und Setupleitfaden für [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Maschinentyp bestimmen

Bevor du {% data variables.product.product_location %} auf Google Cloud Platform startest, musst du den Computertyp ermitteln, der den Anforderungen deiner Organisation am besten entspricht. Informationen zun den Mindestanforderungen für {% data variables.product.product_name %} findest du unter [Mindestanforderungen](#minimum-requirements).

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} empfiehlt für {% data variables.product.prodname_ghe_server %} einen universellen Computer mit hoher Speicherkapazität. Weitere Informationen findest du in der Dokumentation von Google Compute Engine unter [Computertypen](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types).

## {% data variables.product.prodname_ghe_server %}-Image auswählen

1. Liste mithilfe des Befehlszeilentools [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) die öffentlichen {% data variables.product.prodname_ghe_server %}-Images auf:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Notiere dir den Image-Namen für das neueste GCE-Image von {% data variables.product.prodname_ghe_server %}.

## Konfigurieren der Firewall

GCE-VMs werden als Mitglied eines Netzwerks erstellt, das eine Firewall besitzt. Für das der {% data variables.product.prodname_ghe_server %}-VM zugeordnete Netzwerk musst du die Firewall so konfigurieren, dass die in der folgenden Tabelle aufgelisteten erforderlichen Ports zugelassen werden. Weitere Informationen zu Firewallregeln auf Google Cloud Platform findest du im Google-Leitfaden [Übersicht über VPC-Firewallregeln](https://cloud.google.com/vpc/docs/firewalls).

1. Erstelle mithilfe des Befehlszeilentools „gcloud compute“ das Netzwerk. Weitere Informationen findest du in der Google-Dokumentation unter [gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create).
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. Erstelle eine Firewallregel für jeden der Ports in der folgenden Tabelle. Weitere Informationen findest du in der Google-Dokumentation unter [gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/).
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   Diese Tabelle zeigt die erforderlichen Ports und wofür sie verwendet werden.

   {% data reusables.enterprise_installation.necessary_ports %}

## Statische IP zuordnen und mit der VM verknüpfen

Wenn es sich hierbei um eine Produktions-Appliance handelt, wird dringend empfohlen, eine statische externe IP-Adresse zu reservieren und sie der {% data variables.product.prodname_ghe_server %}-VM zuzuordnen. Andernfalls wird die öffentliche IP-Adresse der VM nach Neustarts nicht beibehalten. Weitere Informationen findest du im Google-Leitfaden [Reservieren einer statischen externen IP-Adresse](https://cloud.google.com/compute/docs/configure-instance-ip-addresses).

In Hochverfügbarkeitskonfigurationen in der Produktion sollten primären und Replikat-Appliances separate statische IP-Adressen zugewiesen werden.

## {% data variables.product.prodname_ghe_server %}-Instanz erstellen

Zum Erstellen der {% data variables.product.prodname_ghe_server %}-Instanz musst du eine GCE-Instanz mit deinem {% data variables.product.prodname_ghe_server %}-Image erstellen und ein zusätzliches Storage-Volume für deine Instanzdaten anhängen. Weitere Informationen findest du unter [Grundlegendes zur Hardware](#hardware-considerations).

1. Erstelle mit Hilfe des Befehlszeilen-Werkzeugs gcloud einen Datenträger, der als angehängtes Speicher-Volume für deine Instanzdaten dient, und konfiguriere die Größe entsprechend der Anzahl deiner Benutzerlizenzen. Weitere Informationen findest du in der Google-Dokumentation unter [gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create).
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. Erstelle anschließend eine Instanz mit dem Namen des von dir ausgewählten {% data variables.product.prodname_ghe_server %}-Images, und hänge die Daten-Disk an. Weitere Informationen findest du in der Google-Dokumentation unter [gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create).
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

## Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Weitere Informationsquellen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
