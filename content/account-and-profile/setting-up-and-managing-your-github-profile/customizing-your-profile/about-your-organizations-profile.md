---
title: About your organization's profile
intro: Your organization's profile page shows basic information about your organization.
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

You can optionally choose to add a description, location, website, and email address for your organization, and pin important repositories.{% ifversion fpt or ghec or ghes %} You can customize your organization's public profile by adding a README.md file. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can confirm their organization's identity and display a "Verified" badge on their organization's profile page by verifying the organization's domains with {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% elsif ghec or ghes %}
To confirm your organization's identity and display a "Verified" badge on your organization profile page, you can verify your organization's domains with {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."
{% endif %}

{% ifversion fpt or ghes or ghec %}
![Screenshot of the profile page for the @docs organization.](/assets/images/help/profile/org-profile.png)
{% endif %}

## Further reading

- "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
