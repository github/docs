---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885021"
---
[POSIX cron 구문](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)을 사용하여 특정 UTC 시간에 워크플로를 실행하도록 예약할 수 있습니다. 예약된 워크플로는 기본 분기 또는 베이스 분기의 최신 커밋에서 실행됩니다. 예약된 워크플로를 실행할 수 있는 가장 짧은 간격은 5분마다 한 번입니다.

이 예제에서는 매일 5:30 및 17:30 UTC에 워크플로를 트리거합니다.

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

단일 워크플로는 여러 `schedule` 이벤트에 의해 트리거될 수 있습니다. `github.event.schedule` 컨텍스트를 통해 워크플로를 트리거한 일정 이벤트에 액세스할 수 있습니다. 이 예제에서는 매주 월~목요일 5:30 UTC에 실행되도록 워크플로를 트리거하지만 월요일과 수요일에는 `Not on Monday or Wednesday` 단계를 건너뜁니다.

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
