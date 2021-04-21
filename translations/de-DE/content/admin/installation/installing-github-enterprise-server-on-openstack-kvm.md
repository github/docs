---
title: GitHub Enterprise Server auf OpenStack KVM installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} auf OpenStack KVM zu installieren, müssen Sie über OpenStack-Zugriff verfügen und das {% data variables.product.prodname_ghe_server %} QCOW2-Image herunterladen.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen über Zugriff auf eine Installation von OpenStack Horizon verfügen, der webbasierten Benutzeroberfläche für OpenStack-Dienste. Weitere Informationen finden Sie in der „[Horizon-Dokumentation](https://docs.openstack.org/horizon/latest/)“.

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Wählen Sie „{% data variables.product.prodname_dotcom %} On-premises“ ({% data variables.product.prodname_dotcom %} (lokal)) aus, und klicken Sie anschließend auf **OpenStack KVM (QCOW2)**.
5. Klicken Sie auf **Download for OpenStack KVM (QCOW2)** (Für OpenStack KVM (QCOW2) herunterladen).

### {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. In OpenStack Horizon, upload the

{% data variables.product.prodname_ghe_server %} image you downloaded. For instructions, see the "Upload an image" section of the OpenStack guide "[Upload and manage images](https://docs.openstack.org/horizon/latest/user/manage-images.html)."
{% data reusables.enterprise_installation.create-attached-storage-volume %} For instructions, see the OpenStack guide "[Create and manage volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)."
3. Erstellen Sie eine Sicherheitsgruppe, und fügen Sie für jeden in der Tabelle aufgelisteten Port eine neue Sicherheitsgruppenregel hinzu. Anweisungen finden Sie im OpenStack-Leitfaden „[Configure access and security for instances](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)“.

  {% data reusables.enterprise_installation.necessary_ports %}
4. Ordnen Sie der Instanz optional eine Floating-IP zu. In Abhängigkeit Ihrer OpenStack-Einrichtung müssen Sie dem Projekt ggf. eine Floating-IP zuordnen und sie mit der Instanz verknüpfen. Wenden Sie sich an Ihren Systemadministrator, um zu ermitteln, ob dies bei Ihnen der Fall ist. Weitere Informationen finden Sie unter „[Allocate a floating IP address to an instance](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)“ in der OpenStack-Dokumentation.
5. Starten Sie {% data variables.product.product_location %} mit dem Image, Daten-Volume und der Sicherheitsgruppe, das bzw. die Sie in den vorherigen Schritten erstellt haben. Anweisungen finden Sie im OpenStack-Leitfaden „[Launch and manage instances](https://docs.openstack.org/horizon/latest/user/launch-instances.html)“.

### {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Weiterführende Informationen

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
