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
 
You must enable SAML single sign-on with Okta. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."

You must authenticate to your enterprise account using SAML SSO and Okta. For more information, see "[Authenticating with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)."

## Assigning your Okta group to the "GitHub AE" app

1. In the Okta Dashboard, open your group's settings.
1. Click **Manage Apps**.
  ![Add group to app](/assets/images/help/saml/okta-ae-group-add-app.png)

1. To the right of "GitHub AE", click **Assign**.

  ![Assign app](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Click **Done**.

## Pushing the Okta group to {% data variables.product.prodname_ghe_managed %}

When you push an Okta group and map the group to a team, all of the group's members will be able to sign in to {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. Click **Push Groups**.

  ![Push Groups tab](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. Select the Push Groups drop-down menu and click **Find groups by name**.

  ![Add groups button](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Type the name of the group to push to {% data variables.product.prodname_ghe_managed %}, then click **Save**.

  ![Add group name](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Mapping a team to the Okta group

You can map a team in your enterprise to an Okta group you previously pushed to {% data variables.product.prodname_ghe_managed %}. Members of the Okta group will then automatically becomes members of the {% data variables.product.prodname_ghe_managed %} team. Any subsequent changes to the Okta group's membership are automatically synchronized with the {% data variables.product.prodname_ghe_managed %} team.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. Under "Identity Provider Group", select the drop-down menu and click an identity provider group.
    ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Click **Save changes**.

## Checking the status of your mapped teams

Enterprise owners can use the site admin dashboard to check how Okta groups are mapped to teams on {% data variables.product.prodname_ghe_managed %}.

1. To access the dashboard, in the upper-right corner of any page, click {% octicon "rocket" aria-label="The rocket ship" %}.
  ![Rocket ship icon for accessing site admin settings](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. In the left pane, click **External groups**.

  ![Add group name](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. To view more details about a group, in the list of external groups, click on a group.

  ![List of external groups](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. The group's details includes the name of the Okta group, a list of the Okta users that are members of the group, and the corresponding mapped team on {% data variables.product.prodname_ghe_managed %}. 

  ![List of external groups](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Viewing audit log events for mapped groups

 To monitor SSO activity for mapped groups, you can review the following events in the {% data variables.product.prodname_ghe_managed %} audit log.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

For more information, see "[Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)."
