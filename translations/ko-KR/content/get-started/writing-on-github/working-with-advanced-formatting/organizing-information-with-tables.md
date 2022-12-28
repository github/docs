---
title: 테이블로 구성 정보
intro: '주석, 이슈, 끌어오기 요청 및 wiki의 정보를 구성하는 테이블을 작성할 수 있습니다.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068605'
---
## 테이블 만들기

파이프 `|` 및 하이픈 `-`을 사용하여 테이블을 만들 수 있습니다. 하이픈은 각 열의 헤더를 만드는 데 사용되는 반면 파이프는 각 열을 분리합니다. 올바르게 렌더링하려면 테이블 앞에 빈 줄을 포함해야 합니다.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![렌더링된 테이블](/assets/images/help/writing/table-basic-rendered.png)

테이블의 양쪽 끝에 있는 파이프는 선택 사항입니다.

셀은 너비가 다를 수 있으며 열 내에서 완벽하게 정렬할 필요가 없습니다. 헤더 행의 각 열에 하이픈이 3개 이상 있어야 합니다.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![다양한 셀 너비의 렌더링된 테이블](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 테이블 내 콘텐츠 서식 지정

테이블 내에서 링크, 인라인 코드 블록, 텍스트 스타일과 같은 [서식](/articles/basic-writing-and-formatting-syntax)을 사용할 수 있습니다.

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![서식이 지정된 텍스트가 있는 렌더링된 테이블](/assets/images/help/writing/table-inline-formatting-rendered.png)

헤더 행 내 하이픈의 왼쪽, 오른쪽 또는 양쪽에 콜론 `:`을 포함하여 텍스트를 열의 왼쪽, 오른쪽 또는 가운데에 맞출 수 있습니다.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![왼쪽, 가운데, 오른쪽 텍스트 맞춤이 있는 렌더링된 테이블](/assets/images/help/writing/table-aligned-text-rendered.png)

파이프 `|`를 셀 내에 콘텐츠로 포함하려면 파이프 앞에 `\`를 사용합니다.

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![이스케이프된 파이프가 있는 렌더링된 테이블](/assets/images/help/writing/table-escaped-character-rendered.png)

## 추가 참고 자료

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 사양](https://github.github.com/gfm/)
- “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax)”
