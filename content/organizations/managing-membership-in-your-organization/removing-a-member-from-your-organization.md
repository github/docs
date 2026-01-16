---
title: Removing a member from your organization
intro: 'If members of your organization no longer require access to any repositories owned by the organization, you can remove them from the organization.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/managing-organizations-in-your-enterprise/removing-users-from-teams-and-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
---

## 1. Understand the effects of removing a member

When you remove members from an organization:

{% ifversion fpt or ghec %}

* If you use volume license billing, the paid license count does not automatically downgrade. To pay for fewer licenses after removing users from your organization, follow the steps in [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan).
* Removed members will lose access to private forks of your organization's private repositories, but they may still have local copies. However, they cannot sync local copies with your organization's repositories. Ultimately, you are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.
* When private repositories are forked to other organizations, those organizations are able to control access to the fork network. This means users may retain access to the forks even after losing access to the original organization because they will still have explicit access via a fork.
* Removed members will also lose access to private forks of your organization's internal repositories, if the removed member is not a member of any other organization owned by the same enterprise account.
* Any organization invitations sent by a removed member, that have not been accepted, are canceled and will not be accessible.
* If the organization is part of an enterprise on {% data variables.product.prodname_ghe_cloud %} and the user is still a member of at least one other organization in the enterprise, the user will retain access to repositories with internal visibility in the organization that they are removed from.
* If the organization is part of an enterprise on {% data variables.product.prodname_ghe_cloud %} and the user is no longer a member of any organizations in it, the user will either become an enterprise unaffiliated member or be removed from the enterprise, depending on your settings. See [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/identity-and-access-management/user-offboarding).
* When you remove a user from your organization, their membership data is saved for three months. You can restore their data, or any private forks they owned of your organization's repositories, if you invite the user to rejoin the organization within that time frame. For more information, see [AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).

{% else %}

* Removed members will lose access to private forks of your organization's private repositories, but may still have local copies. However, they cannot sync local copies with your organization's repositories. Their private forks can be restored if the user is [reinstated as an organization member](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization) within three months of being removed from the organization. Ultimately, you are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.
* Removed members will also lose access to private forks of your organization's internal repositories, if the removed member is not a member of any other organization in your enterprise.
* Any organization invitations sent by the removed user, that have not been accepted, are canceled and will not be accessible.
* When you remove a user from your organization, their membership data is saved for three months. You can restore their data, or any private forks they owned of your organization's repositories, if you invite the user to rejoin the organization within that time frame. For more information, see [AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).

{% endif %}

{% ifversion fpt or ghec %}

## 2. Share best practices

To help the person you're removing from your organization transition and help ensure they delete confidential information or intellectual property, we recommend sharing a checklist of best practices for leaving your organization. For an example, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/best-practices-for-leaving-your-company).

## 3. Understand how you manage organization membership (enterprises only)

If the organization is on {% data variables.product.prodname_ghe_cloud %}, you may manage organization membership from an identity provider.

If you have an enterprise with personal accounts, check if you are using SCIM provisioning in the organization to manage membership. If you are, remove the user from the {% data variables.product.github %} application in your IdP and from any IdP groups that are linked to teams with access to the organization. See [AUTOTITLE](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

If you use {% data variables.product.prodname_emus %}, check the "member type" of the user to see if their membership is managed manually or by IdP groups. If the user is "Managed by IdP groups", remove the user from any IdP groups that are linked to teams with access to the organization. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users).

{% else %}

## 2. Understand how you manage membership

If you have enabled user provisioning with SCIM on your {% data variables.product.prodname_ghe_server %} instance, check the member type of the user. If the user is "Managed by IdP groups", remove the user from any IdP groups that are linked to teams with access to the organization. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-account-type-saml-and-scim).

{% endif %}

## {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Remove the user manually

If the user's organization membership is **not** managed with by a SCIM integration, you can remove the user from an organization manually.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
1. Select the member or members you'd like to remove from the organization.

   ![Screenshot of the first two users in a list of organization members. To the left of each member, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-members-selected-bulk.png)
1. Above the list of members, select the **X members selected...** dropdown menu, and click **Remove from organization**.

   ![Screenshot of the list of organization members. Above the list, a dropdown menu, labeled "2 members selected..." is outlined in dark orange.](/assets/images/help/teams/user-bulk-management-options.png)
1. Review the member or members who will be removed from the organization, then click **Remove members**.

## Further reading

* [AUTOTITLE](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team){% ifversion remove-enterprise-members %}
* [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise){% endif %}
