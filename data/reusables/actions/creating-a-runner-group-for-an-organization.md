{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

All organizations have a single default runner group. {% ifversion fpt %}Organizations using the {% data variables.product.prodname_team %} plan{% else %}Organizations within an enterprise account{% endif %} can create additional groups. Organization admins can allow individual repositories access to a runner group. For information about how to create a runner group with the REST API, see "[AUTOTITLE](/rest/actions#self-hosted-runner-groups)."

If no group is specified during the registration process, runners are automatically added to a default group. You can later move the runner from the default group to a custom group. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

When creating a group, you must choose a policy that defines which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
{% data reusables.actions.runner-group-assign-policy-repo %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.create-runner-group %}
