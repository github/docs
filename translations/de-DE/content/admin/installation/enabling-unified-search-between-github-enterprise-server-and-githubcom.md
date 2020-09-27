---
title: Gemeinsame Suche zwischen GitHub Enterprise Server und GitHub.com aktivieren
intro: 'Nachdem Sie {{ site.data.variables.product.prodname_github_connect }} aktiviert haben, können Sie die Suche nach {{ site.data.variables.product.prodname_dotcom_the_website }} von Ihrer {{ site.data.variables.product.product_location_enterprise }} aus zulassen.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Website-Administratoren für {{ site.data.variables.product.prodname_ghe_server }} , die auch Inhaber einer Organisation oder eines Unternehmenskontos in der {{ site.data.variables.product.prodname_ghe_cloud }} sind, können vereinheitlichte Suche zwischen {{ site.data.variables.product.prodname_ghe_server }} und {{ site.data.variables.product.prodname_dotcom_the_website }} aktivieren.'
versions:
  enterprise-server: '*'
---

Wenn Sie die gemeinsame Suche aktivieren, können Benutzer Suchergebnisse von öffentlichen und privaten Inhalten auf {{ site.data.variables.product.prodname_dotcom_the_website }} anzeigen, wenn sie auf {{ site.data.variables.product.product_location_enterprise }} suchen.

Benutzer können auf {{ site.data.variables.product.prodname_dotcom_the_website }} nicht nach {{ site.data.variables.product.product_location_enterprise }} suchen, selbst wenn sie auf beide Umgebungen zugreifen können. Benutzer können nur auf die privaten Repositorys zugreifen, für die Sie {{ site.data.variables.product.prodname_unified_search }} aktiviert haben und auf die sie in den verbundenen {{ site.data.variables.product.prodname_ghe_cloud }}-Organisationen zugreifen können. Weitere Informationen finden Sie unter „[Informationen zur Suche auf {{ site.data.variables.product.prodname_dotcom }}](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)“ und „[Private {{ site.data.variables.product.prodname_dotcom_the_website }}-Repository-Suche in Ihrem {{ site.data.variables.product.prodname_ghe_server }}-Konto aktivieren](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)“.

Bei der Suche über die REST und GraphQL-APIs sind die {{ site.data.variables.product.prodname_dotcom_the_website }}-Suchergebnisse nicht enthalten. Die erweiterte Suche und die Suche nach Wikis in {{ site.data.variables.product.prodname_dotcom_the_website }} werden nicht unterstützt.

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. Verwenden Sie unter „Users can search {{ site.data.variables.product.prodname_dotcom_the_website }}“ (Benutzer können {{ site.data.variables.product.prodname_dotcom_the_website }} durchsuchen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Option zum Aktivieren der Suche im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
6. Verwenden Sie optional unter „Users can search private repositories on {{ site.data.variables.product.prodname_dotcom_the_website }}“ (Benutzer können private Repositorys auf {{ site.data.variables.product.prodname_dotcom_the_website }} durchsuchen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Option zum Aktivieren der Suche nach privaten Repositorys im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

### Weiterführende Informationen

- „[{{ site.data.variables.product.prodname_ghe_server }} mit {{ site.data.variables.product.prodname_dotcom_the_website }} verbinden](/enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)“
