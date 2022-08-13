---
title: Oraganization の以前のメンバーを復帰させる
intro: 'Organizationのオーナーは{% ifversion fpt or ghec %}Oraganization の以前のメンバーを招待して Oraganization に復帰させて{% else %}以前のメンバーを Oraganization に追加して{% endif%}、その個人の以前のロール、アクセス権、フォーク、設定をリストアするかどうかを選択することができます。'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: メンバーの復帰
---

## メンバーの復帰について

以下のいずれかの方法でユーザがOrganizationから削除された場合、そのユーザのアクセス権限と設定は3ヶ月間保存されます。

- 手動でユーザをOrganizationから削除した。 詳しい情報については「[Organizationからのメンバーの削除](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)」を参照してください。{% ifversion not ghae %}
- メンバーと外部のコラボレータに対して2要素認証（2FA）の有効化を必須としたためにユーザが削除された。 詳しい情報については「[Organizationでの2要素認証の必須化](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)」を参照してください。{% endif %}{% ifversion fpt or ghec %}
- SAMLシングルサインオンを適用したためOrganizationからユーザが削除された。 詳しい情報については{% ifversion fpt %}、{% data variables.product.prodname_ghe_cloud %}ドキュメンテーションの{% else %}、{% endif %}「[OrganizationでのSAMLシングルサインオンの施行](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)を参照してください。{% endif %}
- Organizationメンバーを外部のコラボレータに変換した。 詳しい情報については「[Organizationメンバーの外部コラボレータへの変換](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)」を参照してください。

その期間内にユーザを Organization へ再度{% ifversion fpt or ghec %}招待{% else %}追加{% endif %}した場合、そのユーザの権限をリストアできます。

{% note %}

**ノート:**{% data reusables.saml.removed-users-can-rejoin %} これらのユーザに再度参加するよう招待する必要はありません。 その代わりに、ユーザは自分の個人アカウントにサインインし、Organizationにアクセスし、バナーをクリックしてSAMLシングルサインオン経由で認証してもらうことができます。

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Oraganization の以前のメンバーを復帰させると、次のことがリストアできます:
 - Organization でのユーザのロール
 - Organization が所有しているリポジトリのあらゆるプライベートフォーク
 - Organization のチームでのメンバーシップ
 - Organization のリポジトリへの以前のアクセスと権限
 - Organization リポジトリでの Star
 - Organization での Issue 割り当て
 - リポジトリプラン (リポジトリのアクティビティを Watch するか Watch しないか無視するかについての通知設定)

{% ifversion ghes %}
Organization のメンバーが 2 要素認証を使用していなかったために Organization から削除された場合、Organization で 2 要素認証を使用するようメンバーに要求することに変わりないのであれば、以前のメンバーは 2 要素認証を有効化しないとメンバーとして復帰できません。
{% endif %}

{% ifversion fpt or ghec %}
Organization にユーザ単位の有料プランがある場合、Organization の以前のメンバーを復帰させる前に、使用されていないライセンスを使用可能にしておく必要があります。 詳細は「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。 {% data reusables.organizations.org-invite-scim %}
{% endif %}

## Oraganization の以前のメンバーを復帰させる

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
6. その個人の Organization での以前の権限をリストアするか、以前の権限をクリアして新たにアクセス権を設定するか、選択してから [**Invite and reinstate**] または [**Invite and start fresh**] をクリックします。 ![情報をリストアするか否かを選択](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. その個人の Organization での以前の権限をリストアするか、以前の権限をクリアして新たにアクセス権を設定するか、選択してから [**Add and reinstate**] または [**Add and start fresh**] をクリックします。 ![権限をリストアするかを選択](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt or ghec %}
7. Oraganization の以前のメンバーの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Send invitation**] をクリックします。 ![ロールとTeamオプションと招待の送信ボタン](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Oraganization の以前のメンバーの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Add member**] をクリックします。 ![ロールと Team のオプションと [add member] ボタン](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## 参考リンク

- [Organizatin のメンバーを外部のコラボレータに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)
