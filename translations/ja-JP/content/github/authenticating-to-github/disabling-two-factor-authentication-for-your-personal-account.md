---
title: 個人アカウントの 2 要素認証を無効化する
intro: 自分の個人アカウントの 2 要素認証を無効化すると、所属する Organization へのアクセスも失う可能性があります。
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

アカウントを保護するために 2 要素認証 (2FA) を使用することを強くお勧めします。 2FA を無効化する必要がある場合も、できるだけ速やかに再有効化することをお勧めします。

{% warning %}

**警告:** 2 要素認証を必要とする Organization のメンバー{% if currentVersion == "free-pro-team@latest" %}、支払いマネージャー{% endif %}、または Organization のパブリックリポジトリへの外部コラボレーターが 2 要素認証を無効化すると、Organization から自動的に削除され、リポジトリへのアクセスを失います。 Organization へのアクセスを再取得するには、2 要素認証を再有効化し、Organization オーナーに連絡します。

{% endwarning %}

自分の属する Organization が 2 要素認証を必要とし、自分がその Organization のプライベートリポジトリのメンバー、オーナー、または外部コラボレーターである場合は、まず Organization を離脱しないと 2 要素認証を無効化できません。

Organization から自分を削除するには:
 - Organization のメンバーまたはオーナーの場合は「[Organization から自分を削除する](/articles/removing-yourself-from-an-organization/)」を参照してください。
 - 外部コラボレーターの場合は、Organization のオーナーかリポジトリの管理者に Organization のリポジトリから削除してもらうよう依頼してください。 詳細は「[Organization における人のロールを表示する](/articles/viewing-people-s-roles-in-an-organization)」および「[外部コラボレーターを Organization リポジトリから削除する](/articles/removing-an-outside-collaborator-from-an-organization-repository/)」を参照してください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Click **Disable**. ![[Disable two-factor authentication] ボタン](/assets/images/help/2fa/disable-two-factor-authentication.png)

### 参考リンク

- [2 要素認証について](/articles/about-two-factor-authentication)
- [2 要素認証の設定](/articles/configuring-two-factor-authentication)
- [2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)
