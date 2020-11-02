---
title: 外部コラボレーターを Organization メンバーに変換する
intro: 'Organization のリポジトリ上の外部コラボレーターに、Organization 内において、より幅広い権限を与えたい場合、Organization のメンバーとして{% if currentVersion == "free-pro-team@latest" %}ユーザーを招待{% else %}ユーザーを追加{% endif %}することができます。'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tips**:
- Organization オーナーのみが、Organization に{% if currentVersion == "free-pro-team@latest" %ユーザーを招待{% else %}ユーザーを追加{% endif %}できます。 詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。{% if currentVersion == "free-pro-team@latest" %}
- Organization がユーザ単位の有料プランである場合、新しいメンバーを招待して参加させる、または Organization の以前のメンバーを復帰させる前に、そのためのライセンスが用意されている必要があります。 詳細は「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。 {% data reusables.organizations.org-invite-expiration %}{% endif %}
- Organization が[メンバーに 2 要素認証を使うことを要求](/articles/requiring-two-factor-authentication-in-your-organization)している場合、 {% if currentVersion == "free-pro-team@latest" %}招待されるユーザは招待を受諾する前に手元で [2 要素認証を有効化](/articles/securing-your-account-with-two-factor-authentication-2fa)しておく必要があります。{% else %}ユーザを Organization に追加する前にそのユーザは手元で [2 要素認証を有効化](/articles/securing-your-account-with-two-factor-authentication-2fa)しておく必要があります。{% endif %}

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
5. メンバーにしたい外部のコラボレーターの名前の右側で、
{% octicon "gear" aria-label="The gear icon" %} ドロップダウンメニューを使用して [**Invite to organization**] をクリックします。![外部のコラボレーターを Organization に招待](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. メンバーにしたい外部のコラボレーターの名前の右側で、[**Invite to organization**] をクリックします。![外部のコラボレーターを Organization に招待](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### 参考リンク

- [Organizatin のメンバーを外部のコラボレータに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)
