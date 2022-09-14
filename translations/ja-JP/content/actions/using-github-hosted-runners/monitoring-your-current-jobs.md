---
title: 現在のジョブの監視
intro: '{% data variables.product.prodname_dotcom %} でホストされているランナーが Organization 内または Enterprise でジョブをどのように処理しているかを監視し、関連する制約を特定します。'
versions:
  feature: github-runner-dashboard
shortTitle: Monitoring your current jobs
ms.openlocfilehash: 86f1551e1908106126516b489c436922b15ce60d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121062'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 組織または企業のアクティブなジョブを表示する

組織または企業の {% data variables.product.prodname_dotcom %} ホステッド ランナーで実行されているすべてのジョブの一覧を取得できます。

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. {% data variables.product.prodname_dotcom %} ホステッド ランナーで現在実行されているすべてのジョブの一覧が含まれている [アクティブなジョブ] セクションを確認します。

  ![アクティブなジョブの一覧のスクリーンショット](/assets/images/help/settings/actions-runner-active-jobs.png)

## 組織または企業のキューに入れられたジョブを表示する

{% data variables.product.prodname_dotcom %} ホステッド ランナーを使用すると、ジョブを同時に実行でき、同時実行ジョブの最大数はプランによって異なります。 同時実行ジョブの最大数に達すると、新しいジョブがキューに入り始めます。 プランで使用できる同時実行ジョブの数の詳細については、「[使用制限、支払い、管理](/actions/learn-github-actions/usage-limits-billing-and-administration)」を参照してください。

次の手順では、実行できる同時実行ジョブの最大数を確認する方法を示します。

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. アクティブなジョブの数と実行できるジョブの最大数を一覧表示する [All jobs usage]\(すべてのジョブの使用状況\) セクションを確認します。 この例では、最大 `180` 個のうち、現在 `9` 個のジョブが実行されています。
  ![アカウントの最大ジョブ数のスクリーンショット](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
