If you don't specify a runner group during the registration process, your new runners are automatically assigned to the default group, and can then be moved to another group.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. In the "Runners" list, click the runner that you want to configure.
2. Select the **Runner group** drop-down.
3. In "Move runner to group", choose a destination group for the runner.
{% elsif ghae or ghes < 3.4 %}
1. In the {% ifversion ghes or ghae %}"Runner groups"{% endif %} section of the settings page, locate the current group of the runner you want to move and expand the list of group members. ![ランナーグループのメンバーを表示](/assets/images/help/settings/actions-org-runner-group-members.png)
2. セルフホストランナーの横にあるチェックボックスを選択し、[**Move to group**] をクリックして、利用可能な移動先を確認します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 移動先のグループをクリックして、ランナーを移動します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}