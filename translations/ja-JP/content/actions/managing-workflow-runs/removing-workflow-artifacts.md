---
title: ワークフローの成果物を削除する
intro: '{% data variables.product.product_name %} で期限切れになる前に成果物を削除することで、使用済みの {% data variables.product.prodname_actions %} ストレージを再利用できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199803'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 成果物を削除する

{% warning %}

**警告:** いったん削除した成果物を復元することはできません。

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. **[成果物]** で、削除する成果物の横にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
    
    ![成果物の削除のドロップダウンメニュー](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## 成果物の保持期間を設定する

成果物とログの保持期間は、リポジトリ、Organization、および Enterprise レベルで設定できます。 詳しくは、{% ifversion fpt or ghec or ghes %}「[使用制限、支払い、管理](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)」をご覧ください。{% elsif ghae %}「[リポジトリの {% data variables.product.prodname_actions %} の設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)」、「[Organization 内の成果物とログの {% data variables.product.prodname_actions %} の保持期間を設定する](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)」、または「[Enterprise で {% data variables.product.prodname_actions %} のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)」をご覧ください。{% endif %}

ワークフローの `actions/upload-artifact` アクションを使って、個々の成果物にカスタム保持期間を定義することもできます。 詳しくは、「[ワークフロー データを成果物として保存する](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)」をご覧ください。

## 成果物の有効期限を探す

API を使用して、成果物の削除がスケジュールされている日付を確認できます。 詳しくは、"[リポジトリの成果物の一覧表示](/rest/reference/actions#artifacts)" によって返される `expires_at` の値を参照してください。
