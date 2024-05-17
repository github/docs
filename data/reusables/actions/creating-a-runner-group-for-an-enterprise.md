{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. For information about how to create a runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/actions#self-hosted-runner-groups).

If no group is specified during the registration process, runners are automatically added to a default group. You can later move the runner from the default group to a custom group. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

When creating a group, you must choose a policy that defines which organizations have access to the runner group.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
{% data reusables.actions.workflows.runner-groups-enterprise-organization-access %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Click **Save group** to create the group and apply the policy.
