If you don't specify a runner group during the registration process, your new runners are automatically assigned to the default group, and can then be moved to another group.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. 在“Runners（运行器）”列表中，单击您要配置的运行器。
2. 选择 **Runner group（运行器组）**下拉列表。
3. 在“Move runner to group（将运行器移动到组）”中，选择运行器的目的地组。
{% elsif ghae or ghes < 3.4 %}
1. 在设置页面的 {% ifversion ghes or ghae %} Runner groups（运行器组）{% endif %} 部分，找到要移动的运行器的当前组，并展开组成员列表。 ![查看运行器组成员](/assets/images/help/settings/actions-org-runner-group-members.png)
2. 选中自托管运行器旁边的复选框，然后单击 **Move to group（移动到组）**以查看可用的目的地。 ![运行器组成员移动](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 要移动运行器，请单击目标组。 ![运行器组成员移动](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}