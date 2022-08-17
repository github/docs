---
title: 预构建疑难解答
shortTitle: 代码空间预构建
intro: 您可以使用预构建来加速代码空间的创建。 本文提供预构建常见问题的疑难解答步骤。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

有关 {% data variables.product.prodname_codespaces %} 预构建的详细信息，请参阅“[预构建代码空间](/codespaces/prebuilding-your-codespaces)”。

## 检查代码空间是否是从预构建创建的？

创建代码空间时，可以选择要使用的虚拟机类型。 如果预构建可用于虚拟机类型，则其旁边会显示“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”。

![可用计算机类型的列表](/assets/images/help/codespaces/choose-custom-machine-type.png)

如果将 {% data variables.product.prodname_codespaces %} 编辑器首选项设置为“{% data variables.product.prodname_vscode %} for Web”，则“设置代码空间”页面将显示消息“找到预构建的代码空间”（如果正在使用预构建）。

![“找到预构建的代码空间”消息](/assets/images/help/codespaces/prebuilt-codespace-found.png)

同样，如果您的编辑器首选项是“{% data variables.product.prodname_vscode_shortname %}”，则当您创建新代码空间时，集成终端将包含消息“您正在使用由存储库的预构建配置定义的预构建代码空间”。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的默认编辑器](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”。

创建代码空间后，可以通过在终端中运行以下 {% data variables.product.prodname_cli %} 命令来检查它是否是从预构建创建的：

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

如果代码是使用预构建创建的，将返回 `true`。

或者，如果未安装 {% data variables.product.prodname_cli %} (`gh`)，则可以使用以下命令，如果代码空间是从预构建创建的，则该命令将返回 `createFromPrebuild` ：

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## “预构建就绪”标签有时会丢失

您可能会注意到，有时，当您从启用了预构建的分支创建新代码空间时，“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”标签不会显示在用于选择计算机类型的对话框中。 这意味着预构建当前不可用。

By default, each time you push to a prebuild-enabled branch, the prebuild is updated. 如果推送涉及对开发容器配置的更改，则在更新过程中，将从计算机类型列表中删除“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”标签。 During this time you can still create codespaces without a prebuild. If required, you can reduce the occasions on which prebuilds are unavailable for a repository by setting the prebuild to be updated only when you make a change to your dev container configuration files, or only on a custom schedule. 更多信息请参阅“[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

如果您的分支未专门为预构建启用，当它是启用了预构建的分支的分支时，也可从预构建受益。 但是，如果分支上的开发容器配置发生更改，使其与基本分支上的配置不同，则预构建在分支上将不再可用。

以下是检查特定分支是否未显示“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”标签的事项：

* 确认此分支存在预构建配置。 如果您不是存储库管理员，则需要联系存储库管理员进行确认。
* 确认预构建配置包括您的区域。
* 检查最近是否将对开发容器配置的更改推送到启用了预构建的分支。 如果是这样，通常必须等到为此推送运行的预构建工作流程完成，然后预构建才会再次可用。
* 如果最近未进行任何配置更改，请转到存储库的“ **操作** ”选项卡，单击工作流程列表中的 **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} 预构建** ，然后检查分支的预构建工作流程运行是否成功。 如果工作流程的最新运行失败，并且其中一个或多个失败的运行包含对开发容器配置的更改，则关联分支将没有可用的预构建。

## Some resources cannot be accessed in codespaces created using a prebuild

If the `devcontainer.json` configuration file for a prebuild configuration specifies that permissions for access to other repositories are required, then the repository administrator is prompted to authorize these permissions when they create or update the prebuild configuration. If the administrator does not grant all of the requested permissions there's a chance that problems may occur in the prebuild, and in codespaces created from this prebuild. This is true even if the user who creates a codespace based on this prebuild _does_ grant all of the permissions when they are prompted to do so.

## 预构建工作流程运行失败疑难解答

If the `devcontainer.json` configuration file for a prebuild configuration is updated to specify that permissions for access to other repositories are required, and a repository administrator has not been prompted to authorize these permissions for the prebuild configuration, then the prebuild workflow may fail. Try updating the prebuild configuration, without making any changes. If, when you click **Update**, the authorization page is displayed, check that the requested permissions are appropriate and, if so, authorize the request. For more information, see "[Managing prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)" and "[Managing access to other repositories within your codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)."

如果为预构建配置运行的工作流程失败，则可以在调查时暂时禁用预构建配置。 更多信息请参阅“[管理预构建](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)”。

## 延伸阅读

- “[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)”
- “[管理预构建](/codespaces/prebuilding-your-codespaces/managing-prebuilds)”
