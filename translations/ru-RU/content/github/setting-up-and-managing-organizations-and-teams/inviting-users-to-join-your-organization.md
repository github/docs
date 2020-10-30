---
title: Inviting users to join your organization
intro: 'You can invite anyone to become a member of your organization using their {% data variables.product.product_name %} username or email address.'
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization/
  - /articles/inviting-users-to-join-your-organization
versions:
  free-pro-team: '*'
---

{% tip %}

**Tips**:
- Only organization owners can invite users to join an organization. For more information, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization)."
- If your organization has a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see "[About per-user pricing](/articles/about-per-user-pricing)." {% data reusables.organizations.org-invite-expiration %}
- If your organization [requires members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), users you invite must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before they can accept the invitation.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

### Дополнительная литература
- "[Adding organization members to a team](/articles/adding-organization-members-to-a-team)"
