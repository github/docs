---
title: リポジトリについて
intro: リポジトリには、プロジェクトのすべてのファイルと各ファイルの改訂履歴が含まれています。 リポジトリ内でプロジェクトの作業について話し合い、管理できます。
redirect_from:
  - /articles/about-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

リポジトリを個人として所有することも、リポジトリの所有権を Organization 内の他の人々と共有することもできます。

リポジトリの表示設定を選択して、リポジトリにアクセスできるユーザを制限できます。 詳細は「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

ユーザが所有するリポジトリでは、他の人々にコラボレーターアクセスを与えて、プロジェクトでコラボレーションするようにできます。 リポジトリが Organization によって所有されている場合は、Organization のメンバーにアクセス権限を与え、リポジトリ上でコラボレーションするようにできます。 詳細は「[ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository/)」および「[Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
With
ユーザアカウントと Organization の {% data variables.product.prodname_free_team %} を使用すると、完全な機能一式を備えた無制限のパブリックリポジトリ、または限定された機能一式を備えた無制限のプライベートリポジトリで無制限のコラボレータと連携できます。 プライベートリポジトリの高度なツールを入手するには、 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、または {% data variables.product.prodname_ghe_cloud %} にアップグレードします。 {% data reusables.gated-features.more-info %}
{% else %}
各個人および Organization は、無制限のリポジトリを所有でき、すべてのリポジトリにコラボレータを何人でも招待できます。
{% endif %}

リポジトリを使用して、作業を管理し、他のユーザと共同作業を行うことができます。
- Issue を使用して、ユーザフィードバックの収集、ソフトウェアバグの報告、および実行するタスクの整理を行うことができます。 詳しい情報については「[Issue について](/github/managing-your-work-on-github/about-issues)」を参照してください。{% if currentVersion == "free-pro-team@latest" %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- プルリクエストを使用して、リポジトリへの変更を提案できます。 詳しい情報については[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)を参照してください。
- プロジェクトボードを使用して、Issue とプルリクエストを整理して優先順位を付けることができます。 詳細は「[プロジェクトボードについて](/github/managing-your-work-on-github/about-project-boards)」を参照してください。

{% data reusables.repositories.repo-size-limit %}

### 参考リンク

- 「[新しいリポジトリを作成する](/articles/creating-a-new-repository)」
- [Issue とプルリクエストでのコラボレーション](/categories/collaborating-with-issues-and-pull-requests)
- 「[{% data variables.product.prodname_dotcom %}での作業を管理する](/categories/managing-your-work-on-github/)」
- [リポジトリの管理](/categories/administering-a-repository)
- [グラフによるリポジトリデータの可視化](/categories/visualizing-repository-data-with-graphs/)
- 「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」
- [{% data variables.product.prodname_dotcom %} 用語集](/articles/github-glossary)
