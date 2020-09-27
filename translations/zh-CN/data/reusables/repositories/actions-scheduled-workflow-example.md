您可以使用 [POSIX cron 语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)安排工作流程在特定的 UTC 时间运行。 预定的工作流程在默认或基础分支的最新提交上运行。 可以运行计划工作流的最短间隔是每 5 分钟一次。

此示例每隔 15 分钟触发工作流程：

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '*/15 * * * *'

```
