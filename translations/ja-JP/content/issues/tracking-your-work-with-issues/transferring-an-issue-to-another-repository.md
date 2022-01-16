---
title: 他のリポジトリへ Issue を移譲する
intro: より適しているリポジトリに Issue を移動するため、オープン Issue を他のリポジトリに移譲できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Issueの移譲
---

To transfer an open issue to another repository, you must have write access to the repository the issue is in and the repository you're transferring the issue to. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

同じユーザまたは Organization アカウントが所有するリポジトリ間においてのみ、Issue を移譲できます。 {% ifversion fpt or ghes or ghec %}プライベートリポジトリからパブリックリポジトリへIssueを移譲することはできません。{% endif %}

Issueを委譲する場合、コメントとアサインされた人は保持されます。 Issue のラベルとマイルストーンは保持されません。 このIssueは、ユーザー所有または組織全体のプロジェクトボードにとどまり、リポジトリのプロジェクトボードから削除されます。 詳細は「[プロジェクトボードについて](/articles/about-project-boards)」を参照してください。

Issue でメンションされた人や Team は、Issue が新しいリポジトリに移譲されたことを知らせる通知を受け取ります。 当初の URL は、新しい Issue の URL にリダイレクトします。 新しいリポジトリの読み取り権限がない人には、アクセスできない新しいリポジトリに Issue が移譲されたことを知らせるバナーが表示されます。

## 他のリポジトリへオープン Issue を移譲する

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Issue のリストで、移譲したい Issue をクリックします。
4. 右のサイドバーで [**Transfer this issue**] をクリックします。 ![Issue を移譲するボタン](/assets/images/help/repository/transfer-issue.png)
5. [**Choose a repository**] ドロップダウンメニューで、Issue の移譲先にするリポジトリを選択します。 ![リポジトリセレクションを選択](/assets/images/help/repository/choose-a-repository.png)
6. [**Transfer issue**] をクリックします。 ![Issue 移譲ボタン](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To transfer an issue, use the `gh issue transfer` subcommand. Replace the `issue` parameter with the number or URL of the issue. Replace the `{% ifversion ghes %}hostname/{% endif %}owner/repo` parameter with the {% ifversion ghes %}URL{% else %}name{% endif %} of the repository that you want to transfer the issue to, such as `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## 参考リンク

- 「[Issue について](/articles/about-issues)」
- 「[セキュリティログをレビューする](/articles/reviewing-your-security-log)」
- 「[Organization の Audit log をレビューする](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)」
