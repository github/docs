---
title: Automatische Synchronisierung von Benutzerlizenzen zwischen GitHub Enterprise Server und GitHub Enterprise Cloud aktivieren
intro: 'Sie können zwischen {{ site.data.variables.product.product_location_enterprise }} und {{ site.data.variables.product.prodname_ghe_cloud }} eine Verbindung herstellen und festlegen, dass {{ site.data.variables.product.prodname_ghe_server }} Informationen zu Benutzerlizenzen auf Ihr Enterprise-Konto auf {{ site.data.variables.product.prodname_dotcom_the_website }} hochladen kann.'
permissions: 'Site-Administratoren für {{ site.data.variables.product.prodname_ghe_server }} , die auch Inhaber der angeschlossenen Organisation oder des angeschlossenen Unternehmenskontos in der {{ site.data.variables.product.prodname_ghe_cloud }} sind, können die automatische Synchronisation von Benutzerlizenzen aktivieren.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
versions:
  enterprise-server: '*'
---

### Informationen zur Lizenzsynchronisierung

After you enable license synchronization, you'll be able to view license usage for your entire enterprise account, across {{ site.data.variables.product.prodname_ghe_server }} and {{ site.data.variables.product.prodname_ghe_cloud }}. {{ site.data.variables.product.prodname_github_connect }} syncs license between {{ site.data.variables.product.prodname_ghe_server }} and {{ site.data.variables.product.prodname_ghe_cloud }} weekly. Weitere Informationen findest Du unter "[Deine {{ site.data.variables.product.prodname_enterprise }}-Lizenz verwalten](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)."

Darüber hinaus können Sie Informationen zu {{ site.data.variables.product.prodname_ghe_server }}-Benutzerlizenzen manuell auf {{ site.data.variables.product.prodname_ghe_cloud }} hochladen. Weitere Informationen finden Sie unter „[{{ site.data.variables.product.prodname_ghe_server }} mit {{ site.data.variables.product.prodname_ghe_cloud }} verbinden](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)“.

### Lizenzsynchronisierung aktivieren

Vor der Aktivierung der Lizenzsynchronisierung auf {{ site.data.variables.product.product_location_enterprise }} müssen Sie zwischen {{ site.data.variables.product.product_location_enterprise }} und {{ site.data.variables.product.prodname_dotcom_the_website }} eine Verbindung herstellen. Weitere Informationen finden Sie unter „[{{ site.data.variables.product.prodname_ghe_server }} mit {{ site.data.variables.product.prodname_ghe_cloud }} verbinden](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)“.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. Verwenden Sie unter „Server can sync user license count and usage“ (Server kann Anzahl und Nutzung der Benutzerlizenzen synchronisieren) das Dropdownmenü, und wählen Sie **Enabled** (Aktiviert) aus. ![Dropdownmenü zum Aktivieren der automatischen Synchronisierung von Benutzerlizenzen](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
