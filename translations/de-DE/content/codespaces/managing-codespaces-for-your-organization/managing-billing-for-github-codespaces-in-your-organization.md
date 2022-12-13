---
title: Verwalten der Abrechnung für GitHub Codespaces in deiner Organisation
shortTitle: Manage billing
intro: Du kannst deine Nutzung von {% data variables.product.prodname_github_codespaces %} überprüfen und Nutzungsgrenzen festlegen.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 6cd1396cd0933999a99c334f00416b43f31ae249
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865185"
---
## Übersicht

Weitere Informationen zu den Preisen von {% data variables.product.prodname_github_codespaces %} findest du unter [Preise von {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

{% data reusables.codespaces.codespaces-billing %}

- Als Organisationsinhaber*in oder Abrechnungsmanager*in kannst du die Abrechnung von {% data variables.product.prodname_codespaces %} für deine Organisation verwalten: [Informationen zur Abrechnung von Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces).
- Als Organisationsinhaber*in kannst du alle aktuell aktiven oder beendeten Codespaces für deine Organisation auflisten. Zusätzlich zu diesen Codespaces können die Gebühren für den aktuellen Monat Kosten für Codespaces enthalten, die im aktuellen Monat einmal vorhanden waren, aber dann gelöscht wurden.
- Benutzer*innen steht ein Leitfaden zur Verfügung, in dem erläutert wird, wie die Abrechnung funktioniert: [Grundlegendes zur Abrechnung von Codespaces](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Usage limits (Nutzungseinschränkungen)

Du kannst ein Nutzungslimit für die Codespaces in deiner Organisation oder deinem Repository festlegen. Dieses Limit bezieht sich auf die Compute- und Speichernutzung von {% data variables.product.prodname_github_codespaces %}:
 
- **Computeminuten:** Die Computenutzung wird anhand der tatsächlichen Anzahl von Minuten berechnet, die von allen {% data variables.product.prodname_codespaces %}-Instanzen verbraucht wird, wenn sie aktiv sind. Diese Summen werden täglich an den Abrechnungsdienst gemeldet und monatlich berechnet. Du kannst ein Ausgabenlimit für die {% data variables.product.prodname_codespaces %}-Nutzung in deiner Organisation festlegen. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).

- **Speichernutzung:** Zur Abrechnung von {% data variables.product.prodname_codespaces %} wird hier der von allen Codespaces in deinem Konto verwendete Speicher aufgeführt. Dazu gehören Ressourcen wie zum Beispiel geklonte Repositorys, Konfigurationsdateien, Erweiterungen und mehr. Diese Summen werden täglich an den Abrechnungsdienst gemeldet und monatlich berechnet. Am Ende jedes Monates rundet {% data variables.product.prodname_dotcom %} deine Speichernutzung zum nächsten MB. Informationen zum Überprüfen, wie viele Computeminuten und Speicher-GB von {% data variables.product.prodname_codespaces %} verbraucht wurden, findest du unter [Anzeigen deiner {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

## Deaktivieren oder Einschränken von {% data variables.product.prodname_codespaces %}

Du kannst die gesamte Nutzung von {% data variables.product.prodname_github_codespaces %} deaktivieren, die deiner Organisation in Rechnung gestellt werden würde. Alternativ kannst du angeben, welche Organisationsmitglieder oder Mitarbeiter {% data variables.product.prodname_codespaces %} auf Kosten deiner Organisation verwenden können. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Du kannst konfigurieren, auf welche Repositorys von Codespaces aus zugegriffen werden kann, die für ein bestimmtes Repository erstellt wurden. Weitere Informationen findest du unter [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

Du kannst die Auswahl der Computertypen einschränken, die für Codespaces verfügbar sind, die aus Repositorys im Besitz deiner Organisation erstellt wurden. Dadurch kannst du verhindern, dass Personen übermäßig leistungsstarke Computer für ihre Codespaces verwenden und unnötige Kosten verursachen. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

Du kannst auch einschränken, wie lange ein Codespace ungenutzt bleiben kann, bevor er automatisch gelöscht wird. Dies kann dazu beitragen, die Speicherkosten für {% data variables.product.prodname_codespaces %} zu verringern. Weitere Informationen findest du unter [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

## Löschen nicht verwendeter Codespaces

Deine Benutzer können ihre eigenen Codespaces in https://github.com/codespaces und innerhalb von {% data variables.product.prodname_vscode %} löschen. Um die Größe eines Codespaces zu verringern, können Benutzer Dateien manuell über das Terminal oder innerhalb von {% data variables.product.prodname_vscode_shortname %} löschen. 

Als Organisationsinhaber*in kannst du alle Codespaces in deiner Organisation löschen. Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization).

{% note %}

**Hinweis**: Codespaces werden automatisch gelöscht, nachdem sie beendet wurden und für eine definierte Anzahl von Tagen inaktiv geblieben sind. Weitere Informationen findest du unter [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces). Ein Codespace kann manuell nur von der Person gelöscht werden, die den Codespace erstellt hat.

{% endnote %}

## Weitere Informationsquellen

- [Auflisten der Codespaces in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
