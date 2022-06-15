{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. 导航到自托管运行器注册的位置：
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * **如果使用企业级运行器**：

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. 导航到 {% data variables.product.prodname_actions %} 设置：
   * **In an organization**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **如果使用企业级运行器**：

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
{% endif %}
