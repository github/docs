---
title: リポジトリコンテンツ
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: これらの API エンドポイントを使用すると、リポジトリ内の Base64 でエンコードされたコンテンツを作成、変更、削除できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 50875021a506201a90cbac62db521604a390a586
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060331'
---
## リポジトリ コンテンツ API について

Raw 形式またはレンダリングされた HTML (サポートされている場合) をリクエストするには、リポジトリのコンテンツにカスタムメディアタイプを使用します。

### リポジトリコンテンツのカスタムメディアタイプ

[README](/rest/reference/repos#get-a-repository-readme)、[ファイル](/rest/reference/repos#get-repository-content)、および[シンボリック リンクでは](/rest/reference/repos#get-repository-content)、次のカスタム メディアの種類がサポートされています。

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

ファイルのコンテンツを取得するには、`.raw` メディア タイプを使ってください。

Markdown や AsciiDoc などのマークアップファイルでは、レンダリングされた HTML を `.html` メディア タイプを使用して取得できます。 マークアップ言語は、オープンソースの[マークアップ ライブラリ](https://github.com/github/markup)を使用して HTML にレンダリングされます。

[すべてのオブジェクト](/rest/reference/repos#get-repository-content)では、次のカスタム メディアの種類がサポートされます。

    application/vnd.github.VERSION.object

コンテンツのタイプに関係なく、一貫したオブジェクト フォーマットを取得するには、`object` メディア タイプ パラメーターを使用します。 たとえば、レスポンスはディレクトリに対するオブジェクトの配列ではなく、オブジェクトの配列を含む `entries` 属性のオブジェクトになります。

API でのメディア タイプの使用に関する詳細については、[こちら](/rest/overview/media-types)をお読みください。
