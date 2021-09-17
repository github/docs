---
title: Organization で 2 要素認証を要求する
intro: 'Organization のオーナーは、{% if currentVersion == "free-pro-team@latest" %}Organization のメンバー、外部コラボレーター、支払いマネージャー {% else %}Organization のメンバーおよび外部のコラボレーター{% endif %}に、それぞれの個人アカウントに対する 2 要素認証を有効にするように義務付けることで、悪意のある行為者が Organization のリポジトリや設定にアクセスしにくくすることができます。'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---
### Organization の2 要素認証について

{% data reusables.two_fa.about-2fa %} Organization のすべての{% if currentVersion == "free-pro-team@latest" %}メンバー、外部コラボレーター、支払いマネージャー{% else %}メンバーおよび外部コラボレーター{% endif %}に、{% data variables.product.product_name %} で 2 要素認証を有効にすることを義務付けることができます。 2 要素認証の詳細は「[2 要素認証 (2FA) でアカウントを保護する](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

Enterprise で Organization の 2 要素認証を必須にすることもできます。 詳細は、「[Enterprise アカウントでセキュリティ設定を強制する](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#requiring-two-factor-authentication-for-organizations-in-your-enterprise-account)」を参照してください。

{% endif %}

{% warning %}

**警告:**

- Organization に対して 2 要素認証の使用を義務付ける場合、2FA を使用しない{% if currentVersion == "free-pro-team@latest" %}メンバー、外部コラボレーター、支払いマネージャー {% else %}メンバーおよび外部コラボレーター{% endif %} (ボット アカウントを含む) は Organization から削除され、そのリポジトリへのアクセス権が失われます。 Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization から削除されてから 3 か月以内に、個人アカウントに対して 2 要素認証を有効にすれば、[それらのアカウントが持っていたアクセス特権と設定を復元](/articles/reinstating-a-former-member-of-your-organization)できます。
- 義務付けられた 2 要素認証を有効にした後に、Organization のオーナー、メンバー、{% if currentVersion == "free-pro-team@latest" %}支払いマネージャー、{% endif %} または外部コラボレーターがそれぞれの個人アカウントで 2 要素認証を無効にすると、それらは Organization から自動的に削除されます。
- あなたが、2 要素認証を義務付けている Organization の唯一のオーナーである場合、その Organization での 2 要素認証義務を無効にしなければ、あなたの個人アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

### 必要な環境

{% if currentVersion == "free-pro-team@latest" %}Organization のメンバー、外部コラボレーター、支払いマネージャー {% else %}Organization のメンバーおよび外部コラボレーター{% endif %}に、 2 要素認証を使用することを義務付けるには、まず{% data variables.product.product_name %} の自分自身の個人アカウントで 2 要素認証を有効にする必要があります。 詳細は「[2 要素認証 (2FA) でアカウントを保護する](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)」を参照してください。

2 要素認証の使用を義務付ける前に、{% if currentVersion == "free-pro-team@latest" %}Organization のメンバー、外部コラボレーター、支払いマネージャー {% else %}Organization のメンバーおよび外部コラボレータ{% endif %}に通知して、それぞれのアカウントで 2 要素認証をセットアップするように依頼することをおすすめします。 メンバーと外部のコラボレーターがすでに 2 要素認証を使用しているかどうかを確認できます。 詳細は「[Organization 内のユーザが 2 要素認証を有効にしているか確認する](/github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled)」を参照してください。

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
    - 削除された外部コラボレーターを検索するには、検索クエリで `action:org.remove_outside_collaborator` を使用します{% if currentVersion == "free-pro-team@latest" %}
    - 削除された支払いマネージャーを検索するには、検索クエリで `action:org.remove_billing_manager` を使用します{% endif %}

 また、検索で[時間枠](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action)を使用すれば、Organization から削除された人々を表示できます。

### 削除されたメンバーと外部コラボレーターを Organization に復帰できるようにする

2要素認証の利用の要求を有効化したときにOrganizationから削除されたメンバーあるいは外部のコラボレータがいれば、その人たちには削除されたことを知らせるメールが届きます。 そうなった場合には、彼らは個人アカウントで2FAを有効化し、OrganizationのオーナーにOrganizationへのアクセスを求めなければなりません。

### 参考リンク

- 「[Organization 内のユーザーが 2 要素認証を有効にしているかどうかを表示する](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」
- 「[2 要素認証でアカウントを保護する](/articles/securing-your-account-with-two-factor-authentication-2fa)」
- "[Organization の以前のメンバーを回復する](/articles/reinstating-a-former-member-of-your-organization)"
- "[以前の外部コラボレーターの Organization へのアクセス権を回復する](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
