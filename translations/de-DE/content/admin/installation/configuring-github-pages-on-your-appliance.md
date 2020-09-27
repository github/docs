---
title: GitHub Pages auf Ihrer Appliance konfigurieren
intro: 'Sie können {{ site.data.variables.product.prodname_pages }} auf Ihrer Instanz aktivieren oder deaktivieren. Darüber hinaus können Sie festlegen, {{ site.data.variables.product.prodname_pages }}-Websites öffentlich zugänglich zu machen.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
versions:
  enterprise-server: '*'
---

### {{ site.data.variables.product.prodname_pages }} als öffentlich zugänglich festlegen

Wenn der private Modus auf Ihrer Instanz aktiviert ist, ist der öffentliche Zugriff auf die auf {{ site.data.variables.product.product_location_enterprise }} gehosteten {{ site.data.variables.product.prodname_pages }}-Websites nicht möglich.

{% warning %}

**Warnung:** Wenn Sie öffentliche {{ site.data.variables.product.prodname_pages }}-Websites aktivieren, ist jede {{ site.data.variables.product.prodname_pages }}-Website in jedem Repository auf Ihrer Instanz öffentlich zugänglich.

{% endwarning %}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.pages-tab }}
4. Wählen Sie **Public Pages** (Öffentliche Seiten) aus. ![Kontrollkästchen zum Aktivieren von „Public Pages“ (Öffentliche Seiten)](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

### {{ site.data.variables.product.prodname_pages }} auf {{ site.data.variables.product.product_location_enterprise }} deaktivieren

Wenn für {{ site.data.variables.product.product_location_enterprise }} die Subdomain-Isolation deaktiviert ist, sollten Sie auch {{ site.data.variables.product.prodname_pages }} deaktivieren, um sich vor potenziellen Sicherheitslücken zu schützen. Weitere Informationen finden Sie unter „[Subdomain-Isolation aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation)“.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.pages-tab }}
4. Deaktivieren Sie **Enable Pages** (Pages aktivieren). ![Kontrollkästchen zum Deaktivieren von {{ site.data.variables.product.prodname_pages }}](/assets/images/enterprise/management-console/pages-select-button.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

### Weiterführende Informationen

- „[Privaten Modus aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode)“
