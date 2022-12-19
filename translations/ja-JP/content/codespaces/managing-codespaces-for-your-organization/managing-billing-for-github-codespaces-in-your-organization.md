---
title: Organization での GitHub Codespaces の課金の管理
shortTitle: Manage billing
intro: '{% data variables.product.prodname_github_codespaces %} の使用状況を確認し、使用制限を設定できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 6cd1396cd0933999a99c334f00416b43f31ae249
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865186"
---
## 概要

{% data variables.product.prodname_github_codespaces %} の価格については、「[{% data variables.product.prodname_codespaces %} の価格](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)」をご覧ください。

{% data reusables.codespaces.codespaces-billing %}

- 組織の所有者または課金マネージャーは、組織の {% data variables.product.prodname_codespaces %} の課金を管理できます: [Codespaces の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)
- 組織の所有者は、現在アクティブになっている、または停止している組織の codespace を一覧表示できます。 これらの codespace に加えて、当月のコストには、当月のはじめに存在していたが削除された codespace のコストが含まれる場合があります。
- ユーザーの場合、課金のしくみを説明するガイドがあります: 「[Codespaces の課金について](/codespaces/codespaces-reference/understanding-billing-for-codespaces)」

## Usage limits (使用状況の制限)

組織またはリポジトリの codespaces の使用制限を設定できます。 この制限は、{% data variables.product.prodname_github_codespaces %} のコンピューティングとストレージの使用量に適用されます。
 
- **コンピューティング時間 (分):** コンピューティング使用量は、すべての {% data variables.product.prodname_codespaces %} インスタンスがアクティブな間に使用した実際の分数によって計算されます。 これらの合計は、毎日課金サービスに報告され、毎月請求されます。 組織内の {% data variables.product.prodname_codespaces %} 使用量の使用制限を設定できます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)」をご覧ください。

- **ストレージ使用量:** {% data variables.product.prodname_codespaces %} の課金目的の場合、アカウント内のすべての codespace で使用されるすべてのストレージが含まれます。 これには特に、クローンされたリポジトリ、構成ファイル、拡張機能などのリソースが含まれます。 これらの合計は、毎日課金サービスに報告され、毎月請求されます。 月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 {% data variables.product.prodname_codespaces %} で使用されているコンピューティング時間 (分) とストレージ GB の数を確認するには、「[{% data variables.product.prodname_github_codespaces %} の使用状況の表示](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」をご覧ください。

## {% data variables.product.prodname_codespaces %} の無効化または制限

Organization への請求の対象となる {% data variables.product.prodname_github_codespaces %} の使用をすべて無効にできます。 または、Organization の費用で {% data variables.product.prodname_codespaces %} を使うことができる Organization のメンバーまたはコラボレーターを指定できます。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」をご覧ください。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

特定のリポジトリ用に作成された codespace からアクセスできるリポジトリを構成できます。 詳しくは、「[codespace 内の他のリポジトリへのアクセスの管理](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)」をご覧ください。

Organization が所有するリポジトリから作成された codespace で使うことができるコンピューターの種類を制限できます。 これにより、ユーザーがリソースの多いコンピューターを codespace に使えないようにしたり、不要な料金が発生しないようにしたりすることができます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

また、codespace が未使用の状態となって自動的に削除されるまでの期間を制限することもできます。 これは、{% data variables.product.prodname_codespaces %} のストレージ コストの低減につながります。 詳しい情報については、「[codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)」をご覧ください。

## 未使用の codespaces の削除

ユーザーは、 https://github.com/codespaces または {% data variables.product.prodname_vscode %} 内から自分の codespace を削除できます。 Codespace のサイズを小さくするには、ユーザーはターミナルを使うか、{% data variables.product.prodname_vscode_shortname %} 内から、ファイルを手動で削除できます。 

組織の所有者は、組織内の任意の codespace を削除できます。 詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)」を参照してください。

{% note %}

**メモ:** Codespace は、停止して、非アクティブな状態となって、定義された日数を過ぎると、自動的に削除されます。 詳しい情報については、「[codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)」をご覧ください。 Codespace を手動で削除できるのは、その codespace を作成したユーザーのみです。

{% endnote %}

## 参考資料

- [組織内の codespace を一覧表示する](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
