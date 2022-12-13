---
title: Настройка хранилища больших файлов Git для предприятия
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
ms.openlocfilehash: 1aff7a1189790e893d4d7919f1e8b6c997e50af5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094300'
---
## Сведения о {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Вы можете использовать {% data variables.large_files.product_name_long %} с одним репозиторием, всеми личными репозиториями или репозиториями организации либо с каждым репозиторием на предприятии. Прежде чем включить {% data variables.large_files.product_name_short %} для определенных репозиториев или организаций, необходимо включить{% data variables.large_files.product_name_short %} для предприятия.

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

Дополнительные сведения см. в статьях "[Сведения о {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)", "[Управление версиями больших файлов](/enterprise/user/articles/versioning-large-files/)", а также [на сайте проекта {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/).

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Настройка {% data variables.large_files.product_name_long %} для предприятия

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. В разделе "Доступ к {% data variables.large_files.product_name_short %}" воспользуйтесь раскрывающимся меню и щелкните **Включено** или **Отключено**.
![Доступ к LFS Git](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

## Настройка {% data variables.large_files.product_name_long %} для отдельного репозитория

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

## Настройка {% data variables.large_files.product_name_long %} для каждого репозитория, принадлежащего учетной записи пользователя или организации

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

{% ifversion ghes %}
## Настройка хранилища больших файлов Git для использования стороннего сервера

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

1. Отключите {% данных variables.large_files.product_name_short %} для {% данных variables.location.product_location %}. Дополнительные сведения см. в статье "[Настройка {% data variables.large_files.product_name_long %} для предприятия](#configuring-git-large-file-storage-for-your-enterprise)".

2. Создайте файл конфигурации {% data variables.large_files.product_name_short %}, указывающий на сторонний сервер.
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

3. Чтобы сохранить одну и ту же конфигурацию {% data variables.large_files.product_name_short %} для каждого пользователя, зафиксируйте пользовательский файл `.lfsconfig` в репозитории.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. Перенесите существующие ресурсы {% data variables.large_files.product_name_short %}. Дополнительные сведения см. в статье "[Миграция на другой сервер {% data variables.large_files.product_name_long %}](#migrating-to-a-different-git-large-file-storage-server)".

## Миграция на другой сервер хранилища больших файлов Git

Перед миграцией на другой сервер {% data variables.large_files.product_name_long %} необходимо настроить {% data variables.large_files.product_name_short %} для использования стороннего сервера. Дополнительные сведения см. в статье "[Настройка {% data variables.large_files.product_name_long %} для использования стороннего сервера](#configuring-git-large-file-storage-to-use-a-third-party-server)".

1. Настройте репозиторий с помощью второго удаленного репозитория.
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

2. Извлеките все объекты из старого удаленного репозитория.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. Отправьте все объекты в новый удаленный репозиторий.
  ```shell
  $ git lfs push NEW-REMOTE --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```
{% endif %}

## Дополнительные материалы

- [Сайт проекта {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/)
