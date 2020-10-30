---
title: テンプレートリポジトリを作成する
intro: '既存のリポジトリをテンプレートにして、自分や他の人が同じディレクトリ構造{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}、ブランチ、{% endif %}およびファイルで新しいリポジトリを生成できるようにすることができます。'
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.18'
---

リポジトリに対する管理者権限があるユーザなら誰でも、リポジトリをテンプレート化できます。

テンプレートリポジトリを作成するには、リポジトリを作成して、そのリポジトリをテンプレート化する必要があります。 リポジトリの作成に関する詳細は「[新しいリポジトリの作成](/articles/creating-a-new-repository)」を参照してください。

リポジトリをテンプレートにすると、そのリポジトリにアクセスできるすべてのユーザが、デフォルトのブランチと同じディレクトリ構造とファイルで新しいリポジトリを生成できます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}また、他のすべてのブランチをリポジトリに含めることもできます。{% endif %}詳しい情報については、「[テンプレートからリポジトリを作成する](/articles/creating-a-repository-from-a-template)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [**Template repository**] を選択します。 ![リポジトリをテンプレート化するチェックボックス](/assets/images/help/repository/template-repository-checkbox.png)
