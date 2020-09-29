---
title: プロジェクトボードの自動化を設定する
intro: 指定したイベントが発生した時に Issue やプルリクエストをプロジェクトボードに移動させるよう、自動化されたワークフローを設定できます。
redirect_from:
  - /articles/configuring-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.project-management.automate-project-board-permissions %}詳しい情報については、「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards)」を参照してください。

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**参考**: すでに自動化を設定している列を編集するには、列の下にある [**Manage**] ボタンをクリックします。

{% endtip %}

1. 自動化したいプロジェクトボードに移動します。
2. 自動化したい列で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックします。 ![編集アイコン](/assets/images/help/projects/edit-column-button.png)
3. [**Manage automation**] をクリックします。 ![[Manage automation] ボタン](/assets/images/help/projects/manage-automation-button.png)
4. [Preset] ドロップダウンメニューで、自動化のプリセットを 1 つ選びます。 ![メニューから自動化のプリセットを選択](/assets/images/help/projects/select-automation.png)
5. 列に設定したいワークフロー自動化を選択します。 ![列の自動化オプションのリスト](/assets/images/help/projects/select-automation-options-existing-column.png)
6. [**Update automation**] をクリックします。

### 参考リンク
- [プロジェクトボードの自動化について](/articles/about-automation-for-project-boards)
