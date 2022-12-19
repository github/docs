---
title: 在 GitHub Marketplace 中发布操作
intro: '您可以在 {% data variables.product.prodname_marketplace %} 中发布操作，以及与 {% data variables.product.prodname_dotcom %} 社区共享您创建的操作。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884299'
---
您必须接受服务条款才能在 {% data variables.product.prodname_marketplace %} 中发布操作。

## 关于发布操作

必须先在您的仓库中创建操作，然后才可发布操作。 有关详细信息，请参阅“[创建操作](/actions/creating-actions)”。

计划发布操作到 {% data variables.product.prodname_marketplace %} 时， 您需要确保仓库仅包含该操作的元数据文件、代码和文件。 为操作创建单个仓库允许您在单一单元中标记、发布和打包代码。 {% data variables.product.prodname_dotcom %} 还使用 {% data variables.product.prodname_marketplace %} 页面上的操作元数据。

操作立即发布到 {% data variables.product.prodname_marketplace %}，只要符合以下要求，就不会受到 {% data variables.product.prodname_dotcom %} 审查：

- 操作必须位于公共存储库中。
- 每个存储库必须仅包含一项操作。
- 操作的元数据文件（`action.yml` 或 `action.yaml`）必须位于存储库的根目录中。
- 操作的元数据文件中的 `name` 必须是唯一的。
  - `name` 与 {% data variables.product.prodname_marketplace %} 上发布的现有操作名称不匹配。
  - `name` 与 {% data variables.product.prodname_dotcom %} 上的用户或组织不匹配，除非用户或组织所有者正在发布操作。 例如，只有 {% data variables.product.prodname_dotcom %} 组织可以发布名为 `github` 的操作。
  - `name` 与现有的 {% data variables.product.prodname_marketplace %} 类别不匹配。
  - {% data variables.product.prodname_dotcom %} 将保留 {% data variables.product.prodname_dotcom %} 功能的名称。

## 发布一项操作

您可以将已创建的操作标记为新发行版并发布，便可将其添加到 {% data variables.product.prodname_marketplace %}。

要草拟新发行版并将操作发布到 {% data variables.product.prodname_marketplace %}，请遵循以下说明：

{% data reusables.repositories.navigate-to-repo %}
1. 导航到存储库中的操作元数据文件（`action.yml` 或 `action.yaml`），将看到用于将操作发布到 {% data variables.product.prodname_marketplace %} 的横幅。 单击“草稿版本”。

   ![“将此操作发布到市场”按钮](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. 在“发布操作”下，选中将操作发布到 {% data variables.product.prodname_marketplace %} 的复选框。 如果无法选中该复选框，则必须先单击链接以阅读并接受 {% data variables.product.prodname_marketplace %} 开发人员协议。
![选择发布到市场](/assets/images/help/repository/marketplace_actions_publish.png)
1. 如果元数据文件中的标签包含任何问题，您将看到一条错误消息。
![查看通知](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. 如果您看到任何屏幕上的建议，请通过更新元数据文件来解决这些问题。 完成后，你将看到“看起来一切正常!”消息 消息作为响应。
![修复错误](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. 选择“Primary Category（主要类别）”，然后按需要选择“Another Category（另一个类别）”，这将有助于人们找到您的 {% data variables.product.prodname_marketplace %} 中的操作。
![选择类别](/assets/images/help/repository/marketplace_actions_categories.png)
1. 使用版本标记操作，并添加发行版标题。 这有助于人们知道发行版包含哪些变化或特征。 人们将在操作的专门 {% data variables.product.prodname_marketplace %} 页面中看到版本。
![标记版本](/assets/images/help/repository/marketplace_actions_version.png)
1. 完成所有其他字段，然后单击“发布版本”。 发布需要使用双重身份验证。 有关详细信息，请参阅“[双因素身份验证](/articles/configuring-two-factor-authentication/)”。
![发布版本](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## 从 {% data variables.product.prodname_marketplace %} 删除操作

要从 {% data variables.product.prodname_marketplace %} 删除已发布的操作，您需要更新每个已发布的发行版。 对已发布到 {% data variables.product.prodname_marketplace %} 的操作的每个发行版执行以下步骤。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 单击“版本”页上要编辑的版本右侧的“编辑”。
![版本“编辑”按钮](/assets/images/help/releases/release-edit-btn.png)
4. 选择“将此操作发布到 {% data variables.product.prodname_marketplace %}”以取消选中复选框。
![“发布此操作”按钮](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. 单击页面底部的“更新版本”。
![“更新版本”按钮](/assets/images/help/repository/actions-marketplace-update-release.png)
