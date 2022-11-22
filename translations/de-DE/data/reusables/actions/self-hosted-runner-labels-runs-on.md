---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879553"
---
Um einen selbstgehosteten Runner für deinen Auftrag anzugeben, konfiguriere `runs-on` in deiner Workflowdatei mit Bezeichnungen selbstgehosteter Runner.

Alle selbstgehosteten Runner weisen die Bezeichnung `self-hosted` auf. Wenn du nur diese Bezeichnung verwendest, werden dadurch alle selbstgehosteten Runner ausgewählt. Um Runner auszuwählen, die bestimmte Kriterien erfüllen, z. B. im Hinblick auf Betriebssystem oder Architektur, empfehlen wir die Angabe eines Arrays von Bezeichnungen, das mit `self-hosted` beginnt (diese Bezeichnung muss als Erstes aufgeführt werden) und dann nach Bedarf weitere Bezeichnungen einschließt. Wenn du ein Array von Bezeichnungen angibst, werden Aufträge in die Warteschlange von Runnern eingereiht, die alle von dir angegebenen Bezeichnungen aufweisen.

Die Bezeichnung `self-hosted` ist zwar nicht erforderlich, wird aber bei Verwendung selbstgehosteter Runner dringend empfohlen. So wird sichergestellt, dass in deinem Auftrag nicht versehentlich aktuelle oder zukünftige von {% data variables.product.prodname_dotcom %} gehostete Runner angegeben werden.
