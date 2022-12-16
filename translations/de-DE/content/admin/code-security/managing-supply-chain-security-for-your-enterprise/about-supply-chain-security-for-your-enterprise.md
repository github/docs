---
title: Informationen zur Lieferkettensicherheit für dein Unternehmen
intro: 'Du kannst Features aktivieren, die deinen Entwicklern helfen, die Abhängigkeiten, auf denen ihr Code basiert, zu verstehen und zu aktualisieren.'
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 7f1c658285e88065ad1a232fc13c9186be143119
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107197'
---
Du kannst Benutzern die Möglichkeit geben, die Abhängigkeiten ihrer Projekte zu identifizieren, indem du das Abhängigkeitsdiagramm für {% data variables.location.product_location %}{% ifversion ghes %}aktivierst{% elsif ghae %}verwendest{% endif %}. Weitere Informationen findest du unter {% ifversion ghes %}[Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}.

Du kannst Benutzern {% data variables.location.product_location %} außerdem erlauben, Sicherheitsrisiken in Codeabhängigkeiten zu ermitteln und zu beheben, indem du {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} und {% data variables.product.prodname_dependabot_updates %} {% endif %}aktivierst. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

Nachdem du {% data variables.product.prodname_dependabot_alerts %} aktiviert hast, kannst du Sicherheitsrisikodaten aus der {% data variables.product.prodname_advisory_database %} auf {% data variables.location.product_location %} ansehen und die Daten manuell synchronisieren. Weitere Informationen findest du unter [Anzeigen der Sicherheitsrisikodaten für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise).
