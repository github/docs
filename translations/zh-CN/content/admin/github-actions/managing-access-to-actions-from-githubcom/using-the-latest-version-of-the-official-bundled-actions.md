---
title: 使用官方捆绑操作的最新版本
intro: '您可以更新与企业捆绑的操作，或直接从 {% data variables.product.prodname_dotcom_the_website %} 使用操作。'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107027'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

您的企业实例包含一些您可以在工作流程中使用的内置操作。 有关捆绑操作的详细信息，请参阅“[与你的企业实例捆绑的正式操作](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)”。

这些捆绑的操作是在 https://github.com/actions 上找到的正式操作的即时快照；因此，这些操作可能有更新的版本。 可以使用 `actions-sync` 工具更新这些操作，也可以配置 {% data variables.product.prodname_github_connect %} 以允许访问 {% data variables.product.prodname_dotcom_the_website %} 上的最新操作。 后续部分将介绍这些选项。

## 使用 `actions-sync` 更新捆绑的操作

若要更新捆绑操作，可以使用 `actions-sync` 工具更新快照。 有关使用 `actions-sync` 的详细信息，请参阅“[从 {% data variables.product.prodname_dotcom_the_website %} 手动同步操作](/admin/github-actions/manually-syncing-actions-from-githubcom)”。

## 使用 {% data variables.product.prodname_github_connect %} 访问最新操作

您可以使用 {% data variables.product.prodname_github_connect %} 允许 {% data variables.product.product_name %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)。”

配置 {% data variables.product.prodname_github_connect %} 后，你可以在实例上的 `actions` 组织中删除其本地存储库，以使用最新版本的操作。 例如，如果企业实例正在使用 `actions/checkout` 操作的 `v1`，并且你需要使用企业实例上不可用的 `{% data reusables.actions.action-checkout %}`，请执行以下步骤以能够使用 {% data variables.product.prodname_dotcom_the_website %} 中的最新 `checkout` 操作：

1. 从 {% data variables.product.product_name %} 上的企业所有者帐户中，导航到要从操作组织中删除的存储库（在此示例中为 `checkout`）。
1. 默认情况下，站点管理员不是捆绑的操作组织的所有者。 若要获取删除 `checkout` 存储库所需的访问权限，必须使用站点管理工具。 在该仓库中任何页面的右上角单击 {% octicon "rocket" aria-label="The rocket ship" %}。
  ![用于访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. 单击 {% octicon "shield-lock" %}“安全性”以查看存储库的安全概述。
  ![存储库的安全标头](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. 在“特权访问”下，单击“解锁”。
  ![解锁按钮](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. 在“原因”下，键入解锁存储库的原因，然后单击“解锁” 。
  ![确认对话框](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. 现在，存储库已解锁，你可以离开网站管理员页面，并删除`actions` 组织中的存储库。 在页面顶部，单击存储库名称，在此示例中单击“签出”以返回到摘要页。
  ![存储库名称链接](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. 在“存储库信息”下，单击“查看代码”以离开站点管理员页面并显示 `checkout` 存储库。
1. 删除 `actions` 组织中的 `checkout` 存储库。 有关如何删除存储库的信息，请参阅“[删除存储库](/github/administering-a-repository/deleting-a-repository)”。
  ![查看代码链接](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. 将工作流的 YAML 配置为使用 `{% data reusables.actions.action-checkout %}`。
1. 每次运行工作流时，运行器都将使用来自 {% data variables.product.prodname_dotcom_the_website %} 的指定版本的 `actions/checkout`。

   {% note %}

   注意：首次从 {% data variables.product.prodname_dotcom_the_website %} 使用 `checkout` 操作时，`actions/checkout` 命名空间会在 {% data variables.location.product_location %} 上自动停用。 如果要还原为使用操作的本地副本，则首先需要从停用中删除命名空间。 有关详细信息，请参阅“[自动停用在 {% data variables.product.prodname_dotcom_the_website%} 上访问的操作的命名空间](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)”。

   {% endnote %}
