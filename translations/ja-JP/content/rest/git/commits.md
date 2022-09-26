---
title: Git のコミット
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Git コミット API を使うと、{% data variables.product.product_name %} 上の Git データベースとの間でコミット オブジェクトの読み取りと書き込みを行うことができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2b0f1e07134b67be6c00f8bf1c65d9ccf0c2aac5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063483'
---
## Git コミット API について

Git コミットは、階層 ([Git ツリー](/rest/reference/git#trees)) と Git リポジトリ内のファイル ([Git BLOB](/rest/reference/git#blobs)) の内容のスナップショットです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[コミット オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects)を読み書きできます。
