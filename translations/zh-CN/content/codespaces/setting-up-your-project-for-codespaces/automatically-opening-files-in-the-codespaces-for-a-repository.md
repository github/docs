---
title: 在存储库的 codespace 中自动打开文件
shortTitle: Automatically opening files
intro: '当用户为你的存储库创建 codespace 并在 {% data variables.product.prodname_vscode %} Web 客户端中打开 codespace 时，你可以设置自动打开特定文件。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113987'
---
## 概述

如果在用户为存储库创建 codespace 时，有一个有用的特定文件可供查看，则可以将此文件设置为在 {% data variables.product.prodname_vscode_shortname %} Web 客户端中自动打开。 可以在存储库的开发容器配置文件中对此进行设置。 

指定的文件仅在 Web 客户端中第一次打开 codespace 时打开。 如果用户关闭了指定文件，则下次打开或重启 codespace 时，不会自动重新打开这些文件。

{% note %}

注意：此自动化仅适用于 {% data variables.product.prodname_vscode_shortname %} Web 客户端，而不适用于 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序或其他受支持的编辑器。

{% endnote %}

## 设置要自动打开的文件

{% data reusables.codespaces.edit-devcontainer-json %}
1. 编辑 `devcontainer.json` 文件，添加属性 `customizations.codespaces.openFiles`。 属性 `customizations` 驻留在文件顶层，位于封闭的 JSON 对象内。 例如：

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   属性 `openFiles` 的值是存储库中一个或多个文件的数组。 路径相对于存储库的根路径（绝对路径不受支持）。 按指定顺序在 Web 客户端中打开文件，数组中的第一个文件显示在编辑器中。
   
1. 保存文件并将更改提交到存储库的所需分支。

## 延伸阅读

- “[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”
