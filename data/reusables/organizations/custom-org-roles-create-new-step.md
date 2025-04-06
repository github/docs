1. Click **Create a role**.
1. Type a name and description for the custom role.{% ifversion org-custom-role-with-repo-permissions %}
1. Under "Add permissions", click the **Organization** or **Repository** tab to select the type of permissions you want to add to the custom role.

   * To add permissions for the organization, click the **Organization** tab, then select the dropdown menu and click the permissions you want your custom role to include.
   * To choose a base repository role to inherit, click the **Repository** tab, then select the dropdown menu and click the base role you want to include in the custom role. For more information about the available base repository roles, see "[Base roles for repository access](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#base-roles-for-repository-access)."

      Once you've selected a base repository role, you can add additional permissions to the custom role. For more information about the available permissions, see "[Additional permissions for repository access](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#additional-permissions-for-repository-access)."

      >[!NOTE] Adding a repository role and permissions to a custom organization role is currently in public beta and subject to change.

{% else %}
1. Under "Add permissions", click the text field, then select the permissions you want to add to the custom role. For more information about the available permissions, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles#additional-permissions-for-custom-roles)."{% endif %}
1. Click **Create role**.
