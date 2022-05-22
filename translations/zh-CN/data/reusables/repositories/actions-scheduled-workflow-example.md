您可以使用 [POSIX cron 语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)安排工作流程在特定的 UTC 时间运行。 预定的工作流程在默认或基础分支的最新提交上运行。 您可以运行预定工作流程的最短间隔是每 5 分钟一次。

此示例在每天 5:30 和 17:30 UTC 触发工作流程：

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

单个工作流程可由多个`计划`事件触发。 您可以通过 `github.event.schedule` 上下文访问触发工作流程的计划事件。 本示例触发工作流在每周一至周四的 5:30 UTC 运行，但在星期一和星期三跳过`星期一或星期三不运行`步骤。

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
