---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114187"
---
Использует `jobs.<job_id>.defaults.run` для предоставления параметры по умолчанию `shell` и `working-directory` для всех этапов `run` в задании. Контекст и выражение не допускаются в этом разделе.

Можно указать параметры по умолчанию `shell` и `working-directory` для всех этапов [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) в задании. Вы также можете задать параметры по умолчанию для `run` для всего рабочего процесса. Дополнительные сведения см. на веб-сайте [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). В этом ключевом слове нельзя использовать контексты или выражения.

{% data reusables.actions.defaults-override %}

#### Пример. Настройка параметров этапа по умолчанию `run` для задания

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
