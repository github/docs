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
You can optionally choose to add a description, location, website, and email address for your organization, and pin important repositories.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} You can customize your organization's profile by adding a README.md file. For more information, see "[Customizing your organization's profile](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt or ghec %}To confirm your organization's identity and display a "Verified" badge on your organization profile page, you must verify your organization's domains with {% data variables.product.product_name %}. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Sample organization profile page](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Sample organization profile page](/assets/images/help/profile/org_profile.png)
{% endif %}

## Further reading

- "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
