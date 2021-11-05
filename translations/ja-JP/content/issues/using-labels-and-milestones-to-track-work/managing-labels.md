---
title: ラベルを管理する
intro: 'ラベルの作成、編集、適用、削除によって、{% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueとPull Request{% endif %}を分類できます。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
---
  ## ラベルについて

{% data variables.product.product_name %}上の作業を、{% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueとPull Request{% endif %}を分類するためのラベルを作成することによって管理できます。 ラベルが作成されたリポジトリ内にラベルを適用できます。 ラベルがあれば、そのリポジトリ内の任意の{% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}にそのラベルを使用できます。

## デフォルトラベルについて

{% data variables.product.product_name %} は、すべての新しいリポジトリにデフォルトのラベルを提供します。 これらのデフォルトラベルを使用して、リポジトリに標準のワークフローを作成しやすくすることができます。

| ラベル                | 説明                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `bug`              | 予想外の問題あるいは意図しない振る舞いを示します{% ifversion fpt or ghes or ghec %}
| `documentation`    | ドキュメンテーションに改善や追加が必要であることを示します{% endif %}
| `duplicate`        | 同様の{% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}を示します。             |
| `enhancement`      | 新しい機能のリクエストを示します                                                                                                   |
| `good first issue` | 初回のコントリビューターに適した Issue を示します                                                                                       |
| `help wanted`      | メンテナーが Issue もしくはプルリクエストに助けを求めていることを示します                                                                           |
| `invalid`          | {% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}が関係なくなっていることを示します。    |
| `question`         | {% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}にさらに情報が必要であることを示します。  |
| `wontfix`          | {% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueやPull Request{% endif %}に対する作業が継続されないことを示します。 |

リポジトリの作成時に、すべての新しいリポジトリにデフォルトのラベルが含められますが、後でそのラベルを編集または削除できます。

Issues with the `good first issue` label are used to populate the repository's `contribute` page. `contribute`ページの例については[github/docs/contribute](https://github.com/github/docs/contribute)を参照してください。

{% ifversion fpt or ghes or ghec %}
Organization のオーナーは、Organization 内のリポジトリのためのデフォルトラベルをカスタマイズできます。 詳しい情報については、「[Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」を参照してください。
{% endif %}

## ラベルの作成

Anyone with write access to a repository can create a label.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. 検索フィールドの右にある、[**New label**] をクリックします。
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

## Applying a label

Anyone with triage access to a repository can apply and dismiss labels.

1. {% ifversion fpt or ghec %}Issue、Pull Request、ディスカッション{% else %}IssueあるいはPull Request{% endif %}にアクセスしてください。
1. 右のサイドバーで、"Labels（ラベル）"の右の{% octicon "gear" aria-label="The gear icon" %}をクリックし、続いてラベルをクリックしてください !["ラベル" ドロップダウンメニュー](/assets/images/help/issues/labels-drop-down.png)

## ラベルの編集

Anyone with write access to a repository can edit existing labels.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

## ラベルの削除

Anyone with write access to a repository can delete existing labels.

ラベルを削除すると、Issue とプルリクエストからラベルが削除されます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

## 参考リンク
- "[Filtering and searching issues and pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"{% ifversion fpt or ghes or ghec %}
- 「[Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」{% endif %}{% ifversion fpt or ghec %}
- 「[ラベルを使用してプロジェクトに役立つコントリビューションを促す](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)」{% endif %}
