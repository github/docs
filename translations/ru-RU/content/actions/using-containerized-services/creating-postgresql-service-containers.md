---
title: Создание контейнеров служб PostgreSQL
shortTitle: Create PostgreSQL service containers
intro: 'Вы можете создать контейнер службы PostgreSQL, который будет использоваться в вашем рабочем процессе. В этом руководстве показаны примеры создания службы PostgreSQL для заданий, которые выполняются в контейнерах или непосредственно на компьютере средства выполнения тестов.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers
  - /actions/configuring-and-managing-workflows/creating-postgresql-service-containers
  - /actions/guides/creating-postgresql-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Containers
  - Docker
ms.openlocfilehash: 12765e14ab1058a3332c112d26193525db310c75
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010064'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве приведены примеры рабочих процессов, которые настраивают контейнер службы с помощью образа Docker Hub`postgres`. Рабочий процесс запускает сценарий, который подключается к службе PostgreSQL, создает таблицу, а затем заполняет ее данными. Чтобы убедиться в том, что рабочий процесс создает и заполняет таблицу PostgreSQL, сценарий выводит данные из таблицы в консоль.

{% data reusables.actions.docker-container-os-support %}

## Предварительные требования

{% data reusables.actions.service-container-prereqs %}

Кроме того, вы можете получить общее представление о синтаксисе YAML для {% data variables.product.prodname_actions %} и PostgreSQL. Дополнительные сведения можно найти в разделе

- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»
- «Учебник по [PostgreSQL](https://www.postgresqltutorial.com/)» в документации по PostgreSQL

## Выполнение заданий в контейнерах

{% data reusables.actions.container-jobs-intro %}

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: PostgreSQL service example
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
      postgres:
        # Docker Hub image
        image: postgres
        # Provide the password for postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Set health checks to wait until postgres has started
        options: >-
          --health-cmd pg_isready
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

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL table, populates
        # the table with data, and then retrieves the data.
        run: node client.js
        # Environment variables used by the `client.js` script to create a new PostgreSQL table.
        env:
          # The hostname used to communicate with the PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

### Настройка задания средства выполнения тестов

{% data reusables.actions.service-container-host %}

{% data reusables.actions.postgres-label-description %}

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
      postgres:
        # Docker Hub image
        image: postgres
        # Provide the password for postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Set health checks to wait until postgres has started
        options: >-
          --health-cmd pg_isready
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

  - name: Connect to PostgreSQL
    # Runs a script that creates a PostgreSQL table, populates
    # the table with data, and then retrieves the data.
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new PostgreSQL client.
    env:
      # The hostname used to communicate with the PostgreSQL service container
      POSTGRES_HOST: postgres
      # The default PostgreSQL port
      POSTGRES_PORT: 5432
```

{% data reusables.actions.postgres-environment-variables %}

Имя узла службы PostgreSQL — это метка, настроенная в рабочем процессе; в данном случае — `postgres`. Так как контейнеры Docker в той же пользовательской сети моста открывают все порты по умолчанию, вы можете получить доступ к контейнеру службы через стандартный порт PostgreSQL 5432.

## Выполнение заданий непосредственно на компьютере средства выполнения тестов

При запуске задания непосредственно на компьютере средства выполнения тестов необходимо сопоставить порты контейнера службы с портами на узле Docker. Вы можете получить доступ к контейнерам служб из узла Docker, используя `localhost` и номер порта узла Docker.

{% data reusables.actions.copy-workflow-file %}

```yaml{:copy}
name: PostgreSQL Service Example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      postgres:
        # Docker Hub image
        image: postgres
        # Provide the password for postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Set health checks to wait until postgres has started
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps tcp port 5432 on service container to the host
          - 5432:5432

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL table, populates
        # the table with data, and then retrieves the data
        run: node client.js
        # Environment variables used by the `client.js` script to create
        # a new PostgreSQL table.
        env:
          # The hostname used to communicate with the PostgreSQL service container
          POSTGRES_HOST: localhost
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

### Настройка задания средства выполнения тестов

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.postgres-label-description %}

Рабочий процесс сопоставляет порт 5432 в контейнере службы PostgreSQL с узлом Docker. Дополнительные сведения о ключевом слове `ports` см. в разделе «[Сведения о контейнерах служб](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)».

```yaml{:copy}
jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      postgres:
        # Docker Hub image
        image: postgres
        # Provide the password for postgres
        env:
          POSTGRES_PASSWORD: postgres
        # Set health checks to wait until postgres has started
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps tcp port 5432 on service container to the host
          - 5432:5432
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

  - name: Connect to PostgreSQL
    # Runs a script that creates a PostgreSQL table, populates
    # the table with data, and then retrieves the data
    run: node client.js
    # Environment variables used by the `client.js` script to create
    # a new PostgreSQL table.
    env:
      # The hostname used to communicate with the PostgreSQL service container
      POSTGRES_HOST: localhost
      # The default PostgreSQL port
      POSTGRES_PORT: 5432
```

{% data reusables.actions.postgres-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## Тестирование контейнера службы PostgreSQL

Вы можете протестировать рабочий процесс с помощью следующего сценария, который подключается к службе PostgreSQL и добавляет новую таблицу с данными заполнителей. Затем сценарий выводит в терминал значения, хранящиеся в таблице PostgreSQL. Сценарий может использовать любой выбранный язык, но в этом примере используется Node.js и модуль npm `pg`. Дополнительные сведения см. в [модуле npm pg](https://www.npmjs.com/package/pg).

Вы можете изменить *client.js*, чтобы включить все операции PostgreSQL, необходимые для вашего рабочего процесса. В этом примере сценарий подключается к службе PostgreSQL, добавляет таблицу в базу данных `postgres`, вставляет данные заполнителей, а затем извлекает данные.

{% data reusables.actions.service-container-add-script %}

```javascript{:copy}
const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

pgclient.connect();

const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
    if (err) throw err
});

pgclient.query(text, values, (err, res) => {
    if (err) throw err
});

pgclient.query('SELECT * FROM student', (err, res) => {
    if (err) throw err
    console.log(err, res.rows) // Print the data in student table
    pgclient.end()
});
```

Сценарий создает новое подключение к службе PostgreSQL и использует переменные среды `POSTGRES_HOST` и `POSTGRES_PORT` для указания IP-адреса и порта службы PostgreSQL. Если `host` и `port` не определены, по умолчанию используется узел `localhost` и порт 5432.

Сценарий создает таблицу и заполняет ее данными заполнителя. Чтобы убедиться в том, что база данных `postgres` содержит эти данные, сценарий выводит содержимое базы данных в журнал консоли.

При запуске этого рабочего процесса вы увидите следующие выходные данные на шаге «Подключение к PostgreSQL», который подтверждает успешное создание таблицы PostgreSQL и добавление данных:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
