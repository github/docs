---
title: Reinstating a former member of your organization
intro: 'Organization owners can {% ifversion fpt or ghec %}invite former organization members to rejoin{% else %}add former members to{% endif%} your organization, and choose whether to restore the person''s former role, access permissions, forks, and settings.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
---

## About member reinstatement

If a user is removed from your organization in one of the following ways, the user's access privileges and settings are saved for three months. 

- You manually removed the user from your organization. For more information, see "[Removing a member from your organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)."{% ifversion not ghae %}
- The user was removed from your organization because you've required members and outside collaborators to enable two-factor authentication (2FA). For more information, see "[Requiring two-factor authentication in your organization](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)."{% endif %}{% ifversion fpt or ghec %}
- The user was removed from your organization because you enforced SAML single sign-on. For more information, see "[Enforcing SAML single sign-on for your organization](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}
- You converted an organization member to an outside collaborator. For more information, see "[Converting an organization member to an outside collaborator](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)."

You can restore the user's privileges if you {% ifversion fpt or ghec %}invite{% else %}add{% endif %} them back to the organization within that time frame.

{% note %}

**Note:** {% data reusables.saml.removed-users-can-rejoin %} You do not need to invite these users to rejoin. Instead, the user can sign into their personal account, navigate to the organization, and click the banner to authenticate via SAML single sign-on.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

When you reinstate a former organization member, you can restore:
 - The user's role in the organization
 - Any private forks of repositories owned by the organization
 - Membership in the organization's teams
 - Previous access and permissions for the organization's repositories
 - Stars for organization repositories
 - Issue assignments in the organization
 - Repository subscriptions (notification settings for watching, not watching, or ignoring a repository's activity)

{% ifversion ghes %}
If an organization member was removed from the organization because they did not use two-factor authentication and your organization still requires members to use 2FA, the former member must enable two-factor authentication before you can reinstate their membership.
{% endif %}

{% ifversion fpt or ghec %}
If your organization has a paid per-user subscription, an unused license must be available before you can reinstate a former organization member. For more information, see "[About per-user pricing](/articles/about-per-user-pricing)." {% data reusables.organizations.org-invite-scim %}
{% endif %}

## Reinstating a former member of your organization

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
6. Choose whether to restore that person's previous privileges in the organization or clear their previous privileges and set new access permissions, then click **Invite and reinstate** or **Invite and start fresh**.
  ![Choose to restore info or not](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Choose whether to restore that person's previous privileges in the organization or clear their previous privileges and set new access permissions, then click **Add and reinstate** or **Add and start fresh**.
  ![Choose whether to restore privileges](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt or ghec %}
7. If you cleared the previous privileges for a former organization member, choose a role for the user, and optionally add them to some teams, then click **Send invitation**.
  ![Role and team options and send invitation button](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. If you cleared the previous privileges for a former organization member, choose a role for the user, and optionally add them to some teams, then click **Add member**.
  ![Role and team options and add member button](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Further reading

- "[Converting an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator)"
