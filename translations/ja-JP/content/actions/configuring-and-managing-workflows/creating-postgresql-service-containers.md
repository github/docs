---
title: PostgreSQLサービスコンテナの作成
intro: ワークフローで利用するPostgreSQLサービスコンテナを作成できます。 このガイドでは、コンテナで実行されるジョブか、ランナーマシン上で直接実行されるジョブのためのPostgreSQLサービスの作成例を紹介します。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

このガイドでは、Docker Hubの`postgres`イメージを使ってサービスコンテナを設定するワークフローの例を紹介します。 このワークフローは、PostgreSQLのクライアントを作成してクライアントにデータを展開するスクリプトを実行します。 PostgreSQLクライアントを作成して展開するワークフローをテストするために、このスクリプトはクライアントのデータをコンソールに出力します。

{% data reusables.github-actions.docker-container-os-support %}

### 必要な環境

{% data reusables.github-actions.service-container-prereqs %}

YAML、{% data variables.product.prodname_actions %}の構文、PosgreSQLの基本な理解があれば役立つかも知れません。 詳しい情報については、以下を参照してください。

- [ワークフローの設定](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)
- PostgreSQLのドキュメンテーション中の[PostgreSQLチュートリアル](https://www.postgresqltutorial.com/)
- [{% data variables.product.prodname_actions %}の中核的概念](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)
- [環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)

### コンテナ内でのジョブの実行

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml
name: PostgreSQL service example
on: push

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

    steps:
      # CIテストの実行前にリポジトリからコードのコピーをダウンロード
      - name: Check out repository code
        uses: actions/checkout@v2

      # `package.json`ファイル内のすべての依存関係のクリーンインストールを実行
      # 詳しい情報についてはhttps://docs.npmjs.com/cli/ci.htmlを参照
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # PostgreSQLクライアントを作成し、クライアントにデータを展開し、
        # データを取り出すスクリプトを実行
        run: node client.js
        # `client.js`スクリプトが新しいPostgreSQLクライアントの作成に使う環境変数
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

```yaml
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

```yaml
steps:
  # CIテストの実行前にリポジトリのコードのコピーをダウンロード
  - name: Check out repository code
    uses: actions/checkout@v2

  # `package.json`ファイル中のすべての依存関係のクリーンインストールを実行
  # 詳しい情報については https://docs.npmjs.com/cli/ci.html を参照
  - name: Install dependencies
    run: npm ci

  - name: Connect to PostgreSQL
    # PostgreSQLクライアントを作成し、クライアントにデータを展開し、
    # データを取り出すスクリプトを実行
    run: node client.js
    # `client.js`スクリプトが新しいPostgreSQLクライアントを作成する際に
    # 利用する環境変数
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
```yaml
name: PostgreSQL Service Example
on: push

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
        # postgresのパスワードを提供
        env:
          POSTGRES_PASSWORD: postgres
        # posgresが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # サービスコンテナ上のTCPポート5432をホストにマップ
          - 5432:5432

    steps:
      # CIテストの実行前にリポジトリからコードのコピーをダウンロード
      - name: Check out repository code
        uses: actions/checkout@v2

      # `package.json`ファイル内のすべての依存関係のクリーンインストールを実行
      # 詳しい情報についてはhttps://docs.npmjs.com/cli/ci.htmlを参照
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # PostgreSQLクライアントを作成し、クライアントにデータを展開し、
        # データを取り出すスクリプトを実行
        run: node client.js
        # `client.js`スクリプトが新しいPostgreSQLクライアントの
        # 作成に使う環境変数
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

```yaml
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

```yaml
steps:
  # CIテストの実行前にリポジトリのコードのコピーをダウンロード
  - name: Check out repository code
    uses: actions/checkout@v2

  # `package.json`ファイル中のすべての依存関係のクリーンインストールを実行
  # 詳しい情報については https://docs.npmjs.com/cli/ci.html を参照
  - name: Install dependencies
    run: npm ci

  - name: Connect to PostgreSQL
    # PostgreSQLクライアントを作成し、クライアントにデータを展開し、
    # データを取り出すスクリプトを実行
    run: node client.js
    # `client.js`スクリプトが新しいPostgreSQLクライアントを作成する際に
    # 利用する環境変数
    env:
      # PostgreSQLサービスコンテナとの通信に使われるホスト名
      POSTGRES_HOST: localhost
      # デフォルトのPostgreSQLポート
      POSTGRES_PORT: 5432
```

{% data reusables.github-actions.postgres-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### PostgreSQLサービスコンテナのテスト

ワークフローを以下のスクリプトでテストできます。このスクリプトはPostgreSQLクライアントを作成し、いくつかのプレースホルダーデータで新しいテーブルを追加します。 そしてこのスクリプトは、PostgreSQLクライアント内に保存された値をターミナルに出力します。 スクリプトには好きな言語を使えますが、この例ではNode.jsとnpmモジュールの`pg`を使っています。 詳しい情報については[npm pgモジュール](https://www.npmjs.com/package/pg)を参照してください。

*client.js*を修正して、ワークフローで必要なPostgreSQLの操作を含めることができます。 この例では、スクリプトはPostgreSQLクライアントのインスタンスを作成し、テーブルを作成し、プレースホルダーデータを追加し、そしてそのデータを取り出します。

{% data reusables.github-actions.service-container-add-script %}

```javascript
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

このスクリプトは新しいPostgreSQLの`Client`を作成します。これは、パラメーターとして`host`と`port`を受け付けます。 スクリプトは環境変数の`POSTGRES_HOST`と`POSTGRES_PORT`を使って、クライアントのIPアドレスとポートを設定します。 `host`と`port`が定義されていない場合、デフォルトのホストは`localhost`で、デフォルトのポートは5432になります。

スクリプトはテーブルを作成し、そのテーブルにプレースホルダーデータを展開します。 PostgreSQLデータベースがデータを含んでいることをテストするために、スクリプトはテーブルの内容をコンソールログに出力します。

このワークフローを実行すると、"Connect to PostgreSQL"ステップで以下のように出力され、PostgreSQLのクライアントが作成され、データが追加されたことが確認できます。

```
null [ { id: 1,
    firstname: 'Mona the',
    lastname: 'Octocat',
    age: 9,
    address:
     '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States',
    email: 'octocat@github.com' } ]
```
