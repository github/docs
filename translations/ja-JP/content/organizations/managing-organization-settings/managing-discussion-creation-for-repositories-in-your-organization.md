---
title: Organization 内のリポジトリのディスカッション作成を管理する
intro: Organization が所有するリポジトリで、メンバーがディスカッションを作成するために必要な権限レベルを選択できます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-discussion-creation-for-repositories-in-your-organization
permissions: Organization owners can manage discussion creation for repositories owned by the organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: リポジトリのディスカッションの管理
---


## 読み取りアクセス権を持つユーザがディスカッションを作成することを許可または禁止する

デフォルト設定では、リポジトリ管理者または Organization のオーナーが Organization が所有するリポジトリのディスカッションを有効にすると、読み取りアクセス権を持つ Organization のメンバーがディスカッションを作成できます。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository discussions] で、[**Allow users with read access to create discussions**] を選択または選択解除します。 ![読み取りアクセス権を持つユーザがディスカッションを作成できるようにするチェックボックス](/assets/images/help/discussions/toggle-allow-users-with-read-access-checkbox.png)
6. [**Save**] をクリックします。 ![ディスカッション設定の [Save] ボタン](/assets/images/help/discussions/click-save.png)

## 参考リンク

- 「[Discussions について](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」
- 「[コミュニティの Discussions を管理する](/discussions/managing-discussions-for-your-community)」
- 「[OrganizationのGitHub Discussionsの有効化もしくは無効化](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)」
