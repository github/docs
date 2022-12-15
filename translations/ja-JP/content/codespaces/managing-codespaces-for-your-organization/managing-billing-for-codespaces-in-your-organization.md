---
title: 組織内の Codespaces の課金の管理
shortTitle: Manage billing
intro: '{% data variables.product.prodname_codespaces %} の使用状況を確認し、使用制限を設定できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149725"
---
## <a name="overview"></a>概要

{% data variables.product.prodname_codespaces %} の価格については、「[{% data variables.product.prodname_codespaces %} の価格](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)」を参照してください。

{% data reusables.codespaces.codespaces-billing %}

- 組織の所有者または課金マネージャーは、組織の {% data variables.product.prodname_codespaces %} の課金を管理できます: 「[Codespaces の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)」

- ユーザーの場合、課金のしくみを説明するガイドがあります: 「[Codespaces の課金について](/codespaces/codespaces-reference/understanding-billing-for-codespaces)」

## <a name="usage-limits"></a>Usage limits (使用状況の制限)

組織またはリポジトリの codespaces の使用制限を設定できます。 この制限は、{% data variables.product.prodname_codespaces %} のコンピューティングとストレージの使用量に適用されます。
 
- **コンピューティング時間 (分):** コンピューティング使用量は、すべての {% data variables.product.prodname_codespaces %} インスタンスがアクティブな間に使用した実際の分数によって計算されます。 これらの合計は、毎日課金サービスに報告され、毎月請求されます。 組織内の {% data variables.product.prodname_codespaces %} 使用量の使用制限を設定できます。 詳細については、「[Codespaces の使用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

- **ストレージ使用量:** {% data variables.product.prodname_codespaces %} の課金目的の場合、アカウント内のすべての codespaces で使用されるすべてのストレージが含まれます。 これには、クローンされたリポジトリ、構成ファイル、拡張機能など、codespaces で使用されるすべての情報が含まれます。 これらの合計は、毎日課金サービスに報告され、毎月請求されます。 月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 {% data variables.product.prodname_codespaces %} で使用されているコンピューティング時間 (分) とストレージ GB の数を確認するには、「[Codespaces の使用状況の表示](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)」を参照してください。

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} の無効化または制限

組織またはリポジトリでの {% data variables.product.prodname_codespaces %} の使用を無効にすることができます。 詳細については、「[Managing repository access for your organization's codespaces (組織の codespace に関するリポジトリ アクセスを管理する)](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)」を参照してください。

また、{% data variables.product.prodname_codespaces %} を使用できる個々のユーザーを制限することもできます。 詳細については、[組織のユーザー アクセス許可の管理](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)に関する記事を参照してください。

組織が所有するリポジトリで使用できるコンピューターの種類の選択を制限できます。 これにより、ユーザーがリソースの多いコンピューターを codespaces に使用しないようにすることができます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

## <a name="deleting-unused-codespaces"></a>未使用の codespaces の削除

ユーザーは、 https://github.com/codespaces または {% data variables.product.prodname_vscode %} 内から自分の codespace を削除できます。 Codespace のサイズを小さくするには、ユーザーはターミナルを使うか、{% data variables.product.prodname_vscode_shortname %} 内から、ファイルを手動で削除できます。 

{% note %}

**注:** codespace を作成したユーザーのみが削除できます。 現在、Organization のオーナーが Organization 内で作成された Codespaces を削除する方法はありません。

{% endnote %}
