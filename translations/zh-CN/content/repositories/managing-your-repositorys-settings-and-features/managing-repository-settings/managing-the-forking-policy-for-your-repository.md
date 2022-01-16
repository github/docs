---
title: 管理仓库的复刻政策
intro: '您可以允许或阻止对组织拥有的特定私有{% ifversion fpt or ghae or ghes %}或内部{% endif %}仓库进行复刻。'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: 管理复刻策略
---

组织所有者必须在组织级别上允许复刻私有{% ifversion fpt or ghae or ghes %}和内部{% endif %}仓库，然后才能允许或禁止对特定仓库进行复刻。 更多信息请参阅“[管理组织的复刻政策](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "Features"（功能）下，选择 **Allow forking（允许复刻）**。 ![允许或禁止私有仓库复刻的复选框](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## 延伸阅读

- "[关于复刻](/articles/about-forks)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
