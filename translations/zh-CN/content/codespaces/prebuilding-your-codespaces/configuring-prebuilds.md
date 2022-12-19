---
title: 配置预生成
shortTitle: Configure prebuilds
intro: 可以配置项目，使其在你每次将更改推送到存储库时自动预生成 codespace。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159115'
---
可以为存储库的特定分支与特定开发容器配置文件的组合设置预生成配置。

从启用预生成的父分支创建的所有分支通常也会获得同一开发容器配置的预生成。 这是因为使用父分支所用开发容器配置的子分支的预生成在大多数情况下是相同的，因此可以帮助开发人员从这些分支更快地创建 codespace。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

通常，如果为分支配置预生成，预生成可用于多种计算机类型。 但是，如果存储库大于 32 GB，预生成就不适用于 2 核和 4 核计算机类型，因为这些计算机类型提供的存储限制为 32 GB。

## 先决条件 

预生成是使用 {% data variables.product.prodname_actions %} 创建的。 因此，必须在要为其配置预生成的存储库中启用 {% data variables.product.prodname_actions %}。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)”。

## 配置预生成

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. 在页面的“预生成配置”部分，单击“设置预生成”。

   ![“设置预生成”按钮](/assets/images/help/codespaces/prebuilds-set-up.png)

1. 选择要为其设置预生成的分支。

   ![分支下拉菜单](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **注意**：从启用预生成的基础映像分支创建的所有分支通常也会获得同一开发容器配置的预生成。 例如，如果在存储库的默认分支上为开发容器配置文件启用预生成，则大多数情况下，基于默认分支的分支也会获得同一开发容器配置的预生成。

   {% endnote %}

1. 根据需要，可以在显示的“配置文件”下拉菜单中选择要用于预生成的 `devcontainer.json` 配置文件。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”。

   ![配置文件下拉菜单](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. 选择要如何自动触发预生成更新。

   * 每次推送（默认设置）- 通过此设置，预生成将在每次对给定分支进行推送时更新。 这可确保从预生成生成的 codespace 始终包含最新的 codespace 配置，包括任何最近添加或更新的依赖项。
   * 配置更改时 - 使用此设置时，每次更新给定存储库和分支的相关配置文件时，都会更新预生成。 这可确保在从预生成生成 codespace 时使用对存储库的开发容器配置文件进行的更改。 更新预生成的 {% data variables.product.prodname_actions %} 工作流的运行频率较低，因此此选项使用的 {% data variables.product.prodname_actions %} 分钟数较少。 但是，此选项不保证 codespace 始终包含最近添加或更新的依赖项，因此在创建 codespace 后可能需要手动添加或更新这些依赖项。
   * 计划 - 使用此设置，可以根据你定义的自定义计划更新预生成。 这可以减少 {% data variables.product.prodname_actions %} 分钟数消耗，但是，使用此选项，可以创建 codespace，而不使用最新的开发容器配置更改。

   ![预生成触发器选项](/assets/images/help/codespaces/prebuilds-triggers.png)

1. 根据需要，可以选择“减少仅对特定区域可用的预生成”，以便仅在指定区域中创建预生成。 选择要在其中提供预生成的区域。

   默认情况下，预生成在所有可用区域中创建，每个预生成都会产生存储费用。

   ![区域选择选项](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **注释**： 
   * 每个区域的预生成会产生单独的存储费用。 因此，应只为已知将使用的区域启用预生成。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)”。
   * 开发人员可以为 {% data variables.product.prodname_github_codespaces %} 设置其默认区域，这样就可以减少要启用预生成的区域。 有关详细信息，请参阅“[为 {% data variables.product.prodname_github_codespaces %} 设置默认区域](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)”。

   {% endnote %}

1. 根据需要，可以在“模板历史记录”下设置要保留的预生成模板版本数。 可以输入介于 1 和 5 之间的任意数字。 默认保存的版本数为 2，这意味着只保存最新版本的和上一个版本的预生成。

   ![预生成历史记录设置](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   根据预生成触发器设置，预生成可能会随每个推送或每个开发容器配置的更改而更改。 保留较旧版本的预生成使你能够使用与当前预生成不同的开发容器配置从较旧的提交创建预生成。 通过此设置可将保留的版本数设置为所需的级别。 

   如果将保存的预生成版本数设置为 1，{% data variables.product.prodname_github_codespaces %} 将仅保存最新版本的预生成，并在每次模板更新时删除旧版本。 这意味着，如果返回到较旧的开发容器配置，则不会获取预生成的 codespace。
   
   保留的每个预生成版本都需支付存储费用。 例如，如果要在 4 个区域中生成预生成并保留 2 个版本，则最多需要支付 8 个预生成的存储费用。 有关计费的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

1. 根据需要，可以添加用户或团队，以便在此配置的预生成工作流运行失败时发出通知。 可以开始键入用户名、团队名称或全名，然后在显示名称后单击该名称以将其添加到列表中。 发生预生成失败时，添加的用户或团队将收到电子邮件，其中包含工作流运行日志链接，以帮助进一步调查。

   ![预生成失败通知设置](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. 根据需要，单击页面底部的“显示高级选项”。

   ![预生成配置页的屏幕截图，其中突出显示了“显示高级选项”](/assets/images/help/codespaces/show-advanced-options.png)

   在“高级选项”部分中，如果选择“禁用预生成优化”，则当最新的预生成工作流失败或当前正在运行时，将在没有预生成的情况下创建 codespace。 有关详细信息，请参阅“[预生成故障排除](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used)”。

1. 单击“创建”。

   {% data reusables.codespaces.prebuilds-permission-authorization %}

创建预生成配置后，它会列在存储库设置的 {% data variables.product.prodname_github_codespaces %} 页面中。 {% data variables.product.prodname_actions %} 工作流已排队，然后会运行，从而根据所选分支和开发容器配置文件在指定的区域中创建预生成。 

![预生成配置列表的屏幕截图](/assets/images/help/codespaces/prebuild-configs-list.png)

有关编辑和删除预生成配置的信息，请参阅“[管理预生成](/codespaces/prebuilding-your-codespaces/managing-prebuilds)”。

## 配置环境变量

若要让预生成过程能够访问创建开发环境所需的环境变量，可将这些变量设置为 {% data variables.product.prodname_codespaces %} 存储库机密或为 {% data variables.product.prodname_codespaces %} 组织机密。 有关详细信息，请参阅“[为存储库添加机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)”和“[为组织添加机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)”。 

以这种方式创建的机密将由从该存储库创建 codespace 的任何人访问。 如果不希望这样，也可以设置 `CODESPACES_PREBUILD_TOKEN` 机密。 `CODESPACES_PREBUILD_TOKEN` 机密仅用于预生成，并且无法在用户的 codespace 中访问其值。 

预生成在生成环境时不会使用任何用户级机密，因为这些机密在创建 codespace 后才会可用。

## 配置预生成中包含的耗时任务

可以在 `devcontainer.json` 中使用 `onCreateCommand` 和 `updateContentCommand` 命令，以将耗时过程作为预生成创建的一部分。 有关详细信息，请参阅 {% data variables.product.prodname_vscode %} 文档“[devcontainer.json 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)”。

`onCreateCommand` 只在创建预生成时运行一次，而 `updateContentCommand` 在预生成创建和预生成后续更新时运行。 增量生成应包含在 `updateContentCommand` 中，因为它们代表项目的源，并且需要包含在每次预生成更新中。

## 延伸阅读

- “[允许预生成访问其他存储库](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)”
- [对预生成进行故障排除](/codespaces/troubleshooting/troubleshooting-prebuilds)
