{% ifversion fpt %}
{% data reusables.actions.runner-groups-ent-note %}

Runner groups are used to control access to runners. Organization admins can configure access policies that control which repositories in an organization have access to the runner group.

If you use {% data variables.product.prodname_ghe_cloud %}, you can create additional runner groups; enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group; and organization admins can assign additional granular repository access policies to the enterprise runner group. 
{% endif -%}
{% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

When new runners are created, they are automatically assigned to the default group. Runners can only be in one group at a time. You can move runners from the default group to another group. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

{% endif %}
