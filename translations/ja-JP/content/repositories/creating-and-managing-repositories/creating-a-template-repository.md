---
title: テンプレートリポジトリを作成する
intro: '既存のリポジトリをテンプレートにして、自分や他の人が同じディレクトリ構造{% ifversion fpt or ghae or ghes %}、ブランチ、{% endif %}およびファイルで新しいリポジトリを生成できるようにすることができます。'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Create a template repo
---

{% note %}

**注釈**: テンプレートリポジトリには、{% data variables.large_files.product_name_short %} を使用して保存されたファイルを含めることはできません。

{% endnote %}

テンプレートリポジトリを作成するには、リポジトリを作成して、そのリポジトリをテンプレート化する必要があります。 リポジトリの作成に関する詳細は「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch.{% ifversion fpt or ghae or ghes %} They can also choose to include all the other branches in your repository. Branches created from a template have unrelated histories, so you cannot create pull requests or merge between the branches.{% endif %} For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. [**Template repository**] を選択します。 ![リポジトリをテンプレート化するチェックボックス](/assets/images/help/repository/template-repository-checkbox.png)
