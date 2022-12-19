---
ms.openlocfilehash: 8df8afeba066cc59aca94e54e8b198794feb5f40
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763640"
---
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% ifversion actions-hosted-runners %}1. Haz clic en **Nuevo ejecutor** y, a continuación, en **Nuevo ejecutor autohospedado**. {% else %} 1. Haz clic en **Nuevo ejecutor**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {%- elsif ghae or ghes < 3.4 %} Para agregar un nuevo ejecutor autohospedado a una empresa, debes ser propietario de la misma.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. Haga clic en **Agregar nuevo** y después en **Nuevo ejecutor**.
{% data reusables.actions.self-hosted-runner-configure %} {%- endif %}
