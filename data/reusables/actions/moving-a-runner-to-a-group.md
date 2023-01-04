If you don't specify a runner group during the registration process, your new runners are automatically assigned to the default group, and can then be moved to another group.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. In the "Runners" list, click the runner that you want to configure.
2. Select the **Runner group** drop-down.
3. In "Move runner to group", choose a destination group for the runner.
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. In the {% ifversion ghes or ghae %}"Runner groups"{% endif %} section of the settings page, locate the current group of the runner you want to move and expand the list of group members.
    ![View runner group members](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Select the checkbox next to the self-hosted runner, and then click **Move to group** to see the available destinations.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. To move the runner, click on the destination group.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}
