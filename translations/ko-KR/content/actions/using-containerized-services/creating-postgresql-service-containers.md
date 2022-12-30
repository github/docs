---
title: PostgreSQL 서비스 컨테이너 만들기
shortTitle: Create PostgreSQL service containers
intro: 워크플로에서 사용할 PostgreSQL 서비스 컨테이너를 만들 수 있습니다. 이 가이드에서는 컨테이너 또는 실행기 컴퓨터에서 직접 실행되는 작업에 대한 PostgreSQL 서비스를 만드는 예제를 보여 줍니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009575'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Docker Hub `postgres` 이미지를 사용하여 서비스 컨테이너를 구성하는 워크플로 예제를 보여 줍니다. 워크플로는 PostgreSQL 서비스에 연결하고 테이블을 만든 다음 데이터로 채우는 스크립트를 실행합니다. 워크플로가 PostgreSQL 테이블을 만들고 채우는지 테스트하기 위해 스크립트는 테이블에서 콘솔로 데이터를 인쇄합니다.

{% data reusables.actions.docker-container-os-support %}

## 필수 조건

{% data reusables.actions.service-container-prereqs %}

YAML, {% data variables.product.prodname_actions %}의 구문 및 PostgreSQL에 대한 기본적인 이해가 도움이 될 수도 있습니다. 자세한 내용은 다음을 참조하세요.

- “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”
- PostgreSQL 설명서의 “[PostgreSQL 자습서](https://www.postgresqltutorial.com/)”

## 컨테이너에서 작업 실행

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

### 실행기 작업 구성

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

### 단계 구성

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

PostgreSQL 서비스의 호스트 이름은 워크플로에서 구성한 레이블(이 경우 `postgres`)입니다. 동일한 사용자 정의 브리지 네트워크의 Docker 컨테이너는 기본적으로 모든 포트를 열기 때문에 기본 PostgreSQL 포트 5432의 서비스 컨테이너에 액세스할 수 있습니다.

## 실행기 컴퓨터에서 직접 작업 실행

실행기 컴퓨터에서 직접 작업을 실행하는 경우 서비스 컨테이너의 포트를 Docker 호스트의 포트에 매핑해야 합니다. `localhost` 및 Docker 호스트 포트 번호를 사용하여 Docker 호스트에서 서비스 컨테이너에 액세스할 수 있습니다.

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

### 실행기 작업 구성

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.postgres-label-description %}

워크플로는 PostgreSQL 서비스 컨테이너의 포트 5432를 Docker 호스트에 매핑합니다. `ports` 키워드에 대한 자세한 내용은 “[서비스 컨테이너 정보](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)”를 참조하세요.

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

### 단계 구성

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

## PostgreSQL 서비스 컨테이너 테스트

PostgreSQL 서비스에 연결하고 일부 자리 표시자 데이터가 있는 새 테이블을 추가하는 다음 스크립트를 사용하여 워크플로를 테스트할 수 있습니다. 그런 다음, 스크립트는 PostgreSQL 테이블에 저장된 값을 터미널에 출력합니다. 스크립트는 원하는 언어를 사용할 수 있지만 이 예제에서는 Node.js 및 `pg` npm 모듈을 사용합니다. 자세한 내용은 [npm pg 모듈](https://www.npmjs.com/package/pg)을 참조하세요.

워크플로에 필요한 PostgreSQL 작업을 포함하도록 *client.js* 를 수정할 수 있습니다. 이 예제에서 스크립트는 PostgreSQL 서비스에 연결하고, `postgres` 데이터베이스에 테이블을 추가하고, 일부 자리 표시자 데이터를 삽입한 다음, 데이터를 검색합니다.

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

이 스크립트는 PostgreSQL 서비스에 대한 새 연결을 만들고 `POSTGRES_HOST` 및 `POSTGRES_PORT` 환경 변수를 사용하여 PostgreSQL 서비스 IP 주소 및 포트를 지정합니다. `host` 및 `port`가 정의되지 않은 경우 기본 호스트는 `localhost`이고 기본 포트는 5432입니다.

스크립트는 테이블을 만들고 자리 표시자 데이터로 테이블을 채웁니다. `postgres` 데이터베이스에 데이터가 포함되어 있는지 테스트하기 위해 스크립트는 테이블의 내용을 콘솔 로그에 출력합니다.

이 워크플로를 실행하면 PostgreSQL 테이블을 성공적으로 만들고 데이터를 추가했는지 확인하는 “PostgreSQL에 연결” 단계에서 다음 출력이 표시됩니다.

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
