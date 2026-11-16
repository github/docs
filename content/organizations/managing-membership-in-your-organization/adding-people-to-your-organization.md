---
title: Adding people to your organization
intro: 'You can make anyone a member of your organization using their {% data variables.product.github %} username or email address.'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  ghes: '*'
permissions: Organization owners can add people to an organization.
shortTitle: Add people to organization
category:
  - Manage members
---
{% ifversion organization-invitation-enhancements %}

## Adding people to your organization

{% endif %}

If your organization requires members to use two-factor authentication (2FA), the requirements for adding a user depend on how you add them:

* **Web UI**: The user must enable 2FA before you can add them to the organization.
* **REST API**: You can use `PUT /orgs/{org}/memberships/{username}` to add a user who has not enabled 2FA. The user cannot access organization resources until they enable 2FA. See [AUTOTITLE](/rest/orgs/members#set-organization-membership-for-a-user).

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

* [AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)
