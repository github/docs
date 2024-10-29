---
title: Writing mathematical expressions
intro: 'Use Markdown to display mathematical expressions on {% data variables.product.company_short %}.'
versions:
  feature: math
shortTitle: Mathematical expressions
---

## About writing mathematical expressions

To enable clear communication of mathematical expressions, {% data variables.product.product_name %} supports LaTeX formatted math within Markdown. For more information, see [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) in Wikibooks.

{% data variables.product.company_short %}'s math rendering capability uses MathJax; an open source, JavaScript-based display engine. MathJax supports a wide range of LaTeX macros, and several useful accessibility extensions. For more information, see [the MathJax documentation](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) and [the MathJax Accessibility Extensions Documentation](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

Mathematical expressions rendering is available in {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, pull requests, wikis, and Markdown files.

## Writing inline expressions

{% ifversion math-backtick-syntax %}
There are two options for delimiting a math expression inline with your text. You can either surround the expression with dollar symbols (`$`), or start the expression with <code>$\`</code> and end it with <code>\`$</code>. The latter syntax is useful when the expression you are writing contains characters that overlap with markdown syntax. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)."
{% else %}
To include a math expression inline within your text, delimit the expression with dollar symbols `$`.
{% endif %}

```text
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Screenshot of rendered Markdown showing how a mathematical expression displays on {% data variables.product.prodname_dotcom %}. The equation is the square root of 3 x minus 1 plus open paren 1 plus x close paren squared.](/assets/images/help/writing/inline-math-markdown-rendering.png)

{% ifversion math-backtick-syntax %}

```text
This sentence uses $\` and \`$ delimiters to show math inline:  $`\sqrt{3x-1}+(1+x)^2`$
```

![Screenshot of rendered Markdown showing how a mathematical expression displays inline on {% data variables.product.prodname_dotcom %}. The equation is the square root of 3 x minus 1 plus open paren 1 plus x close paren squared.](/assets/images/help/writing/inline-backtick-math-markdown-rendering.png)
{% endif %}

## Writing expressions as blocks

To add a math expression as a block, start a new line and delimit the expression with two dollar symbols `$$`.

```text
**The Cauchy-Schwarz Inequality**
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Screenshot of rendered Markdown showing how a complex equation displays on {% data variables.product.prodname_dotcom %}. The bolded text reads "The Cauchy-Schwarz Inequality". Below the text, there is an equation showing open paren the sum from k equals 1 to n of a sub k b sub k close paren squared is less than or equal to open paren the sum from k equals 1 to n of a sub k squared close paren times open paren the sum from k equals 1 to n of b sub k squared close paren.](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Alternatively, you can use the <code>\`\`\`math</code> code block syntax to display a math expression as a block. With this syntax, you don't need to use `$$` delimiters. The following will render the same as above:

````text
**The Cauchy-Schwarz Inequality**

```math
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```
````

{% endif %}

## Writing dollar signs in line with and within mathematical expressions

To display a dollar sign as a character in the same line as a mathematical expression, you need to escape the non-delimiter `$` to ensure the line renders correctly.

* Within a math expression, add a `\` symbol before the explicit `$`.

  ```text
  This expression uses `\$` to display a dollar sign: $`\sqrt{\$4}`$
  ```

  ![Screenshot of rendered Markdown showing how a backslash before a dollar sign displays the sign as part of a mathematical expression.](/assets/images/help/writing/dollar-sign-within-math-expression.png)

* Outside a math expression, but on the same line, use span tags around the explicit `$`.

  ```text
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Screenshot of rendered Markdown showing how span tags around a dollar sign display the sign as inline text rather than part of a mathematical equation.](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Further reading

* [The MathJax website](http://mathjax.org)
* [Getting started with writing and formatting on GitHub](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
