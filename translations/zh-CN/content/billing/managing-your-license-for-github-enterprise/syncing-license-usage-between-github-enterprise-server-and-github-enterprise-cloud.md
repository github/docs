---
title: 在 GitHub Enterprise Server 和 GitHub Enterprise Cloud 之间同步许可证使用情况
intro: '您可以将许可证使用情况从 {% data variables.product.prodname_ghe_server %} 同步到 {% data variables.product.prodname_ghe_cloud %} ，以便在一个位置查看整个企业的所有许可证使用情况，并确保在两个环境中拥有帐户的人员仅使用一个用户许可证。'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572590'
---
## 关于同步许可证使用情况

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

为确保在 {% data variables.product.prodname_dotcom_the_website %} 上看到最新的许可证详细信息，可以使用 {% data variables.product.prodname_github_connect %} 在环境之间自动同步许可证使用情况。 有关 {% data variables.product.prodname_github_connect %} 的详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的“[关于 {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %}”。{% elsif ghes %}。{% endif %}

如果不想启用 {% data variables.product.prodname_github_connect %}，可以通过将文件从 {% data variables.product.prodname_ghe_server %} 上传到 {% data variables.product.prodname_dotcom_the_website %} 来手动同步许可证使用情况。

同步许可证使用情况时，只有 {% data variables.product.prodname_ghe_server %} 上每个用户帐户的用户 ID 和电子邮件地址才会传输到 {% data variables.product.prodname_ghe_cloud %}。

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## 自动同步许可证使用情况

可以使用 {% data variables.product.prodname_github_connect %} 在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间每周自动同步用户许可证计数和使用情况。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的“[为企业启用自动用户许可证同步]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %}”。{% elsif ghes %}。{% endif %}

{% ifversion ghec or ghes > 3.4 %} 启用 {% data variables.product.prodname_github_connect %} 后，许可证数据将每周自动同步。 还可以通过触发许可证同步作业来随时手动同步许可证数据。

### 触发许可证同步作业

1. 登录到 {% data variables.product.prodname_ghe_server %} 实例。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 在“许可证同步”下，单击 {% octicon "sync" aria-label="The Sync icon" %}“同步”。
  ![许可证同步部分中“立即同步”按钮的屏幕截图](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## 手动上传 GitHub Enterprise 服务器许可证使用情况

您可以从 {% data variables.product.prodname_ghe_server %} 下载 JSON 文件并将文件上传到 {% data variables.product.prodname_ghe_cloud %}，在两个部署之间手动同步用户许可使用情况。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. 在“快速链接”下，要下载包含 {% data variables.product.prodname_ghe_server %} 上当前许可使用情况的文件，请单击“导出许可使用情况”。
  ![导出许可证使用情况链接](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. 在“Enterprise Server 实例”下，单击“添加服务器使用情况”。
  ![上传 GitHub Enterprise Server 使用情况链接](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. 上传从 {% data variables.product.prodname_ghe_server %} 下载的 JSON 文件。
  ![拖放或选择要上传的文件](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
