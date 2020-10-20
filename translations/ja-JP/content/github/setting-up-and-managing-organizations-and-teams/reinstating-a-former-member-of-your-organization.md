---
title: Oraganization の以前のメンバーを復帰させる
intro: 'Organization owners can {% if currentVersion == "free-pro-team@latest" %}invite former organization members to rejoin{% else %}add former members to{% endif%} your organization, and choose whether to restore the person''s former role, access permissions, forks, and settings.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

[ユーザを Organization から削除する](/articles/removing-a-member-from-your-organization)場合、[Organization のメンバーを外部のコラボレータに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)場合、または[メンバーと外部のコラボレータに 2要素認証（2FA）を有効化するよう要求](/articles/requiring-two-factor-authentication-in-your-organization)したためにユーザが Organization から削除される場合、そのユーザのアクセス権限と設定は 3 か月間保存されます。 You can restore the user's privileges if you {% if currentVersion =="free-pro-team@latest" %}invite{% else %}add{% endif %} them back to the organization within that time frame.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Oraganization の以前のメンバーを復帰させると、次のことがリストアできます:
 - Organization でのユーザのロール
 - Organization が所有しているリポジトリのあらゆるプライベートフォーク
 - Organization のチームでのメンバーシップ
 - Organization のリポジトリへの以前のアクセスと権限
 - Organization リポジトリでの Star
 - Organization での Issue 割り当て
 - リポジトリプラン (リポジトリのアクティビティを Watch するか Watch しないか無視するかについての通知設定)

    {% tip %}

    {% if currentVersion == "free-pro-team@latest" %}
    **Tips**:
    - Organization のメンバーが 2 要素認証を使用していなかったために Organization から削除された場合、Organization で 2 要素認証を使用するようメンバーに要求することに変わりないのであれば、以前のメンバーは 2 要素認証を有効化しないとメンバーとして復帰できません。
    - Organization に参加するようユーザを招待できるのは、Organization オーナーだけです。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。
    - Organization にユーザ単位の有料プランがある場合、Organization の以前のメンバーを復帰させる前に、使用されていないライセンスを使用可能にしておく必要があります。 詳細は「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。 {% data reusables.organizations.org-invite-expiration %}

   {% else %}
    **Tips**:
    - Organization のメンバーが 2 要素認証を使用していなかったために Organization から削除された場合、Organization で 2 要素認証を使用するようメンバーに要求することに変わりないのであれば、以前のメンバーは 2 要素認証を有効化しないとメンバーとして復帰できません。
    - Organization にユーザを追加できるのは、Organization オーナーだけです。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。
   {% endif %}

   {% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. その個人の Organization での以前の権限をリストアするか、以前の権限をクリアして新たにアクセス権を設定するか、選択してから [**Invite and reinstate**] または [**Invite and start fresh**] をクリックします。 ![情報をリストアするか否かを選択](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. その個人の Organization での以前の権限をリストアするか、以前の権限をクリアして新たにアクセス権を設定するか、選択してから [**Add and reinstate**] または [**Add and start fresh**] をクリックします。 ![権限をリストアするかを選択](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. Oraganization の以前のメンバーの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Send invitation**] をクリックします。 ![ロールとTeamオプションと招待の送信ボタン](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Oraganization の以前のメンバーの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Add member**] をクリックします。 ![ロールと Team のオプションと [add member] ボタン](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### 参考リンク

- [Organizatin のメンバーを外部のコラボレータに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)
