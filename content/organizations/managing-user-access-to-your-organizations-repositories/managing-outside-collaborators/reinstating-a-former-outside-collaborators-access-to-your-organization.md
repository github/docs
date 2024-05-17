---
title: Reinstating a former outside collaborator's access to your organization
intro: 'You can reinstate a former outside collaborator''s access permissions for organization repositories, forks, and settings.'
redirect_from:
  - /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
  - /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
  - /organizations/managing-access-to-your-organizations-repositories/reinstating-a-former-outside-collaborators-access-to-your-organization
  - /organizations/managing-user-access-to-your-organizations-repositories/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Reinstate collaborator
---

{% data reusables.enterprise-managed.repo-collaborators-note %}

When an outside collaborator's access to your organization's private repositories is removed, the user's access privileges and settings are saved for three months. You can restore the user's privileges if you {% ifversion fpt or ghec %}invite{% else %}add{% endif %} them back to the organization within that time frame.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

When you reinstate a former outside collaborator, you can restore:
- The user's former access to organization repositories
- Any private forks of repositories owned by the organization
- Membership in the organization's teams
- Previous access and permissions for the organization's repositories
- Stars for organization repositories
- Issue assignments in the organization
- Repository subscriptions (notification settings for watching, not watching, or ignoring a repository's activity)

{% tip %}

**Tips**:

- Only organization owners can reinstate outside collaborators' access to an organization.{% ifversion prevent-org-admin-add-outside-collaborator %} Enterprise owners may further restrict the ability to reinstate outside collaborators' access to enterprise owners only.{% endif %} For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."
- The reinstating a member flow on {% data variables.location.product_location %} may use the term "member" to describe reinstating an outside collaborator but if you reinstate this person and keep their previous privileges, they will only have their previous [outside collaborator permissions](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).{% ifversion fpt or ghec %}
- If your organization has a paid per-user subscription, an unused license must be available before you can invite a new member to join the organization or reinstate a former organization member. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)."{% endif %}

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
1. Select whether to restore the outside collaborator's previous privileges in the organization by clicking **Invite and reinstate** or choose to clear their previous privileges and set new access permissions by clicking **Invite and start fresh**.

   {% warning %}

   **Warning:** If you want to upgrade the outside collaborator to a member of your organization, then choose **Invite and start fresh** and choose a new role for this person. Note, however, that this person's private forks of your organization's repositories will be lost if you choose to start fresh. To make the former outside collaborator a member of your organization _and_ keep their private forks, choose **Invite and reinstate** instead. Once this person accepts the invitation, you can convert them to an organization member by [inviting them to join the organization as a member](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-outside-collaborator-to-an-organization-member).

   {% endwarning %}
{% else %}
1. Select whether to restore the outside collaborator's previous privileges in the organization by clicking **Add and reinstate** or choose to clear their previous privileges and set new access permissions by clicking **Add and start fresh**.

   {% warning %}

   **Warning:** If you want to upgrade the outside collaborator to a member of your organization, then choose **Add and start fresh** and choose a new role for this person. Note, however, that this person's private forks of your organization's repositories will be lost if you choose to start fresh. To make the former outside collaborator a member of your organization _and_ keep their private forks, choose **Add and reinstate** instead. Then, you can convert them to an organization member by [adding them to the organization as a member](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-outside-collaborator-to-an-organization-member).

   {% endwarning %}
{% endif %}
{% ifversion fpt or ghec %}
1. If you cleared the previous privileges for a former outside collaborator, choose a role for the user and optionally add them to some teams, then click **Send invitation**.
{% else %}
1. If you cleared the previous privileges for a former outside collaborator, choose a role for the user and optionally add them to some teams, then click **Add member**.
{% endif %}
{% ifversion fpt or ghec %}
1. The invited person will receive an email inviting them to the organization. They will need to accept the invitation before becoming an outside collaborator in the organization. {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
