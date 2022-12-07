---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885018"
---
Vous pouvez planifier l’exécution d’un workflow à des heures UTC spécifiques à l’aide de la [syntaxe cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Les workflows planifiés s’exécutent sur le dernier commit de la branche par défaut ou de base. L’intervalle le plus court auquel vous pouvez exécuter des workflows planifiés est une fois toutes les 5 minutes.

Cet exemple déclenche le workflow chaque jour à 5h30 et à 17h30 UTC :

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

Un seul workflow peut être déclenché par plusieurs événements `schedule`. Vous pouvez accéder à l’événement de planification qui a déclenché le workflow via le contexte `github.event.schedule`. Cet exemple déclenche l’exécution du workflow à 5h30 UTC tous les lundis et jeudis, mais ignore l’étape `Not on Monday or Wednesday` le lundi et le mercredi.

```yaml
on:
  schedule:
    - cron: '30 5 * * 1,3'
    - cron: '30 5 * * 2,4'

jobs:
  test_schedule:
    runs-on: ubuntu-latest
    steps:
      - name: Not on Monday or Wednesday
        if: github.event.schedule != '30 5 * * 1,3'
        run: echo "This step will be skipped on Monday and Wednesday"
      - name: Every time
        run: echo "This step will always run"
```
