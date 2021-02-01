---
title: Synchronizing a team with an identity provider group
intro: 'You can synchronize a {% data variables.product.prodname_dotcom %} team with an identity provider (IdP) group to automatically add and remove team members.'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### About team synchronization

{% data reusables.identity-and-permissions.about-team-sync %}

You can connect up to five IdP groups to a {% data variables.product.prodname_dotcom %} team. An IdP group can be assigned to multiple {% data variables.product.prodname_dotcom %} teams without restriction.

Team synchronization does not support IdP groups with more than 5000 members. 

Once a {% data variables.product.prodname_dotcom %} team is connected to an IdP group, your IdP administrator must make team membership changes through the identity provider. You cannot manage team membership on {% data variables.product.product_name %} or using the API.

All team membership changes made through your IdP will appear in the audit log on {% data variables.product.product_name %} as changes made by the team synchronization bot. Your IdP will send team membership data to {% data variables.product.prodname_dotcom %} once every hour.
Connecting a team to an IdP group may remove some team members. For more information, see "[Requirements for members of synchronized teams](#requirements-for-members-of-synchronized-teams)."

Parent teams cannot synchronize with IdP groups. If the team you want to connect to an IdP group is a parent team, we recommend creating a new team or removing the nested relationships that make your team a parent team. For more information, see "[About teams](/articles/about-teams#nested-teams)," "[Creating a team](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)," and "[Moving a team in your organization's hierarchy](/articles/moving-a-team-in-your-organizations-hierarchy)."

To manage repository access for any {% data variables.product.prodname_dotcom %} team, including teams connected to an IdP group, you must make changes with {% data variables.product.product_name %}. For more information, see "[About teams](/articles/about-teams)" and "[Managing team access to an organization repository](/articles/managing-team-access-to-an-organization-repository)." 

You can also manage team synchronization with the API. For more information, see "[Team synchronization](/rest/reference/teams#team-sync)."

### Requirements for members of synchronized teams

After you connect a team to an IdP group, team synchronization will add each member of the IdP group to the corresponding team on {% data variables.product.prodname_dotcom %} only if:
- The person is a member of the organization on {% data variables.product.prodname_dotcom %}.
- The person has already logged in with their user account on {% data variables.product.prodname_dotcom %} and authenticated to the organization or enterprise account via SAML single sign-on at least once.
- The person's SSO identity is a member of the IdP group.  

Existing teams or group members who do not meet these criteria will be automatically removed from the team on {% data variables.product.prodname_dotcom %} and lose access to repositories. Revoking a user's linked identity will also remove the user from from any teams mapped to IdP groups. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" and "[Viewing and managing a user's SAML access to your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

A removed team member can be added back to a team automatically once they have authenticated to the organization or enterprise account using SSO and are moved to the connected IdP group.

To avoid unintentionally removing team members, we recommend enforcing SAML SSO in your organization or enterprise account, creating new teams to synchronize membership data, and checking IdP group membership before synchronizing existing teams. For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)" and "[Enabling SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

If your organization is owned by an enterprise account, enabling team synchronization for the enterprise account will override your organization-level team synchronization settings. For more information, see "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

### Prerequisites

Before you can connect a team with an identity provider group, an organization or enterprise owner must enable team synchronization for your organization or enterprise account. For more information, see "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

To avoid unintentionally removing team members, visit the administrative portal for your IdP and confirm that each current team member is also in the IdP groups that you want to connect to this team. If you don't have this access to your identity provider, you can reach out to your IdP administrator.

You must authenticate using SAML SSO. For more information, see "[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)."

### Connecting an IdP group to a team

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Under "Identity Provider Groups", use the drop-down menu, and select up to 5 identity provider groups.
    ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png)
6. Click **Save changes**.

### Disconnecting an IdP group from a team

If you disconnect an IdP group from a {% data variables.product.prodname_dotcom %} team, team members that were assigned to the {% data variables.product.prodname_dotcom %} team through the IdP group will be removed from the team. 

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. Under "Identity Provider Groups", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="X symbol" %}. 
    ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png)
7. Click **Save changes**.
