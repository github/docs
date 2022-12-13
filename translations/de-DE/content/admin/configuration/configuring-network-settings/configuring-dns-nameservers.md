---
title: DNS-Nameserver konfigurieren
intro: '{% data variables.product.prodname_ghe_server %} verwendet das Dynamic Host Configuration Protocol (DHCP) für DNS-Einstellungen, wenn DHCP-Leases Nameserver bereitstellen. Wenn Nameserver nicht durch einen Dynamic Host Configuration Protocol-Lease (DHCP) bereitgestellt werden oder wenn du bestimmte DNS-Einstellungen verwenden musst, kannst du die Nameserver manuell angeben.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
ms.openlocfilehash: b01dc25b9002bf1feb672bbce597c8046b93f12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419713'
---
Die von dir angegebenen Namenserver müssen deinen Hostnamen für {% data variables.product.product_location %} auflösen.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Nameserver mithilfe der VM-Konsole konfigurieren

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Konfiguriere Nameserver für deine Instanz.
{% data reusables.enterprise_installation.vm-console-done %}

## Nameserver mithilfe der Verwaltungsshell konfigurieren

{% data reusables.enterprise_installation.ssh-into-instance %}

2. Verwende den Befehl `ghe-setup-network` im visuellen Modus, um deine Namenserver zu bearbeiten. Weitere Informationen findest du unter [Befehlszeilenprogramme](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network).

  ```shell
  ghe-setup-network -v
  ```

5. Führe folgenden Code aus, um {% data variables.product.product_location %} deine neuen Namenservereinträge hinzuzufügen:

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
