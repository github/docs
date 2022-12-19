---
title: GitHub Enterprise Cloud の GitHub Actions を使い始める
shortTitle: Get started
intro: '{% data variables.product.prodname_ghe_cloud %} で {% data variables.product.prodname_actions %} を構成する方法を学びます。'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120438'
---
## {% data variables.product.prodname_ghe_cloud %} 上の {% data variables.product.prodname_actions %} について

{% data variables.product.prodname_actions %} は、エンタープライズに対して既定で有効になっています。 エンタープライズ内で {% data variables.product.prodname_actions %} の使用を開始するために、エンタープライズ メンバーが {% data variables.product.prodname_actions %} を使用する方法を制御するポリシーを管理し、必要に応じてワークフローを実行するためのセルフホステッド ランナーを追加することができます。

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## {% data variables.product.prodname_actions %} のポリシーの管理

エンタープライズ メンバーが {% data variables.product.prodname_actions %} を使用する方法を制御するポリシーを使用できます。 たとえば、許可されるアクションを制限したり、成果物とログの保持を構成したりできます。 詳細については、「[エンタープライズでの GitHub Actions ポリシーの適用](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)」を参照してください。

## ランナーを追加する

{% data variables.product.prodname_actions %} ワークフローを実行するには、ランナーを使用する必要があります。 {% data reusables.actions.about-runners %} {% data variables.product.company_short %} ホステッド ランナーを使用する場合、{% data variables.product.product_name %} に含まれる分数が経過した後は使用量に応じて課金されますが、セルフホステッド ランナーは無料です。 詳細については、「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。

詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。

セルフホステッド ランナーを選択した場合は、エンタープライズ レベル、組織レベル、またはリポジトリ レベルでランナーを追加できます。 詳細については、「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% data reusables.actions.general-security-hardening %}
