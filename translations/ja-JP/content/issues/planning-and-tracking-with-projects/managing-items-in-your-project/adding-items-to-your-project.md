---
title: '{% data variables.projects.project_v2 %} への項目の追加'
shortTitle: Adding items
intro: pull request、issue、issue のドラフトをプロジェクトに個別または一括で追加する方法について説明します。
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107614'
---
プロジェクトは、ドラフトのIssue、Issue、Pull Requestを追跡できます。 

{% note %}

**注:** プロジェクトには、最大で {% data variables.projects.item_limit %} 項目と {% data variables.projects.archived_item_limit %} アーカイブ済み項目を含めることができます。 {% ifversion projects-v2-auto-archive %}特定の条件を満たす項目を自動的にアーカイブする方法について詳しくは、「[項目を自動的にアーカイブする](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)」を参照してください。{% endif %}

{% endnote %}

### プロジェクトへの issue と pull request の追加

#### issue または pull request の URL の貼り付け

{% data reusables.projects.add-item-via-paste %}

#### IssueあるいはPull Requestの検索

{% data reusables.projects.add-item-bottom-row %}
2. <kbd>#</kbd> を入力します。
3. Pull RequestあるいはIssueがあるリポジトリを選択してください。 リポジトリ名の一部を入力して、選択肢を狭めることができます。
  ![issue の URL を貼り付けてプロジェクトに追加するところを示すスクリーンショット](/assets/images/help/projects-v2/add-item-select-repo.png)
4. IssueあるいはPull Requestを選択してください。 タイトルの一部を入力して、選択肢を狭めることができます。
  ![issue の URL を貼り付けてプロジェクトに追加するところを示すスクリーンショット](/assets/images/help/projects-v2/add-item-select-issue.png)

#### issue と pull request の一括追加

1. プロジェクトの一番下の行で、{% octicon "plus" aria-label="plus icon" %} をクリックします。
  ![プロジェクトの一番下の + ボタンを示すスクリーンショット](/assets/images/help/projects-v2/omnibar-add.png)
1. **[リポジトリから項目を追加]** をクリックします。
  ![[リポジトリから項目を追加する] メニュー項目を示すスクリーンショット](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### リポジトリからの複数の issue または pull request を追加する

1. {% data variables.location.product_location %} で、プロジェクトに追加する issue または pull request を含むリポジトリに移動します。
{% data reusables.repositories.sidebar-issue-pr %}
1. プロジェクトに追加する各 issue を、そのタイトルの左側で選びます。
  ![issue または pull request を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/issues/select-issue-checkbox.png)
1. ページ上のすべての issue または pull request を選ぶ必要がある場合は、issue または pull request の一覧の先頭ですべてを選びます。 
  ![画面上のすべての項目を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/issues/select-all-checkbox.png)
1. issue または pull request のリストの上にある **[プロジェクト]** をクリックします。 
  ![[プロジェクト] オプションを示すスクリーンショット](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. 選んだ issue または pull request を追加するプロジェクトをクリックします。
  ![画面上のすべての項目を選ぶチェック ボックスを示すスクリーンショット](/assets/images/help/projects-v2/issue-index-select-project.png)

#### IssueあるいはPull Requestの中からプロジェクトをアサインする

1. プロジェクトに追加したいIssueあるいはPull Requestにアクセスしてください。
2. サイド バーの **[プロジェクト]** をクリックします。
  ![issue のサイドバーの "プロジェクト" を示すスクリーンショット](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. IssueあるいはPull Requestを追加したいプロジェクトを選択してください。
  ![issue のサイドバーからプロジェクトを選んだことを示すスクリーンショット](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. あるいは、カスタムフィールドに入力してください。
  ![プロジェクトサイドバー](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### コマンド パレットを使用して issue または pull request を追加する

1. {% data reusables.projects.open-command-palette %}
1. 「項目の追加」と入力し、<kbd>Return</kbd> キーを押します。
{% data reusables.projects.bulk-add %}

### ドラフトIssueの作成

ドラフトIssueは、素早くアイデアを捕捉するのに役立ちます。 リポジトリから参照される issue や pull request とは異なり、issue のドラフトはプロジェクトにのみ存在します。

{% data reusables.projects.add-draft-issue %}

ドラフトIssueには、タイトル、テキストの本文、アサインされた人、プロジェクトからの任意のカスタムフィールドを持たせることができます。 ドラフトIssueのリポジトリ、ラベル、マイルストーンを展開するには、まずドラフトIssueをIssueに変換しなければなりません。 詳細については、「[ドラフト Issue の Issue への変換](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)」を参照してください。

{% note %}

**注:** ドラフト Issue が Issue に変換されなければ、ドラフト Issue に割り当てられたりメンションされたりした人は、通知を受けません。

{% endnote %}
