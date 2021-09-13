Du kannst einen Workflow mit Hilfe von [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) so planen, dass er zu bestimmten UTC-Zeiten ausgeführt wird. Geplante Workflows laufen auf dem jüngsten Commit auf dem Standard- oder Basisbranch. Das kürzeste Intervall, in dem Sie geplante Workflows ausführen können, ist einmal alle 5 Minuten.

This example triggers the workflow every day at 5:30 and 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```
