---
title: Git 参照
shortTitle: References
intro: 'REST API を使用し、{% data variables.product.product_name %} で Git データベースの参照を操作します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192898'
---
## Git 参照について

Git 参照 (`git ref`) は、Git コミット SHA-1 ハッシュを含むファイルです。 Git コミットを参照するときは、ハッシュではなく、覚えやすい名前の Git 参照を使用できます。 Git 参照は、新しいコミットを指すように書き換えることができます。 ブランチは、新しい Git コミット ハッシュを格納する Git 参照です。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースへの[参照](https://git-scm.com/book/en/v2/Git-Internals-Git-References)を読み書きできます。
