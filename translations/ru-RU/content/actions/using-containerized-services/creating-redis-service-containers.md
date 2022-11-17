---
title: Создание контейнеров служб Redis
shortTitle: Create Redis service containers
intro: 'Контейнеры служб можно использовать для создания клиента Redis в рабочем процессе. В этом руководстве показаны примеры создания службы Redis для заданий, которые выполняются в контейнерах или непосредственно на компьютере средства выполнения тестов.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
  - /actions/guides/creating-redis-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Containers
  - Docker
ms.openlocfilehash: 990e84cb4e25ec1334c63a83d827a8d96c0175eb
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010067'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве приведены примеры рабочих процессов, которые настраивают контейнер службы с помощью образа Docker Hub`redis`. Рабочий процесс запускает сценарий для создания клиента Redis и его заполнения данными. Чтобы убедиться в том, что рабочий процесс создает и заполняет клиент Redis, сценарий выводит данные клиента в консоль.

{% data reusables.actions.docker-container-os-support %}

## Предварительные требования

{% data reusables.actions.service-container-prereqs %}

Кроме того, вы можете получить общее представление о синтаксисе YAML для {% data variables.product.prodname_actions %} и Redis. Дополнительные сведения можно найти в разделе

- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»
- «[Начало работы с Redis](https://redislabs.com/get-started-with-redis/)» в документации по Redis

## Выполнение заданий в контейнерах

{% data reusables.actions.container-jobs-intro %}

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: redis
          # The default Redis port
          REDIS_PORT: 6379
```

### Настройка задания контейнера

{% data reusables.actions.service-container-host %}

{% data reusables.actions.redis-label-description %}

```yaml{:copy}
jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

### Настройка этапов

{% data reusables.actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: redis
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

Имя узла службы Redis — это метка, настроенная в рабочем процессе; в данном случае — `redis`. Так как контейнеры Docker в той же пользовательской сети моста открывают все порты по умолчанию, вы можете получить доступ к контейнеру службы через стандартный порт Redis 6379.

## Выполнение заданий непосредственно на компьютере средства выполнения тестов

При запуске задания непосредственно на компьютере средства выполнения тестов необходимо сопоставить порты контейнера службы с портами на узле Docker. Вы можете получить доступ к контейнерам служб из узла Docker, используя `localhost` и номер порта узла Docker.

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: Redis runner example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create
        # a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: localhost
          # The default Redis port
          REDIS_PORT: 6379
```

### Настройка задания средства выполнения тестов

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.redis-label-description %}

Рабочий процесс сопоставляет порт 6379 в контейнере службы Redis с узлом Docker. Дополнительные сведения о ключевом слове `ports` см. в разделе «[Сведения о контейнерах служб](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)».

```yaml{:copy}
jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379
```

### Настройка этапов

{% data reusables.actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: {% data reusables.actions.action-checkout %}

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: localhost
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.actions.redis-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## Тестирование контейнера службы Redis

Вы можете протестировать рабочий процесс с помощью следующего сценария, который создает клиент Redis и заполняет клиент данными заполнителя. Затем сценарий выводит в терминал значения, хранящиеся в клиенте Redis. Сценарий может использовать любой выбранный язык, но в этом примере используется Node.js и модуль npm `redis`. Дополнительные сведения см. в [модуле npm redis](https://www.npmjs.com/package/redis).

Вы можете изменить *client.js*, чтобы включить все операции Redis, необходимые для вашего рабочего процесса. В этом примере сценарий создает экземпляр клиента Redis, добавляет данные заполнителя, а затем извлекает данные.

{% data reusables.actions.service-container-add-script %}

```javascript{:copy}
const redis = require("redis");

// Creates a new Redis client
// If REDIS_HOST is not set, the default host is localhost
// If REDIS_PORT is not set, the default port is 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Sets the key "octocat" to a value of "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Octopus"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Dinosaur and Octopus"
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Robot"
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Gets all fields in "species" key

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

Сценарий создает новый клиент Redis с помощью метода `createClient`, который принимает параметр `host` и `port`. Сценарий использует переменные среды `REDIS_HOST` и `REDIS_PORT` для настройки IP-адреса порта клиента. Если `host` и `port` не определены, по умолчанию используется узел `localhost` и порт 6379.

Сценарий использует методы `set` и `hset` для заполнения базы данных ключами, полями и значениями. Чтобы убедиться, что клиент Redis содержит эти данные, сценарий выводит содержимое базы данных в журнал консоли.

При запуске этого рабочего процесса вы увидите следующие выходные данные на шаге «Подключение к Redis», подтверждающие, что вы создали клиент Redis и добавили данные:

```
Reply: OK
Reply: 1
Reply: 1
Reply: 1  
3 replies:
    0: octocat
    1: dinotocat
    2: robotocat
```
