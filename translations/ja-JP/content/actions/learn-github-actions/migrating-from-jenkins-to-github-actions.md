---
title: JenkinsからGitHub Actionsへの移行
intro: '{% data variables.product.prodname_actions %}とJenkinsには複数の相似点があり、そのため{% data variables.product.prodname_actions %}への移行は比較的単純です。'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Jenkins
  - 移行
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

Jenkinsと{% data variables.product.prodname_actions %}は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 Jenkinsと{% data variables.product.prodname_actions %}は、ワークフローの設定において似ているところがあります。

- Jenkinsは_宣言的パイプライン_を使ってワークフローを作成します。これは{% data variables.product.prodname_actions %}のワークフローファイルに似ています。
- Jenkinsは_ステージ_を使ってステップの集合を実行しますが、{% data variables.product.prodname_actions %}は1つ以上のステップもしくは個別のコマンドをグループ化するのにジョブを使います。
- Jenkinsと{% data variables.product.prodname_actions %}はコンテナベースのビルドをサポートします。 詳しい情報については「[Docker コンテナアクションを作成する](/articles/creating-a-docker-container-action)」を参照してください。
- ステップもしくはタスクは、再利用とコミュニティとの共有が可能です。

詳しい情報については、「[{% data variables.product.prodname_actions %}の中核的概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)」を参照してください。

### 主要な差異

- Jenkinsには、パイプラインの作成用の構文として、宣言的パイプラインとスクリプトパイプラインの2種類があります。 {% data variables.product.prodname_actions %}は、ワークフローと設定ファイルの作成にYAMLを使います。 詳しい情報については、「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)」を参照してください。
- Jenkinsのデプロイメントは通常セルフホストであり、ユーザが自身のデータセンター内のサーバーをメンテナンスします。 {% data variables.product.prodname_actions %}は、ジョブの実行に利用できる独自のランナーをホストするハイブリッドクラウドのアプローチを提供しながら、セルフホストランナーもサポートします。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

### 機能の比較

#### ビルドの分配

Jenkinsでは、ビルドを単一のビルドエージェントに送信することも、複数のエージェントに対して分配することもできます。 それらのエージェントを、オペレーティングシステムの種類などの様々な属性に従って分類することもできます。

同様に、{% data variables.product.prodname_actions %} はジョブを {% data variables.product.prodname_dotcom %} ホストまたはセルフホストランナーに送信でき、ラベルを使用してさまざまな属性に従ってランナーを分類できます。 以下の表は、分散ビルドの概念がJenkinsと{% data variables.product.prodname_actions %}でどのように実装されているかを比較しています。

| Jenkins                                                                | {% data variables.product.prodname_actions %}
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`エージェント`](https://wiki.jenkins.io/display/JENKINS/Distributed+builds) | [`runners`](/actions/learn-github-actions/introduction-to-github-actions#runners) <br> [`self-hosted runners`](/actions/hosting-your-own-runners/about-self-hosted-runners) |

#### セクションを利用したパイプラインの整理

Jenkinsは、宣言的パイプラインを複数のセクションに分割します。 同様に、{% data variables.product.prodname_actions %} はワークフローを個別のセクションに編成します。 以下の表は、Jenkinsのセクションを{% data variables.product.prodname_actions %}のワークフローと比較しています。

| Jenkinsのディレクティブ                                                 | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |                                                                                                                                                                                                                                                                                                        |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)                                                                                                                                                                                                |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)                                                                                                                                                                |

### ディレクティブの利用

Jenkinsは、_宣言的パイプライン_を管理するためにディレクティブを使います。 それらのディレクティブは、ワークフローの特徴と、その実行方法を定義します。 以下の表は、それらのディレクティブが{% data variables.product.prodname_actions %}の概念とどのように対応するかを示しています。

| Jenkinsのディレクティブ                                                                                                                                                                                                                                                                                                                                                         | {% data variables.product.prodname_actions %}
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                                                                                                                                                                                                                                                                                               | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)                                                                                                                                                                                                                                                                                              |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                                                                                                                                    | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)                                                                                    |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                                                                                                                                 | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                                                                                                                                     | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\|pull_request>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                                                                                                              | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Jenkinsのcron構文](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)                                                                                                                                                                                                                                                                                              | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`ステージ`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                                                                                                                                                                                                                                                                                                            | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)                                                                                                                                                                                                                                                                                                       |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| {% if currentVersion == "github-ae@latest" %}{% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」{% else %}[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)を参照してください。 | {% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                                                                                                                                                                                                                                                                                                           | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                                                                                                                                                                                                                                                                                             | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### シーケンシャルなステージの利用

#### 並列なジョブの処理

Jenkinsは`ステージ`と`ステップ`を並行して実行できますが、{% data variables.product.prodname_actions %}が並行に処理できるのは現時点ではジョブだけです。

| Jenkinsの並列処理                                                        | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

#### ビルドマトリックス

{% data variables.product.prodname_actions %}とJenkinsはどちらも、ビルドマトリックスを使って様々なシステムの組み合わせを定義できます。

| Jenkins                                                                  | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)                                                                                            |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |                                                                                                                                                                                                 |

#### ステップを使ったタスクの実行

Jenkinsは`ステップ`をまとめて`ステージ`にグループ化します。 それらの各ステップは、スクリプト、関数、コマンドなどです。 同様に、{% data variables.product.prodname_actions %}は`ジョブ`を使って特定の`ステップ`のグループを実行します。

| Jenkinsのステップ                                                    | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

### 一般的なタスクの例

#### `cron`で実行するようパイプラインをスケジュール

<table>
<tr>
<th>
Jenkinsのパイプライン
</th>
<th>
{% data variables.product.prodname_actions %}のワークフロー
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

</td>
<td>

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

</td>
</tr>
</table>

#### パイプライン中での環境変数の設定

<table>
<tr>
<th>
Jenkinsのパイプライン
</th>
<th>
{% data variables.product.prodname_actions %}のワークフロー
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

#### 上流のプロジェクトからのビルド

<table>
<tr>
<th>
Jenkinsのパイプライン
</th>
<th>
{% data variables.product.prodname_actions %}のワークフロー
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  triggers {
    upstream(
      upstreamProjects: 'job1,job2',
      threshold: hudson.model.Result.SUCCESS
    )
  }
}
```

</td>
<td>

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

</td>
</tr>
</table>

#### 複数のオペレーティングシステムでのビルド

<table>
<tr>
<th>
Jenkinsのパイプライン
</th>
<th>
{% data variables.product.prodname_actions %}のワークフロー
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      matrix {
        axes {
          axis {
            name: 'PLATFORM'
            values: 'macos', 'linux'
          }
        }
        agent { label "${PLATFORM}" }
        stages {
          stage('test') {
            tools { nodejs "node-12" }
            steps {
              dir("scripts/myapp") {
                sh(script: "npm install -g bats")
                sh(script: "bats tests")
              }
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

{% raw %}
```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm install -g bats
      - run: bats tests
        working-directory: scripts/myapp
```
{% endraw %}

</td>
</tr>
</table>
