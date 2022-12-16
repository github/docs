---
title: 토론 범주 양식에 대한 구문
shortTitle: Syntax for discussion category forms
intro: YAML 구문을 사용하여 토론 범주 양식의 필드를 정의할 수 있습니다.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193565'
---
{% data reusables.discussions.discussions-category-forms-beta %}

## 토론 범주 양식에 대한 YAML 구문 정보

리포지토리의 폴더에 YAML 양식 정의 파일을 `/.github/DISCUSSION_TEMPLATE/` 추가하여 사용자 지정 토론 범주 양식을 만들 수 있습니다. {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussions-category-forms-name %}

각 필드에 대해 입력 형식, 유효성 검사 및 기본 레이블을 정의할 수 있습니다.

커뮤니티 구성원이 토론 양식을 작성하면 각 입력에 대한 응답이 markdown으로 변환되고 토론 본문에 추가됩니다. 커뮤니티 구성원은 토론 양식으로 만든 토론을 편집할 수 있으며 다른 사용자는 다른 방법을 통해 만든 토론과 같은 토론과 상호 작용할 수 있습니다.

이 예제 YAML 구성 파일은 일반 토론 범주 양식을 정의합니다.

{% data reusables.discussions.discussions-category-forms-sample %}

## 최상위 구문

토론 범주 양식의 구성 파일에는 키가 포함되어 `body` 야 하며 `body` 에 Markdown이 아닌 필드가 1개 이상 포함되어야 합니다.

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

각 문제 양식에 대해 다음 최상위 키를 설정할 수 있습니다.

| 키 | 설명 | 필수 | 형식 |
| :-- | :-- | :-- | :-- | :-- |
| `body` | 토론 양식의 입력 형식 정의입니다. | 필수 | 배열 |
| `labels` | 이 템플릿을 사용하여 만든 토론에 자동으로 추가되는 레이블입니다. | 선택 사항 | 배열 또는 쉼표로 구분된 문자열 |
| `title` | 토론 제출 양식에 미리 채워지는 기본 제목입니다. | 선택 사항 | String |

양식에 필드를 추가하려면 키에 양식 요소 배열을 `body` 포함합니다. 사용 가능한 요소 및 해당 구문 목록은 "[{% data variables.product.prodname_dotcom %}의 양식 스키마 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)"을 참조하세요.
