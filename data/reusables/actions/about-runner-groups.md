To control access to runners at the organization{% ifversion ghec or ghes %} and/or enterprise levels, enterprise and organization owners can use runner groups.{% else %} level, organizations using the {% data variables.product.prodname_team %} plan can use runner groups.{% endif %} Runner groups are used to collect sets of runners and create a security boundary around them.

When you grant access to a runner group, you can see the runner group listed in the organization's runner settings. Optionally, you can assign additional granular repository{% ifversion restrict-groups-to-workflows %} and workflow{% endif %} access policies to the runner group.

When new runners are created, they are automatically assigned to the default group unless otherwise specified. Runners can only be in one group at a time. You can move runners from one runner group to another. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

{% ifversion target-runner-groups %}
For information on how to route jobs to runners in a specific group, see "[AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group)."
{% endif %}
