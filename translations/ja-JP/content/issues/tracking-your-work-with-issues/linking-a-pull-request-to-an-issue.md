---
title: Pull RequestをIssueにリンクする
intro: 'pull request {% ifversion link-existing-branches-to-issue %}またはブランチ{% endif %}を Issue にリンクすると、現在修正プログラムが準備中であることを示し、pull request {% ifversion link-existing-branches-to-issue %}またはブランチ{% endif %}がマージされたとき、自動的に Issue を閉じることができます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109364'
---
{% note %}

**注釈**: pull request における特別なキーワードは、pull request がリポジトリの *デフォルト* ブランチをターゲットするときに解釈されます。 ただし、PR のベースが *それ以外のブランチ* である場合、それらのキーワードは無視され、リンクは作成されません。PR のマージはこの issue に対して何の効果も持ちません。 **キーワードの 1 つを使って pull request を issue にリンクする場合、PR が既定ブランチ上になければなりません。**

{% endnote %}

## リンクされたIssueとPull Requestについて

手動か、pull request の説明でサポートされているキーワードを使い、pull request に issue にリンクできます。

Pull Requestが対処するIssueにそのPull Requestをリンクすると、コラボレータは、誰かがそのIssueに取り組んでいることを確認できます。

リンクされたPull Requestをリポジトリのデフォルトブランチにマージすると、それにリンクされているIssueは自動的にクローズされます。 既定のブランチについて詳しくは、「[既定ブランチの変更](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

## キーワードを使用してPull RequestをIssueにリンクする

pull request の説明またはコミットメッセージでサポートされているキーワードを使用して、pull request に issue にリンクできます。 pull request は、既定のブランチに存在する **必要があります**。

* 閉じる
* closes
* closed
* 解決策
* fixes
* 固定
* resolve
* resolves
* resolved

他のPull RequestでPull Requestのコメントを参照するためにキーワードを使用すると、Pull Requestはリンクされます。 参照元の pull request をマージすると、参照先の pull request もクローズされます。

クローズするキーワードの構文は、IssueがPull Requestと同じリポジトリにあるかどうかによって異なります。

リンクするIssue | 構文 | 例
--------------- | ------ | ------
Issueが同じリポジトリにある | *キーワード* #*issue 番号* | `Closes #10`
Issueが別のリポジトリにある | *キーワード* *所有者*/*リポジトリ*#*issue 番号* | `Fixes octo-org/octo-repo#100`
複数の Issue | Issueごとに完全な構文を使用 | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

手動でリンクされた pull request のみを手動でリンク解除できます。 キーワードを使用してリンクした issue のリンクを解除するには、pull request の説明を編集してそのキーワードを削除する必要があります。

クローズするキーワードは、コミットメッセージでも使用できます。 デフォルトブランチにコミットをマージするとIssueはクローズされますが、そのコミットを含むPull Requestは、リンクされたPull Requestとしてリストされません。

## Pull Request を Issue に Pull Request サイドバーを使用して手動でリンクする

リポジトリへの書き込み権限があるユーザーなら誰でも、Pull Request サイドバーから Pull Request を手動で Issue にリンクできます。

手動で1つのPull Requestごとに最大10個のIssueをリンクできます。 IssueとPull Requestは同じリポジトリになければなりません。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. Pull Requestのリストで、IssueにリンクしたいPull Requestをクリックします。
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. 右のサイドバーで、"Development（開発）"セクション内で{% octicon "gear" aria-label="The Gear icon" %}をクリックしてください。
{% else %}
4. 右側のサイドバーで、 **[リンクされた issue]** をクリックします。
  ![右サイドバーの [リンクされた issue]](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. Pull RequestにリンクするIssueをクリックします。
  ![issue をリンクするドロップダウン](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## Pull Request またはブランチを Issue サイドバーを使用して手動でリンクする

リポジトリへの書き込み権限があるユーザーなら誰でも、手動で Pull Request またはブランチを Issue にリンクできます。

手動で1つのPull Requestごとに最大10個のIssueをリンクできます。 Issue のリポジトリは、リンクした Pull Request またはブランチとは別にすることもできます。 最後に選択したリポジトリは記憶されます 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Issue の一覧から、Pull Request またはブランチをリンクする Issue をクリックします。
4. 右側のサイドバーで、 **[開発]** をクリックします。
  ![右側のサイドバーの [開発] メニュー](/assets/images/help/issues/development-menu.png)
5. Issue にリンクする Pull Request またはブランチを含むリポジトリをクリックします。
  ![ドロップダウンしてリポジトリを選択する](/assets/images/help/issues/development-menu-select-repository.png)
6. Issue にリンクする Pull Request またはブランチをクリックします。
  ![Pull Request またはブランチをリンクするドロップダウン](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. **[Apply]** をクリックします。
  ![[適用]](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## 参考資料

* 「[自動リンクされた参照と URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)」
