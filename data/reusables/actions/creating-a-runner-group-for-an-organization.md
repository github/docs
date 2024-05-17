{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

{% note %}

**Note:** When creating a runner group, you must choose a policy that defines which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group. To change which repositories and workflows can access the runner group, organization owners{% ifversion custom-org-roles %} and users with the “Manage organization runners and runner groups” permission{% endif %} can set a policy for the organization. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#disabling-repository-level-self-hosted-runners)."

{% endnote %}

All organizations have a single default runner group. {% ifversion fpt %}Organization owners using the {% data variables.product.prodname_team %} plan{% else %}Organization owners{% ifversion custom-org-roles %} and users with the "Manage organization runners and runner groups" permission{% endif %}{% endif %} can create additional organization-level runner groups. {% ifversion custom-org-roles %}For more information about custom organization roles, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."{% endif %}

If no group is specified during the registration process, runners are automatically added to the default group. You can later move the runner from the default group to a custom group. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

For information about how to create a runner group with the REST API, see "[AUTOTITLE](/rest/actions#self-hosted-runner-groups)."

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
{% data reusables.actions.runner-group-assign-policy-repo %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.create-runner-group %}
