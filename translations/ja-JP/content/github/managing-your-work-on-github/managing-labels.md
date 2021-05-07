---
title: ラベルを管理する
intro: ラベルを作成、編集、適用、および削除することで、Issue およびプルリクエストを分類できます。
redirect_from:
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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### ラベルについて

作業を管理するとき、{% data variables.product.product_name %} ラベルを作成して Issue とプルリクエストを分類することができます。 ラベルが作成されたリポジトリ内にラベルを適用できます。 ラベルが作成されると、そのリポジトリ内の任意の Issue またはプルリクエストでラベルを使用できます。

リポジトリへの読み取りアクセスを持つ人は、誰でもリポジトリのラベルを表示・検索できます。 リポジトリへのトリアージアクセスを持つすべてのユーザは、既存のラベルを適用/却下できます。 ラベルの作成、編集、適用、削除をするためには、リポジトリに書き込みアクセスができなければなりません。

### デフォルトラベルについて

{% data variables.product.product_name %} は、すべての新しいリポジトリにデフォルトのラベルを提供します。 これらのデフォルトラベルを使用して、リポジトリに標準のワークフローを作成しやすくすることができます。

| ラベル                | 説明                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | 予期しない問題または意図しない動作を示します{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentation`    | ドキュメンテーションに改善や追加が必要であることを示します{% endif %}
| `duplicate`        | 同様の Issue あるいはプルリクエストを示します                                                                                                |
| `enhancement`      | 新しい機能のリクエストを示します                                                                                                          |
| `good first issue` | 初回のコントリビューターに適した Issue を示します                                                                                              |
| `help wanted`      | メンテナーが Issue もしくはプルリクエストに助けを求めていることを示します                                                                                  |
| `invalid`          | Issue あるいはプルリクエストに関連性がなくなったことを示します                                                                                        |
| `question`         | Issue あるいはプルリクエストにさらなる情報が必要なことを示します                                                                                       |
| `wontfix`          | Issue あるいはプルリクエストの作業が継続されないことを示します                                                                                        |

リポジトリの作成時に、すべての新しいリポジトリにデフォルトのラベルが含められますが、後でそのラベルを編集または削除できます。

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

### Issue およびプルリクエストへのラベルの適用


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.repositories.select-items-in-issue-or-pr-list %}
4. 右上で [**Label**] をクリックし、続けて既存のラベル名を入力してください。 ラベルの名前をクリックして、選択されたアイテムに関連付けてください。 ![Issue のマイルストーン割り当てドロップダウンメニュー](/assets/images/help/issues/issues_applying_labels_dropdown.png)

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
