Roles and permissions are additive. If a person is given different levels of access through different avenues, such as team membership and the base permissions for an organization, the user has the sum of all access grants. For example, if an organization owner gives an organization member a custom role that uses the "Read" inherited role, and then an organization owner sets the organization's base permission to "Write", then members with the custom role will have write access, along with any additional permissions included in the custom role.

{% data reusables.organizations.mixed-roles-warning %}

To resolve conflicting access, you can adjust your organization's base permissions or the team's access, or edit the custom role. For more information, see:
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"
* "[Editing a repository role](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization#editing-a-repository-role)"{% ifversion custom-org-roles %}
* "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles#editing-a-custom-role)"{% endif %}
