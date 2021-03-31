[POSIX クーロン構文](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)を使用して、特定の UTC 時間にワークフローを実行できるようスケジュール設定できます。 スケジュールしたワークフローは、デフォルトまたはベースブランチの直近のコミットで実行されます。 スケジュールされたワークフローを実行できる最短の間隔は、5 分ごとに 1 回です。

This example triggers the workflow every day at 5:30 and 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '*/30 5,17 * * *'

```
