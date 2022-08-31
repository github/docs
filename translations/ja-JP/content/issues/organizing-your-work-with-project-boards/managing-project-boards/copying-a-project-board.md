---
title: '{% data variables.product.prodname_project_v1 %}のコピー'
intro: '新しいプロジェクトを素早く作成するために、{% data variables.projects.projects_v1_board %}をコピーできます。 頻繁に使われる、あるいは高度にカスタマイズされた{% data variables.projects.projects_v1_boards %}をコピーすることは、ワークフローの標準化に役立ちます。'
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
---

{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}をコピーすると、{% data variables.projects.projects_v1_board %}のタイトル、説明、自動化設定を再利用できます。 {% data variables.projects.projects_v1_boards %}をコピーすることで、同じようなワークフローのために新しい{% data variables.projects.projects_v1_boards %}を作成する手動のプロセスを排除できます。

書き込みアクセスを持っているリポジトリもしくはOrganizationに{% data variables.projects.projects_v1_board %}をコピーするには、そのボードへの読み取りアクセスを持っていなければなりません。

{% data variables.projects.projects_v1_board %}をOrganizationにコピーすると、その{% data variables.projects.projects_v1_board %}の可視性はデフォルトでプライベートになりますが、可視性を変更するオプションがあります。 詳しい情報については「[{% data variables.product.prodname_project_v1 %}の可視性の変更](/articles/changing-project-board-visibility/)」を参照してください。

{% data variables.projects.projects_v1_board %}の自動化も、デフォルトで有効化されています。 詳しい情報については「[{% data variables.product.prodname_projects_v1 %}の自動化について](/articles/about-automation-for-project-boards/)」を参照してください。

1. コピーしたい{% data variables.projects.projects_v1_board %}にアクセスしてください。
{% data reusables.project-management.click-menu %}
3. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックしてから、[**Copy**] をクリックします。 ![プロジェクトボードのサイドバーにある、ドロップダウンメニューの [Copy] オプション](/assets/images/help/projects/project-board-copy-setting.png)
4. [Owner] の下にあるドロップダウンメニューで、プロジェクトボードのコピー先にするリポジトリまたは Organization をクリックします。 ![ドロップダウンメニューから、コピーしたプロジェクトボードのオーナーを選択](/assets/images/help/projects/copied-project-board-owner.png)
5. あるいは、"Project board name（プロジェクトボード名）"の下で、コピーされた{% data variables.projects.projects_v1_board %}の名前を入力してください。 ![コピーされたプロジェクトボードの名前を入力するフィールド](/assets/images/help/projects/copied-project-board-name.png)
6. 必要に応じて、他の人に読んでもらうために、[Description] の下に、コピーしたプロジェクトボードについての説明を入力します。 ![コピーしたプロジェクトボードの説明を入力するフィールド](/assets/images/help/projects/copied-project-board-description.png)
7. 必要に応じて、[Automation settings] の下で、設定済みの自動化されたワークフローをコピーするかどうかを選択します。 このオプションはデフォルトで有効になっています。 詳しい情報については「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards/)」を参照してください。 ![コピーしたプロジェクトボードの自動化設定を選択](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. [**Copy project**] をクリックします。 ![コピーを確定するボタン](/assets/images/help/projects/confirm-copy-project-board.png)
