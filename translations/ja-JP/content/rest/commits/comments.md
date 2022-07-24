---
title: コミットのコメント
intro: コミットコメントAPIを使用すると、特定のコミットに関連するコメントの作成と編集ができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## コミットコメントAPIについて

コミットコメントAPIを使用すると、特定のコミットに関連するコメントの作成と編集ができます。

### コミットコメントのカスタムメディアタイプ

以下がコミットコメントでサポートされているメディアタイプです。 API におけるメディアタイプの使用に関する詳細は、[こちら](/rest/overview/media-types)を参照してください。

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。
