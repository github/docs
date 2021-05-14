---
title: Organization 内のリポジトリのディスカッション作成を管理する
intro: Organization が所有するリポジトリで、メンバーがディスカッションを作成するために必要な権限レベルを選択できます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-discussion-creation-for-repositories-in-your-organization
permissions: Organization owners can manage discussion creation for repositories owned by the organization.
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.discussions.beta %}

### 読み取りアクセス権を持つユーザがディスカッションを作成することを許可または禁止する

デフォルト設定では、リポジトリ管理者または Organization のオーナーが Organization が所有するリポジトリのディスカッションを有効にすると、読み取りアクセス権を持つ Organization のメンバーがディスカッションを作成できます。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository discussions] で、[**Allow users with read access to create discussions**] を選択または選択解除します。 ![読み取りアクセス権を持つユーザがディスカッションを作成できるようにするチェックボックス](/assets/images/help/discussions/toggle-allow-users-with-read-access-checkbox.png)
6. [**Save**] をクリックします。 ![ディスカッション設定の [Save] ボタン](/assets/images/help/discussions/click-save.png)

### 参考リンク

- "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)"
- "[Managing discussions for your community](/discussions/managing-discussions-for-your-community)"
