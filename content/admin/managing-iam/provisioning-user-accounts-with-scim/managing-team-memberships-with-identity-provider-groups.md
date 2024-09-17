---
title: Managing team memberships with identity provider groups
shortTitle: Manage teams with your IdP
intro: 'Connect IdP groups with teams on {% data variables.product.prodname_dotcom %} to manage team and organization membership through your identity provider.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
---

{% data reusables.scim.ghes-beta-note %}

## About team management with {% ifversion ghec %}{% data variables.product.prodname_emus %}{% else %}SCIM{% endif %}

{% data reusables.emus.about-team-management-with-idp %} When you connect a team in one of your enterprise's organizations to an IdP group, changes to membership from the IdP group are reflected in your enterprise automatically, reducing the need for manual updates and custom scripts.

When a change to an IdP group or a new team connection results in a user joining a team in an organization they were not already a member of, the user will automatically be added to the organization. When you disconnect a group from a team, users who became members of the organization via team membership are removed from the organization if they are not assigned membership in the organization by any other means.

{% note %}

**Note:** Organization owners can also add users to organizations manually, as long as the accounts have already been provisioned via SCIM.

{% endnote %}

When group membership changes on your IdP, your IdP sends a SCIM request with the changes to {% data variables.product.prodname_dotcom %} according to the schedule determined by your IdP, so change may not be immediate. Any requests that change team or organization membership will register in the audit log as changes made by the account used to configure user provisioning.

{% data variables.product.prodname_dotcom %} also runs a reconciliation job once per day, which synchronizes team membership with IdP group membership that is stored on {% data variables.product.prodname_dotcom %}, based on information previously sent from the IdP via SCIM. If this job finds that a user is a member of an IdP group in the enterprise, but they are not a member of the mapped team or its organization, the job will attempt to add the user to the organization and team.

Teams connected to IdP groups cannot be parents of other teams nor a child of another team. If the team you want to connect to an IdP group is a parent or child team, we recommend creating a new team or removing the nested relationships that make your team a parent team.

To manage repository access for any team in your enterprise, including teams connected to an IdP group, you must make changes on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)".

## Requirements for connecting IdP groups with teams

Before you can connect an IdP group with a team on {% data variables.product.prodname_dotcom %}, you must assign the group to the {% ifversion ghec %}{% data variables.product.prodname_emu_idp_application %}{% else %}relevant{% endif %} application in your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)."

You can connect a team in your enterprise to one IdP group. You can assign the same IdP group to multiple teams in your enterprise.

If you are connecting an existing team to an IdP group, you must first remove any members that were added manually. After you connect a team in your enterprise to an IdP group, your IdP administrator must make team membership changes through the identity provider. You cannot manage team membership directly on {% data variables.product.prodname_dotcom %}.

If you use Microsoft Entra ID (previously known as Azure AD) as your IdP, you can only connect a team to a security group. Nested group memberships and Microsoft 365 groups are not supported.

## Creating a new team connected to an IdP group

Any member of an organization can create a new team and connect the team to an IdP group.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
1. To connect a team, under "Identity Provider Groups", select the **Select Groups** dropdown menu and click the team you want to connect.
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}

## Managing the connection between an existing team and an IdP group

Organization owners {% ifversion ghes %}and team maintainers {% endif %}can manage the existing connection between an IdP group and a team.{% ifversion ghec %} If your enterprise does not use {% data variables.enterprise.prodname_managed_users %}, team maintainers can also manage the connection.{% endif %}

{% note %}

**Note**: Before you connect an existing team on {% data variables.product.prodname_dotcom %} to an IdP group for the first time, all members of the team on {% data variables.product.prodname_dotcom %} must first be removed. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)."

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. Optionally, under "Identity Provider Group", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="X symbol" %}.
    ![Unselect a connected IdP group from the GitHub team.](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. To connect an IdP group, under "Identity Provider Group", select the drop-down menu, and click an identity provider group from the list.
    ![Drop-down menu to choose identity provider group.](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Click **Save changes**.

## Viewing IdP groups, group membership, and connected teams

Enterprise owners can review a list of IdP groups, each group's memberships, and any teams connected to each group. The IdP groups and memberships listed in this view are based on information sent from the IdP to {% data variables.product.prodname_dotcom %} via SCIM. You must edit the membership for a group on your IdP.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.click-identity-provider %}

1. To see the members and teams connected to an IdP group, click the group's name.

1. To view the teams connected to the IdP group, click **Teams**.

If a team cannot sync with the group on your IdP, the team will display an error. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/troubleshooting-team-membership-with-identity-provider-groups)."

## Removing members from organizations

The way a member is added to an organization owned by your enterprise determines how they must be removed from an organization.

* **If a member was added to an organization manually, you must remove them manually.** Unassigning them from the {% ifversion ghec %}{% data variables.product.prodname_emu_idp_application %}{% else %}relevant{% endif %} application on your IdP will suspend the user but not remove them from the organization.
* **If a user became an organization member because they were added to IdP groups, remove them from _all_ of the mapped IdP groups** associated with the organization.

To discover how a member was added to an organization, you can filter the member list by type. See {% ifversion ghec %}"[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)."{% else %}"[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type)."{% endif %}
