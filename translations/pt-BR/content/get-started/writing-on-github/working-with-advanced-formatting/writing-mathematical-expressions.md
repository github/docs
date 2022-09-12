---
title: Como escrever expressões matemáticas
intro: 'Use o Markdown para exibir expressões matemáticas no {% data variables.product.company_short %}.'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147529748'
---
## Sobre como escrever expressões matemáticas

Para permitir a comunicação clara das expressões matemáticas, o {% data variables.product.product_name %} dá suporte à matemática formatada LaTeX no Markdown. Para obter mais informações, confira [LaTeX/matemática](http://en.wikibooks.org/wiki/LaTeX/Mathematics) no Wikibooks.

A funcionalidade de renderização de matemática do {% data variables.product.company_short %} usa o MathJax, um mecanismo de exibição baseado em JavaScript, de código aberto. O MathJax dá suporte a uma ampla variedade de macros LaTeX e a várias extensões de acessibilidade úteis. Para obter mais informações, confira [a documentação do MathJax](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) e [a documentação de Extensões de Acessibilidade do MathJax](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

A renderização de expressões matemáticas está disponível em {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, solicitações de pull, {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}wikis, {% endif %}e arquivos markdown.

## Como escrever expressões embutidas

Para incluir uma expressão matemática embutida no texto, delimite a expressão com um símbolo de dólar `$`.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Renderização de markdown matemática embutida](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Como escrever expressões como blocos

Para adicionar uma expressão matemática como um bloco, inicie uma nova linha e delimite a expressão com dois símbolos de dólar `$$`.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Renderização de expressão matemática como bloco](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Como alternativa, você pode usar a sintaxe do bloco de código <code>\`\`\`math</code> para exibir uma expressão matemática como um bloco. Com essa sintaxe, você não precisa usar delimitadores `$$`.

````
**Here is some math!**

```math
\sqrt{3}
```
````

![Expressão matemática em um bloco de código limitado](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## Como escrever sinais de dólar embutidos em expressões matemáticas

Para exibir um sinal de dólar como um caractere na mesma linha que uma expressão matemática, você precisa fazer o escape do não delimitador `$` para garantir que a linha seja renderizada corretamente.
  
  - Dentro de uma expressão matemática, adicione um símbolo `\` antes do `$` explícito.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![Sinal de dólar dentro da expressão matemática](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - Fora de uma expressão matemática, mas na mesma linha, coloque o `$` explícito entre tags span.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Expressão matemática embutida com sinal de dólar](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Leitura adicional

* [O site do MathJax](http://mathjax.org)
* [Introdução à escrita e formatação no GitHub](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [Especificações do GitHub Flavored Markdown](https://github.github.com/gfm/)
