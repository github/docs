---
title: 使用 GitHub Connect 启用对 GitHub.com 操作的自动访问
intro: '要允许企业中的 {% data variables.product.prodname_actions %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作，您可以将企业实例连接到 {% data variables.product.prodname_ghe_cloud %}。'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: 85942d047f8bce5c2f58e8f92148b5fb85f5d871
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099990'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作

默认情况下，{% data variables.product.product_name %} 上的 {% data variables.product.prodname_actions %} 工作流不能直接使用 {% data variables.product.prodname_dotcom_the_website %} 或 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 中的操作。 若要使 {% data variables.product.prodname_dotcom_the_website %} 中的所有操作在企业实例上可用，可以使用 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.product_name %} 与 {% data variables.product.prodname_ghe_cloud %} 集成。 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

或者，如果想要更严格地控制企业中允许哪些操作，则可以使用 `actions-sync` 工具手动下载操作并将其同步到企业实例中。 有关详细信息，请参阅“[从 {% data variables.product.prodname_dotcom_the_website %} 手动同步操作](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)”。

## 关于使用 {% data variables.product.prodname_github_connect %} 的操作的解决方案

{% data reusables.actions.github-connect-resolution %}

如果用户在企业中创建的组织和仓库与 {% data variables.product.prodname_dotcom_the_website %} 上的组织和仓库名称匹配，则将使用企业上的仓库代替 {% data variables.product.prodname_dotcom_the_website %} 仓库。 {% ifversion ghes < 3.3 or ghae %}恶意用户可以利用此行为将代码作为工作流的一部分运行{% else %}有关详细信息，请参阅“[自动停用在 {% data variables.product.prodname_dotcom_the_website%} 上访问的操作的命名空间](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)”。
{% endif %}

## 启用对所有 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问

在为企业启用对 {% data variables.product.prodname_dotcom_the_website %} 的所有操作的访问权限之前，必须{% ifversion ghes %}：
- 配置 {% data variables.product.product_location %} 使用 {% data variables.product.prodname_actions %}。 有关详细信息，请参阅“[适用于 GitHub Enterprise Server 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”。
- 启用{% else %} 启用{% endif %} {% data variables.product.prodname_github_connect %}。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“用户在工作流运行中可以使用 GitHub.com 上的操作”下，使用下拉菜单选择“已启用”。
  ![工作流运行中用于访问 GitHub.com 上操作的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

{% ifversion ghes > 3.2 or ghae %}

## 自动停用在 {% data variables.product.prodname_dotcom_the_website %} 上访问的操作的命名空间

启用 {% data variables.product.prodname_github_connect %} 时，用户不会看到现有工作流程行为的变化，因为 {% data variables.product.prodname_actions %} 在回退到 {% data variables.product.prodname_dotcom_the_website%} 之前会搜索 {% data variables.product.product_location %} 上的每个操作。 这可确保企业创建的任何自定义版本的操作优先于 {% data variables.product.prodname_dotcom_the_website%} 上的对应版本。

自动停用在 {% data variables.product.prodname_dotcom_the_website %} 上访问的操作的命名空间，可阻止具有 {% data variables.product.product_location %} 访问权限的恶意用户进行中间人攻击的可能性。 首次使用对 {% data variables.product.prodname_dotcom_the_website %} 执行的操作时，该命名空间将在 {% data variables.product.product_location %} 中停用。 这将阻止任何用户在企业中创建与 {% data variables.product.prodname_dotcom_the_website %} 上的组织和存储库名称匹配的组织和存储库。 这可确保在工作流程运行时始终运行预期的操作。

使用 {% data variables.product.prodname_dotcom_the_website %} 中的操作后，如果要在 {% data variables.product.product_location %} 中创建具有相同名称的操作，首先需要使该组织和存储库的命名空间可用。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 在左侧边栏中的“站点管理员”下，单击“已停用的命名空间” 。
3. 找到要在 {% data variables.product.product_location %} 中使用的命名空间，然后单击“取消停用”。
   ![取消停用命名空间](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. 转到相关组织并创建新的存储库。

   {% tip %}

   **提示：** 取消停用命名空间时，请务必尽快使用该名称创建新存储库。 如果在创建本地存储库之前，工作流程在 {% data variables.product.prodname_dotcom_the_website %} 上调用关联的操作，则命名空间将再次停用。 对于频繁运行的工作流程中使用的操作，您可能会发现命名空间在您有时间创建本地存储库之前再次停用。 在这种情况下，您可以暂时禁用相关工作流程，直到创建新存储库。

   {% endtip %}

{% endif %}
