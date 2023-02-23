{% comment %} 

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

All organizations have a single default runner group. Organizations within an enterprise account can create additional groups. Organization admins can allow individual repositories access to a runner group. For information about how to create a runner group with the REST API, see "[AUTOTITLE](/rest/actions#self-hosted-runner-groups)."

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can move a runner from the default group to any group you create.

When creating a group, you must choose a policy that defines which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% ifversion ghec or ghes or ghae %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
 {% data reusables.actions.runner-group-assign-policy-repo %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.create-runner-group %}
{% elsif ghae < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Under {% ifversion ghes or ghae %}"Runners"{% endif %}, click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Enter a name for your runner group, and assign a policy for repository access.

   You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% endif %}
   
   ![Add runner group options](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Click **Save group** to create the group and apply the policy.
{% endif %}
