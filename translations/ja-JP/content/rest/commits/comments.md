---
title: コミットのコメント
intro: The Commit comments API lets you create and edit comments that relate to specific commits.
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

## About the commit comments API

The Commit comments API lets you create and edit comments that relate to specific commits.

### コミットコメントのカスタムメディアタイプ

以下がコミットコメントでサポートされているメディアタイプです。 API におけるメディアタイプの使用に関する詳細は、[こちら](/rest/overview/media-types)を参照してください。

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。
