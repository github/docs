---
title: プロジェクトボードをコピーする
intro: プロジェクトボードをコピーして、新しいプロジェクトを素早く作成できます。 頻繁に使われるプロジェクトボードや、高度にカスタマイズされたプロジェクトボードをコピーすることは、ワークフローの標準化に役立ちます。
redirect_from:
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  free-pro-team: '*'
topics:
  - Pull requests
---
プロジェクトボードをコピーすると、プロジェクトボードのタイトル、説明、自動化の設定を再利用できます。 プロジェクトボードをコピーすることで、同じようなワークフローのために新しいプロジェクトボードを手動で作成するプロセスをなくすことができます。

コピー元のプロジェクトボードへの読み取りアクセス、およびコピー先のリポジトリまたは Organization への書き込みアクセスが必要です。

プロジェクトボードを Organization にコピーすると、プロジェクトボードの表示はデフォルトでプライベートになります。表示設定は変更できます。 詳しい情報については「[プロジェクトボードの表示設定を変更する](/articles/changing-project-board-visibility/)」を参照してください。

プロジェクトボードの自動化も、デフォルトで有効になっています。 詳しい情報については「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards/)」を参照してください。

1. コピーしたいプロジェクトボードに移動します。
{% data reusables.project-management.click-menu %}
3. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックしてから、[**Copy**] をクリックします。 ![プロジェクトボードのサイドバーにある、ドロップダウンメニューの [Copy] オプション](/assets/images/help/projects/project-board-copy-setting.png)
4. [Owner] の下にあるドロップダウンメニューで、プロジェクトボードのコピー先にするリポジトリまたは Organization をクリックします。 ![ドロップダウンメニューから、コピーしたプロジェクトボードのオーナーを選択](/assets/images/help/projects/copied-project-board-owner.png)
5. 必要に応じて、[Project board name] の下に、コピーしたプロジェクトボードの名前を入力します。 ![コピーされたプロジェクトボードの名前を入力するフィールド](/assets/images/help/projects/copied-project-board-name.png)
6. 必要に応じて、他の人に読んでもらうために、[Description] の下に、コピーしたプロジェクトボードについての説明を入力します。 ![コピーしたプロジェクトボードの説明を入力するフィールド](/assets/images/help/projects/copied-project-board-description.png)
7. 必要に応じて、[Automation settings] の下で、設定済みの自動化されたワークフローをコピーするかどうかを選択します。 このオプションはデフォルトで有効になっています。 詳しい情報については「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards/)」を参照してください。 ![コピーしたプロジェクトボードの自動化設定を選択](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. [**Copy project**] をクリックします。 ![コピーを確定するボタン](/assets/images/help/projects/confirm-copy-project-board.png)
