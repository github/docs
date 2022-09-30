---
title: GitHub Actions のアクセス許可
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: '{% data variables.product.prodname_actions %} アクセス許可 API を使うと、どのエンタープライズ、Organization、リポジトリに {% data variables.product.prodname_actions %} の実行を許可するかと、どのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}の実行を許可するかの権限を設定できます。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888599'
---
## アクセス許可 API について

{% data variables.product.prodname_actions %} アクセス許可 API を使うと、どのエンタープライズ、Organization、リポジトリに {% data variables.product.prodname_actions %} の実行を許可するかと、どのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}の実行を許可するかの権限を設定できます。{% ifversion fpt or ghec or ghes %} 詳しい情報については、「[使用制限、支払い、管理](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)」を参照してください。{% endif %}
