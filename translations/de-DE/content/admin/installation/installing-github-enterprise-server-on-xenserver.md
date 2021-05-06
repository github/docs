---
title: GitHub Enterprise Server auf XenServer installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} auf XenServer zu installieren, müssen Sie das {% data variables.product.prodname_ghe_server %}-Disk-Image auf einem XenServer-Host bereitstellen.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen den XenServer Hypervisor auf der Maschine installieren, auf der Ihre {% data variables.product.prodname_ghe_server %}-VM (virtuelle Maschine) ausgeführt wird. Es werden die Versionen 6.0 bis 7.0 unterstützt.
- Zur Ersteinrichtung sollten Sie die XenCenter Windows Management Console verwenden. Im Folgenden finden Sie Anweisungen zur Verwendung von XenCenter Windows Management Console. Weitere Informationen finden Sie im Citrix-Leitfaden unter „[How to Download and Install a New Version of XenCenter](https://support.citrix.com/article/CTX118531)“.

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Wählen Sie „{% data variables.product.prodname_dotcom %} On-premises“ ({% data variables.product.prodname_dotcom %} (lokal)) aus, und klicken Sie anschließend auf **XenServer (VHD)**.
5. Klicke zum Herunterladen Deiner Lizenzdatei auf **Download license** (Lizenz herunterladen).

### {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Importieren Sie in XenCenter das von Ihnen heruntergeladene {% data variables.product.prodname_ghe_server %}-Image. Anweisungen finden Sie im XenCenter-Leitfaden unter „[Importieren von Disk-Images](https://docs.citrix.com/de-de/xencenter/current-release/vms-importdiskimage.html)“.
    - Wählen Sie **Don't use Operating System Fixup** (Betriebssystemkorrektur nicht verwenden) für den Schritt „Enable Operating System Fixup“ (Betriebssystemkorrektur aktivieren) aus.
    - Lassen Sie die VM nach Abschluss ausgeschaltet.
{% data reusables.enterprise_installation.create-attached-storage-volume %} {% data reusables.enterprise_installation.create-attached-storage-volume %} Anweisungen finden Sie im XenCenter-Leitfaden unter „[Virtuelle Laufwerke hinzufügen](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)“.

### {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Weiterführende Informationen

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
