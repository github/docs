---
title: サービスコンテナについて
intro: サービスコンテナを使って、データベース、Webサービス、メモリキャッシュ、あるいはその他のツールをワークフローに接続できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - コンテナ
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### サービスコンテナについて

サービスコンテナは、ワークフロー中でアプリケーションをテストもしくは運用するのに必要になるかもしれないサービスをホストするための、シンプルでポータブルな方法を提供するDockerコンテナです。 たとえば、ワークフローでデータベースやメモリキャッシュへのアクセスを必要とする結合テストを実行する必要があるかもしれません。

サービスコンテナは、ワークフロー中のそれぞれのジョブに対して設定できます。 {% data variables.product.prodname_dotcom %}は新しいDockerコンテナをワークフロー中で設定された各サービスに対して作成し、ジョブが完了したときにそのサービスコンテナを破棄します。 ジョブ中のステップは、同じジョブの一部であるすべてのサービスコンテナと通信できます。

{% data reusables.github-actions.docker-container-os-support %}

### サービスコンテナとの通信

ワークフロー中のジョブは、直接ランナーマシン上で実行するようにも、Dockerコンテナ中で実行するようにも設定できます。 ジョブと、ジョブのサービスコンテナとの通信は、ジョブがランナーマシン上で直接実行されているか、コンテナ内で実行されているかによって異なります。

#### コンテナ内でのジョブの実行

コンテナ内でジョブを実行する場合、{% data variables.product.prodname_dotcom %}はDockerのユーザー定義ブリッジネットワークを使ってサービスコンテナをジョブに接続します。 詳しい情報についてはDockerのドキュメンテーションの「[ブリッジネットワークの利用](https://docs.docker.com/network/bridge/)」を参照してください。

コンテナ内でジョブとサービスを実行すれば、ネットワークアクセスはシンプルになります。 サービスコンテナへは、ワークフロー中で設定したラベルを使ってアクセスできます。 サービスコンテナのホスト名は、自動的にラベル名にマップされます。 たとえば`redis`というラベルでサービスコンテナを作成したなら、そのサービスコンテナのホスト名は`redis`になります。

サービスコンテナでポートを設定する必要はありません。 デフォルトで、すべてのコンテナは同じDockerネットワークの一部となってお互いにすべてのポートを公開し合い、Dockerネットワークの外部へはポートは公開されません。

#### ランナーマシン上でのジョブの実行

ジョブをランナーマシン上で直接実行する場合、サービスコンテナには`localhost:<port>`もしくは`127.0.0.1:<port>`を使ってアクセスできます。 {% data variables.product.prodname_dotcom %}は、サービスコンテナからDockerホストへの通信を可能にするよう、コンテナネットワークを設定します。

ジョブがランナーマシン上で直接実行されている場合、Dockerコンテナ内で実行されているサービスは、ランナー上で実行しているジョブに対してデフォルトではポートを公開しません。 サービスコンテナ上のポートは、Dockerホストに対してマップする必要があります。 詳しい情報については「[Dockerホストとサービスコンテナのポートのマッピング](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)」を参照してください。

### サービスコンテナの作成

`services`キーワードを使って、ワークフロー内のジョブの一部であるサービスコンテナを作成できます。 詳しい情報については[`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)を参照してください。

以下の例は、`container-job`というジョブの中に`redis`というサービスを作成します。 この例でのDockerホストは`node:10.18-jessie`コンテナです。

{% raw %}
```yaml{:copy}
name: Redis container example
on: push

jobs:
  # コンテナジョブのラベル
  container-job:
    # コンテナはLinuxベースのオペレーティングシステム内で実行する
    runs-on: ubuntu-latest
    # `container-job`が実行されるDocker Hubイメージ
    container: node:10.18-jessie

    # `container-job`と実行されるサービスコンテナ
    services:
      # サービスコンテナへのアクセスに使われるラベル
      redis:
        # Docker Hubのイメージ
        image: redis
```
{% endraw %}

### Dockerホストとサービスコンテナのポートのマッピング

ジョブがDockerコンテナ内で実行されるなら、ポートをホストあるいはサービスコンテナにマップする必要はありません。 ジョブがランナーマシン上で直接実行されるなら、必要なサービスコンテナのポートはホストランナーマシンのポートにマップしなければなりません。

サービスコンテナのポートは、`ports`キーワードを使ってDockerホストにマップできます。 詳しい情報については[`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)を参照してください。

| `ports`の値     | 説明                                                |
| ------------- | ------------------------------------------------- |
| `8080:80`     | コンテナのTCPのポート80をDockerホストのポート8080にマップします。          |
| `8080:80/udp` | コンテナのUDPポート80をDockerホストのポート8080にマップします。           |
| `8080/udp`    | コンテナでランダムに選択したUDPポートをDockerホストのUDPポート8080にマップします。 |

`ports`キーワードを使ってポートをマップする場合、{% data variables.product.prodname_dotcom %}は`--publish`コマンドを使ってコンテナのポートをDockerホストに公開します。 詳しい情報についてはDockerのドキュメンテーションの「[Dockerコンテナのネットワーキング](https://docs.docker.com/config/containers/container-networking/)」を参照してください。

Dockerホストのポートを指定して、コンテナのポートを指定しなかった場合、コンテナのポートは空いているポートにランダムに割り当てられます。 {% data variables.product.prodname_dotcom %}は割り当てられたコンテナのポートをサービスコンテナのコンテキストに設定します。 たとえば`redis`サービスコンテナに対し、Dockerホストのポート5432を設定したなら、対応するコンテナのポートには`job.services.redis.ports[5432]`コンテキストを使ってアクセスできます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#job-context)」を参照してください。

#### Redisのポートのマッピングの例

以下の例は、サービスコンテナ`redis`のポート6379を、Dockerホストのポート6379にマップします。

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # コンテナジョブのラベル
  runner-job:
    # サービスコンテナもしくはコンテナジョブの利用の際はLinux環境を使わなければならない
    runs-on: ubuntu-latest

    # `runner-job`と実行するサービスコンテナ
    services:
      # サービスコンテナへのアクセスに使われるラベル
      redis:
        # Docker Hubイメージ
        image: redis
        #
        ports:
          # ホストとサービスコンテナのTCPポート6379をオープンする
          - 6379:6379
```
{% endraw %}

### 参考リンク

- [Redisサービスコンテナの作成](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)
- [PostgreSQLサービスコンテナの作成](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)
