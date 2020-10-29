---
title: テンプレートからリポジトリを作成する
intro: 既存のリポジトリと同じディレクトリ構造およびファイルで、新しいリポジトリを作成できます。
redirect_from:
  - /articles/creating-a-repository-from-a-template
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About repository templates

リポジトリに対する読み取り権限があるユーザなら誰でも、テンプレートからリポジトリを作成できます。 詳細は「[テンプレートリポジトリを作成する](/articles/creating-a-template-repository)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository from a template using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.product_location %} documentation.

{% endtip %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
テンプレートリポジトリのデフォルトブランチのみからディレクトリ構造とファイルを含めるか、すべてのブランチを含めるかを選択できます。
{% endif %}

テンプレートからリポジトリを作成することは、リポジトリをフォークすることに似ていますが、以下の点で異なります:
- 新しいフォークは、親リポジトリのコミット履歴すべてを含んでいますが、テンプレートから作成されたリポジトリには、最初は 1 つのコミットしかありません。
- フォークへのコミットはコントリビューショングラフに表示されませんが、テンプレートから作成されたリポジトリへのコミットはコントリビューショングラフに表示されます。
- フォークは、既存のプロジェクトにコードをコントリビュートするための一時的な方法となります。テンプレートからリポジトリを作成することは、新しいプロジェクトを素早く始める方法です。

フォークに関する詳細は「[フォークについて](/articles/about-forks)」を参照してください。

### テンプレートからリポジトリを作成する

{% data reusables.repositories.navigate-to-repo %}
2. ファイルの一覧の上にある [**Use this template**] をクリックします。 ![[Use this template] ボタン](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
6. 必要に応じて、デフォルトのブランチだけでなく、テンプレートのすべてのブランチのディレクトリ構造とファイルを含めるには、[**Include all branches**] を選択します。 ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
{% data reusables.repositories.select-marketplace-apps %}
8. [**Create repository from template**] をクリックします。
