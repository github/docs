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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884470'
---
## Git ツリー API について

Git ツリーオブジェクトは、Git リポジトリ内のファイル間の階層を作成します。 Git ツリーオブジェクトを使用して、ディレクトリとそこに含まれるファイルの関係を作成できます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[ツリー オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)を読み書きできます。
