---
title: Managing the forking policy for your organization
intro: 'You can allow or prevent the forking of any private{% ifversion ghes or ghae or ghec %} and internal{% endif %} repositories owned by your organization.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
---

By default, new organizations are configured to disallow the forking of private{% ifversion ghes or ghec or ghae %} and internal{% endif %} repositories.

If you allow forking of private{% ifversion ghes or ghec or ghae %} and internal{% endif %} repositories at the organization level, you can also configure the ability to fork a specific private{% ifversion ghes or ghec or ghae %} or internal{% endif %} repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)."

{% ifversion org-owners-limit-forks-creation %}
{% ifversion ghec %}If your organization is owned by an enterprise account, you{% else %}You{% endif %} may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. Under "Repository forking", select **Allow forking of private {% ifversion ghec or ghes or ghae %}and internal {% endif %}repositories**.
{%- ifversion org-owners-limit-forks-creation %}
1. Optionally, if your organization is owned by an enterprise account, select a policy for where users are allowed to fork repositories.

   If repository forking policy is configured at the enterprise level, you won't be able to select a more permissive policy in your organization settings.
{%- endif %}
1. Click **Save**.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
