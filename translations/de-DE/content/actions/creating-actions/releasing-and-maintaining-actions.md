---
title: Freigeben und Verwalten von Aktionen
shortTitle: Releasing and maintaining actions
intro: 'Du kannst Automatisierung und bewährte Open-Source-Methoden nutzen, um Aktionen zu veröffentlichen und zu verwalten.'
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
ms.openlocfilehash: 563a63a3af79c75c6912777c1c3f0ecdace6403e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068787'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Nachdem du eine Aktion erstellt hast, möchtest du weiterhin neue Features veröffentlichen, während du mit Communitybeiträgen arbeitest. In diesem Tutorial wird ein Beispielprozess beschrieben, den du zum Freigeben und Verwalten von Aktionen in Open Source befolgen kannst. Beispiel:

* Nutzen von {% data variables.product.prodname_actions %} für Continuous Integration, Abhängigkeitsupdates, Releaseverwaltung und Aufgabenautomatisierung
* Schaffen von Vertrauen durch automatisierte Tests und Buildbadges
* Angeben der Einsatzmöglichkeiten der Aktion, idealerweise als Teil eines breiteren Workflows
* Signalisieren der gewünschten Art von Communitybeiträgen (Beispiele: Issues, Pull Requests oder Sicherheitsrisikoberichte)

Ein Anwendungsbeispiel für diesen Prozess findest du unter [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

## Entwickeln und Freigeben von Aktionen

In diesem Abschnitt diskutieren wir einen Beispielprozess zum Entwickeln und Freigeben von Aktionen und zeigen, wie {% data variables.product.prodname_actions %} zum Automatisieren des Prozesses verwendet wird.

### Informationen zu JavaScript-Aktionen

JavaScript-Aktionen sind Node.js-Repositorys mit Metadaten. Im Vergleich zu herkömmlichen Node.js-Projekten weisen JavaScript-Aktionen jedoch zusätzliche Eigenschaften auf:

* Abhängige Pakete werden zusammen mit dem Code committet, in der Regel in einem kompilierten und minimierten Format. Dies bedeutet, dass automatisierte Builds und sichere Communitybeiträge wichtig sind.

{% ifversion fpt or ghec %}

* Versionen mit Tags können direkt im {% data variables.product.prodname_marketplace %} veröffentlicht und von Workflows in {% data variables.product.prodname_dotcom %} verwendet werden.

{% endif %}

* Viele Aktionen nutzen {% data variables.product.prodname_dotcom %}-APIs und APIs von Drittanbietern, daher empfehlen wir gründliche End-to-End-Tests.

### Einrichten von {% data variables.product.prodname_actions %}-Workflows

Um den Entwicklerprozess im nächsten Abschnitt zu unterstützen, füge deinem Repository zwei {% data variables.product.prodname_actions %}-Workflows hinzu:

1. Füge einen Workflow hinzu, der ausgelöst wird, wenn ein Commit an einen Featurebranch oder an `main` gepusht oder wenn ein Pull Request erstellt wird. Konfiguriere den Workflow, um deine Komponenten- und Integrationstests auszuführen. Sieh dir beispielsweise [diesen Workflow](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml) an.
2. Füge einen Workflow hinzu, der ausgelöst wird, wenn ein Release veröffentlicht oder bearbeitet wird. Konfiguriere den Workflow, um sicherzustellen, dass semantische Tags vorhanden sind. Du kannst eine Aktion wie [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) verwenden, um die JavaScript- und Metadatendatei zu kompilieren und als Paket zu erstellen und die Pushübertragung semantischer Haupt-, Neben- und Patchtags zu erzwingen. Sieh dir beispielsweise [diesen Workflow](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml) an. Weitere Informationen zu semantischen Tags findest du unter [Informationen zur semantischen Versionsverwaltung](https://docs.npmjs.com/about-semantic-versioning).

### Beispielentwicklerprozess

Nachfolgend findest du einen Beispielprozess, mit dem du Tests automatisch ausführen, ein Release erstellen{% ifversion fpt or ghec%}, im {% data variables.product.prodname_marketplace %} veröffentlichen{% endif %} und deine Aktion veröffentlichen kannst.

1. Führe Featurearbeit in Branches über einen GitHub-Flow aus. Weitere Informationen findest du unter [GitHub-Flow](/get-started/quickstart/github-flow).
   * Wenn ein Commit an den Featurebranch gepusht wird, führt dein Testworkflow die Tests automatisch aus.

2. Erstelle Pull Requests an den `main`-Branch, um Diskussionen und Reviews zu initiieren. Bei Bereitschaft wird ein Mergevorgang durchgeführt.

   * Wenn ein Pull Request aus einem Branch oder einem Fork geöffnet wird, führt der Testworkflow die Tests erneut aus, dieses Mal mit dem Mergecommit.

   * **Hinweis**: Aus Sicherheitsgründen verfügen Workflows, die über `pull_request` aus Forks ausgelöst werden, über eingeschränkte `GITHUB_TOKEN`-Berechtigungen und können nicht auf Geheimnisse zugreifen. Wenn deine Tests oder andere Workflows, die nach einem Pull Request ausgelöst werden, Zugriff auf Geheimnisse erfordern, solltest du ein anderes Ereignis wie beispielsweise einen [manuellen Trigger](/actions/reference/events-that-trigger-workflows#manual-events) oder ein [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target) verwenden. Weitere Informationen finden Sie [hier](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Erstelle eine Version mit semantischen Tags. {% ifversion fpt or ghec %} Du kannst auch mit einem einfachen Kontrollkästchen auf dem {% data variables.product.prodname_marketplace %} veröffentlichen. {% endif %} Weitere Informationen findest du unter [Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release){% ifversion fpt or ghec %} und unter [Veröffentlichen von Aktionen im {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action){% endif %}.

   * Wenn ein Release veröffentlicht oder bearbeitet wird, übernimmt dein Releaseworkflow automatisch die Kompilierung und Anpassung von Tags.

   * Es wird empfohlen, Releases mithilfe von semantischen Versionstags (z. B. `v1.1.3`) zu erstellen und Tags von Hauptversionen (`v1`) und Nebenversionen (`v1.1`) mit dem neuesten entsprechenden Commit auf dem neuesten Stand zu halten. Weitere Informationen findest du unter [Informationen zu benutzerdefinierten Aktionen](/actions/creating-actions/about-custom-actions#using-release-management-for-actions) und unter [Informationen zur semantischen Versionsverwaltung](https://docs.npmjs.com/about-semantic-versioning).

### Ergebnisse

Im Gegensatz zu einigen anderen Strategien zur automatisierten Releaseverwaltung committet dieser Prozess absichtlich keine Abhängigkeiten an den `main`-Branch, sondern nur an die mit Tags versehenen Releasecommits. Dadurch werden Benutzer deiner Aktion dazu veranlasst, auf benannte Tags oder `sha`s zu verweisen, und du stellst die Sicherheit der Pull Requests von Drittanbietern sicher, indem du den Build während eines Release selbst erstellst.

Mit semantischen Releases können die Benutzer deiner Aktionen ihre Workflows an eine Version anheften und wissen, dass sie je nach Komfortniveau weiterhin die neuesten stabilen Features ohne Breaking Changes erhalten:

## Arbeiten mit der Community

{% data variables.product.product_name %} bietet Tools und Anleitungen, die dich bei der Arbeit mit der Open-Source-Community unterstützen. Die folgenden Tools werden für eine solide bidirektionale Kommunikation empfohlen. Indem du der Community die folgenden Signale bereitstellst, ermutigst du andere, deine Aktion zu verwenden, zu ändern und dazu beizutragen:

* Führe eine `README`-Datei mit zahlreichen Verwendungsbeispielen und Anleitungen. Weitere Informationen findest du unter [Informationen zu README-Dateien](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).
* Füge ein Workflowstatusbadge in deine `README`-Datei ein. Weitere Informationen findest du unter [Hinzufügen eines Workflowstatusbadges](/actions/managing-workflow-runs/adding-a-workflow-status-badge). Besuche auch [shields.io](https://shields.io/), um Informationen zu weiteren Badges zu erhalten, die hinzugefügt werden können.{% ifversion fpt or ghec %}
* Füge Community-Unterstützungsdateien wie `CODE_OF_CONDUCT`, `CONTRIBUTING` und `SECURITY` hinzu. Weitere Informationen findest du unter [Erstellen einer Standarddatei zur Unterstützung der Community](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types).{% endif %}
* Halte Issues auf dem neuesten Stand, indem du Aktionen wie [actions/stale](https://github.com/actions/stale) verwendest.

## Weitere Informationsquellen

Beispiele für die Verwendung ähnlicher Muster:

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
