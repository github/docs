---
title: Behandeln von Problemen mit Codespaces-Clients
intro: Du kannst {% data variables.product.prodname_codespaces %} in deinem Browser oder über {% data variables.product.prodname_vscode %} verwenden. Dieser Artikel enthält Schritte zur Behandlung häufig auftretender Clientprobleme.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104115"
---
## Behandeln von Problemen mit {% data variables.product.prodname_vscode %}

Wenn du eine Desktopversion von {% data variables.product.prodname_vscode %} mit einem Codespace verknüpfst, wirst du einige Unterschiede im Vergleich zur Arbeit in einem normalen Arbeitsbereich feststellen, wobei die Benutzeroberfläche ähnlich sein wird. 

Wenn du einen Codespace mit {% data variables.product.prodname_vscode %} in deinem Browser öffnest, sind weitere Unterschiede erkennbar. Beispielsweise unterscheiden sich einige Tastenzuordnungen, oder sie fehlen, und einige Erweiterungen verhalten sich möglicherweise anders. Eine Zusammenfassung findest du unter [Bekannte Einschränkungen und Anpassungen](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) in der Dokumentation zu {% data variables.product.prodname_vscode %}.

Du kannst nach bekannten Problemen suchen und neue Probleme über die {% data variables.product.prodname_vscode %}-Benutzeroberfläche im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces)-Repository protokollieren.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders ist das am häufigsten verwendete Release von {% data variables.product.prodname_vscode %}. Es verfügt über alle aktuellen Features und Fehlerkorrekturen. Darin können jedoch gelegentlich neue Probleme auftreten, die zu einem fehlerhaften Build führen.

Wenn du einen Insiders-Build verwendest und Fehler auftreten, solltest du zu {% data variables.product.prodname_vscode %} Stable wechseln und es erneut versuchen.

Auf der Desktopversion von {% data variables.product.prodname_vscode %} kannst du zu Stable wechseln, indem du die {% data variables.product.prodname_vscode %} Insiders-Anwendung schließt, die {% data variables.product.prodname_vscode %} Stable-Anwendung öffnest und deinen Codespace erneut öffnest.

In der Webversion von {% data variables.product.prodname_vscode %} kannst du unten links neben dem Editor auf {% octicon "gear" aria-label="The manage icon" %} klicken und **Zur stabilen Version wechseln...** auswählen. Wenn die Webversion nicht lädt oder das {% octicon "gear" aria-label="The manage icon" %}-Symbol nicht angezeigt wird, kannst du den Wechsel zu {% data variables.product.prodname_vscode %} Stable erzwingen, indem du `?vscodeChannel=stable` an deine Codespace-URL anfügst und den Codespace unter dieser URL lädst.

Wenn das Problem in {% data variables.product.prodname_vscode %} Stable nicht behoben ist, folge den obigen Anweisungen zur Problembehandlung.

## Problembehandlung im Browser

Wenn Probleme bei der Verwendung von Codespaces in einem Browser auftreten, der nicht auf Chromium basiert, solltest du versuchen, zu einem auf Chromium basierten Browser wechseln. Alternativ kannst du das `microsoft/vscode`-Repository auf bekannte Browserprobleme überprüfen, indem du nach Problemen suchst, die den Namen deines Browsers tragen, beispielsweise [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) oder [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Wenn Probleme bei der Verwendung von Codespaces in einem Browser auftreten, der auf Chromium basiert, kannst du überprüfen, ob ein anderes bekanntes Problem mit {% data variables.product.prodname_vscode %} im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues)-Repository auftritt.
