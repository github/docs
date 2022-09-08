---
title: GitHub Desktop 使用入门
intro: '了解如何设置、验证和配置 {% data variables.product.prodname_desktop %}，以便直接从您的计算机直接参与项目。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099222'
---
## 简介
{% data variables.product.prodname_desktop %} 是一个可让您使用 GUI 而非命令行或网络浏览器与 {% data variables.product.prodname_dotcom %} 交互的应用程序。 {% data variables.product.prodname_desktop %} 鼓励您和您的团队使用最佳实践协作处理 Git 和 {% data variables.product.prodname_dotcom %}。 您可以使用 {% data variables.product.prodname_desktop %}，通过视觉确认更改从桌面完成大部分 Git 命令。 您可以使用 {% data variables.product.prodname_desktop %} 推送到、从中拉取和克隆远程仓库，以及使用协作工具，如归因提交和创建拉取请求。

本指南将介绍设置应用程序、验证帐户、配置基本设置，以及介绍使用 {% data variables.product.prodname_desktop %} 管理项目的基础知识，帮助您开始使用 {% data variables.product.prodname_desktop %}。 在读完本指南后，您将能够使用 {% data variables.product.prodname_desktop %} 协作处理项目并连接到远程仓库。

您可能会发现，在开始使用 {% data variables.product.prodname_dotcom %} 之前，基本了解 Git 和 {% data variables.product.prodname_desktop %} 会有帮助。 有关详细信息，请参阅以下文章。

- “[使用 Git](/github/getting-started-with-github/using-git)”
- “[了解 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)”
- “[{% data variables.product.prodname_dotcom %} 入门](/github/getting-started-with-github)”

{% data variables.product.prodname_desktop %} 是一个开源项目。 您可以查看路线图、为项目做出贡献，或者打开议题以提供反馈或功能请求。 有关详细信息，请参阅 [`desktop/desktop`](https://github.com/desktop/desktop) 存储库。

## 第 1 部分：安装和身份验证
您可以在任何支持的操作系统上安装 {% data variables.product.prodname_desktop %}。 有关详细信息，请参阅“[支持的操作系统](/desktop/getting-started-with-github-desktop/supported-operating-systems)”。

要安装 {% data variables.product.prodname_desktop %}，请访问 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 的下载页面。 有关详细信息，请参阅“[安装 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)”。

在安装 {% data variables.product.prodname_desktop %} 后，您可以使用您在 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上的帐户验证应用程序。 身份验证允许您连接到 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上的远程仓库。

{% mac %}

1. 必须有帐户才可向 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 验证。 有关创建帐户的更多信息，请参阅“[注册新 {% data variables.product.prodname_dotcom %} 帐户](/github/getting-started-with-github/signing-up-for-a-new-github-account)”或联系 {% data variables.product.prodname_enterprise %} 站点管理员。

2. 在 {% data variables.product.prodname_desktop %} 下拉菜单中单击“首选项”。 在首选项窗口中，单击“帐户”按照步骤登录。 有关详细信息，请参阅“[向 {% data variables.product.prodname_dotcom %} 进行身份验证](/desktop/getting-started-with-github-desktop/authenticating-to-github)”。
  ![GitHub 的登录按钮](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. 必须有帐户才可向 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 验证。 有关创建帐户的更多信息，请参阅“[注册新 {% data variables.product.prodname_dotcom %} 帐户](/github/getting-started-with-github/signing-up-for-a-new-github-account)”或联系 {% data variables.product.prodname_enterprise %} 站点管理员。

2. 在“文件”下拉菜单中，单击“选项”。 在选项窗口中，单击“帐户”并按照步骤登录。 有关详细信息，请参阅“[向 {% data variables.product.prodname_dotcom %} 进行身份验证](/desktop/getting-started-with-github-desktop/authenticating-to-github)”。
  ![GitHub 的登录按钮](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## 第 2 部分：配置和自定义 {% data variables.product.prodname_desktop %}
安装 {% data variables.product.prodname_desktop %} 后，您可以配置并自定义应用程序，使之最适合您的需求。

{% mac %}

您可以连接或删除 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上的帐户、选择默认文本编辑器或 shell、编辑 Git 配置、更改 {% data variables.product.prodname_desktop %} 的外观、自定义系统对话框，以及在 {% data variables.product.prodname_desktop %} Preferences（首选项）窗口中设置隐私首选项。 有关详细信息，请参阅“[配置基本设置](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”。

  ![Preferences（首选项）窗口中的基本设置](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

您可以连接或删除 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上的帐户、选择默认文本编辑器或 shell、编辑 Git 配置、更改 {% data variables.product.prodname_desktop %} 的外观、自定义系统对话框，以及在 {% data variables.product.prodname_desktop %} Options（选项）窗口中设置隐私首选项。 有关详细信息，请参阅“[配置基本设置](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”。

  ![Options（选项）窗口中的基本设置](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## 第 3 部分：通过 {% data variables.product.prodname_desktop %} 参与项目
在安装、验证和配置应用程序后，便可开始使用 {% data variables.product.prodname_desktop %}。 您可以创建、添加或克隆仓库，并使用 {% data variables.product.prodname_desktop %} 来管理对您的仓库的参与。

### 创建、添加和克隆仓库
可通过选择“文件”菜单并单击“新建存储库...”来创建新存储库。有关详细信息，请参阅“[使用 {% data variables.product.prodname_desktop %} 创建第一个存储库](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)”。

可通过选择“文件”菜单并单击“添加本地存储库...”，添加本地计算机中的存储库。有关详细信息，请参阅“[将本地计算机中的存储库添加到 {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)”。

可通过选择“文件”菜单并单击“克隆存储库...”，克隆 {% data variables.product.prodname_dotcom %} 中的存储库。有关详细信息，请参阅“[克隆 {% data variables.product.prodname_desktop %} 中的存储库并为其创建分支](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)”。

{% mac %}

  ![用于创建、添加和克隆仓库的 File（文件）菜单选项](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![用于创建、添加和克隆仓库的 File（文件）菜单选项](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### 在分支中更改
您可以使用 {% data variables.product.prodname_desktop %} 创建项目分支。 分支将开发工作与仓库中的其他分支相分隔，以便您安全地尝试更改。 有关详细信息，请参阅“[管理分支](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)”。

  ![New Branch（新分支）按钮](/assets/images/help/desktop/new-branch-button-mac.png)

对分支进行更改后，您可以在 {% data variables.product.prodname_desktop %} 中审查它们，并创建提交以跟踪您的更改。 有关详细信息，请参阅“[提交和审查对项目的更改](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)”。

  ![查看和创建提交](/assets/images/help/desktop/commit-button.png)

如果要远程访问更改或与他人共享更改，您可以将提交推送到 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[将更改推送到 {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)”。

### 使用 {% data variables.product.prodname_desktop %} 进行协作
您可以使用 {% data variables.product.prodname_desktop %} 创建议题或拉取请求来与其他人协作处理项目。 议题有助于您跟踪想法和讨论项目可能发生的变化。 拉取请求可让您与他人共享提议的更改、接收反馈并将更改合并到项目中。 有关详细信息，请参阅“[创建问题或拉取请求](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)”。

您可以在 {% data variables.product.prodname_desktop %} 中查看您自己或您的协作者的拉取请求。 在 {% data variables.product.prodname_desktop %} 中查看拉取请求可让您查看任何提议的更改，以及在默认文本编辑器中打开项目文件和仓库进行其他更改。 有关详细信息，请参阅“[在 {% data variables.product.prodname_desktop %} 中查看拉取请求](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)”。

### 保持本地仓库同步
当您对更改本地仓库或者其他人更改远程仓库时，您需要将项目的本地副本与远程仓库同步。 {% data variables.product.prodname_desktop %} 可以通过推送和拉取提交来保持项目本地副本与远程版本同步。 有关详细信息，请参阅“[同步分支](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)”。

## 延伸阅读
- “[安装 {% data variables.product.prodname_desktop %} 并向其进行身份验证](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)”
- “[使用 {% data variables.product.prodname_desktop %} 进行参与和协作](/desktop/contributing-and-collaborating-using-github-desktop)”
