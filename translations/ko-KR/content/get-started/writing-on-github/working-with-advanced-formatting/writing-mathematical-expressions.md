---
title: 수학 식 작성
intro: 'Markdown을 사용하여 {% data variables.product.company_short %}에 수학 식을 표시합니다.'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529753'
---
## 수학 식 작성 정보

수학 식의 명확한 전달을 위해 {% data variables.product.product_name %}는 Markdown 내에서 LaTeX 형식의 수학을 지원합니다. 자세한 내용은 Wikibooks에서 [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics)를 참조하세요.

{% data variables.product.company_short %}의 수학 렌더링 기능은 오픈 소스 JavaScript 기반 디스플레이 엔진인 MathJax를 사용합니다. MathJax는 다양한 LaTeX 매크로 및 몇 가지 유용한 접근성 확장을 지원합니다. 자세한 내용은 [MathJax 설명서](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) 및 [MathJax 접근성 확장 설명서](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide)를 참조하세요.

수학 식 렌더링은 {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, 끌어오기 요청, {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}wiki, {% endif %}및 Markdown 파일에서 사용할 수 있습니다.

## 인라인 식 작성

텍스트에 인라인으로 수학 식을 포함하려면 식을 달러(`$`) 기호로 구분합니다.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![인라인 수학 Markdown 렌더링](/assets/images/help/writing/inline-math-markdown-rendering.png)

## 식을 블록으로 작성

수학 식을 블록으로 추가하려면 새 줄을 시작하고 식을 이중 달러(`$$`) 기호로 구분합니다.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![블록 렌더링으로서의 수학 식](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

또는 <code>\`\`\`math</code> 코드 블록 구문을 사용하여 수학 식을 블록으로 표시할 수 있습니다. 이 구문을 사용하면 `$$` 구분 기호를 사용할 필요가 없습니다.

````
**Here is some math!**

```math
\sqrt{3}
```
````

![울타리친 코드 블록의 수학 식](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## 수학 식과 동일한 줄 또는 수학 식 내부에서 달러 기호 사용

달러 기호를 수학 식과 동일한 줄에 문자로 표시하려면 구분 기호가 아닌 `$`를 이스케이프하여 줄이 올바르게 렌더링되도록 해야 합니다.
  
  - 수학 식 내에서 명시적 `$` 앞에 `\` 기호를 추가합니다.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![수학 식 내의 달러 기호](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - 수학 식 외부에 있지만 동일한 줄에서 명시적 `$` 주위에 범위 태그를 사용합니다.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![달러 기호 인라인 수학 식](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## 추가 참고 자료

* [MathJax 웹 사이트](http://mathjax.org)
* [GitHub에서 작성 및 포맷 시작](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub 지정 Markdown 사양](https://github.github.com/gfm/)
