---
ms.openlocfilehash: 8df8afeba066cc59aca94e54e8b198794feb5f40
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763635"
---
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% ifversion actions-hosted-runners %}1. Cliquez sur **Nouvel exécuteur**, puis sur **Nouvel exécuteur auto-hébergé**.{% else %}1. Cliquez sur **Nouvel exécuteur**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {%- elsif ghae or ghes < 3.4 %} Pour ajouter un exécuteur auto-hébergé à une entreprise, vous devez être propriétaire de l’entreprise.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %}
1. Cliquez sur **Ajouter**, puis sur **Nouvel exécuteur**.
{% data reusables.actions.self-hosted-runner-configure %} {%- endif %}
