---
title: ラベルについて
intro: '{% data variables.product.product_name %}のラベルは、作業を編成して優先順位付けするための役に立ちます。 ラベルは、Issueやプルリクエストに適用して、優先度、分類、あるいはその他の有益な情報を示すことができます。'
redirect_from:
  - /articles/about-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

ラベルは、作成されたリポジトリに結びつけられています。 一度ラベルができれば、そのリポジトリ内で任意の Issue あるいはプルリクエストに使うことができます。 詳細は「[ラベルの作成](/articles/creating-a-label/)」を参照してください。

リポジトリへの読み取りアクセスを持つ人は、誰でもリポジトリのラベルを表示・検索できます。 ラベルの作成、編集、適用、削除をするためには、リポジトリに書き込みアクセスができなければなりません。

### デフォルトラベルの利用

{% data variables.product.product_name %} は、すべての新しいリポジトリにデフォルトのラベルを提供します。 これらのデフォルトのラベルを使って、リポジトリの標準的なワークフローを作成しやすくできます。

| ラベル                | 説明                                       |
| ------------------ | ---------------------------------------- |
| `bug`              | 予想外の問題あるいは意図しない振る舞いを示します                 |
| `documentation`    | ドキュメンテーションに改善や追加が必要であることを示します            |
| `duplicate`        | 同様の Issue あるいはプルリクエストを示します               |
| `enhancement`      | 新しい機能のリクエストを示します                         |
| `good first issue` | 初回のコントリビューターに適した Issue を示します             |
| `help wanted`      | メンテナーが Issue もしくはプルリクエストに助けを求めていることを示します |
| `invalid`          | Issue あるいはプルリクエストに関連性がなくなったことを示します       |
| `question`         | Issue あるいはプルリクエストにさらなる情報が必要なことを示します      |
| `wontfix`          | Issue あるいはプルリクエストの作業が継続されないことを示します       |

リポジトリの作成時に、すべての新しいリポジトリにデフォルトのラベルが含められますが、後でそのラベルを編集または削除できます。 詳細は「[ラベルの削除](/articles/deleting-a-label/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Organization のオーナーは、Organization 内のリポジトリのためのデフォルトラベルをカスタマイズできます。 詳しい情報については、「[Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 参考リンク

- [ラベルを使用してプロジェクトに役立つコントリビューションを促す](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)
{% endif %}
