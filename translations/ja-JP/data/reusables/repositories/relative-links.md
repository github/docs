---
ms.openlocfilehash: 20b17f568debf8a418827882dd6d1cc9815445a0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146171862"
---
表示されたファイル中で相対リンクと画像パスを定義して、読者がリポジトリ中の他のファイルにアクセスしやすくできます。

相対リンクは、現在のファイルに対する相対的なリンクです。 たとえば、リポジトリのルートに README ファイルがあり、_docs/CONTRIBUTING.md_ に別のファイルがある場合、README の _CONTRIBUTING.md_ への相対リンクは次のようになります。

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %}は相対リンクあるいは画像パスを、現在のブランチに基づいて変換するので、リンクやパスは常にうまく働きます。 リンクのパスは、現在のファイルに対する相対パスになります。 `/` で始まるリンクは、リポジトリ ルートに対する相対パスです。 `./` や `../` のような相対リンクのオペランドをすべて使用できます。

相対リンクは、リポジトリをクローンするユーザにも扱いやすいです。 絶対リンクはリポジトリのクローンではうまく働かないかもしれません。リポジトリ内の他のファイルを参照するには、相対リンクを使うことをおすすめします。
