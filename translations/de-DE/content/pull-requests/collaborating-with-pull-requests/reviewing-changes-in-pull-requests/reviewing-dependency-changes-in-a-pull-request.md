---
title: Überprüfen von Abhängigkeitsänderungen in einem Pull Request
intro: 'Wenn ein Pull Request Änderungen an Abhängigkeiten enthält, kannst du eine Zusammenfassung dessen anzeigen, was geändert wurde,und ob bekannte Sicherheitsrisiken in einer der Abhängigkeiten vorhanden sind.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106605'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## Informationen zur Abhängigkeitsüberprüfung

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %} Bevor du die Abhängigkeitsüberprüfung in einem privaten Repository verwenden kannst, musst du das Abhängigkeitsdiagramm aktivieren. Weitere Informationen findest du unter [Untersuchen der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository).{% endif %}

{% ifversion ghes %} Bevor du die Abhängigkeitsüberprüfung verwenden kannst, musst du das Abhängigkeitsdiagramm aktivieren und eine Verbindung von {% data variables.location.product_location %} mit {% data variables.product.prodname_dotcom_the_website %} herstellen. Weitere Informationen findest du unter [Aktivieren von Warnungen für Abhängigkeiten mit Sicherheitsrisiken auf {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server).{% endif %}

Die Abhängigkeitsüberprüfung ermöglicht dir, nach „links zu wechseln“. Du kannst die bereitgestellten prädiktiven Informationen verwenden, um Abhängigkeiten mit Sicherheitsrisiken zu erfassen, bevor sie in die Produktion eingehen. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/about-dependency-review).

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}

Du kannst die {% data variables.product.prodname_dependency_review_action %} verwenden, um Abhängigkeitsüberprüfungen bei Pull Requests in deinem Repository zu erzwingen. {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %} Du kannst die {% data variables.product.prodname_dependency_review_action %} so konfigurieren, dass sie deinen Anforderungen besser entspricht, indem du den Typ des Sicherheitsrisikos angibst, das du abfangen möchtest. Weitere Informationen findest du unter [Konfigurieren der Abhängigkeitsüberprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action). {% endif %}

{% endif %}
## Überprüfen von Abhängigkeiten in einem Pull Request

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. Wenn der Pull Request viele Dateien enthält, verwende das Dropdownmenü **Dateifilter**, um alle Dateien auszublenden, die keine Abhängigkeiten aufzeichnen. Dadurch wird es einfacher, die Überprüfung auf die Änderungen in den Abhängigkeiten zu konzentrieren.

   ![Das Dateifiltermenü](/assets/images/help/pull_requests/file-filter-menu-json.png): Die Abhängigkeitsüberprüfung bietet eine klarere Ansicht dessen, was sich in großen Sperrdateien geändert hat, wobei das Quell-Diff standardmäßig nicht gerendert wird.

  {% note %}

   **Hinweis:** Abhängigkeitsüberprüfungs-Rich-Diffs sind für committete statische JavaScript-Dateien wie `jquery.js` nicht verfügbar.

   {% endnote %}

1. Zeige rechts neben dem Header für eine Manifest- oder Sperrdatei die Abhängigkeitsüberprüfung an, indem du auf die Rich-Diff-Schaltfläche **{% octicon "file" aria-label="The rich diff icon" %}** klickst.

   ![Die Rich-Diff-Schaltfläche](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Überprüfe die in der Abhängigkeitsüberprüfung aufgeführten Abhängigkeiten.

   ![Sicherheitsrisikowarnungen in einer Abhängigkeitsüberprüfung](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Alle hinzugefügten oder geänderten Abhängigkeiten, die Sicherheitsrisiken aufweisen, werden zuerst aufgelistet, sortiert nach Schweregrad und dann nach Abhängigkeitsnamen. Dies bedeutet, dass die Abhängigkeiten mit dem höchsten Schweregrad in einer Abhängigkeitsüberprüfung immer oben liegen. Andere Abhängigkeiten werden alphabetisch nach Abhängigkeitsnamen aufgeführt.

   Das Symbol neben jeder Abhängigkeit zeigt an, ob die Abhängigkeit in diesem Pull Request hinzugefügt (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), aktualisiert (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) oder entfernt (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) wurde.

   Diese Informationen umfassen Folgendes:

   * Die Version, oder der Versionsbereich der neuen, aktualisierten oder gelöschten Abhängigkeit.
   * Für eine bestimmte Version einer Abhängigkeit:
      * Das Alter dieser Veröffentlichung der Abhängigkeit.
      * Die Anzahl der Projekte, die von dieser Software abhängig sind. Diese Informationen werden aus dem Abhängigkeitsdiagramm abgeleitet. Wenn du die Anzahl der Abhängigen überprüfst, kannst du vermeiden, versehentlich die falsche Abhängigkeit hinzuzufügen.
      * Die von dieser Abhängigkeit verwendete Lizenz, wenn diese Informationen verfügbar sind. Dies ist nützlich, wenn du verhindern möchtest, dass Code mit bestimmten Lizenzen in deinem Projekt verwendet wird.

   Wenn eine Abhängigkeit ein bekanntes Sicherheitsrisiko aufweist, enthält die Warnmeldung Folgendes:

   * Eine kurze Beschreibung des Sicherheitsrisikos.
   * Eine CVE- oder {% data variables.product.prodname_security_advisories %}-Identifikationsnummer (Common Vulnerabilities and Exposures oder GHSA). Du kannst auf diese ID klicken, um mehr über das Sicherheitsrisiko zu erfahren.
   * Der Schweregrad des Sicherheitsrisikos.
   * Die Version der Abhängigkeit, in der das Sicherheitsrisiko behoben wurde. Wenn du einen Pull Request für jemanden überprüfst, bitte den Mitwirkenden, die Abhängigkeit auf die gepatchte Version oder eine spätere Version zu aktualisieren.

{% data reusables.repositories.return-to-source-diff %}
