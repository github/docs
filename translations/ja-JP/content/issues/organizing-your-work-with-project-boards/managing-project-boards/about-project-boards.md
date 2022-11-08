---
title: '{% data variables.product.prodname_projects_v1 %}について'
intro: '{% data variables.product.product_name %} の{% data variables.product.prodname_projects_v1_caps %}は、作業の整理と優先順位付けに役立ちます。 {% data variables.projects.projects_v1_boards %}は、特定の機能の作業、包括的なロードマップ、さらにはリリースのチェックリストのためにも作成できます。 {% data variables.product.prodname_projects_v1 %}を使用すると、ニーズに合わせてカスタマイズされたワークフローを柔軟に作成できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107622'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %}は、issue、pull request、選んだ列内でカードとして分類されるノートから構成されます。 列内のカードの並び替え、列から列へのカードの移動、および列の順序の変更には、ドラッグアンドドロップまたはキーボードショートカットが利用できます。

{% data variables.projects.projects_v1_board_caps %}のカードには、ラベル、担当者、状態、オープンした人など、issue や pull request に関連するメタデータが含まれます。 {% data reusables.project-management.edit-in-project %}

タスクのリマインダとして機能するノートを列内に作成し、{% data variables.location.product_location %}上の任意のリポジトリからの issue や pull request を参照させたり、{% data variables.projects.projects_v1_board %}に関係する情報を追加したりできます。 ノートにリンクを追加することで、他の{% data variables.projects.projects_v1_board %}を参照するカードを作成することもできます。 ノートでは要求を満たせない場合、ノートを Issue に変換することができます。 ノートを issue に変換する方法について詳しくは、「[{% data variables.product.prodname_project_v1 %}へのノートの追加](/articles/adding-notes-to-a-project-board)」を参照してください。

プロジェクトボードには以下の種類があります:

- **ユーザー所有の{% data variables.projects.projects_v1_board %}** には、すべての個人用リポジトリの issue と pull request を含めることができます。
- **Organization 全体の{% data variables.projects.projects_v1_board %}** には、Organization に属するすべてのリポジトリの issue と pull request を含めることができます。  {% data reusables.project-management.link-repos-to-project-board %} 詳しくは、「[{% data variables.product.prodname_project_v1 %}へのリポジトリのリンク](/articles/linking-a-repository-to-a-project-board)」を参照してください。
- **リポジトリ {% data variables.projects.projects_v1_board %}** は、1 つのリポジトリ内の issue と pull request に範囲設定されます。 他のリポジトリの Issue やプルリクエストを参照するノートも含まれます。

## {% data variables.projects.projects_v1_boards %} の作成と表示

Organization の{% data variables.projects.projects_v1_board %}を作成するには、Organization のメンバーである必要があります。 Organization の所有者と{% data variables.projects.projects_v1_board %}の管理アクセス許可を持つユーザーは、{% data variables.projects.projects_v1_board %} へのアクセスをカスタマイズできます。

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

Organization が所有する{% data variables.projects.projects_v1_board %}に、あなたが表示アクセス許可を持っていないリポジトリからの issue あるいは pull request が含まれている場合、そのカードは編集されます。  詳しくは、「[Organization の{% data variables.product.prodname_project_v1_caps %}のアクセス許可](/articles/project-board-permissions-for-an-organization)」を参照してください。

アクティビティ ビューには、誰かが作成したカードや、列間での移動など、{% data variables.projects.projects_v1_board %}の最近の履歴が表示されます。 アクティビティビューにアクセスするには、 **[メニュー]** をクリックして下にスクロールします。

{% data variables.projects.projects_v1_board %}上の特定のカードを検索したり、カードのサブセットを表示したりするには、{% data variables.projects.projects_v1_board %} カードをフィルター処理できます。 詳しくは、「[{% data variables.product.prodname_project_v1 %}でのカードのフィルター処理](/articles/filtering-cards-on-a-project-board)」を参照してください。

ワークフローを簡素化し、完了したタスクが{% data variables.projects.projects_v1_board %}に混ざらないように、カードをアーカイブできます。 詳しくは、「[{% data variables.product.prodname_project_v1 %}でのカードのアーカイブ](/articles/archiving-cards-on-a-project-board)」を参照してください。

{% data variables.projects.projects_v1_board %} タスクをすべて完了した場合、または{% data variables.projects.projects_v1_board %}を使用する必要がなくなった場合は、{% data variables.projects.projects_v1_board %}を閉じることができます。 詳しくは、「[{% data variables.product.prodname_project_v1 %}の終了](/articles/closing-a-project-board)」を参照してください。

別の方法で作業を追跡したい場合は、[リポジトリ内の{% data variables.projects.projects_v1_boards %}を無効にしたり](/articles/disabling-project-boards-in-a-repository)、[Organization 内の{% data variables.projects.projects_v1_boards %}を無効](/articles/disabling-project-boards-in-your-organization)にしたりもできます。

{% data reusables.project-management.project-board-import-with-api %}

## {% data variables.projects.projects_v1_boards %}のテンプレート

テンプレートを使用すると、新しい{% data variables.projects.projects_v1_board %}をすばやく設定できます。 テンプレートを使用して{% data variables.projects.projects_v1_board %}を作成する場合、新しいボードには列と、{% data variables.product.prodname_projects_v1 %}を使用するためのヒントがあるカードが含まれます。 また、自動化が設定済みのテンプレートを選択することもできます。

| テンプレート | 説明 |
| --- | --- |
| Basic kanban | [To do]、[In progress]、[Done] 列でタスクを追跡します。 |
| Automated kanban | カードは自動的に [To do]、[In progress]、[Done] の列間を移動します。 | 
| Automated kanban with review | プルリクエストレビューのステータスのための追加のトリガーで、カードは [To do]、[In progress]、[Done] 列の間を自動的に移動します。 |
| Bug triage | [To do]、[High priority]、[Low priority]、[Closed] 列でバグのトリアージと優先順位付けをします。 |

{% data variables.product.prodname_projects_v1 %}の自動化について詳しくは、「[{% data variables.product.prodname_projects_v1 %}の自動化について](/articles/about-automation-for-project-boards)」を参照してください。

![基本的なかんばんテンプレートを使用した{% data variables.product.prodname_project_v1 %}](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## 参考資料

- 「[{% data variables.product.prodname_project_v1 %}の作成](/articles/creating-a-project-board)」
- 「[{% data variables.product.prodname_project_v1 %}の編集](/articles/editing-a-project-board)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_project_v1 %}のコピー](/articles/copying-a-project-board)」{% endif %}
- 「[{% data variables.product.prodname_project_v1 %}への issue と pull request の追加](/articles/adding-issues-and-pull-requests-to-a-project-board)」
- 「[Organization の{% data variables.product.prodname_project_v1_caps %}のアクセス許可](/articles/project-board-permissions-for-an-organization)」
- 「[キーボードショートカット](/articles/keyboard-shortcuts/#project-boards)」
