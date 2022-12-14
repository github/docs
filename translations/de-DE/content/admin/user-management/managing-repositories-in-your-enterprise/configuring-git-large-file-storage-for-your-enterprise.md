---
title: Konfigurieren von Git Large File Storage für dein Unternehmen
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
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Git
  - Enterprise
  - LFS
  - Storage
shortTitle: Configure Git LFS
ms.openlocfilehash: d6364bc1d45643ebb3dc1c46cec467515fd4da55
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104159'
---
## Informationen zu {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Du kannst {% data variables.large_files.product_name_long %} mit einem einzelnen Repository, mit allen persönlichen oder Organisationsrepositorys oder mit allen Repositorys in deinem Unternehmen verwenden. Bevor du {% data variables.large_files.product_name_short %} für bestimmte Repositorys oder Organisationen aktivieren kannst, musst du {% data variables.large_files.product_name_short %} für dein Unternehmen aktivieren.

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

Weitere Informationen findest du unter [Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage), [Versionsverwaltung für große Dateien](/enterprise/user/articles/versioning-large-files/) und auf der [Projektwebsite zu {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/).

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Konfigurieren von {% data variables.large_files.product_name_long %} für dein Unternehmen

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. Verwende das Dropdownmenü unter „{% data variables.large_files.product_name_short %}-Zugriff“, und klicke auf **Aktiviert** oder **Deaktiviert**.
![Git LFS-Zugriff](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

## {% data variables.large_files.product_name_long %} für ein einzelnes Repository konfigurieren

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

## {% data variables.large_files.product_name_long %} für jedes einem Benutzerkonto oder einer Organisation gehörende Repository konfigurieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

{% ifversion ghes %}
## Git Large File Storage zur Verwendung eines Drittanbieterservers konfigurieren

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

1. Deaktiviere {% data variables.large_files.product_name_short %} in {% data variables.product.product_location %}. Weitere Informationen findest du unter [Konfigurieren von {% data variables.large_files.product_name_long %} für dein Unternehmen](#configuring-git-large-file-storage-for-your-enterprise).

2. Erstelle eine {% data variables.large_files.product_name_short %}-Konfigurationsdatei, die auf den Drittanbieterserver verweist.
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

3. Committe eine benutzerdefinierte `.lfsconfig`-Datei an das Repository, um dieselbe {% data variables.large_files.product_name_short %}-Konfiguration für alle Benutzer*innen beizubehalten.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. Migriere vorhandene {% data variables.large_files.product_name_short %}-Assets. Weitere Informationen findest du unter [Migration zu einem anderen {% data variables.large_files.product_name_long %}-Server](#migrating-to-a-different-git-large-file-storage-server).

## Zu einem anderen Git Large File Storage-Server migrieren

Bevor du eine Migration zu einem anderen {% data variables.large_files.product_name_long %}-Server durchführst, musst du {% data variables.large_files.product_name_short %} für die Verwendung eines Drittanbieterservers konfigurieren. Weitere Informationen findest du unter [Konfigurieren von {% data variables.large_files.product_name_long %} für die Verwendung eines Drittanbieterservers](#configuring-git-large-file-storage-to-use-a-third-party-server).

1. Konfiguriere das Repository mit einer zweiten Remote-Instanz.
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

2. Rufe alle Objekte von der alten Remote-Instanz ab.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. Übertrage alle Objekte per Push-Vorgang auf die neue Remote-Instanz.
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```
{% endif %}

## Weitere Informationsquellen

- [Projektwebsite zu {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/)
