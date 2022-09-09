---
title: 外部グループ
intro: 外部グループ API を使うと、Organization で利用できる外部 ID プロバイダー グループを表示し、外部グループと Organization 内のチームの間の接続を管理できます。
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 590605ab68eb40d42949e179e471d5c7d333f43e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: '147059971'
---
## <a name="about-the-external-groups-api"></a>外部グループ API について

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。

{% ifversion ghec %} {% note %}

**注:** 

- 外部グループ API は、{% data variables.product.prodname_emus %} を使用する企業の一部である組織でのみ使用できます。 詳細については、「[Enterprise Managed Users について](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。
- 組織でチーム同期を使用している場合は、Team の同期 API を使用できます。 詳細については、「[Team の同期 API](#team-synchronization)」を参照してください。

{% endnote %} {% endif %}
