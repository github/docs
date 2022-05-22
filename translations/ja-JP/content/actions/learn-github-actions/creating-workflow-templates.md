---
title: Creating workflow templates
shortTitle: Creating templates
intro: Learn how you can create workflow templates to help people in your team add new workflows more easily.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## 概要

{% data reusables.actions.workflow-organization-templates %}

## ワークフロー テンプレートの作成

ワークフローテンプレートは、Organizationの `.github` リポジトリへの書き込みアクセス権を持つユーザが作成できます。 その後、ワークフローを作成する権限を持つOrganizationのメンバーがテンプレートを使用できます。

{% ifversion fpt %}
Your workflow templates can be used to create workflows in public repositories only. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use workflow templates to create workflows in private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/learn-github-actions/creating-workflow-templates).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Note:** To avoid duplication in workflows created from a template you can call reusable workflows from within a workflow template. This can help make your workflows easier to maintain. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

{% endnote %}
{% endif %}

この手順では、ワークフロー テンプレートとメタデータ ファイルを作成する方法を示します。 メタデータ ファイルには、ユーザが新しいワークフローを作成するときにテンプレートがどのように表示されるかについて説明します。

1. 存在しない場合は、Organization内で`.github`という名前の新しいパブリック リポジトリを作成します。
2. `workflow-templates`という名前のディレクトリを作成します。
3. `workflow-templates` ディレクトリ内に新しいワークフローファイルを作成します。

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
4. `workflow-templates` ディレクトリ内にメタデータファイルを作成します。 メタデータ ファイルは、ワークフロー ファイルと同じ名前である必要がありますが、 `.yml` 拡張子の代わりに、 `.properties.json`を付ける必要があります。 たとえば`octo-organization-ci.properties.json`という名前のこのファイルには 、`octo-organization-ci.yml`という名前のワークフローファイルのメタデータが含まれています。
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

## 次のステップ

To continue learning about {% data variables.product.prodname_actions %}, see "[Using workflow templates](/actions/learn-github-actions/using-workflow-templates)."
