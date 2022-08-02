---
title: Organization のメンバー名表示を管理する
intro: Organization のプライベートリポジトリ内において、Organization のメンバーが、コメント作者のプロフィール名を表示できるよう許可することができます。
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: メンバー名の表示の管理
---

Organization のオーナーは、Organization 内のメンバー名表示を管理できます。

![コメントに表示されたコメント作者の名前](/assets/images/help/issues/commenter-full-name.png)

Organization の各メンバーは、自分のプロフィール名を設定で選択します。 詳細は「[プロフィールをパーソナライズする](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)」を参照してください。

{% ifversion profile-name-enterprise-setting %}
EnterpriseのオーナーがポリシーをEnterpriseのレベルで設定している場合、この設定をOrganizationでは行えないかもしれません。 詳しい情報については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)」を参照してください。{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Admin repository permissions] の下で、[**Allow members to see comment author's profile name in private repositories**] を選択または選択解除します。 ![プライベートリポジトリ内で、コメント作者のフルネームを表示することをメンバーに許可するためのチェックボックス](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. [**Save**] をクリックします。
