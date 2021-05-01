---
title: Removing a member from your organization
intro: 'If members of your organization no longer require access to any repositories owned by the organization, you can remove them from the organization.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Only organization owners can remove members from an organization.

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Warning:** When you remove members from an organization:
- The paid license count does not automatically downgrade. To pay for fewer licenses after removing users from your organization, follow the steps in "[Downgrading your organization's paid seats](/articles/downgrading-your-organization-s-paid-seats)."
- Removed members will lose access to private forks of your organization's private repositories, but they may still have local copies. However, they cannot sync local copies with your organization's repositories. Their private forks can be restored if the user is [reinstated as an organization member](/articles/reinstating-a-former-member-of-your-organization) within three months of being removed from the organization. Ultimately, you are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.
- Any organization invitations sent by a removed member, that have not been accepted, are cancelled and will not be accessible.

{% endwarning %}

{% else %}

{% warning %}

**Warning:** When you remove members from an organization:
 - Removed members will lose access to private forks of your organization's private repositories, but may still have local copies. However, they cannot sync local copies with your organization's repositories. Their private forks can be restored if the user is [reinstated as an organization member](/articles/reinstating-a-former-member-of-your-organization) within three months of being removed from the organization. Ultimately, you are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.
 - Any organization invitations sent by the removed user, that have not been accepted, are cancelled and will not be accessible.

{% endwarning %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

To help the person you're removing from your organization transition and help ensure they delete confidential information or intellectual property, we recommend sharing a checklist of best practices for leaving your organization. For an example, see "[Best practices for leaving your company](/articles/best-practices-for-leaving-your-company/)."

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

### Revoking the user's membership

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Select the member or members you'd like to remove from the organization.
  ![List of members with two members selected](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Above the list of members, use the drop-down menu, and click **Remove from organization**.
  ![Drop-down menu with option to remove members](/assets/images/help/teams/user-bulk-management-options.png)
6. Review the member or members who will be removed from the organization, then click **Remove members**.
  ![List of members who will be removed and Remove members button](/assets/images/help/teams/confirm-remove-members-bulk.png)

### Further reading

- "[Removing organization members from a team](/articles/removing-organization-members-from-a-team)"
