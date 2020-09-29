---
title: Configuring Git Large File Storage for your enterprise
intro: '{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %}'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise/
  - /enterprise/admin/installation/configuring-git-large-file-storage-on-github-enterprise-server
  - /enterprise/admin/installation/configuring-git-large-file-storage
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/user-management/configuring-git-large-file-storage-for-your-enterprise
versions:
  enterprise-server: '*'
---

### Informationen zu {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Sie können {% data variables.large_files.product_name_long %} mit einem einzelnen Repository, mit allen Ihren persönlichen oder Organisations-Repositorys oder mit jedem Repository in {% data variables.product.product_location_enterprise %} verwenden. Bevor Sie {% data variables.large_files.product_name_short %} für bestimmte Repositorys oder Organisationen aktivieren können, müssen Sie {% data variables.large_files.product_name_short %} für Ihre Appliance aktivieren.

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

Weitere Informationen finden Sie unter „[Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)“, „[Versionierung von großen Dateien](/enterprise/user/articles/versioning-large-files/)“ und auf der „[{% data variables.large_files.product_name_long %}-Projektwebsite](https://git-lfs.github.com/)“.

{% data reusables.large_files.can-include-lfs-objects-archives %}

### {% data variables.large_files.product_name_long %} für Ihre Appliance konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
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

### Git Large File Storage zur Verwendung eines Drittanbieterservers konfigurieren

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

1. Deaktivieren Sie {% data variables.large_files.product_name_short %} auf der {% data variables.product.prodname_ghe_server %}-Appliance. Weitere Informationen finden Sie unter „[{% data variables.large_files.product_name_long %} konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage#configuring-git-large-file-storage-for-your-appliance)“.

2. Erstellen Sie eine {% data variables.large_files.product_name_short %}-Konfigurationsdatei, die auf den Drittanbieterserver verweist.
  ```shell
  # Show default configuration
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>GITHUB-ENTERPRISE-HOST</em>/path/to/repo/info/lfs (auth=basic)
  &nbsp;
  # Create .lfsconfig that points to third party server.
  $ git config -f .lfsconfig remote.origin.lfsurl https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo/info/lfs (auth=none)
  &nbsp;
  # Show the contents of .lfsconfig
  $ cat .lfsconfig
  [remote "origin"]
  lfsurl = https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo
  ```

3. Committen Sie eine benutzerdefinierte `.lfsconfig`-Datei an das Repository, um dieselbe {% data variables.large_files.product_name_short %}-Konfiguration für jeden Benutzer beizubehalten.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. Migrieren Sie vorhandene {% data variables.large_files.product_name_short %}-Assets. For more information, see "[Migrating to a different {% data variables.large_files.product_name_long %} server](#migrating-to-a-different-git-large-file-storage-server)."

### Zu einem anderen Git Large File Storage-Server migrieren

Bevor Sie eine Migration zu einem anderen {% data variables.large_files.product_name_long %}-Server durchführen, müssen Sie {% data variables.large_files.product_name_short %} für die Verwendung eines Drittanbieterservers konfigurieren. For more information, see "[Configuring {% data variables.large_files.product_name_long %} to use a third party server](#configuring-git-large-file-storage-to-use-a-third-party-server)."

1. Konfigurieren Sie das Repository mit einer zweiten Remote-Instanz.
  ```shell
  $ git remote add <em>NEW-REMOTE</em> https://<em>NEW-REMOTE-HOSTNAME</em>/path/to/repo
  &nbsp;
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>GITHUB-ENTERPRISE-HOST</em>/path/to/repo/info/lfs (auth=basic)
  > Endpoint (<em>NEW-REMOTE</em>)=https://<em>NEW-REMOTE-HOSTNAME</em>/path/to/repo/info/lfs (auth=none)
  ```

2. Rufen Sie alle Objekte von der alten Remote-Instanz ab.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. Übertragen Sie alle Objekte per Push-Vorgang auf die neue Remote-Instanz.
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```

### Weiterführende Informationen

- [{% data variables.large_files.product_name_long %}-Projektwebsite](https://git-lfs.github.com/)
