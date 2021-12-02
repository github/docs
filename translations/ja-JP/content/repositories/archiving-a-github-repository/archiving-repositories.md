---
title: リポジトリのアーカイブ
intro: リポジトリをアーカイブし、すべてのユーザに対してリードオンリーとし、アクティブにメンテナンスされなくなったことを示すことができます。 アーカイブされたリポジトリのアーカイブを解除することもできます。
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## About repository archival

{% ifversion fpt or ghec %}
{% note %}

**ノート：**過去のリポジトリ単位の支払いプランを利用している場合、アーカイブされたリポジトリについても支払いが続くことになります。 アーカイブされたリポジトリに対する支払いをしたくない場合には、新しい製品にアップグレードしなければなりません。 詳細は「[{% data variables.product.prodname_dotcom %} の製品](/articles/github-s-products)」を参照してください。

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

リポジトリがアーカイブされると、コラボレータや Team の追加や削除ができなくなります。 リポジトリへのアクセス権を持つコントリビューターは、プロジェクトをフォークするか Star を付けることだけができます。

リポジトリがアーカイブされると、その Issue、プルリクエスト、コード、ラベル、マイルストーン、プロジェクト、wiki、リリース、コミット、タグ、ブランチ、リアクション、コードスキャンアラート、およびコメントが読み取り専用になります。 アーカイブされたリポジトリに変更を加えるには、まずそのリポジトリのアーカイブ解除をしなければなりません。

アーカイブされたリポジトリに対して検索ができます。 詳しい情報については[リポジトリの検索](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)を参照してください。 詳しい情報については[リポジトリの検索](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)を参照してください。 詳しい情報については[Issueやプルリクエストの検索](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)を参照してください。

## リポジトリをアーカイブへ保管

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. "Danger Zone" の下で [** Archive this repository**] (このリポジトリをアーカイブ) または [** Unarchive this repository**] (このリポジトリをアーカイブ解除) をクリックします。 ![[Archive this repository] ボタン](/assets/images/help/repository/archive-repository.png)
4. 警告を読んでください。
5. アーカイブあるいはアーカイブを解除したいリポジトリの名前を入力してください。 ![リポジトリのアーカイブの警告](/assets/images/help/repository/archive-repository-warnings.png)
6. [**I understand the consequences, archive this repository**] (結果を承知した上で、このリポジトリをアーカイブ) をクリックします。
