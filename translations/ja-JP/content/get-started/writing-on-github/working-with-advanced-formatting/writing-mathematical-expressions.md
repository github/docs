---
title: Writing mathematical expressions
intro: 'Use Markdown to display mathematical expressions on {% data variables.product.company_short %}.'
versions:
  feature: math
shortTitle: Mathematical expressions
---

To enable clear communication of mathematical expressions, {% data variables.product.product_name %} supports LaTeX formatted math within Markdown. For more information, see [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) in Wikibooks.

{% data variables.product.company_short %}'s math rendering capability uses MathJax; an open source, JavaScript-based display engine. MathJax supports a wide range of LaTeX macros, and several useful accessibility extensions. For more information, see [the MathJax documentation](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) and [the MathJax Accessibility Extensions Documentation](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

## Writing inline expressions

To include a math expression inline with your text, delimit the expression with a dollar symbol `$`.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Inline math markdown rendering](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Writing expressions as blocks

To add a math expression as a block, start a new line and delimit the expression with two dollar symbols `$$`.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Math expression as a block rendering](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Alternatively, you can use the <code>\`\`\`math</code> code block syntax to display a math expression as a block. With this syntax, you don't need to use `$$` delimiters.

````
**Here is some math!**

```math
\sqrt{3}
```
````
![Math expression in a fenced code block](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)
{% endif %}
## Writing dollar signs in line with and within mathematical expressions
To display a dollar sign as a character in the same line as a mathematical expression, you need to escape the non-delimiter `$` to ensure the line renders correctly.
- Within a math expression, add a `\` symbol before the explicit `$`.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```
![Dollar sign within math expression](/assets/images/help/writing/dollar-sign-within-math-expression.png)
- Outside a math expression, but on the same line, use span tags around the explicit `$`.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Dollar sign inline math expression](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## 参考リンク

* [The MathJax website](http://mathjax.org)
* [GitHub で書き、フォーマットしてみる](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
