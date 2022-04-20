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

您可以选择为组织添加描述、位置、网站和电子邮件地址，以及固定重要存储库。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} 您可以通过添加 README.md 文件来自定义组织的配置文件。 更多信息请参阅“[自定义组织的配置文件](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)”。{% endif %}

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can confirm their organization's identity and display a "Verified" badge on their organization's profile page by verifying the organization's domains with {% data variables.product.product_name %}. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" in the {% data variables.product.prodname_ghe_cloud %} documenatation.
{% elsif ghec or ghes > 3.1 %}
To confirm your organization's identity and display a "Verified" badge on your organization profile page, you can verify your organization's domains with {% data variables.product.prodname_dotcom %}. 更多信息请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![组织资料页面示例](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![组织资料页面示例](/assets/images/help/profile/org_profile.png)
{% endif %}

## 延伸阅读

- "[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
