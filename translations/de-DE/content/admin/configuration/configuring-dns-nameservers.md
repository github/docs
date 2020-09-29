---
title: DNS-Nameserver konfigurieren
intro: '{% data variables.product.prodname_ghe_server %} verwendet das Dynamic Host Configuration Protocol (DHCP) für DNS-Einstellungen, wenn DHCP-Leases Nameserver bereitstellen. Wenn Nameserver nicht durch einen Dynamic Host Configuration Protocol-Lease (DHCP) bereitgestellt werden oder wenn Sie bestimmte DNS-Einstellungen verwenden müssen, können Sie die Nameserver manuell angeben.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers/
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
versions:
  enterprise-server: '*'
---

Die von Ihnen angegebenen Nameserver müssen den Hostnamen Ihrer {% data variables.product.product_location_enterprise %} auflösen.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

### Nameserver mithilfe der VM-Konsole konfigurieren

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Konfigurieren Sie Nameserver für Ihre Instanz.
{% data reusables.enterprise_installation.vm-console-done %}

### Nameserver mithilfe der Verwaltungsshell konfigurieren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Geben Sie zum Bearbeiten Ihrer Nameserver Folgendes ein:
  ```shell
  $ sudo vim /etc/resolvconf/resolv.conf.d/head
  ```
3. Fügen Sie die `nameserver`-Einträge an, und speichern Sie die Datei anschließend.
4. Speichern Sie nach dem Verifizieren Ihrer Änderungen die Datei.
5. Geben Sie Folgendes ein, um {% data variables.product.product_location_enterprise %} Ihre neuen Nameservereinträge hinzuzufügen:
  ```shell
  $ sudo service resolvconf restart
  ```
