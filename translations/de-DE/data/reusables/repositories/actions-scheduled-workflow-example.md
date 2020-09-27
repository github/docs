Du kannst einen Workflow mit Hilfe von [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) so planen, dass er zu bestimmten UTC-Zeiten ausgeführt wird. Geplante Workflows laufen auf dem jüngsten Commit auf dem Standard- oder Basisbranch. Das kürzeste Intervall, in dem Sie geplante Workflows ausführen können, ist einmal alle 5 Minuten.

Dieses Beispiel löst den Workflow alle 15 Minuten aus:

```yaml
on:
  schedule:
    # * ist ein Sonderzeichen in YAML, also muss der String in Hochkomma gesetzt werden
    - cron:  '*/15 * * * *'

```
