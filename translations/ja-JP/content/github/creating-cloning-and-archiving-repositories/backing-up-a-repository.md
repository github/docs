---
title: リポジトリのバックアップ
intro: '{% if currentVersion != "free-pro-team@latest" %}Git および {% endif %}API{% if currentVersion == "free-pro-team@latest" %}またはサードパーティのツール{% endif %}を使用して、リポジトリをバックアップできます。'
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
- [フォーク](/v3/repos/forks/#list-forks)
- [コメント](/v3/issues/comments/#list-comments-in-a-repository)
- [マイルストーン](/v3/issues/milestones/#list-milestones-for-a-repository)
- [ラベル](/v3/issues/labels/#list-all-labels-for-this-repository)
- [Watcher](/v3/activity/watching/#list-watchers)
- [Starを付けたユーザ](/v3/activity/starring/#list-stargazers)
- [プロジェクト](/v3/projects/#list-repository-projects)
{% endif %}

{% if currentVersion != "free-pro-team@latest" %}バックアップしたいすべての内容のローカルバージョンができたなら、zipアーカイブを作成して{% else %}アーカイブがダウンロードできたなら{% endif %}外部ハードディスクにコピーするか、[Google Drive](https://www.google.com/drive/)あるいは[ Dropbox](https://www.dropbox.com/)などのクラウドベースのバックアップサービスにアップロードしてください。

{% if currentVersion == "free-pro-team@latest" %}
### サードパーティのバックアップツール

リポジトリのバックアップを自動化するセルフサービスのツールはたくさんあります。 オプトアウトしておらず、誰でもデータにアクセスできるようにする {% data variables.product.product_name %} 上の_すべての_パブリックリポジトリをアーカイブするアーカイブプロジェクトとは異なり、バックアップツールは_特定の_リポジトリからデータをダウンロードし、新しいブランチまたはディレクトリ内に整理します。 アーカイブプロジェクトの詳細については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。

リポジトリのすべての Git データ (プロジェクトファイルやコミット履歴) は、{% data variables.product.product_name %}からのデータの大部分 (Issue やプルリクエストなど) と共に[ BackHub](https://github.com/marketplace/backhub)でバックアップできます。BackHub は、リポジトリの日次の循環バックアップを、最大で 30 日までさかのぼったスナップショットと共に作成します。 BackHub は {% data variables.product.prodname_marketplace %}から利用できます。
{% endif %}
