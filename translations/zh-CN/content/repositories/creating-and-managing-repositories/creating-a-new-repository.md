---
title: 创建新仓库
intro: 您可以在个人帐户或者您有足够权限的任何组织中创建新仓库。
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129385'
---
{% tip %}

提示：所有者可以限制组织中的存储库创建权限。 有关详细信息，请参阅“[限制组织中的存储库创建](/articles/restricting-repository-creation-in-your-organization)”。

{% endtip %}

{% tip %}

提示：还可以使用 {% data variables.product.prodname_cli %} 创建存储库。 有关详细信息，请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh repo create`](https://cli.github.com/manual/gh_repo_create)”。

{% endtip %}

{% data reusables.repositories.create_new %}
2. （可选）要使用现有存储库的目录结构和文件创建存储库，请使用“选择模板”下拉列表并选择一个模板存储库。 您将看到由您和您所属组织拥有的模板仓库，或者您以前使用过的模板仓库。 有关详细信息，请参阅“[通过模板创建存储库](/articles/creating-a-repository-from-a-template)”。
  ![“模板”下拉菜单](/assets/images/help/repository/template-drop-down.png)
3. （可选）如果选择使用模板，要在模板中包含来自所有分支的目录结构和文件，而不仅仅是默认分支，请选择“包含所有分支”。
    ![“包含所有分支”复选框](/assets/images/help/repository/include-all-branches.png)
3. 在“Owner（所有者）”下拉菜单中，选择要在其上创建仓库的帐户。
   ![“所有者”下拉菜单](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. 如果您不使用模板，可以使用许多可选项预填充仓库。 如果要将现有仓库导入 {% data variables.product.product_name %}，请不要选择上述任何选项，否则可能会导致合并冲突。 您可以通过用户界面添加或创建新文件，或者选择稍后使用命令行添加新文件。 有关详细信息，请参阅“[使用命令行导入 Git 存储库](/articles/importing-a-git-repository-using-the-command-line/)”、“[将文件添加到存储库](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)”和“[解决合并冲突](/articles/addressing-merge-conflicts/)”。
    - 您可以创建自述文件以介绍您的项目。 有关详细信息，请参阅“[关于自述文件](/articles/about-readmes/)”。
    - 可以创建一个 .gitignore 文件，该文件是一组忽略规则。 有关详细信息，请参阅“[忽略文件](/github/getting-started-with-github/ignoring-files)”。{% ifversion fpt or ghec %}
    - 您可以选择为项目添加软件许可。 有关详细信息，请参阅“[授权存储库](/articles/licensing-a-repository)”。{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. 在生成的 Quick Setup（快速设置）页面底部的“Import code from an old repository（从旧仓库导入代码）”下，您可以选择将项目导入新仓库。 为此，请单击“导入代码”。
{% endif %}

## 延伸阅读

- “[管理对组织存储库的访问权限](/articles/managing-access-to-your-organization-s-repositories)”
- [开源指南](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
