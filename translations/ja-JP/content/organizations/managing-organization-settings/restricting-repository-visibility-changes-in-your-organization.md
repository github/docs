---
title: Organization 内でリポジトリの可視性の変更を制限する
intro: Organization のデータを保護するために、Organization 内でリポジトリの可視性を変更するための権限を設定できます。
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 可視性の変更ポリシーの設定
permissions: Organization owners can restrict repository visibility changes for an organization.
---

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

{% warning %}

**Warning**: If enabled, this setting allows people with admin access to choose any visibility for an existing repository, even if you do not allow that type of repository to be created. 詳しい情報については「[Organization でのリポジトリ作成の制限](/articles/restricting-repository-creation-in-your-organization)」を参照してください。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository visibility change] の下で、[**Allow members to change repository visibilities for this organization**] の選択を解除します。 ![リポジトリ可視性変更をメンバーに許可するチェックボックス](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. [**Save**] をクリックします。
