---
title: Redisサービスコンテナの作成
shortTitle: Redis サービス コンテナ
intro: サービスコンテナを使って、ワークフロー中でRedisのクライアントを作成できます。 このガイドでは、コンテナで実行されるジョブか、ランナーマシン上で直接実行されるジョブのためのRedisサービスの作成例を紹介します。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - コンテナ
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

このガイドでは、Docker Hubの`redis`イメージを使ってサービスコンテナを設定するワークフローの例を紹介します。 このワークフローは、Redisのクライアントを作成してクライアントにデータを展開するスクリプトを実行します。 Redisクライアントを作成して展開するワークフローをテストするために、このスクリプトはクライアントのデータをコンソールに出力します。

{% data reusables.github-actions.docker-container-os-support %}

### 必要な環境

{% data reusables.github-actions.service-container-prereqs %}

YAML、{% data variables.product.prodname_actions %}の構文、Redisの基本な理解があれば役立つかも知れません。 詳しい情報については、以下を参照してください。

- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
- Redisのドキュメンテーション中の[Getting Started with Redis](https://redislabs.com/get-started-with-redis/)

### コンテナ内でのジョブの実行

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
name: Redis container example
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
      redis:
        # Docker Hubのイメージ
        image: redis
        # redisが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # CIテストの実行前にリポジトリからコードのコピーをダウンロード
      - name: Check out repository code
        uses: actions/checkout@v2

      # `package.json`ファイル内のすべての依存関係のクリーンインストールの実行
      # 詳しい情報についてはhttps://docs.npmjs.com/cli/ci.htmlを参照
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Redisクライアントを作成し、クライアントにデータを展開し、
        # データを取り出すスクリプトを実行
        run: node client.js
        # `client.js`スクリプトが新しいRedisクライアントを作成するのに使う環境変数
        env:
          # Redisサービスコンテナとの通信に使われるホスト名
          REDIS_HOST: redis
          # デフォルトのRedisポート
          REDIS_PORT: 6379
```
{% endraw %}

#### コンテナジョブの設定

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.redis-label-description %}

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
      redis:
        # Docker Hubのイメージ
        image: redis
        # redisが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### ステップの設定

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # CIテストの実行前にリポジトリのコードのコピーをダウンロード
  - name: Check out repository code
    uses: actions/checkout@v2

  # `package.json`ファイル中のすべての依存関係のクリーンインストールの実行
  # 詳しい情報については https://docs.npmjs.com/cli/ci.html を参照
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Redisクライアントを作成し、クライアントにデータを展開し、
    # データを取り出すスクリプトを実行
    run: node client.js
    # `client.js`スクリプトが新しいRedisクライアントを作成する際に利用する環境変数
    env:
          # Redisサービスコンテナとの通信に使われるホスト名
          REDIS_HOST: redis
          # デフォルトのRedisポート
          REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

Redisサービスのホスト名は、ワークフロー中で設定されたラベルで、ここでは`redis`です。 同じユーザー定義ブリッジネットワーク上のDockerコンテナは、デフォルトですべてのポートをオープンするので、サービスコンテナにはデフォルトのRedisのポートである6379でアクセスできます。

### ランナーマシン上で直接のジョブの実行

ランナーマシン上で直接ジョブを実行する場合、サービスコンテナ上のポートをDockerホスト上のポートにマップしなければなりません。 Dockerホストからサービスコンテナへは、`localhost`とDockerホストのポート番号を使ってアクセスできます。

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
name: Redis runner example
on: push

jobs:
  # ランナージョブのラベル
  runner-job:
    # サービスコンテナもしくはコンテナジョブを使う際にはLinux環境を使わなければならない
    runs-on: ubuntu-latest

    # `runner-job`と実行されるサービスコンテナ
    services:
      # サービスコンテナへのアクセスに使われるラベル
      redis:
        # Docker Hubのイメージ
        image: redis
        # redisが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # サービスコンテナのポート6379をホストにマップ
          - 6379:6379

    steps:
      # CIテストの実行前にリポジトリのコードのコピーをダウンロード
      - name: Check out repository code
        uses: actions/checkout@v2

      # `package.json`ファイル内のすべての依存関係のクリーンインストールの実行
      # 詳しい情報についてはhttps://docs.npmjs.com/cli/ci.htmlを参照
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Redisクライアントを作成し、クライアントにデータを展開し、
        # データを取り出すスクリプトを実行
        run: node client.js
        # `client.js`スクリプトが新しいRedisクライアントを作成するのに
        # 使う環境変数
        env:
          # Redisサービスコンテナとの通信に使われるホスト名
          REDIS_HOST: localhost
          # デフォルトのRedisポート
          REDIS_PORT: 6379
```
{% endraw %}

#### ランナージョブの設定

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.redis-label-description %}

このワークフローはRedisサービスコンテナ上のポート6379をDockerホストにマップします。 `ports`キーワードに関する詳しい情報については「[サービスコンテナについて](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)」を参照してください。

```yaml{:copy}
jobs:
  # ランナージョブのラベル
  runner-job:
    # サービスコンテナもしくはコンテナジョブを使う際にはLinux環境を使わなければならない
    runs-on: ubuntu-latest

    # `runner-job`と実行するサービスコンテナ
    services:
      # サービスコンテナへのアクセスに使うラベル
      redis:
        # Docker Hubのイメージ
        image: redis
        # redisが起動するまで待つヘルスチェックの設定
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # サービスコンテナ上のポート6379をホストにマップ
          - 6379:6379
```

#### ステップの設定

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
steps:
  # CIテストの実行前にリポジトリのコードのコピーをダウンロード
  - name: Check out repository code
    uses: actions/checkout@v2

  # `package.json`ファイル中のすべての依存関係のクリーンインストールの実行
  # 詳しい情報については https://docs.npmjs.com/cli/ci.html を参照
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Redisクライアントを作成し、クライアントにデータを展開し、
    # データを取り出すスクリプトを実行
    run: node client.js
    # `client.js`スクリプトが新しいRedisクライアントを作成する際に
    # 利用する環境変数
    env:
          # Redisサービスコンテナとの通信に使われるホスト名
          REDIS_HOST: localhost
          # デフォルトのRedisポート
          REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Redisサービスコンテナのテスト

ワークフローを以下のスクリプトでテストできます。このスクリプトはRedisクライアントを作成し、いくつかのプレースホルダーデータをクライアントに展開します。 そしてこのスクリプトは、Redisクライアント内に保存された値をターミナルに出力します。 スクリプトには好きな言語を使えますが、この例ではNode.jsとnpmモジュールの`redis`を使っています。 詳しい情報については[npm redisモジュール](https://www.npmjs.com/package/redis)を参照してください。

*client.js*を修正して、ワークフローで必要なRedisの操作を含めることができます。 この例では、スクリプトはRedisクライアントのインスタンスを作成し、プレースホルダーデータを追加し、そしてそのデータを取り出します。

{% data reusables.github-actions.service-container-add-script %}

```javascript{:copy}
const redis = require("redis");

// 新しいRedisクライアントの作成
// REDIS_HOSTが設定されていなければ、デフォルトのホストはlocalhost
// REDIS_PORTが設定されていなければ、デフォルトのポートは6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// キー"octocat"に"Mona the octocat"という値を設定
redisClient.set("octocat", "Mona the Octocat", redis.print);
// キーを"octocat"、フィールドを"species"、"value"を"Cat and Octopus"に設定
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// キーを"octocat"、フィールドを"species"、"value"を"Dinosaur and Octopus"に設定
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// キーを"octocat"、フィールドを"species"、 "value"を"Cat and Robot"に設定
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// キー"species"のすべてのフィールドを取得

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

このスクリプトは新しいRedisクライアントを`createClient`メソッドを使って作成します。これは、パラメーターとして`host`と`port`を受け付けます。 スクリプトは環境変数の`REDIS_HOST`と`REDIS_PORT`を使って、クライアントのIPアドレスとポートを設定します。 `host`と`port`が定義されていない場合、デフォルトのホストは`localhost`で、デフォルトのポートは6379になります。

このスクリプトは、`set`及び`hset`メソッドを使ってデータベースにいくつかのキー、フィールド、値を展開します。 Redisデータベースがデータを含んでいることを確認するために、スクリプトはデータベースの内容をコンソールログに出力します。

このワークフローを実行すると、"Connect to Redis"ステップで以下のように出力され、Redisのクライアントが作成され、データが追加されたことが確認できます。

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
