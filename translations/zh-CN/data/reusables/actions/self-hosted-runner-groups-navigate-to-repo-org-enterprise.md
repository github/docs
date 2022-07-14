{% ifversion fpt %}
1. 导航到自托管运行器组所在的存储库或组织的主页。
2. 单击 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**。
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
{% elsif ghec or ghes or ghae %}
1. 导航到自托管运行器组所在的位置：
   * **在组织中**，导航到主页并单击 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**。
   * **如果使用企业级组**：

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. 导航到"运行器组"设置：
   * **在组织中**：

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **如果使用企业级组**：

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %}
{% endif %}
