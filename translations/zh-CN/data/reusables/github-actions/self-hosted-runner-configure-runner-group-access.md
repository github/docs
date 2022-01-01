1. 在设置页面的 {% ifversion fpt or ghes > 3.1 or ghae or ghec %}“运行器”{% else %}“自托管运行器）”{% endif %} 部分，单击要配置的运行器组旁边的 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Edit name and [organization|repository] access（编辑名称和[组织|仓库] 权限）**。 ![管理仓库权限](/assets/images/help/settings/actions-runner-manage-permissions.png)
1. 修改策略选项，或更改运行器组名称。

   {% ifversion not ghae %}
   {% warning %}

   **警告**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

   {% endwarning %}
   {% endif %}
