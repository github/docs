---
title: 向 devcontainer.json 文件添加功能
shortTitle: Adding features
intro: 借助这些功能，可以快速将工具、运行时或库添加到开发容器配置。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180825'
---
{% data reusables.codespaces.about-features %} 使用本文中的选项卡可显示上述每一种功能的添加方式的说明。

## 向 `devcontainer.json` 文件添加功能

{% webui %}

1. 导航到 {% data variables.product.prodname_dotcom_the_website %} 上的存储库，找到 `devcontainer.json` 文件，然后单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑文件。
   
   如果还没有 `devcontainer.json` 文件，可以立即创建一个。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)”。
1. 在文件编辑器右侧的“市场”选项卡中，浏览或搜索要添加的功能，然后单击功能的名称。

   ![“市场”选项卡中的 Terraform 功能的屏幕截图，搜索栏中显示“Terra”](/assets/images/help/codespaces/feature-marketplace.png)
3. 在“安装”下，单击代码片段将其复制到剪贴板，然后将代码片段粘贴到 `devcontainer.json` 文件中的 `features` 对象中。

   ![“市场”选项卡的“安装”部分中代码块的屏幕截图](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. 默认情况下，将使用最新版本的功能。 若要选择其他版本或为功能配置其他选项，请展开“选项”下列出的属性查看可用值，然后通过手动编辑 `devcontainer.json` 文件中的对象添加选项。

   ![“市场”选项卡“选项”部分的屏幕截图，展开了“版本”和“tflint”](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. 将更改提交到 `devcontainer.json` 文件。

配置更改将在从存储库创建的新 codespace 中生效。 若要使更改在现有 codespace 中生效，需要将 `devcontainer.json` 文件的更新拉入 codespace，然后重新生成 codespace 的容器。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”。

{% endwebui %}

{% vscode %}

{% note %}

若要在本地工作且未连接到 codespace 时在 {% data variables.product.prodname_vscode_shortname %} 中添加功能，必须安装并启用“开发容器”扩展。 有关该扩展的详细信息，请参阅 [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)。

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. 开始键入“配置”，然后选择“Codespaces:配置开发容器功能”。

   ![命令面板中的“配置 Devcontainer 功能”命令](/assets/images/help/codespaces/codespaces-configure-features.png)

3. 更新功能选择，然后单击“确定”。

   ![容器配置期间的“选择其他功能”菜单](/assets/images/help/codespaces/select-additional-features.png)

4. 如果在 codespace 中操作，右下角将显示一条提示。 若要重新生成容器并将更改应用于你正在使用的 codespace，请单击“立即重新生成”。

   ![命令面板中的“Codespaces: 重新生成容器”](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
