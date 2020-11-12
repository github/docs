---
title: プロジェクトボードでカードをフィルタリングする
intro: プロジェクトボード上のカードをフィルタリングして、特定のカードを検索したりカードのサブセットを表示したりできます。
redirect_from:
  - /articles/filtering-cards-on-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

カードでは、任意のアサインされた人、マイルストーン、またはラベルをクリックして、その修飾子でプロジェクトをフィルタリングできます。 検索をクリアするには、同じアサインされた人、マイルストーン、またはラベルを再度クリックします。

また、各プロジェクトボードの上部にある [Filter cards] 検索バーを使用して、カードを検索することも可能です。 以下の検索修飾子をさまざまに組み合わせて使用したり、検索したいテキストを入力したりすることで、カードをフィルタリングできます。

- `author:USERNAME` を使用してカードを作者でフィルタする
- `assignee:USERNAME` または `no:assignee` を使用して、カードをアサインされた人でフィルタリングする
- `label:LABEL`、`label:"MULTI-WORD LABEL NAME"`、または `no:label` を使用して、カードをラベルでフィルタリングする
- `milestone:MY-MILESTONE` を使用して、カードをマイルストーンでフィルタリングする
- `state:open`、`state:closed`、または `state:merged` を使用して、カードを状態でフィルタリングする
- `review:none`、`review:required`、`review:approved`、または `review:changes_requested` を使用して、カードをレビューステータスでフィルタリングする
- `status:pending`、`status:success`、または `status:failure` を使用して、カードをチェックステータスでフィルタリングする
- `type:issue`、`type:pr`、または `type:note` を使用して、カードをタイプでフィルタリングする
- `is:open`、`is:closed`、または `is:merged`と、`is:issue`、`is:pr`、または `is:note` とを使用して、カードをステータスとタイプでフィルタリングする
- Filter cards by issues that are linked to a pull request by a closing reference using `linked:pr`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- `repo:ORGANIZATION/REPOSITORY` を使用して、Organization 全体のプロジェクトボード内のリポジトリでカードをフィルタリングする{% endif %}

1. フィルタリングしたいカードが含まれるプロジェクトボードに移動します。
2. プロジェクトのカード列の上で、[Filter cards] 検索バーをクリックして検索クエリを入力し、カードをフィルタリングします。 ![カードのフィルタリング検索バー](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**ヒント:** フィルタリングされたカードをドラッグアンドドロップしたり、キーボードのショートカットを使用して列間で移動させたりできます。 {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

### 参考リンク

- [プロジェクトボードについて](/articles/about-project-boards)
- [プロジェクトボードへの Issue およびプルリクエストの追加](/articles/adding-issues-and-pull-requests-to-a-project-board)
- 「[プロジェクトボードにノートを追加する](/articles/adding-notes-to-a-project-board)」
