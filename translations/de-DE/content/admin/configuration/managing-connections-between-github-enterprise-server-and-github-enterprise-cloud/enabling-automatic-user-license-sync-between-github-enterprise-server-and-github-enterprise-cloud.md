---
title: Automatische Synchronisierung von Benutzerlizenzen zwischen GitHub Enterprise Server und GitHub Enterprise Cloud aktivieren
intro: 'Sie können zwischen {% data variables.product.product_location_enterprise %} und {% data variables.product.prodname_ghe_cloud %} eine Verbindung herstellen und festlegen, dass {% data variables.product.prodname_ghe_server %} Informationen zu Benutzerlizenzen auf Ihr Enterprise-Konto auf {% data variables.product.prodname_dotcom_the_website %} hochladen kann.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
---
### Informationen zur Lizenzsynchronisierung

After you enable license synchronization, you'll be able to view license usage for your entire enterprise account, across {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_github_connect %} syncs license between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly. Weitere Informationen findest Du unter "[Deine {% data variables.product.prodname_enterprise %}-Lizenz verwalten](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)."

Darüber hinaus können Sie Informationen zu {% data variables.product.prodname_ghe_server %}-Benutzerlizenzen manuell auf {% data variables.product.prodname_ghe_cloud %} hochladen. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_ghe_cloud %} verbinden](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)“.

### Lizenzsynchronisierung aktivieren

Vor der Aktivierung der Lizenzsynchronisierung auf {% data variables.product.product_location_enterprise %} müssen Sie zwischen {% data variables.product.product_location_enterprise %} und {% data variables.product.prodname_dotcom_the_website %} eine Verbindung herstellen. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_ghe_cloud %} verbinden](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)“.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Verwenden Sie unter „Server can sync user license count and usage“ (Server kann Anzahl und Nutzung der Benutzerlizenzen synchronisieren) das Dropdownmenü, und wählen Sie **Enabled** (Aktiviert) aus. ![Dropdownmenü zum Aktivieren der automatischen Synchronisierung von Benutzerlizenzen](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
