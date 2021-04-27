---
title: プルリクエストでフィードバックをする
intro: 各課題のリポジトリ内の、特別なプルリクエストで学生にフィードバックをすることができます。
permissions: リポジトリへの読み取り権限を持つユーザは、リポジトリへのプルリクエストにおいてフィードバックをすることができます。
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
---

### 課題へのフィードバック用プルリクエストについて

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

課題へのフィードバック用プルリクエストを有効にすると、{% data variables.product.prodname_classroom %}は各学生またはチームの課題リポジトリ内に、**Feedback**というタイトルの特別なプルリクエストを作成します。 このプルリクエストは、課題リポジトリのデフォルトブランチに学生がプッシュした各コミットに自動的に表示されます。

### 必要な環境

フィードバック用プルリクエストを作成してアクセスすするには、課題の作成時にフィードバック用プリルクエストを有効にする必要があります。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

### 課題のプルリクエストにフィードバックを行う

{% data reusables.classroom.sign-into-github-classroom %}
1. クラスルームのリストで、レビューする課題のあるクラスルームをクリックします。 ![Organizationのクラスルームのリストにあるクラスルーム](/assets/images/help/classroom/click-classroom-in-list.png)
{% data reusables.classroom.click-assignment-in-list %}
1. 提出物の右側にある、[**Review**] をクリックします。 ![提出した課題のリストにある、課題の [Review] ボタン](/assets/images/help/classroom/assignments-click-review-button.png)
1. プルリクエストをレビューします。 詳しい情報については、「[プルリクエストへコメントする](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)」を参照してください。

### 参考リンク

- 「[{% data variables.product.prodname_classroom %}とIDEの統合](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)」
