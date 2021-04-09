---
title: 管理组织的 GitHub Pages 站点发布
intro: '您可以控制组织成员是否可以从组织仓库中发布 {% data variables.product.prodname_pages %} 站点，并限制成员是否可以为站点选择可见性{% endif %}。'
permissions: '组织所有者可以管理组织中仓库的 {% data variables.product.prodname_pages %} 站点发布。'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - 组织
  - 团队
---

{% if currentVersion == "free-pro-team@latest" %}
If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can choose to allow organization members to create publicly published sites, privately published sites, both, or neither. 否则，您可以选择允许或禁止公开发布。 有关 {% data variables.product.prodname_pages %} 站点访问权限控制的更多信息，请参阅“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
{% endif %}

禁止发布 {% data variables.product.prodname_pages %} 站点后，任何已发布的站点仍将保持已发布状态。 您可以手动取消发布站点。 更多信息请参阅“[取消发布 {% data variables.product.prodname_pages %} 站点](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}{% if currentVersion == "free-pro-team@latest" %}
1. 在“Pages creation（页面创建）”下，选择要允许的可见性，取消选择要禁止的可见性。 ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png)用于启用 Public Pages 的复选框{% else %}
1. 在“Pages creation（页面创建）”下，选择或取消选择 **Allow members to publish sites（允许成员发布站点）**。 ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)用于启用 Public Pages 的复选框{% endif %}
1. 单击 **Save（保存）**。

### 延伸阅读

- "[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
