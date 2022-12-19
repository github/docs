---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114184"
---
Можно использовать `defaults.run` для указания параметров по умолчанию `shell` и `working-directory` для всех этапов [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) в рабочем процессе. Можно также указать параметры по умолчанию для `run`, доступные только для задания. Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). В этом ключевом слове нельзя использовать контексты или выражения.

{% data reusables.actions.defaults-override %}

#### Пример. Указание оболочки по умолчанию и рабочего каталога

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
