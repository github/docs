---
title: 문제 양식을 만들 때 발생하는 일반적인 유효성 검사 오류
intro: 이슈 양식을 만들거나 저장하거나 볼 때 이러한 일반적인 유효성 검사 오류 중 일부가 표시될 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 55eae6e043f82bfbaa49f7af42e23e4cb56f0ee8
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147650343'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## 필수 최상위 키 `name`이 누락됨

템플릿에 `name` 필드가 포함되어 있지 않습니다. 즉, 사용자에게 옵션 목록을 제공할 때 문제 템플릿을 무엇이라고 불러야 할지 명확하지 않습니다.

### 예제

```yaml
description: "Thank you for reporting a bug!"
...
```

`name`을 키로 추가하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## `key`는 문자열이어야 함

이 오류 메시지는 허용된 키가 제공되었지만 데이터 형식이 지원되지 않으므로 해당 값을 구문 분석할 수 없음을 의미합니다.

### 예제

아래 `description`은 부울로 구문 분석되지만 문자열이어야 합니다.

```yaml
name: "Bug report"
description: true
...
```

문자열을 값으로 제공하여 오류를 해결할 수 있습니다. 문자열을 성공적으로 구문 분석하려면 큰따옴표로 묶어야 할 수 있습니다. 예를 들어 `'`가 포함된 문자열은 큰따옴표로 묶어야 합니다.

```yaml
name: "Bug report"
description: "true"
...
```

필드에 문자열이 필요한 경우 빈 문자열 또는 공백만으로 구성된 문자열도 허용되지 않습니다.

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

값을 비어 있지 않은 문자열로 수정하여 오류를 해결할 수 있습니다. 필드가 필요하지 않은 경우 키-값 쌍을 삭제해야 합니다.

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `input`이 허용된 키가 아님

템플릿의 최상위 수준에 예기치 않은 키가 제공되었습니다. 지원되는 최상위 키에 대한 자세한 내용은 “[문제 양식 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)”을 참조하세요.

### 예제

```yaml
name: "Bug report"
hello: world
...
```

예기치 않은 키를 제거하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
...
```

## 금지된 키

YAML은 특정 문자열을 `Boolean` 값으로 구문 분석합니다. 이를 방지하기 위해 다음 키의 사용을 명시적으로 금지했습니다.

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

금지된 키를 제거하여 오류를 해결할 수 있습니다.

## 본문에는 Markdown이 아닌 필드가 하나 이상 포함되어야 함

문제 양식은 사용자 입력을 허용해야 합니다. 즉, 해당 필드 중 하나 이상에는 사용자 입력 필드가 포함되어야 합니다. `markdown` 요소는 정적 텍스트이므로 `body` 배열에는 `markdown` 요소만 포함할 수 없습니다.

### 예제

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

사용자 입력을 허용하는 Markdown이 아닌 요소를 추가하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## 본문에는 고유 ID가 있어야 함

`id` 특성을 사용하여 여러 요소를 구별하는 경우 각 `id` 특성은 고유해야 합니다.

### 예제

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

모든 `input` 필드에 고유한 `id` 특성이 있도록 이러한 입력 중 하나의 `id`를 변경하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## 본문에는 고유한 레이블이 있어야 함

사용자 입력을 허용하는 `body` 요소가 여러 개 있는 경우 각 사용자 입력 필드의 `label` 특성은 고유해야 합니다.

### 예제

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

각 `label`이 고유하도록 입력 필드 중 하나에 대한 `label` 특성을 변경하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

입력 필드는 `id` 특성으로 구분할 수도 있습니다. 중복 `label` 특성이 필요한 경우 동일한 레이블이 있는 두 요소를 구별하기 위해 하나 이상의 `id`를 제공할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

`id` 특성은 문제 본문에 표시되지 않습니다. 결과 문제에서 필드를 구분하려면 고유한 `label` 특성을 사용해야 합니다.


## 레이블이 너무 유사함

유사한 레이블은 동일한 참조로 처리될 수 있습니다. `id` 특성이 `input`에 제공되지 않으면 `label` 특성이 `input` 필드에 대한 참조를 생성하는 데 사용됩니다. 이를 위해 Rails [매개 변수화](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) 메서드를 활용하여 `label`을 처리합니다. 경우에 따라 다른 두 레이블을 동일하게 매개 변수화된 문자열로 처리할 수 있습니다.

### 예제

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

충돌하는 레이블 중 하나에 구별되는 영숫자 문자, `-` 또는 `_`를 하나 이상 추가하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

충돌하는 레이블 중 하나에 고유한 `id`를 지정하여 오류를 수정할 수도 있습니다.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## 확인란에는 고유한 레이블이 있어야 함

`checkboxes` 요소가 있는 경우 중첩된 각 레이블은 피어 및 다른 입력 유형 간에 고유해야 합니다.

### 예제

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

이러한 입력 중 하나에 대한 `label` 특성을 변경하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

또는 충돌하는 최상위 요소에 `id`를 제공할 수 있습니다. 중첩된 확인란 요소는 `id` 특성을 지원하지 않습니다.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

`id` 특성은 문제 본문에 표시되지 않습니다. 결과 문제에서 필드를 구분하려면 고유한 `label` 특성을 사용해야 합니다.

## 본문[i]: 필수 키 형식이 누락됨

각 본문 블록에는 `type` 키가 포함되어야 합니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록에서 0으로 인덱싱된 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

유효한 입력 유형이 있는 `type` 키를 값으로 추가하여 오류를 수정할 수 있습니다. 사용 가능한 `body` 입력 형식 및 해당 구문은 “[{% data variables.product.prodname_dotcom %}의 양식 스키마 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)”을 참조하세요.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## 본문[i]: `x`는 올바른 입력 형식이 아님

본문 블록 중 하나에 [허용된 유형](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys) 중 하나가 아닌 유형 값이 있습니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

`x`를 유효한 유형 중 하나로 변경하여 오류를 수정할 수 있습니다.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## 본문[i]: 필수 특성 키 `value`가 누락됨

필요한 `value` 특성 중 하나가 제공되지 않았습니다. 블록에 `attributes` 키가 없거나 `attributes` 키 아래에 `value` 키가 없는 경우 오류가 발생합니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

이 예제의 오류는 `body`의 두 번째 목록 요소에서 `attributes` 아래에 키로 `value`를 추가하여 수정할 수 있습니다.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## 본문[i]: 레이블은 문자열이어야 함

`attributes` 블록 내에서 값의 데이터 형식이 잘못되었습니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

아래 `label`은 부울로 구문 분석되지만 문자열이어야 합니다.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

`label`에 대한 문자열 값을 제공하여 오류를 수정할 수 있습니다. 부울, 정수 또는 10진수로 구문 분석할 수 있는 `label` 값을 사용하려는 경우 값을 따옴표로 묶어야 합니다. 예를 들어 `true` 또는 `1.3` 대신 `"true"` 또는 `"1.3"`을 사용합니다.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

특성에 문자열이 필요한 경우 빈 문자열 또는 공백만으로 구성된 문자열은 허용되지 않습니다. 예를 들어 `""` 또는 `"     "`는 허용되지 않습니다.

특성이 필요한 경우 값은 비어 있지 않은 문자열이어야 합니다. 필드가 필요하지 않은 경우 키-값 쌍을 삭제해야 합니다.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## 본문[i]: `id`에는 숫자, 문자, -, _만 포함될 수 있음

`id` 특성은 영숫자, `-`, `_`만 포함할 수 있습니다. 템플릿에는 `id`에 공백과 같이 허용되지 않는 문자가 포함될 수 있습니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

공백 및 기타 허용되지 않는 문자를 `id` 값에서 제거하여 오류를 수정할 수 있습니다.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## 본문[i]: `x`는 허용된 키가 아님

`type` 및 `attributes`와 동일한 들여쓰기 수준에서 예기치 않은 키 `x`가 제공되었습니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

추가 키를 제거하고 `type`, `attributes`, `id`만 사용하여 오류를 수정할 수 있습니다.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## 본문[i]: `label`에 금지어가 포함되어 있음

개인 정보 및 자격 증명이 GitHub 문제에 공개적으로 게시될 위험을 최소화하기 위해 공격자가 일반적으로 사용하는 일부 단어는 입력 또는 텍스트 영역 요소의 `label`에서 허용되지 않습니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

`label` 필드에서 “암호”와 같은 용어를 제거하여 오류를 수정할 수 있습니다.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## 본문[i]: `x`는 허용된 특성이 아님

`attributes` 블록에 잘못된 키가 제공되었습니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

추가 키를 제거하고 허용된 특성만 사용하여 오류를 수정할 수 있습니다.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## 본문[i]: `options`는 고유해야 합니다.

확인란 및 드롭다운 입력 유형의 경우 `options` 배열에 정의된 선택 항목은 고유해야 합니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

`options` 배열에 중복 선택 항목이 없는지 확인하여 오류를 수정할 수 있습니다.

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## 본문[i]: `options`에는 예약어인 없음이 포함되어서는 안 됨

“없음”은 `dropdown`이 필요하지 않을 때 선택하지 않음을 나타내는 데 사용되기 때문에 `options` 집합의 예약어입니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

옵션으로 “없음”을 제거하여 오류를 해결할 수 있습니다. 기여자가 이러한 유형의 파이를 좋아하지 않음을 나타낼 수 있게 하려면 `required` 유효성 검사를 추가로 제거할 수 있습니다.

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

이 예제에서 “없음”은 선택 가능한 옵션으로 자동으로 채워집니다.

## 본문[i]: `options`는 부울을 포함해서는 안 됨. ‘예’, ‘true’ 등의 값을 따옴표로 묶으세요.

따옴표로 묶지 않는 한 YAML 파서에 의해 부울 값으로 처리되는 영어 단어가 많습니다. 드롭다운 `options`의 경우 모든 항목은 부울이 아닌 문자열이어야 합니다.

`body`가 있는 오류에는 `body[i]` 접두사가 붙습니다. 여기서 `i`는 오류가 포함된 본문 블록의 인덱스를 나타냅니다. 예를 들어 `body[0]`은 오류가 `body` 목록의 첫 번째 블록에 의해 발생했음을 알려줍니다.

### 예제

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

문제가 되는 각 옵션을 따옴표로 묶어 부울 값으로 처리되지 않도록 하여 오류를 수정할 수 있습니다.

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## 본문은 비워 둘 수 없음

템플릿 본문 `key:value` 쌍은 비워 둘 수 없습니다. 필요한 최상위 키에 대한 자세한 내용은 “[이슈 양식 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)”을 참조하세요.

`body:` 섹션을 추가하여 오류를 수정할 수 있습니다.

### 예제

```yaml
name: Support Request
description: Something went wrong and you need help?
---
body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

이 예제에서는 헤더와 `body` 섹션 사이의 `---`(문서 구분 기호)를 삭제하여 오류를 해결할 수 있습니다.

```yaml
name: Support Request
description: Something went wrong and you need help?

body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

## 추가 참고 자료

- [YAML](https://yaml.org/)
- [문제 양식 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
