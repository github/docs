---
title: Gemeinsame Suche zwischen GitHub Enterprise Server und GitHub.com aktivieren
intro: 'Nachdem Sie {% data variables.product.prodname_github_connect %} aktiviert haben, können Sie die Suche nach {% data variables.product.prodname_dotcom_the_website %} von Ihrer {% data variables.product.product_location_enterprise %} aus zulassen.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Website-Administratoren für {% data variables.product.prodname_ghe_server %} , die auch Inhaber einer Organisation oder eines Unternehmenskontos in der {% data variables.product.prodname_ghe_cloud %} sind, können vereinheitlichte Suche zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_dotcom_the_website %} aktivieren.'
versions:
  enterprise-server: '*'
---

Wenn Sie die gemeinsame Suche aktivieren, können Benutzer Suchergebnisse von öffentlichen und privaten Inhalten auf {% data variables.product.prodname_dotcom_the_website %} anzeigen, wenn sie auf {% data variables.product.product_location_enterprise %} suchen.

Benutzer können auf {% data variables.product.prodname_dotcom_the_website %} nicht nach {% data variables.product.product_location_enterprise %} suchen, selbst wenn sie auf beide Umgebungen zugreifen können. Benutzer können nur auf die privaten Repositorys zugreifen, für die Sie {% data variables.product.prodname_unified_search %} aktiviert haben und auf die sie in den verbundenen {% data variables.product.prodname_ghe_cloud %}-Organisationen zugreifen können. Weitere Informationen finden Sie unter „[Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)“ und „[Private {% data variables.product.prodname_dotcom_the_website %}-Repository-Suche in Ihrem {% data variables.product.prodname_ghe_server %}-Konto aktivieren](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)“.

Bei der Suche über die REST und GraphQL-APIs sind die {% data variables.product.prodname_dotcom_the_website %}-Suchergebnisse nicht enthalten. Die erweiterte Suche und die Suche nach Wikis in {% data variables.product.prodname_dotcom_the_website %} werden nicht unterstützt.

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Verwenden Sie unter „Users can search {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können {% data variables.product.prodname_dotcom_the_website %} durchsuchen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Option zum Aktivieren der Suche im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
6. Verwenden Sie optional unter „Users can search private repositories on {% data variables.product.prodname_dotcom_the_website %}“ (Benutzer können private Repositorys auf {% data variables.product.prodname_dotcom_the_website %} durchsuchen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Option zum Aktivieren der Suche nach privaten Repositorys im Dropdownmenü zum Durchsuchen von GitHub.com](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

### Weiterführende Informationen

- „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_dotcom_the_website %} verbinden](/enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)“
