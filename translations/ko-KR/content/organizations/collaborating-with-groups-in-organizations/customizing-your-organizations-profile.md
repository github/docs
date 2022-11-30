---
title: 조직의 프로필 사용자 지정
intro: 조직의 프로필을 사용자 지정하여 조직에 대한 정보를 공유할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447932'
---
## 조직의 프로필 페이지 정보

{% ifversion org-profile-pin-private %} 조직의 개요 페이지를 사용자 지정하여 퍼블릭 사용자 또는 조직 구성원 전용 추가 정보 및 고정된 리포지토리를 표시할 수 있습니다.

![퍼블릭 조직 프로필 페이지 이미지](/assets/images/help/organizations/public_profile.png)

{% data variables.product.prodname_dotcom %}에 로그인한 조직 구성원은 조직의 프로필 페이지를 방문할 때 추가 정보 및 고정된 저장소의 `member` 또는 `public` 보기를 선택할 수 있습니다. 

![퍼블릭 조직 프로필 페이지 보기 컨텍스트 전환기의 이미지](/assets/images/help/organizations/profile_view_switcher_public.png)

구성원 전용 추가 정보 또는 구성원 전용 고정 리포지토리가 있는 경우 보기의 기본값은 `member`이고 그렇지 않은 경우 `public`입니다.

![구성원 전용 조직 프로필 페이지 이미지](/assets/images/help/organizations/member_only_profile.png)

조직의 구성원이 아닌 사용자에게는 `public` 보기가 표시됩니다.

### 고정 리포지토리

공용 사용자를 위한 최대 6개의 리포지토리와 조직 구성원을 위한 6개의 리포지토리를 선택하여 사용자에게 중요하거나 자주 사용하는 리포지토리에 쉽게 액세스할 수 있습니다. 조직 프로필에 리포지토리를 고정하면 프로필 페이지의 "리포지토리" 섹션 위에 "고정됨" 섹션이 표시됩니다.

조직 소유자만 리포지토리를 고정할 수 있습니다. 자세한 내용은 "[조직 프로필에 리포지토리 고정](#pinning-repositories-to-your-organizations-profile)"을 참조하세요.

### 조직 프로필 추가 정보 파일

{% endif %}

공용 사용자와 조직 구성원 모두에 대한 조직 프로필 추가 정보 파일을 만들어 조직과 소통하는 방법에 관한 정보를 공유할 수 있습니다. {% data variables.product.prodname_dotcom %}는 조직의 “개요” 탭에 조직 프로필 추가 정보를 표시합니다.

조직 프로필 추가 정보 파일에 포함할 정보를 선택할 수 있습니다. 다음은 도움이 될 수 있는 대표적인 정보입니다.

- 조직을 설명하는 “정보” 섹션
- 조직에서 도움을 받기 위한 지침

{% data variables.product.company_short %} Flavored Markdown을 사용하여 조직 프로필 추가 정보에서 텍스트에 서식을 지정하고 이모지, 이미지 및 GIF를 포함할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 쓰기 및 서식 지정 시작](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”을 참조하세요.

## 공개 조직 프로필 추가 정보 파일 추가

1. 조직에 퍼블릭 `.github` 리포지토리가 없는 경우 퍼블릭 `.github` 리포지토리를 만듭니다.
2. 조직의 `.github` 리포지토리에서 `profile` 폴더에 `README.md` 파일을 만듭니다.
3. `README.md` 파일에 대한 변경 내용을 커밋합니다. `README.md`의 콘텐츠가 조직의 공개 프로필에 표시됩니다.

   ![조직의 공개 추가 정보 파일 이미지](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## 구성원 전용 조직 프로필 추가 정보 파일 추가

1. 조직에 `.github-private` 리포지토리가 없는 경우 `.github-private`이라는 이름의 프라이빗 리포지토리를 만듭니다. 
2. 조직의 `.github-private` 리포지토리에서 `profile` 폴더에 `README.md` 파일을 만듭니다.
3. `README.md` 파일에 대한 변경 내용을 커밋합니다. `README.md`의 콘텐츠는 조직 프로필의 구성원 보기에 표시됩니다.

   ![조직의 구성원 전용 추가 정보 이미지](/assets/images/help/organizations/org_member_readme.png)

## 조직의 프로필에 리포지토리 고정

자주 사용하는 리포지토리 같은 특징적인 리포지토리를 조직의 프로필 페이지에 고정할 수 있습니다. 조직의 프로필에 고정할 리포지토리를 선택하려면 조직 소유자여야 합니다.

1. 조직의 프로필 페이지로 이동합니다.
2. {% octicon "eye" aria-label="The eye octicon" %} "다음으로 보기" 링크에서 페이지 오른쪽 사이드바의 드롭다운 메뉴에서 **공개** 또는 **구성원** 프로필 보기를 선택합니다.

   ![조직 프로필 보기 드롭다운 이미지](/assets/images/help/organizations/org_profile_view.png)

3. 고정된 리포지토리 섹션에서 **핀 사용자 지정** 을 선택합니다.

   ![핀 사용자 지정 링크 이미지](/assets/images/help/organizations/customize_pins_link.png)

   - 아직 조직의 프로필에 리포지토리를 고정하지 않은 경우 대신 프로필 페이지 오른쪽 사이드바에 있는 **리포지토리 고정** 을 클릭해야 합니다.
   ![오른쪽 사이드바의 리포지토리 고정 링크 이미지](/assets/images/help/organizations/pin_repositories_link.png)

4. "고정된 리포지토리 편집" 대화 상자에서 표시할 퍼블릭, {% ifversion not fpt %}프라이빗, 또는 내부{% else %}또는 프라이빗{% endif %} 리포지토리 조합을 6개까지 선택합니다.

   ![고정된 리포지토리 대화 상자 이미지](/assets/images/help/organizations/pinned_repo_dialog.png)

5. **핀 저장** 을 클릭합니다.

{% endif %}
