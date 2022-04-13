---
title: タスクリストを使ったIssue内のCode scanningアラートの追跡
shortTitle: Issue内のアラートの追跡
intro: タスクリストを使って、IssueにCode scanningアラートを追加できます。 そうすることで、アラートの修復を含む開発作業の計画を立てやすくなります。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
---

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## Issue内の{% data variables.product.prodname_code_scanning %}アラートの追跡について

{% data reusables.code-scanning.github-issues-integration %}

アラートを追跡するために新しいIssueを作成することもできます。
- 新しいIssue内のタスクリストに自動的にCode scanningアラートを追加する{% data variables.product.prodname_code_scanning %}アラートから。 詳しい情報については、下の「[{% data variables.product.prodname_code_scanning %}アラートからの追跡用Issueの作成](#creating-a-tracking-issue-from-a-code-scanning-alert)」を参照してください。

- 通常のようにAPIを通じて。そして、Issueの本文内にCode scanningのリンクを提供します。 追跡される関係性を作成するために、タスクリストの構文を使う必要があります。
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - たとえば`- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17`をIssueに追加したなら、そのIssueは`octocat-org`というOrganizationの`octocat-repo`リポジトリの"Security（セキュリティ）"タブにある17というIDのCode scanningアラートを追跡します。

同じ{% data variables.product.prodname_code_scanning %}アラートを複数のIssueを使って追跡でき、Issueは{% data variables.product.prodname_code_scanning %}アラートが見つかったリポジトリとは別のリポジトリに属していてもかまいません。


{% data variables.product.product_name %}は、Issue内で{% data variables.product.prodname_code_scanning %}アラートを追跡していることを示すため、ユーザインターフェースの様々な場所に視覚的な手がかりを示します。

- Code scanningアラートのリストページは、Issueで追跡されているアラートを示して、処理がまだ必要なアラートを一目で分かるようにしてくれます。

  ![Code scanningアラートページでのTracked inピル](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- "tracked in（追跡）"セクションも、対応するアラートページを示してくれます。

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
  ![Code scanningアラートページのTracked inセクション](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png)
  {% else %}
  ![Code scanningアラートページのTracked inセクション](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png)
  {% endif %}

- 追跡しているIssueで、{% data variables.product.prodname_dotcom %}はタスクリストとホバーカードにセキュリティバッジアイコンを表示します。

  {% note %}

  リポジトリに書き込み権限を持つユーザだけには、ホバーカードとともにIssue内にアラートへの展開URLが表示されます。 リポジトリへの読み取り権限を持っているか、まったく権限を持っていないユーザには、アラートは通常のURLとして表示されます。

  {% endnote %}

  すべてのブランチでアラートのステータスが"open"もしくは"closed"なので、アイコンは灰色になっています。 Issueはアラートを追跡するので、アラートは単一のオープン/クローズのステータスをIssue内で持てません。 アラートが1つのブランチでクローズになっていても、アイコンの色は変化しません。

  ![追跡しているIssueのホバーカード](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

Issue内の対応するタスクリストアイテムのチェックボックスの状態を変更（チェック/チェック解除）しても、追跡されているアラートのステータスは変化しません。

## Code scanningアラートからの追跡Issueの作成

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes or ghae %}
{% data reusables.code-scanning.explore-alert %}
1. あるいは、追跡するアラートを見つけるために、フリーテキスト検索もしくはフィルタリングのためのドロップダウンメニューを使ってアラートを特定できます。 詳しい情報については、「[リポジトリの Code scanningアラートを管理する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)」を参照してください。
{% endif %}
1. ページの上部の右側で、 **Create issue（Issueの作成）**をクリックしてください。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %}
   ![Code scanningアラートに対する追跡Issueの作成](/assets/images/help/repository/code-scanning-create-issue-for-alert.png)
   {% else %}
   ![Code scanningアラートに対する追跡Issueの作成](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png)
   {% endif %}
   {% data variables.product.prodname_dotcom %}はアラートを追跡するためのIssueを自動的に作成し、アラートをタスクリストアイテムとして追加します。
   {% data variables.product.prodname_dotcom %}はIssueを事前展開します。
   - タイトルには{% data variables.product.prodname_code_scanning %}アラートの名前が含まれます。
   - 本文には{% data variables.product.prodname_code_scanning %}アラートへの完全なURLを持つタスクリストアイテムが含まれます。
2. あるいは、Issueのタイトルと本文を編集してください。
   {% warning %}

    **警告:** Issueのタイトルはセキュリティ情報を公開してしまうかもしれないので、編集すべき場合があります。 Issueの本文も編集できますが、タスクリストアイテムは編集するとIssueがアラートを追跡できなくなってしまうので、編集しないでください。
   {% endwarning %}

   ![Code scanningアラートに対する新しい追跡Issue](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. **Submit new issue（新しいIssueのサブミット）**をクリックしてください。
