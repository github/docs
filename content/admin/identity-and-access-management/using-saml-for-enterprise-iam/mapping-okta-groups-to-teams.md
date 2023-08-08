---
title: Mapping Okta groups to teams
shortTitle: Map Okta groups to teams
intro: 'You can map your Okta groups to teams on {% data variables.product.prodname_ghe_managed %} to automatically add and remove team members.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

{% data reusables.saml.okta-ae-sso-beta %}

## About team mapping

If you use Okta as your IdP, you can map your Okta group to a team in {% data variables.product.prodname_ghe_managed %}. Members of the Okta group will automatically become members of the mapped {% data variables.product.prodname_ghe_managed %} team. To configure this mapping, you can configure the Okta "GitHub AE" app to push the group and its members to {% data variables.product.prodname_ghe_managed %}. You can then choose which team in {% data variables.product.prodname_ghe_managed %} will be mapped to the Okta group.

## Prerequisites

You or your Okta administrator must be a Global administrator or a Privileged Role administrator in Okta.

You must enable SAML single sign-on with Okta. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

You must authenticate to your enterprise account using SAML SSO and Okta. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on)."

## Assigning your Okta group to the "GitHub AE" app

1. In the Okta Dashboard, open your group's settings.
1. Click **Manage Apps**.
1. To the right of "GitHub AE", click **Assign**.
1. Click **Done**.

## Pushing the Okta group to {% data variables.product.prodname_ghe_managed %}

When you push an Okta group and map the group to a team, all of the group's members will be able to sign in to {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. Click **Push Groups**.
1. Select the **Push Groups** dropdown menu and click **Find groups by name**.
1. Under "Push groups by name", type the name of the group to push to {% data variables.product.prodname_ghe_managed %}, then click **Save**.

## Mapping a team to the Okta group

You can map a team in your enterprise to an Okta group you previously pushed to {% data variables.product.prodname_ghe_managed %}. Members of the Okta group will then automatically becomes members of the {% data variables.product.prodname_ghe_managed %} team. Any subsequent changes to the Okta group's membership are automatically synchronized with the {% data variables.product.prodname_ghe_managed %} team.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. Under "Identity Provider Group", select the drop-down menu and click an identity provider group.
    ![Drop-down menu to choose identity provider group.](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Click **Save changes**.

## Checking the status of your mapped teams

Enterprise owners can use the site admin dashboard to check how Okta groups are mapped to teams on {% data variables.product.prodname_ghe_managed %}.

1. To access the dashboard, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left pane, click **External groups**.
1. To view more details about a group, in the list of external groups, click on a group.
1. The group's details includes the name of the Okta group, a list of the Okta users that are members of the group, and the corresponding mapped team on {% data variables.product.prodname_ghe_managed %}.

## Viewing audit log events for mapped groups

To monitor SSO activity for mapped groups, you can review the `external_group` and `external_identity` events events in the {% data variables.product.prodname_ghe_managed %} audit log.

For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)."
