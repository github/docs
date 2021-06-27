---
title: GitHub Enterprise Server auf VMware installieren
intro: 'To install {% data variables.product.prodname_ghe_server %} on VMware, you must download the VMware vSphere client, and then download and deploy the {% data variables.product.prodname_ghe_server %} software.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware/
  - /enterprise/admin/articles/installing-vmware-tools/
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums/
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen über einen VMware vSphere ESXi Hypervisor verfügen, der auf eine Bare-Metal-Maschine angewendet ist, die {% data variables.product.product_location %}en ausführt. Es werden die Versionen 5.5 bis 6.7 unterstützt. The ESXi Hypervisor is free and does not include the (optional) vCenter Server. Weitere Informationen finden Sie in der Dokumentation zu „[VMware ESXi](https://www.vmware.com/products/esxi-and-esx.html)“.
- Sie benötigen Zugriff auf einen vSphere Client. Wenn Sie über vCenter Server verfügen, können Sie vSphere Web Client verwenden. Weitere Informationen finden Sie im VMware-Leitfaden unter „[Anmelden bei vCenter Server mithilfe von vSphere Web Client](https://docs.vmware.com/de/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)."

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Wählen Sie „{% data variables.product.prodname_dotcom %} On-premises“ ({% data variables.product.prodname_dotcom %} (lokal)) aus, und klicken Sie anschließend auf **VMware ESXi/vSphere (OVA)**.
5. Klicken Sie auf **Download for VMware ESXi/vSphere (OVA)** (Für  VMware ESXi/vSphere (OVA) herunterladen).

### {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Importieren Sie mithilfe des Windows-Clients für vSphere oder mithilfe des vCenter Web Client das von Ihnen heruntergeladene {% data variables.product.prodname_ghe_server %}-Image. Anweisungen finden Sie im VMware-Leitfaden zum „[Bereitstellen einer OVF- oder OVA-Vorlage](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)“.
    - Wählen Sie einen Datenspeicher mit ausreichend Speicherplatz aus, um die Disks der VM zu hosten. For the minimum hardware specifications recommended for your instance size, see "[Hardware considerations](#hardware-considerations)." We recommend thick provisioning with lazy zeroing.
    - Lassen Sie das Kontrollkästchen **Power on after deployment** (Nach Bereitstellung einschalten) deaktiviert, da Sie nach dem Bereitstellen der VM ein Attached Storage-Volume für Ihre Repository-Daten benötigen.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Anweisungen finden Sie im VMware-Leitfaden „[Hinzufügen einer neuen Festplatte zu einer virtuellen Maschine](https://docs.vmware.com/de/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)“.

### {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Weiterführende Informationen

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
