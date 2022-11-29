---
title: Star
intro: Starring API を使用すると、リポジトリをブックマークできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 267d87a4120bba3dbfd080bcfe3e59b1ee3ec6d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064251'
---
## Starring API について

Starring API を使用すると、リポジトリをブックマークできます。 おおよその関心レベルを示すために、リポジトリの横に Star が表示されます。 Star は通知やアクティビティフィードには影響しません。 詳細については、「[Star を付けてリポジトリを保存する](/get-started/exploring-projects-on-github/saving-repositories-with-stars)」を参照してください。

### Star と Watch

2012 年 8 月に、{% data variables.product.prodname_dotcom %} の [watch のしくみを変更](https://github.com/blog/1204-notifications-stars)しました。 多くの API クライアント アプリケーションでは、このデータへのアクセスに、元の "Watch しているユーザー" のエンドポイントを使用しています。 次の説明のとおり、これで、代わりに "Star" エンドポイントを使用できるようになりました。 詳細については、「[Watcher API Change post](https://developer.github.com/changes/2012-09-05-watcher-api/)」 (Watcher API の変更ポスト) および「[Repository Watching API](/rest/reference/activity#watching)」 (リポジトリを watch する API) を参照してください。

### Star 付きのカスタムメディアタイプ

Star 付きの REST APIでサポートされているカスタムメディアタイプが 1 つあります。 このカスタム メディア タイプを使用する場合は、star が作成された時刻を示す `starred_at` タイムスタンプ プロパティを含むレスポンスを受け取ります。 レスポンスには、カスタムメディアタイプが含まれていない場合に返されるリソースを含む 2 番目のプロパティもあります。 このリソースを含むプロパティは、`user` または `repo` のいずれかとなります。

    application/vnd.github.star+json

メディア タイプの詳細については、[カスタム メディア タイプ](/rest/overview/media-types)に関する記事を参照してください。
