---
title: 코드 블록 만들기 및 강조 표시
intro: 울타리친 코드 블록과 코드 샘플을 공유하고 구문 강조 표시를 사용하도록 설정합니다.
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
  - /github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Create code blocks
ms.openlocfilehash: ba0b49795df16fbafc77ef43c6fef58684162709
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882419'
---
## 펜싱된 코드 블록

코드 블록 앞뒤에 삼중 백틱 <code>\`\`\`</code>을 배치하여 펜싱된 코드 블록을 만들 수 있습니다. 원시 서식을 더 쉽게 읽을 수 있도록 코드 블록 전후에 빈 줄을 배치하는 것이 좋습니다.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![렌더링된 펜싱된 코드 블록](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**팁:** 목록 내에서 서식을 유지하려면 펜싱되지 않은 코드 블록을 8개 공백으로 들여써야 합니다.

{% endtip %}

펜싱된 코드 블록에 3중 백틱을 표시하려면 4중 백틱 안에 넣습니다.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![백틱 블록과 함께 렌더링된 펜싱된 코드](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 구문 강조 표시

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

선택적 언어 식별자를 추가하여 펜싱된 코드 블록에서 구문을 강조하도록 설정할 수 있습니다.

예를 들어 구문에서 Ruby 코드를 강조 표시하려면 다음을 수행합니다.

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Ruby 구문이 강조 표시된 렌더링된 코드 블록](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

[Linguist](https://github.com/github/linguist)를 사용하여 언어 검색을 수행하고 구문 강조를 위해 [타사 문법](https://github.com/github/linguist/blob/master/vendor/README.md)을 선택합니다. [언어 YAML 파일](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)에서 유효한 키워드를 확인할 수 있습니다.

{% ifversion mermaid %}
## 다이어그램 만들기

코드 블록을 사용하여 Markdown으로 다이어그램을 만들 수도 있습니다. GitHub는 Mermaid, GeoJSON, TopoJSON, ASCII STL 구문을 지원합니다. 자세한 내용은 “[다이어그램 만들기](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)”를 참조하세요.

{% endif %}
## 추가 참고 자료

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 사양](https://github.github.com/gfm/)
- “[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax)”
