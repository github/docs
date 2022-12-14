---
title: Configuration de Git Large File Storage pour votre entreprise
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104158'
---
## À propos de {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Vous pouvez utiliser {% data variables.large_files.product_name_long %} avec un seul dépôt, avec tous vos dépôts personnels ou d’organisation ou avec chaque dépôt de votre entreprise. Pour pouvoir activer {% data variables.large_files.product_name_short %} pour des dépôts ou des organisations spécifiques, vous devez activer {% data variables.large_files.product_name_short %} pour votre entreprise.

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

Pour plus d’informations, consultez « [À propos de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage) », « [Versioning de grands fichiers](/enterprise/user/articles/versioning-large-files/) » et le [site du projet {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/).

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Configuration de {% data variables.large_files.product_name_long %} pour votre entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. Sous « Accès à {% data variables.large_files.product_name_short %} », utilisez le menu déroulant et cliquez sur **Activé** ou **Désactivé**.
![Accès à Git LFS](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

## Configuration de {% data variables.large_files.product_name_long %} pour un dépôt individuel

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

## Configuration de {% data variables.large_files.product_name_long %} pour chaque dépôt appartenant à un compte d’utilisateur ou à une organisation

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

{% ifversion ghes %}
## Configuration de Git Large File Storage pour utiliser un serveur tiers

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

1. Désactivez {% data variables.large_files.product_name_short %} sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Configuration de {% data variables.large_files.product_name_long %} pour votre entreprise](#configuring-git-large-file-storage-for-your-enterprise) ».

2. Créez un fichier de configuration de {% data variables.large_files.product_name_short %} pointant vers le serveur tiers.
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

3. Pour conserver la même configuration de {% data variables.large_files.product_name_short %} pour chaque utilisateur, commitez un fichier `.lfsconfig` personnalisé dans le dépôt.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. Migrez toutes les ressources existantes de {% data variables.large_files.product_name_short %}. Pour plus d’informations, consultez « [Migration vers un autre serveur {% data variables.large_files.product_name_long %}](#migrating-to-a-different-git-large-file-storage-server) ».

## Migration vers un autre serveur Git Large File Storage

Avant de migrer vers un autre serveur {% data variables.large_files.product_name_long %}, vous devez configurer {% data variables.large_files.product_name_short %} pour utiliser un serveur tiers. Pour plus d’informations, consultez « [Configuration de {% data variables.large_files.product_name_long %} pour utiliser un serveur tiers](#configuring-git-large-file-storage-to-use-a-third-party-server) ».

1. Configurez le dépôt avec un deuxième dépôt distant.
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

2. Récupérez (fetch) tous les objets de l’ancien dépôt distant.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. Poussez (push) tous les objets sur le nouveau dépôt distant.
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```
{% endif %}

## Pour aller plus loin

- [Site du projet {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/)
