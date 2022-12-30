---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089501"
---
Для определенного задания `jobs.<job_id>.permissions` можно использовать для изменения разрешений по умолчанию, предоставленных `GITHUB_TOKEN`, при необходимости добавляя или удаляя права доступа, чтобы разрешить только минимальный требуемый доступ. Дополнительные сведения см. в статье "[Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Указав разрешение в определении задания, при необходимости можно настроить для каждого задания другой набор разрешений для `GITHUB_TOKEN`. Кроме того, можно указать разрешения для всех заданий в рабочем процессе. Сведения об определении разрешений на уровне рабочего процесса см. в разделе [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### Пример. Настройка разрешений для определенного задания

В этом примере показаны разрешения, заданные для задания `GITHUB_TOKEN`, которое будет применяться только к заданию с именем `stale`. Доступ на запись предоставляется для областей `issues` и `pull-requests`. Все остальные области не будут иметь доступа.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
