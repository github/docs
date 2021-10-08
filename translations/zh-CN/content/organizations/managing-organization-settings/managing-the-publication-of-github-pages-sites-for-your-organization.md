---
title: 管理组织的 GitHub Pages 站点发布
intro: '您可以控制组织成员是否可以从组织仓库中发布 {% data variables.product.prodname_pages %} 站点，{% ifversion fpt %}并限制成员是否可以为站点选择可见性{% endif %}。'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: 管理 Pages 站点发布
---

{% ifversion fpt %}
如果您的组织使用 {% data variables.product.prodname_ghe_cloud %}，您可以选择允许组织成员创建公开发布的站点和/或私下发布的站点。 否则，您可以选择允许或禁止公开发布。 有关 {% data variables.product.prodname_pages %} 站点访问权限控制的更多信息，请参阅“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
{% endif %}

禁止发布 {% data variables.product.prodname_pages %} 站点后，任何已发布的站点仍将保持已发布状态。 您可以手动取消发布站点。 更多信息请参阅“[取消发布 {% data variables.product.prodname_pages %} 站点](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)”。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. 在“Pages creation（页面创建）”下，选择要允许的可见性，取消选择要禁止的可见性。 ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png)用于启用 Public Pages 的复选框{% else %}
1. 在“Pages creation（页面创建）”下，选择或取消选择 **Allow members to publish sites（允许成员发布站点）**。 ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)用于启用 Public Pages 的复选框{% endif %}
1. 单击 **Save（保存）**。

## 延伸阅读

- "[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
