---
title: Git BLOB
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: REST API を使用し、リポジトリ内の各ファイルのコンテンツを格納するために使われるオブジェクトの種類である Git BLOB (バイナリ ラージ オブジェクト) を操作します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b29c69d2635e20720d23aad62c7aa88984cff984
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192722'
---
## Git BLOB について

Git blob (バイナリラージオブジェクト) は、各ファイルのコンテンツをリポジトリに保存する際に使用されるオブジェクトタイプです。 ファイルの SHA-1 ハッシュが計算され、blob オブジェクトに保存されます。 これらのエンドポイントを使うと、{% data variables.product.product_name %} 上の Git データベースの [BLOB オブジェクト](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)を読み書きできます。 BLOB では、[これらのカスタム メディアの種類が利用されます](#custom-media-types-for-blobs)。 API でのメディア タイプの使用に関する詳細については、[こちら](/rest/overview/media-types)をお読みください。

### Blob のカスタムメディアタイプ

これらは、blob でサポートされているメディアタイプです。

    application/json
    application/vnd.github.raw

詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
