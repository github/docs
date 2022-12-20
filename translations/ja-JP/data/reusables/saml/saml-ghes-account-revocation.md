---
ms.openlocfilehash: 727611615f31b6b6064340ba97757509a1834db2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193596"
---
{% ifversion ghes %}

JIT プロビジョニングでは、IdP からユーザーを削除する場合、{% data variables.location.product_location %} でユーザーのアカウントを手動で中断する必要があります。 そうしないと、アカウントの所有者はアクセス トークンまたは SSH キーを使って引き続き認証を行うことができます。 詳細については、[ユーザーの一時停止と一時停止解除](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)に関するページを参照してください。

{% endif %}
