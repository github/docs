您可以使用 [POSIX cron 语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)安排工作流程在特定的 UTC 时间运行。 预定的工作流程在默认或基础分支的最新提交上运行。 您可以运行预定工作流程的最短间隔是每 5 分钟一次。

此示例在每天 5:30 和 17:30 UTC 触发工作流程：

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '*/30 5,17 * * *'

```
