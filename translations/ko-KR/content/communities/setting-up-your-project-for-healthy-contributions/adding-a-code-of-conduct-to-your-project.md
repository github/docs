---
title: 프로젝트에 사용 규정 추가
intro: '사용 규정을 채택하여 커뮤니티 표준을 정의하고, 호의적이고 포괄적인 프로젝트를 알릴 수 있으며, 남용을 처리하기 위한 절차의 윤곽을 설명합니다.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
ms.openlocfilehash: dcf1e589ae4f803017752f9e919aad304c570fbc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090215'
---
‘사용 규정’은 커뮤니티에 참여하는 방법에 대한 표준을 정의합니다. 모든 기여를 존중하는 포용적 환경을 암시합니다. 또한 프로젝트 커뮤니티 멤버 간 문제를 해결하기 위한 절차를 간략하게 설명합니다. 사용 규정이 커뮤니티에 참여하는 방법에 대한 표준과 기대치를 정의하는 이유에 대한 자세한 내용은 [오픈 소스 가이드](https://opensource.guide/code-of-conduct/)를 참조하세요.

프로젝트에 대한 사용 규정을 채택하기 전에 다음을 수행합니다.

* 오픈 소스 프로젝트를 위해 설계된 다양한 사용 규정을 조사합니다. 커뮤니티의 표준을 반영하는 사용 규정을 선택합니다.
* 기꺼이 적용할 수 있는지 여부를 신중하게 고려합니다.

템플릿을 사용하거나 사용자 지정 사용 규정을 수동으로 만들어 프로젝트에 사용 규정을 추가할 수 있습니다. 어떤 방식이든 사용 규정을 사용할 수 있지만, 템플릿을 사용하는 경우에만 리포지토리의 커뮤니티 프로필에서 “사용 규정”이 완료된 것으로 표시됩니다. 다른 사용자나 조직에서 작성한 사용 규정을 사용하는 경우 원본의 표시 지침을 따라야 합니다. 커뮤니티 프로필에 대한 자세한 내용은 “[퍼블릭 리포지토리의 커뮤니티 프로필 정보](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)”를 참조하세요.

조직 또는 개인 계정의 기본 사용 규정을 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

## 템플릿을 사용하여 사용 규정 추가

{% data variables.product.product_name %}은(는) 프로젝트에 사용 규정을 신속하게 추가할 수 있도록 일반적인 사용 규정용 템플릿을 제공합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 *CODE_OF_CONDUCT.md* 를 입력합니다.
4. **사용 규정 템플릿 선택** 을 클릭합니다.
  ![사용 규정 템플릿 선택 단추](/assets/images/help/repository/code-of-conduct-tool.png)
5. 페이지 왼쪽에서 미리 보고 프로젝트에 추가할 사용 규정을 선택합니다.
  ![사용 규정 템플릿 선택](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. 페이지 오른쪽에 있는 필드를 작성하여 선택한 사용 규정을 적절한 정보로 채웁니다.
7. **검토 후 제출** 을 클릭합니다.
  ![사용 규정 검토 및 프로젝트에 제출](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. 텍스트 영역에 있는 사용 규정 내용을 검토합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 수동으로 사용 규정 추가

제공된 템플릿에서 원하는 사용 규정을 사용할 수 없는 경우 수동으로 사용 규정을 추가할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 파일 이름 및 확장명을 입력합니다.
  ![새 사용 규정 파일 이름](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - 리포지토리의 루트 디렉터리에 사용 규정을 표시하려면 파일 이름 필드에 *CODE_OF_CONDUCT* 를 입력합니다.
    - 리포지토리의 `docs` 디렉터리에 사용 규정을 표시하려면 *docs/CODE_OF_CONDUCT* 를 입력합니다.
    - 리포지토리의 `.github` 디렉터리에 사용 규정을 표시하려면 *.github/CODE_OF_CONDUCT* 를 입력합니다.
4. 새 파일에서 사용자 지정 사용 규정을 추가합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
