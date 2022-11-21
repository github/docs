---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145088988"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action` |`string` | Die durchgeführte Aktion. Mögliche Werte: `created`, `closed`, `opened` (ein geschlossener Meilenstein wird erneut geöffnet), `edited` oder `deleted`.
`milestone`  |`object` | Der Meilenstein selbst.
`changes`|`object`| Die Änderungen am Meilenstein, wenn die Aktion `edited` war.
`changes[description][from]`|`string` | Die vorherige Version der Beschreibung, wenn die Aktion `edited` war.
`changes[due_on][from]`|`string` | Die vorherige Version des Fälligkeitsdatums, wenn die Aktion `edited` war.
`changes[title][from]`|`string` | Die vorherige Version des Titels, wenn die Aktion `edited` war.
