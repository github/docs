---
title: 编写数学表达式
intro: '使用 Markdown 在 {% data variables.product.company_short %} 上显示数学表达式。'
versions:
  feature: math
shortTitle: 数学表达式
---

为了清晰地沟通数学表达式，{% data variables.product.product_name %} 在 Markdown 中支持 LaTeX 格式的数学。 更多信息请参阅维基教科书中的 [LaTeX/Math](http://en.wikibooks.org/wiki/LaTeX/Mathematics)。

{% data variables.product.company_short %} 的数学渲染能力使用 MathJax；这是一个开源、基于JavaScript 的显示引擎。 MathJax 支持广泛的 LaTeX 宏，以及几个有用的可访问性扩展。 更多信息请参阅 [MathJax 文档](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) 和 [MathJax 辅助功能扩展文档](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide)。

## 编写内联表达式

要在文本中包含内联的数学表达式，请使用美元符号 `$` 分隔表达式。

```
此句子使用 `$` 分隔符来显示内联数学：$\sqrt{3x-1}+(1+x)^2$
```

![内联数学 Markdown 渲染](/assets/images/help/writing/inline-math-markdown-rendering.png)

## 将表达式编写为块

要将数学表达式添加为块，请开始一个新行，并使用两个美元符号 `$$` 分隔表达式。

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![作为块渲染的数学表达式](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

或者，可以使用 <code>\`\`\`math</code> 代码块语法将数学表达式显示为块。 使用此语法，无需使用 `$$` 分隔符。

````
**Here is some math!**

```math
\sqrt{3}
```
````
![围栏代码块中的数学表达式](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)
{% endif %}
## 联接数学表达式以及在数学表达式内编写美元符号
要将美元符号显示为与数学表达式相同的行中的字符，需要对非分隔符 `$` 进行转义，以确保该行正确呈现。
- 在数学表达式中，在显式 `$`之前添加 `\` 符号。

  ```
  此表达式使用 `\$` 来显示美元符号：$\sqrt{\$4}$
  ```
![数学表达式中的美元符号](/assets/images/help/writing/dollar-sign-within-math-expression.png)
- 在数学表达式之外，但在同一行上，在显式 `$` 周围使用 span 标记。

  ```
  要 <span>$</span>100 分成两半，我们计算 $100/2$
  ```

  ![数学表达式中嵌入的美元符号](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## 延伸阅读

* [MathJax 网站](http://mathjax.org)
* [开始在 GitHub 上编写和格式化](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub Flavored Markdown 规格](https://github.github.com/gfm/)
