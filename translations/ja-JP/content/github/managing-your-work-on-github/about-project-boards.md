---
title: プロジェクトボードについて
intro: '{% data variables.product.product_name %}のプロジェクトボードは、作業を整理して優先順位付けするための役に立ちます。 プロジェクトボードは、特定の機能の作業、包括的なロードマップ、さらにはリリースのチェックリストのためにも作成できます。 プロジェクトボードを使うと、要求に適したカスタマイズされたワークフローを作成する柔軟性が得られます。'
redirect_from:
  - /articles/about-projects/
  - /articles/about-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

プロジェクトボードは、Issue、プルリクエスト、選択した列内でカードとして分類されるノートから構成されます。 列内のカードの並び替え、列から列へのカードの移動、および列の順序の変更には、ドラッグアンドドロップまたはキーボードショートカットが利用できます。

プロジェクトボードのカードには、ラベル、アサインされた人、スタータス、オープンした人など、Issueやプルリクエストに関連するメタデータが含まれます。 {% data reusables.project-management.edit-in-project %}

タスクのリマインダとして機能するノートを列内に作成し、{% data variables.product.product_name %} 上の任意のリポジトリからの Issue やプルリクエストを参照させたり、プロジェクトボードに関係する情報を追加したりすることができます。 ノートにリンクを追加することで、他のプロジェクトを参照するカードを作成することもできます。 ノートでは要求を満たせない場合、ノートを Issue に変換することができます。 プロジェクトボードのノートのIssueへの変換に関する詳しい情報については[プロジェクトボードへのノートの追加](/articles/adding-notes-to-a-project-board)を参照してください。

プロジェクトボードには以下の種類があります:

- **ユーザが所有するプロジェクトボード**には、任意の個人リポジトリからの Issue およびプルリクエストを含めることができます。
- **Organization内プロジェクトボード**は、Organizationに属する任意のリポジトリからのIssueやプルリクエストを含むことができます。  {% data reusables.project-management.link-repos-to-project-board %}詳細は「[リポジトリをプロジェクトボードにリンクする](/articles/linking-a-repository-to-a-project-board)」を参照してください。
- **リポジトリプロジェクトボード**は、単一のリポジトリ内の Issue とプルリクエストを対象とします。 他のリポジトリの Issue やプルリクエストを参照するノートも含まれます。

### プロジェクトボードの作成と表示

Organization にプロジェクトボードを作成するには、Organization のメンバーでなければなりません。 Organization のオーナーおよびプロジェクトボードの管理者権限を持っている人は、プロジェクトボードへのアクセスをカスタマイズできます。

Organization が所有するプロジェクトボードに、あなたが表示する権限を持っていないリポジトリからの Issue あるいはプルリクエストが含まれている場合、そのカードは削除編集されます。  詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

アクティビティビューには、誰かが作成したカードや、列間での移動など、プロジェクトの最近の履歴が表示されます。 アクティビティビューにアクセスするには、[**Menu**] をクリックしてスクロールダウンします。

プロジェクトボード上で特定のカードを見つける、あるいはカード群の一部を見るために、プロジェクトボードカードをフィルタリングできます。 詳細は「[プロジェクトボード上でカードをフィルタリングする](/articles/filtering-cards-on-a-project-board)」を参照してください。

ワークフローをシンプルにし、完了したタスクをプロジェクトボードから外しておくために、カードをアーカイブできます。 詳細は「[プロジェクトボードのカードをアーカイブする](/articles/archiving-cards-on-a-project-board)」を参照してください。

プロジェクトボードのタスクがすべて完了した、あるいはプロジェクトボードを使う必要がなくなったりした場合には、プロジェクトボードをクローズできます。 詳しい情報については[プロジェクトボードのクローズ](/articles/closing-a-project-board)を参照してください。

また、別の方法で作業を追跡したい場合は、[リポジトリ中でプロジェクトボードを無効化する](/articles/disabling-project-boards-in-a-repository)、あるいは[Organization 内でプロジェクトボードを無効化する](/articles/disabling-project-boards-in-your-organization)こともできます。

{% data reusables.project-management.project-board-import-with-api %}

### プロジェクトボードのテンプレート

テンプレートを使って、新しいプロジェクトボードを素早くセットアップできます。 テンプレートを使用してプロジェクトボードを作成すると、新しいボードには、列だけでなく、プロジェクトボードの便利な利用方法が書かれたカードが付きます。 また、自動化が設定済みのテンプレートを選択することもできます。

| テンプレート                       | 説明                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------ |
| Basic kanban                 | [To do]、[In progress]、[Done] 列でタスクを追跡します。                                      |
| Automated kanban             | カードは自動的に [To do]、[In progress]、[Done] の列間を移動します。                               |
| Automated kanban with review | プルリクエストレビューのステータスのための追加のトリガーで、カードは [To do]、[In progress]、[Done] 列の間を自動的に移動します。 |
| Bug triage                   | [To do]、[High priority]、[Low priority]、[Closed] 列でバグのトリアージと優先順位付けをします。         |

プロジェクトボードのための自動化に関する詳しい情報については、「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards)」を参照してください。

![basic kanban テンプレートでのプロジェクトボード](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

### 参考リンク

- [プロジェクトボードの作成](/articles/creating-a-project-board)
- [プロジェクトボードの自動化を設定する](/articles/editing-a-project-board){% if currentVersion == "free-pro-team@latest" %}
- [プロジェクトボードのコピー](/articles/copying-a-project-board)
{% endif %}
- [プロジェクトボードへの Issue およびプルリクエストの追加](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [Organization のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization)
- [キーボードショートカット](/articles/keyboard-shortcuts/#project-boards)
