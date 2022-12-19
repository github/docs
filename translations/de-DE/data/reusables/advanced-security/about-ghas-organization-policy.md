---
ms.openlocfilehash: a9edfbc5b5f3c0f50ae1e476d393e658751a5079
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888574"
---
{% data variables.product.company_short %} Rechnungen für {% data variables.product.prodname_advanced_security %} auf Basis der einzelnen Committer. {% ifversion fpt or ghec %}Weitere Informationen findest du unter "[Lizenzierung für {% data variables.product.prodname_GH_advanced_security %} verwalten](/billing/managing-licensing-for-github-advanced-security)."{% elsif ghes %}Weitere Informationen findest du unter "[Verwalten von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen](/admin/advanced-security)."{% endif %}

Du kannst eine Richtlinie erzwingen, die steuert, ob Repository-Administratoren die Funktionen für {% data variables.product.prodname_advanced_security %} in den Repositorys einer Organisation aktivieren dürfen. Du kannst eine Richtlinie für alle Organisationen konfigurieren, die zu deinem Unternehmenskonto gehören, oder für einzelne Organisationen, die du auswählst.

Die Deaktivierung von {% data variables.product.prodname_advanced_security %} für eine Organisation verhindert, dass Repository-Administratoren {% data variables.product.prodname_advanced_security %}-Funktionen für weitere Repositorys aktivieren, deaktiviert aber nicht die Funktionen für Repositorys, in denen die Funktionen bereits aktiviert sind. Weitere Informationen zur Konfiguration der {% data variables.product.prodname_advanced_security %}-Funktionen findest du unter "[Verwalten der Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" oder "[Verwalten der Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
