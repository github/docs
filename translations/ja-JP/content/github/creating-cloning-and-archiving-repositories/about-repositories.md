---
title: リポジトリについて
intro: リポジトリは、プロジェクトのフォルダーのようなものです。 プロジェクトのリポジトリにはプロジェクトのすべてのファイルが含まれ、各ファイルのリビジョン履歴が保存されます。 プロジェクトの作業をリポジトリ内で議論し、管理することもできます。
redirect_from:
  - /articles/about-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリを個人として所有することも、リポジトリの所有権を Organization 内の他の人々と共有することもできます。

リポジトリの表示設定を選択して、リポジトリにアクセスできるユーザを制限できます。 詳細は「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

ユーザが所有するリポジトリでは、他の人々にコラボレーターアクセスを与えて、プロジェクトでコラボレーションするようにできます。 リポジトリが Organization によって所有されている場合は、Organization のメンバーにアクセス権限を与え、リポジトリ上でコラボレーションするようにできます。 詳細は「[ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository/)」および「[Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
ユーザアカウントと Organization の {% data variables.product.prodname_free_team %} を使用すると、完全な機能セットを備えた無制限のパブリックリポジトリ、または機能セットを制限した無制限のプライベートリポジトリで無制限のコラボレータと連携できます。 プライベートリポジトリの高度なツールを入手するには、 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、または {% data variables.product.prodname_ghe_cloud %} にアップグレードします。 {% data reusables.gated-features.more-info %}
{% else %}
各個人および Organization は、無制限のリポジトリを所有でき、すべてのリポジトリにコラボレータを何人でも招待できます。
{% endif %}

リポジトリの Issue、プルリクエスト、プロジェクトボードを使ってプロジェクトで他者とコラボレーションできます。

![octocat/Hello-World リポジトリのメインページ](/assets/images/help/repository/repo-main-page.png)

{% data reusables.repositories.repo-size-limit %}

### 参考リンク

- 「[新しいリポジトリを作成する](/articles/creating-a-new-repository)」
- [Issue とプルリクエストでのコラボレーション](/categories/collaborating-with-issues-and-pull-requests)
- 「[{% data variables.product.prodname_dotcom %}での作業を管理する](/categories/managing-your-work-on-github/)」
- [リポジトリの管理](/categories/administering-a-repository)
- [グラフによるリポジトリデータの可視化](/categories/visualizing-repository-data-with-graphs/)
- 「[ウィキについて](/articles/about-wikis)」
- [{% data variables.product.prodname_dotcom %} 用語集](/articles/github-glossary)
