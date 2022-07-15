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

Issueを削除できるかは、リポジトリを個人アカウントもしくはOrganizationが所有しているかどうかによります。
- 個人アカウントが所有しているリポジトリ内のIssueを削除できるのは、その個人アカウントだけです。
- Organizationが所有しているリポジトリ内のIssueを削除できるのは、管理もしくはオーナー権限を持っているアカウントだけです。

  Organizationが所有しているリポジトリ内のIssueを削除するには、OrganizationのオーナーがOrganizationのリポジトリに対してIssueの削除を有効化しなければなりません。 詳しい情報については「[OrganizationのIssueの削除を許可する](/articles/allowing-people-to-delete-issues-in-your-organization)」と「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

コラボレータは、Issueが削除されたときに通知を受け取りません。 削除されたIssueのURLにアクセスすると、コラボレータにはそのWebページが見つかりませんというメッセージが表示されません（ただしAPIを使ってそれが削除されたのかを判断することはできます）。 リポジトリの管理者権限かオーナー権限を持っている人にはさらに、Issue を削除した人のユーザ名と、いつ削除されたのかが表示されます。

1. 削除対象の Issue に移動します。
2. 右側のバーの [Notifications] の下で、[**Delete issue**] をクリックします。 !["Delete issue" のテキストが Issue ページ右側のバーの下で強調表示されている](/assets/images/help/issues/delete-issue.png)
4. 削除を確定するには、[**Delete this issue**] をクリックします。

## 参考リンク

- [プルリクエストを Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)
