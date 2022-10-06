---
title: 关于在企业中使用操作
intro: '{% data variables.product.product_name %} 包含了大多数 {% data variables.product.prodname_dotcom %} 编写的操作，并且有选项允许访问来自 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.prodname_marketplace %} 的其他操作。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: 2e18b932548aa7ad9b65c090b6a5418762bcb501
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139006'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.product_name %} 中的操作

{% data variables.product.prodname_actions %} 工作流可使用操作，它们是一些单独的任务，可以组合这些操作以创建作业并自定义工作流。 您可以创建自己的操作，或者使用和自定义 {% data variables.product.prodname_dotcom %} 社区分享的操作。

{% data reusables.actions.enterprise-no-internet-actions %} 您可以限制开发人员使用存储在 {% data variables.product.product_location %} 上的操作，其中包括大多数官方 {% data variables.product.company_short %} 创作的操作，以及开发人员创建的任何操作。 或者，为了让您的开发人员从行业领导者和开源社区构建的完整操作生态系统中受益，您可以配置对 {% data variables.product.prodname_dotcom_the_website %} 的其他操作的访问。 

我们建议允许自动访问 {% data variables.product.prodname_dotcom_the_website %} 的所有操作。 {% ifversion ghes %}但是，这需要 {% data variables.product.product_name %} {% data variables.product.prodname_dotcom_the_website %} 建立出站连接。 如果您不想允许这些连接，或者{% else %}如果{% endif %} 您希望更好地控制在企业中使用哪些操作，则可以手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的特定操作。

## 与您的企业实例捆绑的正式操作

{% data reusables.actions.actions-bundled-with-ghes %}

捆绑的官方操作包括以下内容等。
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- 各种 `actions/setup-` 操作

若要查看企业实例中包含的所有官方操作，请浏览到实例上的 `actions` 组织：<code>https://<em>HOSTNAME</em>/actions</code>。

{% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %} 之间不需要连接即可使用这些操作。

每个操作都是 `actions` 组织中的存储库，每个操作存储库都包含工作流可以用于引用操作的必要标记、分支和提交 SHA。 有关如何更新捆绑官方操作的信息，请参阅“[使用最新版本的官方捆绑操作](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)。”

{% note %}

**注意：** 
- 在包含自托管运行器的 {% data variables.product.product_name %} 上使用设置操作（例如 `actions/setup-LANGUAGE`）时，可能需要在无法访问 Internet 的运行器上设置工具缓存。 有关详细信息，请参阅“[在无法访问 Internet 的自托管运行器上设置工具缓存](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)。”
- 当 {% data variables.product.product_name %} 更新时，捆绑的操作会自动替换为升级包中的默认版本。

{% endnote %}

## 配置对 {% data variables.product.prodname_dotcom_the_website %} 上操作的访问权限

{% data reusables.actions.access-actions-on-dotcom %}

推荐的方法是启用自动访问来自 {% data variables.product.prodname_dotcom_the_website %} 的所有操作。 通过使用 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.product_name %} 与 {% data variables.product.prodname_ghe_cloud %} 集成可实现这一点。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。 

{% ifversion ghes %} {% note %}

注意：在配置对 {% data variables.product.prodname_dotcom_the_website %} 的操作的访问之前，必须配置 {% data variables.product.product_location %} 以使用 {% data variables.product.prodname_actions %}。 有关详细信息，请参阅“[适用于 GitHub Enterprise Server 的 {% data variables.product.prodname_actions %} 的使用入门](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)。”


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

或者，如果希望在企业中更严格地控制允许的操作，或者不希望允许与 {% data variables.product.prodname_dotcom_the_website %} 的出站连接，可以使用 `actions-sync` 工具手动将操作下载并同步到企业实例上。 有关详细信息，请参阅“[从 {% data variables.product.prodname_dotcom_the_website %} 手动同步操作](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)。”
