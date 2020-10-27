---
title: リポジトリのバックアップ
intro: 'You can use{% if enterpriseServerVersions contains currentVersion %} Git and{% endif %} the API {% if currentVersion == "free-pro-team@latest" %}or a third-party tool {% endif %}to back up your repository.'
redirect_from:
  - /articles/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

リポジトリのアーカイブをダウンロードするには、ユーザあるいは Organization のマイグレーション用の API が利用できます。 詳しい情報については、「[移行](/v3/migrations/)」を参照してください。
{% else %}

リポジトリのダウンロードおよびバックアップを手動で実行できます。

- リポジトリの Git データをローカルマシンにダウンロードするには、リポジトリをクローンする必要があります。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。
- また、リポジトリの wiki をダウンロードすることもできます。 詳細は「[ウィキページを追加または編集する](/articles/adding-or-editing-wiki-pages)」を参照してください。

リポジトリもしくは wiki をクローンすると、プロジェクトのファイルやコミット履歴などの Git のデータだけがダウンロードされます。 {% data variables.product.product_name %}リポジトリの他の要素をローカルマシンにエクスポートするには、弊社の API が利用できます。

- [問題](/v3/issues/#list-issues-for-a-repository)
- [プルリクエスト](/v3/pulls/#list-pull-requests)
- [フォーク](/rest/reference/repos#list-forks)
- [コメント](/rest/reference/issues#list-issue-comments-for-a-repository)
- [マイルストーン](/rest/reference/issues#list-milestones)
- [ラベル](/rest/reference/issues#list-labels-for-a-repository)
- [Watcher](/rest/reference/activity#list-watchers)
- [Starを付けたユーザ](/rest/reference/activity#list-stargazers)
- [プロジェクト](/v3/projects/#list-repository-projects)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}バックアップしたいすべての内容のローカルバージョンができたなら、zipアーカイブを作成して{% else %}アーカイブがダウンロードできたなら{% endif %}外部ハードディスクにコピーするか、[Google Drive](https://www.google.com/drive/)あるいは[ Dropbox](https://www.dropbox.com/)などのクラウドベースのバックアップサービスにアップロードしてください。

{% if currentVersion == "free-pro-team@latest" %}
### サードパーティのバックアップツール

リポジトリのバックアップを自動化するセルフサービスのツールはたくさんあります。 オプトアウトしておらず、誰でもデータにアクセスできるようにする {% data variables.product.product_name %} 上の_すべての_パブリックリポジトリをアーカイブするアーカイブプロジェクトとは異なり、バックアップツールは_特定の_リポジトリからデータをダウンロードし、新しいブランチまたはディレクトリ内に整理します。 アーカイブプロジェクトの詳細については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。
You can back up all of a repository's Git data (such as project files and commit history), as well as much data from

{% data variables.product.product_name %} (such as issues and pull requests), with [BackHub](https://github.com/marketplace/backhub), which creates daily recurring backups of your repositories with snapshots up to 30 days back in time. BackHub は {% data variables.product.prodname_marketplace %}から利用できます。
{% endif %}
