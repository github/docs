---
title: Написание математических выражений
intro: 'Для отображения математических выражений в {% data variables.product.company_short %} используйте Markdown.'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529754'
---
## О написании математических выражений

Чтобы обеспечить четкое взаимодействие математических выражений, {% data variables.product.product_name %} поддерживает математические выражения в формате LaTeX в Markdown. Дополнительные сведения см. на странице [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) веб-сайта Wikibooks.

Функция отображения математических выражений {% data variables.product.company_short %} использует MathJax. Это подсистема отображения с открытым кодом на основе JavaScript. MathJax поддерживает широкий спектр макросов LaTeX и несколько полезных расширений специальных возможностей. Дополнительные сведения см. в документации по [MathJax](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) и [расширениям специальных возможностей MathJax](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

Отрисовка математических выражений доступна в {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, запросах на вытягивание, {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}вики-страницах, {% endif %}и файлах Markdown.

## Написание встроенных выражений

Чтобы встроить математическое выражение в текст, разделите выражение символом доллара `$`.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Отображение встроенных математических выражений с помощью Markdown](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Написание выражений в виде блоков

Чтобы добавить математическое выражение в виде блока, запустите новую строку и разделите выражение двумя символами доллара `$$`.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Отображение математического выражения в виде блока](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Кроме того, для отображения математического выражения в виде блока вы можете использовать синтаксис блока кода <code>\`\`\`math</code>. В этом синтаксисе не нужно использовать разделители `$$`.

````
**Here is some math!**

```math
\sqrt{3}
```
````

![Математическое выражение в изолированном блоке кода](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## Использование знаков доллара в одной строке с математическими выражениями и внутри них

Чтобы отобразить знак доллара как символ в той же строке, что и математическое выражение, необходимо экранировать `$`, не являющийся разделителем, для правильного отображения строки.
  
  - В математическом выражении добавьте символ `\` перед явным знаком `$`.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![Знак доллара в математическом выражении](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - За пределами математического выражения, но в той же строке заключите явный знак `$` в теги диапазона.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Знак доллара, встроенный в математическое выражение](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Дополнительные сведения

* [Веб-сайт MathJax](http://mathjax.org)
* [Getting started with writing and formatting on GitHub (Основные сведения о подготовке материалов и форматировании на GitHub)](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [Спецификация Markdown в GitHub](https://github.github.com/gfm/)
