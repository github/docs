É possível programar um fluxo de trabalho para ser executado em horários de UTC específicos usando a [sintaxe de cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Fluxos de trabalho agendados executados no último commit no branch padrão ou branch de base. O intervalo mais curto que você pode executar fluxos de trabalho programados é uma vez a cada 5 minutos.

This example triggers the workflow every day at 5:30 and 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '*/30 5,17 * * *'

```
