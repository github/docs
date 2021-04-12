---
title: Organizationに2要素認証を要求する
intro: 'Organizationのメンバーと外部のコラボレータに対し、Organizatin内の個人アカウントで2要素認証を有効化することを求め、悪意ある者がOrganizationのリポジトリや設定にアクセスするのを困難にできます。'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

LDAP またはビルトイン認証を使用している場合、{% data variables.product.product_location %} で 2 要素認証がサポートされます。 Organizationの管理者は、メンバーに対して2要素認証の有効化を必須とすることができます。

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

詳しい情報については「[2 要素認証について](/github/authenticating-to-github/about-two-factor-authentication)」を参照してください。

### 2 要素認証実施にあたっての要件

Organizationのメンバーと外部のコラボレータに2FAの利用を求める前に、自分自身の個人アカウントで[2要素認証を有効化](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa/)してください。

{% warning %}

**警告:**

- 2要素認証を要求すると、2FAを使わないメンバーと外部のコラボレータ（含むぼットアカウント）はOrganizationから削除され、自分のフォークやプライベートリポジトリも含めたそのOrganizationのリポジトリにアクセスできなくなります。 Organizationから削除されて3ヶ月以内に個人アカウントで2FAを有効化すれば、[彼らのアクセス権限と設定を復帰させる](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)ことができます。
- 2FAが要求されると、2FAを無効化しているOrganizationのメンバーあるいは外部のコラボレータは、自動的にOrganizationから削除されます。
- あなたが、2 要素認証を義務付けている Organization の唯一のオーナーである場合、その Organization での 2 要素認証義務を無効にしなければ、あなたの個人アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

2要素認証の利用を要求する前に、Organizationのメンバーと外部のコラボレータに通知をして、アカウントに2FAをセットアップしてもらうよう頼むことをおすすめします。 [メンバー及び外部のコラボレータがすでに2FAを利用しているかの確認](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)は、OrganizationのPeopleタブから行えます。

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}

### Organization から削除された人々を表示する

2 要素認証義務に従わなかったために Organization から自動的に削除された人々を見るには、検索フィールドで `reason:two_factor_requirement_non_compliance` を使って [Audit log を検索](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log/)します。

{% data reusables.audit_log.octicon_icon %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. `reason:two_factor_requirement_non_compliance`を使って検索クエリを入力してください。 ![2 要素認証への非準拠で削除されたユーザを示す Staff tools audit log イベント](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) 検索結果を絞り込むには:
    - 削除された Organization のメンバーの場合、`action:org.remove_member AND reason:two_factor_requirement_non_compliance` と入力してください。
    - 削除された外部コラボレーターの場合、`action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance` と入力してください。

  また、Organization 名を使えば、特定の Organization から削除された人を見ることができます:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. [**Search**] をクリックします。

### 削除されたメンバーと外部コラボレーターを Organization に復帰できるようにする

2要素認証の利用の要求を有効化したときにOrganizationから削除されたメンバーあるいは外部のコラボレータがいれば、その人たちには削除されたことを知らせるメールが届きます。 そうなった場合には、彼らは個人アカウントで2FAを有効化し、OrganizationのオーナーにOrganizationへのアクセスを求めなければなりません。

### 参考リンク

- [Organization中のユーザが2FAを有効化しているかの表示](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)
- [2要素認証（2FA）でアカウントをセキュアにする](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa)
- [Organizationの以前のメンバーの復帰](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)
- [外部のコラボレータのOrganizationへのアクセスの復帰](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)
