---
ms.openlocfilehash: ce614b2a117f04aa595dc1dd63e454a9efc70cc9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069087"
---
Schlüssel | type | BESCHREIBUNG
----|------|------------
`action` | `string` | Die ausgeführte Aktion. Kann `created` oder `deleted` sein.
`starred_at` | `string` | Die Zeit, zu der der Stern erstellt wurde. {% data reusables.shortdesc.iso_8601 %} Ist für die `deleted`-Aktion `null`.
