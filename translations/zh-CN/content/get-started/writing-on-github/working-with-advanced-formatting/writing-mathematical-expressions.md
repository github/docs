---
title: 编写数学表达式
intro: '使用 Markdown 在 {% data variables.product.company_short %} 上显示数学表达式。'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529749'
---
## 关于编写数学表达式

为了实现数学表达式的清晰传达，{% data variables.product.product_name %} 支持 Markdown 中 LaTeX 格式的数学表达式。 有关详细信息，请参阅 Wikibook 中的 [LaTeX/数学](http://en.wikibooks.org/wiki/LaTeX/Mathematics)。

{% data variables.product.company_short %} 的数学呈现功能使用 MathJax；真是一种基于 JavaScript 的开源显示引擎。 MathJax 支持广泛的 LaTeX 宏，以及几个有用的辅助功能扩展。 有关详细信息，请参阅 [MathJax 文档](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support)和 [MathJax 辅助功能扩展文档](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide)。

数学表达式可在以下项中呈现：{% data variables.product.prodname_github_issues %}、{% data variables.product.prodname_discussions %}、拉取请求、{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}Wiki {% endif %}和 Markdown 文件。

## 编写内联表达式

要在文本中包含内联数学表达式，请使用美元符号 `$` 分隔表达式。

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![内联数学 markdown 呈现](/assets/images/help/writing/inline-math-markdown-rendering.png)

## 将表达式编写为块

要以块的形式添加数学表达式，请启动一个新行，并使用两个美元符号 `$$` 分隔表达式。

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![数学表达式作为块呈现](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

或者，可以使用 <code>\`\`\`math</code> 代码块语法将数学表达式显示为块。 使用此语法时，无需使用 `$$` 分隔符。

````
**Here is some math!**

```math
\sqrt{3}
```
````

![围栏代码块中的数学表达式](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## 在数学表达式所在的行中和数学表达式内编写美元符号

要在数学表达式所在的同一行中将美元符号显示为字符，需要对非分隔符 `$` 进行转义以确保行正确呈现。
  
  - 在数学表达式内，在显式 `$` 之前添加一个 `\` 符号。

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![数学表达式内的美元符号](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - 在数学表达式之外，但在同一行上，在显式 `$` 两边使用 span 标记。

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![美元符号内联数学表达式](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## 延伸阅读

* [MathJax 网站](http://mathjax.org)
* [Getting started with writing and formatting on GitHub（GitHub 写作和格式设置入门）](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub 支持的 Markdown 规范](https://github.github.com/gfm/)
