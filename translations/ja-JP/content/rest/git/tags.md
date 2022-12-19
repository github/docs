---
title: Git タグ
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'REST API を使用し、{% data variables.product.product_name %} で Git データベースのタグ オブジェクトを操作します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192890'
---
## Git タグについて

Git タグは [Git リファレンス](/rest/reference/git#refs)に似ていますが、これがポイントする Git コミットが変更されることはありません。 Git タグは、特定のリリースを指すときに役立ちます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[タグ オブジェクト](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags)を読み書きできます。 この API では、軽量タグではなく、[注釈付きタグ オブジェクト](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags)のみをサポートします。
