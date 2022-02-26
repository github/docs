[POSIX クーロン構文](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)を使用して、特定の UTC 時間にワークフローを実行できるようスケジュール設定できます。 スケジュールしたワークフローは、デフォルトまたはベースブランチの直近のコミットで実行されます。 スケジュールされたワークフローを実行できる最短の間隔は、5 分ごとに 1 回です。

この例では、ワークフローは毎日UTCの5:30と17:30にトリガーされます。

```yaml
on:
  schedule:
    # *はYAMLにおける特殊文字なので、この文字列はクオートしなければならない
    - cron:  '30 5,17 * * *'

```

A single workflow can be triggered by multiple `schedule` events. You can access the schedule event that triggered the workflow through the `github.event.schedule` context. This example triggers the workflow to run at 5:30 UTC every Monday-Thursday, but skips the `Not on Monday or Wednesday` step on Monday and Wednesday.

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
