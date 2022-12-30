---
title: GitHub Marketplace
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131748'
---
## {% data variables.product.prodname_marketplace %} API について

{% data variables.product.prodname_marketplace %} の詳細については、「[GitHub Marketplace](/marketplace/)」を参照してください。

{% data variables.product.prodname_marketplace %} API では、価格プランを使用している顧客の確認、顧客の購入の確認、アカウントで有効になっているプランの有無を確認できます。

### スタブされたエンドポイントでテストする

この API には、**スタブされたデータ** を使用すると [{% data variables.product.prodname_github_app %} をテストする](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/)ことができるエンドポイントが含まれています。 スタブされたデータはハードコードされた偽のデータであり、実際のプランに基づいて変更されることはありません。

スタブされたデータでテストするには、対応する本番環境の代わりにスタブされたエンドポイントを使用します。 これにより、API ロジックが成功するかどうかをテストしたうえで、{% data variables.product.prodname_marketplace %} に {% data variables.product.prodname_github_apps %} を一覧表示することができます。

{% data variables.product.prodname_github_app %} をデプロイする前に、スタブされたエンドポイントを本番のエンドポイントに置き換えてください。
