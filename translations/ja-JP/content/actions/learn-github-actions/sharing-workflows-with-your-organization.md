---
title: ワークフローを Organization と共有する
shortTitle: ワークフローを Organization と共有する
intro: 'ワークフローテンプレート、シークレット、およびセルフホストランナーを共有することで、Organization 機能を使用して Team とコラボレーションする方法を学びます。'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概要

ワークフローやその他の {% data variables.product.prodname_actions %} 機能を Team と共有する必要がある場合は、{% data variables.product.prodname_dotcom %} Organization 内でのコラボレーションを検討します。 Organization を使用すると、シークレット、成果物、およびセルフホストランナーを一元的に保存および管理できます。 `.github` リポジトリにワークフローテンプレートを作成して、Organization 内の他のユーザと共有することもできます。

### ワークフロー テンプレートの作成

ワークフローテンプレートは、Organizationの `.github` リポジトリへの書き込みアクセス権を持つユーザが作成できます。 その後、ワークフローを作成する権限を持つOrganizationのメンバーがテンプレートを使用できます。 ワークフロー テンプレートを使用すると、Organizationのパブリック リポジトリに新しいワークフローを作成できます。テンプレートを使用してプライベートリポジトリにワークフローを作成するには、OrganizationがエンタープライズプランまたはGitHub Oneプランの一部である必要があります。

この手順では、ワークフロー テンプレートとメタデータ ファイルを作成する方法を示します。 メタデータ ファイルには、ユーザが新しいワークフローを作成するときにテンプレートがどのように表示されるかについて説明します。

1. 存在しない場合は、Organization内で`.github`という名前の新しいパブリック リポジトリを作成します。
1. `workflow-templates`という名前のディレクトリを作成します。
1. `workflow-templates` ディレクトリ内に新しいワークフローファイルを作成します。

   リポジトリのデフォルトブランチを参照する必要がある場合は、 `$default-branch` プレースホルダを使用できます。 テンプレートを使用してワークフローを作成すると、プレースホルダはリポジトリのデフォルトブランチの名前に自動的に置き換えられます。

   たとえば、`octo-organization-ci.yml`という名前のこのファイルは、基本的なワークフローを示しています。

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v2

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
1. `workflow-templates` ディレクトリ内にメタデータファイルを作成します。 メタデータ ファイルは、ワークフロー ファイルと同じ名前である必要がありますが、 `.yml` 拡張子の代わりに、 `.properties.json`を付ける必要があります。 たとえば`octo-organization-ci.properties.json`という名前のこのファイルには 、`octo-organization-ci.yml`という名前のワークフローファイルのメタデータが含まれています。
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **必須。** ワークフロー テンプレートの名前。 これは、使用可能なテンプレートの一覧に表示されます。
   * `description` - **必須。** ワークフロー テンプレートの説明。 これは、使用可能なテンプレートの一覧に表示されます。
   * `iconName` - **必須。** テンプレート リスト内のワークフローのエントリのアイコンを定義します。 `iconName` は、同じ名前の SVG アイコンである必要があり、 `workflow-templates` ディレクトリに格納する必要があります。 たとえば、`example-icon.svg`という名前の SVG ファイルは、 `example-icon`として参照されます。
   * `categories` - **オプション。** ワークフローの言語カテゴリを定義します。 ユーザーが使用可能なテンプレートを表示する際に、同じ言語に一致するテンプレートが目立つようにになります。 使用可能な言語カテゴリについては、「https://github.com/github/linguist/blob/master/lib/linguist/languages.yml」を参照してください。
   * `filePatterns` - **オプション 。** 定義された正規表現に一致するファイルがユーザーのリポジトリのルート ディレクトリにある場合に、テンプレートを使用できるようにします。

別のワークフロー テンプレートを追加するには、同じ `workflow-templates` ディレクトリにファイルを追加します。 例:

![ワークフロー テンプレート ファイル](/assets/images/help/images/workflow-template-files.png)

### Organization のワークフローテンプレートを使用する

この手順では、Organizationのメンバーがワークフロー テンプレートを検索して利用し、新しいワークフローを作成する方法を示します。 Organizationのワークフロー テンプレートは、Organizationのメンバーであるすべてのユーザーが使用できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. リポジトリに既存のワークフローが既に存在する場合: 左上隅にある [**New workflow（新しいワークフロー）**] をクリックします。 ![新規ワークフローの選択](/assets/images/help/repository/actions-new-workflow.png)
1. Organizationのワークフロー テンプレートは、「_Organizationの名前_によって作成されたワークフロー」というタイトルの独自セクションにあります。 使いたいテンプレート名の下で、**Set up this workflow（このワークフローをセットアップする）**をクリックしてください。 ![このワークフローを設定します](/assets/images/help/settings/actions-create-starter-workflow.png)


### Organization 内でシークレットを共有する

Organization 内でシークレットを一元管理し、選択したリポジトリで使用できるようにすることができます。 これは、1 つの場所でシークレットを更新し、その変更をシークレットを使用するすべてのリポジトリワークフローに適用できるということを示します。

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. [**New secret（新しいシークレット）**] をクリックします。
1. **[Name（名前）]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **Value（値）** を入力します。
1. [ **Repository access（リポジトリアクセス）** ドロップダウン リストから、アクセス ポリシーを選択します。
1. [**Add secret（シークレットの追加）**] をクリックします。

### Organization 内でセルフホストランナーを共有する

Organization の管理者は、セルフホストランナーをグループに追加してから、グループにアクセスできるリポジトリを制御するポリシーを作成できます。

詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。


### 次のステップ

{% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions)」を参照してください。
