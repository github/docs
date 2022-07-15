---
title: 关于组织的资料
intro: 组织的资料页面显示组织的基本信息。
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: 组织资料
---

您可以选择为组织添加描述、位置、网站和电子邮件地址，以及固定重要存储库。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} 您可以通过添加 README.md 文件来自定义组织的公共配置文件。 更多信息请参阅“[自定义组织的配置文件](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)”。{% endif %}

{% ifversion fpt %}
使用 {% data variables.product.prodname_ghe_cloud %} 的组织可以通过 {% data variables.product.product_name %} 验证组织的域，确认其组织的身份并在其组织的个人资料页面上显示“已验证”徽章。 更多信息请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。
{% elsif ghec or ghes %}
要确认组织的身份并在组织配置文件页面上显示“已验证”徽章，可以使用 {% data variables.product.prodname_dotcom %} 验证组织的域。 更多信息请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![组织资料页面示例](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![组织资料页面示例](/assets/images/help/profile/org_profile.png)
{% endif %}

## 延伸阅读

- "[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
