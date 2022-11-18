---
ms.openlocfilehash: 52ffa15d88eb667d35b6e92b4e5adfa3146e9e56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113672"
---
В файле, который будет создан после экспорта журнала, вы найдете указанные ниже ключи и значения.

| Ключ | Пример значения
|------------|-------------
| `action` | team.create
| `actor` | octocat
| `user` | codertocat
| `actor_location.country_code` | США
| `org` | octo-org
| `repo` | octo-org/documentation
| `created_at` | 1429548104000 (Метка времени показывает время, прошедшее после Epoch, в миллисекундах.)
| `data.email` | octocat@nowhere.com
| `data.hook_id` | 245
| `data.events` | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]
| `data.events_were` | ["push", "pull_request", "issues"]
| `data.target_login` | octocat
| `data.old_user` | hubot
| `data.team` | octo-org/engineering
