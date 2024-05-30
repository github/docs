---
title: Converting an outside collaborator to an organization member
intro: 'If you would like to give an outside collaborator on your organization''s repositories broader permissions within your organization, you can {% ifversion fpt or ghec %}invite them to become a member of{% else %}make them a member of{% endif %} the organization.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
  - /organizations/managing-access-to-your-organizations-repositories/converting-an-outside-collaborator-to-an-organization-member
  - /organizations/managing-user-access-to-your-organizations-repositories/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: 'Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Convert collaborator to member
---

{% data reusables.enterprise-managed.repo-collaborators-note %}

{% ifversion fpt or ghec %}
If your organization is on a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)." {% data reusables.organizations.org-invite-expiration %}{% endif %}

If your organization [requires members to use two-factor authentication](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), users {% ifversion fpt or ghec %}you invite must [enable two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa) before they can accept the invitation.{% else %}must [enable two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% ifversion fpt or ghec %}
1. To the right of the name of the outside collaborator you want to become a member, select the {% octicon "kebab-horizontal" aria-label="Collaborator settings" %} dropdown menu and click **Invite to organization**.

   ![Screenshot of the outside collaborator list for an organization. To the right of a collaborator, a kebab icon is outlined in dark orange.](/assets/images/help/organizations/manage-outside-collaborator.png)
{% else %}
1. To the right of the name of the outside collaborator you want to become a member, click **Invite to organization**.
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}
