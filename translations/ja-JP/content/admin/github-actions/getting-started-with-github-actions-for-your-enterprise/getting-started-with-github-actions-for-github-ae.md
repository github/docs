---
title: GitHub AE の GitHub Actions を使い始める
shortTitle: Get started
intro: '{% data variables.product.prodname_ghe_managed %} で {% data variables.product.prodname_actions %} を設定する方法を学びます。'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116702'
---
## {% data variables.product.prodname_ghe_managed %} 上の {% data variables.product.prodname_actions %} について

{% data variables.product.prodname_actions %} は、既定で {% data variables.product.product_name %} に対して有効になっています。 エンタープライズ内で {% data variables.product.prodname_actions %} の使用を開始するには、{% data variables.product.prodname_actions %} のアクセス許可を管理し、ワークフローを実行するためのランナーを追加する必要があります。

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Enterprise 内の {% data variables.product.prodname_actions %} のアクセス権限を管理する

ポリシーを使用して、{% data variables.product.prodname_actions %} へのアクセスを管理できます。 詳細については、「[エンタープライズでの GitHub Actions ポリシーの適用](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

## ランナーを追加する

{% data variables.product.product_name %} 上で、エンタープライズのジョブを実行するために独自のマシンを構成してホストする必要があります。 {% data reusables.actions.about-self-hosted-runners %} 詳細については、「[エンタープライズでのセルフホステッド ランナーの概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)」および「[独自のランナーのホスト](/actions/hosting-your-own-runners)」を参照してください。

{% data reusables.actions.general-security-hardening %}
