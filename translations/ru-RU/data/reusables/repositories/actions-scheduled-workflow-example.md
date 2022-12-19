---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885022"
---
Можно запланировать выполнение рабочего процесса в определенное время в формате UTC с помощью [синтаксиса POSIX cron](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Запланированные рабочие процессы запускаются в соответствии с последней фиксацией базовой ветви или ветви по умолчанию. Самый короткий интервал, с которым можно запускать запланированные рабочие процессы — 5 минут.

В этом примере рабочий процесс запускается каждый день в 5:30 и 17:30 (в формате UTC):

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

Один рабочий процесс может запускаться несколькими событиями `schedule`. Доступ к запланированному событию, при возникновении которого был запущен рабочий процесс, можно получить с помощью контекста `github.event.schedule`. В этом примере рабочий процесс запускается с ежедневно с понедельника по четверг в 5:30 (в формате UTC), причем по понедельникам и средам шаг `Not on Monday or Wednesday` пропускается.

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
