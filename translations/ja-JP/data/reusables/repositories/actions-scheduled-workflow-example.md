---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885020"
---
ワークフローを特定の UTC 時刻に実行するように、[POSIX cron 構文](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)でスケジュールすることができます。 スケジュールしたワークフローは、デフォルトまたはベースブランチの直近のコミットで実行されます。 スケジュールされたワークフローを実行できる最短の間隔は、5 分ごとに 1 回です。

この例では、ワークフローは毎日UTCの5:30と17:30にトリガーされます。

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

1 つのワークフローを、複数の `schedule` イベントでトリガーできます。 `github.event.schedule` のコンテキストを使用して、ワークフローをトリガーしたスケジュール イベントにアクセスできます。 この例では、毎週月曜日から木曜日の 5 時 30 分 (UTC) にワークフローが実行されますが、月曜日と水曜日の `Not on Monday or Wednesday` 手順はスキップされます。

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
