---
title: 配置速率限制
intro: '您可以使用 {% data variables.enterprise.management_console %} 为 {% data variables.product.prodname_ghe_server %} 配置速率限制。'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: e40c6453934c4b80157c46a08784aab850ccc837
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147066472'
---
## 为 {% data variables.product.prodname_enterprise_api %} 启用速率限制

在 {% data variables.product.prodname_enterprise_api %} 上启用速率限制可以防止个别用户或未通过身份验证的用户过度使用资源。 有关详细信息，请参阅“[REST API 中的资源](/rest/overview/resources-in-the-rest-api#rate-limiting)”。

{% ifversion ghes %} 可使用管理 shell 中的 `ghe-config` 实用工具使用户列表免受 API 速率限制。 有关详细信息，请参阅“[命令行实用工具](/enterprise/admin/configuration/command-line-utilities#ghe-config)”。
{% endif %}

{% note %}

注意：{% data variables.enterprise.management_console %} 列出了每种速率限制的时限（按分钟或按小时）。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 在“速率限制”下，选择“启用 HTTP API 速率限制”。
![用于启用 API 速率限制的复选框](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. 输入对每个 API 的已验证和未验证请求的限制，或者接受预先填入的默认限制。
{% data reusables.enterprise_management_console.save-settings %}

## 启用二级费率限制

设置二级费限制可保护 {% data variables.product.product_location %} 上的整体服务等级。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. 在“速率限制”下，选择“启用二级速率限制”。
   ![用于启用二级费率限制的复选框](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. 在“速率限制”下，选择“启用滥用速率限制”。
    ![用于启用滥用速率限制的复选框](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. 输入总请求限制、CPU 限制或对搜索的 CPU 限制，或接受预先填入的默认限制。
{% data reusables.enterprise_management_console.save-settings %}

## 启用 Git 速率限制

您可以按仓库网络或用户 ID 应用 Git 速率限制。 Git 速率限制以每分钟并行操作数表示，不过会根据当前 CPU 负荷进行调整。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 在“速率限制”下，选择“启用 Git 速率限制”。
![用于启用 Git 速率限制的复选框](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. 输入对每个仓库网络或用户 ID 的限制。
  ![存储库网络和用户 ID 限制的字段](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## 配置 {% data variables.product.prodname_actions %} 的速率限制

可以将速率限制应用于 {% data variables.product.prodname_actions %} 工作流运行。 有关 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[关于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”。

### 关于 {% data variables.product.prodname_actions %} 的速率限制

{% data variables.product.product_name %} 实例将每个 {% data variables.product.prodname_actions %} 工作流作业分配给运行器。 如果实例无法立即将作业分配给可用的运行器，作业将在队列中等待，直到运行器可用。 如果 {% data variables.product.prodname_actions %} 遇到持续高负载，则队列可以备份，并且 {% data variables.product.product_location %} 的性能可能会降级。

为了避免这种性能降低，可以配置 {% data variables.product.prodname_actions %} 的速率限制。 此速率限制以每分钟作业运行数表示。 {% data variables.product.product_name %} 计算并应用实例上所有作业运行的总数的速率限制。 如果运行数超过速率限制，其他运行将失败，而不是进入队列。 以下错误将显示在运行的注释中。

> 已超出工作流运行请求的速率限制。 请稍等，然后重试运行。

适当的速率限制可保护 {% data variables.product.product_location %} 免受 {% data variables.product.prodname_actions %} 的异常使用，而不会干扰日常运营。 确切的阈值取决于实例的可用资源和总体负载配置文件。 有关 {% data variables.product.prodname_actions %} 硬件要求的详细信息，请参阅“[{% data variables.product.product_name %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)”。

默认情况下，禁用 {% data variables.product.prodname_actions %} 的速率限制。 由于 {% data variables.product.product_name %} 可以在不降低性能的情况下处理临时使用高峰，因此此速率限制旨在防止持续高负载。 建议将此速率限制保留禁用状态，除非遇到性能问题。 在某些情况下，{% data variables.contact.github_support %} 可能会建议启用 {% data variables.product.prodname_actions %} 的速率限制。 

### 启用或禁用 {% data variables.product.prodname_actions %} 的速率限制

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 若要启用和配置速率限制，请运行以下两个命令，将 RUNS-PER-MINUTE 替换为所选值。

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute <em>RUNS-PER-MINUTE</em>
   ```
1. 若要在启用速率限制后将其禁用，请运行以下命令。

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. 若要应用配置，请运行以下命令。

   ```
   ghe-config-apply
   ```
1. 等待配置运行完毕。

{% endif %}
