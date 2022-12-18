---
title: 축소된 섹션을 사용하여 정보 구성
intro: '`<details>` 태그를 사용하여 축소된 섹션을 만들어 Markdown을 간소화할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146273100'
---
## 축소된 섹션 만들기

사용자가 확장하도록 선택할 수 있는 축소된 섹션을 만들어 Markdown의 섹션을 일시적으로 가릴 수 있습니다. 예를 들어, 모든 사용자와 관련이 없거나 흥미롭지 않을 수 있는 이슈 주석에 기술 세부 정보를 포함하려는 경우 해당 세부 정보를 축소된 섹션에 넣을 수 있습니다.

`<details>` 블록 내의 Markdown은 사용자가 {% octicon "triangle-right" aria-label="The right triange icon" %}을 클릭하여 세부 정보를 확장할 때까지 축소됩니다. `<details>` 블록 내에서 `<summary>` 태그를 사용하여 {% octicon "triangle-right" aria-label="The right triange icon" %} 오른쪽에 레이블을 만듭니다.

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

Markdown은 기본적으로 축소됩니다.

![렌더링된 축소된 섹션](/assets/images/help/writing/collapsed-section-view.png)

사용자가 {% octicon "triangle-right" aria-label="The right triange icon" %}을 클릭하면 세부 정보가 확장됩니다.

![렌더링된 열린 섹션](/assets/images/help/writing/open-collapsed-section.png)

## 추가 참고 자료

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 사양](https://github.github.com/gfm/)
- “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax)”
