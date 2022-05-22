---
title: リポジトリのバックアップ
intro: '{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Git と {% endif %}API {% if currentVersion == "free-pro-team@latest" %}、またはサードパーティツール{% endif %}を使用してリポジトリをバックアップできます。'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% if currentVersion == "free-pro-team@latest" %}

リポジトリのアーカイブをダウンロードするには、ユーザあるいは Organization のマイグレーション用の API が利用できます。 詳しい情報については、「[移行](/rest/reference/migrations)」を参照してください。
{% else %}

リポジトリのダウンロードおよびバックアップを手動で実行できます。

- リポジトリの Git データをローカルマシンにダウンロードするには、リポジトリをクローンする必要があります。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。
- また、リポジトリの wiki をダウンロードすることもできます。 詳細は「[ウィキページを追加または編集する](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)」を参照してください。

リポジトリもしくは wiki をクローンすると、プロジェクトのファイルやコミット履歴などの Git のデータだけがダウンロードされます。 {% data variables.product.product_name %}リポジトリの他の要素をローカルマシンにエクスポートするには、弊社の API が利用できます。

- [問題](/rest/reference/issues#list-issues-for-a-repository)
- [プルリクエスト](/rest/reference/pulls#list-pull-requests)
- [フォーク](/rest/reference/repos#list-forks)
- [コメント](/rest/reference/issues#list-issue-comments-for-a-repository)
- [マイルストーン](/rest/reference/issues#list-milestones)
- [ラベル](/rest/reference/issues#list-labels-for-a-repository)
- [Watcher](/rest/reference/activity#list-watchers)
- [Starを付けたユーザ](/rest/reference/activity#list-stargazers)
- [プロジェクト](/rest/reference/projects#list-repository-projects)
{% endif %}

バックアップするすべてのコンテンツの {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} ローカルバージョンを入手したら、zip アーカイブを作成してアーカイブを{% else %}ダウンロードしたり、外部ハードドライブにコピー{% endif %}したり、[Google Drive](https://www.google.com/drive/) や [Dropbox](https://www.dropbox.com/) などのクラウドベースのバックアップサービスにアップロードしたりすることができます。

{% if currentVersion == "free-pro-team@latest" %}
### サードパーティのバックアップツール
リポジトリのバックアップを自動化するセルフサービスのツールはたくさんあります。 オプトアウトしておらず、誰でもデータにアクセスできる

{% data variables.product.product_name %} 上のパブリックリポジトリをすべてアーカイブするアーカイブプロジェクトとは異なり、バックアップツールは_特定の_リポジトリからデータをダウンロードし、新しいブランチまたはディレクトリ内に整理します。 アーカイブプロジェクトの詳細については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。 自動バックアップツールに関する詳しい情報については、[{% data variables.product.prodname_marketplace %} のバックアップユーティリティのカテゴリ](https://github.com/marketplace?category=backup-utilities)を参照してください。
{% endif %}
