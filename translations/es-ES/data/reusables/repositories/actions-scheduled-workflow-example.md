---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885023"
---
Puede programar un flujo de trabajo para que se ejecute a horas UTC específicas mediante la [sintaxis cron de POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Los flujos de trabajo programados se ejecutan en la confirmación más reciente en la rama base o en la rama por defecto. El intervalo más corto en el que puedes ejecutar flujos de trabajo programados es una vez cada 5 minutos.

Este ejemplo activa el flujo de trabajo diariamente a las 5:30 y 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

Varios eventos `schedule` pueden desencadenar un único flujo de trabajo. Puede acceder al evento de programación que desencadenó el flujo de trabajo mediante el contexto `github.event.schedule`. En este ejemplo se desencadena el flujo de trabajo para que se ejecute a las 5:30 UTC de lunes a jueves, pero omite el paso `Not on Monday or Wednesday` para el lunes y el miércoles.

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
