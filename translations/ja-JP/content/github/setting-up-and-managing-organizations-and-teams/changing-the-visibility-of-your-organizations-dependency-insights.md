---
title: Organization dependency insights の可視性を変更する
intro: Organization のメンバーが、Organization dependency insights を表示できるように設定できます。また、Organization のオーナーにのみ表示できるようにも設定できます。
product: '{% data reusables.gated-features.org-insights %}'
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

Organization のオーナーは、organization dependency insights の表示制限を設定できます。 デフォルトでは、Organization のメンバー全員が Organization dependency insight を表示できます。

Enterprise のオーナーは、Enterprise アカウントにあるすべての Organization dependency insights について、表示制限を設定できます。 詳しい情報については、「[Enterprise アカウントに dependency insights に関するポリシーを施行する](/articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account)」参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Member organization permissions] で、[**Allow members to view dependency insights**] を選択または選択解除します。 ![insights の表示をメンバーに許可するチェックボックス](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. [**Save**] をクリックします。
