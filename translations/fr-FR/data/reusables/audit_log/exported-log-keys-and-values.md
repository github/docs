---
ms.openlocfilehash: 52ffa15d88eb667d35b6e92b4e5adfa3146e9e56
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103430"
---
Après avoir exporté le journal, vous verrez les clés et valeurs suivantes dans le fichier qui en résulte.

| Clé | Valeur d'exemple
|------------|-------------
| `action` | team.create
| `actor` | octocat
| `user` | codertocat
| `actor_location.country_code` | US
| `org` | octo-org
| `repo` | octo-org/documentation
| `created_at` | 1429548104000 (Timestamp indique le temps écoulé depuis l’époque, en millisecondes).
| `data.email` | octocat@nowhere.com
| `data.hook_id` | 245
| `data.events` | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]
| `data.events_were` | ["push", "pull_request", "issues"]
| `data.target_login` | octocat
| `data.old_user` | hubot
| `data.team` | octo-org/engineering
