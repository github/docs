---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876882"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die Aktion, die für das Projekt ausgeführt wurde. Kann `created`, `edited`, `closed`, `reopened` oder `deleted` sein.
`changes`|`object` | Die Änderungen am Kommentar, wenn die Aktion `edited` war.
`changes[name][from]` |`string` | Die vorherige Version des Namens, wenn die Aktion `edited` war.
`changes[body][from]` |`string` | Die vorherige Version des Texts, wenn die Aktion `edited` war.
`project`|`object` | Das [Projekt](/rest/reference/projects) selbst.
