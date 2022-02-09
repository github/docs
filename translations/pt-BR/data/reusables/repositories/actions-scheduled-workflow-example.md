É possível programar um fluxo de trabalho para ser executado em horários de UTC específicos usando a [sintaxe de cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Fluxos de trabalho agendados executados no último commit no branch padrão ou branch de base. O intervalo mais curto que você pode executar fluxos de trabalho agendados é a cada 15 minutos.

Este exemplo aciona o fluxo de trabalho todos os dias às 17:30 e 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
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
