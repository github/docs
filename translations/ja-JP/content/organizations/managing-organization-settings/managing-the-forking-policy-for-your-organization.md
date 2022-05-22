---
title: Organization のフォークポリシーを管理する
intro: 'Organization が所有するプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} および内部{% endif %} リポジトリのフォークを許可または禁止できます。'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

デフォルトでは、新しい Organization はプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} および内部{% endif %} リポジトリのフォークを禁止するように設定されます。

Organization レベルでプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}および内部{% endif %}リポジトリのフォークを許可する場合は、特定のプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}または内部{% endif %}リポジトリをフォークする機能も設定することができます。 詳細は「[リポジトリのフォークポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository forking] で、[**Allow forking of private repositories**] または [**Allow forking of private and internal repositories**] を選択します。 ![Organization でフォークを許可または禁止するチェックボックス](/assets/images/help/repository/allow-disable-forking-organization.png)
6. [**Save**] をクリックします。

### 参考リンク

- [フォークについて](/articles/about-forks)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
