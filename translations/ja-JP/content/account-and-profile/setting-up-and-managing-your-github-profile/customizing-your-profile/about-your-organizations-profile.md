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

You can optionally choose to add a description, location, website, and email address for your organization, and pin important repositories.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} You can customize your organization's profile by adding a README.md file. For more information, see "[Customizing your organization's profile](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt or ghec %}自分の Organization の素性を確認し、Organization のプロフィールページに "Verified (検証済み)" バッジを表示するには、Organization のドメインを {% data variables.product.product_name %}で検証しなければなりません。 For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Organization プロフィールページのサンプル](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Organization プロフィールページのサンプル](/assets/images/help/profile/org_profile.png)
{% endif %}

## 参考リンク

- [Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)
