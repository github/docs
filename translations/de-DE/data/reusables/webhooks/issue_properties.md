---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066198"
---
`issue`|`object` | Das [Issue](/rest/reference/issues) selbst.
`changes`|`object`| Die Änderungen am Issue, wenn die Aktion `edited` war.
`changes[title][from]`|`string` | Die vorherige Version des Titels, wenn die Aktion `edited` war.
`changes[body][from]`|`string` | Die vorherige Version des Texts, wenn die Aktion `edited` war.
`assignee`|`object` | Der optionale Benutzer, der dem Problem zugewiesen oder dessen Zuweisung aufgehoben wurde.
`label`|`object` | Die optionale Bezeichnung, die dem Problem hinzugefügt oder daraus entfernt wurde.
