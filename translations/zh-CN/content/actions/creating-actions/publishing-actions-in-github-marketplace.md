---
title: 在 GitHub Marketplace 中发布操作
intro: '您可以在 {% data variables.product.prodname_marketplace %} 中发布操作，以及与 {% data variables.product.prodname_dotcom %} 社区共享您创建的操作。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  free-pro-team: '*'
type: 'how_to'
---

{% data reusables.actions.ae-beta %}

您必须接受服务条款才能在 {% data variables.product.prodname_marketplace %} 中发布操作。

### 关于发布操作

必须先在您的仓库中创建操作，然后才可发布操作。 更多信息请参阅“[创建操作](/actions/creating-actions)”。

计划发布操作到 {% data variables.product.prodname_marketplace %} 时， 您需要确保仓库仅包含该操作的元数据文件、代码和文件。 为操作创建单个仓库允许您在单一单元中标记、发布和打包代码。 {% data variables.product.prodname_dotcom %} 还使用 {% data variables.product.prodname_marketplace %} 页面上的操作元数据。

操作立即发布到 {% data variables.product.prodname_marketplace %}，只要符合以下要求，就不会受到 {% data variables.product.prodname_dotcom %} 审查：

- 操作必须位于公共仓库中。
- 每个仓库必须包含单个操作。
- 操作的元数据文件（`action.yml` 或 `action.yaml`）必须在仓库的根目录中。
- 操作元数据文件中的 `name` 必须是唯一的。
  - `name` 无法匹配 {% data variables.product.prodname_marketplace %} 上发布的现有操作名称。
  - `name` 无法匹配 {% data variables.product.prodname_dotcom %} 上的用户或组织，除非用户或组织所有者正在发布该操作。 例如，只有 {% data variables.product.prodname_dotcom %} 组织可以发布名为 `github` 的操作。
  - `name` 无法匹配现有的 {% data variables.product.prodname_marketplace %} 类别。
  - {% data variables.product.prodname_dotcom %} 将保留 {% data variables.product.prodname_dotcom %} 功能的名称。

### 发布操作

您可以将已创建的操作标记为新发行版并发布，便可将其添加到 {% data variables.product.prodname_marketplace %}。

要草拟新发行版并将操作发布到 {% data variables.product.prodname_marketplace %}，请遵循以下说明：

{% data reusables.repositories.navigate-to-repo %}
1. 当仓库包含操作元数据文件（`action.yml` 或 `action.yaml`），您会看到一个用于将操作发布到 {% data variables.product.prodname_marketplace %} 的横幅。 单击 **Draft a release（草拟发行版）**。 ![将此操作发布到 Markeplace 按钮](/assets/images/help/repository/publish-github-action-to-markeplace-button.png)
1. 选择**将此操作发布到 {% data variables.product.prodname_marketplace %}**。 如果无法选择**将此操作发布到 {% data variables.product.prodname_marketplace %}** 复选框，则需要先阅读并接受 {% data variables.product.prodname_marketplace %} 协议。 ![选择发布到 Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. 如果元数据文件中的标签包含任何问题，您将看到一条错误消息。 ![查看通知](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. 如果您看到任何屏幕上的建议，请通过更新元数据文件来解决这些问题。 完成后，您将看到一条“Everything looks good!（一切看起来都不错！）”的消息。 ![修复错误](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. 选择“Primary Category（主要类别）”，然后按需要选择“Another Category（另一个类别）”，这将有助于人们找到您的 {% data variables.product.prodname_marketplace %} 中的操作。 ![选择类别](/assets/images/help/repository/marketplace_actions_categories.png)
1. 使用版本标记操作，并添加发行版标题。 这有助于人们知道发行版包含哪些变化或特征。 人们将在操作的专门 {% data variables.product.prodname_marketplace %} 页面中看到版本。 ![标记版本](/assets/images/help/repository/marketplace_actions_version.png)
1. 完成所有其他字段，然后单击 **Publish release（发布发行版）**。 发布需要使用双重身份验证。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication/)”。 ![发布版本](/assets/images/help/repository/marketplace_actions_publishrelease.png)

### 从 {% data variables.product.prodname_marketplace %} 删除操作

要从 {% data variables.product.prodname_marketplace %} 删除已发布的操作，您需要更新每个已发布的发行版。 对已发布到 {% data variables.product.prodname_marketplace %} 的操作的每个发行版执行以下步骤。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 在发行版页面上，要编辑的发行版右侧，单击 **Edit（编辑）**。 ![发行版编辑按钮](/assets/images/help/releases/release-edit-btn.png)
4. 选择**将此操作发布到 {% data variables.product.prodname_marketplace %}**以取消勾选此复选框。 ![发布此操作按钮](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. 单击页面底部的 **Update release（更新发行版）**。 ![更新发行版按钮](/assets/images/help/repository/actions-marketplace-update-release.png)
