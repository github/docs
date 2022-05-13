---
title: PostgreSQLサービスコンテナの作成
shortTitle: PostgreSQL サービス コンテナ
intro: ワークフローで利用するPostgreSQLサービスコンテナを作成できます。 このガイドでは、コンテナで実行されるジョブか、ランナーマシン上で直接実行されるジョブのためのPostgreSQLサービスの作成例を紹介します。
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドでは、Docker Hubの`postgres`イメージを使ってサービスコンテナを設定するワークフローの例を紹介します。 ワークフローの実行スクリプトは、PostgreSQL サービスに接続し、テーブルを作成してから、データを入力します。 ワークフローが PostgreSQL テーブルを作成してデータを入力することをテストするために、スクリプトはテーブルからコンソールにデータを出力します。

{% data reusables.actions.docker-container-os-support %}

## 必要な環境

{% data reusables.actions.service-container-prereqs %}

YAML、{% data variables.product.prodname_actions %}の構文、PosgreSQLの基本な理解があれば役立つかも知れません。 詳しい情報については、以下を参照してください。

- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
- PostgreSQLのドキュメンテーション中の[PostgreSQLチュートリアル](https://www.postgresqltutorial.com/)

## コンテナ内でのジョブの実行

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
        # `client.js` スクリプトが新しいPostgreSQLクライアントの作成に使う環境変数。
        env:
          # PostgreSQLサービスコンテナとの通信に使われるホスト名
          POSTGRES_HOST: postgres
          # デフォルトのPostgreSQLポート
          POSTGRES_PORT: 5432
```

### ランナージョブの設定

{% data reusables.actions.service-container-host %}

{% data reusables.actions.postgres-label-description %}

```yaml{:copy}
jobs:
  # コンテナジョブのラベル
  container-job:
    # コンテナはLinuxベースのオペレーティングシステム内で実行しなければならない
    runs-on: ubuntu-latest
    # `container-job`が実行されるDocker Hubのイメージ
    container: node:10.18-jessie

    # `container-job`と実行されるサービスコンテナ
    services:
      # サービスコンテナへのアクセスに使われるラベル
      postgres:
        # Docker Hubのイメージ
        image: postgres
        # postgresのパスワードを提供
        env:
          POSTGRES_PASSWORD: postgres
        # postgresが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

### ステップの設定

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
    # 新しい PostgreSQL クライアントを作成するために
    # `client.js` スクリプトによって使用される環境変数。
    env:
      # PostgreSQLサービスコンテナとの通信に使われるホスト名
      POSTGRES_HOST: postgres
      # デフォルトのPostgreSQLポート
      POSTGRES_PORT: 5432
```

{% data reusables.actions.postgres-environment-variables %}

PostgreSQLサービスのホスト名は、ワークフロー中で設定されたラベルで、ここでは`postgres`です。 同じユーザー定義ブリッジネットワーク上のDockerコンテナは、デフォルトですべてのポートをオープンするので、サービスコンテナにはデフォルトのPostgreSQLのポートである5432でアクセスできます。

## ランナーマシン上で直接のジョブの実行

ランナーマシン上で直接ジョブを実行する場合、サービスコンテナ上のポートをDockerホスト上のポートにマップしなければなりません。 Dockerホストからサービスコンテナへは、`localhost`とDockerホストのポート番号を使ってアクセスできます。

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
          # PostgreSQLサービスコンテナとの通信に使われるホスト名
          POSTGRES_HOST: localhost
          # デフォルトのPostgreSQLポート
          POSTGRES_PORT: 5432
```

### ランナージョブの設定

{% data reusables.actions.service-container-host-runner %}

{% data reusables.actions.postgres-label-description %}

このワークフローはPostgreSQLサービスコンテナ上のポート5432をDockerホストにマップします。 `ports`キーワードに関する詳しい情報については「[サービスコンテナについて](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)」を参照してください。

```yaml{:copy}
jobs:
  # ランナージョブのラベル
  runner-job:
    # サービスコンテナもしくはコンテナジョブを使う場合にはLinux環境を使わなければならない
    runs-on: ubuntu-latest

    # `runner-job`と実行されるサービスコンテナ
    services:
      # サービスコンテナへのアクセスに使われるラベル
      postgres:
        # Docker Hubのイメージ
        image: postgres
        # postgresにパスワードを提供
        env:
          POSTGRES_PASSWORD: postgres
        # postgresが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # サービスコンテナ上のTCPポート5432をホストにマップ
          - 5432:5432
```

### ステップの設定

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
      # PostgreSQLサービスコンテナとの通信に使われるホスト名
      POSTGRES_HOST: localhost
      # デフォルトのPostgreSQLポート
      POSTGRES_PORT: 5432
```

{% data reusables.actions.postgres-environment-variables %}

{% data reusables.actions.service-container-localhost %}

## PostgreSQLサービスコンテナのテスト

次のスクリプトを使用してワークフローをテストできます。このスクリプトは、PostgreSQL サービスに接続し、プレースホルダーデータを含む新しいテーブルを追加します。 そしてそのスクリプトは PostgreSQL テーブルに保存されている値をターミナルに出力します。 スクリプトには好きな言語を使えますが、この例ではNode.jsとnpmモジュールの`pg`を使っています。 詳しい情報については[npm pgモジュール](https://www.npmjs.com/package/pg)を参照してください。

*client.js*を修正して、ワークフローで必要なPostgreSQLの操作を含めることができます。 この例では、スクリプトは PostgreSQL サービスに接続し、`postgres` データベースにテーブルを追加し、プレースホルダーデータを挿入してから、データを取得します。

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

このスクリプトは、PostgreSQL サービスへの新しい接続を作成し、`POSTGRES_HOST` および `POSTGRES_PORT` 環境変数を使用して PostgreSQL サービスの IP アドレスとポートを指定します。 `host`と`port`が定義されていない場合、デフォルトのホストは`localhost`で、デフォルトのポートは5432になります。

スクリプトはテーブルを作成し、そのテーブルにプレースホルダーデータを展開します。 `postgres` データベースにデータが含まれていることをテストするために、スクリプトはテーブルの内容をコンソールログに出力します。

このワークフローを実行すると、「PostgreSQL への接続」ステップに次の出力が表示されます。これにより、PostgreSQL テーブルが正常に作成されてデータが追加されたことを確認できます。

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
