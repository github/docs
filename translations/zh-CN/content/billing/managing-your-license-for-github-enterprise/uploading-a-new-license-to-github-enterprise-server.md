---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.product.product_location_enterprise %} to validate your application.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must upload the new license file to {% data variables.product.product_location_enterprise %} to unlock your new user licenses. For more information about licenses for {% data variables.product.product_name %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" and "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license to {% data variables.product.product_location_enterprise %}

1. 以站点管理员的身份登录 {% data variables.product.product_location_enterprise %} 。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. 在“Quick links”下，单击 **Update license**。 ![更新许可链接](/assets/images/enterprise/business-accounts/update-license-link.png)
1. 要选择许可，请单击 **License file（许可文件）**，或将许可文件拖到 **License file（许可文件）**上。 ![上传许可文件](/assets/images/enterprise/management-console/upload-license.png)
1. 单击 **Upload（上传）**。 ![开始上传](/assets/images/enterprise/management-console/begin-upload.png)

{% ifversion ghes < 3.0 %}

If the web UI for {% data variables.product.prodname_ghe_server %} doesn't reflect your updated license immediately, see "[Troubleshooting](#troubleshooting)."

## 疑难解答

在某些情况下， {% data variables.product.prodname_ghe_server %} 的 Web UI 可能不会立即反映您的新许可。 您可以通过重新启动两个系统服务来强制系统检测许可。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 重新启动 Git 身份验证和 HTTP 服务器的服务。

    {% warning %}

    **警告**：运行以下命令将导致用户面临几分钟的 {% data variables.product.prodname_ghe_server %} 停机时间。 请谨慎运行命令。

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. {% data variables.product.prodname_ghe_server %} 返回提示后，请再次尝试通过命令行或 Web UI 访问 {% data variables.product.prodname_ghe_server %} 。

{% endif %}
