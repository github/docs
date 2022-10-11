---
title: リポジトリのバックアップ
intro: '{% ifversion ghes or ghae %}Git および {% endif %}API{% ifversion fpt %}またはサードパーティのツール{% endif %}を使用して、リポジトリをバックアップできます。'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

{% ifversion fpt %}

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

Once you have {% ifversion ghes or ghae %}a local version of all the content you want to back up, you can create a zip archive and {% else %}downloaded your archive, you can {% endif %}copy it to an external hard drive and/or upload it to a cloud-based backup or storage service such as [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/).

{% ifversion fpt %}
## サードパーティのバックアップツール

リポジトリのバックアップを自動化するセルフサービスのツールはたくさんあります。 オプトアウトしておらず、誰でもデータにアクセスできるようにする {% data variables.product.product_name %} 上の_すべての_パブリックリポジトリをアーカイブするアーカイブプロジェクトとは異なり、バックアップツールは_特定の_リポジトリからデータをダウンロードし、新しいブランチまたはディレクトリ内に整理します。 アーカイブプロジェクトの詳細については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。 自動バックアップツールに関する詳しい情報については、[{% data variables.product.prodname_marketplace %} のバックアップユーティリティのカテゴリ](https://github.com/marketplace?category=backup-utilities)を参照してください。
{% endif %}
