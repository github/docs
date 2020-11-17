---
title: テンプレートリポジトリを作成する
intro: 'You can make an existing repository a template, so you and others can generate new repositories with the same directory structure{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, branches,{% endif %} and files.'
permissions: リポジトリに対する管理者権限があるユーザなら誰でも、リポジトリをテンプレート化できます。
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Note**: Your template repository cannot include files stored using {% data variables.large_files.product_name_short %}.

{% endnote %}

テンプレートリポジトリを作成するには、リポジトリを作成して、そのリポジトリをテンプレート化する必要があります。 リポジトリの作成に関する詳細は「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} They can also choose to include all the other branches in your repository.{% endif %} For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. [**Template repository**] を選択します。 ![リポジトリをテンプレート化するチェックボックス](/assets/images/help/repository/template-repository-checkbox.png)
