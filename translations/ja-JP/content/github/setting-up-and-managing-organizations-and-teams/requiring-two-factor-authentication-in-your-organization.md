---
title: Organization で 2 要素認証を要求する
intro: 'Organization owners can require {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to enable two-factor authentication for their personal accounts, making it harder for malicious actors to access an organization''s repositories and settings.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About two-factor authentication for organizations

{% data reusables.two_fa.about-2fa %} You can require all {% if currentVersion == "free-pro-team@latest" %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} in your organization to enable two-factor authentication on {% data variables.product.product_name %}. For more information about two-factor authentication, see "[Securing your account with two-factor authentication (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)."

{% if currentVersion == "free-pro-team@latest" %}

You can also require two-factor authentication for organizations in an enterprise. 詳細は、「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#requiring-two-factor-authentication-for-organizations-in-your-enterprise-account)」を参照してください。

{% endif %}

{% warning %}

**警告:**

- When you require use of two-factor authentication for your organization, {% if currentVersion == "free-pro-team@latest" %}members, outside collaborators, and billing managers{% else %}members and outside collaborators{% endif %} (including bot accounts) who do not use 2FA will be removed from the organization and lose access to its repositories. Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization から削除されてから 3 か月以内に、個人アカウントに対して 2 要素認証を有効にすれば、[それらのアカウントが持っていたアクセス特権と設定を復元](/articles/reinstating-a-former-member-of-your-organization)できます。
- If an organization owner, member,{% if currentVersion == "free-pro-team@latest" %} billing manager,{% endif %} or outside collaborator disables 2FA for their personal account after you've enabled required two-factor authentication, they will automatically be removed from the organization.
- あなたが、2 要素認証を義務付けている Organization の唯一のオーナーである場合、その Organization での 2 要素認証義務を無効にしなければ、あなたの個人アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

### 必要な環境

Before you can require {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} to use two-factor authentication, you must enable two-factor authentication for your account on {% data variables.product.product_name %}. 詳細は「[2 要素認証 (2FA) でアカウントを保護する](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)」を参照してください。

Before you require use of two-factor authentication, we recommend notifying {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} and asking them to set up 2FA for their accounts. You can see if members and outside collaborators already use 2FA. 詳細は「[Organization 内のユーザが 2 要素認証を有効にしているか確認する](/github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled)」を参照してください。

### Organization で 2 要素認証を要求する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
8. Organization から削除されるメンバーまたは外部コラボレーターが存在する場合、彼らに招待状を送信して、元の権限と Organization へのアクセス権を復元できるようにすることをおすすめします。 招待を受諾できるためには、まず 2 要素認証が有効でなければなりません。
{% endif %}

### Organization から削除された人々を表示する

2 要素認証義務に従っていないために Organization から自動的に削除された人々を表示するには、Organization から削除された人々を対象に、[Organization の Audit log を検索する](/articles/reviewing-the-audit-log-for-your-organization/#accessing-the-audit-log)ことができます。 Audit log イベントでは、削除された理由が 2 要素認証義務に従わなかったことなのかどうかが示されます。

![2 要素認証の違反により削除されたユーザーを示す Audit log イベント](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. 検索クエリを入力します。 以下のように検索します:
    - 削除された Organization のメンバーを検索するには、検索クエリで `action:org.remove_member` を使用します
    - Outside collaborators removed, use `action:org.remove_outside_collaborator` in your search query{% if currentVersion == "free-pro-team@latest" %}
    - 削除された支払いマネージャーを検索するには、検索クエリで `action:org.remove_billing_manager` を使用します{% endif %}

 また、検索で[時間枠](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action)を使用すれば、Organization から削除された人々を表示できます。

### 削除されたメンバーと外部コラボレーターを Organization に復帰できるようにする

2要素認証の利用の要求を有効化したときにOrganizationから削除されたメンバーあるいは外部のコラボレータがいれば、その人たちには削除されたことを知らせるメールが届きます。 そうなった場合には、彼らは個人アカウントで2FAを有効化し、OrganizationのオーナーにOrganizationへのアクセスを求めなければなりません。

### 参考リンク

- 「[Organization 内のユーザーが 2 要素認証を有効にしているかどうかを表示する](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」
- 「[2 要素認証でアカウントを保護する](/articles/securing-your-account-with-two-factor-authentication-2fa)」
- "[Organization の以前のメンバーを回復する](/articles/reinstating-a-former-member-of-your-organization)"
- "[以前の外部コラボレーターの Organization へのアクセス権を回復する](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
