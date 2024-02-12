---
title: Adding people to your organization
intro: 'You can make anyone a member of your organization using their {% data variables.product.product_name %} username or email address.'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  ghes: '*'
  ghae: '*'
permissions: Organization owners can add people to an organization.
shortTitle: Add people to organization
---
{% ifversion organization-invitation-enhancements %}

## Adding people to your organization

{% endif %}

{% ifversion not ghae %}
If your organization [requires members to use two-factor authentication](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), users must [enable two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}

{% ifversion organization-invitation-enhancements %}

## Retrying or canceling expired invitations

Invitations expire after 7 days. You can retry or cancel expired invitations, either one by one or in bulk. Failed invitations to outside collaborators can also be found in this view.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.retrying-or-deleting-expired-invitations %}

{% endif %}

## Further reading

- "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)"
