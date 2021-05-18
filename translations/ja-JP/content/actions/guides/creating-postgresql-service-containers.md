---
title: PostgreSQLサービスコンテナの作成
shortTitle: PostgreSQL サービス コンテナ
intro: ワークフローで利用するPostgreSQLサービスコンテナを作成できます。 このガイドでは、コンテナで実行されるジョブか、ランナーマシン上で直接実行されるジョブのためのPostgreSQLサービスの作成例を紹介します。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers
  - /actions/configuring-and-managing-workflows/creating-postgresql-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Containers
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

このガイドでは、Docker Hubの`postgres`イメージを使ってサービスコンテナを設定するワークフローの例を紹介します。 The workflow runs a script that connects to the PostgreSQL service, creates a table, and then populates it with data. To test that the workflow creates and populates the PostgreSQL table, the script prints the data from the table to the console.

{% data reusables.github-actions.docker-container-os-support %}

### 必要な環境

{% data reusables.github-actions.service-container-prereqs %}

YAML、{% data variables.product.prodname_actions %}の構文、PosgreSQLの基本な理解があれば役立つかも知れません。 詳しい情報については、以下を参照してください。

- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
- PostgreSQLのドキュメンテーション中の[PostgreSQLチュートリアル](https://www.postgresqltutorial.com/)

### コンテナ内でのジョブの実行

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
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
        uses: actions/checkout@v2

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
          # PostgreSQLサービスコンテナとの通信に使われるホスト名
          POSTGRES_HOST: postgres
          # デフォルトのPostgreSQLポート
          POSTGRES_PORT: 5432
```
{% endraw %}

#### ランナージョブの設定

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.postgres-label-description %}

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

#### ステップの設定

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: actions/checkout@v2

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
      # PostgreSQLサービスコンテナとの通信に使われるホスト名
      POSTGRES_HOST: postgres
      # デフォルトのPostgreSQLポート
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

PostgreSQLサービスのホスト名は、ワークフロー中で設定されたラベルで、ここでは`postgres`です。 同じユーザー定義ブリッジネットワーク上のDockerコンテナは、デフォルトですべてのポートをオープンするので、サービスコンテナにはデフォルトのPostgreSQLのポートである5432でアクセスできます。

### ランナーマシン上で直接のジョブの実行

ランナーマシン上で直接ジョブを実行する場合、サービスコンテナ上のポートをDockerホスト上のポートにマップしなければなりません。 Dockerホストからサービスコンテナへは、`localhost`とDockerホストのポート番号を使ってアクセスできます。

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
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
        uses: actions/checkout@v2

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
{% endraw %}

#### ランナージョブの設定

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.postgres-label-description %}

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

#### ステップの設定

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: actions/checkout@v2

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

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### PostgreSQLサービスコンテナのテスト

You can test your workflow using the following script, which connects to the PostgreSQL service and adds a new table with some placeholder data. The script then prints the values stored in the PostgreSQL table to the terminal. スクリプトには好きな言語を使えますが、この例ではNode.jsとnpmモジュールの`pg`を使っています。 詳しい情報については[npm pgモジュール](https://www.npmjs.com/package/pg)を参照してください。

*client.js*を修正して、ワークフローで必要なPostgreSQLの操作を含めることができます。 In this example, the script connects to the PostgreSQL service, adds a table to the `postgres` database, inserts some placeholder data, and then retrieves the data.

{% data reusables.github-actions.service-container-add-script %}

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

The script creates a new connection to the PostgreSQL service, and uses the `POSTGRES_HOST` and `POSTGRES_PORT` environment variables to specify the PostgreSQL service IP address and port. `host`と`port`が定義されていない場合、デフォルトのホストは`localhost`で、デフォルトのポートは5432になります。

スクリプトはテーブルを作成し、そのテーブルにプレースホルダーデータを展開します。 To test that the `postgres` database contains the data, the script prints the contents of the table to the console log.

When you run this workflow, you should see the following output in the "Connect to PostgreSQL" step, which confirms that you successfully created the PostgreSQL table and added data:

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
