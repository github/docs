---
title: 使用命令行导入 Git 仓库
intro: '{% ifversion fpt %}如果 [GitHub 导入工具](/articles/importing-a-repository-with-github-importer)不适用于你的目的，例如，如果你现有的代码托管在私有网络上，则建议使用命令行导入。{% else %}当你现有的代码托管在私有网络上时，适合使用命令行导入 Git 项目。{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: bd3a5e5ffca38250a74851444f6cac4cbb06eb53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128967'
---
在开始之前，请确保您知道：

- 您的 {% data variables.product.product_name %} 用户名
- 外部存储库的克隆 URL，例如 `https://external-host.com/user/repo.git` 或 `git://external-host.com/user/repo.git`（可能 `external-host.com` 域名前面是 `user@`）

{% tip %}

为便于示范，我们将使用：

- 外部帐户 extuser
- 外部 Git 主机 `https://external-host.com`
- 名为 ghuser 的 {% data variables.product.product_name %} 个人帐户
- {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的存储库 repo.git

{% endtip %}

1. [在 {% data variables.product.product_name %} 上新建存储库](/articles/creating-a-new-repository)。 您将在此新仓库中导入外部 Git 仓库。
2. 在命令行上，使用外部克隆 URL 创建仓库的“裸”克隆。 这会创建数据的完整副本，但没有编辑文件的工作目录，并确保干净、新鲜地导出所有旧数据。
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. 使用“镜像”选项将本地克隆的仓库推送到 {% data variables.product.product_name %}，以确保所有引用（如分支和标记）都复制到导入的仓库。
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. 删除临时本地仓库。
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
