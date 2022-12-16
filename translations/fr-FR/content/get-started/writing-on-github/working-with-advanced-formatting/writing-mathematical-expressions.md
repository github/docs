---
title: Écriture d’expressions mathématiques
intro: 'Utilisez Markdown pour afficher des expressions mathématiques sur {% data variables.product.company_short %}.'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529750'
---
## À propos de l’écriture d’expressions mathématiques

Pour activer la communication claire d’expressions mathématiques, {% data variables.product.product_name %} prend en charge les mathématiques mises en forme LaTeX dans Markdown. Pour plus d’informations, consultez [LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics) dans Wikibooks.

La fonctionnalité de rendu mathématique de {% data variables.product.company_short %} utilise MathJax ; un moteur d’affichage open source basé sur JavaScript. MathJax prend en charge un large éventail de macros LaTeX et plusieurs extensions d’accessibilité utiles. Pour plus d’informations, consultez [la documentation MathJax](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support) et [la documentation sur les extensions d’accessibilité MathJax](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide).

Le rendu des expressions mathématiques est disponible dans {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_discussions %}, les requêtes de tirage, {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}wikis, {% endif %}et les fichiers Markdown.

## Écriture d’expressions inlined

Pour inclure une expression mathématique inlined avec votre texte, délimitez l’expression avec un symbole dollar `$`.

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![Rendu markdown mathématique inlined](/assets/images/help/writing/inline-math-markdown-rendering.png)

## Écriture d’expressions en tant que blocs

Pour ajouter une expression mathématique en tant que bloc, démarrez une nouvelle ligne et délimitez l’expression avec deux symboles dollar `$$`.

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![Expression mathématique en tant que rendu de bloc](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

Vous pouvez également utiliser la syntaxe de bloc de code <code>\`\`\`math</code> pour afficher une expression mathématique en tant que bloc. Avec cette syntaxe, vous n’avez pas besoin d’utiliser des délimiteurs `$$`.

````
**Here is some math!**

```math
\sqrt{3}
```
````

![Expression mathématique dans un bloc de code clôturé](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## Écriture de signes dollar en ligne avec et dans les expressions mathématiques

Pour afficher un signe dollar sous la forme d’un caractère dans la même ligne qu’une expression mathématique, vous devez échapper au `$` non délimiteur pour vous assurer que la ligne s’affiche correctement.
  
  - Dans une expression mathématique, ajoutez un symbole `\` avant `$` explicite.

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![Signe dollar dans l’expression mathématique](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - En dehors d’une expression mathématique, mais sur la même ligne, utilisez des balises d’étendue autour de `$` explicite.

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![Expression mathématique inlined du signe dollar](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## Pour aller plus loin

* [Le site web MathJax](http://mathjax.org)
* [Prise en main de la rédaction et de la mise en forme sur GitHub](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [Spécification de GitHub Flavored Markdown](https://github.github.com/gfm/)
