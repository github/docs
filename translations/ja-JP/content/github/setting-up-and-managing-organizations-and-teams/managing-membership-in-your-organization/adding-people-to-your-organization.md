---
title: Organization への人の追加
intro: '{% data variables.product.product_name %}のユーザ名あるいはメールアドレスを使えば、誰でも Organization のメンバーにすることができます。'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
permissions: Organization owners can add people to an organization.
---
{% if currentVersion != "github-ae@latest" %}
Organization が[メンバーに 2 要素認証を使うことを要求](/articles/requiring-two-factor-authentication-in-your-organization)しているなら、ユーザを Organization に追加する前にそのユーザは [2 要素認証を有効化](/articles/securing-your-account-with-two-factor-authentication-2fa)していなければなりません。
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}

### 参考リンク
- [Team へのOrganization メンバーの追加](/articles/adding-organization-members-to-a-team)
