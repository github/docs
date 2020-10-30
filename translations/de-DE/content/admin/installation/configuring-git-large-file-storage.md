---
title: Git Large File Storage konfigurieren
intro: 'Sobald [{% data variables.large_files.product_name_short %} installiert wurde](/articles/installing-git-large-file-storage/), müssen Sie es mit einer großen Datei in Ihrem Repository verknüpfen.'
redirect_from:
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/installation/configuring-git-large-file-storage
versions:
  enterprise-server: '*'
---

### Informationen zu {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Sie können {% data variables.large_files.product_name_long %} mit einem einzelnen Repository, mit allen Ihren persönlichen oder Organisations-Repositorys oder mit jedem Repository in {% data variables.product.product_location_enterprise %} verwenden. Bevor Sie {% data variables.large_files.product_name_short %} für bestimmte Repositorys oder Organisationen aktivieren können, müssen Sie {% data variables.large_files.product_name_short %} für Ihre Appliance aktivieren.

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

Weitere Informationen finden Sie unter „[Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)“, „[Versionierung von großen Dateien](/enterprise/user/articles/versioning-large-files/)“ und auf der „[{% data variables.large_files.product_name_long %}-Projektwebsite](https://git-lfs.github.com/)“.

### {% data variables.large_files.product_name_long %} für Ihre Appliance konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „{% data variables.large_files.product_name_short %} access“ ({% data variables.large_files.product_name_short %}-Zugriff) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert) oder **Disabled** (Deaktiviert). ![Git LFS-Zugriff](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

### {% data variables.large_files.product_name_long %} für ein einzelnes Repository konfigurieren

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

### {% data variables.large_files.product_name_long %} für jedes einem Benutzerkonto oder einer Organisation gehörende Repository konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}
