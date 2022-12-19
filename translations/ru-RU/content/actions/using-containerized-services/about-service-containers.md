---
title: Сведения о контейнерах служб
intro: 'Контейнеры служб можно использовать для подключения баз данных, веб-служб, кэшей памяти и других инструментов к рабочему процессу.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
  - /actions/guides/about-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Containers
  - Docker
ms.openlocfilehash: 67bfb403bb18f7364e000170ce71f9387d4ada69
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145121123'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о контейнерах служб

Контейнеры служб представляют собой контейнеры Docker, которые предоставляют простой портативный способ размещения служб, которые вам могут потребоваться для тестирования или эксплуатации приложения в рабочем процессе. Например, рабочему процессу может потребоваться выполнить тесты интеграции, требующие доступа к базе данных и кэшу памяти.

Контейнеры служб можно настроить для каждого задания в рабочем процессе. {% data variables.product.prodname_dotcom %} создает новый контейнер Docker для каждой службы, настроенной в рабочем процессе, и уничтожает контейнер службы после завершения задания. Действия в задании могут взаимодействовать со всеми контейнерами служб, которые включены в одно задание. Однако нельзя создавать и использовать контейнеры служб в рамках составного действия. 

{% data reusables.actions.docker-container-os-support %}

## Взаимодействие с контейнерами служб

Задания в рабочем процессе можно настроить для выполнения непосредственно на компьютере средства выполнения тестов или в контейнере Docker. Обмен данными между заданием и его контейнерами служб может варьироваться в зависимости от того, выполняется ли задание непосредственно на компьютере средства выполнения тестов или в контейнере.

### Выполнение заданий в контейнере

При выполнении заданий в контейнере {% data variables.product.prodname_dotcom %} подключает контейнеры служб к заданию с помощью определяемых пользователем сетей моста Docker. Дополнительные сведения см. в разделе [Использование сетей моста](https://docs.docker.com/network/bridge/) в документации по Docker.

Выполнение задания и служб в контейнере упрощает сетевой доступ. Вы можете получить доступ к контейнеру службы с помощью метки, настроенной в рабочем процессе. Имя узла контейнера службы автоматически сопоставляется с именем метки. Например, если вы создаете контейнер службы с меткой `redis`, имя узла контейнера службы будет `redis`.

Вам не потребуется настраивать порты для контейнеров служб. По умолчанию все контейнеры, которые являются частью одной сети Docker, предоставляют все порты друг другу, однако порты не предоставляются за пределами сети Docker.

### Выполнение заданий на компьютере средства выполнения тестов

При выполнении заданий непосредственно на компьютере средства выполнения тестов можно получить доступ к контейнерам служб с помощью `localhost:<port>` или `127.0.0.1:<port>`. {% data variables.product.prodname_dotcom %} настраивает сеть контейнеров для включения связи между контейнером службы и узлом Docker.

Когда задание выполняется непосредственно на компьютере средства выполнения тестов, служба, запущенная в контейнере Docker, по умолчанию не предоставляет свои порты заданию в средстве выполнения тестов. Необходимо сопоставить порты в контейнере службы с узлом Docker. Дополнительные сведения см. в разделе [Сопоставление портов узла Docker и контейнеров служб](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports).

## Создание контейнеров служб

Ключевое слово `services` можно использовать для создания контейнеров служб, которые являются частью задания в рабочем процессе. Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

В этом примере создается служба, вызываемая `redis` в задании, вызываемом `container-job`. В этом примере узел Docker является контейнером `node:16-bullseye`.

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
{% endraw %}

## Сопоставление портов узла Docker и контейнеров служб

Если задание выполняется в контейнере Docker, не требуется сопоставлять порты на узле или в контейнере службы. Если задание выполняется непосредственно на компьютере средства выполнения тестов, необходимо сопоставить все необходимые порты контейнера службы с портами на хост-компьютере средства выполнения тестов.

Вы можете сопоставить порты контейнеров служб с узлом Docker с помощью ключевого слова `ports`. Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Значение параметра `ports` |    Описание |
|------------------|--------------|
| `8080:80` |   Сопоставляет TCP-порт 80 в контейнере с портом 8080 на узле Docker. |
| `8080:80/udp` |   Сопоставляет UDP-порт 80 в контейнере с портом 8080 на узле Docker. |
| `8080/udp`    | Сопоставьте случайно выбранный порт UDP в контейнере с портом UDP 8080 на узле Docker. |

При сопоставлении портов с помощью ключевого слова `ports` {% data variables.product.prodname_dotcom %} использует команду `--publish` для публикации портов контейнера на узле Docker. Дополнительные сведения см. в разделе [Сеть контейнеров Docker](https://docs.docker.com/config/containers/container-networking/) в документации по Docker.

При указании порта узла Docker (но не порта контейнера) порт контейнера случайным образом назначается свободному порту. {% data variables.product.prodname_dotcom %} задает назначенный порт контейнера в контексте контейнера службы. Например, если для контейнера службы `redis` настроен порт узла Docker 5432, можно получить доступ к соответствующему порту контейнера с помощью контекста `job.services.redis.ports[5432]`. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts#job-context)».

### Пример сопоставления портов Redis

В этом примере порт контейнера службы `redis` 6379 сопоставляется с портом узла Docker 6379.

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # Label of the container job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        #
        ports:
          # Opens tcp port 6379 on the host and service container
          - 6379:6379
```
{% endraw %}

## Дополнительные материалы

- [Создание контейнеров служб Redis](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)
- [Создание контейнеров служб PostgreSQL](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)
