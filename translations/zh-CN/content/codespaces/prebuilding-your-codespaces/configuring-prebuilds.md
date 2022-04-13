---
title: 配置预构建
shortTitle: 配置预构建
intro: 您可以将项目配置为每次将更改推送到存储库时自动预构建代码空间。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

{% data reusables.codespaces.prebuilds-beta-note %}

您可以为存储库的特定分支设置预构建配置。

从启用了预构建的基础分支创建的任何分支通常也会在代码空间创建期间分配一个预构建。 如果分支上的开发容器与基本分支上的开发容器相同，则会出现这种情况。 这是因为具有相同开发容器配置的分支的大多数预构建配置都相同，因此开发人员也可以从这些分支上更快的代码空间创建时间中受益。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project)”。

通常，在为分支配置预构建时，预构建将可用于该分支的 {% data variables.product.prodname_codespaces %} 计算机类型。 但是，如果存储库大于 32 GB，则预构建将不适用于 2 核和 4 核计算机类型，因为它们提供的存储限制为 32 GB。

## 基本要求

在为项目配置预构建之前，必须满足以下条件：
* 必须为您的组织启用 {% data variables.product.prodname_github_codespaces %}。 更多信息请参阅“[为组织启用 {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)”。
* 必须为您的仓库启用 {% data variables.product.prodname_actions %}。 每个预构建配置都需要能够触发关联的操作工作流程。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)”。

## 配置预构建

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在边栏的“Code & automation（代码和自动化）”部分中，单击 **{% octicon "codespaces" aria-label="The Codespaces icon" %}{% data variables.product.prodname_codespaces %}**。
1. 在“Prebuild configuration（预构建配置）”下，单击 **Set up prebuild（设置预构建）**。

   ![“设置预构建”按钮](/assets/images/help/codespaces/prebuilds-set-up.png)

1. 选择要为其设置预构建的分支。

   ![分支下拉菜单](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **注意**：从启用了预构建的基本分支创建的任何分支通常也会获得预构建。 例如，如果为存储库的默认分支启用预构建，则在大多数情况下，基于默认分支的分支也将获得预构建。

   {% endnote %}

1. 选择要在其中设置预构建的区域。 开发人员必须位于您选择的区域中，才能从预构建创建代码空间。 或者，选择 **All regions（所有区域）**。

   ![区域选择选项](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **注意**：
   * 每个区域的预构建模板将产生单独的费用。 因此，您应仅为已知将使用预构建的区域启用预构建。 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %} 预构建](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)”。
   * 开发人员可以为 {% data variables.product.prodname_codespaces %} 设置其默认区域，这样您就可以为较少的区域启用预构建。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_codespaces %} 的默认区域](/codespaces/customizing-your-codespace/setting-your-default-region-for-codespaces)”。

   {% endnote %}

1. 单击 **Create（创建）**。

   预构建配置列在存储库设置的 {% data variables.product.prodname_codespaces %} 页面上。 {% data variables.product.prodname_actions %} 工作流程将排队，然后运行以根据您选择的分支在指定的区域中创建预构建模板。

   {% note %}

   **注意**：默认情况下，预构建配置的 {% data variables.product.prodname_actions %} 工作流程只能访问其自己的存储库中的资源。 如果您的项目使用存储库外部的资源，则需要设置 `CODESPACES_PREBUILD_TOKEN` 密钥以授予所需的访问权限。 更多信息请参阅“[允许预构建访问外部资源](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)”。

   {% endnote %}

## 配置对不在存储库中的资源的访问

默认情况下，预构建配置的 {% data variables.product.prodname_actions %} 工作流程只能访问其自己的存储库内容。 如果项目需要访问外部资源来构建开发环境，则需要设置具有相应访问范围的个人访问令牌 (PAT)。

更多信息请参阅“[允许预构建访问外部资源](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)”。

## 配置环境变量

要允许预构建过程访问创建开发环境所需的环境变量，您可以将这些变量设置为 {% data variables.product.prodname_codespaces %} 存储库机密或 {% data variables.product.prodname_codespaces %} 组织机密。 更多信息请参阅“[为存储库添加机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-a-repository)”和“[为组织添加机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-an-organization)”。

预构建在构建环境时不使用任何用户级机密，因为在创建代码空间之前不会添加这些机密。

以这种方式创建的 {% data variables.product.prodname_codespaces %} 机密将由从此存储库创建代码空间的任何人都可以访问。 如果您不希望这样做，也可以设置 `CODESPACES_PREBUILD_TOKEN` 密钥。 `CODESPACES_PREBUILD_TOKEN` 密钥仅用于预构建，其值在用户的代码空间中不可访问。 更多信息请参阅“[允许预构建访问外部资源](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)”。

## 配置要包含在预构建中的耗时任务

您可以在 `devcontainer.json` 中使用 `onCreateCommand` 和 `updateContentCommand` 命令，以将耗时的过程作为预构建模板创建的一部分包括在内。 更多信息请参阅 Visual Studio Code 文档“[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)”。

`onCreateCommand` 仅在创建预构建模板时运行一次，而 `updateContentCommand` 在模板创建和后续模板更新时运行。 增量构建应包含在 `updateContentCommand` 中，因为它们表示项目的源代码，并且需要包含在每个预构建模板更新中。

## 延伸阅读

- “[预构建疑难解答](/codespaces/troubleshooting/troubleshooting-prebuilds)”
