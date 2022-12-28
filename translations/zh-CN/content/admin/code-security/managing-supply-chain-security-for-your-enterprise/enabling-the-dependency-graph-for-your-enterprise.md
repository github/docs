---
title: 为企业启用依赖项关系图
intro: 通过启用依赖项关系图，用户可识别其项目的依赖项。
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 39fb5e8eb74518dc4614d5494ec04427b5e12399
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135677'
---
## 关于依赖关系图

{% data reusables.dependabot.about-the-dependency-graph %} 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

为企业启用依赖项关系图后，可以启用 {% data variables.product.prodname_dependabot %} 来检测存储库中不安全的依赖项{% ifversion ghes %}并自动修复漏洞{% endif %}。 有关详细信息，请参阅“[对企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。

{% ifversion ghes %} 你可以通过 {% data variables.enterprise.management_console %} 或管理 shell 启用依赖项关系图。 建议使用 {% data variables.enterprise.management_console %}，除非 {% data variables.location.product_location %} 使用聚类分析。

## 通过 {% data variables.enterprise.management_console %} 启用依赖关系图

如果 {% data variables.location.product_location %} 使用聚类分析，则无法使用 {% data variables.enterprise.management_console %} 启用依赖项关系图，而必须使用管理 shell。 有关详细信息，请参阅“[通过管理 shell 启用依赖项关系图](#enabling-the-dependency-graph-via-the-administrative-shell)”。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“安全性”下，单击“依赖项关系图”。
![用于启用或禁用依赖项关系图的复选框](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. 单击“访问实例”。

## 通过管理 shell 启用依赖关系图

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. 在管理 shell 中，启用 {% data variables.location.product_location %} 上的依赖项关系图：{% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. 返回到 {% data variables.product.prodname_ghe_server %}。
