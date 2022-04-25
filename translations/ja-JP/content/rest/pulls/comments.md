---
title: レビューコメント
intro: Pull Requestレビューコメントは、Pull Requestのレビュー中に unified 形式の diff の一部に付けられたコメントです。
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

コミットコメントおよび Issue コメントは、Pull Requestレビューコメントとは異なります。 コミットコメントはコミットに直接付けるもので、Issue コメントは、unified 形式の diff の一部を参照することなく付けるものです。 詳しい情報については、「[コミットコメントの作成](/rest/reference/commits#create-a-commit-comment)」および「[Issue コメントの作成](/rest/reference/issues#create-an-issue-comment)」を参照してください。

### Pull Requestレビューコメントのカスタムメディアタイプ

以下がPull Requestレビューコメントでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。
