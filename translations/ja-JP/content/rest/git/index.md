---
title: Git データベース
intro: 'REST API を使って、{% data variables.product.product_name %} 上の Git データベース内にある raw 形式の Git オブジェクトを操作したり、Git リファレンス (ブランチ head やタグ) の一覧表示や更新を行ったりします。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/git
  - /rest/reference/git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /blobs
  - /commits
  - /refs
  - /tags
  - /trees
ms.openlocfilehash: 98251c33c4bf065a3df35dfb014689aae1890e69
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193604'
---
## Git データベースについて

REST API を使うと、{% data variables.product.product_name %} 上の Git データベースに対して raw 形式の Git オブジェクトを読み書きしたり、リファレンス (ブランチ head やタグ) の一覧表示や更新を行ったりするためのアクセス権が付与されます。 REST API を使った Git データベースの操作について詳しくは、「[Git Database API を使ってみる](/rest/guides/getting-started-with-the-git-database-api)」をご覧ください。
