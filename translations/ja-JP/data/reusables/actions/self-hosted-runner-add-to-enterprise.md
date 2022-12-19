---
ms.openlocfilehash: 8df8afeba066cc59aca94e54e8b198794feb5f40
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763637"
---
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% ifversion actions-hosted-runners %}1。 **[新しいランナー]** をクリックし、 **[新しいセルフホステッド ランナー]** をクリックします。{% else %}1。 **[新しいランナー]** をクリックします。{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {%- elsif ghae or ghes < 3.4 %} Enterprise にセルフホステッド ランナーを追加するには、Enterprise 所有者である必要があります。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. **[新規追加]** をクリックし、 **[New runner]\(新しいランナー\)** をクリックします。
{% data reusables.actions.self-hosted-runner-configure %} {%- endif %}
