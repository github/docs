---
title: 数式の記述
intro: 'Markdown を使って、{% data variables.product.company_short %} で数式を表示します。'
versions:
  feature: math
shortTitle: Mathematical expressions
ms.openlocfilehash: b50cdde16f5496e65faf89f0692dc6201cccf15a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529752'
---
## 数式の記述について

数式をわかりやすくやり取りできるように、{% data variables.product.product_name %} では Markdown 内の LaTeX 形式の数式がサポートされています。 詳細については、Wikibooks の「[LaTeX/Mathematics](http://en.wikibooks.org/wiki/LaTeX/Mathematics)」を参照してください。

{% data variables.product.company_short %} の数式レンダリング機能では、オープンソースの JavaScript ベースの表示エンジンである MathJax が使用されます。 MathJax では、幅広い LaTeX マクロと、いくつかの便利なアクセシビリティ拡張機能がサポートされています。 詳細については、[MathJax のドキュメント](http://docs.mathjax.org/en/latest/input/tex/index.html#tex-and-latex-support)と [MathJax アクセシビリティ拡張機能のドキュメント](https://mathjax.github.io/MathJax-a11y/docs/#reader-guide)を参照してください。

数式のレンダリングは、{% data variables.product.prodname_github_issues %}、{% data variables.product.prodname_discussions %}、pull request、{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}Wiki、{% endif %}、Markdown ファイルで利用できます。

## インライン式の記述

数式をテキストにインラインで含めるには、式をドル記号 `$` で区切ります。

```
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$
```

![インラインで数式マークダウンをレンダリングする](/assets/images/help/writing/inline-math-markdown-rendering.png)

## ブロックとして式を記述する

数式をブロックとして追加するには、新しい行を開始し、式を 2 つのドル記号 `$$` で区切ります。

```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
```

![数式をブロックとしてレンダリングする](/assets/images/help/writing/math-expression-as-a-block-rendering.png)

{% ifversion math-fenced-blocks %}

または、<code>\`\`\`math</code> コード ブロック構文を使って、数式をブロックとして表示することもできます。 この構文では、`$$` 区切り記号を使う必要はありません。

````
**Here is some math!**

```math
\sqrt{3}
```
````

![フェンスされたコード ブロック内の数式](/assets/images/help/writing/math-expression-as-a-fenced-code-block.png)

{% endif %}

## インラインで数式の内外にドル記号を記述する

数式と同じ行にドル記号を文字として表示するには、区切り記号でない `$` をエスケープして、行が正しくレンダリングされるようにする必要があります。
  
  - 数式内では、明示する `$` の前に `\` 記号を追加します。

  ```
  This expression uses `\$` to display a dollar sign: $\sqrt{\$4}$
  ```

  ![数式内のドル記号](/assets/images/help/writing/dollar-sign-within-math-expression.png)

  - 数式外の同じ行では、明示する `$` の周りに span タグを使用します。

  ```
  To split <span>$</span>100 in half, we calculate $100/2$
  ```

  ![数式と同じ行内のドル記号](/assets/images/help/writing/dollar-sign-inline-math-expression.png)

## 参考資料

* [MathJax の Web サイト](http://mathjax.org)
* [GitHub での記述と書式設定の開始](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* [GitHub Flavored Markdown 仕様](https://github.github.com/gfm/)
