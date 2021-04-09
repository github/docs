---
title: Organization 内のユーザが 2 要素認証を有効にしているかどうかを表示する
intro: 'どの Organization のオーナー、メンバー、および 外部コラボレーターが 2 要素認証を有効にしているかを確認できます。'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---

{% note %}

**注釈:** {% if currentVersion == "free-pro-team@latest" %}オーナー、支払いマネージャーおよび{% else %}{% endif %}外部コラボレーターを含むすべてのメンバーに、2 要素認証を有効にするよう要求できます。 詳しい情報については [Organization で 2 要素認証を要求する](/articles/requiring-two-factor-authentication-in-your-organization)を参照してください。

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Organization のオーナー含め、2 要素認証を有効または無効にした Organization メンバーを表示するには、[**2FA**] をクリックして、[**Enabled**] または [**Disabled**] を選択します。 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Organization の外部コラボレーターを表示するには、[People] タブの下の [**Outside collaborators**] をクリックします。 ![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. どの外部コラボレーターが 2 要素認証を有効または無効にしているかを確認するには、右側の [**2FA**] をクリックして、[**Enabled**] または [**Disabled**] を選択します。 ![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

### 参考リンク

- 「[Organization における人のロールを表示する](/articles/viewing-people-s-roles-in-an-organization)」
