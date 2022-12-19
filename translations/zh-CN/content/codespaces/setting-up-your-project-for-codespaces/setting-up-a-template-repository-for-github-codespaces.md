---
title: 为 GitHub Codespaces 设置模板存储库
shortTitle: Set up a template repo
intro: '可以通过为 {% data variables.product.prodname_github_codespaces %} 设置模板存储库，帮助用户开始使用项目。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159438'
---
## 简介

通过设置模板存储库，可以帮助用户开始使用你的框架、库或 {% data variables.product.prodname_github_codespaces %} 中的其他项目。 用户将能够立即在基于云的开发环境中开始使用模板文件，而无需担心克隆存储库或安装工具或其他依赖项。 通过某些配置，你能够在 codespace 中设置用户，其中重要文件已打开以供编辑，并且应用程序已在 {% data variables.product.prodname_vscode_shortname %} Web 编辑器中的预览浏览器选项卡中运行。

具有模板存储库读取访问权限的任何人都可以从 {% data variables.product.product_name %} 上的存储库页面创建 codespace。 可以将任何现有存储库转换为模板，无需更改任何设置即可支持用户从模板存储库创建 codespace。 有关将存储库转换为模板的详细信息，请参阅“[创建模板存储库](/repositories/creating-and-managing-repositories/creating-a-template-repository)”。

可以提供格式为 `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` 的链接，使用户直接转到模板的“创建新 codespace”页面。

![“创建新 codespace”页的屏幕截图](/assets/images/help/codespaces/create-a-new-codespace-page.png)

例如，可以在关于开始使用你的框架的教程中提供此链接。 在链接中，将 `OWNER/TEMPLATE-REPO` 替换为模板存储库的名称，例如 `monalisa/octo-template`。

当某人从你的模板创建 codespace 时，你的模板存储库的内容将克隆到其 codespace 中。 用户准备就绪后，他们可以将工作发布到属于其个人帐户的 {% data variables.product.product_name %} 上的新存储库。 codespace 的任何使用费都将由创建 codespace 的用户支付。 有关详细信息，请参阅“[从模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)”。

## 描述模板

如果没有模板，请为模板存储库创建自述文件，以描述模板的用途以及如何开始使用它。 有关详细信息，请参阅“[关于 README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)”。

模板的简短描述会显示在用户通过 `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` 链接登陆的“创建新 codespace”页面上。 此说明来自创建存储库时可以设置的“说明”字段。 可以随时编辑此说明，方法是导航到存储库的页面，然后单击页面右侧“关于”部分旁边的“{% octicon "gear" aria-label="The Settings gear" %}”。 

![存储库页上“关于”部分的屏幕截图](/assets/images/help/repository/repository-settings-icon.png)

## 添加初学者文件

模板存储库通常包含具有样板代码的初学者文件，以便用户可以快速开始使用库、框架或其他技术。

有关要包含的文件类型的指导，可以查看 {% data variables.product.prodname_github_codespaces %} 的官方 {% data variables.product.company_short %} 模板中包含的初学者文件，如下所示。

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. 若要查看包含模板文件的模板存储库，请单击模板的名称。

   ![“探索快速入门模板”部分的屏幕截图，其中突出显示了“React”](/assets/images/help/codespaces/react-template-name.png)

## 配置容器映像

可以将开发容器配置文件添加到模板存储库，以便为将模板用于 {% data variables.product.prodname_github_codespaces %} 的用户自定义开发环境。 可以从 {% data variables.product.prodname_vscode %} 中的预定义配置设置列表中进行选择，也可以通过编写自己的 `devcontainer.json` 文件创建自定义配置。 如果不添加配置文件，将使用默认容器映像。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”和“[将开发容器配置添加到存储库](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)”。

{% note %}

注意：{% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

应使用工具和自定义项配置开发容器，为用户提供模板的最佳体验。 例如，在 `devcontainer.json` 文件中： 
- 从模板创建 codespace 时，可以使用 `openFiles` 属性，定义要在 {% data variables.product.prodname_vscode_shortname %} Web 客户端中自动打开的文件列表。
- 如果模板包含 Web 应用程序的文件，则可以使应用程序在用户的 codespace 中自动运行。 为此，可以使用 `postAttachCommand` 属性运行脚本，该脚本在 {% data variables.product.prodname_vscode_shortname %} Web 客户端连接到 codespace 后立即在本地服务器上启动应用程序，并将端口的 `onAutoForward` 属性设置为 `openPreview`，以便在嵌入 {% data variables.product.prodname_vscode_shortname %} Web 客户端的简单浏览器中显示在该端口上运行的应用程序。

React 模板的以下配置设置将在用户的编辑器中打开 `app.js` 文件，运行（在 `package.json` 文件中定义的）`npm start` 来启动本地服务器，并将端口 `3000` 转发到 codespace 中的预览浏览器选项卡。

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
有关详细信息，请参阅“[在存储库的 codespaces 中自动打开文件](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository)”和 containers.dev [上的开发容器规范](https://containers.dev/implementors/json_reference/#general-properties)。
