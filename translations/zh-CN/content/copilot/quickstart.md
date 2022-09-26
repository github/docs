---
title: GitHub Copilot 快速入门
intro: '{% data variables.product.prodname_copilot %} 通过在你编写代码时提供内联建议，为你的工作提供帮助。'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: 5aa3071cddc2bf83e7ee7082eabea00f79a66ea5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079793'
---
## 简介

{% data variables.product.prodname_copilot %} 是 AI 结对程序员。 可以使用 {% data variables.product.prodname_copilot %} 在编辑器中获取整行或整个函数的建议。

本指南将介绍如何注册 {% data variables.product.prodname_copilot %}，在 {% data variables.product.prodname_vscode %} 中安装 {% data variables.product.prodname_copilot %} 扩展，并获得第一个建议。 有关 {% data variables.product.prodname_copilot %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)”。 有关如何在各种环境中使用 {% data variables.product.prodname_copilot %} 的更深入信息，请参阅“[入门](/copilot/getting-started-with-github-copilot)”。

## 先决条件

{% data reusables.copilot.copilot-prerequisites %}
- 若要在 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_copilot %}，必须安装 {% data variables.product.prodname_vscode %}。 有关详细信息，请参阅 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) 文档。

## 注册 {% data variables.product.prodname_copilot %}

{% data reusables.copilot.signup-procedure %}

## 为 {% data variables.product.prodname_vscode %} 安装 {% data variables.product.prodname_copilot %} 扩展

若要使用 {% data variables.product.prodname_copilot %}，必须先安装 {% data variables.product.prodname_vscode %} 扩展。

1. 在 {% data variables.product.prodname_vscode %} 市场中，转到 [{% data variables.product.prodname_copilot %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)页，然后单击“安装”。
   ![安装 {% data variables.product.prodname_copilot %} 扩展 {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. 此时会显示一个弹出窗口，要求打开 {% data variables.product.prodname_vscode %}。 单击“打开 {% data variables.product.prodname_vscode %}”。
1. 在 {% data variables.product.prodname_vscode %} 的“扩展: {% data variables.product.prodname_copilot %}”选项卡中，单击“安装”。
   ![{% data variables.product.prodname_vscode %} 中的“安装”按钮](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. 如果以前未在 {% data variables.product.prodname_dotcom %} 帐户中授权 {% data variables.product.prodname_vscode %}，系统会提示你在 {% data variables.product.prodname_vscode %} 中登录到 {% data variables.product.prodname_dotcom %}。
   - 如果以前已在 {% data variables.product.prodname_dotcom %} 帐户中授权 {% data variables.product.prodname_vscode %}，系统将会自动授权 {% data variables.product.prodname_copilot %}。
   ![{% data variables.product.prodname_vscode %} 授权屏幕的屏幕截图](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. 在浏览器中，{% data variables.product.prodname_dotcom %} 将请求 {% data variables.product.prodname_copilot %} 所需的权限。 若要批准这些权限，请单击“授权 {% data variables.product.prodname_vscode %}”。 
1. 在 {% data variables.product.prodname_vscode %} 的“{% data variables.product.prodname_vscode %}”对话框中，若要确认身份验证，请单击“打开”。 

## 获得第一个建议

{% data reusables.copilot.supported-languages %} 以下示例使用的是 JavaScript，但其他语言的工作方式类似。

1. 打开 {% data variables.product.prodname_vscode %}。
{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} 将自动以灰色文本建议整个函数正文，如下所示。 具体的建议可能会有所不同。
![第一个建议 {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## 后续步骤

你已成功安装 {% data variables.product.prodname_copilot %} 并收到了你的第一个建议，但这只是开始！ 以下是一些有用的资源，可帮助你对 {% data variables.product.prodname_copilot %} 执行后续操作。

- [入门](/copilot/getting-started-with-github-copilot)：你已了解如何在 {% data variables.product.prodname_vscode %} 中获得你的第一个建议。 这些指南介绍了如何在所有受支持的环境中设置和导航 {% data variables.product.prodname_copilot %} 的各种功能。
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)：查看 {% data variables.product.prodname_copilot %} 如何帮助你工作的实用示例。
- [配置 {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot)：这些指南提供了有关如何将 {% data variables.product.prodname_copilot %} 配置为个人首选项的详细信息。


## 延伸阅读

- [关于 {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
