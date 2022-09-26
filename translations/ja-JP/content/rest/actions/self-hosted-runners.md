---
title: セルフホステッド ランナー
intro: セルフホスト ランナー API では、セルフホスト ランナーの登録、表示、削除ができます。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064379'
---
## セルフホステッド ランナー API について

セルフホスト ランナー API では、セルフホスト ランナーの登録、表示、削除ができます。 {% data reusables.actions.about-self-hosted-runners %} 詳細については、「[自分のランナーをホストする](/actions/hosting-your-own-runners)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} には、リポジトリの `administration` アクセス許可、Organization の `organization_self_hosted_runners` アクセス許可が必要です。 認証されたユーザーがこの API を使用するには、リポジトリまたは Organization への管理者アクセス、または Enterprise の `manage_runners:enterprise` スコープが必要です。
