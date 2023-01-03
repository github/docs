---
title: GitHub Enterprise Server auf Hyper-V installieren
intro: 'Zum Installieren auf Hyper-V musst du {% data variables.product.prodname_ghe_server %} auf einem Computer unter Windows Server 2008 bis Windows Server 2019 bereitstellen.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Hyper-V
ms.openlocfilehash: f5b465edc4ff84be00e2749766091cc5cfb1962a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106731'
---
## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst über Windows Server 2008 bis Windows Server 2019 verfügen, die Hyper-V unterstützen.
- Die meisten zum Erstellen deines virtuellen Computers (VM) erforderlichen Aktionen können auch mithilfe des [Hyper-V-Managers](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts) ausgeführt werden. Zur Ersteinrichtung solltest du jedoch die Windows PowerShell-Befehlszeilenshell verwenden. Im Folgenden findest du Beispiele zur Verwendung von PowerShell. Weitere Informationen findest du im Microsoft-Leitfaden [Erste Schritte mit Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Wähle unter „{% data variables.product.prodname_dotcom %} Lokal“ die Dropdownliste „Hypervisor auswählen“ aus, und klicke auf **Hyper-V (VHD)**.
5. Klicke auf **Für Hyper-V (VHD) herunterladen**.

## {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Erstelle in PowerShell eine neue virtuelle Maschine der 1. Generation, konfiguriere die Größe anhand der Anzahl deiner verfügbaren Benutzerlizenzen, und hänge das von Dir heruntergeladene {% data variables.product.prodname_ghe_server %}-Image an. Weitere Informationen findest du in der Microsoft-Dokumentation unter [New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps).
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Ersetze `PATH_TO_DATA_DISK` durch den Pfad zu dem Speicherort, an dem du den Datenträger erstellst. Weitere Informationen findest du in der Microsoft-Dokumentation unter [New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps).
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Hänge den Datenträger an deine Instanz an. Weitere Informationen findest du in der Microsoft-Dokumentation unter [Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps).
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Starte den virtuellen Computer. Weitere Informationen findest du in der Microsoft-Dokumentation unter [Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps).
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Rufe die IP-Adresse deiner VM ab. Weitere Informationen findest du in der Microsoft-Dokumentation unter [Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps).
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Kopiere die IP-Adresse der VM, und füge sie in einen Webbrowser ein.

## {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Weitere Informationsquellen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
