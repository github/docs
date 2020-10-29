---
title: 他のリポジトリへ Issue を移譲する
intro: 'より適しているリポジトリに Issue を移動するため、オープン Issue を他のリポジトリに移譲できます。'
redirect_from:
  - /articles/transferring-an-issue-to-another-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

他のリポジトリにオープン Issue を移譲するには、Issue のあるリポジトリおよびその Issue の移譲先のリポジトリの書き込み権限が必要です。 詳細は「[Organization のためのリポジトリの権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。

同じユーザまたは Organization アカウントが所有するリポジトリ間においてのみ、Issue を移譲できます。 プライベートリポジトリからパブリックリポジトリへは、Issue を移譲できません。

Issueを委譲する場合、コメントとアサインされた人は保持されます。 Issue のラベルとマイルストーンは保持されません。 このIssueは、ユーザー所有または組織全体のプロジェクトボードにとどまり、リポジトリのプロジェクトボードから削除されます。 詳細は「[プロジェクトボードについて](/articles/about-project-boards)」を参照してください。

Issue でメンションされた人や Team は、Issue が新しいリポジトリに移譲されたことを知らせる通知を受け取ります。 当初の URL は、新しい Issue の URL にリダイレクトします。 新しいリポジトリの読み取り権限がない人には、アクセスできない新しいリポジトリに Issue が移譲されたことを知らせるバナーが表示されます。

### 他のリポジトリへオープン Issue を移譲する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Issue のリストで、移譲したい Issue をクリックします。
4. 右のサイドバーで [**Transfer this issue**] をクリックします。 ![Issue を移譲するボタン](/assets/images/help/repository/transfer-issue.png)
5. [**Choose a repository**] ドロップダウンメニューで、Issue の移譲先にするリポジトリを選択します。 ![リポジトリセレクションを選択](/assets/images/help/repository/choose-a-repository.png)
6. [**Transfer issue**] をクリックします。 ![Issue 移譲ボタン](/assets/images/help/repository/transfer-issue-button.png)

### 参考リンク

- 「[Issue について](/articles/about-issues)」
- 「[セキュリティログをレビューする](/articles/reviewing-your-security-log)」
- 「[Organization の Audit log をレビューする](/articles/reviewing-the-audit-log-for-your-organization)」
