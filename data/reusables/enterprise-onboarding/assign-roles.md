Enterprise owners can assign custom and predefined **enterprise roles** to users and teams. Some roles can be assigned to enterprise teams, whereas other roles are only available for individual users. Find the section below for the role you want to assign.

For more information about using roles effectively, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).

## Assigning app managers, security managers, and custom roles

>[!NOTE] These roles are in public preview and subject to change.

These roles can be assigned to existing users and teams in your enterprise settings, including {% ifversion ghes %}users whose accounts were provisioned with SCIM{% else %}{% data variables.enterprise.prodname_managed_users %}{% endif %}.

Before you assign a role, you may need to create a team. Teams are the best way to manage role assignments at scale. The enterprise security manager role can **only** be assigned to a team, not to individual users. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. In the left sidebar, click **{% octicon "globe" aria-hidden="true" aria-label="globe" %} Enterprise roles**, then click **Role assignments**.
1. Click **Assign role**.
1. Choose the user or team and the role they should receive, then click **Assign role**.

## Assigning enterprise owners{% ifversion not ghes %}, billing managers, and guest collaborators{% endif %}

{% ifversion ghes %}This role{% else %}These roles{% endif %}:

* Can be chosen when you invite a user to your enterprise or provision a user from your identity provider (IdP)
* Cannot currently be assigned to enterprise teams
* Can be changed for existing users

### Assigning to new users

* If you {% ifversion ghes %}have enabled SCIM provisioning{% else %}use **{% data variables.product.prodname_emus %}**{% endif %}, roles are assigned from your IdP via the SCIM `roles` attribute.
* Otherwise, you can invite someone as {% ifversion ghes %}an enterprise owner. See {% else %}a user or administrator. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly) or {% endif %}[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

### Assigning to existing administrators

You can change an administrator's role or convert them to a regular member once they have joined your enterprise.

* If you {% ifversion ghes %}provisioned the user via SCIM{% else %}use **{% data variables.product.prodname_emus %}**{% endif %}, you must do this from your IdP via the SCIM `roles` attribute.
* {% ifversion ghes %}For all other accounts{% else %}If you use an **enterprise with personal accounts**{% endif %}, you can change the role on your enterprise's "Administrators" page, using the **{% octicon "kebab-horizontal" aria-label="Administrator" %}** menu next to the user's name. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-enterprise-administrators).

## Assigning roles in an organization

Enterprise owners cannot assign organization-level roles from the enterprise settings. An organization administrator must do this. See [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).
