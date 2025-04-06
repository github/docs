---
title: About organization membership
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
  - /articles/about-organization-membership
  - /github/setting-up-and-managing-your-github-user-account/about-organization-membership
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Organization membership
---
An organization owner can invite you to join their organization as a member, billing manager, or owner. An organization owner or member with admin privileges for a repository can invite you to collaborate in one or more repositories as an outside collaborator. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

You can access organizations you're a member of on your profile page. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/accessing-an-organization)."

When you accept an invitation to join an organization, the organization owners may be able to see:

* Your public profile information
* Your email address
* If you have two-factor authorization enabled
* Repositories you have access to within the organization, and your access level
* Certain activity within the organization
* Country of request origin
* Your IP address

For more information, see the [{% data variables.product.prodname_dotcom %} Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement).

  {% note %}

  **Note:** Owners are not able to view member IP addresses in the organization's audit log. In the event of a security incident, such as an account compromise or inadvertent sharing of sensitive data, organization owners may request details of access to private repositories. The information we return may include your IP address.

  {% endnote %}

By default, your organization membership visibility is set to private. You can choose to publicize individual organization memberships on your profile. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership)."

{% ifversion fpt or ghec %}

If your organization belongs to an enterprise account, you are automatically a member of the enterprise account and visible to enterprise account owners. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% endif %}

You can leave an organization at any time. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)."

## Further reading

* "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations)"
