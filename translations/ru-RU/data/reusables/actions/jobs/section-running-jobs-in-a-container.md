---
ms.openlocfilehash: 59a9cc8c52f8e3d28b2b392c28ef6abcb52439a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147718208"
---
Используйте `jobs.<job_id>.container` для создания контейнера для выполнения всех этапов задания, для которых еще не указан контейнер. При наличии этапов, которые используют действия скрипта и контейнера, действия контейнера будут выполняться как одноуровневые контейнеры в той же сети с теми же подключениями томов.

Если `container` не задан, все этапы будут выполняться непосредственно на узле, указанном, `runs-on`, если только этап не относится к действию, настроенному на выполнение в контейнере.

{% note %}

**Примечание.** Оболочка по умолчанию для этапов `run` внутри контейнера — `sh` вместо `bash`. Это значение может быть изменено на [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) или [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

{% endnote %}

### Пример. Выполнение задания в контейнере

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

При указании только образа контейнера можно опустить ключевое слово `image`.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
