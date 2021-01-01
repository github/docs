---
title: Organization のフォークポリシーを管理する
intro: 'You can can allow or prevent the forking of any private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories owned by your organization.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
permissions: Organization のオーナーは、Organization のフォークポリシーを管理できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

By default, new organizations are configured to disallow the forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories.

If you allow forking of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} and internal{% endif %} repositories at the organization level, you can also configure the ability to fork a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %} repository. 詳細は「[リポジトリのフォークポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository forking] で、[**Allow forking of private repositories**] または [**Allow forking of private and internal repositories**] を選択します。 ![Organization でフォークを許可または禁止するチェックボックス](/assets/images/help/repository/allow-disable-forking-organization.png)
6. [**Save**] をクリックします。

### 参考リンク

- [フォークについて](/articles/about-forks)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
