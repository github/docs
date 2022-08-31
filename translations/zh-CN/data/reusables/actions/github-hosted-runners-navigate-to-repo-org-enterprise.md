{% ifversion fpt %}
1. 导航到组织或存储库的主页。
1. 单击 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**。
1. 在左侧边栏中，单击 **Actions**，然后单击 **Runners（运行器）**。
{% elsif ghec %}
1. 导航到您的运行器设置：
   * **在组织或仓库中**，导航到主页并单击 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**。
   * **如果使用企业帐户**：单击 {% data variables.product.prodname_dotcom_the_website %} 右上角的头像，然后单击 **Your enterprises（您的企业）**，再单击企业，导航到您的企业帐户。
1. 导航到 {% data variables.product.prodname_actions %} 设置：
   * **在组织或存储库中**：单击左侧边栏中的 **Actions** ，然后单击 **Runners（运行器）**。
   * **如果使用企业帐户**：在左侧边栏中，单击**“{% octicon "law" aria-label="The law icon" %} 策略”**，然后单击 **Actions**，然后单击 **Runners（运行器）**选项卡。
{% endif %}
