---
title: Configuring Git Large File Storage for your enterprise
intro: '{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %}'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise
  - /enterprise/admin/installation/configuring-git-large-file-storage-on-github-enterprise-server
  - /enterprise/admin/installation/configuring-git-large-file-storage
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server
  - /enterprise/admin/user-management/configuring-git-large-file-storage-for-your-enterprise
  - /admin/user-management/configuring-git-large-file-storage-for-your-enterprise
  - /admin/user-management/managing-repositories-in-your-enterprise/configuring-git-large-file-storage-for-your-enterprise
  - /admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/migrating-to-internal-repositories
versions:
  ghes: '*'
type: how_to
topics:
  - Git
  - Enterprise
  - LFS
  - Storage
shortTitle: Configure Git LFS
---
## About {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} You can use {% data variables.large_files.product_name_long %} with a single repository, all of your personal or organization repositories, or with every repository in your enterprise. Before you can enable {% data variables.large_files.product_name_short %} for specific repositories or organizations, you need to enable {% data variables.large_files.product_name_short %} for your enterprise.

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

For more information, see [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage), [AUTOTITLE](/repositories/working-with-files/managing-large-files), and the [{% data variables.large_files.product_name_long %} project site](https://git-lfs.com/).

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Configuring {% data variables.large_files.product_name_long %} for your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "{% data variables.large_files.product_name_short %} access", select the drop-down menu, and click **Enabled** or **Disabled**.

## Configuring {% data variables.large_files.product_name_long %} for an individual repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

## Configuring {% data variables.large_files.product_name_long %} for every repository owned by a user account or organization

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

{% ifversion ghes %}

## Configuring Git Large File Storage to use a third party server

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

1. Disable {% data variables.large_files.product_name_short %} on {% data variables.location.product_location %}. For more information, see [Configuring {% data variables.large_files.product_name_long %} for your enterprise](#configuring-git-large-file-storage-for-your-enterprise).

1. Create a {% data variables.large_files.product_name_short %} configuration file that points to the third party server.

   ```shell
   # Show default configuration
   $ git lfs env
   > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
   > git version 2.7.4 (Apple Git-66)
   &nbsp;
   > Endpoint=https://GITHUB-ENTERPRISE-HOST/path/to/repo/info/lfs (auth=basic)
   &nbsp;
   # Create .lfsconfig that points to third party server.
   $ git config -f .lfsconfig remote.origin.lfsurl https://THIRD-PARTY-LFS-SERVER/path/to/repo
   $ git lfs env
   > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
   > git version 2.7.4 (Apple Git-66)
   &nbsp;
   > Endpoint=https://THIRD-PARTY-LFS-SERVER/path/to/repo/info/lfs (auth=none)
   &nbsp;
   # Show the contents of .lfsconfig
   $ cat .lfsconfig
   [remote "origin"]
   lfsurl = https://THIRD-PARTY-LFS-SERVER/path/to/repo
   ```

1. To keep the same {% data variables.large_files.product_name_short %} configuration for each user, commit a custom `.lfsconfig` file to the repository.

   ```shell
   git add .lfsconfig
   git commit -m "Adding LFS config file"
   ```

1. Migrate any existing {% data variables.large_files.product_name_short %} assets. For more information, see [Migrating to a different {% data variables.large_files.product_name_long %} server](#migrating-to-a-different-git-large-file-storage-server).

## Migrating to a different Git Large File Storage server

Before migrating to a different {% data variables.large_files.product_name_long %} server, you must configure {% data variables.large_files.product_name_short %} to use a third party server. For more information, see [Configuring {% data variables.large_files.product_name_long %} to use a third party server](#configuring-git-large-file-storage-to-use-a-third-party-server).

1. Configure the repository with a second remote.

   ```shell
   $ git remote add NEW-REMOTE https://NEW-REMOTE-HOSTNAME/path/to/repo
   &nbsp;
   $ git lfs env
   > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
   > git version 2.7.4 (Apple Git-66)
   &nbsp;
   > Endpoint=https://GITHUB-ENTERPRISE-HOST/path/to/repo/info/lfs (auth=basic)
   > Endpoint (NEW-REMOTE)=https://NEW-REMOTE-HOSTNAME/path/to/repo/info/lfs (auth=none)
   ```

1. Fetch all objects from the old remote.

   ```shell
   $ git lfs fetch origin --all
   > Scanning for all objects ever referenced...
   > ✔ 16 objects found
   > Fetching objects...
   > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
   ```

1. Push all objects to the new remote.

   ```shell
   $ git lfs push NEW-REMOTE --all
   > Scanning for all objects ever referenced...
   > ✔ 16 objects found
   > Pushing objects...
   > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
   ```

{% endif %}

## Further reading

* [{% data variables.large_files.product_name_long %} project site](https://git-lfs.com/)
