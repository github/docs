---
title: Git BLOB
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: Git BLOB API を使うと、リポジトリ内の各ファイルのコンテンツを格納するために使われるオブジェクトの種類である Git BLOB (バイナリ ラージ オブジェクト) を作成し、取得することができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e815b7d7ea3d63ced4c486605891a10dcb870176
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060619'
---
## Git BLOB API について

Git blob (バイナリラージオブジェクト) は、各ファイルのコンテンツをリポジトリに保存する際に使用されるオブジェクトタイプです。 ファイルの SHA-1 ハッシュが計算され、blob オブジェクトに保存されます。 これらのエンドポイントを使うと、{% data variables.product.product_name %} 上の Git データベースの [BLOB オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects)を読み書きできます。 BLOB では、[これらのカスタム メディアの種類が利用されます](#custom-media-types-for-blobs)。 API でのメディア タイプの使用に関する詳細については、[こちら](/rest/overview/media-types)をお読みください。

### Blob のカスタムメディアタイプ

これらは、blob でサポートされているメディアタイプです。

    application/json
    application/vnd.github.VERSION.raw

詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
