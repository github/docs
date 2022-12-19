---
title: Creating a default community health file(기본 커뮤니티 상태 파일 만들기)
intro: CONTRIBUTING 및 CODE_OF_CONDUCT 같은 기본 커뮤니티 상태 파일을 만들 수 있습니다. 기본 파일은 해당 형식의 자체 파일을 포함하지 않는 계정에서 소유한 모든 리포지토리에 사용됩니다.
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 85a672d0cc0991a5325df8a107737da47c7b81d3
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193630'
---
## 기본 커뮤니티 상태 파일 정보

리포지토리의 루트 또는 `docs` 또는 `.github` 폴더에 있는 `.github`라는 이름의 공개 리포지토리에 기본 커뮤니티 상태 파일을 추가할 수 있습니다.

{% data variables.product.product_name %}은(는) 해당 계정이 소유하고 있으며 다음과 같은 위치에 해당 유형의 파일이 없는 리포지토리에 대해 이러한 기본 파일을 사용하고 표시합니다.
- 리포지토리의 루트
- `.github` 폴더
- `docs` 폴더

예를 들어 자체 CONTRIBUTING 파일이 없는 리포지토리에서 문제 또는 끌어오기 요청을 생성하는 사용자는 기본 CONTRIBUTING 파일에 대한 링크를 볼 수 있습니다. 리포지토리에 자체 `.github/ISSUE_TEMPLATE` 폴더가 있는 경우{% ifversion fpt or ghes or ghec %}(문제 템플릿 또는 *config.yml* 파일 포함),{% endif %} 기본 `.github/ISSUE_TEMPLATE` 폴더의 내용이 사용되지 않습니다.

기본 파일은 `.github` 리포지토리에만 저장되므로 개별 리포지토리의 클론, 패키지 또는 다운로드에 포함되지 않습니다.

## 지원되는 파일 형식

다음 커뮤니티 상태 파일에 대한 조직{% ifversion fpt or ghes or ghec %} 또는 개인 계정{% endif %}에서 기본값을 만들 수 있습니다.

커뮤니티 상태 파일 | 설명 --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | CODE_OF_CONDUCT 파일은 커뮤니티에 참여하는 방법에 대한 표준을 정의합니다. 자세한 내용은 “[프로젝트에 사용 규정 추가](/articles/adding-a-code-of-conduct-to-your-project/)”를 참조하세요. {% endif %} *CONTRIBUTING.md* | CONTRIBUTEING 파일은 사용자가 프로젝트에 기여하는 방법을 전달합니다. 자세한 내용은 "[리포지토리 기여자를 위한 지침 설정"을 참조하세요.](/articles/setting-guidelines-for-repository-contributors/) {% ifversion discussion-category-forms %} 토론 범주 양식 | 토론 범주 양식은 커뮤니티 구성원이 리포지토리에서 새 토론을 열 때 사용할 수 있는 템플릿을 사용자 지정합니다. 자세한 내용은 "[토론 범주 양식 만들기](/discussions/managing-discussions-for-your-community/creating-discussion-category-forms)"를 참조하세요. {% endif %} {% ifversion fpt or ghec %} *FUNDING.yml* | FUNDING 파일은 리포지토리에 스폰서 단추를 표시하여 오픈 소스 프로젝트에 대한 자금 조달 옵션의 가시성을 높입니다. 자세한 내용은 “[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)”를 참조하세요. {% endif %} 문제 및 끌어오기 요청 템플릿{% ifversion fpt or ghes or ghec %} 및 *config.yml*{% endif %} | 문제 및 끌어오기 요청 템플릿은 리포지토리에서 문제 및 끌어오기 요청을 열 때 기여자가 포함할 정보를 사용자 지정하고 표준화합니다. 자세한 내용은 “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates/)”를 참조하세요. {% ifversion fpt or ghes or ghec %} *SECURITY.md* | SECURITY 파일은 프로젝트에서 보안 취약성을 보고하는 방법에 대한 지침을 제공합니다. 자세한 내용은 “[리포지토리에 보안 정책 추가](/code-security/getting-started/adding-a-security-policy-to-your-repository)”를 참조하세요.{% endif %} *SUPPORT.md* | 지원 파일을 사용하면 프로젝트에 대한 도움말을 얻을 수 있는 방법을 알 수 있습니다. 자세한 내용은 “[프로젝트에 지원 리소스 추가](/articles/adding-support-resources-to-your-project/)”를 참조하세요.

기본 라이선스 파일을 만들 수 없습니다. 프로젝트를 복제, 패키지 또는 다운로드할 때 파일이 포함되도록 라이선스 파일을 개별 리포지토리에 추가해야 합니다.

## 기본 파일에 대한 리포지토리 만들기

{% data reusables.repositories.create_new %}
2. **소유자** 드롭다운 메뉴를 사용하고 기본 파일을 만들려는 조직{% ifversion fpt or ghes or ghec %} 또는 개인 계정{% endif %}을 선택합니다.
  ![소유자 드롭다운 메뉴](/assets/images/help/repository/create-repository-owner.png)
3. 리포지토리의 이름과 설명(선택 사항)에 **.github** 를 입력합니다.
  ![리포지토리 만들기 필드](/assets/images/help/repository/default-file-repository-name.png)
4. 리포지토리 상태가 **공개** 로 설정되어 있는지 확인합니다(기본 파일의 리포지토리는 비공개일 수 없음).
  ![비공개 또는 공개 상태를 선택하는 라디오 단추](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. 리포지토리에서 지원되는 커뮤니티 상태 파일 중 하나를 만듭니다. 문제 템플릿{% ifversion fpt or ghes or ghec %} 및 해당 구성 파일{% endif %}은 `.github/ISSUE_TEMPLATE` 폴더에 있어야 합니다. 기타 지원되는 모든 파일은 리포지토리의 루트, `.github` 폴더 또는 `docs` 폴더에 있을 수 있습니다. 자세한 내용은 “[새 파일 만들기](/articles/creating-new-files/)”를 참조하세요.
