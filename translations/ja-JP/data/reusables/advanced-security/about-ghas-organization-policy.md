---
ms.openlocfilehash: a9edfbc5b5f3c0f50ae1e476d393e658751a5079
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888575"
---
{% data variables.product.company_short %}は{% data variables.product.prodname_advanced_security %}に対してコミッター単位で課金します。 {% ifversion fpt or ghec %}詳細については、[{% data variables.product.prodname_GH_advanced_security %} のライセンス管理](/billing/managing-licensing-for-github-advanced-security)に関する記事を参照してください。{% elsif ghes %}詳細については、「[エンタープライズの {% data variables.product.prodname_GH_advanced_security %} の管理](/admin/advanced-security)」を参照してください。{% endif %}

リポジトリ管理者がOrganizationのリポジトリで{% data variables.product.prodname_advanced_security %}の機能を有効化できるようにするかをコントロールするポリシーを適用できます。 Enterpriseアカウントが所有するすべてのOrganizationに対して、あるいは選択した個々のOrganizationに対してポリシーを設定できます。

Organizationに対して{% data variables.product.prodname_advanced_security %}を不許可にすれば、リポジトリ管理者が追加のリポジトリで{% data variables.product.prodname_advanced_security %}の機能を有効化できないようにすることができますが、そうしても機能がすでに有効化されていたリポジトリでは機能は無効化されません。 {% data variables.product.prodname_advanced_security %} 機能の構成の詳細については、「[組織のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」または「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
