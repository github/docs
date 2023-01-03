---
title: 프로필 추가 정보 관리
intro: '{% data variables.product.prodname_dotcom %} 프로필에 README를 추가하여 다른 사용자에게 자신에 대해 알릴 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
ms.openlocfilehash: f1f78d5aeff7212c2ea76bf9e8ae2248a269308e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094219'
---
## 프로필 추가 정보에 대한 정보

프로필 추가 정보를 만들어 {% 데이터 variables.location.product_location %}에서 커뮤니티와 자신에 대한 정보를 공유할 수 있습니다. {% data variables.product.prodname_dotcom %}는 프로필 페이지의 맨 위에 프로필 추가 정보를 표시합니다.

사용자가 프로필 추가 정보에 포함할 정보를 결정하므로 {% data variables.product.prodname_dotcom %}에서 자신을 표현하는 방법을 완전히 제어할 수 있습니다. 다음은 방문자가 프로필 추가 정보에서 흥미롭거나 재미있거나 유용하다고 느낄 수 있는 정보의 몇 가지 예입니다.

- 사용자의 작업과 관심사를 설명하는 “내 정보” 섹션
- 자랑스럽게 여기는 기여와 해당 기여에 대한 컨텍스트
- 참여하는 커뮤니티에서 도움을 받기 위한 지침

![프로필에 표시되는 프로필 추가 정보 파일](/assets/images/help/repository/profile-with-readme.png)

{% data variables.product.company_short %} Flavored Markdown을 사용하여 프로필 추가 정보에서 텍스트에 서식을 지정하고 이모지, 이미지 및 GIF를 포함할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 쓰기 및 서식 지정 시작](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”을 참조하세요. 프로필 추가 정보 사용자 지정에 대한 실습 가이드는 "[{% 데이터 variables.product.prodname_dotcom %}에 쓰기 위한 빠른 시작](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"을 참조하세요.

## 필수 조건

다음이 모두 true이면 GitHub가 프로필 페이지에 프로필 추가 정보를 표시합니다.

- {% data variables.product.prodname_dotcom %} 사용자 이름과 일치하는 이름의 리포지토리를 만들었습니다.
- 리포지토리는 퍼블릭입니다.
- 리포지토리에는 루트에 README.md라는 파일이 포함되어 있습니다.
- README.md 파일에는 모든 콘텐츠가 포함됩니다.

{% note %}

**참고**: 2020년 7월 이전에 사용자 이름과 동일한 이름의 퍼블릭 리포지토리를 만든 경우 {% data variables.product.prodname_dotcom %}는 프로필에 리포지토리의 추가 정보를 자동으로 표시하지 않습니다. {% data variables.product.prodname_dotcom_the_website %}의 리포지토리로 이동하고 **프로필에 공유를** 클릭하여 리포지토리의 추가 정보를 프로필에 수동으로 공유할 수 있습니다.

![프로필에 추가 정보 공유 단추](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## 프로필 추가 정보 추가

{% data reusables.repositories.create_new %}
2. “리포지토리 이름”에 {% data variables.product.prodname_dotcom %} 사용자 이름과 일치하는 리포지토리 이름을 입력합니다. 예를 들어 사용자 이름이 “octocat”인 경우 리포지토리 이름은 “octocat”이어야 합니다.
  ![사용자 이름과 일치하는 리포지토리 이름 필드](/assets/images/help/repository/repo-username-match.png)
3. 필요에 따라 리포지토리에 관한 설명을 추가합니다. (예: “내 개인 리포지토리”)
  ![리포지토리 설명을 입력하기 위한 필드](/assets/images/help/repository/create-personal-repository-desc.png)
4. **공용** 을 선택합니다.
 ![퍼블릭이 선택된 표시 여부 선택 라디오 단추](/assets/images/help/repository/create-personal-repository-visibility.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. 오른쪽 사이드바 위에서 **추가 정보 편집** 을 클릭합니다.
  ![추가 정보 파일을 편집하는 단추](/assets/images/help/repository/personal-repository-edit-readme.png)
  
  생성된 추가 정보 파일은 프로필 추가 정보에 영감을 주기 위해 템플릿으로 미리 채워집니다.
  ![템플릿으로 미리 채워진 추가 정보 파일](/assets/images/help/repository/personal-repository-readme-template.png)

사용 가능한 모든 이모지 및 해당 코드에 대한 요약은 “[이모지 치트 시트](https://www.webfx.com/tools/emoji-cheat-sheet/)”를 참조하세요.

## 프로필 추가 정보 제거

다음 중 하나라도 적용되는 경우 프로필 추가 정보가 {% data variables.product.prodname_dotcom %} 프로필에서 제거됩니다.

- 추가 정보 파일이 비어 있거나 존재하지 않습니다.
- 리포지토리가 프라이빗입니다.
- 리포지토리 이름이 더 이상 사용자 이름과 일치하지 않습니다.

선택하는 방법은 필요에 따라 달라지지만 확실하지 않은 경우 리포지토리를 프라이빗으로 만드는 것이 좋습니다. 리포지토리를 프라이빗으로 만드는 방법에 대한 단계는 “[리포지토리의 표시 여부 변경](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility)”을 참조하세요.

## 추가 참고 자료

- [추가 정보 정보](/github/creating-cloning-and-archiving-repositories/about-readmes)
