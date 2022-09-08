---
title: コミットのコメント
intro: コメントのコミット API を使うと、特定のコミットに関連するコメントを作成および編集できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e959f04a9df15d2d9ce2765d2669cce7e8de0e5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065347'
---
## コミットのコメント API について

コメントのコミット API を使うと、特定のコミットに関連するコメントを作成および編集できます。

### コミットコメントのカスタムメディアタイプ

以下がコミットコメントでサポートされているメディアタイプです。 API でのメディア タイプの使用に関する詳細については、[こちら](/rest/overview/media-types)をお読みください。

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

詳細については、[カスタム メディア タイプ](/rest/overview/media-types)に関する説明を参照してください。
