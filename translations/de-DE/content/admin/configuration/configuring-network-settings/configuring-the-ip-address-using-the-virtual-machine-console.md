---
title: IP-Adresse mithilfe der VM-Konsole konfigurieren
intro: '{% data variables.product.prodname_ghe_server %} ruft standardmäßig Netzwerkeinstellungen über das Dynamic Host Configuration Protocol (DHCP) ab. Wenn deine Plattform sie unterstützt oder falls DHCP nicht verfügbar ist, kannst du die Netzwerkeinstellungen auch mithilfe der VM-Konsole konfigurieren.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Set the IP using the console
ms.openlocfilehash: db183677409757e516515a5ac7def5a70affd01f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106980'
---
{% note %}

**Hinweis:** Das Hinzuzufügen zusätzlicher Netzwerkadapter zu {% data variables.product.prodname_ghe_server %} wird nicht unterstützt.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Wähle die Konfiguration des Protokolls `IPv4` oder `IPv6` aus.
  ![Auswahloptionen für das IPv4- oder für das IPv6-Protokoll](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Konfiguriere die Optionen für das gewünschte Protokoll.
  ![Menü mit IP-Protokoll-Optionen](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
