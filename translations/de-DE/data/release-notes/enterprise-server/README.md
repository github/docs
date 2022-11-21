---
ms.openlocfilehash: a43b7fac5396fcbdb1b7d9ec241af9879de7b2b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104104"
---
# Versionshinweise für GitHub Enterprise Server

Hier gerendert: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

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

Die YAML-Daten werden verarbeitet und durch `middleware/contextualizers/release-notes.js` sortiert und dem `context`-Objekt hinzugefügt.

### Layouts

Die `context`-Objektdaten werden von `components/release-notes` gerendert.

Die Seite mit den Versionshinweisen verfügt über ein eigenes Design mit CSS in `stylesheets/release-notes.scss`.

### Schema

Das Schema, das die YAML-Daten überprüft, befindet sich in `tests/helpers/schemas/ghes-release-notes-schema.js`. Informationen zu den erforderlichen und optionalen Eigenschaften findest Du in der Schemadatei.

Das Schema wird von einem Test in `tests/linting/lint-files.js` ausgeführt. Der Test schlägt fehl, wenn die Daten die Überprüfung nicht bestehen.
