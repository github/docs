---
title: GitHub 양식 스키마 구문
intro: '{% data variables.product.company_short %}의 양식 스키마를 사용하여 지원되는 기능에 대한 양식을 구성할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
ms.openlocfilehash: f5910f3cfdeeb148dc92ee537de4c26551a02f26
ms.sourcegitcommit: ab0ae13cc28587f0302181d58a9519d88c7c1ef9
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/21/2022
ms.locfileid: '148101711'
---
{% note %}

**참고:** {% data variables.product.company_short %}의 양식 스키마는 현재 베타 버전이며 변경될 수 있습니다.

{% endnote %}

## {% data variables.product.company_short %}의 양식 스키마 정보

{% data variables.product.company_short %}의 양식 스키마를 사용하여 지원되는 기능에 대한 양식을 구성할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 문제 템플릿 구성](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)”을 참조하세요.

양식은 사용자 입력을 요청하기 위한 요소 집합입니다. 양식 요소의 배열인 YAML 양식 정의를 만들어 양식을 구성할 수 있습니다. 각 양식 요소는 요소의 형식, 요소의 속성, 요소에 적용할 제약 조건을 결정하는 키-값 쌍 집합입니다. 일부 키의 경우 값은 키-값 쌍의 또 다른 집합입니다.

예를 들어 다음 양식 정의에는 사용자의 운영 체제를 제공하기 위한 텍스트 영역, 사용자가 실행 중인 소프트웨어 버전을 선택하기 위한 드롭다운 메뉴, 사용 규정을 승인하는 확인란, 양식을 완료한 사용자에게 감사하는 Markdown 등 네 가지 양식 요소가 포함되어 있습니다.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## 구성

각 양식 요소에 대해 다음 키를 설정할 수 있습니다.

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | 정의하려는 요소의 형식입니다. | 필수 | String | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `id` | `type`이 `markdown`으로 설정된 경우를 제외하고 요소의 식별자입니다. {% data reusables.form-schema.id-must-be-unique %} 제공되는 경우 `id`는 URL 쿼리 매개 변수 미리 채우기의 필드에 대한 정규 식별자입니다. | 선택 사항 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `attributes` | 요소의 속성을 정의하는 키-값 쌍 집합입니다.  | 필수 | 맵 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | 요소에 대한 제약 조건을 설정하는 키-값 쌍 집합입니다. | 선택 사항 | 맵 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

다음 유형의 양식 요소 중에서 선택할 수 있습니다. 각 형식에는 고유한 특성 및 유효성 검사가 있습니다.

| 형식 | 설명 |
| ---- | ----------- |
| [`markdown`](#markdown) | 사용자에게 추가 컨텍스트를 제공하기 위해 양식에 표시되지만 **제출되지 않은** Markdown 텍스트입니다. |
| [`textarea`](#textarea) | 여러 줄 텍스트 필드. |
| [`input`](#input) | 단일 줄 텍스트 필드. |
| [`dropdown`](#dropdown) | 드롭다운 메뉴. |
| [`checkboxes`](#checkboxes) | 확인란 집합. |

### `markdown`

`markdown` 요소를 사용하여 사용자에게 추가 컨텍스트를 제공하지만 제출되지 않는 Markdown을 양식에 표시할 수 있습니다.

#### 특성

{% data reusables.form-schema.attributes-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | 렌더링되는 텍스트. Markdown 서식 지정이 지원됩니다. | 필수 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**팁:** YAML 처리는 해시 기호를 주석으로 처리합니다. Markdown 헤더를 삽입하려면 텍스트를 따옴표로 묶습니다.

여러 줄 텍스트의 경우 파이프 연산자를 사용할 수 있습니다.

{% endtip %}

#### 예제

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

`textarea` 요소를 사용하여 양식에 여러 줄 텍스트 필드를 추가할 수 있습니다. 기여자는 `textarea` 필드에 파일을 첨부할 수도 있습니다.

#### 특성

{% data reusables.form-schema.attributes-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | 양식에도 표시되는 예상 사용자 입력에 대한 간략한 설명입니다. | 필수 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | 양식에 표시되는 컨텍스트 또는 지침을 제공하는 텍스트 영역에 대한 설명입니다. | 선택 사항 | String | 빈 문자열 | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | 비어 있을 때 텍스트 영역에 렌더링되는 반투명 자리 표시자입니다. | 선택 사항 | String | 빈 문자열 | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | 텍스트 영역에 미리 채워진 텍스트입니다. | 선택 사항 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | 값이 제공되면 제출된 텍스트의 서식이 코드 블록으로 지정됩니다. 이 키를 제공하면 파일 첨부 파일 또는 Markdown 편집을 위해 텍스트 영역이 확장되지 않습니다. | 선택 사항 | String | {% octicon "dash" aria-label="The dash icon" %} | {% data variables.product.prodname_dotcom %}에 알려진 언어입니다. 자세한 내용은 [언어 YAML 파일](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)을 참조하세요. |

#### 유효성 검사

{% data reusables.form-schema.validations-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### 예제

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

`input` 요소를 사용하여 양식에 단일 줄 텍스트 필드를 추가할 수 있습니다.

#### 특성

{% data reusables.form-schema.attributes-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | 양식에도 표시되는 예상 사용자 입력에 대한 간략한 설명입니다. | 필수 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | 양식에 표시되는 컨텍스트 또는 지침을 제공하는 필드에 대한 설명입니다. | 선택 사항 | String | 빈 문자열 | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | 필드가 비어 있을 때 렌더링되는 반투명 자리 표시자입니다. | 선택 사항 | String | 빈 문자열 | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | 필드에 미리 채워진 텍스트입니다. | 선택 사항 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### 유효성 검사

{% data reusables.form-schema.validations-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### 예제

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

`dropdown` 요소를 사용하여 양식에 드롭다운 메뉴를 추가할 수 있습니다.

#### 특성

{% data reusables.form-schema.attributes-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | 양식에 표시되는 예상 사용자 입력에 대한 간략한 설명입니다. | 필수 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | 양식에 표시되는 추가 컨텍스트 또는 지침을 제공하기 위한 드롭다운에 대한 설명입니다. | 선택 사항 | String | 빈 문자열 | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | 사용자가 둘 이상의 옵션을 선택할 수 있는지 여부를 결정합니다. | 선택 사항 | 부울 | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | 사용자가 선택할 수 있는 옵션 배열입니다. 비워 둘 수 없으며 모든 선택 항목은 고유해야 합니다. | 필수 | 문자열 배열 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### 유효성 검사

{% data reusables.form-schema.validations-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### 예제

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

`checkboxes` 요소를 사용하여 양식에 체크박스 세트를 추가할 수 있습니다.

#### 특성

{% data reusables.form-schema.attributes-intro %}

| 키 | 설명 | 필수 | Type | 기본값 | 유효한 값 |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | 양식에 표시되는 예상 사용자 입력에 대한 간략한 설명입니다. | 필수 | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | 양식에 표시되는 확인란 집합에 대한 설명입니다. Markdown 서식 지정을 지원합니다. | 선택 사항 | String | 빈 문자열 | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | 사용자가 선택할 수 있는 확인란의 배열입니다. 구문의 경우 아래를 참조하세요. | 필수 | 배열 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %} {% data reusables.form-schema.required-key %}

#### 예제

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## 추가 참고 자료

- [YAML](https://yaml.org)
