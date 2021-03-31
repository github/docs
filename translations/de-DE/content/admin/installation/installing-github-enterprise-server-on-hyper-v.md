---
title: GitHub Enterprise Server auf Hyper-V installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} auf Hyper-V zu installieren, müssen Sie es auf einem Computer bereitstellen, auf dem Windows Server 2008 bis Windows Server 2016 ausgeführt wird.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen über Windows Server 2008 bis Windows Server 2016 mit Hyper-V-Unterstützung verfügen.
- Most actions needed to create your virtual machine (VM) may also be performed using the [Hyper-V Manager](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). Zur Ersteinrichtung sollten Sie jedoch die Windows PowerShell-Befehlszeilenshell verwenden. Im Folgenden finden Sie Beispiele zur Verwendung der PowerShell. For more information, see the Microsoft guide "[Getting Started with Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)."

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Wählen Sie „{% data variables.product.prodname_dotcom %} On-premises“ ({% data variables.product.prodname_dotcom %} (lokal)) aus, und klicken Sie anschließend auf **Hyper-V (VHD)**.
5. Klicken Sie auf **Download for Hyper-V (VHD)** (Für Hyper-V (VHD) herunterladen).

### {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Erstelle in PowerShell eine neue virtuelle Maschine der 1. Generation, konfiguriere die Größe anhand der Anzahl Deiner verfügbaren Benutzerlizenzen, und hänge das von Dir heruntergeladene {% data variables.product.prodname_ghe_server %}-Image an. Weitere Informationen finden Sie unter „[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)“ in der Microsoft-Dokumentation.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Ersetzen Sie `PATH_TO_DATA_DISK` durch den Verzeichnispfad, an dem Sie die Disk erstellen. Weitere Informationen finden Sie unter „[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)“ in der Microsoft-Dokumentation.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Hängen Sie die Daten-Disk an Ihre Instanz an. Weitere Informationen finden Sie unter „[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)“ in der Microsoft-Dokumentation.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Starten Sie die VM. Weitere Informationen finden Sie unter „[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)“ in der Microsoft-Dokumentation.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Rufen Sie die IP-Adresse Ihrer VM ab. Weitere Informationen finden Sie unter „[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)“ in der Microsoft-Dokumentation.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Kopieren Sie die IP-Adresse der VM, und fügen Sie sie in einen Webbrowser ein.

### {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Weiterführende Informationen

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
