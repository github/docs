---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114006"
---
{% ifversion not fpt %}組織所有者とセキュリティ マネージャーは、組織レベルのセキュリティの概要にアクセスできます。{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}また、エンタープライズレベルのセキュリティの概要を介して複数の組織にまたがるアラートを表示できます。 エンタープライズ所有者は、自身が組織所有者またはセキュリティ マネージャーとして追加されている組織のリポジトリとアラートのみを表示できます。{% endif %} {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}組織メンバーは、組織レベルのセキュリティの概要にアクセスして、自身が管理者特権を持つ、またはセキュリティ アラートへのアクセス権が付与されているリポジトリの結果を表示できます。{% else %}チームのメンバーは、そのチームが管理者特権を持っているリポジトリのセキュリティの概要を表示できます。{% endif %}{% endif %}
