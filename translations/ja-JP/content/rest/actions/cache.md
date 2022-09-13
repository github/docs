---
title: GitHub Actions キャッシュ
allowTitleToDifferFromFilename: true
shortTitle: Cache
intro: '{% data variables.product.prodname_actions %} キャッシュ API を使用すると、リポジトリの {% data variables.product.prodname_actions %} キャッシュを照会および管理できます。'
topics:
  - API
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: faaa0f8c0f182f2693039c017e8898ca9ea878ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147430398'
---
## キャッシュ API について

{% data variables.product.prodname_actions %} キャッシュ API を使用すると、リポジトリの {% data variables.product.prodname_actions %} キャッシュを照会および管理できます。 {% ifversion actions-cache-management %}{% data variables.product.prodname_cli %} 拡張機能をインストールして、コマンド ラインからキャッシュを管理することもできます。 {% endif %}詳しくは、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#managing-caches)」を参照してください。
