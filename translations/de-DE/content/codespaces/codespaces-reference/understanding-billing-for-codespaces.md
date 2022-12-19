---
title: Grundlegendes zur Abrechnung für Codespaces
intro: Hier erfährst du, wie die {% data variables.product.prodname_codespaces %}-Nutzung berechnet wird.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125353"
---
In diesem Artikel wird erläutert, wie die Abrechnung für deine Codespaces funktioniert, und erläutert, wie der Abrechnungsmanager deiner Organisation helfen kann.

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>Erhalten des Zugriffs auf {% data variables.product.prodname_codespaces %}

Der Administrator deiner Organisation beschränkt die Nutzung von {% data variables.product.prodname_codespaces %} möglicherweise auf bestimmte persönliche Konten. Um Zugriff zu erhalten, musst du dich an deinen Abrechnungs-Manager wenden. Weitere Informationen findest du unter [Verwalten des Zugriffs und der Sicherheit für deine Codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces).

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>Kosten für die Nutzung von {% data variables.product.prodname_codespaces %}

Informationen zu den Preisen für die {% data variables.product.prodname_codespaces %}-Nutzung findest du unter [{% data variables.product.prodname_codespaces %}-Preise](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

## <a name="how-your-codespace-usage-is-billed"></a>Abrechnung deiner Codespace-Nutzung

Für deinen Codespace werden die Computeminuten und die Menge des auf dem Datenträger verwendeten Speichers berechnet.

Wenn du das Erstellen von Prebuilds für Codespaces aktivierst, entstehen zusätzliche Gebühren. Weitere Informationen findest du unter [Informationen zu Codespaces-Prebuilds](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds).

### <a name="understanding-what-compute-minutes-are"></a>Grundlegendes zu den Computeminuten
Für deinen Codespace wird die Anzahl der Minuten berechnet, die er aktiv ist. Wenn dein Codespacefenster für 30 Minuten im Leerlauf bleibt, wird es automatisch heruntergefahren, und die Abrechnung für den Codespace wird beendet, bis du den Codespace erneut startest.

### <a name="understanding-how-codespace-storage-is-billed"></a>Grundlegendes zur Abrechnung von Codespacespeichern
Für {% data variables.product.prodname_codespaces %} wird der Speicher so definiert, dass er alle Dateien enthält, die sich auf deinen Codespace beziehen (z. B. das geklonte Repository, Konfigurationsdateien und Erweiterungen). Dieser Speicher wird abgerechnet, sobald der Codespace heruntergefahren wird. Die Speicherabrechnung für einen Codespace endet, wenn du ihn manuell aus https://github.com/codespaces löschst.

## <a name="how-spending-limits-work"></a>Funktionsweise von Ausgabenbeschränkungen

Bevor deine Organisation {% data variables.product.prodname_codespaces %} verwenden kann, muss dein Abrechnungsmanager ein Ausgabenlimit festlegen. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces). 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Exportieren von Änderungen bei Erreichen des Ausgabenlimits

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>Überprüfen der aktuellen Nutzung und Grenzwerte
Wenn du deine aktuelle Nutzung oder dein Ausgabenlimit einsehen möchtest, wende dich an den Abrechnungs-Manager deiner Organisation. Weitere Informationen findest du unter [Anzeigen der Codespaces-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage).

## <a name="codespaces-can-be-automatically-deleted"></a>Codespaces können automatisch gelöscht werden

Dein Codespace wird automatisch gelöscht, wenn du aus einer Organisation oder einem Repository entfernt wirst.

## <a name="deleting-your-unused-codespaces"></a>Löschen nicht verwendeter Codespaces

Du kannst deine Codespaces manuell in https://github.com/codespaces und aus {% data variables.product.prodname_vscode %} löschen. Um die Größe eines Codespaces zu verringern, kannst du Dateien manuell über das Terminal oder aus {% data variables.product.prodname_vscode %} löschen.

## <a name="further-reading"></a>Weitere Informationsquellen

- [Verwalten der Abrechnung für Codespaces in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
