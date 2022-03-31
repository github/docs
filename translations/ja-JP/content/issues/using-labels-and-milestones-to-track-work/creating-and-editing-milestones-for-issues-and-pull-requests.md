---
title: Issue とPull Requestのマイルストーンの作成と削除
intro: リポジトリ内にある Issue やPull Requestのグループに関する進行状況を追跡するためのマイルストーンを作成できます。
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/creating-and-editing-milestones-for-issues-and-pull-requests
  - /articles/creating-milestones-for-issues-and-pull-requests
  - /articles/creating-and-editing-milestones-for-issues-and-pull-requests
  - /github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: マイルストーンの作成と編集
type: how_to
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}
4. 以下のオプションから 1 つ選択します:
    - 新しいマイルストーンを作成するには、[**New Milestone**] をクリックします。 ![[New milestone] ボタン](/assets/images/help/repository/new-milestone.png)
    - マイルストーンを編集するには、編集対象のマイルストーンの隣にある [**Edit**] をクリックします。 ![マイルストーンの編集](/assets/images/help/repository/edit-milestone.png)
5. マイルストーンのタイトル、説明、その他の変更を入力し、[**Create milestone**] または [**Save changes**] をクリックします。 マイルストーンはMarkdown構文をレンダリングします。 Markdown構文に関する詳しい情報については「[基本的な書き込みとフォーマットの構文](/github/writing-on-github/basic-writing-and-formatting-syntax)」を参照してください。

## マイルストーンの削除

マイルストーンを削除しても、Issue やPull Requestに影響はありません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}
4. 削除対象のマイルストーンの隣にある [**Delete**] をクリックします。 ![マイルストーンの削除](/assets/images/help/repository/delete-milestone.png)

## 参考リンク

- [マイルストーンについて](/articles/about-milestones)
- [Issue及びPull Requestとのマイルストーンの関連づけ](/articles/associating-milestones-with-issues-and-pull-requests)
- [マイルストーンの進捗の表示](/articles/viewing-your-milestone-s-progress)
- [マイルストーンによるIssue及びPull Requestのフィルタリング](/articles/filtering-issues-and-pull-requests-by-milestone)
