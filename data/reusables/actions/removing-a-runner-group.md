Runners are automatically returned to the default group when their group is removed.

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. To remove the group, click **Remove group**.
3. Review the confirmation prompts, and click **Remove this runner group**. Any runners still in this group will be automatically moved to the default group, where they will inherit the access permissions assigned to that group.

{% endif %}
