---
title: アクションの検索とカスタマイズ
shortTitle: アクションの検索とカスタマイズ
intro: アクションは、ワークフローを動かす構成要素です。 ワークフローには、コミュニティによって作成されたアクションを含めることも、アプリケーションのリポジトリ内に直接独自のアクションを作成することもできます。 このガイドでは、アクションを発見、使用、およびカスタマイズする方法を説明します。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: how_to
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 概要

ワークフローで使用するアクションは、以下の場所で定義できます。

- パブリック リポジトリ
- ワークフローファイルがアクションを参照するのと同じリポジトリ
- Docker Hubで公開された Docker コンテナイメージ

{% data variables.product.prodname_marketplace %}は、{% data variables.product.prodname_dotcom %}コミュニティによって構築されたアクションを見つけるための中央となる場所です。 [{% data variables.product.prodname_marketplace %} ページ](https://github.com/marketplace/actions/)では、アクションをカテゴリでフィルタできます。

{% data reusables.actions.enterprise-marketplace-actions %}

### ワークフローエディタで Marketplace アクションを参照する

リポジトリのワークフローエディタで、直接アクションを検索し、ブラウズできます。 サイドバーから特定のアクションを検索し、注目のアクションを見て、注目のカテゴリをブラウズできます。 また、アクションが{% data variables.product.prodname_dotcom %}コミュニティから受けたStarの数も見ることができます。

1. リポジトリで、編集したいワークフローファイルにアクセスします。
1. ファイルビューの右上隅の {% octicon "pencil" aria-label="The edit icon" %}をクリックしてワークフローエディタを開きます。 ![ワークフローファイルの編集ボタン](/assets/images/help/repository/actions-edit-workflow-file.png)
1. エディタの右側で{% data variables.product.prodname_marketplace %}サイドバーを使ってアクションをブラウズしてください。 {% octicon "verified" aria-label="The verified badge" %} バッジの付いたアクションは、{% data variables.product.prodname_dotcom %} がアクションの作者をパートナー Organization として確認したことを示します。 ![マーケットプレイスのワークフローサイドバー](/assets/images/help/repository/actions-marketplace-sidebar.png)

### ワークフローにアクションを追加する

アクションのリストのページには、アクションのバージョンと、そのアクションを利用するために必要なワークフローの構文が含まれています。 アクションが更新された場合でもワークフローを安定させるために、ワークフローファイルで Git または Docker タグ番号を指定することにより、使用するアクションのバージョンを参照できます。

1. ワークフローで使いたいアクションにアクセスしてください。
1. "Installation（インストール）"の下で、{% octicon "clippy" aria-label="The edit icon" %}をクリックしてワークフローの構文をコピーしてください。 ![アクションのリストの表示](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. この構文をワークフロー中に新しいステップとして貼り付けてください。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)」を参照してください。
1. アクションで入力が必要な場合は、ワークフローで設定します。 アクションに必要な入力については、「[アクションで入力と出力を使用する](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### カスタムアクションにリリース管理を使用する

コミュニティアクションの作者は、タグ、ブランチ、または SHA 値を使用してアクションのリリースを管理するオプションがあります。 他の依存関係と同様に、アクションの更新を自動的に受け入れる際のお好みに応じて、使用するアクションのバージョンを指定する必要があります。

ワークフローファイルでアクションのバージョンを指定します。 リリース管理へのアプローチに関する情報、および使用するタグ、ブランチ、または SHA 値を確認するには、アクションのドキュメントを確認してください。

#### タグの使用

タグは、メジャーバージョンとマイナーバージョンの切り替えタイミングを決定するときに役立ちますが、これらはより一過性のものであり、メンテナから移動または削除される可能性があります。 この例では、`v1.0.1` としてタグ付けされたアクションをターゲットにする方法を示しています。

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

#### SHA の使用

より信頼性の高いバージョン管理が必要な場合は、アクションのバージョンに関連付けられた SHA 値を使用する必要があります。 SHA は不変であるため、タグやブランチよりも信頼性が高くなります。 ただし、このアプローチでは、重要なバグ修正やセキュリティアップデートなど、アクションの更新を自動的に受信しません。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %} 短縮された値ではなく、コミットの完全な SHA 値を使わなければなりません。 {% endif %}この例ではアクションのSHAを対象としています。

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

#### ブランチの使用

アクションのターゲットブランチを指定すると、そのブランチに現在あるバージョンが常に実行されます。 ブランチの更新に重大な変更が含まれている場合、このアプローチは問題を引き起こす可能性があります。 この例では、`@main` という名前のブランチを対象としています。

```yaml
steps:
    - uses: actions/javascript-action@main
```

詳しい情報については、「[アクションにリリース管理を使用する](/actions/creating-actions/about-actions#using-release-management-for-actions)」を参照してください。

### アクションで入力と出力を使用する

多くの場合、アクションは入力を受け入れたり要求したりして、使用できる出力を生成します。 たとえば、アクションでは、ファイルへのパス、ラベルの名前、またはアクション処理の一部として使用するその他のデータを指定する必要がある場合があります。

アクションの入力と出力を確認するには、リポジトリのルートディレクトリにある `action.yml` または `action.yaml` を確認してください。

この例の `action.yml` では、`inputs` キーワードは、`file-path` と呼ばれる必須の入力を定義し、何も指定されていない場合に使用されるデフォルト値を含みます。 `output` キーワードは、結果の場所を示す `results-file` という出力を定義します。

```yaml
name: 'Example'
description: 'Receives file and generates output'
inputs:
  file-path:  # id of input
    description: "Path to test script"
    required: true
    default: 'test-file.js'
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% if currentVersion == "github-ae@latest" %}
### Using the actions included with {% data variables.product.prodname_ghe_managed %}
By default, you can use most of the official

{% data variables.product.prodname_dotcom %}-authored actions in {% data variables.product.prodname_ghe_managed %}. For more information, see "[Using actions in {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-actions-in-github-ae)."
{% endif %}

### ワークフロー ファイルでアクションを使用するのと同じリポジトリ内のアクションの参照

ワークフロー ファイルがアクションを使用するのと同じリポジトリでアクションが定義されている場合、そのアクションはワークフロー ファイル内の`{owner}/{repo}@{ref}` または `./path/to/dir` 構文を使用して参照できます。

リポジトリ ファイル構造の例:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

ワークフロー ファイルの例:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # このステップは、リポジトリのコピーをチェックアウトします。
      - uses: actions/checkout@v2
      # このステップは、アクションを含むディレクトリを参照します。
      - uses: ./.github/actions/hello-world-action
```

`action.yml` ファイルは、アクションのメタデータを提供するために使用されます。 このファイルの内容については、「[GitHub Actions のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions)」をご覧ください。

### Docker Hubでのコンテナーの参照

アクションが Docker Hub の公開された Docker コンテナイメージで定義されている場合は、そのアクションはワークフロー ファイル内の `docker://{image}:{tag}` 構文を使用して参照する必要があります。 コードとデータを保護するために、ワークフローで使用する前に Docker HubからのDocker コンテナイメージの整合性を確認することを強くおすすめします。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Docker アクションの例については、[Docker-image.yml のワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) および「[Docker コンテナのアクションを作成する](/articles/creating-a-docker-container-action)」を参照してください。

### 次のステップ

{% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %} の重要な機能](/actions/learn-github-actions/essential-features-of-github-actions)」を参照してください。
