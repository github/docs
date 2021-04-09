---
title: IP-Adresse mithilfe der VM-Konsole konfigurieren
intro: '{% data variables.product.prodname_ghe_server %} ruft standardmäßig Netzwerkeinstellungen über das Dynamic Host Configuration Protocol (DHCP) ab. Wenn Ihre Plattform sie unterstützt oder falls DHCP nicht verfügbar ist, können Sie die Netzwerkeinstellungen auch mithilfe der VM-Konsole konfigurieren.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

{% note %}

**Note:** We do not support adding additional network adapters to {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Wählen Sie aus, dass `IPv4`- oder `IPv6`-Protokoll zu konfigurieren. ![Auswahloptionen für das IPv4- oder für das IPv6-Protokoll](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Konfigurieren Sie die Optionen für das gewünschte Protokoll. ![Menü mit IP-Protokolloptionen](/assets/images/enterprise/network-configuration/network-settings-selection.png)
{% data reusables.enterprise_installation.vm-console-done %}


