---
ms.openlocfilehash: 8df8afeba066cc59aca94e54e8b198794feb5f40
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763636"
---
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% ifversion actions-hosted-runners %}1. Klicke auf **Neuer Runner** und dann auf **Neuer selbstgehosteter Runner**.{% else %}1. Klicke auf **Neuer Runner**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {%- elsif ghae or ghes < 3.4 %} Um einem Unternehmen einen selbstgehosteten Runner hinzuzufügen, musst du ein Unternehmensbesitzer sein.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. Klicke auf **Neu hinzufügen** und dann auf **Neuer Runner**.
{% data reusables.actions.self-hosted-runner-configure %} {%- endif %}
