---
title: Issueの作業のためのブランチの作成
intro: 直接Issueのページから作業のためのブランチを作成し、すぐに作業を開始できます。
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: issue-6234
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Issueのためのブランチの作成
---

{% note %}

**ノート:** Issueのためのブランチの作成機能は、現在パブリックベータであり、変更されることがあります。

{% endnote %}

## Issueに接続されているブランチについて
Issueに接続されているブランチは、Issueのサイドバーの"Development（開発）"セクションの下に表示されます。 それらのブランチの1つに対してPull Requestを作成すると、それは自動的にIssueにリンクされます。 そのブランチとの接続は削除され、そのPull Requestだけが"Development（開発）"セクションに表示されるようになります。 詳しい情報については「[プルリクエストのIssueへのリンク](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)」を参照してください。

## Issueのためのブランチの作成

リポジトリへの書き込み権限があれば、Issueのためのブランチを作成できます。 1つのIssueに複数のブランチをリンクできます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Issueのリスト中で、ブランチを作成したいIssueをクリックしてください。
4. 右のサイドバーの"Development（開発）"の下で、**Create a branch（ブランチの作成）**をクリックしてください。 そのIssueに、既にリンクされたブランチあるいはPull Requestがあるなら、{% octicon "gear" aria-label="The Gear icon" %}をクリックし、ドロップダウンメニューの下の**Create a branch（ブランチの作成）**をクリックしてください。 ![サイドバーでブランチの作成オプションがハイライトされているスクリーンショット](/assets/images/help/issues/create-a-branch.png)
5. デフォルトでは、新しいブランチはデフォルトのブランチから現在のリポジトリ内で作成されます。 "Create a branch for this issue（このIssueにブランチを作成）"ダイアログ中で求められる、ブランチ名と詳細を編集してください。 ![ブランチの作成ダイアログのオプションのスクリーンショット](/assets/images/help/issues/create-a-branch-options.png)
6. そのブランチでの作業をローカルで行うか、GitHub Desktop上でオープンするかを選択してください。
7. ブランチを作成する準備ができたら、**Create branch（ブランチの作成）**をクリックしてください。
