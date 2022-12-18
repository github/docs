---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145108346"
---
`dismissed_review` | `object` | Informations relatives à la révision ignorée.
`dismissed_review[state]` | `string` | État dans lequel se trouvait la demande de tirage lorsqu'elle a été rejetée. Il peut s’agir de l’une des valeurs suivantes : `commented`, `approved` ou `changes_requested`.
`dismissed_review[review_id]` | `string` | Identificateur unique de la révision de demande de tirage.
`dismissed_review[dismissal_message]` | `string` | Message inclus par l’utilisateur lors de l’abandon de la révision.
`dismissed_review[dismissal_commit_id]` | `string` | Identificateur unique de la validation qui a ignoré la révision, le cas échéant.
