---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885019"
---
Mithilfe der [POSIX-Cron-Syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) kannst du einen Workflow so planen, dass er zu bestimmten UTC-Zeiten ausgeführt wird. Geplante Workflows laufen auf dem jüngsten Commit auf dem Standard- oder Basisbranch. Das kürzeste Intervall, in dem Du geplante Workflows ausführen kannst, ist einmal alle 5 Minuten.

In diesem Beispiel wird der Workflow jeden Tag um 5:30 Uhr und 17:30 Uhr UTC ausgelöst:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

Ein einzelner Workflow kann durch mehrere `schedule`-Ereignisse ausgelöst werden. Über den Kontext `github.event.schedule` kannst du auf das Zeitplanereignis zugreifen, das den Workflow ausgelöst hat. In diesem Beispiel wird der Workflow von Montag bis Donnerstag um 5:30 Uhr UTC gestartet, wobei der Schritt `Not on Monday or Wednesday` am Montag und Mittwoch übersprungen wird.

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
