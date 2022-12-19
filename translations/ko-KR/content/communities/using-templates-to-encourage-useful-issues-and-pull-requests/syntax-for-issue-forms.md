---
title: 문제 양식 구문
intro: '문제 양식에 대해 다양한 입력 유형, 유효성 검사, 기본 담당자, 기본 레이블을 정의할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 7e147868ce370b57c6a7437bc81f7b554f50443b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090167'
---
{% data reusables.community.issue-forms-beta %}

## 문제 양식에 대한 YAML 구문 정보

YAML 양식 정의 파일을 리포지토리의 `/.github/ISSUE_TEMPLATE` 폴더에 추가하여 사용자 지정 문제 양식을 만들 수 있습니다. {% data reusables.actions.learn-more-about-yaml %} 문제 양식에 대해 다양한 입력 유형, 유효성 검사, 기본 담당자, 기본 레이블을 정의할 수 있습니다.

참가자가 문제 양식을 작성하면 각 입력에 대한 응답이 Markdown으로 변환되고 문제 본문에 추가됩니다. 참가자는 문제 양식으로 만든 문제를 편집할 수 있으며 다른 사용자는 다른 메서드를 통해 생성된 문제와 같은 문제와 상호 작용할 수 있습니다.

문제 양식은 끌어오기 요청에 지원되지 않습니다. 협력자가 사용할 리포지토리에 끌어오기 요청 템플릿을 만들 수 있습니다. 자세한 내용은 “[리포지토리에 대한 끌어오기 요청 템플릿 만들기](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)”를 참조하세요.

이 예제 YAML 구성 파일은 여러 입력을 사용하여 버그를 보고하는 문제 양식을 정의합니다.

{% data reusables.community.issue-forms-sample %}

## 최상위 구문

모든 문제 양식 구성 파일은 `name`, `description`, `body` 키-값 쌍으로 시작해야 합니다.

```YAML{:copy}
name:
description:
body:
```

각 문제 양식에 대해 다음 최상위 키를 설정할 수 있습니다.

| 키 | Description | 필수 | Type |
| :-- | :-- | :-- | :-- | :-- |
| `name` | 문제 양식 템플릿의 이름입니다. Markdown 템플릿을 비롯한 다른 모든 템플릿에서 고유해야 합니다. | 필수 | String |
| `description` | 템플릿 선택기 인터페이스에 표시되는 문제 양식 서식 파일에 대한 설명입니다. | 필수 | String |
| `body` | 양식의 입력 형식 정의입니다. | 필수 | 배열 |
| `assignees` | 이 템플릿으로 만든 문제에 자동으로 할당되는 사용자입니다. | 선택 사항 | 배열 또는 쉼표로 구분된 문자열 |
| `labels` | 이 템플릿으로 생성된 문제에 자동으로 추가될 레이블입니다. | 선택 사항 | 배열 또는 쉼표로 구분된 문자열 |
| `title` | 문제 제출 양식에 미리 채워지는 기본 제목입니다. | 선택 사항 | String |

사용 가능한 `body` 입력 형식 및 해당 구문은 “[{% data variables.product.prodname_dotcom %}의 양식 스키마 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)”을 참조하세요.

## Markdown 문제 템플릿을 YAML 문제 양식 서식 파일로 변환

리포지토리에서 Markdown 및 YAML 문제 템플릿을 모두 사용할 수 있습니다. Markdown 문제 템플릿을 YAML 문제 양식 서식 파일로 변환하려면 새 YAML 파일을 만들어 문제 양식을 정의해야 합니다. 기존 Markdown 문제 템플릿을 YAML 문제 양식으로 수동으로 변환할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 문제 템플릿 구성](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)”을 참조하세요.

YAML 문제 양식에 동일한 파일 이름을 사용하려면 리포지토리에 새 파일을 커밋할 때 Markdown 문제 템플릿을 삭제해야 합니다.

Markdown 문제 템플릿 및 해당 YAML 문제 양식 서식 파일의 예는 다음과 같습니다.

### Markdown 문제 템플릿

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? References? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### YAML 문제 양식 템플릿

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS:
        - Node:
        - npm:
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## 추가 참고 자료

- [YAML](https://yaml.org/)
- [문제 양식을 만들 때 발생하는 일반적인 유효성 검사 오류](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
