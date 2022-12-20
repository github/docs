---
title: Informationen zur fortlaufenden Integration
intro: 'Mit {% data variables.product.prodname_actions %} kannst direkt in deinem {% data variables.product.prodname_dotcom %}-Repository CI-Workflows (Continuous Integration) für die fortlaufende Integration erstellen.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: 26b9088133ad561900d06a0c885d6b06b9b55861
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880661'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zur fortlaufenden Integration

Bei der Softwarepraktik der fortlaufenden Integration (CI) erfolgen häufige Code-Commits an ein gemeinsames Repository. Code-Commits in kurzen Abständen tragen dazu bei, Fehler frühzeitiger aufzudecken, und verringern die Codemenge, die ein Entwickler auf der Suche nach der Fehlerursache debuggen muss. Durch häufige Code-Aktualisierungen lassen sich zudem Änderungen von verschiedenen Mitgliedern eines Software-Entwicklungsteams leichter zusammenführen. Dies bedeutet einen erheblichen Vorteil für die Entwickler, die sich damit stärker auf das Schreiben des Codes konzentrieren können, statt Fehler debuggen oder Mergekonflikte beheben zu müssen.

Durch einen Codecommit an das Repository kannst du den Code fortlaufend erstellen und testen, sodass gewährleistet ist, dass der Commit keine Fehler einbringt. Die Tests können beispielsweise Code-Linters (überprüfen Stilformatierungen), Sicherheitsprüfungen, Code-Abdeckung, Funktionstests und andere benutzerdefinierte Prüfungen umfassen.

Zum Erstellen und Testen des Codes ist ein Server erforderlich. Du kannst Aktualisierungen lokal erstellen und testen, bevor du den Code per Push an ein Repository sendest, oder auch einen CI-Server nutzen, der neue Codecommits in einem Repository überprüft.

## Informationen zur fortlaufenden Integration mit {% data variables.product.prodname_actions %}

{% ifversion ghae %}CI mit {% data variables.product.prodname_actions %} bietet Workflows an, die den Code in deinem Repository erstellen und deine Tests ausführen können. Workflows können auf Runnersystemen ausgeführt werden, die du hostest. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.
{% else %} CI mit {% data variables.product.prodname_actions %} bietet Workflows an, die den Code in deinem Repository erstellen und deine Tests ausführen können. Workflows können auf {% data variables.product.prodname_dotcom %}-gehosteten VMs ausgeführt werden, oder auf Computern, die du selbst hostest. Weitere Informationen findest du unter [Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/using-github-hosted-runners/about-github-hosted-runners) und [Informationen zu selbstgehosteten Runnern](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners).
{% endif %}

Du kannnst den CI-Workflow so konfigurieren, dass er bei einem {% data variables.product.prodname_dotcom %}-Ereignis (z. B. wenn neuer Code per Push in das Repository eingebracht wird), nach einem festen Zeitplan oder bei einem externen Ereignis anhand des Sende-Webhooks des Repositorys ausgeführt wird.

{% data variables.product.product_name %} führt die CI-Tests durch und liefert die Ergebnisse der einzelnen Tests im Pull Request, sodass du feststellen kannst, ob die Änderung im Branch einen Fehler einbringt. Sobald alle CI-Tests in einem Workflow bestanden wurden, können die per Push übermittelten Änderungen von einem Teammitglied geprüft oder zusammengeführt werden. Wenn ein Test nicht bestanden wird, liegt die Ursache eventuell in einer deiner Änderungen.

Wenn du die CI im Repository einrichtest, analysiert {% data variables.product.product_name %} den Code im Repository und empfiehlt CI-Workflows anhand der Sprache und des Frameworks im Repository. Wenn du z. B. [Node.js](https://nodejs.org/en/) verwendest, schlägt {% data variables.product.product_name %} einen Workflow zum Einstieg vor, der deine Node.js-Pakete installiert und deine Tests ausführt. Du kannst den von {% data variables.product.product_name %} vorgeschlagenen CI-Workflow zum Einstieg übernehmen, den vorgeschlagenen Workflow zum Einstieg anpassen oder eine benutzerdefinierte Workflow-Datei für die Ausführung der CI-Tests erstellen.

![Screenshot mit vorgeschlagenen Continuous Integration-Workflows zum Einstieg](/assets/images/help/repository/ci-with-actions-template-picker.png)

Mit {% data variables.product.prodname_actions %} kannst du nicht nur CI-Workflows für dein Projekt einrichten, sondern auch Workflows für den gesamten Lebenszyklus der Softwareentwicklung. Du kannst dein Projekt beispielsweise mithilfe von Aktionen bereitstellen, paketieren oder freigeben. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/articles/about-github-actions).

Eine Definition allgemeiner Begriffe findest du unter [Kernkonzepte für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions).

## Workflows zum Einstieg

{% data variables.product.product_name %} umfasst CI-Workflows zum Einstieg für verschiedene Sprachen und Frameworks.

Durchsuche die vollständige Liste der von {% data variables.product.company_short %} angebotenen CI-Workflows zum Einstieg im {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci)-Repository{% else %}`actions/starter-workflows`-Repository auf {% data variables.product.product_location %}{% endif %}.

## Weitere Informationsquellen

{% ifversion fpt or ghec %}
- [Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) {% endif %}
