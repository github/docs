>[!NOTE] The ability for enterprise owners to create custom roles for an organization or enterprise is in public preview and subject to change.

To tailor access management to your company's needs, you can create custom roles for your{% ifversion enterprise-custom-roles %} enterprise account and{% endif %} organizations.

Custom roles are sets of permissions for settings and resources that you can assign to users and teams.{% ifversion enterprise-custom-roles %} To learn best practices for using roles on {% data variables.product.github %}, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements).{% endif %}

{% ifversion enterprise-custom-roles %}

## Creating enterprise custom roles

Enterprise custom roles grant access to a subset of enterprise settings, such as viewing audit logs and creating organizations. {% data variables.product.github %} plans to expand the list of available permissions over time.

{% data reusables.enterprise-accounts.start-creating-custom-role %}
1. Enter the details, then click **Create role**.

{% endif %}

## Creating organization custom roles

Organization custom roles grant access to organization settings and repositories. Custom organization roles created at the enterprise level use the same permissions and base roles as roles created at the organization level. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

Enterprise owners can create and edit custom organization roles, but cannot assign them. Organization owners can assign custom roles in an organization.

>[!NOTE] An enterprise can create up to 20 custom organization roles. This limit applies to the enterprise: each organization can also create up to 20 custom organization roles.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. In the left sidebar, select **Organization roles**.
1. Click **Create custom role**.
1. Enter the details, then click **Create role**.
