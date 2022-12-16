---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193308"
---
# Versionshinweise für GitHub Enterprise Server

Hier gerendert: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## Hinzufügen von Versionshinweisen zu einem veralteten GitHub Enterprise Server-Release

Bei der Außerbetriebnahme eines GitHub Enterprise Server-Release gemäß [dieser Issuevorlage](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md) entfernt das Docs Engineering-Team die YAML-Dateien mit den Versionshinweisen des Release von `github/docs-internal`.

Wenn ein Projektbeteiligter ein Update für veraltete Versionshinweise anfordert, kannst du die Hinweise aktualisieren, indem du die folgenden Schritte ausführst.

1. Sieh dir den Branch <code>enterprise-<em>VERSION</em>-release</code> mit langer Ausführungsdauer an, und erstelle einen PR, um die Versionshinweise für die veraltete Version in diesem Branch zu aktualisieren.
2. Wende dich an #docs-engineering, um das erneute Auslesen und eine Aktualisierung der in Azure gespeicherten Inhalte anzufordern. Weitere Informationen findest du im Abschnitt zum erneuten Auslesen von Inhalten in der [Checkliste für die Einstellung](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md).

## Funktionsweise

### Platzhalter-Inhaltsdatei

Eine Inhaltsdatei existiert in `content/admin/release-notes.md`. Es verfügt über eine spezielle Titelei-Eigenschaft `layout: release-notes` und keinen Markdown-Inhalt. Die Quelle der Versionshinweise stammt aus YAML-Daten.

### YAML-Quelle

Die Quelldaten für die Versionshinweise befinden sich in diesem Verzeichnis (`data/release-notes/enterprise-server`).

Die Verzeichnisse werden durch die GHES-Veröffentlichungsnummer (mit einem Bindestrich anstelle eines Zeitraums) benannt.

Die YAML-Dateien in jedem Verzeichnis werden nach Patch-Nummer benannt. Einige Patch-Dateinamen enden möglicherweise mit `-rc<num>.yml`, was bedeutet, dass es sich um einen Release Candidate handelt. Eine Release Candidate-Datei erfordert `release_candidate: true` auch die YAML-Daten.

Versionshinweise zu veralteten GHES-Versionen (siehe `lib/enterprise-server-releases.js`) werden **nicht** von der Website entfernt und werden immer zusammen mit derzeit unterstützten Versionen angezeigt.

Beachte, dass Patch-Dateien einzeln (d.h. auf der docs-Website ausgeblendet) durch eine optionale `deprecated: true`-Eigenschaft veraltet sein können.

### Middleware-Verarbeitung

Die YAML-Daten werden verarbeitet und durch `middleware/contextualizers/ghes-release-notes.js` sortiert und dem `context`-Objekt hinzugefügt.

### Layouts

Die `context`-Objektdaten werden von `components/release-notes` gerendert.

Die Seite mit den Versionshinweisen verfügt über ein eigenes Design mit CSS in `stylesheets/release-notes.scss`.

### Schema

Das Schema, das die YAML-Daten überprüft, befindet sich in `tests/helpers/schemas/release-notes-schema.js`. Informationen zu den erforderlichen und optionalen Eigenschaften findest Du in der Schemadatei.

Das Schema wird von einem Test in `tests/linting/lint-files.js` ausgeführt. Der Test schlägt fehl, wenn die Daten die Überprüfung nicht bestehen.
