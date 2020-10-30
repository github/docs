---
title: Git Large File Storage zur Verwendung eines Drittanbieterservers konfigurieren
intro: 'Sie können {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) auf einem Drittanbieterserver verwenden. Deaktivieren Sie dazu {% data variables.large_files.product_name_short %} auf der {% data variables.product.prodname_ghe_server %}-Appliance, und konfigurieren Sie den {% data variables.large_files.product_name_short %}-Client mit der URL für den Server, auf dem Sie große Assets speichern möchten.'
redirect_from:
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
versions:
  enterprise-server: '*'
---

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
3. Migrieren Sie vorhandene {% data variables.large_files.product_name_short %}-Assets. Weitere Informationen finden Sie unter „[Zu einem anderen {% data variables.large_files.product_name_long %}-Server migrieren](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)“.

### Weiterführende Informationen

- „[Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage/)“
- „[{% data variables.large_files.product_name_long %} konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage)“
- „[Zu einem anderen {% data variables.large_files.product_name_long %}-Server migrieren](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)“
- [{% data variables.large_files.product_name_long %}-Projektwebsite](https://git-lfs.github.com/)
