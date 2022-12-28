---
title: Пропуск запусков рабочих процессов
intro: 'Вы можете пропустить запуски рабочего процесса, активированные событиями `push` и `pull_request`, включив команду в сообщение фиксации.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199973'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Примечание.** Если рабочий процесс пропускается из-за [фильтрации путей](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [фильтрации ветвей](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) или сообщения фиксации (см. ниже), проверки, связанные с этим рабочим процессом, останутся в состоянии ожидания. Запрос на вытягивание, требующий успешной проверки, будет заблокирован для слияния.

{% endnote %}

Рабочие процессы, которые в противном случае будут активированы с помощью `on: push` или `on: pull_request`, не будут активированы при добавлении любой из следующих строк в сообщение фиксации при принудительной отправке или фиксации HEAD для запроса на вытягивание:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Кроме того, можно завершить сообщение фиксации двумя пустыми строками, за которыми следует один из двух вариантов:
- `skip-checks:true`
- `skip-checks: true`

Вы не сможете объединить запрос на вытягивание, если в репозитории настроено требование выполнять определенные проверки. Чтобы разрешить объединение запроса на вытягивание, можно отправить новую фиксацию в запрос на вытягивание без инструкции пропуска в сообщении фиксации.

{% note %}

**Примечание.** Инструкции пропуска применяются только к событиям `push` и `pull_request`. Например, добавление `[skip ci]` в сообщение фиксации не приведет к остановке запуска рабочего процесса, активировавшего `on: pull_request_target`.

{% endnote %}

Инструкции пропуска применяются только к запускам рабочего процесса, которые будут активированы фиксацией, содержащей инструкции пропуска. Вы также можете отключить запуск рабочего процесса. Дополнительные сведения см. в статье "[Отключение и включение рабочего процесса](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
