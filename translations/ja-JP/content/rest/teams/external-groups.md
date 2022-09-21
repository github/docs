---
title: 外部グループ
intro: 外部グループ API を使うと、Organization で利用できる外部 ID プロバイダー グループを表示し、外部グループと Organization 内のチームの間の接続を管理できます。
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0958aad779e6ec1044b74d3f6d67b2d7fff8aef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710372'
---
## 外部グループ API について

この API を使用するには、認証されたユーザーがチームメンテナまたは Team に関連づけられた Organization のコードオーナーである必要があります。

{% ifversion ghec %} {% note %}

**注:** 

- 外部グループ API は、{% data variables.product.prodname_emus %} を使用する企業の一部である Organization でのみ使用できます。 詳細については、「[Enterprise Managed Users について](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。
- 組織でチーム同期を使用している場合は、Team の同期 API を使用できます。 詳細については、「[Team の同期 API](#team-synchronization)」を参照してください。

{% endnote %} {% endif %}
