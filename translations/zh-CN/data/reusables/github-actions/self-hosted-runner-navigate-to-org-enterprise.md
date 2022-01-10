{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. 在左侧边栏中，单击 **Actions（操作）**。
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. 导航到自托管运行器注册的位置：
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion ghec %}**If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}**If using an enterprise-level runner**:

     1. 在任何页面的右上角，单击 {% octicon "rocket" aria-label="The rocket ship" %}。
     1. 在左边栏中，单击 **Enterprise overview（企业概览）**。
     1. In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
1. 导航到 {% data variables.product.prodname_actions %} 设置：
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec or ghes > 3.1 or ghae %}, then click **Runners**{% endif %}.
   * {% ifversion ghec %}**如果使用企业帐户**{% elsif ghes or ghae %}**如果使用企业级运行器**{% endif %}：在“{% octicon "law" aria-label="The law icon" %} Policies（政策）”下单击 **Actions（操作）**{% ifversion fpt or ghec or ghes > 3.1 or ghae %}，然后单击 **Runners（运行器）**选项卡{% endif %}。
{% endif %}
