---
title: GitHub Enterprise Server auf Azure installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} in Azure zu installieren, musst du eine speicheroptimierte Instanz bereitstellen, die Storage Premium unterstützt.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 7d5d1024083e448785ca1429ffd71e343e7cd507
ms.sourcegitcommit: 152a2399e22f476eba91a74d1980b96f468f4d2c
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160865'
---
Du kannst {% data variables.product.prodname_ghe_server %} auf Global Azure oder Azure Government bereitstellen.

## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst über ein Azure-Konto verfügen, das neue Computer bereitstellen kann. Weitere Informationen findest du auf der [Microsoft Azure-Website](https://azure.microsoft.com).
- Die meisten Aktionen, die zum Starten deines virtuellen Computers (VM) erforderlich sind, können auch mithilfe des Azure-Portals ausgeführt werden. Zur Ersteinrichtung solltest du jedoch die Azure-Befehlszeilenschnittstelle (CLI) installieren. Im Folgenden findest du Beispiele zur Verwendung der Azure CLI 2.0. Weitere Informationen findest du im Azure-Leitfaden zum [Installieren von Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Typ der virtuellen Maschine ermitteln

Bevor du {% data variables.location.product_location %} auf Azure startest, musst du den Computertyp ermitteln, der den Anforderungen deiner Organisation am besten entspricht. Weitere Informationen zu arbeitsspeicheroptimierten Computern findest du in der Microsoft Azure-Dokumentation unter [Arbeitsspeicheroptimierte VM-Größen](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory). Informationen zum Überprüfen der Mindestanforderungen an Ressourcen für {% data variables.product.product_name %} findest du unter [Mindestanforderungen](#minimum-requirements).


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## {% data variables.product.prodname_ghe_server %}-VM erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Suche nach dem neuesten {% data variables.product.prodname_ghe_server %}-Appliance-Image. Weitere Informationen zum Befehl `vm image list` findest du in der Microsoft-Dokumentation unter [`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list).
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Erstelle mithilfe des von dir ermittelten Appliance-Images eine neue VM. Weitere Informationen findest du in der Microsoft-Dokumentation unter [`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create).

  Übergib Optionen für den Namen deiner VM, den Ressourcentyp, die Größe deiner VM, den Namen deiner bevorzugten Azure-Region, den Namen der von dir im vorherigen Schritt aufgelisteten Appliance-Image-VM und die Storage-SKU für den Premium-Storage. Weitere Informationen zu Ressourcengruppen findest du in der Microsoft-Dokumentation unter [Ressourcengruppen](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups).

  ```shell
  $ az vm create -n VM_NAME -g RESOURCE_GROUP --size VM_SIZE -l REGION --image APPLIANCE_IMAGE_NAME --storage-sku Premium_LRS
  ```

3. Konfiguriere die Sicherheitseinstellungen auf deiner VM, um die erforderlichen Ports zu öffnen. Weitere Informationen findest du in der Microsoft-Dokumentation unter [`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port). In der folgenden Tabelle findest du eine Beschreibung der einzelnen Ports, um festzustellen, welche Ports du öffnen musst.

  ```shell
  $ az vm open-port -n VM_NAME -g RESOURCE_GROUP --port PORT_NUMBER
  ```

  Diese Tabelle zeigt, wofür jeder Port verwendet wird.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Erstelle eine neue unverschlüsselte Daten-Festplatte, hänge sie an die VM und konfiguriere die Größe entsprechend deiner Anzahl von Benutzerlizenzen. Weitere Informationen findest du in der Microsoft-Dokumentation unter [`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach).

  Übergib Optionen für den Namen deiner VM (z. B. `ghe-acme-corp`), die Ressourcengruppe, die SKU „Storage Premium“, die Größe des Datenträgers (z. B. `200`) und einen Namen für die resultierende VHD.

  ```shell
  $ az vm disk attach --vm-name VM_NAME -g RESOURCE_GROUP --sku Premium_LRS --new -z SIZE_IN_GB --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Hinweis:** Damit Nicht-Produktionsinstanzen einen ausreichenden E/A-Durchsatz aufweisen, wird eine minimale Datenträgergröße von 150 GiB mit aktiviertem Lese-/Schreib-Cache (`--caching ReadWrite`) empfohlen.

   {% endnote %}

## {% data variables.product.prodname_ghe_server %}-VM konfigurieren

1. Vor der VM-Konfiguration musst du darauf warten, dass sie den Status „ReadyRole“ aufweist. Führe den Befehl `vm list` aus, um den Status der VM zu überprüfen. Weitere Informationen findest du in der Microsoft-Dokumentation unter [`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list).
  ```shell
  $ az vm list -d -g RESOURCE_GROUP -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **Hinweis:** Azure erstellt nicht automatisch einen FQDN-Eintrag für die VM. Weitere Informationen findest du im Azure-Leitfaden zum [Erstellen eines vollqualifizierten Domänennamens im Azure-Portal für eine Linux-VM](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn).
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## Die Merkmale der Azure-Erweiterung

{% data variables.product.product_name %} unterstützt die Installation von Azure-Erweiterungsfeatures nicht. Das Image {% data variables.product.prodname_ghe_server %} wird mit einem angepassten `waagent`-Paket ausgeliefert, das nur grundlegende VM-Verwaltungsfunktionen unterstützt und erweiterte VM-Verwaltungsfunktionen blockiert. 

Um Systeminstabilität deiner {% data variables.product.prodname_ghe_server %}-Instanz zu vermeiden, wird der `walinuxagent`-Dienst absichtlich in {% data variables.product.prodname_ghe_server %} in einem eingeschränkten Modus ausgeführt, wodurch der Agent explizit nicht in der Lage ist, andere Agents zu installieren. VM-Verwaltungsfeatures, die auf im {% data variables.product.prodname_ghe_server %}-Image enthaltene zusätzliche Agents und Erweiterungen beruhen, z. B. die Überwachungs-Agent-Erweiterung für Azure Insights oder Azure-Sicherungen, werden nicht unterstützt.

Da {% data variables.product.product_name %} ein angepasstes Linux-Betriebssystem nur mit den erforderlichen Anwendungen und Diensten ausführt, überschreibt das manuelle Installieren oder Aktualisieren von Betriebssystempaketen diese Anpassungen und kann zu unerwartetem Verhalten führen. Weitere Informationen findest du unter [Systemübersicht](/admin/overview/system-overview).

## Weiterführende Themen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
