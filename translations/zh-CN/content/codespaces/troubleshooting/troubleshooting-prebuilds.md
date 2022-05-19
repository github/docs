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

{% data reusables.codespaces.prebuilds-beta-note %}

有关 {% data variables.product.prodname_codespaces %} 预构建的详细信息，请参阅“[预构建代码空间](/codespaces/prebuilding-your-codespaces)”。

## 检查代码空间是否是从预构建创建的？

创建代码空间时，可以选择要使用的虚拟机类型。 如果预构建可用于虚拟机类型，则其旁边会显示“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”。

![可用计算机类型的列表](/assets/images/help/codespaces/choose-custom-machine-type.png)

If you have your {% data variables.product.prodname_codespaces %} editor preference set to "{% data variables.product.prodname_vscode %} for Web" then the "Setting up your codespace" page will show the message "Prebuilt codespace found" if a prebuild is being used.

![“找到预构建的代码空间”消息](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Similarly, if your editor preference is "{% data variables.product.prodname_vscode_shortname %}" then the integrated terminal will contain the message "You are on a prebuilt codespace defined by the prebuild configuration for your repository" when you create a new codespace. 更多信息请参阅“[设置代码空间的默认编辑器](/codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces)”。

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

默认情况下，每次推送到启用了预构建的分支时，都会更新预构建模板。 如果推送涉及对开发容器配置的更改，则在更新过程中，将从计算机类型列表中删除“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”标签。 在此期间，您仍然可以在没有预构建模板的情况下创建代码空间。 如果需要，可以通过将预构建模板设置为仅在更改开发容器配置文件时更新或仅按自定义计划更新，从而减少存储库无法使用预构建的情况。 更多信息请参阅“[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

如果您的分支未专门为预构建启用，当它是启用了预构建的分支的分支时，也可从预构建受益。 但是，如果分支上的开发容器配置发生更改，使其与基本分支上的配置不同，则预构建在分支上将不再可用。

以下是检查特定分支是否未显示“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”标签的事项：

* 确认此分支存在预构建配置。 如果您不是存储库管理员，则需要联系存储库管理员进行确认。
* 确认预构建配置包括您的区域。
* 检查最近是否将对开发容器配置的更改推送到启用了预构建的分支。 如果是这样，通常必须等到为此推送运行的预构建工作流程完成，然后预构建才会再次可用。
* 如果最近未进行任何配置更改，请转到存储库的“ **操作** ”选项卡，单击工作流程列表中的 **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} 预构建** ，然后检查分支的预构建工作流程运行是否成功。 如果工作流程的最新运行失败，并且其中一个或多个失败的运行包含对开发容器配置的更改，则关联分支将没有可用的预构建。

## 预构建工作流程运行失败疑难解答

如果为预构建配置运行的工作流程失败，则可以在调查时暂时禁用预构建配置。 更多信息请参阅“[管理预构建](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)”。

## 延伸阅读

- “[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)”
- “[管理预构建](/codespaces/prebuilding-your-codespaces/managing-prebuilds)”
