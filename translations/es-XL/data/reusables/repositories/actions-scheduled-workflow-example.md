Puedes programar un flujo de trabajo para que se ejecute en horarios UTC específicos usando [sintaxis de cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Los flujos de trabajo programados se ejecutan en la confirmación más reciente en la rama base o en la rama por defecto. El intervalo más corto en el que puedes ejecutar flujos de trabajo programados es una vez cada 5 minutos.

Este ejemplo activa el flujo de trabajo cada 15 minutos:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '*/15 * * * *'

```
