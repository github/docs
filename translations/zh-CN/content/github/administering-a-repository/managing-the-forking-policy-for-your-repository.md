---
title: 管理仓库的复刻政策
intro: 'You can allow or prevent the forking of a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %} repository owned by an organization.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: 拥有仓库管理员权限的人可管理仓库的复刻政策。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

An organization owner must allow forks of private{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and internal{% endif %} repositories on the organization level before you can allow or disallow forks for a specific repository. 更多信息请参阅“[管理组织的复刻政策](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)”。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "Features"（功能）下，选择 **Allow forking（允许复刻）**。 ![允许或禁止私有仓库复刻的复选框](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### 延伸阅读

- "[关于复刻](/articles/about-forks)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
