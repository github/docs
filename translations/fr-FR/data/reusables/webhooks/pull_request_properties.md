---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008190"
---
`number`|`integer` | Numéro de la demande de tirage.
`changes`|`object`| Changements dans le commentaire si l’action est `edited`.
`changes[title][from]`|`string` | Version précédente du titre si l’action est `edited`.
`changes[body][from]`|`string` | Version précédente du corps si l’action est `edited`.
`pull_request`|`object` | La [demande de tirage](/rest/reference/pulls) elle-même.{% ifversion fpt or ghec %} `reason`|`string` | La raison pour laquelle la demande de tirage a été supprimée d’une file d’attente de fusion si l’action était `dequeued`.{% endif %}
