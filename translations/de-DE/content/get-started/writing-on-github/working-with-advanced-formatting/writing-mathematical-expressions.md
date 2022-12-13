---
title: Schreiben mathematischer Ausdrücke
intro: 'Zeige mathematische Ausdrücke in {% data variables.product.company_short %} mit Markdown an.'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529751'
---
## Informationen zum Schreiben mathematischer Ausdrücke

Zur klaren Kommunikation mathematischer Ausdrücke unterstützt {% data variables.product.product_name %} in Markdown deren LaTeX-Formatierung. Weitere Informationen findest du unter [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) in Wikibooks.

Die Funktion zur Darstellung mathematischer Ausdrücke in {% data variables.product.company_short %} verwendet MathJax, ein Open Source-Anzeigemodul auf JavaScript-Basis. MathJax unterstützt eine Vielzahl von LaTeX-Makros und mehrere nützliche Erweiterungen zur Barrierefreiheit. Weitere Informationen findest du in der [MathJax-Dokumentation](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) und der [Dokumentation zu MathJax-Erweiterungen zur Barrierefreiheit](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

Das Rendern mathematischer Ausdrücke ist in {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, Pull Requests, {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}-Wikis, {% endif %}und Markdowndateien verfügbar.

## Schreiben von Inlineausdrücken

Um einen mathematischen Ausdruck inline in deinen Text einzuschließen, trennst du den Ausdruck mit einem Dollarsymbol `$`.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Inline-Markdown-Rendering mathematischer Ausdrücke](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Schreiben von Ausdrücken als Blöcke

Um einen mathematischen Ausdruck als Block hinzuzufügen, beginnst du eine neue Zeile und trennst den Ausdruck mit zwei Dollarsymbolen `$$`.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Mathematischer Ausdruck als Blockrendering](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Alternativ kannst du mit der <code>\`\`\`math</code>-Codeblocksyntax einen mathematischen Ausdruck als Block anzeigen. Bei dieser Syntax musst du keine `$$`-Trennzeichen verwenden.

````
**Here is some math!**

```math
\sqrt{3}
```
````

![Mathematischer Ausdruck in einem umgrenzten Codeblock](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## Inline-Schreiben von Dollarzeichen mit mathematischen Ausdrücken und innerhalb mathematischer Ausdrücke

Um in einer Zeile, die einen mathematischer Ausdruck enthält, ein Dollarzeichen als Zeichen anzuzeigen, musst du dieses nicht als Trennzeichen verwendete `$`-Zeichen mit einem Escapezeichen versehen, um sicherzustellen, dass die Zeile ordnungsgemäß gerendert wird.
  
  - Füge in einem mathematischen Ausdruck vor dem expliziten `$` ein `\`-Symbol hinzu.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![Dollarzeichen innerhalb des mathematischen Ausdrucks](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - Außerhalb eines mathematischen Ausdrucks, aber in derselben Zeile schließe das explizite `$` in Span-Tags ein.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Dollarzeichen inline mit mathematischem Ausdruck](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Weitere Informationsquellen

* [Die MathJax-Website](http://mathjax.org)
* [Getting started with writing and formatting on GitHub (Erste Schritte beim Schreiben und Formatieren auf GitHub)](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [Spezifikation zu GitHub Flavored Markdown](https://github.github.com/gfm/)
