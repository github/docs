---
title: 创建 codespace
intro: 您可以为仓库中的分支创建代码空间以便在线开发。
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106731"
---
## 关于代码空间的创建

可以在 {% data variables.product.prodname_dotcom_the_website %} 上、{% data variables.product.prodname_vscode %} 中或使用 {% data variables.product.prodname_cli %} 创建代码空间。 {% data reusables.codespaces.codespaces-are-personal %}

代码空间与仓库的特定分支相关联，且仓库不能为空。 每个仓库甚至每个分支可创建多个代码空间。

创建代码空间时，需要执行一些步骤并将您连接到开发环境。

- 第 1 步：虚拟机和存储被分配到您的代码空间。
- 第 2 步：创建容器并克隆仓库。
- 第 3 步：您可以连接到代码空间。
- 第 4 步：代码空间继续创建后设置。

有关创建 codespace 时发生的情况的详细信息，请参阅“[深入探讨](/codespaces/getting-started/deep-dive)。”

有关 codespace 生命周期的详细信息，请参阅“[Codespace 生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)。”

如果要对 codespace 使用 Git 挂钩，则应在步骤 4 中使用 [`devcontainer.json` 生命周期脚本](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)（如 `postCreateCommand`）设置挂钩。 由于在克隆存储库之后创建了 codespace 容器，因此在容器映像中配置的任何[ git 模板目录](https://git-scm.com/docs/git-init#_template_directory)将不适用于你的 codespace。 在创建代码空间后，必须改为安装挂钩。 有关使用 `postCreateCommand` 的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的 [`devcontainer.json` 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## 访问 {% data variables.product.prodname_github_codespaces %}

当可以访问 {% data variables.product.prodname_github_codespaces %} 时，你将在查看存储库时在“{% octicon "code" aria-label="The code icon" %} 代码”下拉菜单中看到“Codespaces”选项卡。

在以下情况下，你将有权访问 {% data variables.product.prodname_github_codespaces %}：

满足以下所有条件：
* 你是已启用 {% data variables.product.prodname_codespaces %} 并设置支出限制的组织的成员或外部协作者。
* 组织所有者允许你创建 codespace，费用由组织承担。
* 要为其创建 codespace 的存储库由此组织拥有。

或者同时满足以下两个条件：
* 你在参与适用于个人用户的 {% data variables.product.prodname_codespaces %} beta 版本。
* 你拥有要为其创建 codespace 的存储库，或者它由你是成员或外部协作者的组织所拥有。

在组织中使用 {% data variables.product.prodname_codespaces %} 之前，所有者或帐单管理员必须设定支出限额。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces)”。

组织所有者可以指定谁可以在费用由组织承担的情况下创建和使用 codespace。 组织所有者还可以阻止针对任何 codespace 使用向组织收取费用。 有关详细信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)”。

## 创建 codespace

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，使用“Branch（分支）”下拉菜单选择您要为其创建代码的分支。

   ![分支下拉菜单](/assets/images/help/codespaces/branch-drop-down.png)

1. 单击“{% octicon "code" aria-label="The code icon" %} 代码”按钮，然后单击“codespace”选项卡。

   ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

   如果此存储库的 codespace 可计费，则会在“在 BRANCH 上创建 codespace”按钮下方显示一条消息，告知谁将为 codespace 付费。

1. 使用默认选项或在配置高级选项之后创建 codespace：
 
   * 使用默认选项

      若要使用默认选项创建 codespace，请单击“在分支上创建 codespace”。

      （可选）在单击“在分支上创建 codespace”之前，可以单击按钮一侧的向下箭头以查看将用于 codespace 的计算机类型。

      ![查看默认计算机类型](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      注意：默认情况下，将选择具有对存储库有效的最低资源的计算机类型。

      {% endnote %}

   * **配置选项**

      若要配置 codespace 高级选项（例如其他计算机类型或特定 `devcontainer.json` 文件），请执行以下操作：

      1. 单击“在分支上创建 codespace”按钮一侧的向下箭头，然后单击“配置并创建 codespace”。
      1. 单击“配置并创建 codespace”按钮。
      1. 在 codespace 选项页上，从下拉菜单中选择首选选项。

         ![codespace 选项页](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **说明**
      
         * 可以为选项页添加书签，以便快速创建此存储库和分支的 codespace。
         * [https://github.com/codespaces/new](https://github.com/codespaces/new) 页提供了为任何存储库和分支创建 codespace 的快速方法。 可以通过在浏览器的地址栏中输入 `codespace.new` 来快速访问此页面。
         * 有关 `devcontainer.json` 文件的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”。
         * 有关计算机类型的详细信息，请参阅“[更改 codespace 的计算机类型](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)”。
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. 单击“启动会话”。

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

若要创建新的 codespace，请使用 `gh codespace create` 子命令。 

```shell
gh codespace create 
```

系统会提示你选择存储库。 如果此存储库的 codespace 可计费，则会显示消息，告知谁将为 codespace 付费。 系统将提示你选择分支、开发容器配置文件（如果有多个可用）和计算机类型（如果有多个可用）。

或者，您可以使用标志来指定部分或全部选项：

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

在此示例中，将 `owner/repo` 替换为存储库标识符。 将 `branch` 替换为你希望最初在 codespace 中签出的分支的名称或提交的完整 SHA 哈希。 如果使用 `-r` 标志而不使用 `b` 标志，则从默认分支创建 codespace。

将 `path` 替换为要用于新的 codespace 的开发容器配置文件的路径。 如果省略此标志，并且有多个开发容器文件可用，系统将提示你从列表中选择一个文件。 有关开发容器配置文件的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

将 `machine-type` 替换为可用计算机类型的有效标识符。 标识符是字符串，例如：`basicLinux32gb` 和 `standardLinux32gb`。 可用的计算机类型取决于存储库、个人帐户以及你的位置。 如果输入无效或不可用的计算机类型，则错误消息中将显示可用类型。 如果省略此标志，并且有多个计算机类型可用，系统将提示您从列表中选择一个计算机类型。

有关此命令的选项的完整详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_create)。

{% endcli %}

## 延伸阅读
- “[打开现有 codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace)”
- “[添加‘在 GitHub Codespaces 中打开’锁屏提醒](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)”
