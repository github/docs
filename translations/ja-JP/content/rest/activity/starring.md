---
title: Star
intro: Starring APIを使うと、リポジトリをブックマークできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Starring APIについて

Starring APIを使うと、リポジトリをブックマークできます。 おおよその関心レベルを示すために、リポジトリの横に Star が表示されます。 Star は通知やアクティビティフィードには影響しません。 詳しい情報については、「[Star を付けてリポジトリを保存する](/get-started/exploring-projects-on-github/saving-repositories-with-stars)」を参照してください。

### Star と Watch

2012年8月に、{% data variables.product.prodname_dotcom %} での [Watch 方法を変更](https://github.com/blog/1204-notifications-stars)しました。 多くの API クライアントアプリケーションは、このデータへのアクセスに元の「Watchしているユーザ」のエンドポイントを使用しています。 現在、その代わりに「Star」エンドポイントを使用できます（以下で説明）。 詳しい情報については、[Watchしているユーザ API の変更に関する投稿](https://developer.github.com/changes/2012-09-05-watcher-api/)と「[リポジトリを Watch している API](/rest/reference/activity#watching)」を参照してください。

### Star 付きのカスタムメディアタイプ

Star 付きの REST APIでサポートされているカスタムメディアタイプが 1 つあります。 このカスタムメディアタイプを使用すると、Star が作成された時刻を示す `starred_at` タイムスタンププロパティを含むレスポンスを受け取ります。 レスポンスには、カスタムメディアタイプが含まれていない場合に返されるリソースを含む 2 番目のプロパティもあります。 リソースを含むプロパティは、`user` または `repo` のいずれかになります。

    application/vnd.github.star+json

メディアタイプの詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。
