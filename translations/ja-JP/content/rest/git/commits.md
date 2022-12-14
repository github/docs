---
title: Git のコミット
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'REST API を使用し、{% data variables.product.product_name %} で Git データベースのコミット オブジェクトを操作します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192626'
---
## Git コミットについて

Git コミットは、階層 ([Git ツリー](/rest/reference/git#trees)) と Git リポジトリ内のファイル ([Git BLOB](/rest/reference/git#blobs)) の内容のスナップショットです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[コミット オブジェクト](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects)を読み書きできます。
