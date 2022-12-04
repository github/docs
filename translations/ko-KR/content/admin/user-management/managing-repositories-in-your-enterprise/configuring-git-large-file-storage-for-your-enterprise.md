---
title: 엔터프라이즈에서 Git Large File Storage 구성
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094299'
---
## {% data variables.large_files.product_name_long %} 정보

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} 단일 리포지토리, 모든 개인 또는 조직 리포지토리 또는 엔터프라이즈의 모든 리포지토리에서 {% data variables.large_files.product_name_long %}를 사용할 수 있습니다. 특정 리포지토리 또는 조직에서 {% data variables.large_files.product_name_short %}를 사용하도록 설정하려면 먼저 엔터프라이즈에서 {% data variables.large_files.product_name_short %}를 사용하도록 설정해야 합니다.

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

자세한 내용은 “[{% data variables.large_files.product_name_long %} 정보](/articles/about-git-large-file-storage)”, “[대용량 파일 버전 관리](/enterprise/user/articles/versioning-large-files/)” 및 [{% data variables.large_files.product_name_long %} 프로젝트 사이트](https://git-lfs.github.com/)를 참조하세요.

{% data reusables.large_files.can-include-lfs-objects-archives %}

## 엔터프라이즈의 {% data variables.large_files.product_name_long %} 구성

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. “{% data variables.large_files.product_name_short %} 액세스”에서 드롭다운 메뉴를 사용하여 **사용** 또는 **사용 안 함** 을 클릭합니다.
![Git LFS 액세스](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

## 개별 리포지토리의 {% data variables.large_files.product_name_long %} 구성

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

## 사용자 계정 또는 조직이 소유한 모든 리포지토리의 {% data variables.large_files.product_name_long %} 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

{% ifversion ghes %}
## 타사 서버를 사용하도록 Git Large File Storage 구성

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

1. {% data variables.location.product_location %}에서 {% data variables.large_files.product_name_short %}을(를) 사용하지 않도록 설정합니다. 자세한 내용은 “[엔터프라이즈의 {% data variables.large_files.product_name_long %} 구성](#configuring-git-large-file-storage-for-your-enterprise)”을 참조하세요.

2. 타사 서버를 가리키는 {% data variables.large_files.product_name_short %} 구성 파일을 만듭니다.
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

3. 각 사용자에 대해 동일한 {% data variables.large_files.product_name_short %} 구성을 유지하려면 사용자 지정 `.lfsconfig` 파일을 리포지토리에 커밋합니다.
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. 기존 {% data variables.large_files.product_name_short %} 자산을 마이그레이션합니다. 자세한 내용은 “[다른 {% data variables.large_files.product_name_long %} 서버로 마이그레이션](#migrating-to-a-different-git-large-file-storage-server)”을 참조하세요.

## 다른 Git Large File Storage 서버로 마이그레이션

다른 {% data variables.large_files.product_name_long %} 서버로 마이그레이션하기 전에 타사 서버를 사용하도록 {% data variables.large_files.product_name_short %}를 구성해야 합니다. 자세한 내용은 “[타사 서버를 사용하도록 {% data variables.large_files.product_name_long %} 구성](#configuring-git-large-file-storage-to-use-a-third-party-server)”을 참조하세요.

1. 두 번째 원격을 사용하여 리포지토리를 구성합니다.
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

2. 이전 원격에서 모든 개체를 가져옵니다.
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. 모든 개체를 새 원격에 푸시합니다.
  ```shell
  $ git lfs push NEW-REMOTE --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```
{% endif %}

## 추가 참고 자료

- [{% data variables.large_files.product_name_long %} 프로젝트 사이트](https://git-lfs.github.com/)
