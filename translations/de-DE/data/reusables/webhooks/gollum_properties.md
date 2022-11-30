---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145085367"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`pages`|`array` | Die Seiten, die aktualisiert wurden.
`pages[][page_name]`|`string` | Der Name der Seite.
`pages[][title]`|`string` |  Der aktuelle Seitentitel.
`pages[][action]`|`string` |  Die Aktion, die auf der Seite ausgeführt wurde. Kann `created` oder `edited` sein.
`pages[][sha]`|`string` | Das neueste Commit-SHA der Seite.
`pages[][html_url]`|`string` | Verweist auf die HTML-Wiki-Seite.
