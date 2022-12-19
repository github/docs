---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145085366"
---
Clé | Type | Description
----|------|-------------
`pages`|`array` | Pages qui ont été mises à jour.
`pages[][page_name]`|`string` | Nom de la page.
`pages[][title]`|`string` |  Titre de la page.
`pages[][action]`|`string` |  Action qui a été effectuée dans la page Peut être `created` ou `edited`.
`pages[][sha]`|`string` | Algorithme SHA de commit le plus récent de la page.
`pages[][html_url]`|`string` | Pointe vers la page wiki HTML.
