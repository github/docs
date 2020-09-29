---
title: GitHub Enterprise Server auf Azure installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} auf Azure zu installieren, müssen Sie es auf einer Instanz der DS-Reihe bereitstellen und Premium-LRS-Storage verwenden.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
versions:
  enterprise-server: '*'
---

Sie können {% data variables.product.prodname_ghe_server %} auf Global Azure oder Azure Government bereitstellen.

### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen über ein Azure-Konto verfügen, das neue Computer bereitstellen kann. Weitere Informationen finden Sie auf der „[Microsoft Azure-Website](https://azure.microsoft.com)“.
- Die meisten Aktionen, die zum Starten Ihrer virtuellen Maschine (VM) erforderlich sind, können auch mithilfe des Azure-Portals ausgeführt werden. Zur Ersteinrichtung sollten Sie jedoch die Azure-Befehlszeilenschnittstelle (CLI) installieren. Im Folgenden finden Sie Beispiele zur Verwendung der Azure CLI 2.0. Weitere Informationen finden Sie im Azure-Leitfaden „[Installieren der Azure CLI](https://docs.microsoft.com/de-de/cli/azure/install-azure-cli?view=azure-cli-latest)“.

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Typ der virtuellen Maschine ermitteln

Bevor Sie {% data variables.product.product_location_enterprise %} auf Azure starten, müssen Sie den Typ der virtuellen Maschine ermitteln, der den Anforderungen Ihrer Organisation am besten gerecht wird.

#### Unterstützte VM-Typen und -Regionen

Für die {% data variables.product.prodname_ghe_server %}-Appliance ist eine Premium-Storage-Daten-Disk erforderlich. Zudem wird sie auf jeder Azure-VM unterstützt, die Premium-Storage unterstützt. Weitere Informationen finden Sie unter „[SSD Premium](https://docs.microsoft.com/en-us/azure/storage/common/storage-premium-storage#supported-vms)“ in der Azure-Dokumentation. Allgemeine Informationen zu den verfügbaren VMs finden Sie auf der Übersichtsseite zu [Azure-VMs](https://azure.microsoft.com/de-de/pricing/details/virtual-machines/linux/#Linux).

{% data variables.product.prodname_ghe_server %} unterstützt jede Region, die Ihren VM-Typ unterstützt. Weitere Informationen zu den unterstützten Regionen für jede VM finden Sie auf der Azure-Website „[Verfügbare Produkte nach Region](https://azure.microsoft.com/de-de/regions/services/)“.

#### Empfohlene VM-Typen

Sie sollten einen DS v2-Instanztyp mit mindestens 14 GB RAM verwenden. Sie können jeden unterstützten VM-Typ verwenden. Basierend auf der Anzahl Deiner Benutzerlizenzen empfehlen wir die folgenden Instanztypen.

|                          Benutzer                          |  Empfohlener Typ   |
|:----------------------------------------------------------:|:------------------:|
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen | Standard_DS11_v2 |
|                          10–3000                           | Standard_DS12_v2 |
|                         3000–8000                          | Standard_DS14_v2 |
|                        8000–10000+                         | Standard_DS15_v2 |

{% data reusables.enterprise_installation.warning-on-scaling %}

### {% data variables.product.prodname_ghe_server %}-VM erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Suchen Sie nach dem neuesten {% data variables.product.prodname_ghe_server %}-Appliance-Image. Weitere Informationen zum Befehl `vm image list` finden Sie unter „[az vm image list](https://docs.microsoft.com/en-us/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)“ in der Microsoft-Dokumentation.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Erstellen Sie mithilfe des von Ihnen ermittelten Appliance-Images eine neue VM. Weitere Informationen finden Sie unter „[az vm create](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az_vm_create)“ in der Microsoft-Dokumentation.

  Übergeben Sie Optionen für den Namen Ihrer VM, den Ressourcentyp, die Größe Ihrer VM, den Namen Ihrer bevorzugten Azure-Region, den Namen der von Ihnen im vorherigen Schritt aufgelisteten Appliance-Image-VM und die Storage-SKU für den Premium-Storage. Weitere Informationen zu Ressourcengruppen finden Sie unter „[Ressourcengruppen](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups)“ in der Microsoft-Dokumentation.

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. Konfigurieren Sie die Sicherheitseinstellungen auf Ihrer VM, um die erforderlichen Ports zu öffnen. Weitere Informationen finden Sie unter „[az vm open-port](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)“ in der Microsoft-Dokumentation. In der folgenden Tabelle finden Sie eine Beschreibung der einzelnen Ports, um festzustellen, welche Ports Sie öffnen müssen.

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  Diese Tabelle zeigt, wofür jeder Port verwendet wird.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Erstelle eine neue unverschlüsselte Daten-Festplatte, hänge sie an die VM und konfiguriere die Größe entsprechend Deiner Anzahl von Benutzerlizenzen. Weitere Informationen finden Sie unter „[az vm disk attach](https://docs.microsoft.com/en-us/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)“ in der Microsoft-Dokumentation.

  Übergeben Sie Optionen für den Namen Ihrer VM (z. B. `ghe-acme-corp`), die Ressourcengruppe, die Premium-Storage-SKU, die Größe der Disk (z. B. `100`) und einen Namen für die resultierende VHD.

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Hinweis:** Damit Nicht-Produktionsinstanzen einen ausreichenden E/A-Durchsatz aufweisen, wird eine minimale Disk-Größe von 40 GiB mit aktiviertem Lese-/Schreib-Caching (`--caching ReadWrite`) empfohlen.

   {% endnote %}

### {% data variables.product.prodname_ghe_server %}-VM konfigurieren

1. Vor der VM-Konfiguration müssen Sie darauf warten, dass sie den Status „ReadyRole“ aufweist. Führen Sie den Befehl `vm list` aus, um den Status der VM zu überprüfen. Weitere Informationen finden Sie unter „[az vm list](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az_vm_list)“ in der Microsoft-Dokumentation.
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

  ```
  {% note %}

  **Hinweis:** Azure erstellt nicht automatisch einen FQDN-Eintrag für die VM. Weitere Informationen finden Sie im Azure-Leitfaden „[Erstellen eines vollqualifizierten Domänennamens im Azure-Portal für eine Linux-VM](https://docs.microsoft.com/de-de/azure/virtual-machines/linux/portal-create-fqdn)“.

  {% endnote %}

  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
  {% data reusables.enterprise_installation.upload-a-license-file %}
  {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
  {% data reusables.enterprise_installation.instance-will-restart-automatically %}
  {% data reusables.enterprise_installation.visit-your-instance %}


  ### Weiterführende Informationen

  - „[Systemübersicht](/enterprise/admin/guides/installation/system-overview)“
  
