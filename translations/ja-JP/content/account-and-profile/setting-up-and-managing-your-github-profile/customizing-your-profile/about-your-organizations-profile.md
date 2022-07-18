---
title: Organization のプロフィールについて
intro: Organization のプロフィールページは、Organization に関する基本的な情報を表示します。
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
shortTitle: Organization's profile
---

You can optionally choose to add a description, location, website, and email address for your organization, and pin important repositories.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} You can customize your organization's public profile by adding a README.md file. For more information, see "[Customizing your organization's profile](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can confirm their organization's identity and display a "Verified" badge on their organization's profile page by verifying the organization's domains with {% data variables.product.product_name %}. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" in the {% data variables.product.prodname_ghe_cloud %} documenatation.
{% elsif ghec or ghes %}
To confirm your organization's identity and display a "Verified" badge on your organization profile page, you can verify your organization's domains with {% data variables.product.prodname_dotcom %}. 詳しい情報については「[Organizationのドメインの検証もしくは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Organization プロフィールページのサンプル](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Organization プロフィールページのサンプル](/assets/images/help/profile/org_profile.png)
{% endif %}

## 参考リンク

- [Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)
