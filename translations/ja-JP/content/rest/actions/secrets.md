---
title: GitHub Actions のシークレット
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: '{% data variables.product.prodname_actions %} シークレット API を使うと、{% data variables.product.prodname_actions %} ワークフローで使える暗号化されたシークレットに関する情報を作成、更新、削除、および取得できます。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061986'
---
## シークレット API について

{% data variables.product.prodname_actions %} シークレット API を使うと、{% data variables.product.prodname_actions %} ワークフローで使える暗号化されたシークレットに関する情報を作成、更新、削除、および取得できます。 {% data reusables.actions.about-secrets %} 詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関する記事を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} には、この API を使用するための `secrets` アクセス許可が必要です。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。
