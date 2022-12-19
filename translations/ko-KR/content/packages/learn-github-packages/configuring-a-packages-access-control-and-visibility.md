---
title: 패키지의 액세스 제어 및 표시 여부 구성
intro: '컨테이너 이미지에 대한 읽기, 쓰기 또는 관리자 액세스 권한을 가진 사용자 및 {% data variables.product.prodname_dotcom %}에서 컨테이너 이미지의 공개 여부를 선택합니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Access control & visibility
ms.openlocfilehash: 8ef541f45fd6568db7c8510bc860d81d504494c5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193059'
---
{% data reusables.package_registry.container-registry-ghes-beta %} {% ifversion packages-registries-v2 %}

세분화된 사용 권한이 있는 패키지는 개인 사용자 또는 조직 계정으로 범위가 지정됩니다. 연결된(또는 링크 연결된) 리포지토리와 별도로 패키지의 액세스 제어 및 표시 여부를 변경할 수 있습니다.

일부 레지스트리는 리포지토리 범위 권한만 지원합니다. 이러한 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) 정보"를 참조하세요.

{% else %} 패키지는 패키지를 소유하는 리포지토리의 사용 권한과 표시 유형을 상속합니다. {% endif %} 패키지에 대한 권한, PAT에 대한 패키지 관련 범위 또는 작업 워크플로에 대한 권한 관리에 대한 자세한 내용은 "[GitHub 패키지에 대한 권한 정보](/packages/learn-github-packages/about-permissions-for-github-packages)"를 참조하세요.

{% ifversion packages-registries-v2 %}

## 컨테이너 이미지에 대한 표시 여부 및 액세스 권한

{% data reusables.package_registry.visibility-and-access-permissions %}

{% endif %}

## 개인 계정의 컨테이너 이미지에 대한 액세스 구성

개인 계정이 소유한 컨테이너 이미지에 대한 관리자 권한이 있는 경우 읽기, 쓰기 또는 관리자 역할을 다른 사용자에게 할당할 수 있습니다. 권한 역할에 대한 자세한 내용은 “[컨테이너 이미지에 대한 표시 여부 및 액세스 권한](#visibility-and-access-permissions-for-container-images)”을 참조하세요.

프라이빗 또는 내부 패키지로, 조직이 소유한 경우 다른 조직 구성원 또는 팀에만 액세스 권한을 부여할 수 있습니다.

{% data reusables.package_registry.package-settings-option %}
1. 패키지 설정 페이지에서 **팀 또는 사용자 초대** 를 클릭하고 액세스 권한을 부여하려는 사람의 이름, 사용자 이름 또는 메일을 입력합니다. 팀에게는 개인 계정이 소유한 컨테이너 이미지에 대한 액세스 권한을 부여할 수 없습니다.
  ![컨테이너 액세스 초대 단추](/assets/images/help/package-registry/container-access-invite.png)
1. 사용자 이름 또는 팀 이름 옆에 있는 “역할” 드롭다운 메뉴를 사용하여 원하는 권한 수준을 선택합니다.
  ![컨테이너 액세스 옵션](/assets/images/help/package-registry/container-access-control-options.png)

선택한 사용자는 자동으로 액세스 권한을 부여받게 되며 먼저 초대를 수락할 필요가 없습니다.

## 조직의 컨테이너 이미지에 대한 액세스 구성

조직 소유 컨테이너 이미지에 대한 관리자 권한이 있는 경우 읽기, 쓰기 또는 관리자 역할을 다른 사용자 및 팀에 할당할 수 있습니다. 권한 역할에 대한 자세한 내용은 “[컨테이너 이미지에 대한 표시 여부 및 액세스 권한](#visibility-and-access-permissions-for-container-images)”을 참조하세요.

프라이빗 또는 내부 패키지로, 조직이 소유한 경우 다른 조직 구성원 또는 팀에만 액세스 권한을 부여할 수 있습니다.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. 패키지 설정 페이지에서 **팀 또는 사용자 초대** 를 클릭하고 액세스 권한을 부여하려는 사람의 이름, 사용자 이름 또는 메일을 입력합니다. 조직에서 팀 이름을 입력하여 모든 팀 구성원에게 액세스 권한을 부여할 수도 있습니다.
  ![컨테이너 액세스 초대 단추](/assets/images/help/package-registry/container-access-invite.png)
1. 사용자 이름 또는 팀 이름 옆에 있는 “역할” 드롭다운 메뉴를 사용하여 원하는 권한 수준을 선택합니다.
  ![컨테이너 액세스 옵션](/assets/images/help/package-registry/container-access-control-options.png)

선택한 사용자 또는 팀은 자동으로 액세스 권한을 부여받게 되며 먼저 초대를 수락할 필요가 없습니다.

## 리포지토리에서 컨테이너 이미지에 대한 액세스 상속

{% data variables.product.prodname_actions %} 워크플로를 통해 패키지 관리를 간소화하기 위해 컨테이너 이미지가 기본적으로 리포지토리의 액세스 권한을 상속하도록 설정할 수 있습니다.

패키지의 워크플로가 저장된 리포지토리의 액세스 권한을 상속하는 경우 리포지토리의 권한을 통해 패키지에 대한 액세스를 조정할 수 있습니다.

리포지토리가 동기화되면 패키지의 세분화된 액세스 설정에 액세스할 수 없습니다. 세분화된 패키지 액세스 설정을 통해 패키지의 사용 권한을 사용자 지정하려면 먼저 동기화된 리포지토리를 제거해야 합니다.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
2. “리포지토리 원본”에서 **리포지토리에서 액세스 상속(권장)** 을 선택합니다.
  ![리포지토리 액세스 상속 확인란](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## 패키지에 대한 워크플로 액세스 보장

{% data variables.product.prodname_actions %} 워크플로가 패키지에 액세스할 수 있도록 하려면 워크플로가 저장되는 리포지토리에 대한 명시적 액세스 권한을 부여해야 합니다.

지정된 리포지토리는 패키지의 소스 코드가 유지되는 리포지토리일 필요가 없습니다. 패키지에 여러 리포지토리 워크플로 액세스 권한을 부여할 수 있습니다.

{% note %}

**참고:** **작업 액세스** 메뉴 옵션을 통해 컨테이너 이미지를 리포지토리와 동기화하는 것은 컨테이너를 리포지토리에 연결하는 것과 다릅니다. 리포지토리를 컨테이너에 연결하는 방법에 대한 자세한 내용은 “[리포지토리를 패키지에 연결](/packages/learn-github-packages/connecting-a-repository-to-a-package)”을 참조하세요.

{% endnote %}

### 사용자 계정 소유 컨테이너 이미지의 {% data variables.product.prodname_actions %} 액세스 

{% data reusables.package_registry.package-settings-option %}
1. 왼쪽 사이드바에서 **작업 액세스** 를 클릭합니다.
  ![왼쪽 메뉴의 “작업 액세스” 옵션](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. 워크플로가 컨테이너 패키지에 액세스할 수 있도록 하려면 워크플로가 저장되는 리포지토리를 추가해야 합니다. **리포지토리 추가** 를 클릭하고 추가할 리포지토리를 검색합니다.
   ![“리포지토리 추가” 단추](/assets/images/help/package-registry/add-repository-button.png)
3. “역할” 드롭다운 메뉴를 사용하여 컨테이너 이미지에 대해 리포지토리에 부여할 기본 액세스 수준을 선택합니다.
  ![리포지토리에 부여할 권한 액세스 수준](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

컨테이너 이미지에 대한 액세스를 추가로 사용자 지정하려면 “[개인 계정의 컨테이너 이미지에 대한 액세스 구성](#configuring-access-to-container-images-for-your-personal-account)”을 참조하세요.

### 조직 소유 컨테이너 이미지에 대한 {% data variables.product.prodname_actions %} 액세스 

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
1. 왼쪽 사이드바에서 **작업 액세스** 를 클릭합니다.
  ![왼쪽 메뉴의 “작업 액세스” 옵션](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. **리포지토리 추가** 를 클릭하고 추가할 리포지토리를 검색합니다.
   ![“리포지토리 추가” 단추](/assets/images/help/package-registry/add-repository-button.png)
3. “역할” 드롭다운 메뉴를 사용하여 컨테이너 이미지에 대해 리포지토리 구성원에 부여할 기본 액세스 수준을 선택합니다. 외부 협력자는 포함되지 않습니다.
  ![리포지토리에 부여할 권한 액세스 수준](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

컨테이너 이미지에 대한 액세스를 추가로 사용자 지정하려면 “[조직의 컨테이너 이미지에 대한 액세스 구성](#configuring-access-to-container-images-for-an-organization)”을 참조하세요.

{% ifversion fpt or ghec %}
## 패키지에 대한 {% data variables.product.prodname_github_codespaces %} 액세스 보장

기본적으로 codespace는 액세스 상속 옵션이 선택된 동일한 리포지토리에 게시된 패키지와 같이 세분화된 권한을 지원하는 레지스트리의 특정 패키지에 원활하게 **액세스할** 수 있습니다. 세분화된 권한과 원활한 {% data variables.product.prodname_github_codespaces %} 액세스를 지원하는 {% data variables.product.prodname_registry %} 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한 정보"를 참조하세요](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

액세스가 가능하지 않은 경우 codespace가 패키지에 액세스할 수 있도록 하려면 codespace가 시작되는 리포지토리에 대한 액세스 권한을 부여해야 합니다.

지정된 리포지토리는 패키지의 소스 코드가 유지되는 리포지토리일 필요가 없습니다. 여러 리포지토리의 codespace에 패키지에 대한 액세스 권한을 부여할 수 있습니다.

리포지토리의 codespace와 공유하려는 패키지를 선택하면 해당 리포지토리 액세스 권한을 부여할 수 있습니다.

1. 오른쪽 사이드바에서 **패키지 설정** 을 클릭합니다.

   ![오른쪽 메뉴의 “패키지 설정” 옵션](/assets/images/help/package-registry/package-settings.png)
   
2. “Codespaces 액세스 관리”에서 **리포지토리 추가** 를 클릭합니다.

   ![“리포지토리 추가” 단추](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. 추가할 리포지토리를 검색합니다.

   ![“리포지토리 추가” 단추](/assets/images/help/package-registry/manage-codespaces-access-search.png)
   
4. 액세스를 허용하려는 추가 리포지토리에 동일한 단계를 반복합니다.

5. 리포지토리의 codespace가 더 이상 이미지에 액세스할 필요가 없는 경우 액세스를 제거할 수 있습니다.

   ![“리포지토리 제거” 단추](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## 개인 계정에 대한 컨테이너 이미지 표시 여부 구성

패키지를 처음 게시할 때 기본 표시 여부는 프라이빗이므로 사용자만 패키지를 볼 수 있습니다. 액세스 설정을 변경하여 프라이빗 또는 퍼블릭 컨테이너 이미지의 액세스를 수정할 수 있습니다.

퍼블릭 패키지는 인증 없이 익명으로 액세스할 수 있습니다. 패키지를 퍼블릭으로 설정한 후에는 패키지를 다시 프라이빗으로 설정할 수 없습니다.

{% data reusables.package_registry.package-settings-option %}
5. “위험 영역”에서 표시 여부 설정을 선택합니다.
    - 컨테이너 이미지를 누구에게나 표시하려면 **퍼블릭 설정** 을 클릭합니다.
    {% warning %}

    **경고:** 패키지를 퍼블릭으로 설정한 후에는 다시 프라이빗으로 설정할 수 없습니다.

    {% endwarning %}
    - 사용자 지정으로 선택한 사용자들에게 컨테이너 이미지를 표시하려면 **프라이빗 설정** 을 클릭합니다.
  ![컨테이너 표시 여부 옵션](/assets/images/help/package-registry/container-visibility-option.png)

## 조직 구성원에 대한 컨테이너 만들기 표시 여부

조직 구성원이 기본적으로 게시할 수 있는 컨테이너의 표시 여부를 선택할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 왼쪽에서 **패키지** 를 클릭합니다.
6. “컨테이너 만들기”에서 퍼블릭, 프라이빗 또는 내부 컨테이너 이미지 만들기 중 사용 설정 항목을 선택합니다.
    - 조직 구성원이 퍼블릭 컨테이너 이미지를 만들 수 있도록 하려면 **퍼블릭** 을 클릭합니다.
    - 조직 구성원이 다른 조직 구성원에게만 표시되는 프라이빗 컨테이너 이미지를 만들 수 있도록 하려면 **프라이빗** 을 클릭합니다. 프라이빗 컨테이너 이미지의 표시 여부를 추가로 사용자 지정할 수 있습니다.
    - 조직 구성원이 모든 조직 구성원에게 표시되는 내부 컨테이너 이미지를 만들 수 있도록 하려면 **내부** 를 클릭합니다. 조직이 엔터프라이즈에 속하는 경우 컨테이너 이미지는 모든 엔터프라이즈 구성원에게 표시됩니다.
    ![조직 구성원이 게시한 컨테이너 이미지의 표시 여부 옵션](/assets/images/help/package-registry/container-creation-org-settings.png)

## 조직에 대한 컨테이너 이미지의 표시 여부 구성

패키지를 처음 게시할 때 기본 표시 여부는 프라이빗이므로 사용자만 패키지를 볼 수 있습니다. 액세스 설정을 통해 사용자 또는 팀에게 컨테이너 이미지에 대한 다양한 액세스 역할을 부여할 수 있습니다.

퍼블릭 패키지는 인증 없이 익명으로 액세스할 수 있습니다. 패키지를 퍼블릭으로 설정한 후에는 패키지를 다시 프라이빗으로 설정할 수 없습니다.

{% data reusables.package_registry.package-settings-from-org-level %} {% data reusables.package_registry.package-settings-option %}
5. “위험 영역”에서 표시 여부 설정을 선택합니다.
    - 컨테이너 이미지를 누구에게나 표시하려면 **퍼블릭 설정** 을 클릭합니다.
    {% warning %}

    **경고:** 패키지를 퍼블릭으로 설정한 후에는 다시 프라이빗으로 설정할 수 없습니다.

    {% endwarning %}
    - 사용자 지정으로 선택한 사용자들에게 컨테이너 이미지를 표시하려면 **프라이빗 설정** 을 클릭합니다.
  ![컨테이너 표시 여부 옵션](/assets/images/help/package-registry/container-visibility-option.png)
