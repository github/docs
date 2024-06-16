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

{% note %}

**Note:** You can require that all members{% ifversion fpt or ghec %}, including, owners, billing managers and{% else %} and{% endif %} outside collaborators in your organization have two-factor authentication enabled. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)."

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. To view organization members, including organization owners, who have enabled or disabled two-factor authentication, on the right, select **2FA**, then click **Enabled** or **Disabled**. {% ifversion mandatory-2fa-required-overview %}Additionally, you can view which members are required to enable two-factor authentication by clicking **Required**.<br><br>

   {% data reusables.two_fa.mandatory-2fa-contributors-2023 %}{% endif %}{% ifversion mandatory-2fa-required-overview %}

   ![Screenshot of the list of organization members. A dropdown menu, labeled "2FA", is expanded and outlined in orange.](/assets/images/help/2fa/filter-org-members-by-2fa-required.png){% else %}

   ![Screenshot of the list of organization members. A dropdown menu, labeled "2FA", is expanded and outlined in orange.](/assets/images/help/2fa/filter-org-members-by-2fa.png){% endif %}

1. To view outside collaborators in your organization, in the "Organization permissions" sidebar, click **Outside collaborators**.
1. To view which outside collaborators have enabled or disabled two-factor authentication, above the list of outside collaborators, select the **2FA** dropdown menu, then click **Enabled** or **Disabled**. {% ifversion mandatory-2fa-required-overview %}Additionally, you can view which members are required to enable two-factor authentication by clicking **Required**.{% endif %}{% ifversion mandatory-2fa-required-overview %}

   ![Screenshot of the list of outside collaborators. A dropdown menu, labeled "2FA", is expanded and outlined in orange.](/assets/images/help/2fa/filter-org-collaborator-by-2fa-required.png){% else %}

   ![Screenshot of the list of outside collaborators. A dropdown menu, labeled "2FA", is expanded and outlined in orange.](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png){% endif %}

## Further reading

* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)"
