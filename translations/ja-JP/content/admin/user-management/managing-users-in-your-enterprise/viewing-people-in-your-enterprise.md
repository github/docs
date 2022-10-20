---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
permissions: 'Enterprise owners can view the people in an enterprise.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
---

## About the list of people in your enterprise

To audit access to your enterprise's resources and manage license usage, you can see a list of all the people who have access to your enterprise. 

You can see all current enterprise members and enterprise administrators{% ifversion ghec %}, as well as pending invitations to become members and administrators{% endif %}. To make it easier to consume this information, you can search and filter the lists.

{% ifversion ghec %}

If {% data variables.product.prodname_github_connect %} is configured for your enterprise, when you filter a list of people in your enterprise, the following limitations apply.

- The filter for two-factor authentication (2FA) status does not show people who only have an account on a {% data variables.product.prodname_ghe_server %} instance.
- If you combine the filter for accounts on {% data variables.product.prodname_ghe_server %} instances with either the filter for organizations or 2FA status, you will not see any results.

For more information about {% data variables.product.prodname_github_connect %}, see the following articles.

- "[About {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation
- "[About {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" in the {% data variables.product.prodname_ghe_managed %} documentation

{% endif %}

{% ifversion enterprise-member-csv %}
You can also export membership information for your enterprise. For more information, see "[Exporting membership information for your enterprise](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)."
{% endif %}

## Viewing enterprise administrators

You can view all the current enterprise owners{% ifversion ghec %} and billing managers{% endif %} for your enterprise.{% ifversion enterprise-membership-view-improvements %} You can see useful information about each administrator{% ifversion ghec %} and filter the list by role{% endif %}.{% endif %} You can find a specific person by searching for their username or display name.

{% ifversion ghes > 3.5 %}
Enterprise owners whose accounts are suspended are included in the list of enterprise administrators, and are identified as suspended. You should consider demoting any suspended owners you see. For more information, see "[Promoting or demoting a site administrator](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)."
{% endif %}

{% ifversion not ghae %}
You can also remove an administrator. For more information. see "[Inviting people to manage your enterprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}

## Viewing members {% ifversion enterprise-membership-view-improvements %}{% else %}and outside collaborators{% endif %}

You can see all the current members {% ifversion enterprise-membership-view-improvements %}{% else %}or outside collaborators{% endif %} for your enterprise. You can see useful information about each account and filter the list in useful ways, such as by role. You can find a specific person by searching for their username or display name.

You can view more information about the person's access to your enterprise, such as the organizations the person belongs to, by clicking on the person's name.

{% ifversion remove-enterprise-members %}
You can also remove any enterprise member from all organizations owned by the enterprise. For more information, see "[Removing a member from your enterprise](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. Optionally, to view a list of outside collaborators rather than the list of members, click **Outside collaborators**.

   ![Outside collaborators tab on the enterprise members page](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Viewing outside collaborators

You can see all the current outside collaborators for your enterprise. You can see useful information about each collaborator and filter the list in useful ways, such as by organization. You can find a specific collaborator by searching for their username or display name.

You can view more information about the person's access to your enterprise, such as a list of all the repositories the collaborator has access to, by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Outside collaborators**.

  ![Outside collaborators tab in the enterprise settings sidebar]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## Viewing pending invitations

You can see all the pending invitations to become members, administrators, or outside collaborators in your enterprise. You can filter the list in useful ways, such as by organization. You can find a specific person by searching for their username or display name.

In the list of pending members, for any individual account, you can cancel all invitations to join organizations owned by your enterprise. This does not cancel any invitations for that same person to become an enterprise administrator or outside collaborator. 

{% note %}

**Note:** If an invitation was provisioned via SCIM, you must cancel the invitation via your identity provider (IdP) instead of on {% data variables.product.prodname_dotcom %}.

{% endnote %}

If you use {% data variables.product.prodname_vss_ghe %}, the list of pending invitations includes all {% data variables.product.prodname_vs %} subscribers that haven't joined any of your organizations on {% data variables.product.prodname_dotcom %}, even if the subscriber does not have a pending invitation to join an organization. For more information about how to get {% data variables.product.prodname_vs %} subscribers access to {% data variables.product.prodname_enterprise %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Pending invitations**.

   ![Screenshot of the "Pending invitations" tab in the sidebar](/assets/images/help/enterprises/pending-invitations-tab.png)
1. Optionally, to cancel all invitations for an account to join organizations owned by your enterprise, to the right of the account, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Cancel invitation**.

   ![Screenshot of the "Cancel invitation" button](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Optionally, to view pending invitations for enterprise administrators or outside collaborators, under "Pending members", click **Administrators** or **Outside collaborators**.

   ![Screenshot of the "Members", "Administrators", and "Outside collaborators" tabs](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Viewing suspended members in an {% data variables.enterprise.prodname_emu_enterprise %}

If your enterprise uses {% data variables.product.prodname_emus %}, you can also view suspended users. Suspended users are members who have been deprovisioned after being unassigned from the {% data variables.product.prodname_emu_idp_application %} application or deleted from the identity provider. For more information, see "[About Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. To view a list of suspended members, above the list of active members, click **Suspended**.
  ![Screenshot showing "Suspended" option](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Viewing dormant users

You can view a list of all dormant users {% ifversion ghes or ghae %} who have not been suspended and {% endif %}who are not site administrators. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} For more information, see "[Managing dormant users](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)."

{% ifversion ghec or ghes %}
## Viewing members without an email address from a verified domain

You can view a list of members in your enterprise who don't have an email address from a verified domain associated with their user account on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. Under "Notification preferences", click the {% octicon "eye" aria-label="The github eye icon" %} **View enterprise members without an approved or verified domain email** link.
{% endif %}

## Further reading

- "[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
