---
title: Git タグ
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Git タグ API を使うと、{% data variables.product.product_name %} 上の Git データベースでタグ オブジェクトの読み取りと書き込みを行うことができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d0ba994be564467d3b84744e6618417b927828aa
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131400'
---
## Git タグ API について

Git タグは [Git リファレンス](/rest/reference/git#refs)に似ていますが、これがポイントする Git コミットが変更されることはありません。 Git タグは、特定のリリースを指すときに役立ちます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[タグ オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)を読み書きできます。 Git タグ API では、軽量タグではなく、[注釈付きタグ オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)のみをサポートします。
