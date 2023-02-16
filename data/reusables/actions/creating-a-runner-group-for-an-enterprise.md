{% comment %} 

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. For information about how to create a runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/actions#self-hosted-runner-groups).

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can assign the runner to a specific group during the registration process, or you can later move the runner from the default group to a custom group.

When creating a group, you must choose a policy that defines which organizations have access to the runner group.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, select the **Organization access** drop-down, and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.{% ifversion ghes %} By default, only private repositories can access runners in a runner group, but you can override this.{% endif %}

   {%- ifversion ghec or ghes %}

   ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Click **Save group** to create the group and apply the policy.

