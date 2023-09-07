---
title: Synchronizing a team with an identity provider group
intro: 'You can synchronize a {% data variables.product.product_name %} team with a supported identity provider (IdP) group to automatically add and remove team members.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## About team synchronization

{% data reusables.identity-and-permissions.about-team-sync %} {% ifversion ghec %}For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."{% endif %}

{% ifversion ghec %}You can connect up to five IdP groups to a {% data variables.product.product_name %} team.{% elsif ghae %}You can connect a team on {% data variables.product.product_name %} to one IdP group. All users in the group are automatically added to the team and also added to the parent organization as members. When you disconnect a group from a team, users who became members of the organization via team membership are removed from the organization.{% endif %} You can assign an IdP group to multiple {% data variables.product.product_name %} teams.

{% ifversion ghec %}Team synchronization does not support IdP groups with more than 5000 members.{% endif %}

Once a {% data variables.product.prodname_dotcom %} team is connected to an IdP group, your IdP administrator must make team membership changes through the identity provider. You cannot manage team membership on {% data variables.product.product_name %}{% ifversion ghec %} or using the API{% endif %}.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion team-sync-manage-org-invites %}
{% data reusables.identity-and-permissions.team-sync-org-invites %} For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization#managing-whether-team-synchronization-can-invite-non-members-to-your-organization)" and "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise#managing-whether-team-synchronization-can-invite-non-members-to-organizations)."
{% endif %}

{% ifversion ghec %}
All team membership changes made through your IdP will appear in the audit log on {% data variables.product.product_name %} as changes made by the team synchronization bot. Team synchronization will fetch group information from your IdP at least once every hour, and reflect any changes in IdP group membership into {% data variables.product.product_name %}.
Connecting a team to an IdP group may remove some team members. For more information, see "[Requirements for members of synchronized teams](#requirements-for-members-of-synchronized-teams)."
{% endif %}

{% ifversion ghae %}
When group membership changes on your IdP, your IdP sends a SCIM request with the changes to {% data variables.product.product_name %} according to the schedule determined by your IdP. Any requests that change {% data variables.product.prodname_dotcom %} team or organization membership will register in the audit log as changes made by the account used to configure user provisioning. For more information about this account, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)." For more information about SCIM request schedules, see "[Check the status of user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)" in the Microsoft Docs.
{% endif %}

Parent teams cannot synchronize with IdP groups. If the team you want to connect to an IdP group is a parent team, we recommend creating a new team or removing the nested relationships that make your team a parent team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams#nested-teams)," "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)," and "[AUTOTITLE](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)."

To manage repository access for any {% data variables.product.prodname_dotcom %} team, including teams connected to an IdP group, you must make changes with {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)."

{% ifversion ghec %}You can also manage team synchronization with the API. For more information, see "[AUTOTITLE](/rest/teams#team-sync)."{% endif %}

{% ifversion ghec %}

## Requirements for members of synchronized teams

After you connect a team to an IdP group, team synchronization will add each member of the IdP group to the corresponding team on {% data variables.product.product_name %} only if:

{%- ifversion team-sync-manage-org-invites %}
- If team synchronization is not allowed to invite non-members to your organization, the person is already a member of the organization on {% data variables.product.product_name %}.
{%- endif %}
- The person has already logged in with their personal account on {% data variables.product.product_name %} and authenticated to the organization or enterprise account via SAML single sign-on at least once.
- The person's SSO identity is a member of the IdP group.

Existing teams or group members who do not meet these criteria will be automatically removed from the team on {% data variables.product.product_name %} and lose access to repositories. Revoking a user's linked identity will also remove the user from from any teams mapped to IdP groups. For more information, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

A removed team member can be added back to a team automatically once they have authenticated to the organization or enterprise account using SSO and are moved to the connected IdP group.

To avoid unintentionally removing team members, we recommend enforcing SAML SSO in your organization or enterprise account, creating new teams to synchronize membership data, and checking IdP group membership before synchronizing existing teams. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

{% endif %}

## Prerequisites

{% data reusables.identity-and-permissions.team-and-idp-group %}

{% ifversion ghec %}
Before you can connect a {% data variables.product.product_name %} team with an IdP group, an organization or enterprise owner must enable team synchronization for your organization or enterprise account. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise)."

To avoid unintentionally removing team members, visit the administrative portal for your IdP and confirm that each current team member is also in the IdP groups that you want to connect to this team. If you don't have this access to your identity provider, you can reach out to your IdP administrator.

You must authenticate using SAML SSO. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on)."

{% elsif ghae %}
Before you can connect a {% data variables.product.product_name %} team with an IdP group, you must first configure user provisioning for {% data variables.location.product_location %} using a supported System for Cross-domain Identity Management (SCIM). For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)."

Once user provisioning for {% data variables.product.product_name %} is configured using SCIM, you can assign the {% data variables.product.product_name %} application to every IdP group that you want to use on {% data variables.product.product_name %}. For more information, see [Configure automatic user provisioning to GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) in the Microsoft Docs.

{% elsif scim-for-ghes %}
You must configure user provisioning with SCIM for {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)."

{% data reusables.scim.ghes-beta-note %}
{% endif %}

## Connecting an IdP group to a team

When you connect an IdP group to a {% data variables.product.product_name %} team, all users in the group are automatically added to the team. {% ifversion ghae %}Any users who were not already members of the parent organization members are also added to the organization.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{%- ifversion ghec %}
1. Under "Identity Provider Groups", select the **Select Groups** dropdown menu, and click up to 5 identity provider groups.
{%- elsif ghae %}
1. Under "Identity Provider Group", select the **Select Group** dropdown menu, and click an identity provider group from the list.
{%- endif %}
1. Click **Save changes**.

## Disconnecting an IdP group from a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{%- ifversion ghec %}
1. Under "Identity Provider Groups", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="Remove group" %}.
{%- elsif ghae %}
1. Under "Identity Provider Group", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="Remove group" %}.

   ![Unselect a connected IdP group from the GitHub team.](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
{%- endif %}
1. Click **Save changes**.
