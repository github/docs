---
title: Git ツリー
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Git trees API を使うと、{% data variables.product.product_name %} 上の Git データベースでツリー オブジェクトの読み取りと書き込みを行うことができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8c13e6c74f334152d67433ab9a90f7dac663b3d6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067739'
---
## Git ツリー API について

Git ツリーオブジェクトは、Git リポジトリ内のファイル間の階層を作成します。 Git ツリーオブジェクトを使用して、ディレクトリとそこに含まれるファイルの関係を作成できます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[ツリー オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)を読み書きできます。
