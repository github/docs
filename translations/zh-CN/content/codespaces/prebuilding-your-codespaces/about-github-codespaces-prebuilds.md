---
title: 关于 GitHub Codespaces 预构建
shortTitle: 关于预构建
intro: 代码空间预构建有助于加快为大型或复杂存储库创建新代码空间的速度。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
---

## 概览

预构建代码空间可以提高工作效率并更快地访问代码空间，尤其是在存储库很大或很复杂并且新代码空间目前需要 2 分钟以上的时间才能启动的情况下。 这是因为在为项目创建代码空间之前，任何源代码、编辑器扩展、项目依赖项、命令和配置都已下载、安装和应用。 将预构建视为代码空间的“准备就绪”模板。

默认情况下，每当您将更改推送到存储库时，{% data variables.product.prodname_github_codespaces %} 都会使用 {% data variables.product.prodname_actions %} 自动更新您的预构建。

When prebuilds are available for a particular branch of a repository, a particular dev container configuration file, and for your region, you'll see the "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" label in the list of machine type options when you create a codespace. 如果仍在创建预构建，您将看到“{% octicon "history" aria-label="The history icon" %} 预构建正在进行中”标签。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

![用于选择计算机类型的对话框](/assets/images/help/codespaces/choose-custom-machine-type.png)

## The prebuild process

To create a prebuild you set up a prebuild configuration. When you save the configuration, a {% data variables.product.prodname_actions %} workflow runs to create each of the required prebuilds; one workflow per prebuild. Workflows also run whenever the prebuilds for your configuration need to be updated. This can happen at scheduled intervals, on pushes to a prebuild-enabled repository, or when you change the dev container configuration. 更多信息请参阅“[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

When a prebuild configuration workflow runs, {% data variables.product.prodname_dotcom %} creates a temporary codespace, performing setup operations up to and including any `onCreateCommand` and `updateContentCommand` commands in the `devcontainer.json` file. No `postCreateCommand` commands are run during the creation of a prebuild. For more information about these commands, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the {% data variables.product.prodname_vscode_shortname %} documentation. A snapshot of the generated container is then taken and stored.

When you create a codespace from a prebuild, {% data variables.product.prodname_dotcom %} downloads the existing container snapshot from storage and deploys it on a fresh virtual machine, completing the remaining commands specified in the dev container configuration. Since many operations have already been performed, such as cloning the repository, creating a codespace from a prebuild can be substantially quicker than creating one without a prebuild. This is true where the repository is large and/or `onCreateCommand` commands take a long time to run.

## 关于 {% data variables.product.prodname_codespaces %} 预构建的计费

{% data reusables.codespaces.billing-for-prebuilds-default %} 有关 {% data variables.product.prodname_codespaces %} 存储定价的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

{% data reusables.codespaces.billing-for-prebuilds-reducing %}

使用预构建创建的代码空间的费用与常规代码空间相同。

## 关于将更改推送到启用了预构建的分支

By default, each push to a branch that has a prebuild configuration results in a {% data variables.product.prodname_dotcom %}-managed Actions workflow run to update the prebuild. 对于给定的预构建配置，预构建工作流程的并发限制为一次运行一个工作流程，除非所做的更改会影响关联存储库的开发容器配置。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。 如果运行已在进行中，则最近排队的工作流程运行将在当前运行完成后运行。

With the prebuild set to be updated on each push, it means that if there are very frequent pushes to your repository, prebuild updates will occur at least as often as it takes to run the prebuild workflow. 也就是说，如果工作流程运行通常需要一个小时才能完成，当运行成功时，大约每小时为存储库创建预构建，当有更改分支上开发容器配置的推送时，则创建更为频繁。

例如，假设对具有预构建配置的分支快速连续进行 5 次推送。 在此情况下：

* A workflow run is started for the first push, to update the prebuild.
* 如果剩余的 4 个推送不影响开发容器配置，则工作流程将针对这些推送在“挂起”状态下排队。

  如果其余 4 个推送中的任何一个更改了开发容器配置，则服务不跳过该推送，而立即运行预构建创建工作流程，如果成功，则会相应地更新预构建。

* Once the first run completes, workflow runs for pushes 2, 3, and 4 will be canceled, and the last queued workflow (for push 5) will run and update the prebuild. 
