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

You can set up a prebuild configuration for the combination of a specific branch of your repository with a specific dev container configuration file.

Any branches created from a prebuild-enabled parent branch will typically also get prebuilds for the same dev container configuration. This is because the prebuild for child branches that use the same dev container configuration as the parent branch are, for the most part, identical, so developers can benefit from faster codespace creation times on those branches also. 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

Typically, when you configure prebuilds for a branch, prebuilds will be available for multiple machine types. 但是，如果存储库大于 32 GB，则预构建将不适用于 2 核和 4 核计算机类型，因为它们提供的存储限制为 32 GB。

## 基本要求

在为项目配置预构建之前，必须满足以下条件：
* 必须为您的组织启用 {% data variables.product.prodname_github_codespaces %}。 更多信息请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。
* 必须为您的仓库启用 {% data variables.product.prodname_actions %}。 每个预构建配置都需要能够触发关联的操作工作流程。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)”。

## 配置预构建

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在边栏的“Code & automation（代码和自动化）”部分中，单击 **{% octicon "codespaces" aria-label="The Codespaces icon" %}{% data variables.product.prodname_codespaces %}**。
1. In the "Prebuild configuration" section of the page, click **Set up prebuild**.

   ![“设置预构建”按钮](/assets/images/help/codespaces/prebuilds-set-up.png)

1. 选择要为其设置预构建的分支。

   ![The branch drop-down menu](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Note**: Any branches created from a prebuild-enabled base branch will typically also get prebuilds for the same dev container configuration. For example, if you enable prebuilds for a dev container configuration file on the default branch of the repository, branches based on the default branch will, in most cases, also get prebuilds for the same dev container configuration.

   {% endnote %}

1. Optionally, in the **Configuration file** drop-down menu that's displayed, choose the `devcontainer.json` configuration file that you want to use for this prebuild. 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”。

   ![The configuration file drop-down menu](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Choose how you want to automatically trigger updates of the prebuild.

   * **每次推送**（默认设置）- 使用此设置，每次推送到给定分支时，都会更新预构建配置。 This will ensure that codespaces generated from a prebuild always contain the latest codespace configuration, including any recently added or updated dependencies.
   * **在配置更改时** - 使用此设置，每次更新给定存储库和分支的关联配置文件时，都会更新预构建配置。 This ensures that changes to the dev container configuration files for the repository are used when a codespace is generated from a prebuild. The Actions workflow that updates the prebuild will run less often, so this option will use fewer Actions minutes. 但是，此选项不保证代码空间始终包含最近添加或更新的依赖项，因此在创建代码空间后，可能必须手动添加或更新这些依赖项。
   * **计划** - 使用此设置，您可以按照自己定义的自定义计划更新预构建配置。 这可以减少操作分钟数的消耗，但是，使用此选项，可以创建不使用最新开发容器配置更改的代码空间。

   ![预构建触发器选项](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Optionally, select **Reduce prebuild available to only specific regions** to limit access to your prebuild, then select which regions you want it to be available in. 开发人员只能从预构建创建代码空间（如果它们位于所选区域中）。 By default, your prebuild is available to all regions where codespaces is available and storage costs apply for each region.

   ![区域选择选项](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **注意**：
   * The prebuild for each region will incur individual charges. 因此，您应仅为已知将使用预构建的区域启用预构建。 更多信息请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预构建](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)”。
   * 开发人员可以为 {% data variables.product.prodname_codespaces %} 设置其默认区域，这样您就可以为较少的区域启用预构建。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的默认区域](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)”。

   {% endnote %}

1. Optionally, set the number of prebuild versions to be retained. 您可以输入 1 到 5 之间的任意数字。 保存版本的默认数量为 2，这意味着仅保存最新的模板版本和以前的版本。

   Depending on your prebuild trigger settings, your prebuild could change with each push or on each dev container configuration change. Retaining older versions of prebuilds enables you to create a prebuild from an older commit with a different dev container configuration than the current prebuild. Since there is a storage cost associated with retaining prebuild versions, you can choose the number of versions to be retained based on the needs of your team. 有关计费的更多信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

   If you set the number of prebuild versions to save to 1, {% data variables.product.prodname_codespaces %} will only save the latest version of the prebuild and will delete the older version each time the template is updated. 这意味着，如果返回到较旧的开发容器配置，则不会获得预构建的代码空间。

   ![The prebuild history setting](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Optionally, add users or teams to notify when the prebuild workflow run fails for this configuration. 您可以开始键入用户名、团队名称或全名，然后在出现名称后点按该名称以将其添加到列表中。 发生预构建失败时，您添加的用户或团队将收到一封电子邮件，其中包含指向工作流程运行日志的链接，以帮助进一步调查。

   ![预构建失败通知设置](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. 单击 **Create（创建）**。

   {% data reusables.codespaces.prebuilds-permission-authorization %}

After you create a prebuild configuration it is listed on the {% data variables.product.prodname_codespaces %} page of your repository settings. A {% data variables.product.prodname_actions %} workflow is queued and then run to create prebuilds in the regions you specified, based on the branch and dev container configuration file you selected.

![Screenshot of the list of prebuild configurations](/assets/images/help/codespaces/prebuild-configs-list.png)

For information about editing and deleting prebuild configurations, see "[Managing prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)."

## 配置环境变量

要允许预构建过程访问创建开发环境所需的环境变量，您可以将这些变量设置为 {% data variables.product.prodname_codespaces %} 存储库机密或 {% data variables.product.prodname_codespaces %} 组织机密。 更多信息请参阅“[为存储库添加机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)”和“[为组织添加机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)”。

Secrets that you create in this way will be accessible by anyone who creates a codespace from this repository. 如果您不希望这样做，也可以设置 `CODESPACES_PREBUILD_TOKEN` 密钥。 `CODESPACES_PREBUILD_TOKEN` 密钥仅用于预构建，其值在用户的代码空间中不可访问。

Prebuilds cannot use any user-level secrets while building your environment, because these are not available until after the codespace has been created.

## 配置要包含在预构建中的耗时任务

You can use the `onCreateCommand` and `updateContentCommand` commands in your `devcontainer.json` to include time-consuming processes as part of the prebuild creation. 更多信息请参阅 {% data variables.product.prodname_vscode %} 文档“[devcontainer.json 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)”。

`onCreateCommand` is run only once, when the prebuild is created, whereas `updateContentCommand` is run at template creation and at subsequent template updates. Incremental builds should be included in `updateContentCommand` since they represent the source of your project and need to be included for every prebuild update.

## 延伸阅读

- "[Allowing a prebuild to access other repositories](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- “[预构建疑难解答](/codespaces/troubleshooting/troubleshooting-prebuilds)”
