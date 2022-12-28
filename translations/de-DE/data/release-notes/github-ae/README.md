---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145104096"
---
# Versionshinweise für GitHub AE

Gerendert hier: https://docs.github.com/en/github-ae@latest/admin/release-notes

## Funktionsweise

### Platzhalter-Inhaltsdatei

Eine Inhaltsdatei existiert in `content/admin/release-notes.md`. Es verfügt über eine spezielle Titelei-Eigenschaft `layout: release-notes` und keinen Markdown-Inhalt. Die Quelle der Versionshinweise stammt aus YAML-Daten.

### YAML-Quelle

Die Quelldaten für die Versionshinweise befinden sich in diesem Verzeichnis (`data/release-notes/github-ae`).

Die Verzeichnisse sind nach Monaten benannt. Die YAML-Dateien werden nach den Daten einer wöchentlichen Version benannt.

Eine boolesche Eigenschaft namens `currentWeek` muss in jeder YAML-Datei gesetzt werden. Diese Eigenschaft kann nur für eine Datei gleichzeitig auf „richtig“ gesetzt werden.

Beachte, dass Patchdateien einzeln (d. h. auf der Docs-Website ausgeblendet) durch eine optionale `deprecated: true` Eigenschaft veraltet sein können.

### Middleware-Verarbeitung

Die YAML-Daten werden verarbeitet und durch `middleware/contextualizers/release-notes.js` sortiert und dem `context`-Objekt hinzugefügt.

### Layouts

Die `context`-Objektdaten werden von `components/release-notes` gerendert.

Die Seite mit den Versionshinweisen verfügt über ein eigenes Design mit CSS in `stylesheets/release-notes.scss`.

### Schema

Das Schema, das die YAML-Daten überprüft, befindet sich in `tests/helpers/schemas/ghae-release-notes-schema.js`. Informationen zu den erforderlichen und optionalen Eigenschaften findest Du in der Schemadatei.

Das Schema wird von einem Test in `tests/linting/lint-files.js` ausgeführt. Der Test schlägt fehl, wenn die Daten die Überprüfung nicht bestehen.
