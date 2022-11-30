---
title: GitHub AE でアクションを使用する
intro: '{% data variables.product.prodname_ghe_managed %} では、{% data variables.product.prodname_dotcom %} 作者のアクションのほとんどを使用できます。'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120373'
---
{% data variables.product.prodname_actions %} ワークフローでは ''_アクション_'' を使用できます。これらは、ジョブを作成してワークフローをカスタマイズするために組み合わせることができる個々のタスクです。 独自のアクションの作成、または {% data variables.product.prodname_dotcom %} コミュニティによって共有されるアクションの使用やカスタマイズができます。

## {% data variables.product.prodname_ghe_managed %} にバンドルされている公式アクション

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_managed %} にバンドルされ、{% data variables.product.prodname_marketplace %} からある時点でキャプチャされます。 {% data variables.product.prodname_ghe_managed %} インスタンスが更新されると、バンドルされている公式アクションも更新されます。

バンドルされた公式アクションには、`actions/checkout`、`actions/upload-artifact`、`actions/download-artifact`、`actions/labeler`、およびさまざまな `actions/setup-` アクションが含まれます。 どの公式アクションが含まれているかを確認するには、インスタンス上の次の組織を参照します。 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

各アクションのファイルは、`actions` および `github` 組織のリポジトリに保持されます。 各アクション リポジトリには、ワークフローでアクションを参照するために使用できる必要なタグ、ブランチ、およびコミット SHA が含まれています。
