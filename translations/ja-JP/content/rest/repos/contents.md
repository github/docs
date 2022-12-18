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
ms.openlocfilehash: fd3619faeb8ccaeaa70e8a2be050881b4a169b64
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181318'
---
## リポジトリ コンテンツ API について

Raw 形式またはレンダリングされた HTML (サポートされている場合) をリクエストするには、リポジトリのコンテンツにカスタムメディアタイプを使用します。

### リポジトリコンテンツのカスタムメディアタイプ

[README](/rest/reference/repos#get-a-repository-readme)、[ファイル](/rest/reference/repos#get-repository-content)、および[シンボリック リンクでは](/rest/reference/repos#get-repository-content)、次のカスタム メディアの種類がサポートされています。

    application/vnd.github.raw
    application/vnd.github.html

ファイルのコンテンツを取得するには、`.raw` メディア タイプを使ってください。

Markdown や AsciiDoc などのマークアップファイルでは、レンダリングされた HTML を `.html` メディア タイプを使用して取得できます。 マークアップ言語は、オープンソースの[マークアップ ライブラリ](https://github.com/github/markup)を使用して HTML にレンダリングされます。

[すべてのオブジェクト](/rest/reference/repos#get-repository-content)では、次のカスタム メディアの種類がサポートされます。

    application/vnd.github.object

コンテンツのタイプに関係なく、一貫したオブジェクト フォーマットを取得するには、`object` メディア タイプ パラメーターを使用します。 たとえば、レスポンスはディレクトリに対するオブジェクトの配列ではなく、オブジェクトの配列を含む `entries` 属性のオブジェクトになります。

API でのメディア タイプの使用に関する詳細については、[こちら](/rest/overview/media-types)をお読みください。
