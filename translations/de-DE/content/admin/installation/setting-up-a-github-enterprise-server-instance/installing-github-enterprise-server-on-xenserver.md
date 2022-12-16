---
title: GitHub Enterprise Server auf XenServer installieren
intro: Um {% data variables.product.prodname_ghe_server %} auf XenServer zu installieren, musst du das {% data variables.product.prodname_ghe_server %}-Datenträgerimage auf einem XenServer-Host bereitstellen.
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104856"
---
{% note %}

  **Hinweis:** Die Unterstützung für {% data variables.product.prodname_ghe_server %} auf XenServer wird in {% data variables.product.prodname_ghe_server %} 3.3 eingestellt. Weitere Informationen findest du in den [Versionshinweisen zu {% data variables.product.prodname_ghe_server %} 3.1](/admin/release-notes#3.1.0).

{% endnote %}

## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst den XenServer Hypervisor auf der Maschine installieren, auf der deine {% data variables.product.prodname_ghe_server %}-VM (virtuelle Maschine) ausgeführt wird. Es werden die Versionen 6.0 bis 7.0 unterstützt.
- Zur Ersteinrichtung solltest du die XenCenter Windows Management Console verwenden. Im Folgenden findest du Anweisungen zur Verwendung von XenCenter Windows Management Console. Weitere Informationen findest du im Citrix-Leitfaden zum [Herunterladen und Installieren einer neuen Version von XenCenter](https://support.citrix.com/article/CTX118531).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %}-Image herunterladen

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Wähle unter „{% data variables.product.prodname_dotcom %} lokal“ das Dropdownmenü „Hypervisor auswählen“ und dann **XenServer (VHD)** aus.
5. Klicke zum Herunterladen deiner Lizenzdatei auf **Lizenz herunterladen**.

## {% data variables.product.prodname_ghe_server %}-Instanz erstellen

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Importiere in XenCenter das von dir heruntergeladene {% data variables.product.prodname_ghe_server %}-Image. Entsprechende Anleitungen findest du im XenCenter-Leitfaden [Importieren von Datenträgerimages](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html).
    - Wähle für den Schritt „Betriebssystemkorrektur aktivieren“ die Option **Betriebssystemkorrektur nicht verwenden** aus.
    - Lass die VM nach Abschluss ausgeschaltet.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Entsprechende Anleitungen findest du im XenCenter-Leitfaden zum [Hinzufügen virtueller Datenträger](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html).

## {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Weitere Informationsquellen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
