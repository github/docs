---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885016"
---
Você pode agendar um fluxo de trabalho para ser executado em horários UTC específicos usando a [sintaxe cron POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Fluxos de trabalho agendados executados no último commit no branch padrão ou branch de base. O intervalo mais curto que você pode executar fluxos de trabalho agendados é a cada 5 minutos.

Este exemplo aciona o fluxo de trabalho todos os dias às 17:30 e 17:30 UTC:

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

Um fluxo de trabalho individual pode ser disparado por vários eventos `schedule`. Você pode acessar o evento de agendamento que disparou o fluxo de trabalho por meio do contexto `github.event.schedule`. Este exemplo dispara o fluxo de trabalho a ser executado às 5h30 UTC todas as segundas e quintas, mas ignora a etapa `Not on Monday or Wednesday` às segundas e quartas.

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
