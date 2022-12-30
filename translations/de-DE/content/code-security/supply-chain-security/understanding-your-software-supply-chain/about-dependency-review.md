---
title: Informationen zur Abhängigkeitsüberprüfung
intro: 'Mit der Abhängigkeitsüberprüfung kannst du unsichere Abhängigkeiten erfassen, bevor du sie in deine Umgebung einführst, und Informationen zu Lizenz, Abhängigkeiten und deren Alter bereitstellen.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164114'
---
## Informationen zur Abhängigkeitsüberprüfung

{% data reusables.dependency-review.feature-overview %}  

Wenn ein Pull Request auf den Standardzweig deines Repositorys abzielt und Änderungen an Paketmanifesten oder Sperrdateien enthält, kannst du eine Abhängigkeitsüberprüfung anzeigen, um zu sehen, was sich geändert hat. Die Abhängigkeitsüberprüfung enthält Details zu Änderungen an indirekten Abhängigkeiten in Sperrdateien und sagt Dir, ob eine der hinzugefügten oder aktualisierten Abhängigkeiten bekannte Sicherheitslücken enthält.

Manchmal möchtest du vielleicht nur die Version einer Abhängigkeit in einem Manifest aktualisieren und einen Pull Request erstellen. Wenn die aktualisierte Version dieser direkten Abhängigkeit jedoch auch aktualisierte Abhängigkeiten hat, kann dein Pull Request mehr Änderungen enthalten, als du erwartet hast. Die Überprüfung der Abhängigkeiten für jede Manifest- und Sperrdatei bietet eine einfache Möglichkeit zu sehen, was sich geändert hat und ob eine der neuen Abhängigkeitsversionen bekannte Systemanfälligkeiten enthält.

Indem du die Abhängigkeitsüberprüfungen in einem Pull Request überprüfst und alle Abhängigkeiten änderst, die als anfällig gekennzeichnet sind, kannst du verhindern, dass deinem Projekt Sicherheitsrisiken hinzugefügt werden. Weitere Informationen zur Funktionsweise der Abhängigkeitsüberprüfung findest du unter [Überprüfen von Abhängigkeitsänderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).

Weitere Informationen zum Konfigurieren der Abhängigkeitsüberprüfung findest du unter [Konfigurieren der Abhängigkeitsüberprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% data variables.product.prodname_dependabot_alerts %} findet Sicherheitsrisiken, die sich bereits in deinen Abhängigkeiten befinden. Es ist jedoch wesentlich besser, die Einführung potenzieller Probleme zu vermeiden, als später Probleme beheben zu müssen. Weitere Informationen zu {% data variables.product.prodname_dependabot_alerts %} findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies).

Abhängigkeitsüberprüfung unterstützt dieselben Sprachen und Paketverwaltungsökosysteme wie das Abhängigkeitsdiagramm. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).

Weitere Informationen zu den auf {% data variables.product.product_name %} verfügbaren Lieferkettenfeatures findest du unter [Informationen zur Lieferkettensicherheit](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

{% ifversion ghec or ghes %}
## Aktivieren der Abhängigkeitsüberprüfung

Das Abhängigkeitsüberprüfungsfeature wird verfügbar, wenn du das Abhängigkeitsdiagramm aktivierst. Weitere Informationen findest du unter {% ifversion ghec %}[Aktivieren des Abhängigkeitsdiagramms](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## Erzwingung der Abhängigkeitsüberprüfung

Die Aktion ist für alle {% ifversion fpt or ghec %}öffentlichen Repositorys sowie für private {% endif %}Repositorys, für die {% data variables.product.prodname_GH_advanced_security %} aktiviert ist, verfügbar.

{% data reusables.dependency-review.action-enterprise %}

Du kannst die {% data variables.product.prodname_dependency_review_action %} in deinem Repository verwenden, um Abhängigkeitsüberprüfungen für deine Pull Requests zu erzwingen. Die Aktion sucht nach anfälligen Versionen von Abhängigkeiten, die durch Paketversionsänderungen in Pull Requests eingeführt wurden, und warnt dich vor den damit verbundenen Sicherheitsrisiken. So erhältst du einen besseren Überblick darüber, was sich in einem Pull Request ändert, und kannst verhindern, dass deinem Repository Sicherheitsrisiken hinzugefügt werden. Weitere Informationen findest du unter [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Beispiel für eine Abhängigkeitsüberprüfungsaktion](/assets/images/help/graphs/dependency-review-action.png)

Standardmäßig schlägt die {% data variables.product.prodname_dependency_review_action %} fehl, wenn sie anfällige Pakete erkennt. Bei einer fehlgeschlagenen Überprüfung wird das Zusammenführen eines Pull Requests blockiert, wenn der bzw. die Repositorybesitzer*in das Bestehen der Abhängigkeitsüberprüfung verlangt. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).

Die Aktion nutzt die Abhängigkeitsüberprüfung der REST-API, um die Abhängigkeitsänderungen zwischen dem Basis-Commit und dem Head-Commit zu ermitteln. Mit der Abhängigkeitsüberprüfungs-API kannst du die Abhängigkeitsänderungen zwischen zwei beliebigen Commits eines Repositorys abrufen, einschließlich der Daten zu Sicherheitsrisiken. Weitere Informationen findest du unter [Abhängigkeitsprüfung](/rest/reference/dependency-graph#dependency-review).

{% ifversion dependency-review-action-configuration %} Du kannst die {% data variables.product.prodname_dependency_review_action %} so konfigurieren, dass sie deinen Anforderungen besser entspricht. Du kannst z. B. den Schweregrad angeben, der dazu führt, dass die Aktion fehlschlägt{% ifversion dependency-review-action-licenses %}, oder eine Zulassungs- oder Ablehnungsliste für die zu überprüfenden Lizenzen festlegen{% endif %}. Weitere Informationen findest du unter [Konfigurieren der Abhängigkeitsüberprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action). {% endif %}

{% endif %}

