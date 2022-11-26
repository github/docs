---
title: デプロイ ブランチ ポリシー
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: デプロイ ブランチ ポリシー API を使用すると、カスタムデプロイ ブランチ ポリシーを管理できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 109bf81019d62e4c654ba6da4fa71f8fd359ceb4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109595'
---
## デプロイ ブランチ ポリシー API について

デプロイ ブランチ ポリシー API を使用すると、環境にデプロイするためにブランチが一致する必要があるカスタム名パターンを指定できます。 これらのエンドポイントを使用するには、環境の `deployment_branch_policy.custom_branch_policies` プロパティを `true` に設定する必要があります。 環境の `deployment_branch_policy` の更新については、「[環境の作成または更新](/rest/deployments/environments#create-or-update-an-environment)」を参照してください。 

環境のデプロイを特定のブランチに制限する方法について詳しくは、「[デプロイに環境を使用する](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)」を参照してください。
