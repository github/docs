---
title: 添加“在 GitHub Codespaces 中打开”锁屏提醒
shortTitle: Add a Codespaces badge
intro: 可以将锁屏提醒添加到存储库中的 Markdown 文件，用户可以单击该文件来创建 codespace。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: d2ed02a205a4a8c3e55deb0b52fdc9ffdb855dc4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108071'
---
## 概述

向 Markdown 文件添加“在 {% data variables.product.prodname_github_codespaces %} 中打开”锁屏提醒可让用户轻松地为存储库创建 codespace。

![自述文件页上 Codespaces 锁屏提醒的屏幕截图](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

创建锁屏提醒时，可以为锁屏提醒将创建的 codespace 选择特定配置选项。

当人们单击锁屏提醒时，他们会进入用于创建 codespace 的高级选项页，其中包含你预先选择的选项。 有关高级选项页的详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

在高级选项页中，用户可以根据需要更改预先选择的设置，然后单击“创建 codespace”。

{% note %}

注意：请注意，如果尚无法访问 {% data variables.product.prodname_github_codespaces %} 的人员单击此锁屏提醒，则会看到 404 消息。

{% endnote %}

## 创建“在 {% data variables.product.prodname_github_codespaces %} 中打开”锁屏提醒

{% data reusables.repositories.navigate-to-repo %}
1. 在存储库名称下，使用“分支”下拉菜单选择要为其创建锁屏提醒的分支。

   ![“分支”下拉菜单的屏幕截图](/assets/images/help/codespaces/branch-drop-down.png)

1. 单击“{% octicon "code" aria-label="The code icon" %} 代码”按钮，然后单击“codespace”选项卡。

   ![“新建 codespace”按钮的屏幕截图](/assets/images/help/codespaces/new-codespace-button.png)

1. 单击“在分支上创建 codespace”按钮一侧的向下箭头，单击“配置并创建 codespace”，然后单击“配置并创建 codespace”按钮  。

   ![“配置并创建 codespace”选项的屏幕截图](/assets/images/help/codespaces/configure-and-create-option.png)

1. 在用于创建 codespace 的高级选项页上，选择要在每个字段中预先选择的值。

   ![高级选项页的屏幕截图](/assets/images/help/codespaces/advanced-options.png)

1. 复制浏览器地址栏中的 URL。
1. 例如，将以下 Markdown 添加到存储库的 `README.md` 文件：

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   例如：

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   在上面的示例中，`0000000` 会是存储库的引用编号。 URL 中的其他详细信息由在高级选项页上的字段中选择的值确定。
