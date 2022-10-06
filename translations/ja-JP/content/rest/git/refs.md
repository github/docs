---
title: Git 参照
shortTitle: References
intro: 'Git 参照 API を使うと、{% data variables.product.product_name %} 上の Git データベースとの間で参照の読み取りと書き込みを行うことができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 60f76710e14a754f9508f0919c94b9fbe57d21e1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093055'
---
## Git 参照 API について

Git 参照 (`git ref`) は、Git コミット SHA-1 ハッシュを含むファイルです。 Git コミットを参照するときは、ハッシュではなく、覚えやすい名前の Git 参照を使用できます。 Git 参照は、新しいコミットを指すように書き換えることができます。 ブランチは、新しい Git コミット ハッシュを格納する Git 参照です。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースへの[参照](https://git-scm.com/book/en/v1/Git-Internals-Git-References)を読み書きできます。
