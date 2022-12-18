---
title: 在 Visual Studio Code 中使用 GitHub Codespaces
shortTitle: Visual Studio Code
intro: '可以将 {% data variables.product.prodname_github_codespaces %} 扩展连接到 {% data variables.product.product_name %} 上的帐户，直接在 {% data variables.product.prodname_vscode %} 中开发 codespace。'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159440'
---
## 关于 {% data variables.product.prodname_vscode %} 中的 {% data variables.product.prodname_github_codespaces %}

您可以使用本地安装的 {% data variables.product.prodname_vscode %} 来创建、管理、处理和删除代码空间。 {% data reusables.codespaces.using-codespaces-in-vscode %} 有关在 {% data variables.product.prodname_vscode_shortname %} 中设置 {% data variables.product.prodname_github_codespaces %} 的详细信息，请参见“[先决条件](#prerequisites)”。

默认情况下，如果在 {% data variables.product.prodname_dotcom_the_website %} 上创建新的代码空间，它将在浏览器中打开。 如果希望自动打开 {% data variables.product.prodname_vscode_shortname %} 中的任何新 codespace，则可以将默认编辑器设置为 {% data variables.product.prodname_vscode_shortname %}。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的默认编辑器](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”。

如果你更喜欢在浏览器中工作，但想要继续使用现有 {% data variables.product.prodname_vscode_shortname %} 扩展、主题和快捷方式，可打开“设置同步”。有关详细信息，请参阅“[个性化帐户的 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)”。

## 先决条件

若要直接在 {% data variables.product.prodname_vscode_shortname %} 的 codespace 中进行开发，必须使用 {% data variables.product.product_name %} 凭据安装并登录到 {% data variables.product.prodname_github_codespaces %} 扩展。 {% data variables.product.prodname_github_codespaces %} 扩展需要 {% data variables.product.prodname_vscode_shortname %} 2020 年 10 月 版本 1.51 或更高版本。

使用 {% data variables.product.prodname_vscode_marketplace %} 安装 [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 扩展。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的[扩展市场](https://code.visualstudio.com/docs/editor/extension-gallery)。


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. 单击“登录到 {% data variables.product.prodname_dotcom %}…”。

   ![登录到 {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. 要授权 {% data variables.product.prodname_vscode_shortname %} 访问你在 {% data variables.product.product_name %} 上的帐户，请单击“允许”。
3. 登录 {% data variables.product.product_name %} 以审批扩展。

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. 使用“远程资源管理器”下拉列表，然后单击“{% data variables.product.prodname_github_codespaces %}”。

   ![{% data variables.product.prodname_github_codespaces %} 标头](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. 单击“登录以查看 {% data variables.product.prodname_codespaces %}”。

   ![登录以查看 {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. 要授权 {% data variables.product.prodname_vscode_shortname %} 访问你在 {% data variables.product.product_name %} 上的帐户，请单击“允许”。
1. 登录 {% data variables.product.product_name %} 以审批扩展。

{% endwindows %}

## 在 {% data variables.product.prodname_vscode_shortname %} 中创建 codespace

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## 在 {% data variables.product.prodname_vscode_shortname %} 中打开 codespace

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. 在“Codespaces（代码空间）”下，单击您要在其中开发的代码空间。
1. 单击 Connect to Codespace（连接到代码空间）图标。

   ![{% data variables.product.prodname_vscode_shortname %} 中的“连接到 codespace”图标](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## 在 {% data variables.product.prodname_vscode_shortname %} 中更改计算机类型

{% data reusables.codespaces.codespaces-machine-types %} 可以随时更改 codespace 的计算机类型。

{% note %}

注意：{% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## 在 {% data variables.product.prodname_vscode_shortname %} 中删除 codespace

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## 切换到 {% data variables.product.prodname_vscode_shortname %} 的预览体验版本

可以在 {% data variables.product.prodname_github_codespaces %} 中使用 [{% data variables.product.prodname_vscode_shortname %} 的预览体验版本](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build)。

1. 在 {% data variables.product.prodname_github_codespaces %} 窗口的左下角，选择“{% octicon "gear" aria-label="The settings icon" %} 设置”。
2. 从列表中，选择“Switch to Insiders Version（切换到内部版本）”。

   ![单击 {% data variables.product.prodname_github_codespaces %} 中的“预览体验版本”](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. 选择后，{% data variables.product.prodname_github_codespaces %} 将继续以内部版本打开。

## 延伸阅读

- “[在 {% data variables.product.prodname_github_codespaces %} 中使用 {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)”
- “在[{% data variables.product.prodname_github_codespaces %} 中使用 {% data variables.product.prodname_copilot %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)”
