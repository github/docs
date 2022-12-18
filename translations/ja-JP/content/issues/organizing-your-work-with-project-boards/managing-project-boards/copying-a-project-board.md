---
title: '{% data variables.product.prodname_project_v1 %}のコピー'
intro: '{% data variables.projects.projects_v1_board %}をコピーして、新しいプロジェクトをすばやく作成できます。 頻繁に使用される、または高度にカスタマイズされた{% data variables.projects.projects_v1_boards %}をコピーすると、ワークフローの標準化に役立ちます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108941'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}をコピーすると、{% data variables.projects.projects_v1_board %}のタイトル、説明、および自動化構成を再利用できます。 {% data variables.projects.projects_v1_boards %}をコピーすると、同様のワークフローで新しい{% data variables.projects.projects_v1_boards %}を作成する手動プロセスを排除できます。

{% data variables.projects.projects_v1_board %}を書き込みアクセスがあるリポジトリまたは Organization にコピーするには、読み取りアクセスが必要です。

{% data variables.projects.projects_v1_board %}を Organization にコピーすると、{% data variables.projects.projects_v1_board %}の可視性は既定で非公開になり、可視性を変更するオプションが設定されます。 詳しくは、「[{% data variables.product.prodname_project_v1 %}の可視性の変更](/articles/changing-project-board-visibility/)」を参照してください。

既定では、{% data variables.projects.projects_v1_board %}の自動化も有効になっています。 詳しくは、「[{% data variables.product.prodname_projects_v1 %}の自動化について](/articles/about-automation-for-project-boards/)」を参照してください。

1. コピーする{% data variables.projects.projects_v1_board %}に移動します。
{% data reusables.project-management.click-menu %}
3. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、 **[コピー]** をクリックします。
![プロジェクトボードのサイドバーにある、ドロップダウンメニューの [Copy] オプション](/assets/images/help/projects/project-board-copy-setting.png)
4. [Owner] の下にあるドロップダウンメニューで、プロジェクトボードのコピー先にするリポジトリまたは Organization をクリックします。
![ドロップダウンメニューから、コピーしたプロジェクトボードのオーナーを選択](/assets/images/help/projects/copied-project-board-owner.png)
5. 必要に応じて、[プロジェクト ボード名] に、コピーした{% data variables.projects.projects_v1_board %}の名前を入力します。
![コピーされたプロジェクトボードの名前を入力するフィールド](/assets/images/help/projects/copied-project-board-name.png)
6. 必要に応じて、他の人に読んでもらうために、[Description] の下に、コピーしたプロジェクトボードについての説明を入力します。
![コピーしたプロジェクトボードの説明を入力するフィールド](/assets/images/help/projects/copied-project-board-description.png)
7. 必要に応じて、[Automation settings] の下で、設定済みの自動化されたワークフローをコピーするかどうかを選択します。 既定では、このオプションは有効になっています。 詳しくは、「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards/)」を参照してください。
![コピーされたプロジェクトボードの自動化設定を選ぶ](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. **[プロジェクトのコピー]** をクリックします。
![[コピーを確定する] ボタン](/assets/images/help/projects/confirm-copy-project-board.png)
