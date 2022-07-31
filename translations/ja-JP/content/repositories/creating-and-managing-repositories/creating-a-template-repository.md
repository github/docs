---
title: テンプレートリポジトリを作成する
intro: 'You can make an existing repository a template, so you and others can generate new repositories with the same directory structure, branches, and files.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
---

{% note %}

**注釈**: テンプレートリポジトリには、{% data variables.large_files.product_name_short %} を使用して保存されたファイルを含めることはできません。

{% endnote %}

テンプレートリポジトリを作成するには、リポジトリを作成して、そのリポジトリをテンプレート化する必要があります。 リポジトリの作成に関する詳細は「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch. They can also choose to include all the other branches in your repository. Branches created from a template have unrelated histories, so you cannot create pull requests or merge between the branches. 詳細は「[テンプレートからリポジトリを作成する](/articles/creating-a-repository-from-a-template)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. [**Template repository**] を選択します。 ![リポジトリをテンプレート化するチェックボックス](/assets/images/help/repository/template-repository-checkbox.png)
