---
title: Grundlegendes zur Abrechnung für GitHub Codespaces
intro: Erfahre, wie deine {% data variables.product.prodname_github_codespaces %}-Nutzung berechnet wird.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
- /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: 2dfec9e452360db117bdee7954fbe4fad2ad1c56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111545"
---
In diesem Artikel wird erläutert, wie die Abrechnung für deine Codespaces funktioniert, und erläutert, wie der Abrechnungs-Manager deiner Organisation helfen kann.

## Erhalten des Zugriffs auf {% data variables.product.prodname_github_codespaces %}

Der Administrator deiner Organisation beschränkt die Nutzung von {% data variables.product.prodname_github_codespaces %} möglicherweise auf bestimmte persönliche Konten. Um Zugriff zu erhalten, musst du dich an deinen Abrechnungs-Manager wenden. Weitere Informationen findest du unter [Verwalten des Zugriffs und der Sicherheit für deine Codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces).

## Kosten für die Nutzung von {% data variables.product.prodname_codespaces %}

Informationen zu den Preisen für die {% data variables.product.prodname_codespaces %}-Nutzung findest du unter [{% data variables.product.prodname_codespaces %}-Preise](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

## Abrechnung deiner Codespace-Nutzung

Für deinen Codespace werden die Computeminuten und die Menge des auf dem Datenträger verwendeten Speichers berechnet.

Wenn du das Erstellen von Prebuilds für Codespaces aktivierst, entstehen zusätzliche Gebühren. Weitere Informationen findest du unter „[Informationen zu Daten {% data variables.product.prodname_github_codespaces %} prebuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)“.

### Grundlegendes zu den Computeminuten
Für deinen Codespace wird die Anzahl der Minuten berechnet, die er aktiv ist. Wenn dein Codespacefenster für 30 Minuten im Leerlauf bleibt, wird es automatisch heruntergefahren, und die Abrechnung für den Codespace wird beendet, bis du den Codespace erneut startest.

### Grundlegendes zur Abrechnung von Codespacespeichern
Für {% data variables.product.prodname_github_codespaces %} wird der Speicher so definiert, dass er alle Dateien enthält, die sich auf Ihren Codespace beziehen, wie z. B. das geklonte Repository, Konfigurationsdateien und Erweiterungen, um nur einige zu nennen. Dieser Speicher wird abgerechnet, sobald der Codespace heruntergefahren wird. Die Speicherabrechnung für einen Codespace endet, wenn du ihn manuell aus https://github.com/codespaces löschst.

## Funktionsweise von Ausgabenbeschränkungen

Bevor deine Organisation {% data variables.product.prodname_codespaces %} verwenden kann, muss dein Abrechnungs-Manager ein Ausgabenlimit festlegen. Weitere Informationen findest du unter „[Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)“. 

## Exportieren von Änderungen bei Erreichen des Ausgabenlimits

{% data reusables.codespaces.exporting-changes %}

## Überprüfen der aktuellen Nutzung und Grenzwerte
Wenn du deine aktuelle Nutzung oder dein Ausgabenlimit einsehen möchtest, wende dich an den Abrechnungs-Manager deiner Organisation. Weitere Informationen findest du unter „[Anzeigen der {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)“.

## Codespaces können automatisch gelöscht werden

Dein Codespace wird automatisch gelöscht, wenn du aus einer Organisation oder einem Repository entfernt wirst.

## Löschen nicht verwendeter Codespaces

Du kannst deine Codespaces manuell in https://github.com/codespaces und aus {% data variables.product.prodname_vscode %} löschen. Um die Größe eines Codespaces zu verringern, kannst du Dateien manuell über das Terminal oder aus {% data variables.product.prodname_vscode %} löschen.

## Weitere Informationsquellen

- „[Verwalten der Abrechnung für {% data variables.product.prodname_github_codespaces %} in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)“
