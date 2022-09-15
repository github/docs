---
title: プルリクエストのレビューのコメント
shortTitle: Review comments
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6d49aa3d5bca7f74a21c1cce32cecd38abe9366d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067731'
---
## Pull request review comments API について

Pull Requestレビューコメントは、Pull Requestのレビュー中に unified 形式の diff の一部に付けられたコメントです。 コミットコメントおよび Issue コメントは、Pull Requestレビューコメントとは異なります。 コミットコメントはコミットに直接付けるもので、Issue コメントは、unified 形式の diff の一部を参照することなく付けるものです。 詳細については、[コミット コメントの作成](/rest/reference/commits#create-a-commit-comment)に関する記事と、[イシュー コメントの作成](/rest/reference/issues#create-an-issue-comment)に関する記事を参照してください。

### Pull Requestレビューコメントのカスタムメディアタイプ

以下がPull Requestレビューコメントでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

詳細については、[カスタム メディア タイプ](/rest/overview/media-types)に関する説明を参照してください。
