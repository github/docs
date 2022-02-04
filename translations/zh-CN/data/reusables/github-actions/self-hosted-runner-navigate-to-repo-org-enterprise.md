{% ifversion fpt %}
1. Navigate to the main page of the organization or repository where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. 在左侧边栏中，单击 **Actions（操作）**。
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. 导航到自托管运行器注册的位置：
   * **在组织或仓库中**，导航到主页并单击 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**。 {% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}
   * **如果使用企业级运行器**：
     1. 在任何页面的右上角，单击 {% octicon "rocket" aria-label="The rocket ship" %}。
     2. 在左边栏中，单击 **Enterprise overview（企业概览）**。
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. 导航到 {% data variables.product.prodname_actions %} 设置：
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, then click **Runners**{% endif %}.{% ifversion ghec or ghae or ghes %}
   * {% ifversion ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion ghes > 3.1 or ghae or ghec %}, then click the **Runners** tab{% endif %}.{% endif %}
{% endif %}
