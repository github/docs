---
title: Issue の削除
intro: リポジトリの管理者権限がある人は、リポジトリから Issue を完全に削除できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

自分の個人アカウントが所有するリポジトリ内のIssueだけが削除できます。 他の個人アカウントが所有するリポジトリでは、たとえそこでコラボレータになっていたとしても、Issueを削除することはできません。

Organization が所有するリポジトリの Issue を削除するには、Organization のオーナーが Organization のリポジトリの削除を有効にし、さらに削除する人がそのリポジトリの管理者権限かオーナー権限を持っている必要があります。 詳しい情報については「[OrganizationのIssueの削除を許可する](/articles/allowing-people-to-delete-issues-in-your-organization)」と「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

Issue を削除してもコラボレータには通知されません。 削除された Issue の URL にコラボレータがアクセスすると、その Issue が削除された旨のメッセージが表示されます。 リポジトリの管理者権限かオーナー権限を持っている人にはさらに、Issue を削除した人のユーザ名と、いつ削除されたのかが表示されます。

1. 削除対象の Issue に移動します。
2. 右側のバーの [Notifications] の下で、[**Delete issue**] をクリックします。 !["Delete issue" のテキストが Issue ページ右側のバーの下で強調表示されている](/assets/images/help/issues/delete-issue.png)
4. 削除を確定するには、[**Delete this issue**] をクリックします。

## 参考リンク

- [プルリクエストを Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
