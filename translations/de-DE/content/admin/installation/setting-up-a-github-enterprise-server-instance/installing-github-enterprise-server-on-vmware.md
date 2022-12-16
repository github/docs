---
title: Installieren von GitHub Enterprise Server unter VMware
intro: 'Um {% data variables.product.prodname_ghe_server %} auf VMware zu installieren, musst du den VMware vSphere-Client herunterladen und anschließend die {% data variables.product.prodname_ghe_server %}-Software herunterladen und bereitstellen.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: f9e81c624f93c7478eed04b65b3ef43a69ef9291
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147859410'
---
## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst über einen VMware vSphere ESXi-Hypervisor verfügen, der auf einen Bare-Metal-Computer angewendet wird, der {% data variables.product.product_location %} ausführt. Wir unterstützen Version 5.5 bis 6.7 für {% data variables.product.prodname_ghe_server %} 3.4 und früher. ESX Version 7.0 wird für {% data variables.product.prodname_ghe_server %} 3.5 und höher unterstützt. Der ESXi-Hypervisor ist kostenlos, enthält aber nicht vCenter Server (optional). Weitere Informationen findest du in der [VMware ESXi-Dokumentation](https://www.vmware.com/products/esxi-and-esx.html).
- du benötigst Zugriff auf einen vSphere Client. Wenn du über vCenter Server verfügst, kannst du vSphere Web Client verwenden. Weitere Informationen findest du im VMware-Leitfaden zum [Anmelden bei vCenter Server mithilfe des vSphere-Webclients](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Wähle unter „{% data variables.product.prodname_dotcom %} lokal“ das Dropdownmenü „Hypervisor auswählen“ und dann **VMware ESXi/vSphere (OVA)** aus.
5. Klicke auf **Herunterladen für VMware ESXi/vSphere (OVA)**.

## {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Importiere mithilfe des Windows-Clients für vSphere oder mithilfe des vCenter Web Client das von dir heruntergeladene {% data variables.product.prodname_ghe_server %}-Image. Entsprechende Anleitungen findest du im VMware-Leitfaden zum [Bereitstellen einer OVF- oder OVA-Vorlage](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html).
    - Wähle einen Datenspeicher mit ausreichend Speicherplatz aus, um die Disks der VM zu hosten. Die Spezifikationen zu der für deine Instanzgröße empfohlenen Mindesthardware findest du unter [Grundlegendes zur Hardware](#hardware-considerations). Wir empfehlen eine vollständige Speicherzuweisung mit verzögerter Nullung.
    - Lass das Kontrollkästchen **Power on after deployment** (Nach Bereitstellung einschalten) deaktiviert, da du nach dem Bereitstellen der VM ein angefügtes Speichervolume für deine Repositorydaten hinzufügen musst.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Entsprechende Anleitungen findest du im VMware-Leitfaden zum [Hinzufügen einer neuen Festplatte zu einem virtuellen Computer](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html).

## {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Weitere Informationsquellen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
