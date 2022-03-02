Puedes programar un flujo de trabajo para que se ejecute en horarios UTC específicos usando [sintaxis de cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Los flujos de trabajo programados se ejecutan en la confirmación más reciente en la rama base o en la rama por defecto. El intervalo más corto en el que puedes programar flujos de trabajo es cada 5 minutos.

Este ejemplo activa el flujo de trabajo diariamente a las 5:30 y 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

Se puede activar un flujo de trabajo sencillo mediante eventos múltiples de `schedule`. Puedes acceder al evento de programación que activó el flujo de trabajo mediante el contexto `github.event.schedule`. Este ejemplo activa el flujo de trabajo para que se ejecute a las 5:30 UTC cada lunes a viernes, pero se salta el paso `Not on Monday or Wednesday` para los lunes y miércoles.

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
