---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108475"
---
{% ifversion fpt %} {% note %}

**Hinweis**: Alle Organisationen verfügen über eine einzige Standardrunnergruppe. Nur Unternehmenskonten und Organisationen, die im Besitz von Unternehmenskonten sind, können zusätzliche Runnergruppen erstellen und verwalten.

{% endnote %}

Runnergruppen werden zum Steuern des Zugriffs auf Runner verwendet. Organisationsadministratoren können Zugriffsrichtlinien konfigurieren, mit denen gesteuert wird, welche Repositorys in einer Organisation Zugriff auf die Runnergruppe erhalten.

Mit {% data variables.product.prodname_ghe_cloud %} kannst du zusätzliche Runnergruppen erstellen. Enterprise-Administratoren können Zugriffsrichtlinien konfigurieren, mit denen gesteuert wird, welche Organisationen in einem Unternehmen Zugriff auf die Runnergruppe erhalten. Außerdem können Organisationsadministratoren der Enterprise-Runnergruppe weitere präzise Zugriffsrichtlinien für Repositorys zuweisen. {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Neu erstellte Runner werden automatisch der Standardgruppe zugewiesen. Runner können immer nur Mitglied einer Gruppe sein. Du kannst Runner aus der Standardgruppe in eine andere Gruppe verschieben. Weitere Informationen findest du unter [Verschieben eines Runners in eine Gruppe](#moving-a-runner-to-a-group).

{% endif %}
