---
title: 通过模板创建 codespace
intro: 如果要启动新项目，可以通过空白模板创建 codespace，或者选择专为你要执行的工作类型设计的模板。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188310'
---
## 关于适用于 {% data variables.product.prodname_github_codespaces %} 的模板

如果要启动新项目，可以通过从模板创建 codespace 来快速开始开发工作。 你将能够在基于云的开发环境中处理项目、将文件保存在云中，以及将工作发布到可与他人共享或克隆到本地计算机的新远程存储库中。

{% note %}

注意：通过模板（而不是存储库）创建的 codespace 将始终向个人帐户计费。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

{% endnote %}

可以从空白模板开始着手，从 {% data variables.product.company_short %} 维护的模板中选择 React 或 Jupyter Notebook 等常用技术，或者从 {% data variables.product.prodname_dotcom %} 上的任何模板存储库中启动 codespace。 使用空白模板时，你将从空目录开始创建，并且可以访问基于云的计算资源，以及预安装了默认 codespace 映像的工具、语言和运行时环境。 使用其他模板时，你将获得当前所用技术的入门文件，通常还有一些额外文件，例如自述文件、`.gitignore` 文件和包含一些自定义环境配置的开发容器配置文件。 有关开发容器和默认映像的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

例如，如果通过 {% data variables.product.company_short %} 的React 模板创建 codespace，则将到达包含简单应用程序的模板文件的工作区中，例如 `index.js`、`app.js` 和 `package.json`。 在 codespace 打开后不久，开发服务器将自动启动，并且你将能够在 {% data variables.product.prodname_vscode_shortname %} Web 客户端内的简单浏览器选项卡中查看正在运行的应用程序。

![codespace 中运行的 React 模板的屏幕截图](/assets/images/help/codespaces/react-template.png)

模板中包含的文件和配置在模板存储库中定义。 创建 codespace 时，模板存储库将克隆到 codespace 中。 之后，链接将被切断，并且 codespace 将不会链接到远程存储库，直到你发布到远程存储库为止。 

{% tip %}

提示：为了帮助用户开始使用你的框架、库或其他项目，你可以设置模板存储库，以便与 {% data variables.product.prodname_github_codespaces %} 配合使用。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的模板存储库](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)”。

{% endtip %}

## 通过 {% data variables.product.company_short %} 模板创建 codespace

{% data variables.product.company_short %} 维护的模板（包括空白模板）在“你的 codespace”页中提供。

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. （可选）若要查看包含模板文件的模板存储库，请单击模板的名称。

   ![“浏览快速入门模板”部分的屏幕截图，其中突出显示了“React”](/assets/images/help/codespaces/react-template-name.png)

1. 在要启动的模板下，单击“**使用此模板**”。
   
   ![快速入门模板的屏幕截图，React 模板下突出显示了“使用此模板”按钮](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## 通过模板存储库创建 codespace

可以通过任何模板存储库创建 codespace，然后在准备就绪后将工作发布到新存储库。 有关模板存储库的详细信息，请参阅“[通过模板创建存储库](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   备注：如果你是模板存储库的维护者，并且要将更改提交到模板存储库本身，则应通过“{% octicon "code" aria-label="The code icon" %} 代码”下拉列表创建 codespace 。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)”。

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## 发布到 {% data variables.product.product_name %} 上的存储库

{% data reusables.codespaces.about-publishing-templates %}

### 从 {% data variables.product.prodname_vscode_shortname %} 发布 

{% data reusables.codespaces.publishing-template-codespaces %}

发布 codespace 后，你可以使用更多选项来自定义 {% data variables.product.prodname_github_codespaces %} 体验。 例如，你能够：

- 更改 codespace 的计算机类型，以确保使用适合你当前所执行工作的资源（请参阅“[更改 codespace 的计算机类型](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)”）。
- 允许 {% data variables.product.prodname_dotcom %} 自动使用 GPG 对 codespace 中的提交进行签名（请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的 GPG 验证](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)”）。
- 与 codespace 共享加密机密（请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”）。

### 从 {% data variables.product.prodname_dotcom_the_website %} 发布 

可以从 {% data variables.product.prodname_dotcom_the_website %} 上“你的 codespaces”页面中发布未发布的 codespace。 如果要发布当前未在浏览器中打开的 codespace，此做法非常有用。 如果执行此操作，你的工作将保留在存储库中，但现有 codespace 和新存储库之间不会有链接。 但是，你可以导航到新存储库并从那里创建 codespace，并且此 codespace 将连接到存储库。

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 在未发布的 codespace 旁边，单击省略号 (...) ，然后选择“发布到新存储库” 。

   ![“发布到新存储库”按钮的屏幕截图](/assets/images/help/codespaces/publish-to-new-repository.png)
1. 为新存储库选择一个名称，将其设置为“公共”或“专用”，然后单击“创建存储库”  。

   ![“发布到新存储库”下拉列表的屏幕截图](/assets/images/help/codespaces/template-new-repository-settings.png)
1. （可选）若要查看新存储库，请单击“查看存储库”。

## 延伸阅读

- [为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
- [codespace 生命周期](/codespaces/getting-started/the-codespace-lifecycle)
- [在 codespace 中使用源代码管理](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)
