---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424833"
---
監査ログには、Enterprise に影響するアクティビティによってトリガーされるイベントの一覧が表示されます{% ifversion not ghec %}。 {% data variables.product.product_name %} の監査ログは、エンタープライズ所有者が別の保持期間を構成していない限り{% ifversion audit-data-retention-tab %}、無期限に保持されます。 詳しくは、「[エンタープライズの監査ログの構成](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)」を参照してください。{% else %}。{% endif %}{% else %} (現在の月内および過去 6 か月間まで)。 監査ログには、Git イベントが 7 日間保持されます。{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
