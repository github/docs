1. Navigate to where your self-hosted runner groups are located:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion fpt or ghec %}**如果使用企业帐户**：通过访问 `https://github.com/enterprises/ENTERPRISE-NAME`（将 `ENTERPRISE-NAME` 替换为您的企业帐户名称）导航到您的企业帐户。{% elsif ghes or ghae %}**如果使用企业级运行器**：

     1. 在任何页面的右上角，单击 {% octicon "rocket" aria-label="The rocket ship" %}。
     1. 在左边栏中，单击 **Enterprise overview（企业概览）**。
     1. {% endif %} 在企业边栏中，单击 {% octicon "law" aria-label="The law icon" %} **Policies（政策）**。
1. Navigate to the "Runner groups" settings:
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec %}, then click **Runner groups** below it{% endif %}.
   * {% ifversion fpt or ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion fpt or ghec %}, then click the **Runners groups** tab{% endif %}.
