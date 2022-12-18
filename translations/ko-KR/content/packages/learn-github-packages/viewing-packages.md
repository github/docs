---
title: 패키지 보기
intro: 리포지토리에 게시된 패키지에 대한 세부 정보를 확인하고 조직 또는 사용자별로 결과를 좁힐 수 있습니다.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192843'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 패키지 보기 정보

패키지를 볼 수 있는 역량은 여러 가지 요인에 따라 달라집니다. 기본적으로 게시한 모든 패키지를 볼 수 있습니다.

{% ifversion packages-registries-v2 %} 리포지토리 범위 패키지는 패키지를 소유하는 리포지토리에서 권한 및 표시 유형을 상속합니다. 일부 레지스트리는 리포지토리 범위 패키지 **만** 지원합니다. 이러한 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한 정보"를 참조하세요](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

다른 레지스트리는 개인 사용자 또는 조직 계정이 소유한 각 패키지에 대해 사용자 지정할 수 있는 세분화된 권한 및 표시 유형 설정 옵션을 제공합니다. 세분화된 권한을 사용하거나 패키지를 리포지토리에 연결하고 리포지토리의 권한을 상속하도록 선택할 수 있습니다. 자세한 내용은 "[패키지에 리포지토리 연결](/packages/learn-github-packages/connecting-a-repository-to-a-package)" 및 "[패키지의 액세스 제어 및 표시 유형 구성"을 참조하세요](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% else %}

패키지는 호스트되는 리포지토리에서 사용 권한과 표시 유형을 상속합니다. 자세한 내용은 “[{% data variables.product.prodname_registry %}에 대한 권한 정보](/packages/learn-github-packages/about-permissions-for-github-packages)”를 참조하세요.

{% endif %}

{% data reusables.package_registry.package-page-info %}

## 리포지토리의 패키지 보기

특정 리포지토리에 있는 패키지를 찾아볼 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## 조직의 패키지 보기

자신이 속한 조직의 리포지토리에 있는 패키지를 찾아볼 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 조직 이름 아래에서 {% octicon "package" aria-label="The package icon" %} **패키지** 를 클릭합니다.
{% data reusables.package_registry.navigate-to-packages %}

## 패키지 보기

모든 조직 및 리포지토리에서 자신이 게시한 패키지를 찾아볼 수 있습니다. 

{% data reusables.profile.access_profile %}
2. 프로필 페이지의 맨 위에 있는 기본 탐색에서 **패키지** 를 클릭합니다.
  ![프로젝트 탭](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## 추가 참고 자료

- “[패키지 검색](/search-github/searching-on-github/searching-for-packages)”
