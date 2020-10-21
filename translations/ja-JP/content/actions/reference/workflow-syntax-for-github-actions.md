---
title: GitHub Actionsのワークフロー構文
shortTitle: ワークフロー構文
intro: ワークフローは、1つ以上のジョブからなる設定可能な自動化プロセスです。 ワークフローの設定を定義するには、YAMLファイルを作成しなければなりません。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフロー用のYAML構文について

ワークフローファイルはYAML構文を使用し、ファイル拡張子が`.yml`または`.yaml`である必要があります。 YAMLについて詳しくなく、学んでいきたい場合は、「[Learn YAML in five minutes (5分で学ぶYAML)](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)」をお読みください。

ワークフローファイルは、リポジトリの`.github/workflows`ディレクトリに保存する必要があります。

### **`name`**

ワークフローの名前。 {% data variables.product.prodname_dotcom %}では、リポジトリのアクションページにワークフローの名前が表示されます。 `name`を省略すると、{% data variables.product.prodname_dotcom %}はリポジトリのルートに対するワークフローファイルの相対パスをその値に設定します。

### **`on`**

**必須** ワークフローをトリガーする{% data variables.product.prodname_dotcom %}イベントの名前。 指定できるのは、1つのイベント`string`、複数イベントの`array`、イベント`types`の`array`です。あるいは、ワークフローをスケジュールする、またはワークフロー実行を特定のファイルやタグ、ブランチ変更に限定するイベント設定`map`も指定できます。 使用可能なイベントの一覧は、「[ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows)」を参照してください。

{% data reusables.github-actions.actions-on-examples %}

### **`on.<event_name>.types`**

ワークフローの実行をトリガーする特定のアクティビティ。 ほとんどの GitHub イベントは、2 つ以上のアクティビティタイプからトリガーされます。  たとえば、releaseリソースに対するイベントは、release が `published`、`unpublished`、`created`、`edited`、`deleted`、または `prereleased` の場合にトリガーされます。 `types`キーワードを使用すると、ワークフローを実行させるアクティブの範囲を狭くすることができます。 webhook イベントをトリガーするアクティビティタイプが1つだけの場合、`types`キーワードは不要です。

イベント`types`の配列を使用できます。 各イベントとそのアクティビティタイプの詳細については、「[ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows#webhook-events)」を参照してください。

```yaml
# Trigger the workflow on pull request activity
on:
  release:
    # Only use the types keyword to narrow down the activity types that will trigger your workflow.
    types: [published, created, edited]
```

### **`on.<push|pull_request>.<branches|tags>`**

`push`および`pull_request`イベントを使用する場合、特定のブランチまたはタグで実行するワークフローを設定できます。 `pull_request`では、ベース上のブランチ及びタグだけが評価されます。 `tags`もしくは`branches`だけを定義すると、定義されていないGit refに影響するイベントに対して、ワークフローが実行されません。

`branches`、`branches-ignore`、`tags`、および `tags-ignore`のキーワードは、`*`と`**`のワイルドカード文字を使って複数のブランチやタグ名と一致させるglobパターンを受け付けます。 詳しい情報については、「[フィルタパターンのチートシート](#filter-pattern-cheat-sheet)」を参照してください。

#### ブランチとタグを含める例

`branches`および`tags`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 たとえば、`branches`で`mona/octocat`とパターンを定義すると、`refs/heads/mona/octocat`というGit refにマッチします。 `releases/**`というパターンは、`refs/heads/releases/10`というGit refにマッチします。

```yaml
on:
  push:
    # refs/heads とマッチするパターンのシークエンス
    branches:    
      # メインブランチのプッシュイベント
      - main
      # refs/heads/mona/octocat に一致するブランチにイベントをプッシュする
      - 'mona/octocat'
      # refs/heads/releases/10 に一致するブランチにイベントをプッシュする
      - 'releases/**'
    # refs/tags とマッチするパターンのシーケンス
    tags:        
      - v1             # イベントを v1 タグにプッシュする
      - v1.*           # イベントを v1.0、v1.1、および v1.9 タグにプッシュする
```

#### ブランチとタグを無視する例

パターンが`branches-ignore`または`tags-ignore`とマッチする場合は常に、ワークフローは実行されません。 `branches-ignore`および`tags-ignore`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 たとえば、`branches`で`mona/octocat`とパターンを定義すると、`refs/heads/mona/octocat`というGit refにマッチします。 `branches`のパターン`releases/**-alpha`は、`refs/releases/beta/3-alpha`というGit refにマッチします。

```yaml
on:
  push:
    # refs/heads にマッチするパターンのシーケンス
    branches-ignore:
      # refs/heads/mona/octocat にマッチするブランチにイベントをプッシュする
      - 'mona/octocat'
      # refs/heads/releases/beta/3-alpha refs/heads/mona/octocat にマッチするブランチにイベントをプッシュする
      - 'releases/**-alpha'
    # refs/heads にマッチするパターンのシーケンス
    tags-ignore:
      - v1.*           # イベントを v1.0、v1.1、v1.9 タグにプッシュする
```

#### ブランチとタグを除外する

タグやブランチへのプッシュおよびプルリクエストでワークフローが実行されることを防ぐために、2 種類のフィルタを使うことができます。
- `branches` または `branches-ignore` - ワークフロー内の同じイベントに対して、`branches` と `branches-ignore` のフィルタを両方使うことはできません。 肯定のマッチに対してブランチをフィルタし、ブランチを除外する必要がある場合は、`branches` フィルタを使います。 ブランチ名のみを除外する必要がある場合は、`branches-ignore` フィルタを使います。
- `tags` または `tags-ignore` - ワークフロー内の同じイベントに対して、`tags` と `tags-ignore` のフィルタを両方使うことはできません。 肯定のマッチに対してタグをフィルタし、タグを除外する必要がある場合は、`tags` フィルタを使います。 タグ名のみを除外する必要がある場合は、`tags-ignore` フィルタを使います。

#### 肯定と否定のパターンを使用する例

"`!`" の文字を使うことで、`tags` と `branches` を除外できます。 パターンを定義する順序により、結果に違いが生じます。
  - 肯定のマッチングパターンの後に否定のマッチングパターン ("`!`" のプレフィクス) を定義すると、Git ref を除外します。
  - 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、Git ref を再び含めます。

以下のワークフローは、`releases/10` や `releases/beta/mona` へのプッシュで実行されますが、`releases/10-alpha` や `releases/beta/3-alpha` へのプッシュでは実行されません。肯定のマッチングパターンの後に、否定のマッチングパターン `!releases/**-alpha` が続いているからです。

```yaml
on:
  push:
    branches:    
    - 'releases/**'
    - '!releases/**-alpha'
```

### **`on.<push|pull_request>.paths`**

`push` および `pull_request` イベントを使用する場合、1 つ以上の変更されたファイルが `paths-ignore` にマッチしない場合や、1 つ以上の変更されたファイルが、設定された `paths` にマッチする場合にワークフローを実行するように設定できます。 タグへのプッシュに対して、パスのフィルタは評価されません。

`paths-ignore` および `paths` キーワードは、`*` と `**` のワイルドカード文字を使って複数のパス名と一致させる glob パターンを受け付けます。 詳しい情報については、「[フィルタパターンのチートシート](#filter-pattern-cheat-sheet)」を参照してください。

#### バスを無視する例

パス名が `paths-ignore` のパターンとマッチする場合は常に、ワークフローは実行されません。 {% data variables.product.prodname_dotcom %} は、`paths-ignore` に定義されているパターンを、パス名に対して評価します。 以下のパスフィルタを持つワークフローは、リポジトリのルートにある `docs`ディレクトリ外のファイルを少なくとも1つ含む`push`イベントでのみ実行されます。

```yaml
on:
  push:
    paths-ignore:
    - 'docs/**'
```

#### パスを含む例

`paths`フィルタのパターンにマッチするパスが1つでもあれば、ワークフローは実行されます。 JavaScriptファイルをプッシュしたときにビルドを走らせるには、ワイルドカードパターンが使えます。

```yaml
on:
  push:
    paths:
    - '**.js'
```

#### パスの除外

パスは、2種類のフィルタで除外できます。 これらのフィルタをワークフロー内の同じイベントで両方使うことはできません。
- `paths-ignore` - パス名を除外する必要だけがある場合には`paths-ignore`フィルタを使ってください。
- `paths` - 肯定のマッチのパスとパスの除外のフィルタが必要な場合は`paths`フィルタを使ってください。

#### 肯定と否定のパターンを使用する例

`!`文字を使って、`paths`を除外できます。 パターンを定義する順序により、結果に違いが生じます:
  - 肯定のマッチの後に否定のマッチングパターン（`!`がプレフィックスされている）を置くと、パスが除外されます。
  - 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、パスを再び含めます。

この例は、`push`イベントに`sub-project`ディレクトリあるいはそのサブディレクトリ内のファイルが含まれ、そのファイルが`sub-project/docs`ディレクトリ内にあるのでない場合に実行されます。 たとえば`sub-project/index.js`もしくは`sub-project/src/index.js`を変更するプッシュはワークフローを実行させますが、`sub-project/docs/readme.md`だけを変更するプッシュは実行させません。

```yaml
on:
  push:
    paths:
    - 'sub-project/**'
    - '!sub-project/docs/**'
```

#### Git diffの比較

{% note %}

**ノート：** 1,000以上のコミットをプッシュする場合、あるいは{% data variables.product.prodname_dotcom %}がタイムアウトのためにdiffを生成できない（あまりにdiffが大きい）場合、そのワークフローは常に実行されます。

{% endnote %}

フィルタは、変更されたファイルを`paths-ignore`あるいは`paths`リストに対して評価することによって、ワークフローを実行すべきか判断します。 ファイルが変更されていない場合、ワークフローは実行されません。

{% data variables.product.prodname_dotcom %}はプッシュに対してはツードットdiff、プルリクエストに対してはスリードットdiffを使って変更されたファイルのリストを生成します。
- **プルリクエスト：** スリードットdiffは、トピックブランチの最新バージョンとトピックブランチがベースブランチと最後に同期されたコミットとの比較です。
- **既存のブランチへのプッシュ：** ツードットdiffは、headとベースのSHAを互いに直接比較します。
- **新しいブランチへのプッシュ：** 最も深いプッシュの先祖の親に対するツードットdiffです。

詳しい情報については「[プルリクエスト中のブランチの比較について](/articles/about-comparing-branches-in-pull-requests)」を参照してください。

### **`on.schedule`**

{% data reusables.repositories.actions-scheduled-workflow-example %}

cron構文に関する詳しい情報については、「[ワークフローをトリガーするイベント](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)」を参照してください。

### **`env`**

ワークフロー中のすべてのジョブやステップから利用できる環境変数の`map`です。 1つのジョブあるいはステップからだけ利用できる環境変数を設定することもできます。 詳しい情報については「[`jobs.<job_id>.env`](#jobsjob_idenv)」及び「[`jobs.<job_id>.steps.env`](#jobsjob_idstepsenv)を参照してください。

{% data reusables.repositories.actions-env-var-note %}

#### サンプル

```yaml
env:
  SERVER: production
```

### **`defaults`**

デフォルト設定の`map`で、ワークフロー中のすべてのジョブに適用されます。 1つのジョブだけで利用できるデフォルト設定を設定することもできます。 詳しい情報については[`jobs.<job_id>.defaults`](#jobsjob_iddefaults)を参照してください。

{% data reusables.github-actions.defaults-override %}

### **`defaults.run`**

ワークフロー中のすべての[`run`](#jobsjob_idstepsrun)ステップに対するデフォルトの`shell`及び`working-directory`オプションを提供することができます。 1つのジョブだけで利用できる`run`のデフォルト設定を設定することもできます。 詳しい情報については[`jobs.<job_id>.defaults.run`](#jobsjob_iddefaultsrun)を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.github-actions.defaults-override %}

#### サンプル

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```

### **`jobs`**

1つのワークフロー実行は、1つ以上のジョブからなります。 デフォルトでは、ジョブは並行して実行されます。 ジョブを逐次的に実行するには、`jobs.<job_id>.needs`キーワードを使用して他のジョブに対する依存関係を定義します。

それぞれのジョブは、`runs-on`で指定された環境で実行されます。

ワークフローの利用限度内であれば、実行するジョブ数に限度はありません。 For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

ワークフローの実行中で動作しているジョブのユニークな識別子が必要な場合は、{% data variables.product.prodname_dotcom %} APIが利用できます。 詳しい情報については、「[ワークフロージョブ](/v3/actions/workflow-jobs)」を参照してください。

### **`jobs.<job_id>`**

各ジョブには、対応するIDがあります。 `job_id`キーは文字列型で、その値はジョブの設定データのマップとなるものです。 `<job_id>`は、`jobs`オブジェクトごとに一意の文字列に置き換える必要があります。 `<job_id>`は、英字または`_`で始める必要があり、英数字と`-`、`_`しか使用できません。

#### サンプル

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

### **`jobs.<job_id>.name`**

{% data variables.product.prodname_dotcom %}に表示されるジョブの名前。

### **`jobs.<job_id>.needs`**

このジョブの実行前に正常に完了する必要があるジョブを示します。 文字列型または文字列の配列です。 1つのジョブが失敗した場合、失敗したジョブを続行するような条件文を使用していない限り、そのジョブを必要としている他のジョブはすべてスキップされます。

#### サンプル

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

この例では、`job1`が正常に完了してから`job2`が始まり、`job3`は`job1`と`job2`が完了するまで待機します。

つまり、この例のジョブは逐次実行されるということです。

1. `job1`
2. `job2`
3. `job3`

### **`jobs.<job_id>.runs-on`**

**必須** ジョブを実行するマシンの種類。 マシンは{% data variables.product.prodname_dotcom %}ホストランナーあるいはセルフホストランナーのいずれかです。

{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

#### {% data variables.product.prodname_dotcom %}ホストランナー

{% data variables.product.prodname_dotcom %}ホストランナーを使う場合、それぞれのジョブは`runs-on`で指定された仮想環境の新しいインスタンスで実行されます。

利用可能な{% data variables.product.prodname_dotcom %}ホストランナーの種類は以下のとおりです。

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}

##### **サンプル**

```yaml
ランオン:Ubuntu-最新
```

詳しい情報については「[{% data variables.product.prodname_dotcom %}ホストランナーの仮想環境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」を参照してください。

#### セルフホストランナー

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

##### **サンプル**

```yaml
runs-on: [self-hosted, linux]
```

詳しい情報については「[セルフホストランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)」及び「[ワークフロー内でのセルフホストランナーの利用](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)」を参照してください。

### **`jobs.<job_id>.outputs`**

ジョブからの出力の`map`です。 ジョブの出力は、そのジョブに依存しているすべての下流のジョブから利用できます。 ジョブの依存関係の定義に関する詳しい情報については[`jobs.<job_id>.needs`](#jobsjob_idneeds)を参照してください。

ジョブの出力は文字列であり、式を含むジョブの出力は、それぞれのジョブの終了時にランナー上で評価されます。 シークレットを含む出力はランナー上で編集され、{% data variables.product.prodname_actions %}には送られません。

依存するジョブでジョブの出力を使いたい場合には、`needs`コンテキストが利用できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#needs-context)」を参照してください。

#### **サンプル**

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # ステップの出力をジョブの出力にマップ
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
    - id: step1
      run: echo "::set-output name=test::hello"
    - id: step2
      run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
    - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}

### **`jobs.<job_id>.env`**

ジョブ中のすべてのステップから利用できる環境変数の`map`です。 ワークフロー全体あるいは個別のステップのための環境変数を設定することもできます。 詳しい情報については「[`env`](#env)」及び「[`jobs.<job_id>.steps.env`](#jobsjob_idstepsenv)」を参照してください。

{% data reusables.repositories.actions-env-var-note %}

#### **サンプル**

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

### **`jobs.<job_id>.defaults`**

ジョブ中のすべてのステップに適用されるデフォルト設定の`map`。 ワークフロー全体に対してデフォルト設定を設定することもできます。 詳しい情報については[`defaults`](#defaults)を参照してください。

{% data reusables.github-actions.defaults-override %}

### **`jobs.<job_id>.defaults.run`**

ジョブ中のすべての`run`ステップにデフォルトの`shell`と`working-directory`を提供します。 このセクションではコンテキストと式は許されていません。

ジョブ中のすべての[`run`](#jobsjob_idstepsrun)ステップにデフォルトの`shell`及び`working-directory`を提供できます。 ワークフロー全体について`run`のためのデフォルト設定を設定することもできます。 詳しい情報については[`jobs.defaults.run`](#defaultsrun)を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.github-actions.defaults-override %}

#### サンプル

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```

### **`jobs.<job_id>.if`**

条件文の`if`を使って、条件が満たされなければジョブを実行しないようにできます。 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.github-actions.expression-syntax-if %} 詳しい情報については「[{% data variables.product.prodname_actions %}のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

### **`jobs.<job_id>.steps`**

1つのジョブには、`steps` (ステップ) と呼ばれる一連のタスクがあります。 ステップでは、コマンドを実行する、設定タスクを実行する、あるいはリポジトリやパブリックリポジトリ、Dockerレジストリで公開されたアクションを実行することができます。 すべてのステップでアクションを実行するとは限りませんが、すべてのアクションはステップとして実行されます。 各ステップは、ランナー環境のそれ自体のプロセスで実行され、ワークスペースとファイルシステムにアクセスします。 ステップはそれ自体のプロセスで実行されるため、環境変数を変更しても、ステップ間では反映されません。 {% data variables.product.prodname_dotcom %}には、ジョブを設定して完了するステップが組み込まれています。

ワークフローの利用限度内であれば、実行するステップ数に限度はありません。 For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

#### サンプル

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
    - name: Print a greeting
      env:
        MY_VAR: Hi there! My name is
        FIRST_NAME: Mona
        MIDDLE_NAME: The
        LAST_NAME: Octocat
      run: |
        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

#### **`jobs.<job_id>.steps.id`**

ステップの一意の識別子。 `id`を使って、コンテキストのステップを参照することができます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

#### **`jobs.<job_id>.steps.if`**

条件文の`if`を使って、条件が満たされなければステップを実行しないようにできます。 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.github-actions.expression-syntax-if %} 詳しい情報については「[{% data variables.product.prodname_actions %}のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

##### コンテキストの使用例

 このステップは、イベントの種類が`pull_request`でイベントアクションが`unassigned`の場合にのみ実行されます。

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

##### ステータスチェック関数の使用例

`my backup step`は、ジョブの前のステップが失敗した場合にのみ実行されます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)」を参照してください。

```yaml
steps:
  - name: My first step
    uses: monacorp/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@master
```

#### **`jobs.<job_id>.steps.name`**

{% data variables.product.prodname_dotcom %}で表示されるステップの名前。

#### **`jobs.<job_id>.steps.uses`**

ジョブでステップの一部として実行されるアクションを選択します。 アクションとは、再利用可能なコードの単位です。 ワークフロー、パブリックリポジトリ、または[公開されているDockerコンテナイメージ](https://hub.docker.com/)と同じリポジトリで定義されているアクションを使用できます。

Git ref、SHA、またはDockerタグ番号を指定して、使用しているアクションのバージョンを含めることを強く推奨します。 バージョンを指定しないと、アクションのオーナーがアップデートを公開したときに、ワークフローが中断したり、予期せぬ動作をしたりすることがあります。
- リリースされたアクションバージョンのコミットSHAを使用するのが、安定性とセキュリティのうえで最も安全です。
- 特定のメジャーアクションバージョンを使用すると、互換性を維持したまま重要な修正とセキュリティパッチを受け取ることができます。 ワークフローがまだ動作していることも確認できます。
- アクションのデフォルトブランチを使用すると便利なこともありますが、別のユーザが大きな変更を加えた新しいメジャーバージョンをリリースすると、ワークフローが中断する場合があります。

入力が必要なアクションもあり、入力を[`with`](#jobsjob_idstepswith)キーワードを使って設定する必要があります。 必要な入力を判断するには、アクションのREADMEファイルをお読みください。

アクションは、JavaScriptのファイルもしくはDockerコンテナです。 使用するアクションがDockerコンテナの場合は、Linux環境で実行する必要があります。 詳細については[`runs-on`](#jobsjob_idruns-on)を参照してください。

##### バージョンされたアクションを使用する例

```yaml
steps:    
  # 特定のコミットを参照する
  - uses: actions/setup-node@74bc508
  # リリースのメジャーバージョンを参照する
  - uses: actions/setup-node@v1
  # リリースのマイナーバージョンを参照する
  - uses: actions/setup-node@v1.2
  # ブランチを参照する
  - uses: actions/setup-node@main
```

##### パブリックアクションを使用する例

`{owner}/{repo}@{ref}`

パブリック{% data variables.product.prodname_dotcom %}リポジトリのブランチ、ref、SHAを指定できます。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # 公開リポジトリのデフォルトブランチを使用する
        uses: actions/heroku@master
      - name: My second step
        # パブリックリポジトリの特定のバージョンタグを使用する
        uses: actions/aws@v2.0.1
```

##### サブディレクトリのパブリックアクションを使用する例

`{owner}/{repo}/{path}@{ref}`

パブリック{% data variables.product.prodname_dotcom %}リポジトリで特定のブランチ、ref、SHAにあるサブディレクトリ。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

##### ワークフローと同じリポジトリにあるアクションを使用する例

`./path/to/dir`

ワークフローのリポジトリにあるアクションを含むディレクトリのパス。 アクションを使用する前にリポジトリをチェックアウトする必要があります。

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

##### Docker Hubアクションを使用する例

`docker://{image}:{tag}`

[Docker Hub](https://hub.docker.com/)で公開されているDockerイメージ。

```yaml
ジョブ:
  my_first_job:
    ステップ:
      - 名前: 使用
        私の最初のステップ: docker://alpine:3.8
```

##### Dockerパブリックレジストリアクションを使用する例

`docker://{host}/{image}:{tag}`

パブリックレジストリのDockerイメージ。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### **`jobs.<job_id>.steps.run`**

オペレーティングシステムのシェルを使用してコマンドラインプログラムを実行します。 `name`を指定しない場合、ステップ名はデフォルトで`run`コマンドで指定された文字列になります。

コマンドは、デフォルトでは非ログインシェルを使用して実行されます。 別のシェルを選択して、コマンドを実行するシェルをカスタマイズできます。 詳しい情報については「[特定のシェルの利用](#using-a-specific-shell)」を参照してください。

`run`キーワードは、それぞれがランナー環境での新しいプロセスとシェルです。 複数行のコマンドを指定すると、各行が同じシェルで実行されます。 例:

* 1行のコマンド：

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* 複数行のコマンド：

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

`working-directory`キーワードを使えば、コマンドが実行されるワーキングディレクトリを指定できます。

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

##### 特定のシェルを使用する

`shell`キーワードを使用して、ランナーのオペレーティングシステムのデフォルトシェルを上書きできます。 組み込みの`shell`キーワードを使用するか、カスタムセットのシェルオプションを定義することができます。

| サポートされているプラットフォーム | `shell` パラメータ | 説明                                                                                                                   | 内部で実行されるコマンド                                    |
| ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| すべて               | `bash`        | 非Windowsプラットフォームのデフォルトシェルで、`sh`へのフォールバックがあります。 Windowsでbashシェルを指定すると、Windows用Gitに含まれるbashシェルが使用されます。                 | `bash --noprofile --norc -eo pipefail {0}`      |
| すべて               | `pwsh`        | PowerShell Coreです。 {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.ps1`を追加します。                              | `pwsh -command ". '{0}'"`                       |
| すべて               | `python`      | Pythonのコマンドを実行します。                                                                                                   | `python {0}`                                    |
| Linux / macOS     | `sh`          | 非Windowsプラットフォームにおいてシェルが提供されておらず、パス上で`bash`が見つからなかった場合のフォールバック動作です。                                                  | `sh -e {0}`                                     |
| Windows           | `cmd`         | {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.cmd`を追加し、`{0}`を置き換えます。                                      | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows           | `powershell`  | これはWindowsで使われるデフォルトのシェルです。 デスクトップPowerShellです。 {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.ps1`を追加します。 | `powershell -command ". '{0}'"`.                |

##### bashを使用してスクリプトを実行する例

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

##### Windowsの`cmd`を使用してスクリプトを実行する例

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

##### PowerShell Coreを使用してスクリプトを実行する例

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

##### Python scriptを実行する例

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

##### カスタムシェル

`command […options] {0} [..more_options]`を使用すると、テンプレート文字列に`shell`値を設定できます。 {% data variables.product.prodname_dotcom %}は、空白区切りで最初の文字列をコマンドとして解釈し、`{0}`にある一時的なスクリプトのファイル名を挿入します。

##### 終了コードとエラーアクションの環境設定

組み込みのshellキーワードについては、{% data variables.product.prodname_dotcom %}がホストする実行環境で以下のデフォルトが提供されます。 シェルスクリプトを実行する際には、以下のガイドラインを使ってください。

- `bash`/`sh`:
  - `set -e o pipefail`を使用するフェイルファースト動作: `bash`のデフォルトで、組み込みの`shell`。 Windows以外のプラットフォームでオプションを指定しない場合のデフォルトでもあります。
  - フェイルファーストをオプトアウトし、シェルのオプションにテンプレート文字列を指定して完全に制御することもできます。 たとえば、`bash {0}`とします。
  - shライクのシェルは、スクリプトで実行された最後のコマンドの終了コードで終了します。これが、アクションのデフォルトの動作でもあります。 runnerは、この終了コードに基づいてステップのステータスを失敗/成功としてレポートします。

- `powershell`/`pwsh`
  - 可能な場合のフェイルファースト動作。 `pwsh`および`powershell`の組み込みシェルの場合は、スクリプトの内容の前に`$ErrorActionPreference = 'stop'` が付加されます。
  - ここでは、アクションステータスがスクリプトの最後の終了コードを反映するように、PowerShellスクリプトに`if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }`を付加しています。
  - 必要な場合には、組み込みシェルを使用せずに、`pwsh -File {0}`や`powershell -Command "& '{0}'"`などのカスタムシェルを指定すれば、いつでもオプトアウトすることができます。

- `cmd`
  - 各エラーコードをチェックしてそれぞれに対応するスクリプトを書く以外、フェイルファースト動作を完全にオプトインする方法はないようです。 デフォルトでその動作を指定することはできないため、この動作はスクリプトに記述する必要があります。
  - `cmd.exe`は、実行した最後のプログラムのエラーレベルで終了し、runnerにそのエラーコードを返します。 この動作は、これ以前の`sh`および`pwsh`のデフォルト動作と内部的に一貫しており、`cmd.exe`のデフォルトなので、この動作には影響しません。

#### **`jobs.<job_id>.steps.with`**

アクションによって定義される入力パラメータの`map`。 各入力パラメータはキー/値ペアです。 入力パラメータは環境変数として設定されます。 変数の前には`INPUT_`が付けられ、大文字に変換されます。

##### サンプル

`hello_world`アクションで定義される3つの入力パラメータ (`first_name`、`middle_name`、`last_name`) を定義します。 `hello-world`アクションからは、これらの入力変数は`INPUT_FIRST_NAME`、`INPUT_MIDDLE_NAME`、`INPUT_LAST_NAME`という環境変数としてアクセスできます。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat      
```

#### **`jobs.<job_id>.steps.with.args`**

Dockerコンテナへの入力を定義する`文字列`。 {% data variables.product.prodname_dotcom %}は、コンテナの起動時に`args`をコンテナの`ENTRYPOINT`に渡します。 このパラメータは、`文字列の配列`をサポートしません。

##### サンプル

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: monacorp/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

`args`は、`Dockerfile`中の`CMD`命令の場所で使われます。 `Dockerfile`中で`CMD`を使うなら、以下の優先順位順のガイドラインを利用してください。

1. 必須の引数をアクションのREADME中でドキュメント化し、`CMD`命令から除外してください。
1. `args`を指定せずにアクションを利用できるよう、デフォルトを使ってください。
1. アクションが`--help`フラグやそれに類するものを備えている場合は、アクションを自己ドキュメント化するためのデフォルトとして利用してください。

#### **`jobs.<job_id>.steps.with.entrypoint`**

`Dockerfile`中のDockerの`ENTRYPOINT`をオーバーライドします。あるいは、もしそれが指定されていなかった場合に設定します。 shellやexec形式を持つDockerの`ENTRYPOINT`命令とは異なり、`entrypoint`キーワードは実行する実行可能ファイルを定義する単一の文字列だけを受け付けます。

##### サンプル

```yaml
steps:
  - name: Run a custom command
    uses: monacorp/action-name@main
    with:
      entrypoint: /a/different/executable
```

この`entrypoint`キーワードはDockerコンテナのアクションを使おうとしていますが、これは入力を定義しないJavaScriptのアクションにも使えます。

#### **`jobs.<job_id>.steps.env`**

ランナー環境でステップが使う環境変数を設定します。 ワークフロー全体あるいはジョブのための環境変数を設定することもできます。 詳しい情報については「[`env`](#env)」及び「[`jobs.<job_id>.env`](#jobsjob_idenv)」を参照してください。

{% data reusables.repositories.actions-env-var-note %}

パブリックなアクションは、READMEファイル中で期待する環境変数を指定できます。 環境変数に秘密情報を設定しようとしている場合、秘密情報は`secrets`コンテキストを使って設定しなければなりません。 詳しい情報については「[環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)」及び「[{% data variables.product.prodname_actions %}のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

##### サンプル

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

#### **`jobs.<job_id>.steps.continue-on-error`**

ステップが失敗してもジョブが失敗にならないようにします。 `true`に設定すれば、このステップが失敗した場合にジョブが次へ進めるようになります。

#### **`jobs.<job_id>.steps.timeout-minutes`**

プロセスがkillされるまでにステップが実行できる最大の分数。

### **`jobs.<job_id>.timeout-minutes`**

{% data variables.product.prodname_dotcom %}で自動的にキャンセルされるまでジョブを実行する最長時間 (分)。 デフォルト: 360

### **`jobs.<job_id>.strategy`**

strategy (戦略) によって、ジョブのビルドマトリクスが作成されます。 各ジョブを実行する環境のバリエーションを定義できます。

#### **`jobs.<job_id>.strategy.matrix`**

様々なジョブの設定のマトリックスを定義できます。 マトリックスによって、単一のジョブの定義内の変数の置き換えを行い、複数のジョブを作成できるようになります。 たとえば、マトリックスを使って複数のサポートされているバージョンのプログラミング言語、オペレーティングシステム、ツールに対するジョブを作成できます。 マトリックスは、ジョブの設定を再利用し、設定した各マトリクスに対してジョブを作成します。

{% data reusables.github-actions.usage-matrix-limits %}

`matrix`内で定義した各オプションは、キーと値を持ちます。 定義したキーは`matrix`コンテキスト中のプロパティとなり、ワークフローファイルの他のエリア内のプロパティを参照できます。 たとえば、オペレーティングシステムの配列を含む`os`というキーを定義したなら、`matrix.os`プロパティを`runs-on`キーワードの値として使い、それぞれのオペレーティングシステムに対するジョブを作成できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

`matrix`を定義する順序は意味を持ちます。 最初に定義したオプションは、ワークフロー中で最初に実行されるジョブになります。

##### 複数のバージョンの Node.js を使用して実行する例

設定オプションに配列を指定すると、マトリクスを指定できます。 たとえばランナーがNode.jsのバージョン6、8、10,をサポートしている場合、これらのバージョンの配列を`matrix`で指定できます。

この例では、`node`キーにNode.jsの3つのバージョンの配列を設定することによって、3つのジョブのマトリクスを作成します。 このマトリックスを使用するために、この例では`matrix.node`コンテキストプロパティを`setup-node`アクションの入力パラメータである`node-version`に設定しています。 その結果、3 つのジョブが実行され、それぞれが異なるバージョンのNode.js を使用します。

{% raw %}
```yaml
strategy:
  matrix:
    node: [6, 8, 10]
steps:
  # GitHubホストランナーで使われるnodeのバージョンの設定
  - uses: actions/setup-node@v1
    with:
      # 設定するNode.jsのバージョン
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %}ホストランナーを使う場合にNode.jsのバージョンを設定する方法としては、`setup-node`アクションをおすすめします。 詳しい情報については[`setup-node`](https://github.com/actions/setup-node)アクションを参照してください。

##### 複数のオペレーティングシステムで実行する例

複数のランナーオペレーティングシステムでワークフローを実行するマトリックスを作成できます。 複数のマトリックス設定を指定することもできます。 この例では、6つのジョブのマトリックスを作成します。

- 配列`os`で指定された2つのオペレーティングシステム
- 配列`node`で指定された3つのバージョンのNode.js

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-16.04, ubuntu-18.04]
    node: [6, 8, 10]
steps:
  - uses: actions/setup-node@v1
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %}ホストランナーでサポートされている設定オプションについては、「[{% data variables.product.prodname_dotcom %}の仮想環境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)」を参照してください。

##### 組み合わせに追加の値が含まれる例

既存のビルドマトリクスジョブに、設定オプションを追加できます。 たとえば、`windows-latest` を使うジョブで`node` のバージョン 4 を実行しているときに、`npm` の特定のバージョンを使いたい場合は、`include` を使って追加のオプションを指定できます。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [4, 6, 8, 10]
    include:
      # includes a new variable of npm with a value of 2
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 4
        npm: 2
```
{% endraw %}

##### 新しい組み合わせを含む例

`include`を使って新しいジョブを追加し、マトリックスを構築できます。 マッチしなかったincludeの設定があれば、マトリックスに追加されます。 たとえば、`node`のバージョン12を使って複数のオペレーティングシステム上でビルドを行い、追加で実験的なジョブをUbuntu上でnodeバージョン13で行いたいなら、`include`を使ってこの追加のジョブを指定できます。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [12]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 13
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

##### マトリクスから設定を除外する例

`exclude` オプションを使って、ビルドマトリクスに定義されている特定の設定を削除できます。 `exclude` を使うと、ビルドマトリクスにより定義されたジョブが削除されます。 ジョブの数は、指定する配列に含まれるオペレーティングシステム (`os`) の外積から、任意の減算 (`exclude`) で引いたものです。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [4, 6, 8, 10]
    exclude:
      # excludes node 4 on macOS
      - os: macos-latest
        node: 4
```
{% endraw %}

{% note %}

**ノート:** すべての`include`の組み合わせは、`exclude`の後に処理されます。 このため、`include`を使って以前に除外された組み合わせを追加し直すことができます。

{% endnote %}

### **`jobs.<job_id>.strategy.fail-fast`**

`true`に設定すると、いずれかの`matrix`ジョブが失敗した場合に{% data variables.product.prodname_dotcom %}は進行中のジョブをすべてキャンセルします。 デフォルト: `true`

### **`jobs.<job_id>.strategy.max-parallel`**

`matrix`ジョブ戦略を使用するとき、同時に実行できるジョブの最大数。 デフォルトでは、{% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_dotcom %}がホストしている仮想マシン上で利用できるrunnerに応じてできるかぎりの数のジョブを並列に実行します。

```yaml
strategy:
  max-parallel: 2
```

### **`jobs.<job_id>.continue-on-error`**

ジョブが失敗した時に、ワークフローの実行が失敗にならないようにします。 `true`に設定すれば、ジョブが失敗した時にワークフローの実行が次へ進めるようになります。

#### 失敗した特定のマトリックスジョブがワークフローの実行を失敗させないようにする例

ジョブマトリックス中の特定のジョブが失敗しても、ワークフローの実行が失敗にならないようにすることができます。 たとえば、`node`が`13`に設定された実験的なジョブが失敗しても、ワークフローの実行を失敗させないようにしたいとしましょう。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [11, 12]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 13
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

### **`jobs.<job_id>.container`**

ジョブの中で、まだコンテナを指定していない手順を実行するコンテナ。 スクリプトアクションとコンテナアクションの両方を使うステップがある場合、コンテナアクションは同じボリュームマウントを使用して、同じネットワーク上にある兄弟コンテナとして実行されます。

`container`を設定しない場合は、コンテナで実行されるよう設定されているアクションを参照しているステップを除くすべてのステップが、`runs-on`で指定したホストで直接実行されます。

#### サンプル

```yaml
jobs:
  my_job:
    container:
      image: node:10.16-jessie
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

コンテナイメージのみを指定する場合、`image`は省略できます。

```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```

#### **`jobs.<job_id>.container.image`**

アクションを実行するコンテナとして使用するDockerイメージ。 The value can be the Docker Hub image name or a {% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### **`jobs.<job_id>.container.credentials`**

{% data reusables.actions.registry-credentials %}

##### サンプル

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.ghcr_token }}
```
{% endraw %}
{% endif %}

#### **`jobs.<job_id>.container.env`**

コンテナ中の環境変数の`map`を設定します。

#### **`jobs.<job_id>.container.ports`**

コンテナで公開するポートの`array`を設定します。

#### **`jobs.<job_id>.container.volumes`**

使用するコンテナにボリュームの`array`を設定します。 volumes (ボリューム) を使用すると、サービス間で、または1つのジョブのステップ間でデータを共有できます。 指定できるのは、名前付きDockerボリューム、匿名Dockerボリューム、またはホスト上のバインドマウントです。

ボリュームを指定するには、ソースパスとターゲットパスを指定してください。

`<source>:<destinationPath>`.

`<source>`は、ホストマシン上のボリューム名または絶対パス、`<destinationPath>`はコンテナでの絶対パスです。

##### サンプル

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

#### **`jobs.<job_id>.container.options`**

追加のDockerコンテナリソースのオプション。 オプションの一覧は、「[`docker create`のオプション](https://docs.docker.com/engine/reference/commandline/create/#options)」を参照してください。

### **`jobs.<job_id>.services`**

{% data reusables.github-actions.docker-container-os-support %}

ワークフロー中のジョブのためのサービスコンテナをホストするために使われます。 サービスコンテナは、データベースやRedisのようなキャッシュサービスの作成に役立ちます。 ランナーは自動的にDockerネットワークを作成し、サービスコンテナのライフサイクルを管理します。

コンテナを実行するようにジョブを設定した場合、あるいはステップがコンテナアクションを使う場合は、サービスもしくはアクションにアクセスするためにポートをマップする必要はありません。 Dockerは自動的に、同じDockerのユーザ定義ブリッジネットワーク上のコンテナ間のすべてのポートを公開します。 サービスコンテナは、ホスト名で直接参照できます。 ホスト名は自動的に、ワークフロー中のサービスに設定したラベル名にマップされます。

ランナーマシン上で直接実行されるようにジョブを設定し、ステップがコンテナアクションを使わないのであれば、必要なDockerサービスコンテナのポートはDockerホスト（ランナーマシン）にマップしなければなりません サービスコンテナには、localhostとマップされたポートを使ってアクセスできます。

ネットワーキングサービスコンテナ間の差異に関する詳しい情報については「[サービスコンテナについて](/actions/automating-your-workflow-with-github-actions/about-service-containers)」を参照してください。

#### localhostを使用する例

この例では、nginxとredisという2つのサービスを作成します。 Dockerホストのポートを指定して、コンテナのポートを指定しなかった場合、コンテナのポートは空いているポートにランダムに割り当てられます。 {% data variables.product.prodname_dotcom %}は、割り当てられたコンテナポートを{% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}コンテキストに設定します。 以下の例では、サービスコンテナのポートへは{% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} 及び{% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} コンテキストでアクセスできます。

```yaml
services:
  nginx:
    image: nginx
    # Dockerホストのポート8080をnginxコンテナのポート80にマップする
    ports:
      - 8080:80
  redis:
    image: redis
    # Dockerホストのポート6379をRedisコンテナのランダムな空きポートにマップする
    ports:
      - 6379/tcp
```

#### **`jobs.<job_id>.services.<service_id>.image`**

アクションを実行するサービスコンテナとして使用するDockerイメージ。 The value can be the Docker Hub image name or a {% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### **`jobs.<job_id>.services.<service_id>.credentials`**

{% data reusables.actions.registry-credentials %}

##### サンプル

{% raw %}
```yaml
services:
  myservice1: 
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.ghcr_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}
{% endif %}

#### **`jobs.<job_id>.services.<service_id>.env`**

サービスコンテナ中の環境変数の`map`を設定します。

#### **`jobs.<job_id>.services.<service_id>.ports`**

サービスコンテナで公開するポートの`array`を設定します。

#### **`jobs.<job_id>.services.<service_id>.volumes`**

使用するサービスコンテナにボリュームの`array`を設定します。 volumes (ボリューム) を使用すると、サービス間で、または1つのジョブのステップ間でデータを共有できます。 指定できるのは、名前付きDockerボリューム、匿名Dockerボリューム、またはホスト上のバインドマウントです。

ボリュームを指定するには、ソースパスとターゲットパスを指定してください。

`<source>:<destinationPath>`.

`<source>`は、ホストマシン上のボリューム名または絶対パス、`<destinationPath>`はコンテナでの絶対パスです。

##### サンプル

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

#### **`jobs.<job_id>.services.<service_id>.options`**

追加のDockerコンテナリソースのオプション。 オプションの一覧は、「[`docker create`のオプション](https://docs.docker.com/engine/reference/commandline/create/#options)」を参照してください。

### フィルタパターンのチートシート

特別なキャラクタをパス、ブランチ、タグフィルタで利用できます。

- `*`ゼロ個以上のキャラクタにマッチしますが、`/`にはマッチしません。 たとえば`Octo*`は`Octocat`にマッチします。
- `**`ゼロ個以上の任意のキャラクタにマッチします。
- `?`: ゼロ個もしくは1個のキャラクタにマッチします。 たとえば`Octoc?t`は`Octocat`にマッチします。
- `+`: 直前の文字の 1 つ以上に一致します。
- `[]` 括弧内にリストされた、あるいは範囲に含まれる1つのキャラクタにマッチします。 範囲に含めることができるのは`a-z`、`A-Z`、`0-9`のみです。 たとえば`[0-9a-f]`という範囲は、任意の数字もしくは小文字にマッチします。 たとえば`[CB]at`は`Cat`あるいは`Bat`にマッチし、`[1-2]00`は`100`や`200`にマッチします。
- `!`: パターンの先頭に置くと、肯定のパターンを否定にします。 先頭のキャラクタではない場合は、特別な意味を持ちません。

YAMLにおいては、`*`、`[`、`!`は特別なキャラクタです。 パターンを`*`、`[`、`!`で始める場合、そのパターンをクオートで囲まなければなりません。

```yaml
# 有効
- '**/README.md'

# 無効 - ワークフローの実行を妨げる
# 解析エラーを作成する
- **/README.md
```

ブランチ、タグ、およびパスフィルタの文法に関する詳しい情報については、「[`on.<push|pull_request>.<branches|tags>`](#onpushpull_requestbranchestags)」および「[`on.<push|pull_request>.paths`](#onpushpull_requestpaths)」を参照してください。

#### ブランチやタグにマッチするパターン

| パターン                                          | 説明                                                                                             | マッチの例                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `feature/*`                                   | ワイルドカードの`*`は任意のキャラクタにマッチしますが、スラッシュ（`/`）にはマッチしません。                                              | -`feature/my-branch`<br/>-`feature/your-branch`                                              |
| `feature/**`                                  | ワイルドカードの`**`は、ブランチ及びタグ名のスラッシュ（`/`）を含む任意のキャラクタにマッチします。                                          | -`feature/beta-a/my-branch`<br/>-`feature/your-branch`<br/>-`feature/mona/the/octocat` |
| -`main`<br/>-`releases/mona-the-octcat` | ブランチあるいはタグ名に完全に一致したときにマッチします。                                                                  | -`main`<br/>-`releases/mona-the-octocat`                                                     |
| `'*'`                                         | スラッシュ（`/`）を含まないすべてのブランチ及びタグ名にマッチします。 `*`はYAMLにおける特別なキャラクタです。 パターンを`*`で始める場合は、クオートを使わなければなりません。 | -`main`<br/>-`releases`                                                                      |
| `'**'`                                        | すべてのブランチ及びタグ名にマッチします。 これは `branches`あるいは`tags`フィルタを使わない場合のデフォルトの動作です。                          | -`all/the/branches`<br/>-`every/tag`                                                         |
| `'*feature'`                                  | `*`はYAMLにおける特別なキャラクタです。 パターンを`*`で始める場合は、クオートを使わなければなりません。                                      | -`mona-feature`<br/>-`feature`<br/>-`ver-10-feature`                                   |
| `v2*`                                         | `v2`で始めるブランチ及びタグ名にマッチします。                                                                      | -`v2`<br/>-`v2.0`<br/>-`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                         | メジャーバージョンが1もしくは2のすべてのセマンティックバージョニングタグにマッチします。                                                  | -`v1.10.1`<br/>-`v2.0.0`                                                                     |

#### ファイルパスにマッチするパターン

パスパターンはパス全体にマッチしなければならず、リポジトリのルートを出発点とします。

| パターン                                                 | マッチの説明                                                                                                      | マッチの例                                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `'*'`                                                | ワイルドカードの`*`は任意のキャラクタにマッチしますが、スラッシュ（`/`）にはマッチしません。 `*`はYAMLにおける特別なキャラクタです。 パターンを`*`で始める場合は、クオートを使わなければなりません。 | -`README.md`<br/>-`server.rb`                                                          |
| `'*.jsx?'`                                           | `?`はゼロ個以上の先行するキャラクタにマッチします。                                                                                 | -`page.js`<br/>-`page.jsx`                                                             |
| `'**'`                                               | ワイルドカードの`**`は、スラッシュ（`/`）を含む任意のキャラクタにマッチします。 これは `path`フィルタを使わない場合のデフォルトの動作です。                               | -`all/the/files.md`                                                                          |
| `'*.js'`                                             | ワイルドカードの`*`は任意のキャラクタにマッチしますが、スラッシュ（`/`）にはマッチしません。 リポジトリのルートにあるすべての`.js`ファイルにマッチします。                         | -`app.js`<br/>-`index.js`                                                              |
| `'**.js'`                                            | リポジトリ内のすべての`.js`ファイルにマッチします。                                                                                | -`index.js`<br/>-`js/index.js`<br/>-`src/js/app.js`                              |
| `docs/*`                                             | リポジトリのルートの`docs`のルートにあるすべてのファイルにマッチします。                                                                     | -`docs/README.md`<br/>-`docs/file.txt`                                                 |
| `docs/**`                                            | リポジトリのルートの`docs`内にあるすべてのファイルにマッチします。                                                                        | -`docs/README.md`<br/>-`docs/mona/octocat.txt`                                         |
| `docs/**/*.md`                                       | `docs`ディレクトリ内にある`.md`というサフィックスを持つファイルにマッチします。                                                               | -`docs/README.md`<br/>-`docs/mona/hello-world.md`<br/>-`docs/a/markdown/file.md` |
| `'**/docs/**'`                                       | リポジトリ内にある`docs`ディレクトリ内のすべてのファイルにマッチします、                                                                     | -`/docs/hello.md`<br/>-`dir/docs/my-file.txt`<br/>-`space/docs/plan/space.doc`   |
| `'**/README.md'`                                     | リポジトリ内にあるREADME.mdファイルにマッチします。                                                                              | -`README.md`<br/>-`js/README.md`                                                       |
| `'**/*src/**'`                                       | リポジトリ内にある`src`というサフィックスを持つフォルダ内のすべてのファイルにマッチします。                                                            | -`a/src/app.js`<br/>-`my-src/code/js/app.js`                                           |
| `'**/*-post.md'`                                     | リポジトリ内にある`-post.md`というサフィックスを持つファイルにマッチします。                                                                 | -`my-post.md`<br/>-`path/their-post.md`                                                |
| `'**/migrate-*.sql'`                                 | リポジトリ内の`migrate-`というプレフィックスと`.sql`というサフィックスを持つファイルにマッチします。                                                  | -`migrate-10909.sql`<br/>-`db/migrate-v1.0.sql`<br/>-`db/sept/migrate-v1.sql`    |
| -`*.md`<br/>-`!README.md`                      | 感嘆符（`!`）をパターンの前に置くと、そのパターンの否定になります。 あるファイルがあるパターンにマッチし、ファイル中でその後に定義されている否定パターンにマッチした場合、そのファイルは含まれません。       | -`hello.md`<br/>_マッチしない_<br/>-`README.md`<br/>-`docs/hello.md`           |
| -`*.md`<br/>-`!README.md`<br/>-`README*` | パターンは順番にチェックされます。 先行するパターンを否定するパターンで、ファイルパスが再度含まれるようになります。                                                  | -`hello.md`<br/>-`README.md`<br/>-`README.doc`                                   |
