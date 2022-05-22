1. 导航到自托管运行器注册的位置：
   * **在组织或仓库中**，导航到主页并单击 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**。
   * {% if currentVersion == "free-pro-team@latest" %}**如果使用企业帐户**：通过访问 `https://github.com/enterprises/ENTERPRISE-NAME`（将 `ENTERPRISE-NAME` 替换为您的企业帐户名称）导航到您的企业帐户。{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**如果使用企业级运行器**：

     1. 在任何页面的右上角，单击 {% octicon "rocket" aria-label="The rocket ship" %}。
     1. 在左边栏中，单击 **Enterprise overview（企业概览）**。
     1. {% endif %} 在企业边栏中，单击 {% octicon "law" aria-label="The law icon" %} **Policies（政策）**。
1. 导航到 {% data variables.product.prodname_actions %} 设置：
   * **在组织或仓库中**：单击左边栏中的 **Actions（操作）**。

     ![操作设置](/assets/images/help/settings/settings-sidebar-actions.png)
   * {% if currentVersion == "free-pro-team@latest" %}**如果使用企业帐户**{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**如果使用企业级运行器**{% endif %}：在“{% octicon "law" aria-label="The law icon" %} Policies（政策）”下单击 **Actions（操作）**。
