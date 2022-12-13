---
title: GitHub Enterprise Server auf OpenStack KVM installieren
intro: 'Um {% data variables.product.prodname_ghe_server %} für OpenStack KVM zu installieren, musst du über OpenStack-Zugriff verfügen und das {% data variables.product.prodname_ghe_server %} QCOW2-Image herunterladen.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 105201d2759b333d297278aa7fe32a9544c68839
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884955'
---
## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst über Zugriff auf eine Installation von OpenStack Horizon verfügen, der webbasierten Benutzeroberfläche für OpenStack-Dienste. Weitere Informationen findest du in der [Horizon-Dokumentation](https://docs.openstack.org/horizon/latest/).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Wähle unter „{% data variables.product.prodname_dotcom %} Lokal“ das Dropdownmenü „Hypervisor auswählen“ aus, und klicke auf **OpenStack KVM (QCOW2)**.
5. Klicke auf **Download für OpenStack KVM (QCOW2)**.

## {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Lade in OpenStack Horizon das von dir heruntergeladene {% data variables.product.prodname_ghe_server %}-Image hoch. Anweisungen findest du im Abschnitt „Hochladen eines Image“ im OpenStack-Leitfaden zum [Hochladen und Verwalten von Images](https://docs.openstack.org/horizon/latest/user/manage-images.html).
{% data reusables.enterprise_installation.create-attached-storage-volume %} Entsprechende Anweisungen findest du im OpenStack-Leitfaden zum [Erstellen und Verwalten von Volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html).
3. Erstelle eine Sicherheitsgruppe, und füge für jeden in der Tabelle aufgelisteten Port eine neue Sicherheitsgruppenregel hinzu. Anweisungen findest du im OpenStack-Leitfaden zum [Konfigurieren des Zugriffs und der Sicherheit für Instanzen](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html).

  {% data reusables.enterprise_installation.necessary_ports %}
4. Ordne der Instanz optional eine Floating-IP zu. In Abhängigkeit deiner OpenStack-Einrichtung musst du dem Projekt ggf. eine Floating-IP zuordnen und sie mit der Instanz verknüpfen. Wende dich an deinen Systemadministrator, um zu ermitteln, ob dies bei dir der Fall ist. Weitere Informationen findest du in der OpenStack-Dokumentation unter [Zuweisen einer Floating IP zu einer Instanz](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance).
5. Starte {% data variables.product.product_location %} mit dem Image, dem Datenvolume und der Sicherheitsgruppe, das bzw. die du in den vorherigen Schritten erstellt hast. Anweisungen findest du im OpenStack-Leitfaden zum [Starten und Verwalten von Instanzen](https://docs.openstack.org/horizon/latest/user/launch-instances.html).

## {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Weiterführende Themen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
