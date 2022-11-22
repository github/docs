---
title: Setting exit codes for actions (Festlegen von Exitcodes für Aktionen)
shortTitle: Set exit codes
intro: 'Du kannst mittels Exitcodes den Status einer Aktion festlegen. {% data variables.product.prodname_dotcom %} zeigt Status, um erfolgreiche oder fehlgeschlagene Aktionen kenntlich zu machen.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 394b17dc03c4998797df222fe7c81c3269003ec9
ms.sourcegitcommit: d3929a033c42c99b153910685256d079d7d87467
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114277'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Exitcodes

{% data variables.product.prodname_dotcom %} verwendet den Exitcode, um den Status der Überprüfungsausführung der Aktion festzulegen. Dieser kann `success` oder `failure` lauten.

Beendigungsstatus | Prüflaufstatus | BESCHREIBUNG
------------|------------------|------------
`0` | `success` | Die Aktion wurde erfolgreich abgeschlossen, und andere Tasks, die von dieser abhängig sind, können nun starten.
Wert ungleich Null (eine beliebige ganze Zahl außer 0)| `failure` | Alle anderen Exit-Codes weisen darauf hin, dass die Aktion fehlgeschlagen ist. Wenn eine Aktion fehlschlägt, werden alle derzeit laufenden Aktionen abgebrochen, und künftige Aktionen werden übersprungen. Sowohl Überprüfungsausführung als auch Überprüfungssuite erhalten den Status `failure`.

## Fehler-Exit-Code in einer JavaScript-Aktion festlegen

Wenn du eine JavaScript-Aktion erstellst, kannst du das Aktionstoolkitpaket [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) verwenden, um eine Nachricht zu protokollieren und einen Fehlerexitcode festzulegen. Beispiel:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Weitere Informationen findest du unter [Erstellen einer JavaScript-Aktion](/articles/creating-a-javascript-action).

## Fehler-Exit-Code in einer Docker-Container-Aktion festlegen

Wenn du eine Docker-Containeraktion erstellst, kannst du einen Fehlerexitcode in deinem `entrypoint.sh`-Skript festlegen. Beispiel:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Weitere Informationen findest du unter [Erstellen einer Docker-Containeraktion](/articles/creating-a-docker-container-action).
