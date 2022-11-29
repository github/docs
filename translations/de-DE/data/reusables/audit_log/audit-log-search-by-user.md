---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103464"
---
### Suche nach Benutzer

Der `actor`-Qualifizierer kann den Umfang von Ereignissen basierend auf dem Ausführenden der Aktion festlegen. Beispiel:

  * `actor:octocat` findet alle Ereignisse, die von `octocat` durchgeführt wurden.
  * `actor:octocat actor:hubot` findet alle Ereignisse, die von `octocat` und `hubot` durchgeführt wurden.
  * `-actor:hubot` schließt alle Ereignisse aus, die von `hubot` durchgeführt wurden.

Beachte, dass du nur den in {% data variables.product.product_name %} verwendeten Benutzernamen nutzen kannst, nicht den wirklichen Namen eines Benutzers.
