---
title: Git ツリー
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'REST API を使用し、{% data variables.product.product_name %} で Git データベースのツリー オブジェクトを操作します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ecd3781bbc78fff8b2d75f25b16d303081a7d605
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193050'
---
## Git ツリーについて

Git ツリーオブジェクトは、Git リポジトリ内のファイル間の階層を作成します。 Git ツリーオブジェクトを使用して、ディレクトリとそこに含まれるファイルの関係を作成できます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[ツリー オブジェクト](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects)を読み書きできます。
