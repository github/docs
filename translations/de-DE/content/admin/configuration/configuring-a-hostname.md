---
title: Hostname konfigurieren
intro: 'Es wird empfohlen, dass Sie einen Hostnamen für Ihre Appliance festlegen, anstatt eine hartcodierte IP-Adresse zu verwenden.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames/
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Wenn Sie einen Hostnamen konfigurieren, anstatt eine hartcodierte IP-Adresse zu verwenden, können Sie die physische Hardware ändern, auf der {% data variables.product.product_location %} ausgeführt wird, ohne dass sich dies auf die Benutzer oder auf die Clientsoftware auswirkt.

Die Einstellung des Hostnamens in der {% data variables.enterprise.management_console %} sollte auf einen geeigneten vollqualifizierten Domainnamen (FQDN) gesetzt werden, der im Internet oder in Deinem internen Netzwerk auflösbar ist. So könnte Ihre Hostnameneinstellung beispielsweise `github.companyname.com` lauten. Darüber hinaus wird empfohlen, die Subdomain-Isolation für den gewünschten Hostnamen zu aktivieren, um verschiedene Cross-Site-Scripting-Stilschwachstellen abzuschwächen. Weitere Informationen zu den Hostnameneinstellungen finden Sie in [Abschnitt 2.1 im HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Geben Sie den Hostnamen ein, den Sie für {% data variables.product.product_location %} festlegen möchten.![Feld zum Festlegen eines Hostnamens](/assets/images/enterprise/management-console/hostname-field.png)
5. Klicken Sie zum Testen der DNS- und SSL-Einstellungen für den neuen Hostnamen auf **Test domain settings** (Domain-Einstellungen testen). ![Schaltfläche zum Testen der Domain-Einstellungen](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

Nach der Konfiguration eines Hostnamens sollten Sie die Subdomain-Isolation für {% data variables.product.product_location %} aktivieren. Weitere Informationen finden Sie unter „[Subdomain-Isolation aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation/)“.
