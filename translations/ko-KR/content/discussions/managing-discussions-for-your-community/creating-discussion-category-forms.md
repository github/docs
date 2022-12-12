---
title: 토론 범주 양식 만들기
shortTitle: Create discussion category forms
intro: 커뮤니티 구성원이 리포지토리에서 새 토론을 열 때 사용할 수 있는 템플릿을 사용자 지정할 수 있습니다.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193485'
---
{% data reusables.discussions.discussions-category-forms-beta %}

## 토론 범주 양식 정보

리포지토리에서 토론 양식을 사용하여 커뮤니티 구성원이 토론에 특정하고 구조화된 정보를 포함하도록 장려할 수 있습니다. 토론 범주 양식을 사용하면 사용자 지정 가능한 웹 양식 필드가 있는 토론 템플릿을 만들 수 있습니다. 토론 양식은 {% data variables.product.prodname_dotcom %} 양식 스키마를 사용하여 YAML로 작성됩니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 양식 스키마 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)”을 참조하세요. 

{% data reusables.actions.learn-more-about-yaml %}

리포지토리에서 토론 범주 양식을 사용하려면 새 파일을 만들고 리포지토리의  `/.github/DISCUSSION_TEMPLATE/` 폴더에 추가해야 합니다. 

조직에 대한 토론 범주 양식을 만들 수도 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

토론 범주 양식은 설문 조사에 지원되지 않습니다. 설문 조사에 대한 자세한 내용은 "[설문 조사 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls)"를 참조하세요.

다음은 문제 양식의 렌더링된 버전입니다.

  ![렌더링된 토론 범주 양식의 스크린샷](/assets/images/help/discussions/discussion-category-form-sample.png)

## 토론 범주 양식 만들기

리포지토리에 대한 쓰기 권한이 있는 사람 토론 범주 양식을 만들 수 있습니다. 

1. 토론 범주 양식을 만들 리포지토리로 이동합니다. 
2. 리포지토리에서 라는 `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml`파일을 만들고 를 토론 범주 양식의 이름으로 바꿉 `FORM-NAME` 있습니다. {% data reusables.discussions.discussions-category-forms-name %} GitHub에서 새 파일을 만드는 방법에 대한 자세한 내용은 "[새 파일 만들기"를 참조하세요](/github/managing-files-in-a-repository/creating-new-files).
3. 새 파일의 본문에 토론 범주 양식의 내용을 입력합니다. 자세한 내용은 "[토론 범주 양식 구문"을 참조하세요](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms).
4. 파일을 리포지토리의 기본 분기에 커밋합니다. 자세한 내용은 “[새 파일 만들기](/github/managing-files-in-a-repository/creating-new-files)”를 참조하세요.
