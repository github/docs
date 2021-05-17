---
title: 管理 GitHub Enterprise 许可
intro: '您可以查看、管理和更新 {% data variables.product.prodname_enterprise %} 许可。'
redirect_from:
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 关于 {% data variables.product.prodname_enterprise %} 许可

购买或续订 {% data variables.product.prodname_enterprise %} 时，您会收到用于验证应用程序的许可文件。 许可文件有到期日期，而且可以控制您添加至 {% data variables.product.prodname_enterprise %} 的用户许可数量。 下载并安装 {% data variables.product.prodname_enterprise %} 后，上传许可文件会解锁应用程序供您使用。 有关下载 {% data variables.product.prodname_enterprise %} 的更多信息，请参阅 [{% data variables.product.prodname_enterprise %} 发布](https://enterprise.github.com/releases/)网站。 有关设置 {% data variables.product.product_location %} 的信息，请参阅“[设置 {% data variables.product.prodname_enterprise %} 实例](/admin/installation/setting-up-a-github-enterprise-server-instance)”。


您可以将 {% data variables.product.prodname_enterprise %} 许可中包含的用户许可分配给 {% data variables.product.product_location_enterprise %} 和 {% data variables.product.prodname_ghe_cloud %} 企业帐户中的用户。 将用户添加到任一环境时，他们都会占用一个许可。 如果用户在两种环境中都有帐户，要想仅使用一个许可，其主 {% data variables.product.prodname_enterprise %} 电子邮件地址必须与经过验证的 {% data variables.product.prodname_ghe_cloud %} 电子邮件地址相同。 您可以在两种环境之间同步许可数和使用情况。

如果您的 {% data variables.product.prodname_ghe_server %} 许可到期，您将无法通过 Web 浏览器或 Git 访问 {% data variables.product.product_location_enterprise %}。 需要时，您可以使用命令行实用程序备份所有数据。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)”。 如对续订许可有任何疑问，请联系 {% data variables.contact.contact_enterprise_sales %}。

您可以从[企业帐户](https://enterprise.github.com/download)下载您的 {% data variables.product.prodname_ghe_server %} 许可证。 更多信息请参阅"[管理您的 {% data variables.product.prodname_enterprise %} 许可](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)"。

### 将新许可上传到 {% data variables.product.prodname_ghe_server %}


从 {% data variables.contact.contact_enterprise_sales %} 购买新许可或更新现有许可后，必须下载新许可文件，然后将此文件上传至 {% data variables.product.prodname_ghe_server %}，以解锁新的用户许可。

如果您想续订用户许可或将其添加至 {% data variables.product.prodname_enterprise %}，请联系 {% data variables.contact.contact_enterprise_sales %}。 完成订单后，您可以立即下载新的许可文件。

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 在左侧边栏中，单击 **Enterprise licensing（企业许可）**。 ![企业帐户设置侧边栏中的"Enterprise licensing（企业许可）"选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. 在“Enterprise Server Instances（企业服务器实例）”下，单击 {% octicon "download" aria-label="The download icon" %} 下载您的许可文件。 ![下载 GitHub Enterprise Server 许可](/assets/images/help/business-accounts/download-ghes-license.png)
5. 作为站点管理员登录到
您的 {% data variables.product.prodname_ghe_server %} 实例。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
12. 在“Quick links”下，单击 **Update license**。 ![更新许可链接](/assets/images/enterprise/business-accounts/update-license-link.png)
13. 要选择许可，请单击 **License file（许可文件）**，或将许可文件拖到 **License file（许可文件）**上。 ![上传许可文件](/assets/images/enterprise/management-console/upload-license.png)
14. 单击 **Upload（上传）**。 ![开始上传](/assets/images/enterprise/management-console/begin-upload.png)

{% if enterpriseVersion ver_lt "enterprise-server@3.0" %}如果 {% data variables.product.prodname_ghe_server %} 的 web UI 没有立即反映您更新的许可，请参阅“[故障排除](#troubleshooting)”。{% endif %}

### 查看许可使用情况

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 在左侧边栏中，单击 **Enterprise licensing（企业许可）**。 ![企业帐户设置侧边栏中的"Enterprise licensing（企业许可）"选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. 检查您当前的 {% data variables.product.prodname_enterprise %} 许可，以及已使用和可用的用户许可。

### 自动将用户许可使用情况同步到 {% data variables.product.prodname_ghe_cloud %}

您可以使用 {% data variables.product.prodname_github_connect %} 在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间自动同步用户许可数量和使用情况。 更多信息请参阅“[在 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间启用自动用户许可同步](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)”。

### 手动同步 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间的用户许可使用情况。

您可以从 {% data variables.product.prodname_ghe_server %} 下载 JSON 文件并将文件上传到 {% data variables.product.prodname_ghe_cloud %}，在两个部署之间手动同步用户许可使用情况。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. 在“Quick links（快速链接）”下，下载包含
{% data variables.product.prodname_ghe_server %} 上当前许可证使用情况的文件，单击 **Export license usage（导出许可证使用情况）**。
  ![Export license usage 链接](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. 在左侧边栏中，单击 **Enterprise licensing（企业许可）**。 ![企业帐户设置侧边栏中的"Enterprise licensing（企业许可）"选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. 在“Enterprise Server Instances（Enterprise Server 实例）”下，单击 **Add server usage（添加服务器使用情况）**。 ![Upload GitHub Enterprise Servers usage 链接](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. 上传从 {% data variables.product.prodname_ghe_server %} 下载的 JSON 文件。 ![拖放或选择要上传的文件](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)

{% if currentVersion ver_lt "enterprise-server@3.0" %}

### 疑难解答

在某些情况下， {% data variables.product.prodname_ghe_server %} 的 Web UI 可能不会立即反映您的新许可。 您可以通过重新启动两个系统服务来强制系统检测许可。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 重新启动 Git 身份验证和 HTTP 服务器的服务。

    {% warning %}

    **警告**：运行以下命令将导致用户面临几分钟的 {% data variables.product.prodname_ghe_server %} 停机时间。 请谨慎运行命令。

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. {% data variables.product.prodname_ghe_server %} 返回提示后，请再次尝试通过命令行或 Web UI 访问 {% data variables.product.prodname_ghe_server %} 。

{% endif %}
