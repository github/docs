---
title: ラベルを管理する
intro: 'ラベルの作成、編集、適用、削除によって、{% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueとPull Request{% endif %}を分類できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels/
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
  ### ラベルについて

{% data variables.product.product_name %}上の作業を、{% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueとPull Request{% endif %}を分類するためのラベルを作成することによって管理できます。 ラベルが作成されたリポジトリ内にラベルを適用できます。 ラベルがあれば、そのリポジトリ内の任意の{% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}にそのラベルを使用できます。

リポジトリへの読み取りアクセスを持つ人は、誰でもリポジトリのラベルを表示・検索できます。 リポジトリへのトリアージアクセスを持つすべてのユーザは、既存のラベルを適用/却下できます。 ラベルの作成、編集、適用、削除をするためには、リポジトリに書き込みアクセスができなければなりません。

### デフォルトラベルについて

{% data variables.product.product_name %} は、すべての新しいリポジトリにデフォルトのラベルを提供します。 これらのデフォルトラベルを使用して、リポジトリに標準のワークフローを作成しやすくすることができます。

| ラベル                | 説明                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | 予期しない問題または意図しない動作を示します{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentation`    | ドキュメンテーションに改善や追加が必要であることを示します{% endif %}
| `duplicate`        | 同様の{% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}を示します。             |
| `enhancement`      | 新しい機能のリクエストを示します                                                                                                                         |
| `good first issue` | 初回のコントリビューターに適した Issue を示します                                                                                                             |
| `help wanted`      | メンテナーが Issue もしくはプルリクエストに助けを求めていることを示します                                                                                                 |
| `invalid`          | {% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}が関係なくなっていることを示します。    |
| `question`         | {% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}にさらに情報が必要であることを示します。  |
| `wontfix`          | {% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}に対する作業が継続されないことを示します。 |

リポジトリの作成時に、すべての新しいリポジトリにデフォルトのラベルが含められますが、後でそのラベルを編集または削除できます。

`good first issue`ラベル付きのIssueは、リポジトリの`contribute`ページを展開するために使われます。 `contribute`ページの例については[github/docs/contribute](https://github.com/github/docs/contribute)を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Organization のオーナーは、Organization 内のリポジトリのためのデフォルトラベルをカスタマイズできます。 詳しい情報については、「[Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」を参照してください。
{% endif %}

### ラベルの作成

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. 検索フィールドの右にある、[**New label**] をクリックします。
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### ラベルの適用

1. {% if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、ディスカッション{% else %}IssueあるいはPull Request{% endif %}にアクセスしてください。
1. 右のサイドバーで、"Labels（ラベル）"の右の{% octicon "gear" aria-label="The gear icon" %}をクリックし、続いてラベルをクリックしてください !["ラベル" ドロップダウンメニュー](/assets/images/help/issues/labels-drop-down.png)

### ラベルの編集

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### ラベルの削除

ラベルを削除すると、Issue とプルリクエストからラベルが削除されます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### 参考リンク
- 「[Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels)」{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- 「[Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- 「[ラベルを使用してプロジェクトに役立つコントリビューションを促す](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)」{% endif %}
