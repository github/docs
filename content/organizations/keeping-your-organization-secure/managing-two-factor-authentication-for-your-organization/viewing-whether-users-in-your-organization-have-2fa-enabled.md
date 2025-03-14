---
title: Viewing whether users in your organization have 2FA enabled
intro: 'You can see which organization owners, members, and outside collaborators have enabled two-factor authentication{% ifversion mandatory-2fa-required-overview %} or are required to do so{% endif %}.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
---

> [!NOTE]
> You can require that all members{% ifversion fpt or ghec %}, including, owners, billing managers and{% else %} and{% endif %} outside collaborators in your organization have two-factor authentication enabled{% ifversion fpt or ghec %}, as well as enforcing that they have secure methods configured {% endif %}. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}

{% ifversion fpt or ghec %}

1. To view the two-factor authentication security levels of organization members, including organization owners, on the right, select **Two-factor authentication**, then click **Secure**, **Insecure**, or **Disabled**.

   ![Screenshot of the list of organization members. A dropdown menu, labeled "Two-factor authentication", is expanded and outlined in orange.](/assets/images/help/2fa/filter-org-members-by-2fa.png)

1. To view outside collaborators in your organization, in the "Organization permissions" sidebar, click **Outside collaborators**.
1. To view which outside collaborators have secure, insecure, or disabled two-factor authentication, above the list of outside collaborators, select the **Two-factor authentication** dropdown menu, then click **Secure**, **Insecure**, or **Disabled**.

{% else %}

1. To view organization members, including organization owners, who have enabled or disabled two-factor authentication, on the right, select **2FA**, then click **Enabled** or **Disabled**.

![Screenshot of the list of organization members. A dropdown menu, labeled "2FA", is expanded and outlined in orange.](/assets/images/help/2fa/legacy-filter-org-members-by-2fa.png)

1. To view outside collaborators in your organization, in the "Organization permissions" sidebar, click **Outside collaborators**.
1. To view which outside collaborators have enabled or disabled two-factor authentication, above the list of outside collaborators, select the **2FA** dropdown menu, then click **Enabled** or **Disabled**.

{% endif %}

## Further reading

* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)
