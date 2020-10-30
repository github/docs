---
title: ワークフローの構成
intro: カスタム ワークフローを作成して、プロジェクトのソフトウェア開発ライフサイクル プロセスを自動化できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /記事/作成-githubアクション/
  - /記事/ワークフローを作成する -github アクション/
  - /記事/ワークフローの構成
  - /github/自動化-ワークフローをgithubアクションで/ワークフローを設定する
  - /アクション/自動化-ワークフローをgithubアクションで/ワークフローを設定する
  - /アクション/作成ワークフロー/ワークフロー構成オプション
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

リポジトリへの書き込み権限または管理者権限を持つユーザーは、ワークフローを作成、編集、または表示できます。

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフローについて

ワークフローは、リポジトリ内で設定して、プロジェクトをビルド、テスト、パッケージ化、リリース、またはデプロイするために設定できるカスタムの自動化プロセス {% data variables.product.prodname_dotcom %}。 ワークフローを使用すると、さまざまなツールとサービスでソフトウェア開発ライフサイクルを自動化できます。 詳細については、「 {% data variables.product.prodname_actions %}</a>について
」を参照してください。</p> 

リポジトリ内に複数のワークフローを作成できます。 ワークフローは、リポジトリのルートにあるディレクトリの `github/ワークフロー` ディレクトリに格納する必要があります。

ワークフローには少なくとも 1 つのジョブが必要であり、ジョブには個々のタスクを実行する一連のステップが含まれています。 ステップは、コマンドを実行したり、アクションを使用したりできます。 独自のアクションを作成したり、 {% data variables.product.prodname_dotcom %} コミュニティで共有するアクションを使用して、必要に応じてカスタマイズすることができます。

{% data variables.product.prodname_dotcom %} イベントが発生したとき、スケジュールに従って、または外部イベントから開始するようにワークフローを構成できます。

YAML 構文を使用してワークフローを設定し、リポジトリ内のワークフロー ファイルとして保存する必要があります。 YAML ワークフロー ファイルを正常に作成し、ワークフローをトリガーすると、ワークフローの各ステップのビルド ログ、テスト結果、アーティファクト、およびステータスが表示されます。 詳細については、「ワークフローの実行[管理」を参照](/articles/managing-a-workflow-run)。

![アナンスされたワークフロー実行イメージ](/assets/images/help/repository/annotated-workflow.png)

ワークフローステータスの更新に関する通知を受信することもできます。 通知オプションの詳細については、「通知</a>のの構成」を参照してください。</p> 

使用制限は、個々のワークフローに適用されます。 詳細については、「ワークフローの使用制限[](/articles/workflow-syntax-for-github-actions#usage-limits)」を参照してください。



### ワークフロー ファイルの作成

大まかに言えば、ワークフロー ファイルを追加する手順は次のとおりです。 具体的な構成例については、以降のセクションを参照してください。

1. リポジトリのルートで、ワークフロー ファイルを格納するディレクトリ `.github/workflow` というディレクトリを作成します。

1. github/ワークフロー ``で、ワークフローの `.yml` または `.yaml` ファイルを追加します。 たとえば、 `.github/ワークフロー/継続的インテグレーションワークフロー.yml`。

1. 「 {% data variables.product.prodname_actions %}</a>のワークフロー構文」参照ドキュメントを使用して、アクションのトリガ、アクションの追加、ワークフローのカスタマイズを行うイベントを選択します。</p></li> 
   
   1 ワークフロー ファイルの変更を、ワークフローを実行するブランチにコミットします。</ol> 



#### ワークフロー ファイルの例

{% raw %}


```yaml
name: [すべてのユーザーを迎える]
# このワークフローはリポジトリへのプッシュでトリガーされます。
on: [push]

ジョブ:
  ビルド:
    # ジョブ名はグリーティング
    名: グリーティング
    # このジョブは Linux
    で実行されます: ubuntu-最新
    ステップ:
      # このステップはGitHubの hello-world-javascript アクションを使用しています: https://github.com/actions/hello-world-javascript-action
      - 名前 こんにちは世界
        使用:アクション/ハローワールドjavascript-action@v1.1と
        :
          誰が挨拶:'モナ・ザ・オクトキャット'
        id:こんにちは
      #このステップは、前のステップのアクションからの出力(時間)を出力します。
      - 名前:挨拶の実行時間
        エコー:エコー'時間は${{ steps.hello.outputs.time }}でした.
```


{% endraw %}

{% data reusables.github-actions.invalid-workflow-files %}



### イベントを含むワークフローのトリガー

ワークフローを一度開始するように設定できます。

- {% data variables.product.prodname_dotcom %} に関するイベントは、誰かがコミットをリポジトリにプッシュしたときや、問題やプル要求が作成された場合などに発生します。
- スケジュールされたイベントが開始されます。
- 外部イベントが発生します。

{% data variables.product.prodname_dotcom %}でイベントが発生した後にワークフローをトリガーするには、ワークフロー名の後に `` とイベント値を追加します。 たとえば、このワークフローは、変更がリポジトリ内のブランチにプッシュされたときにトリガーされます。



```yaml
name: 説明ワークフロー名
: プッシュ
```


ワークフローをスケジュールするには、ワークフロー ファイルで POSIX cron 構文を使用します。 スケジュールされたワークフローを実行できる最短の間隔は、5 分ごとに 1 回です。 たとえば、このワークフローは 1 時間ごとにトリガーされます。



```yaml
オン:
  スケジュール:
    - cron: '0 * * * * *'
```




#### ワークフローの手動実行

ワークフローを手動で実行するには、最初にワークフローを構成して、 `workflow_dispatch` イベントを使用する必要があります。 カスタム定義の入力プロパティ、デフォルトの入力値、および必要な入力をワークフローで直接構成できます。 ワークフローが実行されると、 `github.event.inputs` コンテキスト内の入力値にアクセスできます。 詳細については、「ワークフロー</a>をトリガーするイベント[」および「 {% data variables.product.prodname_dotcom %} アクション](/actions/reference/events-that-trigger-workflows/#workflow_dispatch)のコンテキストと式の構文をする」を参照してください。</p> 

この例では、 `名` 定義し、入力</code> ` <code>github.event.inputs.name` を使用してそれらを出力し、github.event.inputs.home</code> コンテキスト `します。 ` `名が指定されていない場合は、既定値の 「Mona the Octocat」 が表示されます。</p>

<p spaces-before="0">{% raw %}</p>

<pre><code class="yaml">名前: 手動でトリガーされたワークフロー
:
  workflow_dispatch:
    入力:
      の説明:
        
        説明: 必須: true
        デフォルト: 'モナ・ザ・オクトキャット' ホーム
      : 'モナ・ザ・オクトキャット'
        ホーム: '場所'
        必要: 偽

ジョブ:
  say_hello:
    実行: ubuntu最新
    ステップ:
    - 実行 |
        エコー "こんにちは ${{ github.event.inputs.name }}!
        エコー "- ${{ github.event.inputs.home }}で!
`</pre> 

{% endraw %}

`workflow_dispatch` イベントは、 {% data variables.product.prodname_dotcom %} または REST API を使用して[アクション]タブからトリガーできます。 REST API の使用の詳細については、「ワークフローディスパッチ イベントの作成</a>」を参照してください。 REST API を使用する場合は、 `入力` を構成し、要求本文パラメーターとして ref</code> `します。 入力を省略すると、ワークフロー ファイルで定義されている既定値が使用されます。</p>

<p spaces-before="0">{% data variables.product.prodname_dotcom %}で <code>workflow_dispatch` イベントをトリガするには、ワークフローが既定のブランチに含まれる必要があります。 ワークフローの実行を手動でトリガーするには、次の手順に従います。</p> 

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.actions-tab %}

1. 左側のサイドバーで、実行するワークフローをクリックします。 ![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)

1. ワークフロー実行の一覧の上にある [ワークフローの実行 ****を実行する] を選択します。 ![アクション ワークフローのディスパッチ](/assets/images/actions-workflow-dispatch.png)

1. ワークフローを実行する分岐を選択し、ワークフローで使用される入力パラメータを入力します。 [ ワークフロー</strong>**実行 ] をクリックします。 ![アクションはワークフローを手動で実行します](/assets/images/actions-manually-run-workflow.png)</p></li> </ol> 
   
   

#### 外部イベントからのワークフローのトリガー

外部イベントが発生した後にワークフローをトリガーするには、「リポジトリー・ディスパッチ・イベントの作成」REST API エンドポイントを呼び出して、 `repository_dispatch` webhook イベントを呼び出すことができます。 詳細については、「リポジトリディスパッチ イベント</a>を作成」を参照してください。</p> 

詳細と例については、「ワークフローをトリガーするイベントを</a>」を参照してください。</p> 



### 特定のブランチ、タグ、およびパスのフィルタリング

ワークフローは、特定のブランチでのみ実行するように設定できます。

たとえば、このワークフローは、 `テスト` ディレクトリにファイルを含むプッシュが `マスター` ブランチで行われた場合、または `v1` タグにプッシュされたときに実行されます。



```yaml
on:
  プッシュ:
    ブランチ:
      - マスター
    タグ:
      - イベントで考慮する # ファイルパスを
    v1。 省略可能。既定値は、すべてになります。
    パス:
      - 'テスト/*'
```


ブランチ、タグ、およびパス フィルターの構文の詳細については、「[`を参照してください。<push|pull_request>."" と "<a href="/articles/workflow-syntax-for-github-actions#onpushpull_requestpaths"><code>を<branches|tags>`](/articles/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)します。<push|pull_request>.パス</code></a>.



### ランナーの選択

ワークフローは、 {% data variables.product.prodname_dotcom %}ホストランナーまたは自己ホスト型ランナーで実行できます。 ジョブは、マシン上または Docker コンテナーで直接実行できます。

ワークフローの各ジョブに対して、実行</code>`を使用して、ランナーを指定できます。 ラン <code>実行`の詳細については、「 {% data variables.product.prodname_actions %}</a>のワークフロー構文の」を参照してください。</p> 

{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。



#### {% data variables.product.prodname_dotcom %}ホストランナーの使用

Linux、Windows、macOS など、さまざまな種類とバージョンの仮想ホストマシンから選択できます。 ワークフロー内の各ジョブは仮想環境の新しいインスタンスで実行され、ジョブ内のステップはファイルシステムを使用して情報を共有できます。 詳細については、「ホストされている {% data variables.product.prodname_actions %}のランナーの仮想環境を[する」](/articles/virtual-environments-for-github-actions)参照してください。

たとえば、ubuntu-latest</code> `使用して、Ubuntu {% data variables.product.prodname_dotcom %}ホストランナーの最新バージョンを指定できます。</p>

<pre><code class="yaml">ランオン:Ubuntu-最新
`</pre> 



#### 自己ホスト型ランナーの使用

ラベルを使用して、特定のタイプのセルフホストランナーにジョブをルーティングできます。 すべてのセルフホストランナーは、 `のセルフホスト型` ラベルを取得し、各セルフホストランナーにはオペレーティングシステムとシステムアーキテクチャのラベルがあります。 詳細については、「ワークフロー</a>での自己ホスト型ランナーの使用」を参照してください。</p> 

たとえば、Linux オペレーティングシステムと ARM32 アーキテクチャを持つ自己ホスト型ランナーを追加した場合、 `の自己ホスト型`、 `Linux`、ARM32</code> ラベルを `して、そのランナーを選択できます。</p>

<pre><code class="yaml">ランオン: [自己ホスト型、Linux、ARM32]
`</pre> 



### ビルド マトリックスの構成

複数のオペレーティング システム、プラットフォーム、および言語バージョン間で同時にテストを行うために、ビルド マトリックスを構成できます。

ビルド マトリックスを使用すると、さまざまなソフトウェア構成とオペレーティング システム構成でコードをテストできます。 たとえば、ワークフローでは、サポートされている複数のバージョンの言語、オペレーティング システム、またはツールに対してジョブを実行できます。 構成ごとに、ジョブのコピーが実行され、状況が報告されます。

ワークフロー ファイルでビルド マトリックスを指定し、 `の戦略の下にある構成オプションをリストする配列を指定`。 たとえば、このビルドマトリックスは、Linux オペレーティングシステムの Node.js と Ubuntu のバージョンが異なるジョブを実行します。

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}


```yaml
ランオン: ${{ matrix.os }}
戦略:
  マトリクス:
    os: [ubuntu-16.04, ubuntu-18.04]
    ノード: [6, 8, 10]
```


{% endraw %}

詳細については、「 {% data variables.product.prodname_actions %}</a>のワークフロー構文」を参照してください。</p> 



### チェックアウト アクションの使用

ワークフローで使用できる標準アクションがいくつかあります。 チェックアウト アクションは、次の場合に他のアクションの前にワークフローに含める必要がある標準アクションです。

- リポジトリを構築してテストするときや、継続的インテグレーションを使用する場合など、ワークフローにはリポジトリのコードのコピーが必要です。
- ワークフロー内に、同じリポジトリで定義されたアクションが少なくとも 1 つあります。 詳細については、「ワークフロー</a>でのアクションの参照をする」を参照してください。</li> </ul> 
  
  標準のチェックアウトアクションを追加仕様なしで使用するには、次の手順を実行します。
  
  
```yaml
- 用途: アクション/checkout@v2
```


この例では、 `v2` を使用すると、安定したバージョンのチェックアウト アクションを使用できます。 詳細については、「チェックアウト アクションの [」を参照](https://github.com/actions/checkout)。



### ワークフローのアクションのタイプの選択

プロジェクトのニーズに合わせてワークフローで使用できるアクションには、次の種類があります。

- Docker コンテナーアクション
- アクション
- 複合実行ステップアクション

詳細については、「アクション</a>について」を参照してください。</p> 

ワークフローで使用するアクションの種類を選択する場合は、パブリックリポジトリまたは Docker ハブで既存のアクションを探索し、プロジェクトに合わせてこれらのアクションをカスタマイズすることをお勧めします。

[github.com/actions](https://github.com/actions) 組織内の {% data variables.product.prodname_dotcom %} によって作成されたアクションを参照して使用できます。 Docker ハブにアクセスするには、Docker サイトの「[Docker ハブ](https://www.docker.com/products/docker-hub)」を参照してください。



### ワークフロー内のアクションの参照

ワークフロー ファイル内のアクションを正しい構文で参照するには、アクションが定義されている場所を考慮する必要があります。

ワークフローでは、次の中で定義されたアクションを使用できます。

- パブリック リポジトリ
- ワークフロー ファイルがアクションを参照するリポジトリと同じ
- Docker ハブで公開された Docker コンテナー イメージ

プライベート リポジトリで定義されたアクションを使用するには、ワークフロー ファイルとアクションの両方が同じリポジトリ内にある必要があります。 他のプライベートリポジトリが同じ組織にある場合でも、ワークフローで他のプライベートリポジトリで定義されたアクションを使用することはできません。

アクションが更新されてもワークフローの安定性を維持するには、ワークフロー ファイルで Git ref または Docker タグ番号を指定することで、使用しているアクションのバージョンを参照できます。 例については、「 {% data variables.product.prodname_actions %}</a>のワークフロー構文」を参照してください。</p> 

{% if currentVersion == "free-pro-team@latest" %}



{% data reusables.dependabot.version-updates-for-actions %}



{% endif %}

詳細な構成オプションについては、「 {% data variables.product.prodname_actions %}</a>のワークフロー構文」を参照してください。</p> 



#### パブリック リポジトリからのアクションの参照

アクションがパブリックリポジトリで定義されている場合は、構文 `{owner}/{repo}@{ref}` または `{owner}/{repo}/{path}@{ref}`を使用してアクションを参照する必要があります。



```yaml
ジョブ:
  my_first_job:
    名:
      名:
        - 用途: アクション/セットアップnode@v1
          :
            ノードバージョン: 10.x
```


完全なワークフローの例については、テンプレート リポジトリの [設定ノード](https://github.com/actions/setup-node) 参照してください。



#### ワークフロー ファイルでアクションを使用する同じリポジトリ内のアクションの参照

ワークフロー ファイルがアクションを使用するのと同じリポジトリでアクションが定義されている場合は、ワークフロー ファイル内の`{owner}/{repo}@{ref}` または `./path/to/dir` 構文を使用してアクションを参照できます。

リポジトリ ファイル構造の例:



```
|-- ハローワールド (リポジトリ)
|  github
|      └─ ワークフロー
|          └─ 私の最初のワークフロー.yml
|      └─
アクション |          |__ ハローワールドアクション
|              └── アクション.yml
```


ワークフロー ファイルの例:



```yaml
ジョブ:
  ビルド:
    実行: ubuntu 最新
    ステップ:
      # このステップは、リポジトリのコピーをチェックアウトします。
      - 用途: アクション/checkout@v2
      # このステップは、アクションを含むディレクトリを参照します。
      - 用途: ./.github/アクション/ハローワールドアクション
```




#### Docker ハブでのコンテナーの参照

アクションが Docker Hub の公開された Docker コンテナー イメージで定義されている場合は、ワークフロー ファイル内の `docker://{image}:{tag}` 構文を使用してアクションを参照する必要があります。 コードとデータを保護するために、ワークフローで使用する前に Docker Hub から Docker コンテナー イメージの整合性を確認することを強くお勧めします。



```yaml
ジョブ:
  my_first_job:
    ステップ:
      - 名前: 使用
        私の最初のステップ: docker://alpine:3.8
```


Docker アクションの例については、「docker-image.yml ワークフロー</a> [」および「docker コンテナー アクションの作成](https://github.com/actions/starter-workflows/blob/master/ci/docker-image.yml)」参照してください。</p> 

詳細については、「 {% data variables.product.prodname_actions %}</a>のワークフロー構文」を参照してください。</p> 



### リポジトリへのワークフローステータスバッジの追加

{% data reusables.repositories.actions-workflow-status-badge-into %}

ワークフローで `名` キーワードを使用する場合は、ワークフローを名前で参照する必要があります。 ワークフローの名前に空白が含まれている場合は、URL エンコード文字列 `%20`にスペースを置き換える必要があります。 `名` キーワードの詳細については、「 {% data variables.product.prodname_actions %}</a>のワークフロー構文」を参照してください。</p> 



```
https://github.com/<OWNER>/<REPOSITORY>/ワークフロー/<WORKFLOW_NAME>/badge.svg
```


または、ワークフローに `名が含まれていない場合`は、リポジトリのルート ディレクトリに対する相対ファイル パスを使用してワークフロー ファイルを参照する必要があります。

{% note %}

**注意:** ワークフローに `名が含まれていない場合、ファイル パスを使用してワークフロー ファイルを参照`機能しません。

{% endnote %}



```
https://github.com/<OWNER>/<REPOSITORY>/ワークフロー/<WORKFLOW_FILE_PATH>/badge.svg
```




#### ワークフロー名を使用した例

この Markdown の例では、"すべてのユーザーを出す" という名前のワークフローのステータス バッジを追加します。 リポジトリの `OWNER` は、組織</code> `アクションであり、 <code>リポジトリ` 名はハローワールド</code>`。</p>

<pre><code>![ワークフロー名の例](https://github.com/actions/hello-world/workflows/Greet%20E非常に一つ/バッジ.svg)
`</pre> 



#### ワークフロー ファイル パスの使用例

この Markdown の例では、ファイル パスを持つワークフローのステータス バッジを追加します `.github/workflow/main.yml`。 リポジトリの `OWNER` は、組織</code> `アクションであり、 <code>リポジトリ` 名はハローワールド</code>`。</p>

<pre><code>![ワークフロー ファイルのパスの例](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
`</pre> 



#### `ブランチ` パラメータを使用した例

この Markdown の例では、機能 1</code>の名前 `分岐のステータス バッジを追加します。</p>

<pre><code>![分岐パラメータの例](https://github.com/actions/hello-world/workflows/Greet%20E非常に一人/バッジ.svg?ブランチ=フィーチャー-1)
`</pre> 



#### `イベント` パラメータの使用例

この Markdown の例では、 `pull_request` イベントによってトリガーされたワークフロー実行の状態を示すバッジを追加します。



```
![イベント パラメーターの例](https://github.com/actions/hello-world/workflows/Greet%20E非常に一人/バッジ.svg?イベント=pull_request)
```


{% if currentVersion == "free-pro-team@latest" %}


### 参考リンク

- "[ {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)の請求を管理する " 
  
  {% endif %}
