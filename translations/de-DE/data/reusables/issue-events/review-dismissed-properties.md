---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145108347"
---
`dismissed_review` | `object` | Die Informationen für den geschlossenen Review.
`dismissed_review[state]` | `string` | Der Zustand, in dem sich der Pull Request befand, als er geschlossen wurde. Mögliche Werte: `commented`, `approved` oder `changes_requested`.
`dismissed_review[review_id]` | `string` | Der eindeutige Bezeichner des Pull Request-Reviews.
`dismissed_review[dismissal_message]` | `string` | Die Nachricht, die der Benutzer beim Schließen des Reviews eingefügt hat.
`dismissed_review[dismissal_commit_id]` | `string` | Der eindeutige Bezeichner des Commits, der den Review geschlossen hat, falls vorhanden.
