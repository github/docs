---
title: セルフホストランナーグループ
intro: セルフホストランナーグループ API を使用すると、セルフホストランナーのグループを管理できます。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147064371'
---
## セルフホステッド ランナー グループ API について

セルフホステッド ランナー グループ API を使うと、セルフホステッド ランナーのグループを管理できます。 詳細については、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} には、リポジトリの `administration` アクセス許可、または Organization の `organization_self_hosted_runners` アクセス許可が必要です。 認証されたユーザーがこの API を使用するには、リポジトリまたは Organization への管理者アクセス、または Enterprise の `manage_runners:enterprise` スコープが必要です。
