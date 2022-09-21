---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063411"
---
組織で SCIM を使用するには、サードパーティ所有の {% data variables.product.prodname_oauth_app %} を使用する必要があります。 {% data variables.product.prodname_oauth_app %} では、特定の {% data variables.product.prodname_dotcom %} ユーザーによって承認される必要があり、その後は、そのユーザーに代わって動作します。 この {% data variables.product.prodname_oauth_app %} を最後に承認したユーザーが組織から離れるか、組織から削除された場合、SCIM は動作を停止します。 この問題を回避するために、SCIM を構成するための専用ユーザー アカウントを作成することをお勧めします。 このユーザー アカウントは組織の所有者である必要があり、ライセンスを使用します。
