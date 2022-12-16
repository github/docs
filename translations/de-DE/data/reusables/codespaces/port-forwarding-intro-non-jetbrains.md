---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159686"
---
Wenn die Ausgabe einer Anwendung, die in einem Codespace ausgeführt wird, im Terminal angezeigt wird, das eine Localhost-URL wie `http://localhost:PORT` oder `http://127.0.0.1:PORT` enthält, wird der Port automatisch weitergeleitet. Wenn du {% data variables.product.prodname_github_codespaces %} im Browser oder in {% data variables.product.prodname_vscode %} verwendest, wird die URL-Zeichenfolge im Terminal in einen Link konvertiert, auf den du klicken kannst, um die Webseite auf deinem lokalen Computer anzuzeigen. Standardmäßig leitet {% data variables.product.prodname_github_codespaces %} Ports über HTTP weiter.

![Automatische Portweiterleitung](/assets/images/help/codespaces/automatic-port-forwarding.png)

Du hast die Möglichkeit, einen Port auch manuell weiterzuleiten. Zudem kannst du weitergeleitete Ports bezeichnen, für Mitglieder deiner Organisation oder die Öffentlichkeit freigeben und der Codespacekonfiguration hinzufügen.

{% note %}

**Hinweis:** {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Weiterleiten eines Ports

Du kannst einen Port, der nicht automatisch weitergeleitet wurde, manuell weiterleiten.