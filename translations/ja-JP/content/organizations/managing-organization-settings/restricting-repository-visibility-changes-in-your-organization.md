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

リポジトリをプライベートからパブリックに変更するというような、Organization内でのリポジトリの可視性の変更を行える人を制限できます。 リポジトリの可視性に関する詳しい情報については「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。

リポジトリの可視性を変更できるのを Organization のオーナーのみに制限すること、または可視性の変更をリポジトリの管理者権限を所有するメンバーに許可することができます。

{% warning %}

**警告**: この設定を有効にすると、管理者権限をもつユーザは、それが作成できるタイプのリポジトリではなくても、既存のリポジトリを任意の可視性に変更できるようになります。 詳しい情報については「[Organization でのリポジトリ作成の制限](/articles/restricting-repository-creation-in-your-organization)」を参照してください。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository visibility change] の下で、[**Allow members to change repository visibilities for this organization**] の選択を解除します。 ![リポジトリ可視性変更をメンバーに許可するチェックボックス](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. [**Save**] をクリックします。
