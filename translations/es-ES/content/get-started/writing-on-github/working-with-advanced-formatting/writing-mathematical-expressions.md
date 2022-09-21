---
title: Escritura de expresiones matemáticas
intro: 'Usa Markdown para mostrar expresiones matemáticas en {% data variables.product.company_short %}.'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529755'
---
## Acerca de la escritura de expresiones matemáticas

Para habilitar una comunicación clara de las expresiones matemáticas, {% data variables.product.product_name %} admite expresiones matemáticas con formato LaTeX en Markdown. Para obtener más información, consulta [LaTeX/Expresiones matemáticas](http://en.wikibooks.org/wiki/LaTeX/Mathematics) en Wikibooks.

La funcionalidad de representación de expresiones matemáticas de {% data variables.product.company_short %} usa MathJax, un motor de visualización basado en JavaScript de código abierto. MathJax admite una amplia gama de macros de LaTeX y varias extensiones de accesibilidad útiles. Para obtener más información, consulta la [documentación de MathJax](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) y la [documentación sobre extensiones de accesibilidad de MathJax](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

La representación de expresiones matemáticas está disponible en {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, solicitudes de incorporación de cambios, {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}wikis, {% endif %}y archivos Markdown.

## Escritura de expresiones insertadas

Para incluir una expresión matemática insertada en el texto, delimita la expresión con un símbolo de dólar (`$`).

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Representación de Markdown con una expresión matemática insertada](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Escritura de expresiones como bloques

Para agregar una expresión matemática como un bloque, empieza una línea nueva y delimita la expresión con dos símbolos de dólar (`$$`).

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Expresión matemática representada como un bloque](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Otra opción es usar la sintaxis de bloque de código <code>\`\`\`math</code> para mostrar una expresión matemática como un bloque. Con esta sintaxis, no es necesario usar los delimitadores `$$`.

````
**Here is some math!**

```math
\sqrt{3}
```
````

![Expresión matemática en un bloque de código cercado](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## Escritura de signos de dólar insertados y dentro de expresiones matemáticas

Para mostrar un signo de dólar como un carácter en la misma línea que una expresión matemática, debes incluir en una secuencia de escape el signo `$` que no es un delimitador para asegurarte de que la línea se representa correctamente.
  
  - Dentro de una expresión matemática, agrega el símbolo `\` antes del símbolo `$` explícito.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![Símbolo de dólar en una expresión matemática](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - Fuera de una expresión matemática, pero en la misma línea, rodea de etiquetas "span" el símbolo `$` explícito.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Símbolo de dólar insertado en una expresión matemática](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Información adicional

* [Sitio web de MathJax](http://mathjax.org)
* [Introducción a la escritura y la aplicación de formato en GitHub](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [Especificación de Markdown de tipo GitHub](https://github.github.com/gfm/)
