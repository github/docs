---
title: 使用制限、支払い、管理
intro: '{% data variables.product.prodname_actions %} ワークフローには使用制限があります。 使用料は、リポジトリの無料の時間とストレージの量を超えるリポジトリに適用されます。'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191855'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %} の課金について

{% data reusables.repositories.about-github-actions %}詳細については、「[{% data variables.product.prodname_actions %} について](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}」「{% elsif ghes or ghec %}」と「[エンタープライズの {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)」を参照してください。{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} 詳細については、「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。
{% else %} GitHub Actions の使用は、セルフホステッド ランナーを使用する {% data variables.product.prodname_ghe_server %} インスタンスでは無料です。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。
{% endif %}


{% ifversion fpt or ghec %}

## 可用性

{% data variables.product.prodname_actions %} はすべての {% data variables.product.prodname_dotcom %} 製品で使用できますが、{% data variables.product.prodname_actions %} は、従来のリポジトリごとのプランを使用するアカウントが所有するプライベート リポジトリでは使用できません。 {% data reusables.gated-features.more-info %}

{% endif %}

## Usage limits (使用状況の制限)

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} ホステッド ランナーを使用する場合、{% data variables.product.prodname_actions %} の使用にはいくつかの制限があります。 これらの制限は変更されることがあります。

{% note %}

**注:** セルフホステッド ランナーの場合は、さまざまな使用制限が適用されます。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)に関する記述をご覧ください。

{% endnote %}

- **ジョブの実行時間** - ワークフロー内の各ジョブは、最大 6 時間の実行時間で実行できます。 ジョブがこの制限に達すると、ジョブは終了させられ、完了できずに失敗します。
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **並行ジョブ** - アカウント内で実行できる並行ジョブ数は、使用するランナーの種類や GitHub プランによって異なります。 この制限を超えた場合、超過のジョブはキューイングされます。

  **標準 {% data variables.product.prodname_dotcom %}-ホスト ランナー**

  | GitHubプラン | 最大同時ジョブ | 最大同時macOSジョブ |
  |---|---|---|
  | Free | 20 | 5 |
  | Pro | 40 | 5 |
  | チーム | 60 | 5 |
  | Enterprise | 180 | 50 |

  **{% data variables.product.prodname_dotcom %}-ホスト {% data variables.actions.hosted_runner %}**

  | GitHubプラン | 最大同時ジョブ | 最大同時macOSジョブ |
  |---|---|---|
  | すべて | 500 | 該当なし |

  {% note %}

  **注:** Enterprise プランのお客様は、必要に応じて、同時実行ジョブの上限を上げることを要求できます。 詳細については、{% data variables.contact.contact_ent_support %} または営業担当者にお問い合わせください。

  {% endnote %}
  
- **ジョブ マトリックス** - {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} 使用制限は、セルフホステッド ランナーに適用されます。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)に関する記述をご覧ください。
{% endif %}

{% ifversion fpt or ghec %}
## 利用ポリシー

使用制限に加えて、[GitHub サービス使用条件](/free-pro-team@latest/github/site-policy/github-terms-of-service/)内で {% data variables.product.prodname_actions %} を使用する必要があります。 {% data variables.product.prodname_actions %} 固有の用語の詳細については、「[GitHub に関する追加条項](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage)」を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## 再利用可能なワークフローの課金

{% data reusables.actions.reusable-workflows-enterprise-beta %}

ワークフローを再利用する場合、課金は常に呼び出し元ワークフローに関連付けられます。 {% data variables.product.prodname_dotcom %} ホステッド ランナーの割り当ては、常に呼び出し元のコンテキストのみを使用して評価されます。 呼び出し元は、呼び出されたリポジトリから {% data variables.product.prodname_dotcom %} ホステッド ランナーを使用できません。 

詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。
{% endif %}

## 成果物とログの保持ポリシー

リポジトリ、Organization、または Enterprise アカウントの成果物とログの保持期間を設定できます。

{% data reusables.actions.about-artifact-log-retention %}

詳細については、次を参照してください。

- 「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)」
- 「[組織内の成果物とログの {% data variables.product.prodname_actions %} の保持期間を設定する](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)」
- 「[エンタープライズで {% data variables.product.prodname_actions %} のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)」を参照してください。

## リポジトリあるいはOrganizationでの{% data variables.product.prodname_actions %}の無効化もしくは制限

{% data reusables.actions.disabling-github-actions %}

詳細については、次を参照してください。
- 「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)」
- 「[組織での {% data variables.product.prodname_actions %} の無効化または制限](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)」
- 「[エンタープライズで {% data variables.product.prodname_actions %} のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)」を参照してください。

## ワークフローの無効化と有効化

{% data variables.product.prodname_dotcom %} のリポジトリで個々のワークフローを有効化または無効化できます。

{% data reusables.actions.scheduled-workflows-disabled %}

詳細については、「[ワークフローの無効化と有効化](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)」を参照してください。
