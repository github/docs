Runners are automatically returned to the default group when their group is removed.

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. 在组列表中，在要删除的组右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
2. 要删除组，请单击 **Remove group（删除组）**。
3. 查看确认提示，然后单击 **Remove this runner group（删除此运行器组）**。 Any runners still in this group will be automatically moved to the default group, where they will inherit the access permissions assigned to that group.

{% endif %}