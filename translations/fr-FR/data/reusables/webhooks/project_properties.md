---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876883"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | Action qui a été effectuée sur le projet. Peut être `created`, `edited`, `closed`, `reopened` ou `deleted`.
`changes`|`object` | Changements dans le projet si l’action est `edited`.
`changes[name][from]` |`string` | Version précédente du nom si l’action est `edited`.
`changes[body][from]` |`string` | Version précédente du corps si l’action est `edited`.
`project`|`object` | Le [projet](/rest/reference/projects) lui-même.
