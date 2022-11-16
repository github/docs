---
title: Просмотр истории выполнения рабочего процесса
shortTitle: Workflow run history
intro: Вы можете просмотреть журналы для каждого запуска рабочего процесса. В журналах указывается состояние для каждого задания и шага рабочего процесса.
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6f8b63c5e136f14bc39d0a835507e151978fad11
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010023'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### Просмотр последних запусков рабочего процесса

Чтобы получить список последних запусков рабочего процесса, используйте подкоманду `run list`.

```shell
gh run list
```

Чтобы указать максимальное количество возвращаемых запусков, вы можете использовать флаг `-L` или `--limit`. Значение по умолчанию — `10`.

```shell
gh run list --limit 5
```

Чтобы возвращать только запуски для указанного рабочего процесса, вы можете использовать флаг `-w` или `--workflow`.  Замените `workflow` либо именем рабочего процесса, либо идентификатором рабочего процесса, либо именем файла рабочего процесса. Например, `"Link Checker"`, `1234567` или `"link-check-test.yml"`.

```shell
gh run list --workflow WORKFLOW
```

### Просмотр сведений о конкретном запуске рабочего процесса

Чтобы отобразить сведения о конкретном запуске рабочего процесса, используйте подкоманду `run view`. Замените `run-id` идентификатором запуска, который необходимо просмотреть. Если вы не укажете `run-id`, {% data variables.product.prodname_cli %} возвратит интерактивное меню, в котором можно выбрать недавний запуск.

```shell
gh run view RUN_ID
```

Чтобы включить этапы задания в выходные данные, используйте флаг `-v` или `--verbose`.

```shell
gh run view RUN_ID --verbose
```

Чтобы просмотреть сведения о конкретном задании в процессе выполнения, используйте флаг `-j` или `--job`.  Замените `job-id` идентификатором задания, которое необходимо просмотреть.

```shell
gh run view --job JOB_ID
```

Чтобы просмотреть полный журнал задания, используйте флаг `--log`.

```shell
gh run view --job JOB_ID --log
```

Используйте флаг `--exit-status` для выхода с ненулевым статусом, если выполнение не удалось. Пример:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
