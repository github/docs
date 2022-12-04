---
title: Управление очередью слияния
intro: 'Скорость разработки можно увеличить, используя очереди слияния для запросов на вытягивание в репозитории.'
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 08726e420c43895b5aebca10c4951cd034736170
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019615'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Сведения об очередях слияния

{% data reusables.pull_requests.merge-queue-overview %}

Очередь слияния создает временные ветви со специальным префиксом для проверки изменений запроса на вытягивание. Затем изменения в запросе на вытягивание группируются в `merge_group` с последней версией `base_branch`, а также последующими изменениями в очереди. {% data variables.product.product_name %} выполнит слияние для всех изменений в `base_branch` после завершения проверок, необходимых для защиты ветви `base_branch`.


Дополнительную информацию о методах слияния см. в разделе [Сведения о слиянии запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).

{% note %}

**Примечания.**

* Очередь слияния не может быть включена при правилах защиты ветви, использующих подстановочные знаки (`*`) в шаблоне имени ветви.
* Очередь слияния ожидает отправки необходимых проверок, прежде чем она сможет продолжить слияние. Необходимо обновить конфигурацию CI, чтобы активировать и сообщить о событиях группы слияния при необходимости в очереди слияния.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Активация проверок группы слияния с помощью {% data variables.product.prodname_actions %}

Вы можете использовать событие `merge_group` для активации рабочего процесса {% data variables.product.prodname_actions %} при добавлении запроса на вытягивание в очередь слияния. Обратите внимание, что это событие отличается от событий `pull_request` и `push`.

Рабочий процесс, сообщающий о проверке, которая требуется для защиты целевой ветви, будет выглядеть следующим образом:

```yaml
on:
  pull_request:
  merge_group:
```

Дополнительные сведения см. в статье [События, активирующие рабочие процессы](/actions/using-workflows/events-that-trigger-workflows#merge-group).

### Активация проверок группы слияния с использованием других поставщиков CI

При использовании других поставщиков CI, возможно, потребуется обновить конфигурацию CI для запуска при создании ветви, которая начинается со специального префикса `gh-readonly-queue/{base_branch}`.

## Управление очередью слияния

Администраторы репозитория могут требовать очередь слияния, включив параметр защиты ветви "Требовать очередь слияния" в правилах защиты для базовой ветви.

### Сведения о параметре размера группы слияния

Можно настроить размер группы слияния очереди слияния, которая определяет, сколько запросов на вытягивание включается в каждую группу слияния. Если ошибки проверки состояния или конфликты слияния отсутствуют, при выборе размера небольшой группы слияния по умолчанию будут формироваться группы, содержащие 2 запроса на вытягивание. Если вы хотите группировать дополнительные запросы на вытягивание для каждой группы, можно выбрать размер группы слияния "средний", чтобы сформировать группы, содержащие 5 запросов на вытягивание.

Сведения о включении параметра защиты очереди слияния см. в разделе [Управление правилами защиты ветви](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule).

## Дополнительные материалы

* [Слияние запроса на вытягивание с очередью слияния](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)
* [Сведения о защищенных ветвях](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
